'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Download } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/claude-ia-agentique', label: 'IA Agentique & Claude' },
  { href: '/offres', label: 'Offres' },
  { href: '/formation', label: 'Formations' },
  { href: '/ressources', label: 'Ressources' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/20">
              DB
            </div>
            <div>
              <div className="font-bold text-slate-100 text-sm leading-tight">David Brenet</div>
              <div className="text-xs text-slate-400 leading-tight tracking-wide">
                IA&nbsp;Agentique&nbsp;•&nbsp;Claude&nbsp;•&nbsp;Assurance
              </div>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                  pathname === link.href
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="hidden lg:block">
            <Link href="/ressources" className="btn-primary text-sm">
              <Download size={15} />
              Ressources gratuites
            </Link>
          </div>

          {/* ── Mobile toggle ── */}
          <button
            className="lg:hidden p-2 text-slate-300 hover:text-slate-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {isOpen && (
        <div className="lg:hidden bg-navy-800/98 backdrop-blur-lg border-t border-slate-800">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 pb-1 space-y-2">
              <Link
                href="/ressources"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full justify-center text-sm"
              >
                <Download size={15} />
                Ressources gratuites
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-outline w-full justify-center text-sm"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
