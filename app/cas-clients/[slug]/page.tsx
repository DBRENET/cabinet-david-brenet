import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Target, Lightbulb, TrendingUp, Building2 } from 'lucide-react'

const caseStudiesData: Record<string, {
  sector: string
  type: string
  title: string
  subtitle: string
  context: string
  challenge: string
  intervention: string[]
  results: { metric: string; label: string; detail: string }[]
  learnings: string[]
  tags: string[]
  color: string
  tagColor: string
}> = {
  'agent-sinistres-iard': {
    sector: 'Assurance IARD',
    type: 'Déploiement agent IA',
    title: 'Agent d\'instruction automatique des sinistres dégâts des eaux',
    subtitle: 'De 3 jours à 4,7 heures pour les sinistres simples',
    context: '[À COMPLÉTER — Contexte anonymisé : description de l\'organisation, effectif DSI, volume de sinistres, organisation de la gestion sinistres avant le projet]',
    challenge: '[À COMPLÉTER — Enjeux : délai d\'instruction trop long, gestionnaires surchargés, satisfaction client impactée, pression sur les coûts de gestion]',
    intervention: [
      '[À COMPLÉTER — Phase 1 : cadrage et définition des critères de sinistres simples]',
      '[À COMPLÉTER — Phase 2 : développement de l\'agent Claude avec SDK Anthropic et serveurs MCP]',
      '[À COMPLÉTER — Phase 3 : pilote sur 30 jours avec supervision renforcée]',
      '[À COMPLÉTER — Phase 4 : généralisation et formation des gestionnaires]',
    ],
    results: [
      { metric: '– 85%', label: 'Délai d\'instruction', detail: '[À COMPLÉTER — de 3,2 jours à 4,7 heures en moyenne]' },
      { metric: '91%', label: 'Taux de validation', detail: '[À COMPLÉTER — des recommandations de l\'agent validées sans modification par le gestionnaire]' },
      { metric: '100', label: 'Dossiers/mois', detail: '[À COMPLÉTER — volume traité automatiquement représentant ~55% du total sinistres DDO]' },
    ],
    learnings: [
      'La définition des critères d\'escalade est plus importante que le code de l\'agent',
      'La supervision humaine valorise le travail du gestionnaire plutôt que de le menacer',
      'Les logs exhaustifs sont indispensables pour la conformité et la confiance',
    ],
    tags: ['Sinistres', 'Agents IA', 'MCP', 'Claude API', 'RGPD'],
    color: 'border-cyan-500/30',
    tagColor: 'text-cyan-400',
  },
  'formation-claude-dsi-mutuelle': {
    sector: 'Mutuelle',
    type: 'Formation intra-entreprise',
    title: 'Formation Claude Code & Agents IA pour les équipes IT d\'une mutuelle',
    subtitle: '12 développeurs formés, un agent en production en 6 semaines',
    context: '[À COMPLÉTER — Contexte : DSI d\'une mutuelle de taille intermédiaire, équipe de 12 développeurs, contexte de transformation numérique, volonté d\'intégrer l\'IA dans les pratiques de développement]',
    challenge: '[À COMPLÉTER — Enjeux : productivité en baisse sur les projets de maintenance, documentation insuffisante du legacy, difficulté à recruter des profils IA, pression budgétaire]',
    intervention: [
      '[À COMPLÉTER — Audit des pratiques de développement et des cas d\'usage potentiels]',
      '[À COMPLÉTER — Formation Claude Code 2 jours + Formation Agents & MCP 3 jours]',
      '[À COMPLÉTER — Atelier de sélection du cas d\'usage pilote]',
      '[À COMPLÉTER — Accompagnement sur 6 semaines jusqu\'au premier agent en production]',
    ],
    results: [
      { metric: '12', label: 'Développeurs formés', detail: '[À COMPLÉTER — 2 cohortes de 6, programme adapté aux niveaux]' },
      { metric: '+ 38%', label: 'Productivité mesurée', detail: '[À COMPLÉTER — sur les tâches de maintenance et de revue de code]' },
      { metric: '6 sem.', label: '1er agent en prod', detail: '[À COMPLÉTER — agent de consultation de contrats en production 6 semaines post-formation]' },
    ],
    learnings: [
      'La formation seule ne suffit pas — l\'accompagnement post-formation est déterminant',
      'Le CLAUDE.md partagé est la clé pour l\'adoption en équipe',
      'Les développeurs les plus seniors sont souvent les plus enthousiastes',
    ],
    tags: ['Formation', 'Claude Code', 'SDK Agents', 'DSI', 'Mutuelle'],
    color: 'border-purple-500/30',
    tagColor: 'text-purple-400',
  },
  'gouvernance-ai-act-assureur': {
    sector: 'Assureur vie',
    type: 'Gouvernance & AI Act',
    title: 'Mise en conformité AI Act article 4 et politique d\'usage IA',
    subtitle: '87 collaborateurs formés, politique d\'usage déployée en 3 mois',
    context: '[À COMPLÉTER — Contexte : assureur vie, 450 collaborateurs, utilisation croissante et non encadrée de Claude et ChatGPT en interne, DPO alerté sur les risques RGPD, direction souhaitant structurer l\'approche IA]',
    challenge: '[À COMPLÉTER — Enjeux : shadow AI répandu, données sensibles potentiellement exposées, obligation AI Act art. 4 à respecter, nécessité de créer une culture IA responsable sans bloquer l\'innovation]',
    intervention: [
      '[À COMPLÉTER — Audit de l\'usage IA existant (entretiens + questionnaire)]',
      '[À COMPLÉTER — Rédaction de la politique d\'usage IA avec DPO et direction]',
      '[À COMPLÉTER — Inventaire et classification des systèmes IA utilisés]',
      '[À COMPLÉTER — Formation AI Act art. 4 pour 87 collaborateurs en 3 cohortes]',
      '[À COMPLÉTER — Documentation AI Act des systèmes à risque identifiés]',
    ],
    results: [
      { metric: '87', label: 'Collaborateurs formés', detail: '[À COMPLÉTER — 3 cohortes selon profil : dirigeants, métiers, IT]' },
      { metric: '100%', label: 'Systèmes inventoriés', detail: '[À COMPLÉTER — 23 systèmes IA identifiés, classifiés et documentés]' },
      { metric: '3 mois', label: 'Durée accompagnement', detail: '[À COMPLÉTER — de l\'audit à la politique déployée et équipes formées]' },
    ],
    learnings: [
      'Le shadow AI est toujours plus répandu qu\'on ne le croit initialement',
      'La politique d\'usage doit être co-construite — pas imposée',
      'La formation change radicalement la perception de l\'IA par les équipes',
    ],
    tags: ['AI Act', 'Gouvernance', 'Formation', 'Conformité', 'RGPD'],
    color: 'border-red-500/30',
    tagColor: 'text-red-400',
  },
  'keynote-comex-assurance': {
    sector: 'Groupe d\'assurance',
    type: 'Keynote COMEX',
    title: 'Keynote IA agentique pour le COMEX d\'un groupe assurantiel',
    subtitle: '18 dirigeants, 3 chantiers priorisés, 1er lancé à J+30',
    context: '[À COMPLÉTER — Contexte : groupe assurantiel, COMEX de 18 membres, pression des actionnaires sur la transformation IA, projets IA épars sans vision commune, DSI et direction métiers alignées pour structurer]',
    challenge: '[À COMPLÉTER — Enjeux : manque de vision commune sur l\'IA agentique, projets PoC qui n\'aboutissent pas, COMEX insuffisamment impliqué, nécessité de prioriser et de sponsor les bons chantiers]',
    intervention: [
      '[À COMPLÉTER — Préparation : briefing DSI et DG, analyse du contexte sectoriel, benchmark concurrents]',
      '[À COMPLÉTER — Keynote de 2h : état de l\'art IA agentique, cas d\'usage sectoriels, erreurs à éviter]',
      '[À COMPLÉTER — Atelier de priorisation ½h : grille valeur / risque / délai sur 8 cas d\'usage proposés]',
      '[À COMPLÉTER — Rapport de synthèse et recommandations personnalisées J+7]',
    ],
    results: [
      { metric: '18', label: 'Dirigeants participants', detail: '[À COMPLÉTER — 100% de participation, session très interactive]' },
      { metric: '3', label: 'Chantiers priorisés', detail: '[À COMPLÉTER — consensus sur 3 chantiers prioritaires sur les 8 proposés]' },
      { metric: 'J+30', label: '1er chantier lancé', detail: '[À COMPLÉTER — agent de service client lancé en phase de cadrage 30 jours après la keynote]' },
    ],
    learnings: [
      'Le COMEX a besoin de concret, pas de théorie — les démonstrations live sont décisives',
      'L\'atelier de priorisation crée l\'alignement que les présentations seules ne créent pas',
      'La question du sponsor COMEX est le premier filtre de tout projet IA',
    ],
    tags: ['COMEX', 'Keynote', 'Stratégie', 'IA Agentique', 'Priorisation'],
    color: 'border-amber-500/30',
    tagColor: 'text-amber-400',
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cs = caseStudiesData[params.slug]
  if (!cs) return { title: 'Étude de cas non trouvée' }
  return {
    title: `${cs.title} — Étude de cas | David Brenet`,
    description: cs.subtitle,
    alternates: { canonical: `https://davidbrenet.com/cas-clients/${params.slug}` },
  }
}

export default function CasClientPage({ params }: { params: { slug: string } }) {
  const cs = caseStudiesData[params.slug]

  if (!cs) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-900 pt-20">
        <div className="text-center px-6">
          <div className="text-6xl font-bold text-slate-700 mb-4">404</div>
          <h1 className="text-2xl font-bold text-slate-200 mb-4">Étude de cas non trouvée</h1>
          <Link href="/cas-clients" className="btn-primary">
            <ArrowLeft size={16} /> Retour aux études de cas
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-navy-950 to-navy-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/cas-clients"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-8"
          >
            <ArrowLeft size={15} /> Retour aux études de cas
          </Link>

          <div className="flex items-center gap-2 mb-3">
            <Building2 size={12} className="text-slate-500" />
            <span className="text-xs text-slate-500">{cs.sector}</span>
            <span className="text-slate-700">·</span>
            <span className={`text-xs font-semibold ${cs.tagColor}`}>{cs.type}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight mb-4">
            {cs.title}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-8">{cs.subtitle}</p>

          {/* Results */}
          <div className="grid grid-cols-3 gap-4">
            {cs.results.map(({ metric, label }) => (
              <div key={label} className="card-glass p-4 text-center">
                <div className={`text-2xl font-bold ${cs.tagColor} mb-1`}>{metric}</div>
                <div className="text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

          {/* Contexte */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                <Building2 size={14} className="text-slate-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Contexte</h2>
            </div>
            <div className="card-glass p-6">
              <p className="text-slate-400 leading-relaxed italic">{cs.context}</p>
            </div>
          </div>

          {/* Enjeux */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Target size={14} className="text-amber-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Enjeux & problématique</h2>
            </div>
            <div className="card-glass p-6">
              <p className="text-slate-400 leading-relaxed italic">{cs.challenge}</p>
            </div>
          </div>

          {/* Intervention */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Lightbulb size={14} className="text-cyan-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Mon intervention</h2>
            </div>
            <div className="card-glass p-6">
              <ol className="space-y-3">
                {cs.intervention.map((step, i) => (
                  <li key={i} className="flex gap-4 text-slate-400 italic">
                    <span className="text-slate-700 font-mono text-sm flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Résultats */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp size={14} className="text-emerald-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Résultats mesurés</h2>
            </div>
            <div className="space-y-3">
              {cs.results.map(({ metric, label, detail }) => (
                <div key={label} className="card-glass p-5 flex items-center gap-5">
                  <div className={`text-2xl font-bold ${cs.tagColor} w-20 text-center flex-shrink-0`}>{metric}</div>
                  <div>
                    <div className="font-semibold text-slate-200 text-sm">{label}</div>
                    <div className="text-xs text-slate-500 italic mt-0.5">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enseignements */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Ce que j&apos;en ai appris</h2>
            </div>
            <div className="card-glass p-6">
              <ul className="space-y-3">
                {cs.learnings.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-slate-400 text-sm">
                    <CheckCircle2 size={13} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
            {cs.tags.map((tag) => (
              <span key={tag} className="text-xs text-slate-500 bg-navy-800/60 border border-slate-700/40 rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800/40 border-t border-slate-800/50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Ce projet vous parle ?
          </h2>
          <p className="text-slate-400 mb-6">
            Prenons 30 minutes pour voir ce qui est faisable dans votre contexte.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact?sujet=diagnostic" className="btn-primary">
              Demander un diagnostic <ArrowRight size={16} />
            </Link>
            <Link href="/cas-clients" className="btn-outline">
              Voir d&apos;autres études de cas
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
