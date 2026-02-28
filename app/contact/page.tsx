'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, MapPin, Linkedin, Clock, CheckCircle2, Send, ArrowRight, Phone } from 'lucide-react'

const subjects = [
  { value: 'conseil', label: 'Conseil Stratégique IA' },
  { value: 'agents', label: 'Déploiement Agents IA' },
  { value: 'generative', label: 'IA Générative & Sécurisation' },
  { value: 'formation', label: 'Formation & Conférences' },
  { value: 'architecture', label: 'Architecture & Data' },
  { value: 'conference', label: 'Invitation en conférence' },
  { value: 'other', label: 'Autre demande' },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', company: '', role: '', email: '', phone: '', subject: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Intégrer votre service d'envoi d'email (Resend, Mailgun, etc.)
    // Exemple avec Resend: POST /api/contact
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-900 px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} className="text-cyan-400" />
          </div>
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Message envoyé</h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Merci pour votre message. David Brenet reviendra vers vous dans les meilleurs délais,
            généralement sous 24 à 48 heures ouvrées.
          </p>
          <Link href="/" className="btn-primary">
            Retour à l&apos;accueil <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-navy-950 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Contact</div>
          <div className="cyan-line mb-6" />
          <h1 className="text-5xl font-bold text-slate-100 leading-tight mb-5">
            Prenons contact,<br />
            <span className="gradient-text">sans engagement</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Un premier échange confidentiel pour comprendre vos enjeux IA et explorer
            la manière dont nous pouvons vous accompagner.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Infos */}
            <div className="lg:col-span-1 space-y-6">
              <div className="card-glass p-7">
                <h3 className="font-bold text-slate-100 mb-5 text-lg">Coordonnées</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Email</div>
                      <a href="mailto:brenet.david@gmail.com" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                        brenet.david@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Localisation</div>
                      <div className="text-sm text-slate-300">Niort, Nouvelle-Aquitaine<br />France — Interventions nationales</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <Linkedin size={16} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">LinkedIn</div>
                      <a
                        href="https://www.linkedin.com/in/david-brenet-ab26367b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        David Brenet
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Téléphone</div>
                      <a href="tel:+33618162500" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                        +33 6 18 16 25 00
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Délai de réponse</div>
                      <div className="text-sm text-slate-300">24 à 48h ouvrées</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-glass p-7">
                <h3 className="font-bold text-slate-100 mb-4">Prendre rendez-vous</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  Préférez-vous réserver directement un créneau de 30 minutes pour un premier échange ?
                </p>
                {/* Espace pour intégrer Calendly */}
                <div className="bg-navy-800/60 rounded-xl p-5 border border-slate-700/50 text-center">
                  <div className="text-sm text-slate-400 mb-4">Planifier un appel découverte</div>
                  <a
                    href="https://calendly.com/brenet-david/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm w-full justify-center"
                  >
                    Ouvrir Calendly
                    <ArrowRight size={14} />
                  </a>
                  <p className="text-xs text-slate-500 mt-3">Appel de 30 min — Sans engagement</p>
                </div>
              </div>

              {/* Garanties */}
              <div className="card-glass p-7">
                <h3 className="font-bold text-slate-100 mb-4 text-sm uppercase tracking-wide">Nos engagements</h3>
                <ul className="space-y-3">
                  {[
                    'Confidentialité garantie',
                    'Réponse sous 24-48h',
                    'Premier échange sans engagement',
                    'Proposition personnalisée',
                  ].map((g) => (
                    <li key={g} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 size={14} className="text-cyan-400 flex-shrink-0" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <div className="card-glass p-8 md:p-10">
                <h2 className="text-2xl font-bold text-slate-100 mb-2">Décrivez votre besoin</h2>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Plus votre demande est précise, plus notre réponse sera pertinente et personnalisée.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Identité */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Prénom *</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Jean"
                        className="w-full bg-navy-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Nom *</label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Dupont"
                        className="w-full bg-navy-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Entreprise *</label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Votre société"
                        className="w-full bg-navy-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Fonction</label>
                      <input
                        type="text"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        placeholder="DSI, DG, Manager..."
                        className="w-full bg-navy-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email professionnel *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jean.dupont@societe.fr"
                        className="w-full bg-navy-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Téléphone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+33 6 XX XX XX XX"
                        className="w-full bg-navy-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Sujet de la demande *</label>
                    <select
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full bg-navy-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 outline-none transition-colors"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      {subjects.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Votre message *</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre contexte, vos enjeux et ce que vous attendez de notre collaboration..."
                      className="w-full bg-navy-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* RGPD */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      id="rgpd"
                      className="mt-0.5 w-4 h-4 rounded border-slate-600 bg-navy-800 text-cyan-500 focus:ring-cyan-500/30 flex-shrink-0"
                    />
                    <label htmlFor="rgpd" className="text-xs text-slate-500 leading-relaxed">
                      J&apos;accepte que mes données soient utilisées pour traiter ma demande de contact.
                      Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression.
                    </label>
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                    Envoyer ma demande
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
