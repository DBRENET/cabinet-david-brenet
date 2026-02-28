import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, Brain, Shield, Bot, ChevronRight,
  BookOpen, Users, Award, TrendingUp, GraduationCap, Mic2, Star,
  Quote, Network, BarChart3,
} from 'lucide-react'
import { TrustedBy } from '@/components/TrustedBy'

export const metadata: Metadata = {
  title: 'David Brenet — Conseil IA, Formation IA & Agents IA | France',
  description:
    'J\'accompagne entreprises et grandes écoles : stratégie IA, formation, agents & automatisation. Conseil IA, gouvernance, conférences et déploiement d\'agents IA en France.',
  keywords: [
    'conseil IA France',
    'formation IA entreprise',
    'agents IA automatisation',
    'gouvernance IA',
    'stratégie IA COMEX',
    'conférences IA',
    'formation IA dirigeants',
    'David Brenet',
  ],
  alternates: { canonical: 'https://davidbrenet.com' },
}

const stats = [
  { value: '23+', label: 'ans d\'expertise IT', icon: Award },
  { value: '2', label: 'ouvrages publiés', icon: BookOpen },
  { value: '10+', label: 'références grands comptes', icon: Users },
  { value: '4', label: 'institutions académiques', icon: GraduationCap },
]

const pillars = [
  {
    icon: TrendingUp,
    title: 'Stratégie & Gouvernance IA',
    description:
      'Audit de maturité, roadmap IA priorisée par ROI, conformité IA Act & RGPD. Des fondations solides avant tout déploiement.',
    items: ['Audit de maturité IA', 'Roadmap & priorisation ROI', 'Gouvernance & IA Act', 'Cartographie cas d\'usage'],
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
    href: '/offres#conseil',
  },
  {
    icon: GraduationCap,
    title: 'Formation & Conférences',
    description:
      'Acculturation COMEX, formation équipes IT & managers, modules académiques. En entreprise comme en grande école.',
    items: ['Séminaires COMEX / CODIR', 'Formation équipes IT & métiers', 'Modules ingénieurs & masters', 'Conférences IA stratégiques'],
    color: 'from-emerald-500/20 to-cyan-500/10',
    border: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
    href: '/formation',
  },
  {
    icon: Bot,
    title: 'Agents IA & Automatisation',
    description:
      'Conception d\'agents IA métiers, orchestration multi-agents, RAG sécurisé et intégration LLM dans votre SI.',
    items: ['Agents IA métiers sur mesure', 'Orchestration multi-agents', 'RAG & intégration LLM', 'RPA augmentée par IA'],
    color: 'from-cyan-500/20 to-teal-500/10',
    border: 'border-cyan-500/30',
    iconColor: 'text-cyan-400',
    href: '/offres#agents',
  },
]

const credentials = [
  { label: '23 ans d\'expertise IT', icon: Award },
  { label: 'Ingénieur SI — CNAM', icon: GraduationCap },
  { label: 'Diplômé GEM', icon: Star },
  { label: 'Auteur de 2 ouvrages IA (Éd. ENI)', icon: BookOpen },
  { label: 'Interventions grands comptes', icon: Users },
  { label: 'Enseignant CNAM, CESI & Ifpass', icon: GraduationCap },
  { label: 'Conférencier IA', icon: Mic2 },
  { label: 'Expert IA Act & conformité', icon: Shield },
]

