import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const subjectLabels: Record<string, string> = {
  conseil: 'Conseil Stratégique IA',
  agents: 'Déploiement Agents IA',
  generative: 'IA Générative & Sécurisation',
  formation: 'Formation & Conférences',
  architecture: 'Architecture & Data',
  conference: 'Invitation en conférence',
  other: 'Autre demande',
}

export async function POST(req: Request) {
  const body = await req.json()
  const { firstName, lastName, company, role, email, phone, subject, message } = body

  const subjectLabel = subjectLabels[subject] ?? subject

  try {
    await resend.emails.send({
      from: 'Cabinet David Brenet <contact@davidbrenet.com>',
      to: 'brenet.david@gmail.com',
      replyTo: email,
      subject: `[Contact] ${firstName} ${lastName} — ${subjectLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 8px;">
            Nouveau message de contact
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Nom</strong></td>
              <td style="padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Entreprise</strong></td>
              <td style="padding: 8px 0;">${company}${role ? ` — ${role}` : ''}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Email</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Téléphone</strong></td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Sujet</strong></td>
              <td style="padding: 8px 0;">${subjectLabel}</td>
            </tr>
          </table>

          <div style="background: #f8fafc; border-left: 4px solid #0ea5e9; padding: 16px; border-radius: 4px; margin: 20px 0;">
            <strong style="color: #64748b; display: block; margin-bottom: 8px;">Message :</strong>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
            Message reçu depuis davidbrenet.com — Répondre directement à cet email contactera ${firstName} ${lastName}.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur envoi email:', error)
    return NextResponse.json({ error: "Erreur lors de l'envoi du message" }, { status: 500 })
  }
}
