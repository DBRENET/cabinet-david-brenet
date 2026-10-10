import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://davidbrenet.com'),
  title: {
    default: 'David Brenet — IA Agentique & Claude pour l\'Assurance | Formation & Conseil | Niort',
    template: '%s | David Brenet',
  },
  description:
    'Expert IA agentique et Claude pour l\'assurance, les mutuelles et la finance. Je forme les équipes et déploie les premiers agents IA en production. Auteur de 2 livres ENI, enseignant CNAM, basé à Niort.',
  keywords: [
    'formation Claude entreprise',
    'formation Claude Code',
    'formation IA agentique',
    'agents IA assurance',
    'IA agentique mutuelle',
    'formation MCP',
    'formation AI Act article 4',
    'consultant IA Niort',
    'formation IA Nouvelle-Aquitaine',
    'David Brenet',
    'Model Context Protocol',
    'Claude Anthropic entreprise',
    'agent IA production assurance',
    'formation agents IA',
    'gouvernance IA agentique',
  ],
  authors: [{ name: 'David Brenet', url: 'https://davidbrenet.com' }],
  creator: 'David Brenet',
  publisher: 'David Brenet',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://davidbrenet.com',
    siteName: 'David Brenet — IA Agentique & Claude pour l\'Assurance',
    title: 'David Brenet — IA Agentique & Claude pour l\'Assurance | Formation & Conseil',
    description:
      'Je forme les équipes et déploie les agents Claude dans les DSI d\'assureurs et de mutuelles. De la gouvernance AI Act au premier agent en production.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'David Brenet — IA Agentique & Claude pour l\'Assurance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Brenet — IA Agentique & Claude pour l\'Assurance',
    description: 'Formation et déploiement d\'agents IA avec Claude pour l\'assurance et les mutuelles.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://davidbrenet.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://davidbrenet.com/#person',
      name: 'David Brenet',
      jobTitle: 'Expert IA Agentique — Formation & Déploiement Claude pour l\'Assurance',
      description: 'Ingénieur SI (CNAM), 23 ans d\'expérience IT dans l\'assurance et la finance mutualiste. Auteur de 2 livres ENI sur l\'IA. Enseignant CNAM, CESI, Ifpass. Spécialiste de l\'écosystème Claude (Anthropic) et de l\'IA agentique pour l\'assurance.',
      url: 'https://davidbrenet.com',
      email: 'contact@davidbrenet.com',
      telephone: '+33618162500',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Niort',
        addressRegion: 'Nouvelle-Aquitaine',
        addressCountry: 'FR',
      },
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'CNAM — Conservatoire National des Arts et Métiers' },
      ],
      knowsAbout: [
        'IA Agentique',
        'Claude (Anthropic)',
        'Model Context Protocol (MCP)',
        'Claude Code',
        'Agents IA',
        'AI Act',
        'Gouvernance IA',
        'Formation IA',
        'Assurance et IA',
      ],
      sameAs: ['https://www.linkedin.com/in/david-brenet-ia/'],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', name: 'Ingénieur SI — CNAM' },
      ],
      author: [
        {
          '@type': 'Book',
          name: 'L\'Intelligence Artificielle expliquée — Des concepts de base aux applications avancées de l\'IA',
          author: 'David Brenet',
          publisher: { '@type': 'Organization', name: 'Éditions ENI' },
          datePublished: '2024',
          inLanguage: 'fr',
        },
        {
          '@type': 'Book',
          name: 'L\'IA pour les professionnels de l\'IT',
          author: 'David Brenet',
          publisher: { '@type': 'Organization', name: 'Éditions ENI' },
          datePublished: '2025',
          inLanguage: 'fr',
        },
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://davidbrenet.com/#service',
      name: 'David Brenet — IA Agentique & Claude pour l\'Assurance',
      description: 'Formation et déploiement d\'agents IA avec Claude pour les assureurs, mutuelles et institutions de prévoyance.',
      url: 'https://davidbrenet.com',
      email: 'contact@davidbrenet.com',
      telephone: '+33618162500',
      founder: { '@id': 'https://davidbrenet.com/#person' },
      areaServed: { '@type': 'Country', name: 'France' },
      serviceType: [
        'Formation IA Agentique',
        'Formation Claude Entreprise',
        'Déploiement Agents IA',
        'Gouvernance IA & AI Act',
        'Conseil Stratégique IA Assurance',
        'Conférences IA',
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06B6D4" />
      </head>
      <body className="bg-navy-900 text-slate-100 antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
