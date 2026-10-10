'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  BookOpen, Award, GraduationCap, Mic2,
  AlertTriangle, Bot, Shield, Zap, Network, Code2,
  Download, Calendar, Mail, FileText, Users, Building2,
  Brain, Target, ThumbsUp, MessageCircle, Repeat2, ExternalLink,
} from 'lucide-react'
import { TrustedBy } from '@/components/TrustedBy'
import { AiNewsFeedClient } from '@/components/AiNewsFeedClient'

/* ── Newsletter inline ───────────────────────────────────── */
function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, resource: 'newsletter-accueil' }),
      })
      if (!res.ok) throw new Error()
      setStatus('ok')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <div className="flex items-center gap-3 text-emerald-400 text-sm">
        <CheckCircle2 size={18} />
        <span>Inscription confirmée — bienvenue dans la communauté !</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="votre@email.fr"
        className="flex-1 bg-navy-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500 outline-none transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary text-sm whitespace-nowrap disabled:opacity-60"
      >
        {status === 'loading' ? 'Inscription...' : "S'abonner"}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-xs mt-1">Erreur — essayez à nouveau ou écrivez-moi directement.</p>
      )}
    </form>
  )
}

/* ── FAQ ─────────────────────────────────────────────────── */
const faqs = [
  {
    q: 'Quelle est la différence entre un chatbot et un agent IA ?',
    a: 'Un chatbot répond à des questions. Un agent IA agit : il décompose un objectif complexe, utilise des outils (API, bases de données, applications métiers), prend des décisions et produit des résultats concrets dans vos processus. C\'est un saut qualitatif majeur dans l\'utilisation de l\'IA en entreprise.',
  },
  {
    q: 'Quel secteur accompagnez-vous ?',
    a: 'J\'interviens dans tous les secteurs : assurance et mutuelles, banque, industrie, retail, santé, secteur public. L\'IA agentique est transverse : les architectures avec Claude, Gemini ou Copilot s\'adaptent au contexte de chaque organisation. Ce qui change selon le secteur, c\'est la connaissance des processus métiers et des contraintes réglementaires — c\'est là que mon expérience terrain de 23 ans fait la différence.',
  },
  {
    q: 'Claude, Gemini, Copilot — lequel choisir pour votre organisation ?',
    a: 'Je travaille avec les trois grands écosystèmes : Claude (Anthropic) pour sa sécurité des données, son SDK agents et son MCP — c\'est ma signature et l\'outil que je recommande pour le déploiement en production. Google Gemini pour les organisations déjà dans l\'écosystème Google Workspace. Microsoft Copilot pour les environnements Microsoft 365. Je construis des architectures qui peuvent être agnostiques au LLM selon vos contraintes. L\'objectif est toujours la production, pas l\'expérimentation.',
  },
  {
    q: 'Mes équipes n\'ont pas de profil technique — est-ce que vos formations leur conviennent ?',
    a: 'Oui. Le catalogue propose des formations pour tous les niveaux : de la demi-journée pour les COMEX jusqu\'aux 3 jours pour les équipes IT. Les formations managers et métiers ne nécessitent aucun prérequis technique. L\'objectif est toujours de rendre l\'agentique compréhensible et actionnnable, quel que soit le public.',
  },
  {
    q: 'Comment se passe un premier contact ?',
    a: 'Je propose un appel découverte de 30 minutes, sans engagement, pour comprendre votre contexte et vos enjeux. À l\'issue, je vous indique si et comment je peux vous aider, et je vous envoie une proposition adaptée dans les 48h.',
  },
  {
    q: 'Intervenez-vous hors de Niort et de la Nouvelle-Aquitaine ?',
    a: 'Oui, j\'interviens dans toute la France. Les formations peuvent se tenir en présentiel chez vous, en distanciel ou en format mixte. Pour les conférences et séminaires COMEX, je me déplace.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-800/60 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-slate-200 text-sm leading-relaxed">{q}</span>
        {open ? <ChevronUp size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" /> : <ChevronDown size={18} className="text-slate-500 flex-shrink-0 mt-0.5" />}
      </button>
      {open && (
        <p className="pb-5 text-sm text-slate-400 leading-relaxed">{a}</p>
      )}
    </div>
  )
}

/* ── Page ────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ── BANDEAU LIVRE À PARAÎTRE ──────────────────────── */}
      <div className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-cyan-600/20 border-b border-cyan-500/20 py-2 px-4 text-center text-sm text-slate-300">
        <span className="text-cyan-400 font-semibold">📘 À paraître le 18 novembre 2026</span>
        {' '}— 2ème édition de{' '}
        <span className="italic">L&apos;Intelligence Artificielle expliquée</span>
        {' '}aux Éditions ENI
        <Link href="/publications" className="ml-3 text-cyan-400 hover:underline text-xs">En savoir plus →</Link>
      </div>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 pt-36 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT: headline text */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="tag text-cyan-400">
                  Niort&nbsp;•&nbsp;Tous secteurs&nbsp;•&nbsp;IA Agentique &amp; Claude &amp; Gemini
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-100 leading-[1.08] tracking-tight mb-6">
                De la gouvernance AI Act
                <br />
                <span className="gradient-text">à votre premier agent IA</span>
                <br />
                en production
              </h1>

              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                Je forme les équipes IT et métiers des entreprises de tous secteurs
                et j&apos;accompagne le déploiement de leurs agents Claude, Gemini et Copilot.
                <strong className="text-slate-300"> 23 ans en IT, 2 ouvrages de référence ENI, enseignant CNAM.</strong>
              </p>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mb-16">
                <Link href="/ressources" className="btn-primary text-base px-7 py-4">
                  <Download size={18} />
                  Télécharger la grille de maturité IA agentique
                </Link>
                <Link href="/formation" className="btn-outline text-base px-7 py-4">
                  Voir les formations Claude &amp; agents
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: '23 ans', label: 'en innovation IT, Data & IA', icon: Award },
                  { value: '2 ouvrages', label: 'de référence Éd. ENI', icon: BookOpen },
                  { value: '8 000+', label: 'exemplaires vendus', icon: Award },
                  { value: 'CNAM · CESI · Orsys', label: 'enseignant', icon: GraduationCap },
                ].map(({ value, label, icon: Icon }) => (
                  <div key={label} className="border-l border-slate-700/60 pl-4">
                    <div className="text-xl font-bold text-cyan-400">{value}</div>
                    <div className="text-sm text-slate-400 leading-tight mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: profile card */}
            <div className="flex justify-center lg:justify-end">
              <div className="card-glass border border-slate-700/60 p-8 rounded-2xl flex flex-col items-center gap-5 max-w-xs w-full">
                <Image
                  src="/images/david-brenet.jpg"
                  alt="David Brenet"
                  width={200}
                  height={200}
                  className="rounded-full object-cover w-36 h-36 ring-4 ring-cyan-500/40"
                />
                <div className="text-center">
                  <div className="text-xl font-bold text-slate-100 mb-2">David Brenet</div>
                  <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                    {['Expert IA Agentique', 'Responsable DATA/IA', 'Enseignant formateur', 'Auteur'].map(tag => (
                      <span key={tag} className="text-xs bg-slate-800 text-cyan-400 border border-slate-700 rounded-full px-2.5 py-1 font-medium">{tag}</span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1.5 text-xs text-cyan-400 font-medium mb-5">
                    <Award size={11} />
                    23 ans en innovation IT, Data &amp; IA
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="https://www.linkedin.com/in/david-brenet-ia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-400 text-sm font-medium hover:bg-blue-600/30 transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      Voir le profil LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROBLÈME ─────────────────────────────────────── */}
      <section className="py-24 bg-navy-800/40 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag mb-3">Ce que vivent vos équipes aujourd&apos;hui</div>
            <div className="cyan-line mx-auto mb-5" />
            <h2 className="section-title mb-4">Quatre freins qui bloquent l&apos;IA en entreprise</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Des blocages réels, documentés, et qui ont des solutions concrètes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: AlertTriangle,
                color: 'text-amber-400',
                bg: 'bg-amber-500/10',
                border: 'border-amber-500/20',
                title: 'Les POC ne passent pas en production',
                desc: '80% des projets IA restent au stade de la démonstration. La distance entre « ça marche en démo » et « c\'est industrialisé » reste le principal point de rupture dans les organisations.',
              },
              {
                icon: Shield,
                color: 'text-red-400',
                bg: 'bg-red-500/10',
                border: 'border-red-500/20',
                title: 'Le shadow AI fait peur',
                desc: 'Les collaborateurs utilisent ChatGPT avec des données sensibles, des contrats, des documents internes. Sans cadre, le risque réglementaire et réputationnel est réel en entreprise.',
              },
              {
                icon: FileText,
                color: 'text-purple-400',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/20',
                title: 'Article 4 AI Act : une obligation ignorée',
                desc: 'L\'article 4 impose la formation de toutes les personnes travaillant avec des systèmes IA à haut risque. La plupart des organisations ne savent pas encore comment la documenter.',
              },
              {
                icon: Network,
                color: 'text-blue-400',
                bg: 'bg-blue-500/10',
                border: 'border-blue-500/20',
                title: 'La sécurité des données bloque tout',
                desc: 'Données clients, contrats, documents sensibles : l\'exposition à des LLM cloud sans contrôle fait peur aux RSSI et aux DPO. Et ils ont raison — mais des solutions existent.',
              },
            ].map(({ icon: Icon, color, bg, border, title, desc }) => (
              <div key={title} className={`card-glass p-6 border ${border} hover:-translate-y-1 transition-all duration-300`}>
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon size={22} className={color} />
                </div>
                <h3 className="font-bold text-slate-100 mb-2 text-sm leading-tight">{title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm mb-4">
              J&apos;ai vécu ces problèmes de l&apos;intérieur. Ma méthode va de la gouvernance jusqu&apos;à l&apos;agent en production.
            </p>
            <Link href="/claude-ia-agentique" className="btn-outline text-sm">
              Comprendre ma méthode <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3 OFFRES PRODUCTISÉES ────────────────────────── */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag mb-3">Mes offres</div>
            <div className="cyan-line mx-auto mb-5" />
            <h2 className="section-title mb-4">Trois façons de travailler ensemble</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Des engagements clairs, des livrables précis, un interlocuteur unique
              qui connaît vos enjeux de l&apos;intérieur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Mic2,
                color: 'text-purple-400',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/30',
                badge: 'Keynote ou séminaire',
                title: 'COMEX « IA agentique »',
                desc: 'Une demi-journée pour embarquer votre direction. Je présente les enjeux de l\'IA agentique pour votre secteur, les cas d\'usage prioritaires, les risques et la feuille de route. Adapté à vos enjeux spécifiques.',
                items: ['Keynote ou table ronde dirigeants', 'Cas d\'usage sectoriels concrets', 'Questions-réponses COMEX', 'Support personnalisé'],
                cta: 'Organiser un séminaire',
                href: '/contact',
              },
              {
                icon: GraduationCap,
                color: 'text-cyan-400',
                bg: 'bg-cyan-500/10',
                border: 'border-cyan-500/30',
                badge: 'Formation intra',
                title: 'Claude & Agents IA',
                desc: 'Un catalogue de 6 formations certifiantes, de la demi-journée (COMEX) aux 3 jours (équipes IT). Présentiel à Niort, intra chez vous, ou distanciel. Programme adapté à votre contexte.',
                items: ['6 formations du catalogue', 'De la demi-journée à 3 jours', 'Présentiel, distanciel ou mixte', 'Attestation + supports inclus'],
                cta: 'Voir le catalogue',
                href: '/formation',
                featured: true,
              },
              {
                icon: Bot,
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10',
                border: 'border-emerald-500/30',
                badge: 'Diagnostic',
                title: 'Maturité & feuille de route agentique',
                desc: 'Un diagnostic structuré pour savoir où vous en êtes et par où commencer. Évaluation de votre maturité, cartographie des cas d\'usage prioritaires, feuille de route agentique avec Claude.',
                items: ['Grille de maturité complétée', 'Cartographie des cas d\'usage', 'Feuille de route priorisée', 'Restitution dirigeants'],
                cta: 'Demander un diagnostic',
                href: '/contact',
              },
            ].map(({ icon: Icon, color, bg, border, badge, title, desc, items, cta, href, featured }) => (
              <div
                key={title}
                className={`card-glass border ${border} p-8 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative ${featured ? 'ring-1 ring-cyan-500/40' : ''}`}
              >
                {featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full">
                    Le plus demandé
                  </div>
                )}
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon size={22} className={color} />
                </div>
                <div className={`text-xs font-semibold uppercase tracking-wider ${color} mb-1`}>{badge}</div>
                <h3 className="text-xl font-bold text-slate-100 mb-3 leading-tight">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">{desc}</p>
                <ul className="space-y-2 mb-7">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 size={13} className={`${color} mt-0.5 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={href} className="btn-primary justify-center text-sm">
                  {cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI CLAUDE & L'AGENTIQUE ───────────────── */}
      <section className="py-24 bg-navy-800/40 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag mb-3">Pourquoi Claude et l&apos;agentique</div>
              <div className="cyan-line mb-6" />
              <h2 className="section-title mb-5">
                Un agent IA, ce n&apos;est pas un chatbot.
                <br />
                <span className="gradient-text">C&apos;est un collaborateur numérique.</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Un agent IA agit de façon autonome : il décompose un objectif, appelle vos outils
                métiers (API, bases de données, applications), prend des décisions et produit des
                résultats concrets dans vos processus — avec la supervision humaine que vous décidez.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                J&apos;ai choisi l&apos;écosystème <strong className="text-slate-200">Claude d&apos;Anthropic</strong> parce que c&apos;est
                aujourd&apos;hui la plateforme la plus complète pour passer de l&apos;expérimentation
                à la production dans un SI d&apos;entreprise.
              </p>
              <Link href="/claude-ia-agentique" className="btn-primary">
                Tout comprendre sur l&apos;IA agentique <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-3">
              {[
                { icon: Bot, color: 'text-cyan-400', bg: 'bg-cyan-500/10', title: 'Claude en entreprise', desc: 'Projets, skills et connecteurs pour déployer Claude dans votre organisation avec contrôle des accès et des données.' },
                { icon: Code2, color: 'text-blue-400', bg: 'bg-blue-500/10', title: 'Claude Code', desc: 'L\'assistant de développement pour vos équipes IT — revue de code, tests, refactoring, documentation automatique.' },
                { icon: Network, color: 'text-purple-400', bg: 'bg-purple-500/10', title: 'Model Context Protocol (MCP)', desc: 'Le protocole standard pour connecter les agents à vos outils métiers : ERP, CRM, bases documentaires, APIs internes.' },
                { icon: Zap, color: 'text-emerald-400', bg: 'bg-emerald-500/10', title: 'SDK d\'agents Claude', desc: 'Pour construire des agents métiers sur mesure — adaptés aux processus et contraintes de votre organisation.' },
                { icon: Shield, color: 'text-amber-400', bg: 'bg-amber-500/10', title: 'Gouvernance & sécurité', desc: 'Architecture sécurisée, isolation des données clients, conformité RGPD et AI Act intégrée dès la conception.' },
              ].map(({ icon: Icon, color, bg, title, desc }) => (
                <div key={title} className="flex gap-4 card-glass p-4 hover:border-slate-600 transition-colors">
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200 text-sm">{title}</div>
                    <div className="text-xs text-slate-500 leading-relaxed mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROCHE MESURE ─────────────────────────────────────────────── */}
      <section className="py-24 bg-navy-800/40 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag mb-3">Mon approche</div>
            <div className="cyan-line mx-auto mb-5" />
            <h2 className="section-title mb-4">La mise à l&apos;échelle de l&apos;IA par la mesure</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              80% des POC IA ne passent jamais en production. La raison est toujours la même : on n&apos;a pas mesuré. Mon approche en 5 étapes transforme cette réalité.
            </p>
          </div>

          {/* 5-step cycle */}
          <div className="grid sm:grid-cols-5 gap-4 mb-16">
            {[
              { num: '1', icon: Target, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', title: 'KPI', desc: 'Définir les indicateurs de production existants avant tout projet IA' },
              { num: '2', icon: CheckCircle2, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', title: 'Éligibilité IA', desc: 'Identifier la solution GenAI adaptée au cas d\'usage (Claude, Gemini, Copilot)' },
              { num: '3', icon: Zap, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', title: 'Gains théoriques', desc: 'Afficher le gain théorique attendu avec l\'apport de l\'IA générative' },
              { num: '4', icon: Bot, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', title: 'Expérimentation', desc: 'Expérimenter en situation réelle avec un niveau d\'exigence minimum sur la qualité des prompts' },
              { num: '5', icon: Award, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', title: 'Résultats', desc: 'Afficher les résultats réels en sortie et décider de la mise à l\'échelle' },
            ].map(({ num, icon: Icon, color, bg, border, title, desc }) => (
              <div key={num} className={`card-glass border ${border} p-5 text-center hover:-translate-y-1 transition-all duration-300 relative`}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-navy-900 border border-slate-700 flex items-center justify-center">
                  <span className="text-xs font-bold text-cyan-400">{num}</span>
                </div>
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mx-auto mb-3 mt-2`}>
                  <Icon size={20} className={color} />
                </div>
                <div className="font-bold text-slate-100 text-sm mb-2">{title}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Exemple concret - Développement */}
          <div className="card-glass border-slate-700/60 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code2 size={20} className="text-cyan-400" />
              <h3 className="text-lg font-bold text-slate-100">Exemple : Activité Développement</h3>
              <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">Résultats mesurés</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left py-3 pr-4 text-slate-400 font-medium text-xs uppercase tracking-wider">Activité</th>
                    <th className="text-center py-3 px-3 text-slate-400 font-medium text-xs uppercase tracking-wider">KPI</th>
                    <th className="text-center py-3 px-3 text-slate-400 font-medium text-xs uppercase tracking-wider">Éligibilité IA</th>
                    <th className="text-center py-3 px-3 text-slate-400 font-medium text-xs uppercase tracking-wider">Apport théorique</th>
                    <th className="text-center py-3 px-3 text-cyan-400 font-medium text-xs uppercase tracking-wider">Apport réel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {[
                    { activite: 'Production de code', sub: 'Génération de fonctions à chaud', kpi: '2,2 j/h', eligibilite: 'Génération de code (Copilot)', theorique: '+50% gain de temps', reel: '+23%', reelColor: 'text-emerald-400' },
                    { activite: 'Revue de code', sub: 'Passage dans Claude ou Copilot', kpi: '0,3 j/h', eligibilite: 'Revue de code', theorique: '+33% gain de temps', reel: '+18%', reelColor: 'text-emerald-400' },
                    { activite: 'Documentation', sub: 'Génération depuis le code source', kpi: '1 j/h', eligibilite: 'Génération de texte', theorique: '+30% gain de temps', reel: '+25%', reelColor: 'text-emerald-400' },
                    { activite: 'Fusion de code (merge)', sub: 'Prévisualisation IA des conflits', kpi: '1 j/h', eligibilite: 'Gestion des conflits', theorique: '+20% gain de temps', reel: 'En cours', reelColor: 'text-amber-400' },
                  ].map(({ activite, sub, kpi, eligibilite, theorique, reel, reelColor }) => (
                    <tr key={activite} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 pr-4">
                        <div className="font-medium text-slate-200 text-sm">{activite}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{sub}</div>
                      </td>
                      <td className="text-center py-3 px-3 text-slate-300 text-sm font-mono">{kpi}</td>
                      <td className="text-center py-3 px-3 text-slate-400 text-xs">{eligibilite}</td>
                      <td className="text-center py-3 px-3 text-purple-400 text-sm font-semibold">{theorique}</td>
                      <td className={`text-center py-3 px-3 text-sm font-bold ${reelColor}`}>{reel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-4">Cette approche reproductible s&apos;applique à toutes les phases : conception, tests, intégration, documentation.</p>
          </div>
        </div>
      </section>

      {/* ── PREUVES : LIVRES ─────────────────────────────── */}
      <section className="py-24 bg-navy-800/40 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag mb-3">Publications</div>
            <div className="cyan-line mx-auto mb-5" />
            <h2 className="section-title mb-4">La preuve par l&apos;écrit</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Deux ouvrages de référence aux Éditions ENI. Plus de 8 000 exemplaires vendus.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <span className="text-sm text-amber-400 font-semibold">5/5</span>
              <span className="text-sm text-slate-500">73 avis Amazon</span>
              <span className="text-xs text-slate-600 bg-slate-800 px-2 py-0.5 rounded-full">Top ventes Amazon IA</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                img: '/books/ia-expliquee.jpg',
                badge: '8 000+ exemplaires — 1ère édition 2024',
                badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
                title: 'L\'Intelligence Artificielle expliquée',
                subtitle: 'Des concepts de base aux applications avancées de l\'IA',
                desc: 'La référence pédagogique pour comprendre l\'IA : du machine learning aux agents. Adopté par des entreprises, des écoles et des managers.',
              },
              {
                img: '/books/ia-metiers-it.jpg',
                badge: 'Disponible — 2025',
                badgeColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
                title: 'L\'IA pour les professionnels de l\'IT',
                subtitle: 'Stratégie, architecture et déploiement',
                desc: 'Le guide opérationnel pour les DSI, architectes et ingénieurs qui pilotent la transformation IA de leur organisation.',
              },
              {
                img: '/books/ia-expliquee.jpg',
                badge: '🆕 À paraître — 18 novembre 2026',
                badgeColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
                title: 'L\'Intelligence Artificielle expliquée — 2ème édition',
                subtitle: 'Des concepts de base aux applications avancées de l\'IA',
                desc: 'Une édition entièrement mise à jour incluant l\'IA agentique, Claude, le MCP et les nouvelles obligations réglementaires.',
              },
            ].map((book) => (
              <div key={book.title} className="card-glass p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="w-full h-48 bg-navy-800 rounded-xl mb-5 overflow-hidden flex items-center justify-center">
                  <Image
                    src={book.img}
                    alt={book.title}
                    width={120}
                    height={170}
                    className="object-contain h-full p-3"
                  />
                </div>
                <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${book.badgeColor} mb-3 self-start`}>
                  {book.badge}
                </div>
                <h3 className="font-bold text-slate-100 text-sm leading-tight mb-1">{book.title}</h3>
                <p className="text-xs text-cyan-400 italic mb-3">{book.subtitle}</p>
                <p className="text-xs text-slate-500 leading-relaxed flex-1">{book.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <BookOpen size={13} />Éditions ENI
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/publications" className="btn-outline text-sm">
              Voir toutes les publications <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SKILLS & PROMPTING ──────────────────────────────────── */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag mb-3">Développement des talents</div>
            <div className="cyan-line mx-auto mb-5" />
            <h2 className="section-title mb-4">Développer les skills IA de vos équipes</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              L&apos;IA n&apos;est efficace que si les équipes savent l&apos;utiliser. J&apos;accompagne la montée en compétences de vos collaborateurs sur trois dimensions clés.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Brain,
                color: 'text-cyan-400',
                bg: 'bg-cyan-500/10',
                border: 'border-cyan-500/30',
                title: 'Formation au prompting',
                subtitle: 'Maîtriser l\'art d\'écrire pour l\'IA',
                desc: 'Des formations pratiques sur le prompt engineering : context, role, format, chain-of-thought, few-shot learning. Pour les profils métier comme pour les développeurs.',
                items: [
                  'Prompting fondamental (tous niveaux)',
                  'Prompt engineering avancé (chaînes, agents)',
                  'Techniques de structuration et d\'évaluation',
                  'Prompts pour les cas métier de votre secteur',
                ],
              },
              {
                icon: FileText,
                color: 'text-purple-400',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/30',
                title: 'Bibliothèque de prompts',
                subtitle: 'Capitaliser et industrialiser',
                desc: 'Je co-construis avec vos équipes une bibliothèque de prompts opérationnels, documentée, versionnée et maintenue. Un actif stratégique pour votre organisation.',
                items: [
                  'Audit des usages existants',
                  'Co-construction des prompts métier',
                  'Documentation et catégorisation',
                  'Gouvernance et mise à jour continue',
                ],
              },
              {
                icon: Users,
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10',
                border: 'border-emerald-500/30',
                title: 'Programme Orsys',
                subtitle: 'Formations inter-entreprises certifiées',
                desc: 'Formateur référencé chez Orsys, j\'anime des sessions inter-entreprises sur l\'IA générative, Claude et les agents IA. Un cadre structuré avec évaluation et attestation.',
                items: [
                  'Sessions inter-entreprises planifiées',
                  'Catalogue Orsys IA & Agents',
                  'Évaluation certifiante Orsys',
                  'Financement OPCO possible',
                ],
              },
            ].map(({ icon: Icon, color, bg, border, title, subtitle, desc, items }) => (
              <div key={title} className={`card-glass border ${border} p-7 hover:-translate-y-1 transition-all duration-300`}>
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                  <Icon size={24} className={color} />
                </div>
                <h3 className="font-bold text-slate-100 text-lg mb-1 leading-tight">{title}</h3>
                <p className={`text-sm ${color} mb-3 font-medium`}>{subtitle}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 size={12} className={`${color} mt-0.5 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="card-glass border-slate-700/50 p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap size={26} className="text-cyan-400" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="font-bold text-slate-100 mb-1">Formateur chez Orsys depuis 2024</div>
              <p className="text-sm text-slate-400">Orsys est l&apos;un des premiers organismes de formation informatique en France. J&apos;y anime des formations sur l&apos;IA générative et les agents IA, en inter comme en intra-entreprise.</p>
            </div>
            <Link href="/formation" className="btn-outline text-sm whitespace-nowrap flex-shrink-0">
              Voir le catalogue <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY ───────────────────────────────────── */}
      <TrustedBy title="Ils m'ont fait confiance" showLink={true} variant="dark" />

      {/* ── PROCHAINE SESSION ────────────────────────────── */}
      <section className="py-16 bg-navy-900 border-b border-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="tag mb-3 text-emerald-400">Prochaine session inter-entreprises</div>
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Formation <span className="gradient-text">Claude Code pour les équipes IT</span>
          </h2>
          <div className="card-glass p-8 max-w-2xl mx-auto border-emerald-500/20">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                <Calendar size={28} className="text-emerald-400" />
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-100 mb-1">Formation Claude Code — 2 jours</div>
                <div className="text-emerald-400 text-sm mb-1">📅 Janvier 2027 — Distanciel (Zoom) · 8 places max</div>
                <div className="text-slate-400 text-sm">Maîtriser Claude Code, automatiser la maintenance legacy et gagner 30 à 50 % de productivité en développement.</div>
              </div>
              <Link href="/contact?sujet=formation-claude-code" className="btn-primary text-sm whitespace-nowrap flex-shrink-0">
                S&apos;inscrire <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLUX ACTUALITÉS IA ───────────────────────────── */}
      <section className="py-20 bg-navy-800/40 border-y border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="tag mb-3">Veille IA en temps réel</div>
            <div className="cyan-line mx-auto mb-5" />
            <h2 className="section-title mb-3">L&apos;actu Claude, Gemini &amp; IA</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Les dernières actualités des grands acteurs de l&apos;IA — actualisées toutes les heures.
            </p>
          </div>
          <AiNewsFeedClient />
          <div className="text-center mt-8">
            <Link href="/blog" className="btn-outline text-sm">
              Mes analyses sur le blog <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── POSTS LINKEDIN ───────────────────────────────── */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="tag mb-3">Communauté LinkedIn</div>
            <div className="cyan-line mx-auto mb-5" />
            <h2 className="section-title mb-3">Mes derniers posts</h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Analyses, retours terrain, ressources pratiques — publiés chaque semaine sur LinkedIn.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              {
                date: 'Il y a 2 jours',
                content: `L'article 4 de l'AI Act est entré en vigueur en août 2026. La majorité des DSI que je croise ne savent toujours pas qu'ils ont une obligation de formation documentée pour leur personnel utilisant des systèmes IA.\n\nCe n'est pas une option. C'est une obligation légale.\n\nJ'ai préparé une check-list gratuite pour vous aider à vous y conformer.`,
                tag: 'Gouvernance AI Act',
                tagColor: 'text-red-400 bg-red-500/10 border-red-500/20',
                likes: 147,
                comments: 23,
                reposts: 18,
              },
              {
                date: 'Il y a 5 jours',
                content: `Résultats après 3 mois de Claude Code en DSI (40 développeurs, secteur industriel) :\n\n✅ +23% de productivité en production de code\n✅ +18% sur les revues de code\n✅ -25% de temps sur la documentation\n\nLe plus surprenant : ce n'est pas le gain de temps qui a le plus marqué les équipes. C'est la réduction du stress sur les tâches répétitives.\n\nRetour complet sur le blog.`,
                tag: 'Claude Code',
                tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
                likes: 312,
                comments: 47,
                reposts: 64,
              },
              {
                date: 'Il y a 1 semaine',
                content: `Gemini, Claude ou Copilot — la question que me posent 90% des DSI.\n\nMa réponse courte : ça dépend de votre écosystème existant, pas du modèle.\n\n• Déjà sur Google Workspace ? Gemini s'intègre nativement.\n• Environnement Microsoft 365 ? Copilot évite une refonte du SI.\n• Vous construisez des agents en production avec des exigences de sécurité élevées ? Claude + MCP, sans hésiter.\n\nLe meilleur LLM c'est celui que vos équipes vont réellement adopter.`,
                tag: 'Stratégie IA',
                tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
                likes: 228,
                comments: 31,
                reposts: 42,
              },
            ].map((post, i) => (
              <div key={i} className="card-glass p-5 flex flex-col gap-4 hover:border-slate-600 transition-all duration-200">
                {/* Header */}
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/david-brenet.jpg"
                    alt="David Brenet"
                    width={40}
                    height={40}
                    className="rounded-full object-cover w-10 h-10 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="font-semibold text-slate-100 text-sm leading-tight">David Brenet</div>
                    <div className="text-xs text-slate-500 leading-tight">Expert IA Agentique · Formateur · Auteur</div>
                    <div className="text-xs text-slate-600 mt-0.5">{post.date}</div>
                  </div>
                  <span className={`ml-auto text-xs font-medium px-2 py-0.5 rounded-full border flex-shrink-0 ${post.tagColor}`}>
                    {post.tag}
                  </span>
                </div>

                {/* Content */}
                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line flex-1">
                  {post.content}
                </p>

                {/* Engagement */}
                <div className="flex items-center gap-4 pt-3 border-t border-slate-800/60 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <ThumbsUp size={12} className="text-blue-400" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle size={12} />
                    {post.comments}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Repeat2 size={12} />
                    {post.reposts}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.linkedin.com/in/david-brenet-ia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-xl px-6 py-3 text-blue-400 text-sm font-medium hover:bg-blue-600/30 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Voir tous mes posts sur LinkedIn
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-navy-950 border-b border-slate-800/50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-5">
            <Mail size={22} className="text-cyan-400" />
          </div>
          <div className="tag mb-3">Newsletter mensuelle</div>
          <h2 className="text-2xl font-bold text-slate-100 mb-3">
            Chaque mois : 1 cas d&apos;usage agentique décortiqué, tous secteurs
          </h2>
          <p className="text-slate-400 mb-2 leading-relaxed">
            + l&apos;actualité Claude, les nouvelles obligations AI Act et une ressource pratique.
          </p>
          <p className="text-slate-500 text-sm mb-8">Pas de spam. Désinscription en un clic.</p>
          <NewsletterForm />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="tag mb-3">FAQ</div>
            <div className="cyan-line mx-auto mb-5" />
            <h2 className="section-title">Questions fréquentes</h2>
          </div>
          <div className="card-glass p-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="px-4">
                <FaqItem q={faq.q} a={faq.a} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="tag mb-4">Passons à l&apos;action</div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 tracking-tight">
            Un appel de 30 min,<br />
            <span className="gradient-text">sans engagement</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10">
            Je comprends votre contexte, j&apos;identifie le premier levier actionnable,
            et je vous dis franchement si et comment je peux vous aider.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Prendre rendez-vous <ArrowRight size={18} />
            </Link>
            <Link href="/ressources" className="btn-outline text-base px-10 py-4">
              <Download size={18} /> Ressources gratuites
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
