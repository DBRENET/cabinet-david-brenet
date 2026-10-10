import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BookOpen, ExternalLink, GraduationCap, Mic2, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Publications — Ouvrages IA de David Brenet | Éditions ENI',
  description:
    'Découvrez les ouvrages de David Brenet publiés aux Éditions ENI sur l\'Intelligence Artificielle : L\'IA expliquée et L\'IA au service des métiers de l\'IT.',
  alternates: { canonical: 'https://davidbrenet.com/publications' },
}

const books = [
  {
    id: 'ia-expliquee-v2',
    title: 'L\'Intelligence Artificielle expliquée — 2ème édition',
    subtitle: 'Des concepts de base aux applications avancées de l\'IA',
    publisher: 'Éditions ENI',
    year: 'À paraître — 18 novembre 2026',
    badge: 'À paraître',
    badgeColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    color: 'border-amber-500/30',
    accent: 'text-amber-400',
    highlight: 'from-amber-500/8 to-cyan-500/5',
    coverImage: '/books/ia-expliquee-v2.jpg',
    coverAlt: 'Couverture L\'Intelligence Artificielle expliquée 2ème édition — David Brenet, ENI',
    description: `La deuxième édition entièrement mise à jour de l'ouvrage de référence. Nouveaux chapitres sur l'IA agentique, Claude et l'écosystème Anthropic, le Model Context Protocol (MCP), les agents IA en production et le cadre réglementaire AI Act. Un ouvrage pédagogique et rigoureux pour comprendre l'IA générative dans sa globalité, des fondamentaux aux déploiements agentiques en entreprise.`,
    audience: 'Professionnels IT, managers, ingénieurs, étudiants, et tout professionnel souhaitant une compréhension approfondie et à jour de l\'IA.',
    chapters: [
      'Fondamentaux de l\'Intelligence Artificielle (mis à jour)',
      'Machine Learning & Deep Learning',
      'IA Générative : LLM, architecture Transformer',
      'Claude & l\'écosystème Anthropic',
      'IA agentique & agents autonomes',
      'Model Context Protocol (MCP)',
      'Déploiement en production & MLOps',
      'Gouvernance & AI Act',
      'Cas d\'usage sectoriels (assurance, finance, santé)',
    ],
    link: 'https://www.editions-eni.fr',
    preorder: true,
  },
  {
    id: 'ia-expliquee',
    title: 'L\'Intelligence Artificielle expliquée',
    subtitle: 'Des concepts de base aux applications avancées de l\'IA — 1ère édition',
    publisher: 'Éditions ENI',
    year: 'Février 2024',
    badge: 'Disponible',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    color: 'border-cyan-500/30',
    accent: 'text-cyan-400',
    highlight: 'from-cyan-500/10 to-blue-500/5',
    coverImage: '/books/ia-expliquee.jpg',
    coverAlt: 'Couverture L\'Intelligence Artificielle expliquée — David Brenet, ENI',
    description: `Un ouvrage pédagogique et rigoureux pour comprendre l'Intelligence Artificielle dans sa globalité. De l'histoire de l'IA aux architectures de deep learning, en passant par le machine learning, le traitement du langage naturel et les systèmes multi-agents, ce livre couvre l'ensemble du spectre des technologies IA actuelles avec des exemples concrets et des cas d'usage professionnels.`,
    audience: 'Professionnels IT, managers, ingénieurs, étudiants cherchant une compréhension approfondie de l\'IA.',
    chapters: [
      'Fondamentaux de l\'Intelligence Artificielle',
      'Machine Learning & algorithmes classiques',
      'Deep Learning et réseaux de neurones',
      'Traitement du Langage Naturel (NLP)',
      'Vision par ordinateur',
      'Agents IA & systèmes multi-agents',
      'IA Générative : LLM, Diffusion, GPT',
      'Applications avancées & cas d\'usage',
      'Éthique et gouvernance de l\'IA',
    ],
    link: 'https://www.editions-eni.fr/livre/l-intelligence-artificielle-expliquee-des-concepts-de-base-aux-applications-avancees-de-l-ia-9782409044526',
    preorder: false,
  },
  {
    id: 'ia-pros-it',
    title: 'L\'IA pour les professionnels de l\'IT',
    subtitle: 'Comprendre et maîtriser la révolution IA',
    publisher: 'Éditions ENI — Collection Expert',
    year: 'Mai 2025',
    badge: 'Disponible',
    badgeColor: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    color: 'border-purple-500/30',
    accent: 'text-purple-400',
    highlight: 'from-purple-500/10 to-blue-500/5',
    coverImage: '/books/ia-metiers-it.jpg',
    coverAlt: 'Couverture L\'IA pour les professionnels de l\'IT — David Brenet, ENI Expert',
    description: `Un guide stratégique et opérationnel destiné aux professionnels IT : DSI, architectes, chefs de projet, ingénieurs et managers. Cet ouvrage de la collection Expert aborde l'IA sous l'angle de la transformation des métiers de l'IT : comment piloter un projet IA, architecturer un système IA en production, gouverner les usages et industrialiser les déploiements.`,
    audience: 'DSI, architectes SI, chefs de projet IT, managers techniques, ingénieurs IA.',
    chapters: [
      'La révolution IA dans les métiers IT',
      'Stratégie IA pour les DSI',
      'Architecture des systèmes IA',
      'LLM & IA Générative en production',
      'Agents IA : conception et déploiement',
      'RAG et intégration de la connaissance',
      'Gouvernance, conformité & IA Act',
      'Pilotage de la valeur et ROI IA',
      'MLOps & industrialisation',
      'Cas d\'usage sectoriels',
    ],
    link: 'https://www.editions-eni.fr/livre/l-intelligence-artificielle-au-service-des-metiers-de-l-it-comprendre-et-maitriser-la-revolution-ia-9782409047152',
    preorder: false,
  },
]