const services = [
  { icon: Brain,         title: 'Conseil Stratégique IA',    href: '/offres#conseil',      color: 'text-blue-400' },
  { icon: Bot,           title: 'Déploiement Agents IA',     href: '/offres#agents',       color: 'text-cyan-400' },
  { icon: Shield,        title: 'IA Générative & Sécurité',  href: '/offres#generative',   color: 'text-purple-400' },
  { icon: GraduationCap, title: 'Formation & Acculturation', href: '/formation',           color: 'text-emerald-400' },
  { icon: Network,       title: 'Architecture & Data',       href: '/offres#architecture', color: 'text-orange-400' },
  { icon: BarChart3,     title: 'Pilotage ROI IA',           href: '/offres#roi',          color: 'text-rose-400' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 pt-36">
          <div className="max-w-4xl">

            {/* Baseline badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="tag text-cyan-400">
                Stratégie IA&nbsp;•&nbsp;Formation&nbsp;•&nbsp;Agents &amp; Automatisation
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 leading-[1.08] tracking-tight mb-6">
              Intelligence Artificielle
              <br />
              <span className="gradient-text">Stratégie. Formation.</span>
              <br />
              Déploiement.
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
              J&apos;accompagne entreprises et grandes écoles&nbsp;: stratégie IA,
              formation, agents &amp; automatisation.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Prendre rendez-vous
                <ArrowRight size={18} />
              </Link>
              <Link href="/formation" className="btn-outline text-base px-8 py-4">
                Voir les formations
              </Link>
              <Link href="/offres" className="btn-outline text-base px-8 py-4">
                Nos offres de conseil
              </Link>
            </div>

            {/* Metrics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="border-l border-slate-700/60 pl-4">
                  <div className="text-2xl font-bold text-cyan-400">{value}</div>
                  <div className="text-sm text-slate-400 leading-tight mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-slate-600" />
          <div className="w-1 h-1 rounded-full bg-slate-500" />
        </div>
      </section>

      {/* ── 3 AXES ─────────────────────────────────────── */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="tag mb-3">Ce que je propose</div>
            <div className="cyan-line mx-auto mb-4" />
            <h2 className="section-title mb-4">Trois axes d&apos;intervention</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Du diagnostic stratégique à la formation terrain, en passant par le déploiement
              d&apos;agents IA — une approche intégrée et orientée résultats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map(({ icon: Icon, title, description, items, color, border, iconColor, href }) => (
              <div
                key={title}
                className={`card-glass p-8 border ${border} bg-gradient-to-br ${color} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col`}
              >
                <div className={`w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center mb-6 ${iconColor} group-hover:scale-110 transition-transform`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3 leading-tight">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>
                <ul className="space-y-2 flex-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={14} className={`${iconColor} mt-0.5 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${iconColor} hover:underline`}
                >
                  En savoir plus <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ──────────────────────────────── */}
      <section className="py-20 bg-navy-800/40 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <div className="tag mb-2">Toutes les prestations</div>
              <h2 className="text-2xl font-bold text-slate-100">Une offre complète &amp; cohérente</h2>
            </div>
            <Link href="/offres" className="btn-outline text-sm self-start md:self-auto">
              Voir toutes les offres <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {services.map(({ icon: Icon, title, href, color }) => (
              <Link
                key={href + title}
                href={href}
                className="card-glass p-5 text-center hover:border-slate-600 hover:-translate-y-1 transition-all duration-200 group"
              >
                <Icon size={24} className={`${color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                <div className="text-xs font-medium text-slate-300 leading-tight">{title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDIBILITE ────────────────────────────────── */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag mb-3">Le fondateur</div>
              <div className="cyan-line mb-5" />

              {/* Photo + titre */}
              <div className="flex items-center gap-5 mb-6">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-cyan-500/30 shadow-lg">
                    <Image
                      src="/images/david-brenet.jpg"
                      alt="David Brenet — Expert IA, Formateur & Conférencier"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-white rounded-full" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-100">David Brenet</h2>
                  <p className="gradient-text font-medium">Expert IA, Formateur &amp; Conférencier</p>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed mb-8">
                Ingénieur en Systèmes d&apos;Information (CNAM), diplômé de Grenoble École de Management,
                23 ans d&apos;expérience IT dans des environnements grands comptes. Auteur de deux ouvrages
                aux Éditions ENI sur l&apos;Intelligence Artificielle. Enseignant au CNAM, CESI et Ifpass,
                conférencier IA auprès de COMEX, institutions publiques et grandes écoles.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 py-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-cyan-400" />
                    </div>
                    <span className="text-sm text-slate-300">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Contacter David Brenet <ArrowRight size={16} />
                </Link>
                <Link href="/formation" className="btn-outline">
                  Voir les formations
                </Link>
              </div>
            </div>

            <div className="space-y-5">
              <div className="card-glass p-8 border-cyan-500/20 relative overflow-hidden">
                <div className="absolute top-4 right-6 text-cyan-500/20 text-8xl font-serif leading-none select-none">&ldquo;</div>
                <Quote size={28} className="text-cyan-500 mb-4" />
                <blockquote className="text-lg text-slate-200 leading-relaxed font-light italic mb-4">
                  L&apos;IA n&apos;est pas un outil technologique. C&apos;est une transformation
                  organisationnelle profonde qui exige clarté stratégique, rigueur de gouvernance
                  et capacité d&apos;industrialisation.
                </blockquote>
                <div className="text-sm text-cyan-400 font-medium">— David Brenet</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="card-glass p-5 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">2</div>
                  <div className="text-xs text-slate-400">Ouvrages<br />publiés ENI</div>
                </div>
                <div className="card-glass p-5 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">23</div>
                  <div className="text-xs text-slate-400">Années<br />d&apos;expertise</div>
                </div>
                <div className="card-glass p-5 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">3</div>
                  <div className="text-xs text-slate-400">Écoles<br />partenaires</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ─────────────────────────────────── */}
      <TrustedBy title="Ils me font confiance" showLink={true} variant="dark" />

      {/* ── PUBLICATIONS TEASER ────────────────────────── */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag mb-3">Publications</div>
            <div className="cyan-line mx-auto mb-4" />
            <h2 className="section-title mb-4">Ouvrages de référence</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Deux ouvrages publiés aux Éditions ENI, référence éditoriale en informatique professionnelle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "L'Intelligence Artificielle expliquée",
                subtitle: "Des concepts de base aux applications avancées de l'IA",
                year: 'Février 2024',
                description: "Un ouvrage pédagogique et exhaustif pour comprendre les fondements de l'IA, de l'apprentissage automatique au deep learning, illustré de cas concrets.",
                color: 'border-cyan-500/30',
                badge: 'Disponible',
                badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
              },
              {
                title: "L'Intelligence Artificielle au service des métiers de l'IT",
                subtitle: "Comprendre et maîtriser la révolution IA",
                year: 'Mai 2025',
                description: "Un guide stratégique et opérationnel destiné aux professionnels IT pour piloter la transformation IA de leurs organisations avec rigueur.",
                color: 'border-purple-500/30',
                badge: 'Disponible',
                badgeColor: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
              },
            ].map((book) => (
              <div key={book.title} className={`card-glass p-8 border ${book.color} hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}>
                <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${book.badgeColor} mb-5`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                  {book.badge} — {book.year}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2 leading-tight">{book.title}</h3>
                <p className="text-sm text-cyan-400 mb-4 italic">{book.subtitle}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{book.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-cyan-400 font-medium">
                  <BookOpen size={16} />Éditions ENI
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/publications" className="btn-outline">
              Voir les publications <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="tag mb-4">Passez à l&apos;action</div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 tracking-tight">
            Conseil, formation ou déploiement —<br />
            <span className="gradient-text">parlons de votre projet IA</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10">
            Un premier échange confidentiel pour comprendre vos enjeux, qualifier
            le potentiel de l&apos;IA dans votre organisation et définir les premières étapes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Demander une consultation <ArrowRight size={18} />
            </Link>
            <Link href="/formation" className="btn-outline text-base px-10 py-4">
              Explorer les formations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
