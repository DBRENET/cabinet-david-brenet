'use client'

import { useEffect, useState } from 'react'
import { ExternalLink, RefreshCw } from 'lucide-react'

interface NewsItem {
  title: string
  link: string
  pubDate: string
  source: string
}

const SOURCE_STYLES: Record<string, { color: string; bg: string; border: string }> = {
  'Anthropic': { color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  'TechCrunch': { color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  'Le Monde IA': { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
}

const DEFAULT_STYLE = { color: 'text-slate-400', bg: 'bg-slate-500/10', border: 'border-slate-700/30' }

export function AiNewsFeedClient() {
  const [items, setItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/api/ai-news')
      .then((r) => r.json())
      .then((data) => {
        setItems(data.items || [])
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="card-glass border border-slate-800/40 p-5 animate-pulse">
            <div className="h-3 w-20 bg-slate-800 rounded-full mb-3" />
            <div className="h-4 bg-slate-800 rounded mb-2" />
            <div className="h-4 w-3/4 bg-slate-800 rounded" />
          </div>
        ))}
      </div>
    )
  }

  if (error || items.length === 0) {
    return (
      <div className="text-center py-10 text-slate-600">
        <RefreshCw size={24} className="mx-auto mb-3 opacity-30" />
        <p className="text-sm">Flux temporairement indisponible.</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => {
        const style = SOURCE_STYLES[item.source] ?? DEFAULT_STYLE
        return (
          <a
            key={`${item.link}-${i}`}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`card-glass border ${style.border} p-5 hover:-translate-y-1 hover:border-opacity-60 transition-all duration-200 group flex flex-col gap-3`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${style.bg} ${style.color}`}>
                {item.source}
              </span>
              {item.pubDate && (
                <span className="text-xs text-slate-600">{item.pubDate}</span>
              )}
            </div>
            <p className="text-sm text-slate-300 leading-snug font-medium group-hover:text-cyan-400 transition-colors line-clamp-3 flex-1">
              {item.title}
            </p>
            <span className={`text-xs ${style.color} flex items-center gap-1 mt-auto`}>
              Lire <ExternalLink size={10} />
            </span>
          </a>
        )
      })}
    </div>
  )
}
