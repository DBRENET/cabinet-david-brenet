import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-20 bg-navy-900 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-10">
          <ArrowLeft size={15} /> Retour à l&apos;accueil
        </Link>
        <h1 className="text-4xl font-bold text-slate-100 mb-10">Mentions Légales</h1>
        <div className="space-y-8 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Éditeur du site</h2>
            <p>Cabinet David Brenet<br />Niort, Nouvelle-Aquitaine, France<br />Email : contact@davidbrenet.com</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Hébergement</h2>
            <p>Ce site est hébergé sur Vercel Inc., 340 Pine Street, San Francisco, CA 94104, USA.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Propriété intellectuelle</h2>
            <p>L&apos;ensemble du contenu de ce site (textes, images, graphismes) est la propriété exclusive
            de David Brenet ou de ses partenaires, et est protégé par le droit de la propriété intellectuelle.
            Toute reproduction, même partielle, est strictement interdite sans autorisation préalable.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Données personnelles</h2>
            <p>Les informations recueillies via le formulaire de contact sont utilisées uniquement pour
            répondre à votre demande. Elles ne sont jamais cédées à des tiers. Conformément au RGPD,
            vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
            Pour exercer ce droit, contactez : contact@davidbrenet.com</p>
          </section>
        </div>
      </div>
    </div>
  )
}
