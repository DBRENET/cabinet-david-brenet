import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Brain, Bot, Sparkles, GraduationCap, Network,
  CheckCircle2, Clock, Users, Target, Shield, Mic2, BookOpen,
  ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nos Offres — Conseil IA, Agents IA, Formation IA & Gouvernance | David Brenet',
  description:
    'Offres du Cabinet David Brenet : conseil stratégique IA, déploiement d\'agents IA, IA générative sécurisée, formation IA dirigeants & équipes IT, architecture data.',
  keywords: [
    'conseil IA',
    'agents IA entreprise',
    'formation IA dirigeants',
    'gouvernance IA',
    'IA générative sécurisée',
    'formation IA COMEX',
  ],
  alternates: { canonical: 'https://davidbrenet.com/offres' },
}

const offers = [
  {
    id: 'conseil',
    icon: Brain,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    title: 'Conseil Stratégique IA',
    tagline: 'Définissez votre cap IA avec rigueur',
    description:
      'Accompagnement des directions générales et IT dans la structuration de leur stratégie IA. De l\'audit de maturité à la feuille de route opérationnelle, nous vous aidons à transformer l\'opportunité IA en avantage concurrentiel durable.',
    services: [
      { title: 'Audit de maturité IA', desc: 'Évaluation structurée de votre niveau de préparation IA : données, culture, processus, outillage.' },
      { title: 'Roadmap IA & priorisation ROI', desc: 'Identification et priorisation des cas d\'usage IA à fort potentiel de valeur.' },
      { title: 'Gouvernance IA', desc: 'Conception du cadre de gouvernance : comités, politiques, indicateurs, escalades.' },
      { title: 'Conformité IA Act & RGPD', desc: 'Accompagnement dans la conformité réglementaire européenne et la gestion des risques.' },
      { title: 'Séminaires COMEX', desc: 'Animation de sessions stratégiques pour embarquer les dirigeants dans la transformation IA.' },
    ],
    deliverables: ['Rapport d\'audit détaillé', 'Roadmap IA priorisée', 'Charte de gouvernance IA', 'Tableau de bord ROI'],
    audience: 'DG, COMEX, DSI, DAF',
    ctaLabel: 'Demander un devis',
  },
  {
    id: 'agents',
    icon: Bot,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    title: 'Déploiement d\'Agents IA',
    tagline: 'Industrialisez l\'IA dans vos processus métiers',
    description:
      'Conception, développement et intégration d\'agents IA métiers dans votre système d\'information. De l\'automatisation de processus à l\'orchestration multi-agents, nous construisons des solutions IA robustes et maintenables.',
    services: [
      { title: 'Conception d\'agents IA métiers', desc: 'Design et développement d\'agents IA autonomes adaptés à vos processus.' },
      { title: 'Orchestration multi-agents', desc: 'Architecture de systèmes multi-agents pour des workflows complexes.' },
      { title: 'RAG sécurisé', desc: 'Retrieval Augmented Generation sur vos données internes, sans fuite d\'information.' },
      { title: 'Intégration LLM dans le SI', desc: 'Connexion sécurisée de modèles LLM à vos applications et API existantes.' },
      { title: 'Automatisation RPA augmentée', desc: 'Modernisation de vos automatisations RPA avec des capacités IA décisionnelles.' },
      { title: 'Assistants IA métiers', desc: 'Chatbots et assistants internes sécurisés, contextualisés à votre secteur.' },
    ],
    deliverables: ['Architecture technique', 'Agents déployés en production', 'Documentation & SLA', 'Formation équipes'],
    audience: 'DSI, Équipes IT, Directions métiers',
    ctaLabel: 'Demander un devis',
  },
  {
    id: 'generative',
    icon: Sparkles,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    title: 'IA Générative & Sécurisation',
    tagline: 'Déployez l\'IA générative sans compromis sur la sécurité',
    description:
      'Encadrement du déploiement de l\'IA générative en entreprise : politique d\'usage, sécurisation des données, charte IA et industrialisation des usages LLM.',
    services: [
      { title: 'Cadre d\'usage IA générative', desc: 'Politique interne d\'usage des outils IA générative (ChatGPT, Copilot, Gemini...).' },
      { title: 'Charte IA entreprise', desc: 'Document structurant les droits, obligations et bonnes pratiques IA pour tous les collaborateurs.' },
      { title: 'Bibliothèque de prompts métier', desc: 'Constitution et structuration d\'une bibliothèque de prompts validés par domaine.' },
      { title: 'Sécurisation des données', desc: 'Analyse des risques de fuite de données et mise en place des garde-fous techniques.' },
      { title: 'Sandbox IA entreprise', desc: 'Environnement IA isolé permettant d\'expérimenter en sécurité avant généralisation.' },
      { title: 'Framework d\'industrialisation', desc: 'Processus de passage à l\'échelle des usages IA validés, avec indicateurs de pilotage.' },
    ],
    deliverables: ['Charte IA interne', 'Politique de sécurité IA', 'Bibliothèque de prompts', 'Plan d\'industrialisation'],
    audience: 'RSSI, DSI, RH, Directions métiers',
    ctaLabel: 'Demander un devis',
  },
  {
    id: 'formation',
    icon: GraduationCap,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    title: 'Formation & Acculturation',
    tagline: 'Dirigeants, managers, équipes IT & métiers',
    description:
      'Programmes de formation IA sur mesure pour toute l\'organisation : de l\'acculturation COMEX/CODIR à la formation technique avancée pour les équipes IT. En présentiel ou à distance, avec des ateliers pratiques et des livrables opérationnels.',
    services: [
      { title: 'Acculturation COMEX / CODIR', desc: 'Sessions de 2h à 1 journée : enjeux stratégiques IA, cas d\'usage sectoriels, gouvernance et risques.' },
      { title: 'Formation managers', desc: 'Identifier les cas d\'usage IA, piloter des projets IA, comprendre les enjeux de gouvernance.' },
      { title: 'Formation équipes IT', desc: 'Agents IA, RAG, industrialisation, sécurité LLM — programmes techniques avancés.' },
      { title: 'Formation managers métiers', desc: 'Acculturation IA pour les responsables de département : repérer et piloter les usages IA.' },
      { title: 'Ateliers cas d\'usage + prototypage', desc: 'Sessions pratiques de co-construction : identifier, prioriser et prototyper des agents IA.' },
      { title: 'Conférences IA stratégiques', desc: 'Interventions en conférence lors d\'événements internes ou externes (1h à demi-journée).' },
    ],
    deliverables: ['Support de cours & kit de mise en pratique', 'Ateliers & exercices corrigés', 'Grille d\'évaluation maturité', 'Plan d\'action 30 / 60 / 90 jours'],
    audience: 'COMEX, CODIR, DSI, Managers, Équipes IT',
    ctaLabel: 'Demander un programme',
  },
  {
    id: 'architecture',
    icon: Network,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    title: 'Architecture & Data',
    tagline: 'Construisez les fondations de votre IA',
    description:
      'Une IA performante repose sur une architecture solide et des données de qualité. Nous intervenons sur la modernisation de votre SI, la structuration de vos données et la mise en place des pipelines nécessaires à l\'exploitation de l\'IA.',
    services: [
      { title: 'Modernisation du SI', desc: 'Audit et refonte de l\'architecture SI vers des patterns contemporains (API, microservices, cloud).' },
      { title: 'Architecture orientée API', desc: 'Conception et mise en œuvre d\'une stratégie API cohérente pour l\'intégration de l\'IA.' },
      { title: 'Structuration Data pour IA', desc: 'Organisation et qualification du patrimoine data en vue d\'une exploitation IA.' },
      { title: 'Pipelines data & exploitation', desc: 'Conception et déploiement de pipelines de données robustes pour alimenter vos modèles IA.' },
      { title: 'Cloud & hybridation', desc: 'Stratégie cloud adaptée à vos contraintes de souveraineté, performance et coût.' },
    ],
    deliverables: ['Schéma d\'architecture cible', 'Plan de migration', 'Catalogue API', 'Architecture data'],
    audience: 'DSI, Architectes, Équipes Data',
    ctaLabel: 'Demander un devis',
  },
]

