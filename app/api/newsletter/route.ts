import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const RESOURCE_LABELS: Record<string, string> = {
  'grille-maturite-ia-agentique': 'Grille de maturité IA agentique',
  'checklist-ai-act-article-4': 'Check-list AI Act article 4',
  '10-cas-usage-agents-assurance': '10 cas d\'usage agentiques en assurance',
  'newsletter-accueil': 'Newsletter (accueil)',
  'blog': 'Newsletter (blog)',
}

// URL de téléchargement direct des PDFs
const RESOURCE_DOWNLOAD_URLS: Record<string, string> = {
  'grille-maturite-ia-agentique': 'https://davidbrenet.com/ressources/grille-maturite-ia-agentique.pdf',
  'checklist-ai-act-article-4': 'https://davidbrenet.com/ressources/checklist-ai-act-article-4.pdf',
  '10-cas-usage-agents-assurance': 'https://davidbrenet.com/ressources/10-cas-usage-agents-assurance.pdf',
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

  // ── 2. Email de livraison au prospect (si ressource téléchargeable) ─────
  const downloadUrl = RESOURCE_DOWNLOAD_URLS[resource]
  if (downloadUrl) {
    try {
      await resend.emails.send({
        from: 'David Brenet <contact@davidbrenet.com>',
        to: email,
        subject: `Votre ressource : ${resourceLabel}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #f8fafc; padding: 0;">
            <div style="background: #0f172a; padding: 32px 40px; border-bottom: 4px solid #06b6d4;">
              <p style="color: #06b6d4; font-size: 12px; font-weight: bold; margin: 0 0 8px;">CABINET DAVID BRENET — IA AGENTIQUE</p>
              <h1 style="color: #ffffff; font-size: 22px; margin: 0;">Votre ressource est prête ✅</h1>
            </div>

            <div style="padding: 32px 40px; background: #ffffff;">
              <p style="color: #475569; font-size: 15px; line-height: 1.6; margin: 0 0 24px;">
                Merci pour votre intérêt. Voici votre accès direct à <strong style="color: #0f172a;">${resourceLabel}</strong>.
              </p>

              <div style="text-align: center; margin: 32px 0;">
                <a href="${downloadUrl}"
                   style="display: inline-block; background: #06b6d4; color: #0f172a; font-weight: bold; font-size: 16px; padding: 16px 36px; border-radius: 8px; text-decoration: none;">
                  📥 Télécharger le PDF
                </a>
              </div>

              <p style="color: #64748b; font-size: 13px; margin: 16px 0 0;">
                Lien direct : <a href="${downloadUrl}" style="color: #0891b2;">${downloadUrl}</a>
              </p>

              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 28px 0;" />

              <p style="color: #475569; font-size: 14px; margin: 0 0 8px;"><strong>David Brenet</strong></p>
              <p style="color: #64748b; font-size: 13px; margin: 0 0 4px;">Expert IA Agentique — Claude · Gemini · Copilot</p>
              <p style="color: #64748b; font-size: 13px; margin: 0;">
                <a href="https://davidbrenet.com" style="color: #0891b2;">davidbrenet.com</a>
              </p>

              <div style="background: #f1f5f9; border-left: 4px solid #06b6d4; padding: 16px; border-radius: 4px; margin: 24px 0 0;">
                <p style="color: #475569; font-size: 12px; margin: 0;">
                  Vous souhaitez aller plus loin ? Je propose des <strong>audits gratuits de 30 minutes</strong>
                  pour évaluer votre maturité IA et identifier vos 3 prochaines actions prioritaires.
                  Répondez simplement à cet email.
                </p>
              </div>
            </div>

            <div style="padding: 16px 40px; background: #f8fafc;">
              <p style="color: #94a3b8; font-size: 11px; margin: 0; text-align: center;">
                Vous recevez cet email car vous avez demandé une ressource sur davidbrenet.com.
              </p>
            </div>
          </div>
        `,
      })
    } catch (err) {
      console.error('[Newsletter] Erreur envoi email prospect:', err)
    }
  }

  // ── 3. Ajout dans Brevo si configuré ────────────────────────────────────
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
