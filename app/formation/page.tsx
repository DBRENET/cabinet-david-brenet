import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, GraduationCap, Mic2, Users, BookOpen,
  Brain, Bot, Shield, Cpu, BarChart3, Award, Clock, Target,
} from 'lucide-react'
import { TrustedBy } from '@/components/TrustedBy'

export const metadata: Metadata = {
  title: 'Formation IA — Entreprises & Grandes Écoles | David Brenet',
  description:
    'Formations IA sur mesure : acculturation COMEX, formation équipes IT (agents IA, RAG, LLM), managers métiers et enseignement supérieur (CNAM, CESI, Ifpass). David Brenet, expert IA et formateur.',
  keywords: [
    'formation IA entreprise',
    'formation IA dirigeants COMEX',
    'formation agents IA',
    'formation RAG LLM',
    'acculturation IA',
    'conférences IA',
    'enseignement IA supérieur',
    'David Brenet formateur IA',
  ],
  alternates: { canonical: 'https://davidbrenet.com/formation' },
}

/* ─── Données ─────────────────────────────────────────── */

const entrepriseProgrammes = [
  {
    audience: 'COMEX / CODIR',
    icon: Users,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    duration: '2h à 1 journée',
    description: 'Session de sensibilisation stratégique pour les dirigeants. Comprendre les enjeux IA, les opportunités sectorielles, les risques et le cadre de gouvernance adapté à votre organisation.',
    modules: [
      'L\'IA en 2026 : état de l\'art et tendances',
      'Ce que l\'IA peut (et ne peut pas) faire pour vous',
      'Cas d\'usage sectoriels et retours d\'expérience',
      'Risques, gouvernance et IA Act',
      'Feuille de route : par où commencer ?',
    ],
    cta: 'Organiser un séminaire COMEX',
    ctaHref: '/contact?sujet=formation-comex',
  },
  {
    audience: 'Managers & Cadres métiers',
    icon: Brain,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    duration: '1 à 2 journées',
    description: 'Formation opérationnelle pour les managers : identifier les opportunités IA dans leur domaine, piloter des projets IA, interagir efficacement avec les équipes techniques et mesurer la valeur créée.',
    modules: [
      'Cartographie des cas d\'usage IA dans votre métier',
      'Comment piloter un projet IA ?',
      'IA générative : usages et bonnes pratiques',
      'Gouvernance et gestion des risques',
      'Atelier : priorisation de cas d\'usage',
    ],
    cta: 'Demander ce programme',
    ctaHref: '/contact?sujet=formation-managers',
  },
  {
    audience: 'Équipes IT & Ingénieurs',
    icon: Cpu,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    duration: '2 à 5 journées',
    description: 'Formation technique avancée pour les équipes IT : conception d\'agents IA, architecture RAG, intégration LLM en production, sécurisation et industrialisation. Ateliers de prototypage inclus.',
    modules: [
      'LLM en production : API, prompting, fine-tuning',
      'Architecture RAG sécurisée',
      'Conception et déploiement d\'agents IA',
      'Orchestration multi-agents (LangGraph, CrewAI…)',
      'Sécurité IA : données, prompts, conformité',
      'MLOps & industrialisation IA',
      'Atelier : prototypage d\'un agent métier',
    ],
    cta: 'Demander ce programme',
    ctaHref: '/contact?sujet=formation-it',
  },
  {
    audience: 'Ateliers Cas d\'Usage & Prototypage',
    icon: Target,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    duration: 'Demi-journée à 1 journée',
    description: 'Sessions pratiques de co-construction : identifier vos meilleurs cas d\'usage IA, les prioriser par valeur et complexité, puis prototyper rapidement avec vos équipes mixtes (métier + IT).',
    modules: [
      'Identification collaborative des cas d\'usage',
      'Grille de priorisation valeur / faisabilité',
      'Prototypage guidé d\'un agent IA en équipe',
      'Critères de passage en production',
      'Plan d\'action et responsables',
    ],
    cta: 'Organiser un atelier',
    ctaHref: '/contact?sujet=atelier-cas-usage',
  },
]

