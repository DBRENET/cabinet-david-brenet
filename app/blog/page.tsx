import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag, Rss } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog IA — Stratégie, Gouvernance & Agents IA | David Brenet',
  description:
    'Articles et analyses sur l\'Intelligence Artificielle en entreprise : stratégie IA, gouvernance, agents IA, IA Act, LLM et transformation digitale par David Brenet.',
  alternates: { canonical: 'https://davidbrenet.com/blog' },
}

// Articles de démonstration — À remplacer par votre CMS (Contentful, Sanity, MDX...)
const articles = [
  {
    slug: 'ia-act-guide-conformite-entreprise',
    title: 'IA Act : guide pratique de mise en conformité pour les entreprises françaises',
    excerpt: 'Le règlement européen sur l\'Intelligence Artificielle (IA Act) entre en vigueur par étapes. Quelles obligations pour votre organisation ? Comment structurer votre mise en conformité ?',
    date: '2026-01-15',
    readTime: '12 min',
    category: 'Gouvernance IA',
    categoryColor: 'text-purple-400',
    categoryBg: 'bg-purple-500/10',
    featured: true,
  },
  {
    slug: 'agents-ia-metiers-conception-deploiement',
    title: 'Agents IA métiers : de la conception au déploiement en production',
    excerpt: 'Comment concevoir des agents IA robustes pour les processus métiers ? Architecture, orchestration, sécurité et pilotage : retour d\'expérience sur les meilleures pratiques.',
    date: '2026-01-08',
    readTime: '15 min',
    category: 'Agents IA',
    categoryColor: 'text-cyan-400',
    categoryBg: 'bg-cyan-500/10',
    featured: true,
  },
  {
    slug: 'rag-securise-entreprise-donnees-internes',
    title: 'RAG sécurisé : exploiter vos données internes avec les LLM sans risque',
    excerpt: 'La Retrieval Augmented Generation permet d\'ancrer les réponses de l\'IA dans votre base de connaissances. Comment l\'implémenter sans fuites de données ?',
    date: '2025-12-20',
    readTime: '10 min',
    category: 'Architecture IA',
    categoryColor: 'text-blue-400',
    categoryBg: 'bg-blue-500/10',
    featured: false,
  },
  {
    slug: 'roadmap-ia-structurer-strategie',
    title: '5 étapes pour structurer une roadmap IA qui génère de la valeur',
    excerpt: 'Comment passer d\'une liste de projets IA épars à une stratégie cohérente, priorisée par ROI et alignée sur les enjeux métiers ? Méthode et outils.',
    date: '2025-12-10',
    readTime: '8 min',
    category: 'Stratégie IA',
    categoryColor: 'text-emerald-400',
    categoryBg: 'bg-emerald-500/10',
    featured: false,
  },
  {
    slug: 'ia-generative-charte-entreprise',
    title: 'Rédiger une charte IA générative pour votre entreprise : le guide complet',
    excerpt: 'La charte IA est le document fondateur de la gouvernance de l\'IA générative. Comment la rédiger pour qu\'elle soit utile, applicable et acceptée des collaborateurs ?',
    date: '2025-11-28',
    readTime: '11 min',
    category: 'Gouvernance IA',
    categoryColor: 'text-purple-400',
    categoryBg: 'bg-purple-500/10',
    featured: false,
  },
  {
    slug: 'roi-ia-mesurer-valeur-projets',
    title: 'Comment mesurer le ROI de vos projets IA en entreprise ?',
    excerpt: 'Le pilotage de la valeur des projets IA reste un défi majeur pour les directions. Quels indicateurs ? Quelle méthode de calcul ? Quels pièges éviter ?',
    date: '2025-11-15',
    readTime: '9 min',
    category: 'Stratégie IA',
    categoryColor: 'text-emerald-400',
    categoryBg: 'bg-emerald-500/10',
    featured: false,
  },
]

const categories = ['Tous', 'Stratégie IA', 'Gouvernance IA', 'Agents IA', 'Architecture IA', 'Formation']

export default function BlogPage() {
  const featured = articles.filter(a => a.featured)
  const others = articles.filter(a => !a.featured)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="tag">Blog & Analyses</div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <Rss size={12} />
              <span>Insights IA</span>
            </div>
          </div>
          <div className="cyan-line mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
            Décryptez la révolution IA<br />
            <span className="gradient-text">avec un expert terrain</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Articles de fond, analyses stratégiques et retours d&apos;expérience sur la transformation
            des entreprises par l&apos;Intelligence Artificielle.
          </p>
        </div>
      </section>

      {/* Articles featured */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="tag mb-6">Articles en vedette</div>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {featured.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card-glass p-8 border-slate-700/50 hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group block"
              >
                <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${article.categoryBg} ${article.categoryColor} border border-current/20 mb-5`}>
                  <Tag size={10} />
                  {article.category}
                </div>
                <h2 className="text-xl font-bold text-slate-100 leading-tight mb-3 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{article.readTime}</span>
                  </div>
                  <ArrowRight size={16} className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>

          {/* Tous les articles */}
          <div className="tag mb-6">Tous les articles</div>
          <div className="space-y-4">
            {others.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="card-glass p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-slate-600 hover:bg-slate-800/20 transition-all duration-200 group"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${article.categoryBg} ${article.categoryColor}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock size={11} />{article.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-200 leading-tight group-hover:text-cyan-400 transition-colors mb-1.5">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">{article.excerpt}</p>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 sm:flex-col sm:items-end flex-shrink-0">
                  <span>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <ArrowRight size={16} className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 bg-navy-800/40 border-t border-slate-800/50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-5">
            <Rss size={20} className="text-cyan-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-100 mb-3">
            Ne manquez aucun article
          </h2>
          <p className="text-slate-400 mb-7 leading-relaxed">
            Recevez les prochains articles directement dans votre boîte mail.
            Pas de spam, uniquement des analyses IA à forte valeur.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.fr"
              className="flex-1 bg-navy-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500 outline-none transition-colors"
            />
            <button className="btn-primary text-sm whitespace-nowrap">
              S&apos;abonner
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
