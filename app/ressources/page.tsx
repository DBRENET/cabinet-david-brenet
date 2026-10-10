'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Download, CheckCircle2, FileText, List, Lightbulb, Lock, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'

const resources = [
  {
    id: 'grille-maturite',
    slug: 'grille-maturite-ia-agentique',
    icon: List,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    badge: 'Le plus téléchargé',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    title: 'Grille de maturité IA agentique',
    subtitle: 'Évaluez votre organisation en 20 minutes',
    description: 'Une grille d\'évaluation structurée pour diagnostiquer la maturité IA agentique de votre organisation sur 5 dimensions : données, SI, équipes, gouvernance et cas d\'usage. Avec score et recommandations par niveau.',
    pages: '8 pages',
    format: 'PDF + Excel',
    points: [
      '5 dimensions d\'évaluation avec critères détaillés',
      'Score de maturité de 0 à 5 par dimension',
      'Recommandations selon votre niveau',
      'Plan d\'action prioritaire personnalisable',
      'Version Excel pour complétion en équipe',
    ],
    color_light: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    id: 'checklist-ai-act',
    slug: 'checklist-ai-act-article-4',
    icon: FileText,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    badge: 'Réglementaire',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    title: 'Check-list AI Act article 4',
    subtitle: 'Préparez vos obligations de formation',
    description: 'La check-list opérationnelle pour préparer la conformité article 4 du Règlement IA (obligation de formation IA pour le personnel). Ce qu\'il faut faire, qui est concerné, comment documenter et à quelle échéance.',
    pages: '6 pages',
    format: 'PDF',
    points: [
      'Synthèse de l\'article 4 en langage praticien',
      'Qui est concerné dans votre organisation',
      'Ce que doit couvrir la formation obligatoire',
      'Comment documenter la conformité',
      'Template d\'attestation de formation inclus',
    ],
    color_light: 'from-red-500/15 to-orange-500/8',
  },
  {
    id: '10-cas-usage',
    slug: '10-cas-usage-agents-assurance',
    icon: Lightbulb,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    badge: 'Concret',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    title: '10 cas d\'usage agentiques en assurance',
    subtitle: 'Les cas d\'usage qui créent vraiment de la valeur',
    description: 'Une analyse détaillée de 10 cas d\'usage d\'agents IA à fort potentiel pour l\'assurance et les mutuelles. Pour chaque cas : description, architecture simplifiée, prérequis, valeur attendue et complexité de mise en œuvre.',
    pages: '12 pages',
    format: 'PDF illustré',
    points: [
      '10 cas d\'usage analysés en profondeur',
      'Matrice valeur / complexité pour chaque cas',
      'Architecture simplifiée de l\'agent',
      'Prérequis SI et données',
      'Estimation de délai de mise en œuvre',
    ],
    color_light: 'from-emerald-500/15 to-cyan-500/8',
  },
]

function ResourceForm({ resource }: { resource: typeof resources[0] }) {
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, lastName, company, role, resource: resource.slug }),
      })
      if (!res.ok) throw new Error()
      router.push(`/ressources/merci?r=${resource.id}`)
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full bg-navy-800/80 border border-slate-700/60 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500 outline-none transition-colors"

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5">
      <div className="grid grid-cols-2 gap-2.5">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Prénom"
          required
          className={inputClass}
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Nom"
          required
          className={inputClass}
        />
      </div>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Entreprise"
        className={inputClass}
      />
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Fonction (ex : DSI, DRH, Directeur...)"
        className={inputClass}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="votre@email.fr"
        required
        className={inputClass}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center text-sm disabled:opacity-60"
      >
        {status === 'loading' ? 'Envoi…' : (
          <>
            <Download size={15} />
            Télécharger gratuitement
          </>
        )}
      </button>
      {status === 'error' && (
        <p className="text-xs text-red-400">Erreur — réessayez ou contactez brenet.david@gmail.com</p>
      )}
      <div className="flex items-center gap-1.5 text-xs text-slate-600">
        <Lock size={10} />
        Aucun spam. Désinscription en 1 clic.
      </div>
    </form>
  )
}

export default function RessourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Ressources gratuites</div>
          <div className="cyan-line mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
            3 outils gratuits<br />
            <span className="gradient-text">pour passer à l&apos;action</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Des ressources pratiques pour évaluer votre maturité IA agentique, préparer
            votre conformité AI Act et identifier vos meilleurs cas d&apos;usage.
            Sans engagement, sans spam.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-10">
          {resources.map((r, i) => {
            const Icon = r.icon
            return (
              <div key={r.id} className={`card-glass border ${r.border} overflow-hidden`}>
                <div className={`grid lg:grid-cols-5 gap-0`}>
                  {/* Info — 3 cols */}
                  <div className={`lg:col-span-3 p-8 bg-gradient-to-br ${r.color_light}`}>
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-xl ${r.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={22} className={r.color} />
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-2 mb-1">
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${r.badgeColor}`}>{r.badge}</span>
                          <span className="text-xs text-slate-500">{r.pages} • {r.format}</span>
                        </div>
                        <h2 className="text-xl font-bold text-slate-100 leading-tight">{r.title}</h2>
                        <p className={`text-sm mt-0.5 ${r.color}`}>{r.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed mb-6">{r.description}</p>

                    <div className="space-y-2">
                      {r.points.map((p) => (
                        <div key={p} className="flex items-start gap-2 text-sm text-slate-300">
                          <Star size={11} className={`${r.color} mt-0.5 flex-shrink-0`} />
                          {p}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Form — 2 cols */}
                  <div className="lg:col-span-2 p-8 bg-navy-900/80 flex flex-col justify-center">
                    <h3 className="font-bold text-slate-100 mb-2">
                      Recevoir la ressource gratuitement
                    </h3>
                    <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                      Renseignez vos coordonnées. Vous recevrez le lien de téléchargement
                      immédiatement par email.
                    </p>
                    <ResourceForm resource={r} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Promesse */}
      <section className="py-16 bg-navy-800/40 border-t border-slate-800/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Pourquoi ces ressources sont gratuites
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Je crois que le meilleur moyen de montrer mon expertise est de la partager.
            Ces outils sont ceux que j&apos;utilise réellement avec mes clients.
            Si ils vous sont utiles, on aura peut-être l&apos;occasion de travailler ensemble.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/formation" className="btn-primary">
              Voir les formations <ArrowRight size={16} />
            </Link>
            <Link href="/contact?sujet=diagnostic" className="btn-outline">
              Demander un diagnostic
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
