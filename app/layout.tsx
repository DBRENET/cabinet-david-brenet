import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://davidbrenet.com'),
  title: {
    default: 'David Brenet — Conseil IA, Formation IA & Agents IA | France',
    template: '%s | David Brenet',
  },
  description:
    'J\'accompagne entreprises et grandes écoles : conseil stratégique IA, formation IA (COMEX, managers, équipes IT), conférences et déploiement d\'agents IA & automatisation.',
  keywords: [
    'conseil IA France',
    'formation IA entreprise',
    'formation IA COMEX',
    'agents IA automatisation',
    'gouvernance IA',
    'stratégie IA COMEX',
    'conférences IA',
    'IA générative entreprise sécurisée',
    'consultant IA France',
    'David Brenet',
    'IA Act conformité',
    'RAG retrieval augmented generation',
    'LLM entreprise',
    'formation IA dirigeants',
    'enseignement IA supérieur',
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
    siteName: 'David Brenet — Conseil & Formation IA',
    title: 'David Brenet — Conseil IA, Formation IA & Agents IA',
    description:
      'J\'accompagne entreprises et grandes écoles : stratégie IA, formation, agents & automatisation.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'David Brenet — Conseil & Formation IA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Brenet — Conseil IA, Formation IA & Agents IA',
    description: 'Conseil stratégique IA, formation (entreprises & écoles), agents IA & automatisation.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://davidbrenet.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'David Brenet — Conseil & Formation IA',
  description:
    'Conseil stratégique IA, formation IA (entreprises & grandes écoles), agents IA & automatisation.',
  url: 'https://davidbrenet.com',
  email: 'brenet.david@gmail.com',
  telephone: '+33618162500',
  founder: {
    '@type': 'Person',
    name: 'David Brenet',
    jobTitle: 'Expert IA — Conseil, Formation & Agents IA',
    alumniOf: ['CNAM', 'Grenoble École de Management'],
    knowsAbout: [
      'Intelligence Artificielle',
      'Gouvernance IA',
      'Agents IA',
      'Formation IA',
      'Transformation Digitale',
      'LLM',
      'RAG',
    ],
    sameAs: ['https://www.linkedin.com/in/david-brenet-ab26367b'],
  },
  areaServed: { '@type': 'Country', name: 'France' },
  serviceType: [
    'Conseil Stratégique IA',
    'Formation IA Entreprise',
    'Déploiement Agents IA',
    'Gouvernance IA',
    'Conférences IA',
    'Enseignement supérieur IA',
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
