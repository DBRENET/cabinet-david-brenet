import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, CheckCircle2, Lightbulb, Shield, Database, Users, TrendingUp, Cpu } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Notre Vision — L\'IA comme transformation organisationnelle',
  description:
    'Pourquoi l\'IA nécessite une approche stratégique, une gouvernance rigoureuse et une architecture maîtrisée. La vision du Cabinet David Brenet sur la transformation par l\'IA.',
  alternates: { canonical: 'https://davidbrenet.com/vision' },
}

const risks = [
  { title: 'Déploiements non gouvernés', desc: 'Des usages IA non encadrés exposent l\'entreprise à des risques réglementaires, sécuritaires et réputationnels.' },
  { title: 'Absence de stratégie', desc: 'Des projets IA dispersés sans alignement stratégique génèrent de la dette technique et des ROI décevants.' },
  { title: 'Données non structurées', desc: 'Sans une architecture data solide, l\'IA ne peut pas délivrer sa valeur potentielle. Les données sont le carburant de l\'IA.' },
  { title: 'Résistance au changement', desc: 'L\'adoption réelle nécessite une conduite du changement structurée et une acculturation de toutes les parties prenantes.' },
]

const principles = [
  {
    icon: TrendingUp,
    title: 'L\'IA, moteur de transformation',
    body: 'L\'Intelligence Artificielle n\'est pas un outil parmi d\'autres. Elle redéfinit fondamentalement les processus métiers, les chaînes de valeur, les modèles organisationnels et les dynamiques concurrentielles. Les organisations qui appréhendent l\'IA comme un simple logiciel passeront à côté de l\'essentiel.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Shield,
    title: 'La gouvernance avant tout',
    body: 'Déployer l\'IA sans gouvernance, c\'est construire sur du sable. La maîtrise des risques (biais, hallucinations, fuites de données, conformité IA Act) est une condition sine qua non d\'une IA industrialisable et durable. Notre approche place la gouvernance au centre, non en périphérie.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Database,
    title: 'L\'architecture comme fondation',
    body: 'Une IA performante repose sur une architecture SI cohérente : données qualifiées, pipelines robustes, API bien conçues, socle cloud maîtrisé. Nous intervenons sur l\'ensemble du stack pour garantir que l\'IA s\'intègre durablement dans votre système d\'information.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: Users,
    title: 'L\'humain au cœur du dispositif',
    body: 'La révolution IA ne se fait pas malgré les collaborateurs, mais avec eux. L\'acculturation, la formation et la conduite du changement sont des leviers aussi critiques que la technologie elle-même. Nous accordons une importance égale à la dimension humaine et technique.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Cpu,
    title: 'La maîtrise technique comme différenciateur',
    body: 'Comprendre les LLM, les architectures RAG, l\'orchestration multi-agents ou les pipelines data n\'est pas réservé aux équipes R&D. Les directions IT et les COMEX doivent s\'approprier ces concepts pour exercer une maîtrise effective de leur transformation IA.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
  },
  {
    icon: Lightbulb,
    title: 'La valeur comme boussole',
    body: 'Chaque projet IA doit être évalué à l\'aune de la valeur qu\'il génère : gain de productivité, amélioration de l\'expérience client, réduction des risques, différenciation concurrentielle. Nous pilotons systématiquement les initiatives IA par les indicateurs de valeur métiers.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
]

const approach = [
  { step: '01', title: 'Diagnostic', desc: 'Audit de maturité IA, cartographie des usages existants et des opportunités, évaluation de la dette technique.' },
  { step: '02', title: 'Stratégie', desc: 'Définition de la roadmap IA, priorisation des cas d\'usage par ROI, choix architecturaux et gouvernance.' },
  { step: '03', title: 'Déploiement', desc: 'Conception et intégration des agents IA, automatisation des processus, intégration dans le SI existant.' },
  { step: '04', title: 'Industrialisation', desc: 'Mise à l\'échelle, pilotage de la valeur, formation des équipes, amélioration continue.' },
]

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Notre Vision</div>
          <div className="cyan-line mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
            L&apos;IA n&apos;est pas un outil.<br />
            <span className="gradient-text">C&apos;est une transformation.</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
            Trop d&apos;organisations abordent l&apos;Intelligence Artificielle comme un projet informatique
            parmi d&apos;autres. Nous pensons qu&apos;il s&apos;agit d&apos;une recomposition profonde des modes
            de travail, des processus et des modèles de création de valeur.
          </p>
        </div>
      </section>

      {/* Risques */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={20} className="text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-100">Les pièges à éviter</h2>
            </div>
            <p className="text-slate-400">Quatre écueils récurrents que nous observons dans les transformations IA non structurées.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {risks.map((risk, i) => (
              <div key={risk.title} className="card-glass p-6 border-amber-500/20">
                <div className="text-amber-500/40 font-bold text-4xl mb-4 font-display">0{i + 1}</div>
                <h3 className="text-slate-200 font-semibold mb-2">{risk.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{risk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principes */}
      <section className="py-24 bg-navy-800/30 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="tag mb-3">Nos convictions</div>
            <div className="cyan-line mx-auto mb-4" />
            <h2 className="section-title mb-4">Six principes fondateurs</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Ces convictions guident chacune de nos interventions et structurent notre approche conseil.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map(({ icon: Icon, title, body, color, bg }) => (
              <div key={title} className="card-glass p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={color} />
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approche */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="tag mb-3">Notre méthode</div>
              <div className="cyan-line mb-5" />
              <h2 className="section-title mb-5">Une approche en quatre temps</h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Structurée, itérative et orientée valeur. Notre méthodologie s&apos;adapte à la maturité
                de chaque organisation tout en garantissant une progression cohérente et maîtrisée.
              </p>
              <Link href="/offres" className="btn-primary">
                Découvrir nos offres <ArrowRight size={16} />
              </Link>
            </div>
            <div className="space-y-4">
              {approach.map(({ step, title, desc }) => (
                <div key={step} className="flex gap-6 card-glass p-6 hover:border-slate-600 transition-colors">
                  <div className="text-4xl font-bold text-cyan-500/30 font-display flex-shrink-0 leading-none">
                    {step}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-100 mb-1.5">{title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-navy-800 to-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-5">
            Partagez-vous cette vision ?
          </h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Discutons de votre contexte et de la manière dont nous pouvons vous accompagner
            dans une transformation IA structurée et durable.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Organiser un échange <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
