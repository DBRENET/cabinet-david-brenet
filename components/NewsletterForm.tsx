'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

interface NewsletterFormProps {
  resource?: string
  placeholder?: string
  buttonLabel?: string
  successMessage?: string
  className?: string
}

export function NewsletterForm({
  resource = 'newsletter',
  placeholder = 'votre@email.fr',
  buttonLabel = "S'abonner",
  successMessage = 'Merci ! Vous allez recevoir un email de confirmation.',
  className = '',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, resource }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-3 text-sm text-emerald-400 ${className}`}>
        <CheckCircle2 size={18} className="flex-shrink-0" />
        {successMessage}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-3 ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className="flex-1 bg-navy-800/80 border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:border-cyan-500 outline-none transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary text-sm whitespace-nowrap disabled:opacity-60"
      >
        {status === 'loading' ? 'Envoi…' : buttonLabel}
        {status === 'idle' && <ArrowRight size={14} />}
      </button>
      {status === 'error' && (
        <p className="text-xs text-red-400 mt-1 absolute">Erreur — réessayez.</p>
      )}
    </form>
  )
}
