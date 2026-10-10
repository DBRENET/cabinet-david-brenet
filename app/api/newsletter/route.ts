import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { email, resource } = body

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID

  if (!apiKey || !listId) {
    // En mode dev sans clé Brevo : on simule le succès
    console.log(`[Newsletter] Inscription simulée : ${email} — ressource : ${resource ?? 'newsletter'}`)
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
      console.error('Erreur Brevo:', err)
      return NextResponse.json({ error: "Erreur lors de l'inscription" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur newsletter:', error)
    return NextResponse.json({ error: "Erreur lors de l'inscription" }, { status: 500 })
  }
}