const interventions = [
  { icon: Mic2, title: 'Conférences IA', desc: 'Interventions en conférence sur la stratégie IA, la gouvernance et les agents IA pour des publics professionnels et académiques.' },
  { icon: GraduationCap, title: 'Enseignement supérieur', desc: 'Cours et séminaires auprès de Masters et formations d\'ingénieurs : CNAM, CESI, IFPASS, Universités.' },
  { icon: Users, title: 'Séminaires COMEX', desc: 'Sessions de sensibilisation et de montée en compétence pour les comités de direction des grandes entreprises.' },
]

export default function PublicationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute right-1/4 top-1/2 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Publications & Enseignement</div>
          <div className="cyan-line mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
            Ouvrages de référence<br />
            <span className="gradient-text">sur l&apos;Intelligence Artificielle</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Deux ouvrages publiés aux Éditions ENI pour rendre l&apos;IA accessible, compréhensible
            et opérationnelle — pour tous les professionnels.
          </p>
        </div>
      </section>

      {/* Livres */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {books.map((book, i) => (
            <div key={book.id} className={`card-glass border ${book.color} overflow-hidden`}>
              <div className={`p-8 md:p-12 bg-gradient-to-br ${book.highlight}`}>
                <div className="grid md:grid-cols-5 gap-10 items-start">

                  {/* Book cover */}
                  <div className="md:col-span-1 flex justify-center md:justify-start">
                    <div className="relative">
                      <div className={`relative w-44 rounded-xl overflow-hidden shadow-2xl border ${book.color} aspect-[2/3] bg-navy-800`}>
                        {/* Fallback visible derrière l'image */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                          <BookOpen size={32} className={book.accent} />
                          <div className="text-center px-4">
                            <div className={`text-xs font-bold ${book.accent} uppercase tracking-wider mb-1`}>ENI</div>
                            <div className="text-xs text-slate-400 text-center leading-tight">{book.year}</div>
                          </div>
                        </div>
                        {/* Image pochette — couvre le fallback quand le fichier est présent */}
                        <Image
                          src={book.coverImage}
                          alt={book.coverAlt}
                          fill
                          className="object-cover relative z-10"
                          sizes="176px"
                        />
                      </div>
                      {/* Shadow glow */}
                      <div className={`absolute -inset-2 rounded-2xl blur-xl opacity-20 -z-10 bg-gradient-to-b ${book.highlight}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-4">
                    <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${book.badgeColor} mb-4`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-current" />
                      {book.badge} — {book.year}
                    </div>
                    <h2 className="text-3xl font-bold text-slate-100 mb-2 leading-tight">{book.title}</h2>
                    <p className={`text-base ${book.accent} italic mb-6`}>{book.subtitle}</p>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                      <span className="flex items-center gap-1.5"><BookOpen size={13} /> {book.publisher}</span>
                      <span>Auteur : David Brenet</span>
                    </div>

                    <p className="text-slate-400 leading-relaxed mb-6">{book.description}</p>

                    <div className="mb-8">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Public cible</div>
                      <div className="text-sm text-slate-300">{book.audience}</div>
                    </div>

                    {book.preorder ? (
                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium px-5 py-2.5 rounded-lg">
                          📘 Disponible le 18 novembre 2026
                        </span>
                      </div>
                    ) : (
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm"
                      >
                        Commander chez l&apos;éditeur
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Chapters */}
                <div className="mt-10 pt-8 border-t border-slate-800/50">
                  <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-5">Chapitres clés</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {book.chapters.map((ch, j) => (
                      <div key={ch} className="flex items-start gap-2.5 text-sm">
                        <span className={`text-xs font-bold ${book.accent} mt-0.5 flex-shrink-0 w-5 text-right`}>{String(j + 1).padStart(2, '0')}</span>
                        <span className="text-slate-400">{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enseignement & conférences */}
      <section className="py-20 bg-navy-800/40 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="tag mb-3">Au-delà des ouvrages</div>
            <h2 className="section-title mb-4">Conférences & Enseignement</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              David Brenet transmet son expertise à travers des interventions orales auprès
              de publics variés, de la salle de cours au comité de direction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {interventions.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-glass p-8 text-center hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={22} className="text-cyan-400" />
                </div>
                <h3 className="font-bold text-slate-100 mb-3">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Établissements */}
          <div className="card-glass p-8">
            <h3 className="text-lg font-bold text-slate-100 mb-6">Établissements & organisations d&apos;accueil</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: 'CNAM', detail: 'Enseignant vacataire depuis 2021' },
                { name: 'EICNAM', detail: 'École d\'Ingénieurs du CNAM' },
                { name: 'CESI', detail: 'Master & Ingénieurs DevSecOps' },
                { name: 'IFPASS', detail: 'Masters assurance & finance' },
                { name: 'Grenoble École Management', detail: 'Conférences & séminaires IA' },
                { name: 'Université de Tours', detail: 'Conférences IA' },
                { name: 'Université de La Rochelle', detail: 'Conférences IA' },
                { name: 'IHEMI', detail: 'Hauts fonctionnaires Ministère de l\'Intérieur' },
              ].map(({ name, detail }) => (
                <div key={name} className="p-4 bg-navy-800/60 rounded-xl border border-slate-700/40">
                  <div className="font-semibold text-slate-200 text-sm whitespace-pre-line">{name}</div>
                  <div className="text-xs text-slate-500 mt-1">{detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-5">
            Invitez David Brenet en conférence
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Pour une conférence IA, un séminaire de direction ou une session de formation,
            contactez-nous pour organiser une intervention sur mesure.
          </p>
          <Link href="/contact?sujet=conference" className="btn-primary text-base px-8 py-4">
            Demander une intervention <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
