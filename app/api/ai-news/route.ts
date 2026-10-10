import { NextResponse } from 'next/server'

interface NewsItem {
  title: string
  link: string
  pubDate: string
  source: string
}

const RSS_SOURCES = [
  { url: 'https://www.anthropic.com/rss.xml', source: 'Anthropic' },
  { url: 'https://techcrunch.com/tag/artificial-intelligence/feed/', source: 'TechCrunch' },
  { url: 'https://www.lemonde.fr/intelligence-artificielle/rss_full.xml', source: 'Le Monde IA' },
]

function parseRSS(xml: string, source: string, limit = 3): NewsItem[] {
  const items: NewsItem[] = []
  const tagName = xml.includes('<entry>') ? 'entry' : 'item'
  const pattern = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'g')
  let match: RegExpExecArray | null

  while ((match = pattern.exec(xml)) !== null) {
    const block = match[1]

    const rawTitle =
      block.match(/<title[^>]*><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1] ||
      block.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1] ||
      ''
    const title = rawTitle.replace(/<[^>]+>/g, '').trim()

    const link =
      block.match(/<link[^>]+href="([^"]+)"/)?.[1] ||
      block.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim() ||
      ''

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
        })
      } catch {
        pubDate = ''
      }
    }

    if (title && link) {
      items.push({ title, link, pubDate, source })
      if (items.length >= limit) break
    }
  }
  return items
}

async function fetchFeed(url: string, source: string, limit = 2): Promise<NewsItem[]> {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; DavidBrenet/1.0; RSS reader)' },
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) return []
    const xml = await res.text()
    return parseRSS(xml, source, limit)
  } catch {
    return []
  }
}

export const revalidate = 3600 // Revalidate every hour

export async function GET() {
  const results = await Promise.allSettled(
    RSS_SOURCES.map((s) => fetchFeed(s.url, s.source, 2)),
  )

  const items: NewsItem[] = []
  results.forEach((r) => {
    if (r.status === 'fulfilled') items.push(...r.value)
  })

  // Sort to mix sources
  items.sort(() => Math.random() - 0.5)

  return NextResponse.json({ items: items.slice(0, 6) })
}
