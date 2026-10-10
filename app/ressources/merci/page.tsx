import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, BookOpen, Calendar, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Merci — Ressource en route | David Brenet',
  description: 'Votre ressource IA agentique vous a été envoyée par email.',
  robots: { index: false, follow: false },
}

const nextSteps = [
  {
    icon: BookOpen,
    title: 'Lire le guide Claude & IA agentique',
    desc: 'Comprendre l\'écosystème Claude Anthropic et ses applications en assurance.',
    href: '/claude-ia-agentique',
    label: 'Lire le guide',
  },
  {
    icon: Calendar,
    title: 'Regarder les formations disponibles',
    desc: '6 formations intra-entreprise du COMEX aux équipes IT.',
    href: '/formation',
    label: 'Voir les formations',
  },
  {
    icon: ArrowRight,
    title: 'Demander un diagnostic gratuit',
    desc: 'Un échange de 30 minutes pour explorer vos enjeux IA agentique.',
    href: '/contact?sujet=diagnostic',
    label: 'Prendre rendez-vous',
  },
]

export default function MerciPage() {
  return (
    <section className="min-h-screen bg-navy-900 flex items-center justify-center px-6 py-32">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success icon */}
        <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={40} className="text-emerald-400" />
        </div>

        <div className="tag mb-3">C&apos;est parti !</div>
        <h1 className="text-4xl font-bold text-slate-100 mb-4">
          Votre ressource est en route
        </h1>
        <p className="text-slate-400 leading-relaxed mb-3">
          Un email avec le lien de téléchargement vient d&apos;être envoyé à votre adresse.
          Vérifiez votre boîte de réception (et votre dossier spam si besoin).
        </p>
        <p className="text-sm text-slate-500 mb-12">
          Un problème ? Écrivez-moi à{' '}
          <a href="mailto:contact@davidbrenet.com" className="text-cyan-400 hover:underline">
            contact@davidbrenet.com
          </a>
        </p>

        {/* Next steps */}
        <div className="space-y-4 text-left mb-10">
          <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider text-center mb-5">
            En attendant, continuez votre exploration
          </div>
          {nextSteps.map(({ icon: Icon, title, desc, href, label }) => (
            <Link
              key={title}
              href={href}
              className="card-glass p-5 flex items-center gap-5 hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-cyan-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-200 text-sm mb-0.5 group-hover:text-cyan-400 transition-colors">{title}</div>
                <div className="text-xs text-slate-500">{desc}</div>
              </div>
              <ArrowRight size={16} className="text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
            </Link>
          ))}
        </div>

        <Link href="/" className="btn-outline">
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  )
}