const academicModules = [
  {
    code: 'IA-01',
    title: 'Fondamentaux de l\'Intelligence Artificielle',
    level: 'L3 — Master 1',
    duration: '15–30h',
    desc: 'Machine learning, deep learning, NLP, vision par ordinateur. Cours magistral + TD.',
  },
  {
    code: 'IA-02',
    title: 'IA Générative & LLM',
    level: 'Master — Ingénieur',
    duration: '15–20h',
    desc: 'Architecture Transformer, GPT, prompting avancé, RAG, cas d\'usage professionnels.',
  },
  {
    code: 'IA-03',
    title: 'Agents IA & Automatisation',
    level: 'Master — Ingénieur',
    duration: '20–30h',
    desc: 'Conception d\'agents, orchestration, intégration API, sécurité. Projet fil rouge.',
  },
  {
    code: 'SI-01',
    title: 'Systèmes d\'Information & Data',
    level: 'L3 — Master',
    duration: '20–30h',
    desc: 'Architecture SI, bases de données, pipelines data, gouvernance et modélisation.',
  },
  {
    code: 'DEV-01',
    title: 'Paradigmes de programmation',
    level: 'L3 — Master 1',
    duration: '15–20h',
    desc: 'Python, orienté objet, fonctionnel, design patterns. Appliqué aux systèmes IA.',
  },
  {
    code: 'MEM-01',
    title: 'Accompagnement mémoires & soutenances',
    level: 'Master — EICNAM',
    duration: 'Sur mesure',
    desc: 'Rédaction académique, méthodologie de recherche, préparation aux soutenances d\'ingénieur.',
  },
]

const deliverables = [
  { icon: BookOpen, label: 'Support de cours & slides HD' },
  { icon: Target, label: 'Kit de mise en pratique' },
  { icon: BarChart3, label: 'Grille d\'évaluation maturité IA' },
  { icon: Clock, label: 'Plan d\'action 30 / 60 / 90 jours' },
  { icon: Award, label: 'Attestation de formation' },
  { icon: CheckCircle2, label: 'Ressources pédagogiques' },
]

const schools = [
  {
    name: 'CNAM',
    fullName: 'Conservatoire National des Arts et Métiers',
    since: 'Depuis 2021',
    levels: 'L3 → Ingénieur EICNAM',
    modules: 'Méthodologie SI, Data, Programmation, Accompagnement mémoires',
  },
  {
    name: 'CESI',
    fullName: 'CESI École d\'Ingénieurs',
    since: 'Depuis 2024',
    levels: 'Master — Ingénieurs DevSecOps',
    modules: 'Intelligence Artificielle, Systèmes d\'information',
  },
  {
    name: 'Ifpass',
    fullName: 'Institut de Formation de la Profession de l\'Assurance',
    since: 'Depuis 2022',
    levels: 'BTS → Master',
    modules: 'IA & assurance, Digitalisation, Conduite de projets',
  },
]

/* ─── Page ─────────────────────────────────────────────── */

