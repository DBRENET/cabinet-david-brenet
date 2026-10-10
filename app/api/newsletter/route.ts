import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const RESOURCE_LABELS: Record<string, string> = {
  'grille-maturite-ia-agentique': 'Grille de maturité IA agentique',
  'checklist-ai-act-article-4': 'Check-list AI Act article 4',
  '10-cas-usage-agents-assurance': '10 cas d\'usage agentiques en assurance',
  'newsletter-accueil': 'Newsletter (accueil)',
  'blog': 'Newsletter (blog)',
}

export async function POST(req: Request) {
  const body = await req.json()
  const { email, resource } = body

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
  }

  const resourceLabel = RESOURCE_LABELS[resource] ?? resource ?? 'Non précisé'

  // ── 1. Notification par email via Resend ─────────────────────────────────
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    await resend.emails.send({
      from: 'Cabinet David Brenet <contact@davidbrenet.com>',
      to: 'brenet.david@gmail.com',
      subject: `📥 Nouvelle demande de ressource — ${resourceLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
          <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 8px;">
            Nouvelle demande de ressource
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Email</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Ressource</strong></td>
              <td style="padding: 8px 0;">${resourceLabel}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Date</strong></td>
              <td style="padding: 8px 0;">${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}</td>
            </tr>
          </table>
          <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
            Reçu depuis davidbrenet.com/ressources
          </p>
        </div>
      `,
    })
  } catch (err) {
    // On ne bloque pas la réponse si Resend échoue
    console.error('[Newsletter] Erreur notification Resend:', err)
  }

  // ── 2. Ajout dans Brevo si configuré ────────────────────────────────────
  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID

  if (!apiKey || !listId) {
    // Brevo non configuré — la notification Resend suffit pour l'instant
    console.log(`[Newsletter] Brevo non configuré. Contact enregistré : ${email} — ${resourceLabel}`)
    return NextResponse.json({ success: true })
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        listIds: [Number(listId)],
        updateEnabled: true,
        attributes: {
          ...(resource ? { RESSOURCE_DEMANDEE: resource } : {}),
        },
      }),
    })

    if (!res.ok && res.status !== 204) {
      const err = await res.json().catch(() => ({}))
      console.error('[Newsletter] Erreur Brevo:', err)
      // On retourne quand même success — la notification Resend est partie
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Newsletter] Erreur Brevo:', error)
    return NextResponse.json({ success: true }) // Resend a fonctionné, on retourne success
  }
}
