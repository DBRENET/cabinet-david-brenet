import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://davidbrenet.com'

  const pages = [
    { path: '',            priority: 1.0,  changeFrequency: 'weekly'  as const },
    { path: '/offres',     priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/formation',  priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/vision',     priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/publications', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/references', priority: 0.80, changeFrequency: 'monthly' as const },
    { path: '/blog',       priority: 0.90, changeFrequency: 'weekly'  as const },
    { path: '/contact',    priority: 0.90, changeFrequency: 'monthly' as const },
  ]

  const blogSlugs = [
    'ia-act-guide-conformite-entreprise',
    'agents-ia-metiers-conception-deploiement',
    'rag-securise-entreprise-donnees-internes',
    'roadmap-ia-structurer-strategie',
    'ia-generative-charte-entreprise',
    'roi-ia-mesurer-valeur-projets',
  ]

  return [
    ...pages.map(({ path, priority, changeFrequency }) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ]
}