export default function FormationPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag text-emerald-400 mb-3">Formation & Conférences IA</div>
          <div className="w-12 h-0.5 bg-emerald-500 mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
            Former vos équipes à l&apos;IA,<br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              en entreprise &amp; en école
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
            Des programmes adaptés à chaque public — de l&apos;acculturation COMEX à la formation
            technique avancée — en présentiel ou à distance, en entreprise ou en grande école.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact?sujet=formation" className="btn-primary text-base px-8 py-4">
              Demander un programme
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact?sujet=conference" className="inline-flex items-center gap-2 border border-emerald-500/50 hover:border-emerald-400 text-emerald-400 hover:text-emerald-300 font-medium px-8 py-4 rounded-lg transition-all duration-200 text-base">
              <Mic2 size={18} />
              Inviter pour une conférence
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 1 : Formation entreprise ──────────── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Users size={18} className="text-blue-400" />
              </div>
              <div>
                <div className="tag text-blue-400">Public 1</div>
                <h2 className="text-3xl font-bold text-slate-100">Formation en entreprise</h2>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              Quatre programmes distincts selon votre public interne, du dirigeant à l&apos;ingénieur,
              tous orientés vers l&apos;application concrète dans votre contexte métier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {entrepriseProgrammes.map(({ audience, icon: Icon, color, bg, border, duration, description, modules, cta, ctaHref }) => (
              <div key={audience} className={`card-glass border ${border} p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col`}>
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} className={color} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 leading-tight">{audience}</h3>
                    <div className={`text-xs font-medium mt-1 flex items-center gap-1.5 ${color}`}>
                      <Clock size={11} />
                      {duration}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-5">{description}</p>

                <div className="flex-1 mb-6">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Modules couverts</div>
                  <ul className="space-y-2">
                    {modules.map((m) => (
                      <li key={m} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={13} className={`${color} mt-0.5 flex-shrink-0`} />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={ctaHref} className="btn-primary text-sm justify-center">
                  {cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          {/* Livrables communs */}
          <div className="mt-10 card-glass p-8 border-slate-700/50">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5">
              Livrables inclus dans tous les programmes
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {deliverables.map(({ icon: Icon, label }) => (
                <div key={label} className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-2">
                    <Icon size={16} className="text-cyan-400" />
                  </div>
                  <div className="text-xs text-slate-400 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 : Enseignement supérieur ────────── */}
      <section className="py-20 bg-navy-800/40 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Gauche : présentation */}
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <GraduationCap size={18} className="text-emerald-400" />
                </div>
                <div>
                  <div className="tag text-emerald-400">Public 2</div>
                  <h2 className="text-3xl font-bold text-slate-100">Enseignement supérieur</h2>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8">
                Enseignant au <strong className="text-slate-200">CNAM</strong>,{' '}
                <strong className="text-slate-200">CESI</strong> et{' '}
                <strong className="text-slate-200">Ifpass</strong> depuis 2021&nbsp;:
                modules IA, data, systèmes d&apos;information, programmation, et accompagnement
                mémoires &amp; soutenances ingénieur.
              </p>

              {/* Établissements */}
              <div className="space-y-4 mb-8">
                {schools.map(({ name, fullName, since, levels, modules }) => (
                  <div key={name} className="card-glass p-5 border-emerald-500/20">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-emerald-400">{name}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-100 text-sm">{fullName}</div>
                        <div className="text-xs text-emerald-400 mt-0.5">{since} — {levels}</div>
                        <div className="text-xs text-slate-500 mt-1.5 leading-relaxed">{modules}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link href="/contact?sujet=conference" className="btn-primary">
                  <Mic2 size={16} />
                  Inviter pour une conférence
                </Link>
                <Link href="/contact?sujet=programme-cours" className="btn-outline">
                  Demander un programme de cours
                </Link>
              </div>
            </div>

            {/* Droite : modules */}
            <div>
              <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5">
                Exemples de modules disponibles
              </div>
              <div className="space-y-3">
                {academicModules.map(({ code, title, level, duration, desc }) => (
                  <div key={code} className="card-glass p-5 hover:border-slate-600 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className="text-xs font-mono text-cyan-500/70 mr-2">{code}</span>
                        <span className="font-semibold text-slate-200 text-sm">{title}</span>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-xs text-slate-500">{duration}</div>
                      </div>
                    </div>
                    <div className="text-xs text-emerald-400 mb-1">{level}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-600 mt-4 text-center">
                Tous les modules sont adaptables en durée et en niveau à votre cursus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Références ────────────────────────────────── */}
      <TrustedBy
        title="Ils m'ont fait confiance"
        showLink={true}
        variant="dark"
      />

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="tag text-emerald-400 mb-4">Passez à l&apos;action</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-5">
            Une formation sur mesure<br />
            <span className="gradient-text">pour votre contexte</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Chaque programme est construit sur la base de vos enjeux spécifiques,
            du niveau de votre public et du temps disponible. Contactez-moi pour
            construire ensemble le programme adapté.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact?sujet=formation" className="btn-primary text-base px-8 py-4">
              Demander un programme <ArrowRight size={18} />
            </Link>
            <Link href="/contact?sujet=conference" className="btn-outline text-base px-8 py-4">
              <Mic2 size={18} /> Inviter pour une conférence
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
