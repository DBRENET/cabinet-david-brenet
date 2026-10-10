import Link from 'next/link'
import { Linkedin, Mail, MapPin, ArrowRight, Phone, Download } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg text-sm">
                DB
              </div>
              <div>
                <div className="font-bold text-slate-100">David Brenet</div>
                <div className="text-xs text-slate-400">IA Agentique • Claude • Gemini • Copilot</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-5">
              Je forme les équipes et j&apos;accompagne le déploiement d&apos;agents IA dans les
              organisations de tous secteurs — de la gouvernance AI Act au premier agent en production.
            </p>
            <Link
              href="/ressources"
              className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
            >
              <Download size={14} />
              Télécharger la grille de maturité IA agentique
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/david-brenet-ia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn David Brenet"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-all"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:brenet.david@gmail.com"
                aria-label="Envoyer un email à David Brenet"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-all"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+33618162500"
                aria-label="Appeler David Brenet"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400 text-slate-400 flex items-center justify-center transition-all"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-slate-100 font-semibold text-sm mb-5 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '/claude-ia-agentique', label: 'IA Agentique & Claude' },
                { href: '/offres', label: 'Mes offres' },
                { href: '/formation', label: 'Formations' },
                { href: '/ressources', label: 'Ressources gratuites' },
                { href: '/cas-clients', label: 'Études de cas' },
                { href: '/publications', label: 'Publications' },
                { href: '/blog', label: 'Blog IA' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-slate-100 font-semibold text-sm mb-5 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={15} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                <span>Niort, Nouvelle-Aquitaine<br />Interventions dans toute la France</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail size={15} className="text-cyan-500 flex-shrink-0" />
                <a href="mailto:brenet.david@gmail.com" className="hover:text-cyan-400 transition-colors">
                  brenet.david@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone size={15} className="text-cyan-500 flex-shrink-0" />
                <a href="tel:+33618162500" className="hover:text-cyan-400 transition-colors">
                  +33 6 18 16 25 00
                </a>
              </li>
            </ul>
            <div className="mt-8 space-y-2">
              <Link href="/ressources" className="btn-primary text-sm w-full justify-center">
                <Download size={14} />
                Ressources gratuites
              </Link>
              <Link href="/contact" className="btn-outline text-sm w-full justify-center">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} David Brenet. Tous droits réservés.
          </p>
          <p className="text-slate-600 text-xs text-center md:text-right">
            Claude est une marque d&apos;Anthropic. Ce site est indépendant et n&apos;est pas affilié à Anthropic.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/mentions-legales" className="hover:text-slate-300 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:text-slate-300 transition-colors">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
