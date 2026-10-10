import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag, Rss } from 'lucide-react'
import { NewsletterForm } from '@/components/NewsletterForm'

export const metadata: Metadata = {
  title: 'Blog — IA Agentique, Claude & Assurance | David Brenet',
  description:
    'Articles de fond sur l\'IA agentique, Claude Anthropic et la transformation des assureurs et mutuelles. Gouvernance AI Act, agents IA en production, MCP — par David Brenet, expert IA assurance Niort.',
  alternates: { canonical: 'https://davidbrenet.com/blog' },
}

const articles = [
  {
    slug: 'claude-code-dsi-assureur',
    title: 'Claude Code en DSI d\'assureur : retour d\'expérience après 3 mois',
    excerpt: 'Comment Claude Code transforme le quotidien des équipes IT dans une DSI d\'assureur : revue de code automatisée, génération de tests, documentation de legacy. Ce que ça change vraiment.',
    date: '2026-09-15',
    readTime: '10 min',
    category: 'Claude',
    categoryColor: 'text-cyan-400',
    categoryBg: 'bg-cyan-500/10',
    featured: true,
  },
  {
    slug: 'mcp-connecter-agents-si-assurance',
    title: 'MCP : comment connecter vos agents Claude à votre SI assurantiel',
    excerpt: 'Le Model Context Protocol permet à Claude d\'accéder à vos API, GED et bases de données internes. Architecture, sécurité, cas d\'usage — le guide pratique pour les architectes SI.',
    date: '2026-08-28',
    readTime: '14 min',
    category: 'IA Agentique',
    categoryColor: 'text-purple-400',
    categoryBg: 'bg-purple-500/10',
    featured: true,
  },
  {
    slug: 'agents-ia-gestion-sinistres',
    title: 'Agents IA en gestion de sinistres : architecture et premiers résultats',
    excerpt: 'Anatomie d\'un agent Claude pour l\'instruction automatique des sinistres courants : orchestration, outils, supervision humaine et conformité RGPD. Retour sur un prototype en production.',
    date: '2026-08-10',
    readTime: '16 min',
    category: 'Assurance',
    categoryColor: 'text-emerald-400',
    categoryBg: 'bg-emerald-500/10',
    featured: false,
  },
  {
    slug: 'ia-act-guide-conformite-entreprise',
    title: 'AI Act article 4 : l\'obligation de formation IA que vous ne pouvez pas ignorer',
    excerpt: 'Depuis août 2026, l\'article 4 du Règlement IA impose une formation obligatoire pour tout personnel utilisant l\'IA. Ce que cela signifie concrètement pour les assureurs et mutuelles.',
    date: '2026-07-20',
    readTime: '12 min',
    category: 'Gouvernance & AI Act',
    categoryColor: 'text-red-400',
    categoryBg: 'bg-red-500/10',
    featured: false,
  },
  {
    slug: 'pourquoi-claude-plutot-que-gpt-assurance',
    title: 'Pourquoi je recommande Claude plutôt que GPT pour l\'assurance',
    excerpt: 'Constitutional AI, gestion des données sensibles, écosystème Claude Code + MCP + SDK agents, politique de sécurité enterprise — les vraies raisons d\'un choix technique et éthique.',
    date: '2026-07-05',
    readTime: '9 min',
    category: 'Claude',
    categoryColor: 'text-cyan-400',
    categoryBg: 'bg-cyan-500/10',
    featured: false,
  },
  {
    slug: 'shadow-ia-risques-assurance',
    title: 'Shadow IA en assurance : mesurer le risque avant qu\'il soit trop tard',
    excerpt: 'Dans 80% des organisations, des collaborateurs utilisent des IA non validées avec des données sensibles. Comment détecter, quantifier et traiter ce risque avant un incident majeur.',
    date: '2026-06-18',
    readTime: '8 min',
    category: 'Gouvernance & AI Act',
    categoryColor: 'text-red-400',
    categoryBg: 'bg-red-500/10',
    featured: false,
  },
]

const categories = ['Tous', 'IA Agentique', 'Claude', 'Assurance', 'Gouvernance & AI Act']

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
              <span>IA Agentique • Claude • Assurance</span>
            </div>
          </div>
          <div className="cyan-line mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
            L&apos;IA agentique décryptée<br />
            <span className="gradient-text">pour l&apos;assurance</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Articles de fond, retours d&apos;expérience et analyses sur Claude, l&apos;IA agentique
            et la transformation des assureurs et mutuelles. Sans jargon inutile.
          </p>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <span
                key={cat}
                className="text-xs font-medium text-slate-400 border border-slate-700/60 rounded-full px-3 py-1.5"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles à la une */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="tag mb-6">Articles à la une</div>
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

      {/* Newsletter */}
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
            Pas de spam — uniquement des analyses IA à forte valeur pour l&apos;assurance.
          </p>
          <NewsletterForm
            resource="blog"
            placeholder="votre@email.fr"
            buttonLabel="S'abonner"
            successMessage="C'est noté ! Vous recevrez les prochains articles."
            className="max-w-md mx-auto"
          />
        </div>
      </section>
    </>
  )
}
