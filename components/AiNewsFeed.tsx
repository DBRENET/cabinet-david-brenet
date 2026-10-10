// Server Component — flux d'actualités IA (RSS)
// Revalidation toutes les heures via ISR Next.js

interface NewsItem {
  title: string
  link: string
  pubDate: string
  source: string
  sourceColor: string
}

const RSS_SOURCES = [
  {
    url: 'https://www.anthropic.com/rss.xml',
    source: 'Anthropic',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    url: 'https://techcrunch.com/tag/artificial-intelligence/feed/',
    source: 'TechCrunch',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    url: 'https://www.lemonde.fr/intelligence-artificielle/rss_full.xml',
    source: 'Le Monde IA',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
]

function parseRSS(xml: string, source: string, color: string, limit = 3): NewsItem[] {
  const items: NewsItem[] = []

  // Support both <item> (RSS 2.0) and <entry> (Atom)
  const tagName = xml.includes('<entry>') ? 'entry' : 'item'
  const pattern = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'g')
  let match: RegExpExecArray | null

  while ((match = pattern.exec(xml)) !== null) {
    const block = match[1]

    // Title — CDATA or plain
    const rawTitle =
      block.match(/<title[^>]*><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1] ||
      block.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1] ||
      ''
    const title = rawTitle.replace(/<[^>]+>/g, '').trim()

    // Link — <link href="..."/> (Atom) or <link>...</link> (RSS)
    const link =
      block.match(/<link[^>]+href="([^"]+)"/)?.[1] ||
      block.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim() ||
      ''

    // Date — pubDate or updated or published
    const rawDate =
      block.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ||
      block.match(/<updated>([\s\S]*?)<\/updated>/)?.[1] ||
      block.match(/<published>([\s\S]*?)<\/published>/)?.[1] ||
      ''

    let pubDate = ''
    if (rawDate) {
      try {
        pubDate = new Date(rawDate.trim()).toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })
      } catch {
        pubDate = rawDate.trim().substring(0, 10)
      }
    }

    if (title && link) {
      items.push({ title, link, pubDate, source, sourceColor: color })
      if (items.length >= limit) break
    }
  }

  return items
}

async function fetchFeed(
  url: string,
  source: string,
  color: string,
  limit = 2,
): Promise<NewsItem[]> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // cache 1h
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; DavidBrenet/1.0)' },
      signal: AbortSignal.timeout(4000),
    })
    if (!res.ok) return []
    const text = await res.text()
    return parseRSS(text, source, color, limit)
  } catch {
    return []
  }
}

export async function AiNewsFeed() {
  // Fetch all feeds in parallel
  const results = await Promise.allSettled(
    RSS_SOURCES.map((s) => fetchFeed(s.url, s.source, s.color, 2)),
  )

  const allItems: (NewsItem & { bg: string; border: string })[] = []
  results.forEach((r, i) => {
    if (r.status === 'fulfilled') {
      r.value.forEach((item) =>
        allItems.push({
          ...item,
          bg: RSS_SOURCES[i].bg,
          border: RSS_SOURCES[i].border,
        }),
      )
    }
  })

  // If all feeds failed, show a fallback
  if (allItems.length === 0) {
    return (
      <div className="text-center py-8 text-slate-600 text-sm">
        Flux d&apos;actualités temporairement indisponible.
      </div>
    )
  }

  // Shuffle to mix sources (deterministic based on title)
  const sorted = allItems.sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sorted.slice(0, 6).map((item) => (
        <a
          key={item.link}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`card-glass border ${item.border} p-5 hover:-translate-y-1 hover:border-opacity-60 transition-all duration-200 group flex flex-col gap-3`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.bg} ${item.sourceColor}`}>
              {item.source}
            </span>
            {item.pubDate && (
              <span className="text-xs text-slate-600">{item.pubDate}</span>
            )}
          </div>
          <p className="text-sm text-slate-300 leading-snug font-medium group-hover:text-cyan-400 transition-colors line-clamp-3">
            {item.title}
          </p>
          <span className={`text-xs ${item.sourceColor} mt-auto`}>Lire l&apos;article →</span>
        </a>
      ))}
    </div>
  )
}
