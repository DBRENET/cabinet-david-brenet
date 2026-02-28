import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  robots: { index: false },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-32 pb-20 bg-navy-900 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-10">
          <ArrowLeft size={15} /> Retour à l&apos;accueil
        </Link>
        <h1 className="text-4xl font-bold text-slate-100 mb-10">Politique de Confidentialité</h1>
        <div className="space-y-8 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Données collectées</h2>
            <p>Nous collectons uniquement les données que vous nous transmettez volontairement via le formulaire de contact :
            prénom, nom, société, fonction, email et message. Ces données sont nécessaires pour répondre à votre demande.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Utilisation des données</h2>
            <p>Vos données sont utilisées exclusivement pour vous répondre et, si vous y avez consenti, pour vous informer
            de nos actualités. Elles ne sont jamais vendues ni partagées avec des tiers non autorisés.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Conservation</h2>
            <p>Vos données sont conservées pendant 3 ans à compter de notre dernier échange, sauf obligation légale contraire
            ou demande de suppression de votre part.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Vos droits (RGPD)</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            accès, rectification, suppression, portabilité et opposition. Pour exercer ces droits, contactez-nous :
            contact@davidbrenet.com</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Cookies</h2>
            <p>Ce site n&apos;utilise pas de cookies tiers à des fins publicitaires. Des cookies techniques peuvent être utilisés
            pour le bon fonctionnement du site. Aucun cookie de tracking n&apos;est déposé sans votre consentement.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
