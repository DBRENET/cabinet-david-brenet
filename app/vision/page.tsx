import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, CheckCircle2, Lightbulb, Shield, Database, Users, TrendingUp, Cpu, Bot, Network } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ma Vision — L\'IA agentique au service de l\'assurance',
  description:
    'Ma vision de l\'IA agentique pour l\'assurance et les mutuelles : pourquoi la plupart des projets échouent, ce qu\'il faut changer, et comment passer vraiment en production. David Brenet, expert IA, Niort.',
  alternates: { canonical: 'https://davidbrenet.com/vision' },
}

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Ma vision</div>
          <div className="cyan-line mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
            L&apos;IA agentique n&apos;est pas
            <br />
            <span className="gradient-text">un projet informatique</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            C&apos;est une transformation organisationnelle qui demande clarté stratégique,
            rigueur de gouvernance et capacité d&apos;industrialisation.
            Voici ce que j&apos;observe depuis 23 ans dans l&apos;assurance — et ce que j&apos;en fais.
          </p>
        </div>
      </section>

      {/* Ce que j'observe */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Le diagnostic</div>
          <div className="cyan-line mb-6" />
          <h2 className="text-3xl font-bold text-slate-100 mb-8">
            Pourquoi 80% des projets IA n&apos;aboutissent pas
          </h2>

          <p className="text-slate-400 leading-relaxed mb-6">
            J&apos;ai passé 23 ans dans des DSI d&apos;assureurs et de mutuelles — Groupama,
            Macif Finance Épargne, IMA. J&apos;ai piloté des équipes, porté des projets de
            transformation, et observé de l&apos;intérieur ce qui fonctionne et ce qui échoue.
          </p>
          <p className="text-slate-400 leading-relaxed mb-10">
            Depuis que j&apos;accompagne des organisations dans leur déploiement IA, je retrouve
            les mêmes blocages partout. Ils ne sont pas techniques.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-14">
            {[
              {
                icon: AlertTriangle,
                color: 'text-amber-400',
                bg: 'bg-amber-500/10',
                title: 'Le syndrome du POC permanent',
                body: 'On démontre, on impressionne, et on recommence avec un autre sujet. La question « comment on industrialise ? » est repoussée jusqu\'à ce que le budget soit épuisé et l\'enthousiasme retombé.',
              },
              {
                icon: Database,
                color: 'text-blue-400',
                bg: 'bg-blue-500/10',
                title: 'La donnée, toujours la donnée',
                body: 'L\'IA ne peut pas être meilleure que les données qu\'on lui fournit. Dans l\'assurance, les données sont souvent éparpillées, mal structurées, vieilles. Sans travail sur la donnée, l\'agent IA sera médiocre.',
              },
              {
                icon: Users,
                color: 'text-purple-400',
                bg: 'bg-purple-500/10',
                title: 'L\'organisation pas prête',
                body: 'Déployer un agent IA sans avoir formé les équipes, sans gouvernance, sans sponsor COMEX est la garantie d\'un rejet. La technologie est rarement le problème — l\'adoption l\'est presque toujours.',
              },
              {
                icon: Shield,
                color: 'text-red-400',
                bg: 'bg-red-500/10',
                title: 'La peur qui paralyse',
                body: 'RGPD, LCB-FT, Solvabilité II, AI Act... Dans l\'assurance, le réflexe est souvent de ne rien faire plutôt que de risquer une non-conformité. Pourtant, l\'inaction est elle aussi un risque.',
              },
            ].map(({ icon: Icon, color, bg, title, body }) => (
              <div key={title} className={`card-glass p-6 border border-${color.replace('text-', '')}/20`}>
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon size={20} className={color} />
                </div>
                <h3 className="font-bold text-slate-100 mb-2 text-sm">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ma vision */}
      <section className="py-20 bg-navy-800/40 border-y border-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Ma position</div>
          <div className="cyan-line mb-6" />
          <h2 className="text-3xl font-bold text-slate-100 mb-8">
            Ce en quoi je crois profondément
          </h2>

          <div className="space-y-8">
            {[
              {
                icon: TrendingUp,
                color: 'text-cyan-400',
                title: 'L\'agentique est la prochaine vague de valeur',
                body: 'Les chatbots et la génération de texte ne sont que la surface visible de l\'IA. La vraie valeur est dans les agents qui agissent : qui déclenchent un workflow, instruisent un dossier, surveillent une anomalie, génèrent un rapport réglementaire. C\'est là que l\'assurance peut prendre un avantage concurrentiel durable.',
              },
              {
                icon: Bot,
                color: 'text-blue-400',
                title: 'Claude est la plateforme la plus sérieuse pour l\'entreprise',
                body: 'J\'ai évalué les principales plateformes IA. Claude (Anthropic) se distingue par sa rigueur de conception (Constitutional AI), son écosystème complet (Claude Code, MCP, SDK d\'agents) et sa politique de sécurité adaptée aux données sensibles. C\'est aujourd\'hui ma recommandation principale pour les assureurs.',
              },
              {
                icon: Network,
                color: 'text-emerald-400',
                title: 'La gouvernance doit précéder le déploiement',
                body: 'Je refuse de déployer des agents sans avoir posé les fondations : politique d\'usage, classification des données, supervision humaine, documentation AI Act. Ce n\'est pas de la bureaucratie — c\'est ce qui rend le déploiement durable et industrialisable. Et dans l\'assurance, c\'est aussi une obligation.',
              },
              {
                icon: Lightbulb,
                color: 'text-amber-400',
                title: 'La formation est le levier le plus rapide',
                body: 'Avant même de déployer un agent, former les équipes change la perception, réduit les peurs infondées et fait émerger les meilleurs cas d\'usage. J\'ai vu des organisations transformer leur relation à l\'IA en une seule journée de formation bien conçue.',
              },
              {
                icon: CheckCircle2,
                color: 'text-purple-400',
                title: 'Un interlocuteur unique, du début à la fin',
                body: 'Je ne vends pas des préconisations que d\'autres mettent en œuvre. J\'accompagne de la stratégie au premier agent en production — et si je n\'ai pas les compétences pour une partie du projet, je le dis clairement plutôt que de sous-traiter sans transparence.',
              },
            ].map(({ icon: Icon, color, title, body }) => (
              <div key={title} className="flex gap-5">
                <div className={`w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 mt-1`}>
                  <Icon size={20} className={color} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 mb-2">{title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mon parcours */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Mon parcours</div>
          <div className="cyan-line mb-6" />
          <h2 className="text-3xl font-bold text-slate-100 mb-6">
            Du côté client pendant 23 ans
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            C&apos;est ce qui me différencie de la plupart des consultants IA : j&apos;ai été
            de l&apos;autre côté. J&apos;ai piloté des DSI d&apos;assureur, managé jusqu&apos;à 60 personnes,
            porté des projets de transformation face aux mêmes contraintes réglementaires,
            budgétaires et organisationnelles que mes clients d&apos;aujourd&apos;hui.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            J&apos;enseigne au CNAM, au CESI et à l&apos;Ifpass parce que je crois que
            la pédagogie est une compétence clé pour l&apos;adoption. J&apos;ai écrit deux livres
            aux Éditions ENI parce que vulgariser sans simplifier est l&apos;exercice le plus
            utile que je puisse faire pour le secteur.
          </p>
          <p className="text-slate-400 leading-relaxed mb-10">
            Je suis basé à Niort, capitale des mutuelles françaises. Ce n&apos;est pas un hasard.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Prendre rendez-vous <ArrowRight size={16} />
            </Link>
            <Link href="/cas-clients" className="btn-outline">
              Voir mes études de cas
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