const engagementModels = [
  {
    icon: Target,
    title: 'Mission ponctuelle',
    desc: 'Intervention ciblée sur un périmètre défini : audit, formation, architecture. Durée : de 2 jours à 4 semaines.',
  },
  {
    icon: Clock,
    title: 'Accompagnement continu',
    desc: 'Partenariat sur la durée pour piloter votre transformation IA. Modèle régie ou forfait mensuel.',
  },
  {
    icon: Users,
    title: 'Co-construction',
    desc: 'Travail en immersion avec vos équipes pour co-construire votre stratégie IA et transférer les compétences.',
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
        <div className="absolute left-1/3 top-1/2 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Nos Offres</div>
          <div className="cyan-line mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
            Conseil, Formation &amp; Déploiement IA<br />
            <span className="gradient-text">sur mesure &amp; à forte valeur</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Du diagnostic stratégique au déploiement opérationnel, en passant par la formation
            de vos équipes — une couverture complète du cycle de transformation IA.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {['Conseil', 'Agents IA', 'IA Générative', 'Formation', 'Architecture'].map((label, i) => {
              const ids = ['conseil', 'agents', 'generative', 'formation', 'architecture']
              return (
                <a
                  key={label}
                  href={`#${ids[i]}`}
                  className="text-xs font-medium text-slate-400 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/50 px-3 py-1.5 rounded-full transition-colors"
                >
                  {label}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Offres détaillées ──────────────────────────── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
          {offers.map(({ id, icon: Icon, color, bg, border, title, tagline, description, services, deliverables, audience, ctaLabel }) => (
            <div key={id} id={id} className={`card-glass border ${border} overflow-hidden scroll-mt-24`}>

              {/* Header */}
              <div className="p-8 border-b border-slate-800/50 bg-gradient-to-r from-slate-900/50 to-transparent">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={26} className={color} />
                  </div>
                  <div>
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
                  <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5">Prestations incluses</h3>
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
                    href={`/contact?offre=${id}`}
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

      {/* ── Bandeau Enseignement supérieur ─────────────── */}
      <section className="py-14 bg-navy-800/40 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">

            {/* Texte principal */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={18} className="text-emerald-400" />
                </div>
                <div>
                  <div className="tag text-emerald-400">Enseignement supérieur</div>
                  <h2 className="text-xl font-bold text-slate-100 leading-tight mt-0.5">
                    Enseignement supérieur &amp; interventions écoles
                  </h2>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Enseignant au <span className="text-slate-200 font-medium">CNAM</span>,{' '}
                <span className="text-slate-200 font-medium">CESI</span> et{' '}
                <span className="text-slate-200 font-medium">Ifpass</span>&nbsp;: modules IA,
                data, systèmes d&apos;information, programmation, et accompagnement mémoires/soutenances.
              </p>

              {/* Partenaires */}
              <div className="grid sm:grid-cols-3 gap-4">
                {academicPartners.map(({ name, detail }) => (
                  <div key={name} className="card-glass p-4 border-emerald-500/20">
                    <div className="font-bold text-emerald-400 text-sm mb-1">{name}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 lg:pt-2">
              <div className="card-glass p-6 border-emerald-500/20">
                <Mic2 size={20} className="text-emerald-400 mb-3" />
                <h3 className="font-semibold text-slate-100 mb-2 text-sm">
                  Inviter pour une conférence
                </h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Intervention en amphithéâtre, journée thématique ou événement professionnel.
                </p>
                <Link
                  href="/contact?sujet=conference"
                  className="btn-primary text-sm w-full justify-center"
                >
                  Inviter pour une conférence
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className="card-glass p-6 border-emerald-500/20">
                <GraduationCap size={20} className="text-emerald-400 mb-3" />
                <h3 className="font-semibold text-slate-100 mb-2 text-sm">
                  Demander un programme de cours
                </h3>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Module IA sur mesure pour votre formation ou cursus académique.
                </p>
                <Link
                  href="/contact?sujet=programme-cours"
                  className="btn-outline text-sm w-full justify-center"
                >
                  Demander un programme
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modèles d'engagement ───────────────────────── */}
      <section className="py-20 bg-navy-900 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="tag mb-3">Modèles d&apos;engagement</div>
            <h2 className="section-title mb-4">Flexibles &amp; adaptés à vos besoins</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Trois modes d&apos;intervention pour s&apos;adapter à votre contexte et vos contraintes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map(({ icon: IconEng, title, desc }) => (
              <div key={title} className="card-glass p-8 text-center hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-5">
                  <IconEng size={22} className="text-cyan-400" />
                </div>
                <h3 className="font-bold text-slate-100 mb-3">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-5">
            Vous ne trouvez pas ce que vous cherchez ?
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Chaque organisation est unique. Décrivez-nous votre besoin et nous construirons
            une proposition sur mesure adaptée à votre contexte.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Décrire mon besoin <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
