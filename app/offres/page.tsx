import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Bot, GraduationCap, Network,
  CheckCircle2, Clock, Users, Target, Mic2, BookOpen,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mes Offres — Conseil IA Agentique, Formation Claude & Déploiement Agents | David Brenet',
  description:
    'Mes offres pour les assureurs et mutuelles : keynote COMEX IA agentique, formation intra Claude & agents, diagnostic maturité agentique, déploiement d\'agents Claude. David Brenet, Niort.',
  keywords: [
    'conseil IA agentique assurance',
    'formation Claude entreprise',
    'déploiement agents IA assurance',
    'diagnostic maturité IA',
    'séminaire COMEX IA',
    'formation AI Act article 4',
    'consultant IA Niort',
  ],
  alternates: { canonical: 'https://davidbrenet.com/offres' },
}

const offers = [
  {
    id: 'keynote',
    icon: Mic2,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    badge: 'Séminaire ou keynote',
    title: 'COMEX « IA agentique »',
    tagline: 'Embarquer votre direction en une demi-journée',
    description:
      'Une intervention sur mesure pour votre comité de direction. Je présente les enjeux de l\'IA agentique pour l\'assurance, les cas d\'usage prioritaires de votre secteur, les risques réels (et ceux qui sont surestimés), et les premières décisions à prendre.',
    services: [
      { title: 'Keynote d\'ouverture ou clôture', desc: 'Format 45 min à 1h30 — pour une conférence interne, un séminaire ou un événement sectoriel.' },
      { title: 'Atelier COMEX / CODIR', desc: 'Demi-journée interactive avec questions-réponses et cartographie des enjeux pour votre organisation.' },
      { title: 'Table ronde dirigeants', desc: 'Animation d\'une table ronde sur l\'IA agentique pour votre secteur, avec intervenants internes ou externes.' },
      { title: 'Support personnalisé', desc: 'Deck adapté à votre contexte (assurance, mutuelle, bancassurance, prévoyance) avec vos cas d\'usage.' },
    ],
    deliverables: ['Support de présentation personnalisé', 'Synthèse des échanges', 'Recommandations premières étapes', 'Ressources pour aller plus loin'],
    audience: 'COMEX, CODIR, CA, Direction générale',
    ctaLabel: 'Organiser un séminaire',
  },
  {
    id: 'formation',
    icon: GraduationCap,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    badge: 'Formation intra ou inter',
    title: 'Claude & Agents IA',
    tagline: 'Un catalogue de 6 formations certifiantes',
    description:
      'Des formations conçues pour les équipes des assureurs et mutuelles, de la demi-journée pour les dirigeants aux 3 jours pour les équipes IT. Chaque formation est dispensée en présentiel, en distanciel ou en format mixte, avec un programme adapté à votre contexte sectoriel.',
    services: [
      { title: 'Claude pour les managers et équipes métiers (1 jour)', desc: 'Usages avancés, projets, skills, sécurité des données — sans prérequis technique.' },
      { title: 'Claude Code pour les équipes IT (2 jours)', desc: 'Workflows, revue de code, tests, sécurité, gouvernance — pour les développeurs et architectes.' },
      { title: 'Concevoir et déployer des agents avec Claude et MCP (3 jours)', desc: 'Architecture, SDK, Model Context Protocol, mise en production — atelier fil rouge assurance.' },
      { title: 'IA agentique pour COMEX / CODIR (½ journée)', desc: 'Comprendre l\'agentique, les enjeux et les décisions à prendre — pour les dirigeants.' },
      { title: 'AI Act & gouvernance de l\'IA agentique (1 jour)', desc: 'Article 4, obligations de formation, cartographie des risques, documentation.' },
      { title: 'Atelier cas d\'usage & prototypage (1 jour)', desc: 'Identifier, prioriser et prototyper un premier agent IA — équipe mixte métier + IT.' },
    ],
    deliverables: ['Attestation de formation', 'Supports de cours HD', 'Kit de mise en pratique', 'Accès aux ressources post-formation'],
    audience: 'DSI, Managers, Équipes IT, Équipes métiers',
    ctaLabel: 'Voir le catalogue complet',
    ctaHref: '/formation',
  },
  {
    id: 'diagnostic',
    icon: Target,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    badge: 'Diagnostic & conseil',
    title: 'Maturité & feuille de route agentique',
    tagline: 'Savoir où vous êtes, décider par où commencer',
    description:
      'Un diagnostic structuré pour évaluer votre niveau de maturité IA agentique, identifier les cas d\'usage à fort potentiel et construire une feuille de route réaliste et priorisée. Je l\'ai conçu en tenant compte des contraintes réelles des DSI d\'assureurs : SI legacy, réglementation, compétences disponibles.',
    services: [
      { title: 'Grille de maturité complétée', desc: '5 dimensions évaluées : données, infrastructure, compétences, gouvernance, expérience IA.' },
      { title: 'Cartographie des cas d\'usage', desc: 'Identification et scoring des cas d\'usage IA agentique pour votre organisation.' },
      { title: 'Analyse des contraintes', desc: 'Réglementation applicable, SI existant, dépendances, risques spécifiques à votre contexte.' },
      { title: 'Feuille de route agentique', desc: 'Plan sur 12 mois : Quick Wins, projets structurants, ressources nécessaires.' },
    ],
    deliverables: ['Rapport de diagnostic (30-50 pages)', 'Grille de maturité commentée', 'Feuille de route priorisée', 'Restitution dirigeants (1h)'],
    audience: 'DSI, Direction générale, COMEX',
    ctaLabel: 'Demander un diagnostic',
  },
  {
    id: 'deploiement',
    icon: Bot,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    badge: 'Accompagnement projet',
    title: 'Déploiement d\'agents Claude',
    tagline: 'Du premier agent en production à l\'industrialisation',
    description:
      'J\'accompagne vos équipes de la conception à la mise en production du premier agent Claude. De l\'architecture technique à la formation des équipes en passant par la gouvernance et la documentation AI Act — un accompagnement complet sur un périmètre ciblé.',
    services: [
      { title: 'Architecture de l\'agent', desc: 'Choix du pattern (ReAct, multi-agents, RAG-agent), définition des outils, politique de supervision humaine.' },
      { title: 'Connexion via MCP', desc: 'Intégration de l\'agent à vos outils métiers (API, bases de données, applications) via le Model Context Protocol.' },
      { title: 'Développement avec le SDK d\'agents Claude', desc: 'Construction de l\'agent, tests, gestion des erreurs, logging et observabilité.' },
      { title: 'Pilote et mise en production', desc: 'Déploiement restreint, collecte de métriques, correction, passage à l\'échelle.' },
      { title: 'Documentation et gouvernance', desc: 'Documentation technique, politique d\'usage, fiches AI Act, formation des équipes opérationnelles.' },
    ],
    deliverables: ['Agent en production', 'Architecture documentée', 'Documentation AI Act', 'Formation équipes opérationnelles'],
    audience: 'DSI, Architectes, Équipes IT, Directions métiers',
    ctaLabel: 'Discuter de mon projet',
  },
]

const academicPartners = [
  { name: 'CNAM', detail: 'Enseignant depuis 2021 — Méthodologie SI, Data, Programmation, accompagnement mémoires & soutenances ingénieur EICNAM' },
  { name: 'CESI', detail: 'Enseignant depuis 2024 — Modules IA, systèmes d\'information, profils Masters & Ingénieurs DevSecOps' },
  { name: 'Ifpass', detail: 'Formateur depuis 2022 — Masters assurance, IA, digitalisation, management du risque' },
]

export default function OffresPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Mes offres</div>
          <div className="cyan-line mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
            Quatre façons de passer<br />
            <span className="gradient-text">de l&apos;idée à l&apos;agent en production</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Des engagements clairs, des livrables précis, un seul interlocuteur qui connaît
            l&apos;assurance et les mutuelles de l&apos;intérieur.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { label: 'Keynote COMEX', id: 'keynote' },
              { label: 'Formation Claude & agents', id: 'formation' },
              { label: 'Diagnostic maturité', id: 'diagnostic' },
              { label: 'Déploiement agents', id: 'deploiement' },
            ].map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-xs font-medium text-slate-400 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/50 px-3 py-1.5 rounded-full transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Offres ────────────────────────────────────── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          {offers.map(({ id, icon: Icon, color, bg, border, badge, title, tagline, description, services, deliverables, audience, ctaLabel, ctaHref }) => (
            <div key={id} id={id} className={`card-glass border ${border} overflow-hidden scroll-mt-24`}>

              {/* Header */}
              <div className="p-8 border-b border-slate-800/50 bg-gradient-to-r from-slate-900/50 to-transparent">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={26} className={color} />
                  </div>
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-wider ${color} mb-1`}>{badge}</div>
                    <h2 className="text-2xl font-bold text-slate-100 leading-tight">{title}</h2>
                    <p className={`text-sm font-medium mt-1 ${color}`}>{tagline}</p>
                  </div>
                  <div className="sm:ml-auto flex items-center gap-2 text-xs text-slate-500 sm:text-right">
                    <Users size={13} />
                    <span>{audience}</span>
                  </div>
                </div>
                <p className="text-slate-400 mt-4 leading-relaxed max-w-3xl">{description}</p>
              </div>

              {/* Body */}
              <div className="p-8 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5">Ce que j&apos;inclus</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {services.map(({ title: st, desc }) => (
                      <div key={st} className="flex gap-3">
                        <CheckCircle2 size={15} className={`${color} mt-0.5 flex-shrink-0`} />
                        <div>
                          <div className="text-sm font-medium text-slate-200">{st}</div>
                          <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5">Livrables</h3>
                  <ul className="space-y-3 mb-8">
                    {deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-slate-300">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${color.replace('text-', 'bg-')}`} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={ctaHref ?? `/contact?offre=${id}`}
                    className="btn-primary w-full justify-center text-sm"
                  >
                    {ctaLabel}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Enseignement supérieur ─────────────────────── */}
      <section className="py-14 bg-navy-800/40 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={18} className="text-emerald-400" />
                </div>
                <div>
                  <div className="tag text-emerald-400">Enseignement supérieur</div>
                  <h2 className="text-xl font-bold text-slate-100 leading-tight mt-0.5">
                    J&apos;enseigne également en école et à l&apos;université
                  </h2>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Enseignant au <span className="text-slate-200 font-medium">CNAM</span>,{' '}
                <span className="text-slate-200 font-medium">CESI</span> et{' '}
                <span className="text-slate-200 font-medium">Ifpass</span> : modules IA,
                data, systèmes d&apos;information, programmation, et accompagnement mémoires/soutenances.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {academicPartners.map(({ name, detail }) => (
                  <div key={name} className="card-glass p-4 border-emerald-500/20">
                    <div className="font-bold text-emerald-400 text-sm mb-1">{name}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{detail}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:pt-2">
              <div className="card-glass p-6 border-emerald-500/20">
                <Mic2 size={20} className="text-emerald-400 mb-3" />
                <h3 className="font-semibold text-slate-100 mb-2 text-sm">Inviter pour une conférence</h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Intervention en amphithéâtre, journée thématique ou événement professionnel.
                </p>
                <Link href="/contact" className="btn-primary text-sm w-full justify-center">
                  M&apos;inviter <ArrowRight size={14} />
                </Link>
              </div>
              <div className="card-glass p-6 border-emerald-500/20">
                <Network size={20} className="text-emerald-400 mb-3" />
                <h3 className="font-semibold text-slate-100 mb-2 text-sm">Module IA sur mesure</h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Programme IA agentique adapté à votre cursus académique.
                </p>
                <Link href="/contact" className="btn-outline text-sm w-full justify-center">
                  Demander un programme <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-5">
            Vous ne savez pas par où commencer ?
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Le diagnostic de maturité agentique est souvent la meilleure première étape.
            Un appel de 30 minutes suffit pour savoir si c&apos;est pertinent pour vous.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Prendre rendez-vous <ArrowRight size={18} />
            </Link>
            <Link href="/ressources" className="btn-outline text-base px-8 py-4">
              Télécharger la grille de maturité
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
