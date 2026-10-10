/**
 * Script de génération des 3 PDF lead magnets
 * Exécuter avec : node scripts/generate-pdfs.js
 */

const PDFDocument = require('pdfkit')
const fs = require('fs')
const path = require('path')

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'ressources')

// ─── Palette de couleurs ─────────────────────────────────────────────────────
const COLORS = {
  navy: '#0f172a',
  navyLight: '#1e293b',
  cyan: '#06b6d4',
  cyanDark: '#0891b2',
  slate: '#475569',
  slateLight: '#94a3b8',
  white: '#ffffff',
  grayLight: '#f1f5f9',
  grayBorder: '#e2e8f0',
  green: '#22c55e',
  orange: '#f97316',
  red: '#ef4444',
  yellow: '#eab308',
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function addPage(doc) {
  doc.addPage()
}

function drawRect(doc, x, y, w, h, color, radius = 0) {
  doc.save().roundedRect(x, y, w, h, radius).fill(color).restore()
}

function headerBar(doc, title, subtitle) {
  // Fond navy
  drawRect(doc, 0, 0, doc.page.width, 110, COLORS.navy)
  // Ligne cyan
  drawRect(doc, 0, 110, doc.page.width, 4, COLORS.cyan)
  // Titre
  doc
    .font('Helvetica-Bold')
    .fontSize(22)
    .fillColor(COLORS.white)
    .text(title, 40, 30, { width: doc.page.width - 80 })
  if (subtitle) {
    doc
      .font('Helvetica')
      .fontSize(11)
      .fillColor(COLORS.slateLight)
      .text(subtitle, 40, 62, { width: doc.page.width - 80 })
  }
  // Badge
  doc
    .font('Helvetica')
    .fontSize(9)
    .fillColor(COLORS.cyan)
    .text('davidbrenet.com', doc.page.width - 160, 88, { width: 140, align: 'right' })
}

function footerBar(doc, pageNum, total) {
  const y = doc.page.height - 35
  drawRect(doc, 0, y, doc.page.width, 35, COLORS.navyLight)
  doc
    .font('Helvetica')
    .fontSize(8)
    .fillColor(COLORS.slateLight)
    .text('© 2025 Cabinet David Brenet — IA Agentique & Gouvernance', 40, y + 12)
    .text(`Page ${pageNum} / ${total}`, doc.page.width - 80, y + 12, { width: 50, align: 'right' })
}

function sectionTitle(doc, text, y) {
  drawRect(doc, 30, y, doc.page.width - 60, 2, COLORS.cyan)
  doc
    .font('Helvetica-Bold')
    .fontSize(14)
    .fillColor(COLORS.navy)
    .text(text, 30, y + 10, { width: doc.page.width - 60 })
  return y + 34
}

function bullet(doc, text, y, indent = 0) {
  const x = 50 + indent
  doc.circle(x - 12, y + 5, 3).fill(COLORS.cyan)
  doc
    .font('Helvetica')
    .fontSize(10)
    .fillColor(COLORS.navy)
    .text(text, x, y, { width: doc.page.width - x - 40 })
  return y + doc.heightOfString(text, { width: doc.page.width - x - 40 }) + 6
}

function infoBox(doc, text, y, color = COLORS.grayLight) {
  const h = doc.heightOfString(text, { width: doc.page.width - 100 }) + 20
  drawRect(doc, 30, y, doc.page.width - 60, h, color, 6)
  doc
    .font('Helvetica')
    .fontSize(10)
    .fillColor(COLORS.slate)
    .text(text, 46, y + 10, { width: doc.page.width - 92 })
  return y + h + 10
}

function scoreRow(doc, label, score, desc, y) {
  const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#0ea5e9', '#7c3aed']
  const bg = score === 0 ? colors[0] : colors[Math.min(score, 5)]
  drawRect(doc, 30, y, doc.page.width - 60, 28, COLORS.grayLight, 4)
  // Score badge
  drawRect(doc, 32, y + 2, 36, 24, bg, 4)
  doc
    .font('Helvetica-Bold')
    .fontSize(14)
    .fillColor(COLORS.white)
    .text(score.toString(), 32, y + 6, { width: 36, align: 'center' })
  // Label
  doc
    .font('Helvetica-Bold')
    .fontSize(10)
    .fillColor(COLORS.navy)
    .text(label, 78, y + 4, { width: 160 })
  // Description
  doc
    .font('Helvetica')
    .fontSize(9)
    .fillColor(COLORS.slate)
    .text(desc, 78, y + 15, { width: doc.page.width - 120 })
  return y + 34
}

// ─── PDF 1 : Grille de maturité IA agentique ─────────────────────────────────

function generateGrilleMaturite() {
  const doc = new PDFDocument({ size: 'A4', margins: { top: 130, bottom: 50, left: 40, right: 40 } })
  const output = path.join(OUTPUT_DIR, 'grille-maturite-ia-agentique.pdf')
  doc.pipe(fs.createWriteStream(output))

  // ── Page 1 : Couverture ──────────────────────────────────────────────────
  drawRect(doc, 0, 0, doc.page.width, doc.page.height, COLORS.navy)
  drawRect(doc, 0, doc.page.height - 8, doc.page.width, 8, COLORS.cyan)
  // Déco
  doc.save().circle(doc.page.width - 60, 80, 120).fillOpacity(0.06).fill(COLORS.cyan).restore()
  doc.save().circle(60, doc.page.height - 100, 80).fillOpacity(0.04).fill(COLORS.cyan).restore()

  doc
    .font('Helvetica-Bold')
    .fontSize(10)
    .fillColor(COLORS.cyan)
    .text('CABINET DAVID BRENET — IA AGENTIQUE', 0, 100, { align: 'center' })

  doc
    .font('Helvetica-Bold')
    .fontSize(34)
    .fillColor(COLORS.white)
    .text('Grille de maturité', 60, 160)
  doc
    .font('Helvetica-Bold')
    .fontSize(34)
    .fillColor(COLORS.cyan)
    .text('IA Agentique', 60, 200)

  doc
    .font('Helvetica')
    .fontSize(14)
    .fillColor(COLORS.slateLight)
    .text('Évaluez le niveau de préparation de votre\norganisation en 5 dimensions clés', 60, 260, { width: 380 })

  // Badges
  const badges = ['5 dimensions', '25 critères', 'Score 0–100', 'Plan d\'action']
  badges.forEach((b, i) => {
    const bx = 60 + i * 120
    drawRect(doc, bx, 340, 110, 32, COLORS.navyLight, 8)
    doc.font('Helvetica-Bold').fontSize(9).fillColor(COLORS.cyan).text(b, bx, 350, { width: 110, align: 'center' })
  })

  doc
    .font('Helvetica')
    .fontSize(11)
    .fillColor(COLORS.slateLight)
    .text('David Brenet — Expert IA Agentique & Gouvernance', 60, 430)
    .text('davidbrenet.com', 60, 448)

  doc
    .font('Helvetica')
    .fontSize(9)
    .fillColor(COLORS.slate)
    .text('© 2025 — Document réservé à usage professionnel', 0, doc.page.height - 50, { align: 'center' })

  // ── Page 2 : Mode d'emploi ───────────────────────────────────────────────
  doc.addPage()
  headerBar(doc, 'Mode d\'emploi & Interprétation des scores', 'Comment utiliser cette grille')

  let y = 140

  y = sectionTitle(doc, '📋 Comment utiliser cette grille ?', y)
  y += 6

  const steps = [
    ['1. Réunir les parties prenantes', 'DSI, DG, RH, responsables métier — 3 à 5 personnes idéalement'],
    ['2. Évaluer chaque critère', 'Pour chaque item, attribuez un score de 0 à 5 selon la grille ci-dessous'],
    ['3. Calculer le score par dimension', 'Faites la moyenne des scores de chaque dimension (max 5 par dimension)'],
    ['4. Calculer le score global', 'Score global = moyenne des 5 dimensions × 20 (score sur 100)'],
    ['5. Lire votre niveau de maturité', 'Reportez-vous au tableau ci-après pour interpréter votre score'],
    ['6. Construire votre feuille de route', 'Utilisez les recommandations de la dernière section pour prioriser'],
  ]

  steps.forEach(([t, d]) => {
    drawRect(doc, 30, y, doc.page.width - 60, 36, COLORS.grayLight, 6)
    doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.navy).text(t, 50, y + 4, { width: doc.page.width - 80 })
    doc.font('Helvetica').fontSize(9).fillColor(COLORS.slate).text(d, 50, y + 18, { width: doc.page.width - 80 })
    y += 42
  })

  y += 6
  y = sectionTitle(doc, '📊 Grille de notation (0 à 5)', y)
  y += 6

  const notations = [
    [0, 'Inexistant', 'Aucune initiative, pas de réflexion engagée sur ce critère'],
    [1, 'Conscient', 'Le sujet est identifié mais aucune action concrète n\'a démarré'],
    [2, 'En cours', 'Des expérimentations sont en cours, résultats non consolidés'],
    [3, 'Établi', 'Des pratiques existent, partiellement documentées et reproducibles'],
    [4, 'Maîtrisé', 'Les pratiques sont documentées, mesurées et systématiquement appliquées'],
    [5, 'Optimisé', 'Amélioration continue, benchmark sectoriel, culture IA intégrée'],
  ]

  notations.forEach(([score, label, desc]) => {
    y = scoreRow(doc, label, score, desc, y)
    y += 2
  })

  footerBar(doc, 2, 8)

  // ── Page 3 : Dimension 1 — Données & SI ─────────────────────────────────
  doc.addPage()
  headerBar(doc, 'Dimension 1 — Données & Système d\'Information', 'Score maximum : 5 points')

  y = 140
  drawRect(doc, 30, y, doc.page.width - 60, 44, COLORS.navyLight, 8)
  doc.font('Helvetica').fontSize(10).fillColor(COLORS.slateLight)
    .text('Les agents IA ont besoin de données fiables, accessibles et bien gouvernées. Cette dimension évalue la qualité de votre substrat informationnel et la capacité de votre SI à exposer des API consommables par des agents.', 46, y + 8, { width: doc.page.width - 92 })
  y += 56

  const dim1 = [
    ['1.1 Qualité des données', 'Vos données métier sont-elles documentées, nettoyées et fiables ?', '0 = données silos / 5 = data catalog complet + golden record'],
    ['1.2 Accessibilité via API', 'Vos systèmes exposent-ils des API REST/GraphQL consommables ?', '0 = zéro API / 5 = API gateway centralisée, versionnée, documentée'],
    ['1.3 Temps réel & streaming', 'Avez-vous des capacités de traitement événementiel (Kafka, webhooks) ?', '0 = traitement batch nocturne / 5 = architecture événementielle mature'],
    ['1.4 Sécurité des données', 'La classification, le chiffrement et les accès sont-ils maîtrisés ?', '0 = pas de classification / 5 = RGPD + DLP + accès minimaux appliqués'],
    ['1.5 Observabilité', 'Disposez-vous d\'outils de monitoring de la qualité des données ?', '0 = pas de monitoring / 5 = alerting automatique + data lineage'],
  ]

  dim1.forEach(([titre, question, echelle]) => {
    drawRect(doc, 30, y, doc.page.width - 60, 56, COLORS.grayLight, 6)
    drawRect(doc, 30, y, 6, 56, COLORS.cyan)
    doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.navy).text(titre, 46, y + 6, { width: doc.page.width - 86 })
    doc.font('Helvetica').fontSize(9).fillColor(COLORS.slate).text(question, 46, y + 20, { width: doc.page.width - 86 })
    doc.font('Helvetica').fontSize(8).fillColor(COLORS.slateLight).text(echelle, 46, y + 34, { width: doc.page.width - 86 })
    // Score box
    drawRect(doc, doc.page.width - 100, y + 8, 70, 40, COLORS.navyLight, 6)
    doc.font('Helvetica').fontSize(8).fillColor(COLORS.slateLight).text('Score :', doc.page.width - 98, y + 14, { width: 66, align: 'center' })
    doc.font('Helvetica-Bold').fontSize(18).fillColor(COLORS.white).text('__/5', doc.page.width - 98, y + 24, { width: 66, align: 'center' })
    y += 64
  })

  // Zone score
  y += 4
  drawRect(doc, 30, y, doc.page.width - 60, 44, COLORS.cyan + '22', 8)
  doc.font('Helvetica-Bold').fontSize(11).fillColor(COLORS.cyanDark).text('SCORE DIMENSION 1 :', 46, y + 6)
  doc.font('Helvetica').fontSize(10).fillColor(COLORS.slate).text('Total des 5 scores ÷ 5 =', 46, y + 22)
  doc.font('Helvetica-Bold').fontSize(14).fillColor(COLORS.navy).text('________  / 5', 260, y + 18)

  footerBar(doc, 3, 8)

  // ── Page 4 : Dimensions 2 & 3 ───────────────────────────────────────────
  doc.addPage()
  headerBar(doc, 'Dimensions 2 & 3 — Équipes & Gouvernance', 'Compétences humaines et cadre organisationnel')

  y = 140
  y = sectionTitle(doc, 'Dimension 2 — Compétences & Équipes', y)
  y += 4

  const dim2 = [
    ['2.1 Culture IA', 'Le management comprend-il les enjeux et limites des agents IA ?', '0 = scepticisme total / 5 = ambassadeurs IA formés dans chaque équipe'],
    ['2.2 Compétences techniques', 'Avez-vous des développeurs capables de créer des agents IA ?', '0 = zéro compétence / 5 = équipe dédiée IA avec expertise LLM+MCP'],
    ['2.3 Formation continue', 'Avez-vous un programme de montée en compétence IA ?', '0 = pas de formation / 5 = parcours formalisés + certifications'],
    ['2.4 Collaboration IT/Métier', 'Les équipes IT et métier co-construisent-elles les cas d\'usage ?', '0 = silos totaux / 5 = squads mixtes avec PO IA'],
  ]

  dim2.forEach(([titre, question, echelle]) => {
    drawRect(doc, 30, y, doc.page.width - 60, 50, COLORS.grayLight, 6)
    drawRect(doc, 30, y, 6, 50, COLORS.orange)
    doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.navy).text(titre, 46, y + 5, { width: doc.page.width - 86 })
    doc.font('Helvetica').fontSize(9).fillColor(COLORS.slate).text(question, 46, y + 18, { width: doc.page.width - 86 })
    doc.font('Helvetica').fontSize(8).fillColor(COLORS.slateLight).text(echelle, 46, y + 30, { width: doc.page.width - 86 })
    drawRect(doc, doc.page.width - 100, y + 5, 70, 38, COLORS.navyLight, 6)
    doc.font('Helvetica').fontSize(8).fillColor(COLORS.slateLight).text('Score :', doc.page.width - 98, y + 10, { width: 66, align: 'center' })
    doc.font('Helvetica-Bold').fontSize(18).fillColor(COLORS.white).text('__/5', doc.page.width - 98, y + 20, { width: 66, align: 'center' })
    y += 58
  })

  drawRect(doc, 30, y, doc.page.width - 60, 36, COLORS.orange + '22', 8)
  doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.orange).text('SCORE DIMENSION 2 :', 46, y + 6)
  doc.font('Helvetica-Bold').fontSize(13).fillColor(COLORS.navy).text('________  / 5', 260, y + 10)
  y += 48

  y = sectionTitle(doc, 'Dimension 3 — Gouvernance & Conformité', y)
  y += 4

  const dim3 = [
    ['3.1 Politique IA', 'Avez-vous une charte ou politique d\'usage de l\'IA validée par le COMEX ?', '0 = rien / 5 = politique documentée, communiquée et mise à jour annuellement'],
    ['3.2 Conformité AI Act', 'Avez-vous inventorié vos systèmes IA selon les niveaux de risque AI Act ?', '0 = pas conscient / 5 = inventaire complet + mesures par niveau de risque'],
    ['3.3 RGPD & IA', 'Les traitements IA sont-ils intégrés dans votre registre RGPD ?', '0 = non / 5 = PIA réalisées, DPO impliqué dans les projets IA'],
    ['3.4 Contrôle humain', 'Vos processus IA intègrent-ils des étapes de validation humaine ?', '0 = automation totale sans contrôle / 5 = HITL défini et documenté pour chaque agent'],
  ]

  dim3.forEach(([titre, question, echelle]) => {
    drawRect(doc, 30, y, doc.page.width - 60, 50, COLORS.grayLight, 6)
    drawRect(doc, 30, y, 6, 50, COLORS.green)
    doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.navy).text(titre, 46, y + 5, { width: doc.page.width - 86 })
    doc.font('Helvetica').fontSize(9).fillColor(COLORS.slate).text(question, 46, y + 18, { width: doc.page.width - 86 })
    doc.font('Helvetica').fontSize(8).fillColor(COLORS.slateLight).text(echelle, 46, y + 30, { width: doc.page.width - 86 })
    drawRect(doc, doc.page.width - 100, y + 5, 70, 38, COLORS.navyLight, 6)
    doc.font('Helvetica').fontSize(8).fillColor(COLORS.slateLight).text('Score :', doc.page.width - 98, y + 10, { width: 66, align: 'center' })
    doc.font('Helvetica-Bold').fontSize(18).fillColor(COLORS.white).text('__/5', doc.page.width - 98, y + 20, { width: 66, align: 'center' })
    y += 58
  })

  drawRect(doc, 30, y, doc.page.width - 60, 36, COLORS.green + '33', 8)
  doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.green).text('SCORE DIMENSION 3 :', 46, y + 6)
  doc.font('Helvetica-Bold').fontSize(13).fillColor(COLORS.navy).text('________  / 5', 260, y + 10)

  footerBar(doc, 4, 8)

  // ── Page 5 : Dimensions 4 & 5 ───────────────────────────────────────────
  doc.addPage()
  headerBar(doc, 'Dimensions 4 & 5 — Cas d\'usage & Infrastructure', 'Expérience terrain et stack technique')

  y = 140
  y = sectionTitle(doc, 'Dimension 4 — Cas d\'usage & Expériences', y)
  y += 4

  const dim4 = [
    ['4.1 Expérimentations passées', 'Avez-vous déjà mené des POC ou projets IA (même échoués) ?', '0 = jamais / 5 = +5 projets livrés en production avec ROI mesuré'],
    ['4.2 Identification des cas d\'usage', 'Avez-vous un backlog de cas d\'usage IA priorisés par la valeur ?', '0 = aucun / 5 = backlog formalisé, matrice valeur/complexité à jour'],
    ['4.3 Mesure du ROI', 'Mesurez-vous l\'impact de vos initiatives IA (temps, coût, qualité) ?', '0 = aucune mesure / 5 = KPIs définis avant démarrage, suivi mensuel'],
    ['4.4 Adoption utilisateurs', 'Les outils IA déployés sont-ils réellement utilisés par les équipes ?', '0 = rejet systématique / 5 = taux d\'adoption >80%, ambassadeurs actifs'],
    ['4.5 Capitalisation', 'Documentez-vous et réutilisez-vous les apprentissages de vos projets ?', '0 = knowledge lost / 5 = wiki IA, retours d\'expérience systématiques'],
  ]

  dim4.forEach(([titre, question, echelle]) => {
    drawRect(doc, 30, y, doc.page.width - 60, 50, COLORS.grayLight, 6)
    drawRect(doc, 30, y, 6, 50, COLORS.cyan)
    doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.navy).text(titre, 46, y + 5, { width: doc.page.width - 86 })
    doc.font('Helvetica').fontSize(9).fillColor(COLORS.slate).text(question, 46, y + 18, { width: doc.page.width - 86 })
    doc.font('Helvetica').fontSize(8).fillColor(COLORS.slateLight).text(echelle, 46, y + 30, { width: doc.page.width - 86 })
    drawRect(doc, doc.page.width - 100, y + 5, 70, 38, COLORS.navyLight, 6)
    doc.font('Helvetica').fontSize(8).fillColor(COLORS.slateLight).text('Score :', doc.page.width - 98, y + 10, { width: 66, align: 'center' })
    doc.font('Helvetica-Bold').fontSize(18).fillColor(COLORS.white).text('__/5', doc.page.width - 98, y + 20, { width: 66, align: 'center' })
    y += 58
  })

  drawRect(doc, 30, y, doc.page.width - 60, 36, COLORS.cyan + '22', 8)
  doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.cyanDark).text('SCORE DIMENSION 4 :', 46, y + 6)
  doc.font('Helvetica-Bold').fontSize(13).fillColor(COLORS.navy).text('________  / 5', 260, y + 10)
  y += 48

  y = sectionTitle(doc, 'Dimension 5 — Infrastructure & Outillage', y)
  y += 4

  const dim5 = [
    ['5.1 Environnement cloud', 'Disposez-vous d\'une infrastructure cloud scalable (AWS/Azure/GCP) ?', '0 = full on-premise legacy / 5 = cloud-native, IaC, auto-scaling'],
    ['5.2 Accès aux LLMs', 'Avez-vous des contrats d\'accès aux API LLM (OpenAI, Anthropic, Google) ?', '0 = aucun / 5 = multiples providers, failover, contrôle des coûts'],
    ['5.3 CI/CD & MLOps', 'Avez-vous des pipelines de déploiement adaptés aux agents IA ?', '0 = déploiement manuel / 5 = CI/CD automatisé + monitoring modèles'],
    ['5.4 Sécurité IA', 'Avez-vous des mesures contre prompt injection, data leakage ?', '0 = aucune / 5 = red teaming régulier, guardrails automatiques'],
  ]

  dim5.forEach(([titre, question, echelle]) => {
    drawRect(doc, 30, y, doc.page.width - 60, 50, COLORS.grayLight, 6)
    drawRect(doc, 30, y, 6, 50, COLORS.yellow)
    doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.navy).text(titre, 46, y + 5, { width: doc.page.width - 86 })
    doc.font('Helvetica').fontSize(9).fillColor(COLORS.slate).text(question, 46, y + 18, { width: doc.page.width - 86 })
    doc.font('Helvetica').fontSize(8).fillColor(COLORS.slateLight).text(echelle, 46, y + 30, { width: doc.page.width - 86 })
    drawRect(doc, doc.page.width - 100, y + 5, 70, 38, COLORS.navyLight, 6)
    doc.font('Helvetica').fontSize(8).fillColor(COLORS.slateLight).text('Score :', doc.page.width - 98, y + 10, { width: 66, align: 'center' })
    doc.font('Helvetica-Bold').fontSize(18).fillColor(COLORS.white).text('__/5', doc.page.width - 98, y + 20, { width: 66, align: 'center' })
    y += 58
  })

  drawRect(doc, 30, y, doc.page.width - 60, 36, COLORS.yellow + '33', 8)
  doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.yellow).text('SCORE DIMENSION 5 :', 46, y + 6)
  doc.font('Helvetica-Bold').fontSize(13).fillColor(COLORS.navy).text('________  / 5', 260, y + 10)

  footerBar(doc, 5, 8)

  // ── Page 6 : Tableau de synthèse ────────────────────────────────────────
  doc.addPage()
  headerBar(doc, 'Tableau de synthèse & Calcul du score global', 'Votre résultat en un coup d\'oeil')

  y = 140

  // Table
  const headers = ['Dimension', 'Sous-scores (5 items)', 'Score /5', 'Pondération']
  const rows = [
    ['1. Données & SI', '□ + □ + □ + □ + □', '___ / 5', 'x 20 = ___'],
    ['2. Équipes & Compétences', '□ + □ + □ + □', '___ / 5', 'x 20 = ___'],
    ['3. Gouvernance & Conformité', '□ + □ + □ + □', '___ / 5', 'x 20 = ___'],
    ['4. Cas d\'usage & Expériences', '□ + □ + □ + □ + □', '___ / 5', 'x 20 = ___'],
    ['5. Infrastructure & Outillage', '□ + □ + □ + □', '___ / 5', 'x 20 = ___'],
  ]

  // Header row
  drawRect(doc, 30, y, doc.page.width - 60, 28, COLORS.navy)
  const colW = [(doc.page.width - 60) * 0.35, (doc.page.width - 60) * 0.32, (doc.page.width - 60) * 0.17, (doc.page.width - 60) * 0.16]
  let cx = 30
  headers.forEach((h, i) => {
    doc.font('Helvetica-Bold').fontSize(9).fillColor(COLORS.white).text(h, cx + 6, y + 9, { width: colW[i] - 12 })
    cx += colW[i]
  })
  y += 28

  rows.forEach((row, ri) => {
    const bg = ri % 2 === 0 ? COLORS.white : COLORS.grayLight
    drawRect(doc, 30, y, doc.page.width - 60, 32, bg)
    cx = 30
    row.forEach((cell, ci) => {
      doc.font(ci === 0 ? 'Helvetica-Bold' : 'Helvetica').fontSize(9).fillColor(COLORS.navy).text(cell, cx + 6, y + 10, { width: colW[ci] - 12 })
      cx += colW[ci]
    })
    y += 32
  })

  // Total
  y += 6
  drawRect(doc, 30, y, doc.page.width - 60, 50, COLORS.navy, 8)
  doc.font('Helvetica-Bold').fontSize(12).fillColor(COLORS.white).text('SCORE GLOBAL IA AGENTIQUE', 46, y + 8)
  doc.font('Helvetica').fontSize(10).fillColor(COLORS.slateLight).text('Somme des 5 dimensions × 20 ÷ 5 =', 46, y + 26)
  doc.font('Helvetica-Bold').fontSize(20).fillColor(COLORS.cyan).text('_________  / 100', 280, y + 20)
  y += 66

  y = sectionTitle(doc, '📈 Niveaux de maturité', y)
  y += 6

  const levels = [
    ['0 – 20', 'Explorateur', 'L\'IA agentique est encore un sujet théorique pour vous. Commencez par des formations et des POC ciblés.', COLORS.red],
    ['21 – 40', 'Initiateur', 'Vous avez des bases mais beaucoup reste à structurer. Priorisez la gouvernance et un premier agent en production.', COLORS.orange],
    ['41 – 60', 'Progressif', 'Vous avancez concrètement. Consolidez vos pratiques et étendez à d\'autres cas d\'usage métier.', COLORS.yellow],
    ['61 – 80', 'Avancé', 'Vous maîtrisez les fondamentaux. Orientez-vous vers l\'industrialisation et le multi-agents.', COLORS.cyan],
    ['81 – 100', 'Leader IA', 'Vous êtes en avance sur votre secteur. Partagez votre expérience et poussez l\'innovation continue.', COLORS.green],
  ]

  levels.forEach(([range, label, desc, color]) => {
    drawRect(doc, 30, y, doc.page.width - 60, 40, COLORS.grayLight, 6)
    drawRect(doc, 30, y, 70, 40, color + 'dd', 6)
    doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.white).text(range, 32, y + 6, { width: 66, align: 'center' })
    doc.font('Helvetica-Bold').fontSize(9).fillColor(color).text(label, 106, y + 6, { width: doc.page.width - 140 })
    doc.font('Helvetica').fontSize(8.5).fillColor(COLORS.slate).text(desc, 106, y + 20, { width: doc.page.width - 140 })
    y += 48
  })

  footerBar(doc, 6, 8)

  // ── Page 7 : Plan d'action par niveau ───────────────────────────────────
  doc.addPage()
  headerBar(doc, 'Feuilles de route recommandées', 'Plan d\'action selon votre niveau de maturité')

  y = 140

  const roadmaps = [
    {
      level: 'Score 0–40 — Explorateur & Initiateur',
      color: COLORS.orange,
      actions: [
        'Organisez une journée de sensibilisation IA pour le COMEX et le management',
        'Réalisez un inventaire des données disponibles et de leur qualité',
        'Identifiez 1 à 2 cas d\'usage à faible risque pour un premier POC',
        'Nommez un responsable IA (ou pilotez un binôme IT/Métier dédié)',
        'Lancez une formation Claude/LLM pour 5 à 10 personnes clés',
        'Rédigez une première charte d\'utilisation de l\'IA en entreprise',
      ]
    },
    {
      level: 'Score 41–60 — Progressif',
      color: COLORS.yellow,
      actions: [
        'Créez un centre de compétences IA interne (CoE)',
        'Déployez votre premier agent IA en production avec monitoring',
        'Formalisez votre politique de gouvernance IA (RGPD, AI Act)',
        'Construisez un backlog de cas d\'usage priorisé valeur/complexité',
        'Mettez en place des KPIs de mesure du ROI pour chaque projet IA',
        'Établissez un programme de formation continue pour les équipes tech',
      ]
    },
    {
      level: 'Score 61–100 — Avancé & Leader IA',
      color: COLORS.green,
      actions: [
        'Industrialisez avec une plateforme multi-agents orchestrée',
        'Développez des connecteurs MCP sur mesure pour vos systèmes',
        'Implémentez du red teaming et des tests de robustesse automatisés',
        'Publiez des retours d\'expérience pour attirer les talents IA',
        'Contribuez aux standards sectoriels de gouvernance IA',
        'Explorez les architectures agents autonomes (LangGraph, CrewAI)',
      ]
    },
  ]

  roadmaps.forEach(({ level, color, actions }) => {
    drawRect(doc, 30, y, doc.page.width - 60, 28, color + 'ee', 8)
    doc.font('Helvetica-Bold').fontSize(11).fillColor(COLORS.white).text(level, 44, y + 8, { width: doc.page.width - 88 })
    y += 34

    actions.forEach(action => {
      y = bullet(doc, action, y)
    })
    y += 12
  })

  footerBar(doc, 7, 8)

  // ── Page 8 : Contact & CTA ───────────────────────────────────────────────
  doc.addPage()
  drawRect(doc, 0, 0, doc.page.width, doc.page.height, COLORS.navy)
  drawRect(doc, 0, doc.page.height - 8, doc.page.width, 8, COLORS.cyan)

  doc.save().circle(doc.page.width - 40, 120, 160).fillOpacity(0.05).fill(COLORS.cyan).restore()

  doc.font('Helvetica-Bold').fontSize(26).fillColor(COLORS.white).text('Votre score est calculé.', 60, 120)
  doc.font('Helvetica-Bold').fontSize(26).fillColor(COLORS.cyan).text('Et maintenant ?', 60, 156)

  doc.font('Helvetica').fontSize(12).fillColor(COLORS.slateLight)
    .text('Un score seul ne suffit pas. Ce qui compte, c\'est\nla feuille de route que vous allez en tirer.', 60, 210, { width: 420, lineGap: 4 })

  const ctas = [
    ['Audit IA gratuit (30 min)', 'Analysez votre score avec David Brenet et identifiez vos 3 actions prioritaires'],
    ['Formation équipes (2 à 5 jours)', 'Claude Code, Agents IA, MCP — formation sur mesure pour vos développeurs'],
    ['Mission conseil (3 à 6 mois)', 'Accompagnement complet de la stratégie au premier agent en production'],
  ]

  let cy = 280
  ctas.forEach(([titre, desc]) => {
    drawRect(doc, 60, cy, doc.page.width - 120, 64, COLORS.navyLight, 10)
    drawRect(doc, 60, cy, 4, 64, COLORS.cyan, 2)
    doc.font('Helvetica-Bold').fontSize(12).fillColor(COLORS.white).text(titre, 80, cy + 10, { width: doc.page.width - 160 })
    doc.font('Helvetica').fontSize(10).fillColor(COLORS.slateLight).text(desc, 80, cy + 30, { width: doc.page.width - 160 })
    cy += 76
  })

  drawRect(doc, 60, cy + 10, doc.page.width - 120, 56, COLORS.cyan, 10)
  doc.font('Helvetica-Bold').fontSize(16).fillColor(COLORS.navy).text('Contactez David Brenet', 0, cy + 23, { align: 'center' })
  doc.font('Helvetica').fontSize(11).fillColor(COLORS.navyLight).text('davidbrenet.com  ·  brenet.david@gmail.com', 0, cy + 43, { align: 'center' })

  doc.end()
  console.log('✅ grille-maturite-ia-agentique.pdf généré')
}

// ─── PDF 2 : Check-list AI Act Article 4 ─────────────────────────────────────

function generateChecklistAIAct() {
  const doc = new PDFDocument({ size: 'A4', margins: { top: 130, bottom: 50, left: 40, right: 40 } })
  const output = path.join(OUTPUT_DIR, 'checklist-ai-act-article-4.pdf')
  doc.pipe(fs.createWriteStream(output))

  // ── Page 1 : Couverture ──────────────────────────────────────────────────
  drawRect(doc, 0, 0, doc.page.width, doc.page.height, COLORS.navy)
  drawRect(doc, 0, doc.page.height - 8, doc.page.width, 8, COLORS.green)
  doc.save().circle(doc.page.width - 60, 60, 140).fillOpacity(0.06).fill(COLORS.green).restore()

  doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.green).text('AI ACT — RÈGLEMENT (UE) 2024/1689', 0, 95, { align: 'center' })

  doc.font('Helvetica-Bold').fontSize(32).fillColor(COLORS.white).text('Check-list', 60, 150)
  doc.font('Helvetica-Bold').fontSize(32).fillColor(COLORS.green).text('AI Act Article 4', 60, 190)

  doc.font('Helvetica').fontSize(14).fillColor(COLORS.slateLight)
    .text('Obligation de formation & sensibilisation IA\npour les entreprises qui déploient des systèmes IA', 60, 248, { width: 400, lineGap: 4 })

  const badges2 = ['Qui est concerné', 'Ce qu\'il faut faire', 'Comment documenter', 'Attestation type']
  badges2.forEach((b, i) => {
    const bx = 60 + i * 118
    drawRect(doc, bx, 318, 108, 30, COLORS.navyLight, 8)
    doc.font('Helvetica-Bold').fontSize(9).fillColor(COLORS.green).text(b, bx, 328, { width: 108, align: 'center' })
  })

  drawRect(doc, 60, 378, doc.page.width - 120, 56, COLORS.navyLight, 10)
  doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.white).text('⚠️  Entrée en vigueur', 76, 388)
  doc.font('Helvetica').fontSize(10).fillColor(COLORS.slateLight)
    .text('L\'AI Act est entré en vigueur le 1er août 2024. L\'article 4 s\'applique dès le 2 février 2025. Les obligations de haut risque : 2 août 2026.', 76, 404, { width: doc.page.width - 152, lineGap: 3 })

  doc.font('Helvetica').fontSize(10).fillColor(COLORS.slate).text('David Brenet — Expert IA Agentique & Gouvernance  ·  davidbrenet.com', 60, 480)
  doc.font('Helvetica').fontSize(9).fillColor(COLORS.slate).text('© 2025 — Ce document est fourni à titre informatif et ne constitue pas un conseil juridique.', 0, doc.page.height - 45, { align: 'center' })

  // ── Page 2 : L'Article 4 expliqué ───────────────────────────────────────
  doc.addPage()
  headerBar(doc, 'Article 4 — Texte, portée et enjeux', 'AI Act — Règlement (UE) 2024/1689')

  let y = 140

  drawRect(doc, 30, y, doc.page.width - 60, 72, COLORS.navyLight, 8)
  drawRect(doc, 30, y, 4, 72, COLORS.green)
  doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.green).text('ARTICLE 4 — TEXTE OFFICIEL (extrait)', 46, y + 8)
  doc.font('Helvetica').fontSize(9).fillColor(COLORS.slateLight).text(
    '"Les fournisseurs et les déployeurs de systèmes d\'IA prennent des mesures pour veiller, dans toute la mesure du possible, à ce que leur personnel et les autres personnes s\'occupant de l\'exploitation et de l\'utilisation des systèmes d\'IA en leur nom disposent d\'un niveau suffisant de compétences en matière d\'IA, d\'alphabétisation en matière d\'IA et de formation."',
    46, y + 24, { width: doc.page.width - 92 }
  )
  y += 82

  y = sectionTitle(doc, '🎯 Qui est concerné par l\'Article 4 ?', y)
  y += 8

  const concerned = [
    ['Fournisseurs de systèmes IA', 'Entreprises qui développent et mettent sur le marché des systèmes IA (SaaS IA, modèles, solutions IA intégrées)'],
    ['Déployeurs de systèmes IA', 'Toute organisation qui utilise des systèmes IA en contexte professionnel, même si elle ne les a pas développés (acheteur de solutions IA)'],
    ['Responsables RH & Formation', 'Dès lors que l\'entreprise emploie des personnes qui utilisent des systèmes IA dans leur travail quotidien'],
    ['PME et grandes entreprises', 'L\'obligation s\'applique quelle que soit la taille de l\'entreprise dès lors qu\'elle déploie des systèmes IA'],
  ]

  concerned.forEach(([who, what]) => {
    drawRect(doc, 30, y, doc.page.width - 60, 44, COLORS.grayLight, 6)
    drawRect(doc, 30, y, 6, 44, COLORS.green)
    doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.navy).text(who, 46, y + 5)
    doc.font('Helvetica').fontSize(9).fillColor(COLORS.slate).text(what, 46, y + 20, { width: doc.page.width - 90 })
    y += 52
  })

  y = sectionTitle(doc, '❓ Ce que l\'article ne dit PAS', y)
  y += 8

  y = infoBox(doc, 'L\'article 4 ne précise pas exactement quel niveau de formation est requis, ni la durée minimale des formations, ni le format (présentiel/distanciel). Il renvoie aux "caractéristiques du contexte" et au niveau d\'exposition des salariés. En pratique, cela implique une approche proportionnée et documentée.', y, COLORS.grayLight)

  const nots = [
    'Pas de certification obligatoire définie à ce stade (peut évoluer avec les actes délégués)',
    'Pas de durée minimale imposée — c\'est la pertinence et l\'efficacité qui comptent',
    'Pas de sanction directe pour l\'article 4 seul — mais c\'est un élément d\'appréciation globale',
    'Les sanctions graves (35M€ ou 7% CA) concernent d\'autres articles, notamment sur les IA à haut risque',
  ]
  nots.forEach(n => { y = bullet(doc, n, y) })

  footerBar(doc, 2, 6)

  // ── Page 3 : Ce que vous devez faire ────────────────────────────────────
  doc.addPage()
  headerBar(doc, 'Obligations concrètes — Ce que vous devez mettre en place', 'Guide pratique de mise en conformité')

  y = 140

  const obligations = [
    {
      num: '1',
      title: 'Inventorier les systèmes IA utilisés',
      priority: 'PRIORITÉ HAUTE',
      pcolor: COLORS.red,
      items: [
        'Lister tous les outils IA utilisés dans l\'entreprise (ChatGPT, Copilot, Claude, outils métier avec IA...)',
        'Identifier pour chaque outil : qui l\'utilise, dans quel contexte, avec quelles données',
        'Classer par niveau de risque (minimal, limité, élevé, inacceptable selon l\'AI Act)',
        'Détecter le "shadow AI" — usage non déclaré d\'outils IA par les collaborateurs',
      ]
    },
    {
      num: '2',
      title: 'Définir les populations à former',
      priority: 'PRIORITÉ HAUTE',
      pcolor: COLORS.red,
      items: [
        'Cartographier les rôles en contact avec des systèmes IA (utilisateurs directs, superviseurs, décideurs)',
        'Prioriser selon le niveau d\'exposition et le niveau de risque du système IA concerné',
        'Identifier les personnes qui prennent des décisions assistées par IA (RH, crédit, médical...)',
        'Inclure le management et le COMEX pour la sensibilisation governance',
      ]
    },
    {
      num: '3',
      title: 'Concevoir des parcours de formation adaptés',
      priority: 'PRIORITÉ MOYENNE',
      pcolor: COLORS.orange,
      items: [
        'Sensibilisation générale (tous collaborateurs) : fonctionnement IA, limites, biais, droits',
        'Formation approfondie (utilisateurs réguliers) : prompting, évaluation des outputs, vigilance',
        'Formation spécialisée (équipes tech/data) : architecture, sécurité, conformité RGPD+AI Act',
        'Adapter le format au contexte : e-learning, atelier, coaching, documentation',
      ]
    },
    {
      num: '4',
      title: 'Documenter et tracer les formations',
      priority: 'PRIORITÉ HAUTE',
      pcolor: COLORS.red,
      items: [
        'Conserver les preuves de participation (émargements, certificats, captures LMS)',
        'Enregistrer la date, le contenu couvert, l\'animateur et les participants',
        'Maintenir un registre des formations IA accessible au DPO et aux auditeurs',
        'Planifier des révisions annuelles ou à chaque déploiement d\'un nouveau système IA',
      ]
    },
  ]

  obligations.forEach(({ num, title, priority, pcolor, items }) => {
    drawRect(doc, 30, y, doc.page.width - 60, 26, COLORS.navyLight, 6)
    drawRect(doc, 30, y, 30, 26, COLORS.navy)
    doc.font('Helvetica-Bold').fontSize(13).fillColor(COLORS.cyan).text(num, 30, y + 4, { width: 30, align: 'center' })
    doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.white).text(title, 68, y + 8)
    // Badge priorité
    drawRect(doc, doc.page.width - 130, y + 4, 100, 18, pcolor + '33', 4)
    doc.font('Helvetica-Bold').fontSize(7.5).fillColor(pcolor).text(priority, doc.page.width - 130, y + 8, { width: 100, align: 'center' })
    y += 32

    items.forEach(item => {
      y = bullet(doc, item, y)
    })
    y += 8
  })

  footerBar(doc, 3, 6)

  // ── Page 4 : Check-list ──────────────────────────────────────────────────
  doc.addPage()
  headerBar(doc, 'Check-list de conformité Article 4 — À cocher !', 'Êtes-vous en conformité ? Évaluez votre situation')

  y = 140

  const checkCategories = [
    {
      cat: 'INVENTAIRE & CARTOGRAPHIE',
      color: COLORS.cyan,
      items: [
        'Inventaire complet des systèmes IA déployés dans l\'entreprise réalisé',
        'Niveau de risque AI Act attribué à chaque système IA identifié',
        'Liste des collaborateurs exposés aux systèmes IA établie et à jour',
        'Cas de "shadow AI" détectés et traités (interdiction ou encadrement)',
        'Responsable de la conformité IA désigné (DPO, CDO ou équivalent)',
      ]
    },
    {
      cat: 'PROGRAMME DE FORMATION',
      color: COLORS.green,
      items: [
        'Programme de sensibilisation IA pour tous les collaborateurs défini',
        'Parcours de formation spécialisée pour les utilisateurs réguliers prévu',
        'Formation spécifique pour les personnes qui prennent des décisions assistées par IA',
        'Formation pour les équipes qui développent ou configurent des systèmes IA',
        'Plan de mise à jour annuel des formations prévu',
      ]
    },
    {
      cat: 'DOCUMENTATION & PREUVES',
      color: COLORS.orange,
      items: [
        'Registre des formations IA créé et maintenu',
        'Preuves de participation conservées (> 5 ans recommandé)',
        'Contenu des formations documenté et accessible',
        'Politique d\'utilisation de l\'IA publiée et signée par les collaborateurs',
        'Procédure de mise à jour lors de déploiement d\'un nouveau système IA',
      ]
    },
    {
      cat: 'GOUVERNANCE',
      color: COLORS.yellow,
      items: [
        'COMEX sensibilisé aux obligations AI Act et aux risques',
        'Processus de validation avant déploiement d\'un nouveau système IA',
        'Mécanisme de signalement des incidents liés à l\'IA opérationnel',
        'Clause AI Act dans les contrats avec les fournisseurs de solutions IA',
      ]
    },
  ]

  checkCategories.forEach(({ cat, color, items }) => {
    drawRect(doc, 30, y, doc.page.width - 60, 22, color, 4)
    doc.font('Helvetica-Bold').fontSize(9).fillColor(COLORS.white).text(cat, 40, y + 6)
    y += 26

    items.forEach(item => {
      drawRect(doc, 30, y, doc.page.width - 60, 24, COLORS.grayLight, 0)
      // Checkbox
      doc.rect(40, y + 6, 12, 12).stroke(color)
      doc.font('Helvetica').fontSize(9).fillColor(COLORS.navy).text(item, 60, y + 8, { width: doc.page.width - 100 })
      y += 26
    })
    y += 6
  })

  footerBar(doc, 4, 6)

  // ── Page 5 : Contenu minimal d'une formation conforme ───────────────────
  doc.addPage()
  headerBar(doc, 'Contenu minimal d\'une formation conforme à l\'Article 4', 'Ce que doit couvrir votre programme de formation')

  y = 140

  y = infoBox(doc, 'La Commission européenne n\'a pas encore publié de programme-type officiel. Les éléments ci-dessous sont issus des recommandations d\'experts et de l\'interprétation du texte par les autorités de protection des données (CNIL, EDPB).', y, COLORS.grayLight)

  const trainingContent = [
    {
      level: 'Niveau 1 — Sensibilisation (tous collaborateurs)',
      color: COLORS.cyan,
      duration: '1 à 2 heures',
      topics: [
        'Qu\'est-ce qu\'un système d\'IA ? Définition légale (Art. 3 AI Act)',
        'Quels outils IA j\'utilise dans mon travail quotidien ?',
        'Comment fonctionne un LLM ? Hallucinations et limites',
        'Mes droits face à une décision automatisée (RGPD Art. 22)',
        'À qui signaler un incident ou un doute sur un outil IA ?',
        'Politique interne d\'utilisation de l\'IA de l\'entreprise',
      ]
    },
    {
      level: 'Niveau 2 — Formation approfondie (utilisateurs réguliers)',
      color: COLORS.green,
      duration: '4 à 8 heures',
      topics: [
        'Niveaux de risque AI Act et implications pour mon métier',
        'Technique de prompt engineering et évaluation critique des réponses',
        'Données personnelles et confidentielles : quoi saisir ou ne pas saisir',
        'Biais algorithmiques : comment les détecter et les signaler',
        'Obligation de supervision humaine (human-in-the-loop)',
        'Documentation des usages et traçabilité des décisions IA-assistées',
      ]
    },
    {
      level: 'Niveau 3 — Formation experte (équipes IT/data)',
      color: COLORS.orange,
      duration: '2 à 5 jours',
      topics: [
        'Architecture et cycle de vie des systèmes IA (développement au retrait)',
        'Classification des systèmes IA à haut risque — Art. 6 et Annexes',
        'Obligations de documentation technique (Art. 11) et logs (Art. 12)',
        'Évaluation de la conformité et tests de robustesse',
        'Intégration RGPD × AI Act : articulation des deux règlements',
        'Implémentation de guardrails et mécanismes de sécurité IA',
      ]
    },
  ]

  trainingContent.forEach(({ level, color, duration, topics }) => {
    drawRect(doc, 30, y, doc.page.width - 60, 26, color, 6)
    doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.white).text(level, 40, y + 8, { width: doc.page.width - 160 })
    drawRect(doc, doc.page.width - 120, y + 4, 90, 18, COLORS.navyLight + 'aa', 4)
    doc.font('Helvetica').fontSize(8).fillColor(COLORS.white).text(duration, doc.page.width - 120, y + 8, { width: 90, align: 'center' })
    y += 30

    topics.forEach(t => { y = bullet(doc, t, y) })
    y += 8
  })

  footerBar(doc, 5, 6)

  // ── Page 6 : Modèle d'attestation ───────────────────────────────────────
  doc.addPage()
  headerBar(doc, 'Modèle d\'attestation de formation IA — Article 4', 'Template à personnaliser selon votre contexte')

  y = 140

  drawRect(doc, 30, y, doc.page.width - 60, 4, COLORS.green)
  y += 10
  drawRect(doc, 30, y, doc.page.width - 60, doc.page.height - y - 80, COLORS.grayLight, 8)

  const innerX = 46
  const innerW = doc.page.width - 92

  doc.font('Helvetica-Bold').fontSize(16).fillColor(COLORS.navy).text('ATTESTATION DE FORMATION', innerX, y + 16, { width: innerW, align: 'center' })
  doc.font('Helvetica-Bold').fontSize(13).fillColor(COLORS.green).text('Compétences IA — Conformité AI Act Article 4', innerX, y + 38, { width: innerW, align: 'center' })

  y += 70
  doc.font('Helvetica').fontSize(10).fillColor(COLORS.slate).text('Je soussigné(e),', innerX, y)
  y += 18

  const fields = [
    ['Prénom & Nom :', '_______________________________________________'],
    ['Fonction :', '_______________________________________________'],
    ['Département :', '_______________________________________________'],
    ['Entreprise :', '_______________________________________________'],
  ]
  fields.forEach(([label, blank]) => {
    doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.navy).text(label, innerX, y)
    doc.font('Helvetica').fontSize(10).fillColor(COLORS.slate).text(blank, innerX + 120, y)
    y += 18
  })

  y += 8
  doc.font('Helvetica').fontSize(10).fillColor(COLORS.slate)
    .text('atteste avoir suivi la formation suivante en conformité avec l\'Article 4 du Règlement (UE) 2024/1689 :', innerX, y, { width: innerW })
  y += 24

  const trainingFields = [
    ['Intitulé de la formation :', '_______________________________________________'],
    ['Formateur / Organisme :', '_______________________________________________'],
    ['Date de formation :', '_______________________________________________'],
    ['Durée :', '___________ heures'],
    ['Format :', '□ Présentiel   □ Distanciel   □ E-learning'],
  ]
  trainingFields.forEach(([label, blank]) => {
    doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.navy).text(label, innerX, y)
    doc.font('Helvetica').fontSize(10).fillColor(COLORS.slate).text(blank, innerX + 160, y)
    y += 18
  })

  y += 8
  doc.font('Helvetica-Bold').fontSize(9).fillColor(COLORS.navy).text('Compétences acquises (cocher) :', innerX, y)
  y += 16
  const competences = [
    'Fonctionnement des systèmes IA et LLM',
    'Risques et limites des systèmes IA (biais, hallucinations)',
    'Niveaux de risque AI Act et obligations associées',
    'Droits des personnes et protection des données (RGPD × IA)',
    'Politique interne d\'utilisation de l\'IA',
  ]
  competences.forEach(c => {
    doc.rect(innerX, y, 10, 10).stroke(COLORS.navy)
    doc.font('Helvetica').fontSize(9).fillColor(COLORS.slate).text(c, innerX + 16, y + 1)
    y += 16
  })

  y += 10
  doc.font('Helvetica').fontSize(9).fillColor(COLORS.slate)
    .text('Fait à _________________________,  le _____ / _____ / _______', innerX, y)
  y += 24
  doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.navy).text('Signature du collaborateur :', innerX, y)
  doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.navy).text('Visa du responsable RH/Formation :', innerX + 260, y)

  footerBar(doc, 6, 6)

  doc.end()
  console.log('✅ checklist-ai-act-article-4.pdf généré')
}

// ─── PDF 3 : 10 cas d'usage agentiques en assurance ──────────────────────────

function generateCasUsage() {
  const doc = new PDFDocument({ size: 'A4', margins: { top: 130, bottom: 50, left: 40, right: 40 } })
  const output = path.join(OUTPUT_DIR, '10-cas-usage-agents-assurance.pdf')
  doc.pipe(fs.createWriteStream(output))

  // ── Page 1 : Couverture ──────────────────────────────────────────────────
  drawRect(doc, 0, 0, doc.page.width, doc.page.height, COLORS.navy)
  drawRect(doc, 0, doc.page.height - 8, doc.page.width, 8, COLORS.cyan)
  doc.save().circle(doc.page.width - 60, 80, 130).fillOpacity(0.07).fill(COLORS.cyan).restore()
  doc.save().circle(50, doc.page.height - 80, 100).fillOpacity(0.04).fill(COLORS.cyan).restore()

  doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.cyan).text('GUIDE PRATIQUE — CABINET DAVID BRENET', 0, 95, { align: 'center' })

  doc.font('Helvetica-Bold').fontSize(42).fillColor(COLORS.cyan).text('10', 60, 140)
  doc.font('Helvetica-Bold').fontSize(28).fillColor(COLORS.white).text('cas d\'usage agentiques', 60, 192)
  doc.font('Helvetica-Bold').fontSize(28).fillColor(COLORS.slateLight).text('en assurance', 60, 228)

  doc.font('Helvetica').fontSize(12).fillColor(COLORS.slateLight)
    .text('Applications concrètes, architectures, ROI mesuré\net prérequis de déploiement', 60, 278, { width: 380, lineGap: 4 })

  // Tags
  const tags = ['IARD', 'Vie & Prévoyance', 'Santé', 'Réassurance', 'Courtage']
  tags.forEach((t, i) => {
    const tx = 60 + i * 92
    drawRect(doc, tx, 336, 84, 26, COLORS.navyLight, 12)
    doc.font('Helvetica').fontSize(8.5).fillColor(COLORS.slateLight).text(t, tx, 346, { width: 84, align: 'center' })
  })

  // Valeurs clés
  const kpis = [['–85%', 'délai sinistres'], ['×3', 'productivité souscription'], ['–60%', 'shadow AI'], ['+38%', 'efficacité dev']]
  kpis.forEach(([v, l], i) => {
    const kx = 60 + i * 116
    drawRect(doc, kx, 390, 108, 56, COLORS.navyLight, 8)
    doc.font('Helvetica-Bold').fontSize(20).fillColor(COLORS.cyan).text(v, kx, 400, { width: 108, align: 'center' })
    doc.font('Helvetica').fontSize(8).fillColor(COLORS.slateLight).text(l, kx, 424, { width: 108, align: 'center' })
  })

  doc.font('Helvetica').fontSize(10).fillColor(COLORS.slate).text('David Brenet — Expert IA Agentique & Gouvernance  ·  davidbrenet.com', 60, 472)

  // ── Page 2 : Matrice valeur / complexité ────────────────────────────────
  doc.addPage()
  headerBar(doc, 'Matrice Valeur / Complexité — Vue d\'ensemble', '10 cas d\'usage classés par priorité de déploiement')

  let y = 140

  y = infoBox(doc, 'Cette matrice vous aide à prioriser vos initiatives. Les cas d\'usage en haut à gauche (haute valeur, faible complexité) sont vos "quick wins". Commencez par eux pour démontrer la valeur et construire la confiance en interne.', y, COLORS.navyLight + 'cc')

  y += 4
  y = sectionTitle(doc, '⭐ Quick Wins — Haute valeur, faible complexité', y)
  y += 4

  const matrix = [
    { num: 1, title: 'Agent de réponse clients (chatbot IA)', value: 5, complexity: 2, domain: 'Tous', roi: '–40% coût CRC', color: COLORS.green },
    { num: 2, title: 'Extraction & synthèse de documents', value: 4, complexity: 2, domain: 'Tous', roi: '×3 productivité', color: COLORS.green },
    { num: 3, title: 'Aide à la rédaction de courriers', value: 3, complexity: 1, domain: 'Tous', roi: '–60% temps rédaction', color: COLORS.green },
    { num: 4, title: 'Agent sinistres IARD automatisé', value: 5, complexity: 3, domain: 'IARD', roi: '–85% délai traitement', color: COLORS.cyan },
    { num: 5, title: 'Assistant souscription avec scoring', value: 5, complexity: 3, domain: 'Vie/IARD', roi: '×3 capacité souscription', color: COLORS.cyan },
    { num: 6, title: 'Détection fraude en temps réel', value: 5, complexity: 4, domain: 'IARD/Santé', roi: '–30% fraude détectée', color: COLORS.yellow },
    { num: 7, title: 'Agent de conformité AI Act / RGPD', value: 4, complexity: 3, domain: 'Tous', roi: 'Conformité proactive', color: COLORS.cyan },
    { num: 8, title: 'Analyse de portefeuille & churn', value: 4, complexity: 3, domain: 'Tous', roi: '–15% churn', color: COLORS.cyan },
    { num: 9, title: 'Génération de rapports actuariels', value: 4, complexity: 4, domain: 'Réassurance', roi: '–80% temps reporting', color: COLORS.yellow },
    { num: 10, title: 'Orchestrateur multi-agents sinistres', value: 5, complexity: 5, domain: 'IARD', roi: 'Industrialisation complète', color: COLORS.orange },
  ]

  const headers = ['#', 'Cas d\'usage', 'Valeur', 'Complexité', 'Domaine', 'ROI estimé']
  const colWidths = [25, 190, 60, 70, 70, 110]

  drawRect(doc, 30, y, doc.page.width - 60, 24, COLORS.navy)
  let cx = 30
  headers.forEach((h, i) => {
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(COLORS.white).text(h, cx + 4, y + 8, { width: colWidths[i] - 8 })
    cx += colWidths[i]
  })
  y += 24

  matrix.forEach((item, ri) => {
    const bg = ri % 2 === 0 ? COLORS.white : COLORS.grayLight
    drawRect(doc, 30, y, doc.page.width - 60, 26, bg)
    cx = 30
    const cells = [
      item.num.toString(),
      item.title,
      '★'.repeat(item.value),
      '◆'.repeat(item.complexity),
      item.domain,
      item.roi,
    ]
    cells.forEach((cell, ci) => {
      const isStars = ci === 2 || ci === 3
      doc.font(ci === 0 ? 'Helvetica-Bold' : 'Helvetica')
        .fontSize(ci === 0 ? 11 : 8.5)
        .fillColor(ci === 2 ? COLORS.cyan : ci === 3 ? COLORS.orange : COLORS.navy)
        .text(cell, cx + 4, y + 9, { width: colWidths[ci] - 8 })
      cx += colWidths[ci]
    })
    y += 26
  })

  y += 10
  const legend = [
    [COLORS.green, 'Quick Win (valeur haute, complexité faible)'],
    [COLORS.cyan, 'Priorité 2 (valeur haute, complexité moyenne)'],
    [COLORS.yellow, 'Priorité 3 (valeur haute, complexité élevée)'],
    [COLORS.orange, 'Projet avancé (valeur max, complexité max)'],
  ]
  legend.forEach(([color, label]) => {
    doc.circle(42, y + 6, 5).fill(color)
    doc.font('Helvetica').fontSize(9).fillColor(COLORS.slate).text(label, 52, y + 2)
    y += 18
  })

  footerBar(doc, 2, 12)

  // ── Pages 3–12 : Un cas d'usage par page ────────────────────────────────
  const casUsage = [
    {
      num: 1,
      title: 'Agent de réponse clients',
      subtitle: 'Chatbot IA multicanal avec escalade intelligente',
      domain: 'Tous secteurs assurance',
      complexity: 2,
      value: 5,
      color: COLORS.green,
      problem: 'Les centres de relation client (CRC) sont saturés. 60 à 70% des contacts entrants concernent des questions simples et répétitives (solde cotisation, statut sinistre, documents à fournir). Les délais d\'attente dégradent l\'expérience client.',
      solution: 'Un agent IA multicanal (web, mobile, email) capable de répondre aux 50-70 questions fréquentes, d\'accéder aux données assuré en temps réel via des connecteurs MCP, et d\'escalader intelligemment vers un conseiller pour les cas complexes.',
      architecture: ['LLM (Claude ou GPT-4) + base de connaissances vectorielle', 'Connecteurs MCP vers CRM, gestion de contrats, GED', 'Moteur d\'escalade avec scoring de complexité', 'Intégration téléphonie (SVI IA) + chat web + email'],
      kpis: ['–40% volume contacts traités par agents humains', '–2 min délai moyen de réponse (vs 8 min)', '92% taux de résolution en premier contact', 'NPS client +15 points'],
      prereqs: ['API CRM + gestion contrats exposées', 'Base de connaissances FAQ structurée', 'Politique escalade définie avec le CRC', 'Conformité RGPD et archivage des échanges'],
      timeline: '8 à 14 semaines (POC 4 sem + prod 4 à 10 sem)',
    },
    {
      num: 2,
      title: 'Extraction & synthèse de documents',
      subtitle: 'Agent d\'analyse documentaire et extraction d\'informations',
      domain: 'Tous secteurs — forte utilité en sinistres et souscription',
      complexity: 2,
      value: 4,
      color: COLORS.green,
      problem: 'Les collaborateurs passent en moyenne 30 à 40% de leur temps à lire, synthétiser et saisir manuellement des informations depuis des documents (constats, expertises, contrats, factures médicales). Ce travail est répétitif, source d\'erreurs et à faible valeur ajoutée.',
      solution: 'Un agent IA capable de lire des PDF, images scannées, emails et formulaires pour en extraire les informations clés, les structurer et les injecter automatiquement dans les systèmes de gestion.',
      architecture: ['Vision LLM (GPT-4 Vision ou Claude) pour OCR intelligent', 'Pipeline d\'extraction avec schéma JSON configurable', 'Connecteur vers SGI / GED / CRM pour injection', 'Interface de validation humaine pour les cas ambigus'],
      kpis: ['×3 productivité des gestionnaires', '–95% saisie manuelle sur les documents traités', '< 2% taux d\'erreur d\'extraction (vs 5-8% humain)', 'Traitement 24h/24 sans backlog'],
      prereqs: ['Flux de documents identifiés et standardisés', 'Accès API au SGI / GED cible', 'Définition des schémas d\'extraction par type de doc', 'Processus de validation des cas limite (HITL)'],
      timeline: '6 à 10 semaines',
    },
    {
      num: 3,
      title: 'Aide à la rédaction de courriers',
      subtitle: 'Assistant IA de rédaction contextuelle',
      domain: 'Tous secteurs — particulièrement utile en gestion sinistres',
      complexity: 1,
      value: 3,
      color: COLORS.green,
      problem: 'Chaque gestionnaire rédige 15 à 30 courriers par jour (notifications de décision, demandes de pièces, rejets motivés, mises en demeure). Le style est hétérogène, les délais longs et le risque de non-conformité réglementaire est réel.',
      solution: 'Un assistant IA intégré dans l\'outil de gestion, capable de proposer des drafts de courrier contextuels à partir du dossier assuré, avec contrôle du ton, de la conformité réglementaire et du respect des délais réglementaires.',
      architecture: ['LLM fine-tuné sur la charte rédactionnelle de l\'assureur', 'Connecteur lecture dossier + historique du contrat', 'Bibliothèque de modèles de courriers validés', 'Module de vérification conformité réglementaire'],
      kpis: ['–60% temps de rédaction par courrier', 'Homogénéité du style et suppression des erreurs de forme', '100% des courriers conformes aux délais réglementaires', 'Onboarding nouveaux gestionnaires –30% plus rapide'],
      prereqs: ['Accès au SGI + historique dossiers', 'Charte rédactionnelle documentée', 'Bibliothèque de modèles réglementaires validée', 'Validation juridique des templates générés'],
      timeline: '4 à 6 semaines',
    },
    {
      num: 4,
      title: 'Agent sinistres IARD automatisé',
      subtitle: 'Traitement bout-en-bout des sinistres simples à moyens',
      domain: 'IARD — dommages, auto, habitation, RC',
      complexity: 3,
      value: 5,
      color: COLORS.cyan,
      problem: 'Le traitement d\'un sinistre IARD standard mobilise 4 à 6 intervenants sur 3 à 15 jours. La multiplication des échanges, des relances et des saisies manuelles génère des coûts élevés et une insatisfaction client documentée (NPS souvent négatif sur les sinistres).',
      solution: 'Un agent IA orchestrant le cycle complet : déclaration → analyse de couverture → évaluation → décision → règlement. L\'agent gère de façon autonome les sinistres simples et oriente les cas complexes vers les experts métier avec un dossier pré-instruit.',
      architecture: ['Orchestrateur IA (LangGraph ou Claude SDK)', 'Agents spécialisés : analyse couverture, calcul indemnité, vérification fraude', 'Connecteurs MCP : SGI, GED, base tarification, banque', 'Interface HITL pour les cas complexes ou > seuil montant'],
      kpis: ['–85% délai de traitement (3.2 jours → 4.7 heures)', '91% de dossiers validés sans intervention humaine', '100 dossiers simples/mois traités automatiquement', 'Satisfaction client sinistres +28 points NPS'],
      prereqs: ['SGI avec API exposées', 'Règles de gestion documentées et codifiables', 'Seuils d\'automatisation validés par la direction sinistres', 'Conformité ACPR et procédure de contrôle interne'],
      timeline: '16 à 24 semaines (4 phases)',
    },
    {
      num: 5,
      title: 'Assistant souscription avec scoring',
      subtitle: 'IA d\'aide à la décision et de tarification dynamique',
      domain: 'IARD, Vie, Prévoyance, Santé',
      complexity: 3,
      value: 5,
      color: COLORS.cyan,
      problem: 'La souscription manuelle d\'un contrat complexe prend 30 à 90 minutes entre la collecte des informations, l\'interrogation des bases de données, le calcul du risque et la rédaction du devis. La multiplication des affaires limite la capacité des équipes.',
      solution: 'Un agent IA qui guide le souscripteur à travers la collecte des informations, effectue les vérifications réglementaires, propose un scoring de risque automatique et génère un devis structuré en quelques minutes.',
      architecture: ['LLM conversationnel pour collecte guidée d\'informations', 'Modèle de scoring de risque (ML propriétaire ou externe)', 'Connecteurs : registres légaux, bases anti-blanchiment, scoring crédit', 'Moteur de tarification interfacé avec le système actuariel'],
      kpis: ['×3 capacité de souscription par souscripteur', '–75% temps de traitement par affaire', 'Cohérence et traçabilité des décisions améliorées', 'Conformité LCB-FT renforcée (contrôles automatiques)'],
      prereqs: ['Modèle de risque défini et documenté', 'API vers bases externes (INSEE, Rnipp, FICOVIE...)', 'Règles de délégation tarifaire formalisées', 'Validation actuarielle du scoring proposé'],
      timeline: '14 à 20 semaines',
    },
    {
      num: 6,
      title: 'Détection de fraude en temps réel',
      subtitle: 'Agent IA de surveillance et d\'analyse comportementale',
      domain: 'IARD, Santé, Prévoyance',
      complexity: 4,
      value: 5,
      color: COLORS.yellow,
      problem: 'La fraude à l\'assurance représente 2 à 3% des sinistres payés (source: AFA). La détection manuelle est tardive, coûteuse et peu systématique. Les fraudeurs s\'adaptent aux règles statiques des systèmes legacy.',
      solution: 'Un agent IA multicouche combinant analyse comportementale, détection d\'anomalies et croisement de données multi-sources pour identifier les dossiers suspects en temps réel et déclencher des investigations ciblées.',
      architecture: ['Modèle ML de scoring de fraude (GBM + réseau de neurones)', 'Graphe de relations (graph DB) pour détecter les réseaux', 'LLM pour analyse des déclarations textuelles', 'Intégration bases publiques et partenaires sectoriels (AGIRA, Medicaid...)'],
      kpis: ['–30% fraude payée (sur portefeuille pilote)', '×5 productivité des équipes anti-fraude', 'Taux de faux positifs < 3% (vs 15-20% règles statiques)', 'Détection moyenne à J+0 vs J+45 en mode traditionnel'],
      prereqs: ['Données historiques sinistres enrichies (minimum 3 ans)', 'Infrastructure streaming (Kafka ou équivalent)', 'Équipe anti-fraude impliquée dans le calibrage du modèle', 'Conformité RGPD : finalité, proportionnalité, droit d\'opposition'],
      timeline: '20 à 32 semaines',
    },
    {
      num: 7,
      title: 'Agent de conformité AI Act / RGPD',
      subtitle: 'Surveillance continue de la conformité réglementaire IA',
      domain: 'Tous secteurs — rôle DPO, conformité, audit',
      complexity: 3,
      value: 4,
      color: COLORS.cyan,
      problem: 'Avec l\'AI Act et le RGPD, les assureurs doivent maintenir un inventaire à jour de leurs systèmes IA, documenter les traitements, réaliser des PIA et former leurs équipes. Ce travail de veille et documentation est chronophage et souvent négligé.',
      solution: 'Un agent IA assistant le DPO et le responsable conformité : inventaire dynamique des systèmes IA, alertes réglementaires, génération de documentation (PIA, registre), formation automatisée et reporting board.',
      architecture: ['Base de connaissances réglementaire mise à jour (AI Act, RGPD, ACPR)', 'Connecteur avec le registre des traitements RGPD existant', 'LLM pour génération de documentation structurée', 'Dashboard conformité avec indicateurs clés'],
      kpis: ['100% des systèmes IA inventoriés et classifiés', 'Temps de rédaction d\'une PIA divisé par 4', 'Alertes réglementaires en temps réel (< 24h après publication)', '0 écart constaté lors des audits CNIL/ACPR'],
      prereqs: ['Inventaire initial des traitements IA existants', 'DPO impliqué et sponsor du projet', 'Accès aux flux de veille réglementaire officielle', 'Budget formation et communication interne'],
      timeline: '10 à 14 semaines',
    },
    {
      num: 8,
      title: 'Analyse de portefeuille & prédiction churn',
      subtitle: 'IA prédictive pour la rétention et la fidélisation clients',
      domain: 'Tous secteurs — particulièrement Vie, Auto, MRH',
      complexity: 3,
      value: 4,
      color: COLORS.cyan,
      problem: 'Le churn client coûte 5 à 7× plus cher que la rétention. Pourtant, la plupart des assureurs détectent la résiliation après coup. L\'analyse du portefeuille reste souvent limitée à des reportings mensuels sans capacité prédictive.',
      solution: 'Un système IA qui analyse en continu les signaux précurseurs de résiliation (comportements, réclamations, interactions CRC, événements de vie) et déclenche automatiquement des actions de fidélisation personnalisées.',
      architecture: ['Modèle prédictif churn (survie + classification)', 'Pipeline d\'enrichissement données (événements de vie, comportements)', 'Moteur de recommandation d\'actions (offres, contacts proactifs)', 'Connecteur CRM pour déclenchement automatique des campagnes'],
      kpis: ['–15% churn sur portefeuille Auto et MRH', '+8% taux de réponse aux campagnes de rétention', 'Identification 6 semaines en avance des contrats à risque', 'ROI campagnes fidélisation ×2.4'],
      prereqs: ['3 ans d\'historique client enrichi', 'CRM avec API d\'écriture', 'Équipe marketing impliquée dans la définition des actions', 'Conformité RGPD : consentement aux communications ciblées'],
      timeline: '12 à 18 semaines',
    },
    {
      num: 9,
      title: 'Génération de rapports actuariels',
      subtitle: 'Agent IA de production automatique de reporting',
      domain: 'Réassurance, Vie, Compagnies mixtes',
      complexity: 4,
      value: 4,
      color: COLORS.yellow,
      problem: 'La production de rapports actuariels (ORSA, RSR, SFCR, rapports de sinistralité) mobilise des équipes pendant des semaines. La collecte des données, la mise en forme et la vérification sont des tâches à faible valeur ajoutée pour des actuaires hautement qualifiés.',
      solution: 'Un agent IA qui automatise la collecte multi-source, le calcul des indicateurs, la génération des graphiques et la rédaction des commentaires narratifs, permettant aux actuaires de se concentrer sur l\'analyse et la décision.',
      architecture: ['Connecteurs data (DWH, modèles actuariels R/Python, bases de référence)', 'LLM pour rédaction des narratifs et synthèses', 'Moteur de génération de graphiques et tableaux dynamiques', 'Workflow de validation en plusieurs niveaux (N1/N2/CODIR)'],
      kpis: ['–80% temps de production d\'un rapport type', 'Délai de production ORSA : 3 semaines → 4 jours', '0 erreur de calcul vs 2-3% erreurs humaines', 'Disponibilité 24h/24 en période de clôture'],
      prereqs: ['DWH structuré et documenté', 'Modèles actuariels exposés via API ou fichiers standardisés', 'Actuaires référents pour définir les gabarits', 'Processus de validation et signature réglementaire maintenu'],
      timeline: '18 à 28 semaines',
    },
    {
      num: 10,
      title: 'Orchestrateur multi-agents sinistres',
      subtitle: 'Architecture IA complète de traitement end-to-end',
      domain: 'IARD — programme d\'industrialisation avancé',
      complexity: 5,
      value: 5,
      color: COLORS.orange,
      problem: 'Les assureurs les plus avancés ont industrialisé des agents individuels (voir cas d\'usage 1 à 4) mais peinent à les orchestrer de façon cohérente. La gestion des handoffs, des erreurs, de la supervision et de l\'amélioration continue reste un défi architectural.',
      solution: 'Une plateforme multi-agents orchestrée avec un agent superviseur central coordonnant des agents spécialisés (réception, analyse, décision, règlement, communication), une boucle d\'amélioration continue et un monitoring temps réel.',
      architecture: [
        'Agent superviseur : routing, monitoring, gestion des exceptions',
        'Agents spécialisés : déclaration, évaluation, fraude, règlement, communication',
        'Mémoire partagée (vector DB + state machine) entre agents',
        'Observabilité complète : traces, métriques, alertes, tableau de bord',
        'Boucle RLHF pour amélioration continue des décisions',
      ],
      kpis: ['Traitement 95% des sinistres simples sans humain', 'Temps moyen bout-en-bout < 2h pour les cas automatisables', '–70% coût de revient du traitement sinistres', 'Scalabilité linéaire sans recrutement'],
      prereqs: [
        'Maturité IA niveau 4+ sur la grille de maturité',
        'Agents individuels déjà en production (cas 1-4)',
        'Équipe MLOps dédiée pour la maintenance',
        'Gouvernance IA formalisée avec comité de pilotage',
        'Infrastructure cloud scalable (Kubernetes)',
      ],
      timeline: '12 à 18 mois (programme complet)',
    },
  ]

  casUsage.forEach((cas, idx) => {
    doc.addPage()
    headerBar(doc, `Cas #${cas.num} — ${cas.title}`, cas.subtitle)

    let py = 140

    // Meta row
    drawRect(doc, 30, py, doc.page.width - 60, 28, COLORS.navyLight, 6)
    doc.font('Helvetica').fontSize(8.5).fillColor(COLORS.slateLight).text(`Domaine : ${cas.domain}`, 44, py + 9)
    const valStr = 'Valeur : ' + '★'.repeat(cas.value) + '☆'.repeat(5 - cas.value)
    const cplxStr = 'Complexité : ' + '◆'.repeat(cas.complexity) + '◇'.repeat(5 - cas.complexity)
    doc.font('Helvetica').fontSize(8.5).fillColor(COLORS.cyan).text(valStr, 220, py + 9)
    doc.font('Helvetica').fontSize(8.5).fillColor(COLORS.orange).text(cplxStr, 340, py + 9)
    py += 34

    // Problème
    drawRect(doc, 30, py, doc.page.width - 60, 14, COLORS.red + 'aa', 4)
    doc.font('Helvetica-Bold').fontSize(9).fillColor(COLORS.white).text('🔴  PROBLÈME', 40, py + 3)
    py += 14
    const problemH = doc.heightOfString(cas.problem, { width: doc.page.width - 80 }) + 16
    drawRect(doc, 30, py, doc.page.width - 60, problemH, COLORS.grayLight, 4)
    doc.font('Helvetica').fontSize(9).fillColor(COLORS.slate).text(cas.problem, 40, py + 8, { width: doc.page.width - 80 })
    py += problemH + 6

    // Solution
    drawRect(doc, 30, py, doc.page.width - 60, 14, COLORS.green + 'aa', 4)
    doc.font('Helvetica-Bold').fontSize(9).fillColor(COLORS.white).text('✅  SOLUTION IA AGENTIQUE', 40, py + 3)
    py += 14
    const solH = doc.heightOfString(cas.solution, { width: doc.page.width - 80 }) + 16
    drawRect(doc, 30, py, doc.page.width - 60, solH, COLORS.grayLight, 4)
    doc.font('Helvetica').fontSize(9).fillColor(COLORS.slate).text(cas.solution, 40, py + 8, { width: doc.page.width - 80 })
    py += solH + 8

    const halfW = (doc.page.width - 70) / 2

    // Architecture
    drawRect(doc, 30, py, halfW, 14, COLORS.cyan + 'cc', 4)
    doc.font('Helvetica-Bold').fontSize(9).fillColor(COLORS.white).text('⚙️  ARCHITECTURE', 40, py + 3)
    py += 14

    const archStartY = py
    cas.architecture.forEach(a => {
      py = bullet(doc, a, py)
    })
    const archEndY = py
    py = archStartY

    // KPIs
    drawRect(doc, 30 + halfW + 10, archStartY - 14, halfW, 14, COLORS.green + 'cc', 4)
    doc.font('Helvetica-Bold').fontSize(9).fillColor(COLORS.white).text('📈  RÉSULTATS & ROI', 40 + halfW + 10, archStartY - 11)

    cas.kpis.forEach(kpi => {
      doc.circle(halfW + 52, py + 5, 3).fill(COLORS.green)
      doc.font('Helvetica').fontSize(9).fillColor(COLORS.navy).text(kpi, halfW + 60, py, { width: halfW - 20 })
      py += doc.heightOfString(kpi, { width: halfW - 20 }) + 6
    })

    py = Math.max(py, archEndY) + 8

    // Prérequis
    drawRect(doc, 30, py, doc.page.width - 60, 14, COLORS.orange + 'cc', 4)
    doc.font('Helvetica-Bold').fontSize(9).fillColor(COLORS.white).text('⚠️  PRÉREQUIS', 40, py + 3)
    py += 14
    cas.prereqs.forEach(p => { py = bullet(doc, p, py) })

    py += 8
    // Timeline
    drawRect(doc, 30, py, doc.page.width - 60, 30, COLORS.navyLight, 6)
    doc.font('Helvetica-Bold').fontSize(9).fillColor(COLORS.cyan).text('⏱  Timeline indicative :', 44, py + 11)
    doc.font('Helvetica-Bold').fontSize(10).fillColor(COLORS.white).text(cas.timeline, 200, py + 10)

    footerBar(doc, idx + 3, 12)
  })

  // ── Page 12 : CTA final ──────────────────────────────────────────────────
  doc.addPage()
  drawRect(doc, 0, 0, doc.page.width, doc.page.height, COLORS.navy)
  drawRect(doc, 0, doc.page.height - 8, doc.page.width, 8, COLORS.cyan)
  doc.save().circle(doc.page.width - 40, 100, 160).fillOpacity(0.05).fill(COLORS.cyan).restore()

  doc.font('Helvetica-Bold').fontSize(28).fillColor(COLORS.white).text('Par où commencer ?', 60, 100)
  doc.font('Helvetica-Bold').fontSize(18).fillColor(COLORS.cyan).text('3 étapes pour votre premier agent IA', 60, 138)

  doc.font('Helvetica').fontSize(11).fillColor(COLORS.slateLight)
    .text('Ces 10 cas d\'usage sont des points de départ, pas des modèles à copier. Le succès dépend de votre contexte spécifique, de vos données et de votre maturité organisationnelle.', 60, 178, { width: 440, lineGap: 4 })

  const steps3 = [
    ['Étape 1', 'Évaluer votre maturité', 'Utilisez la Grille de maturité IA agentique pour identifier vos forces et lacunes avant de choisir votre premier cas d\'usage.'],
    ['Étape 2', 'Choisir le bon premier cas', 'Sélectionnez un cas avec valeur élevée et complexité faible (cases vertes de la matrice). Ciblez un résultat mesurable en 3 mois.'],
    ['Étape 3', 'Structurer le projet', 'Définissez un sponsor COMEX, une équipe mixte IT/Métier, un budget, et un go/no-go sur des KPIs clairs à 30 et 90 jours.'],
  ]

  let sy = 240
  steps3.forEach(([step, title, desc], i) => {
    drawRect(doc, 60, sy, doc.page.width - 120, 70, COLORS.navyLight, 10)
    drawRect(doc, 60, sy, 60, 70, COLORS.cyan, 8)
    doc.font('Helvetica-Bold').fontSize(11).fillColor(COLORS.navy).text(step, 60, sy + 20, { width: 60, align: 'center' })
    doc.font('Helvetica-Bold').fontSize(12).fillColor(COLORS.white).text(title, 134, sy + 10)
    doc.font('Helvetica').fontSize(9).fillColor(COLORS.slateLight).text(desc, 134, sy + 30, { width: doc.page.width - 200 })
    sy += 82
  })

  drawRect(doc, 60, sy + 10, doc.page.width - 120, 56, COLORS.cyan, 10)
  doc.font('Helvetica-Bold').fontSize(16).fillColor(COLORS.navy).text('Discutons de votre projet', 0, sy + 22, { align: 'center' })
  doc.font('Helvetica').fontSize(11).fillColor(COLORS.navyLight).text('davidbrenet.com  ·  brenet.david@gmail.com', 0, sy + 42, { align: 'center' })

  doc.end()
  console.log('✅ 10-cas-usage-agents-assurance.pdf généré')
}

// ─── Main ─────────────────────────────────────────────────────────────────────

console.log('🚀 Génération des 3 PDF lead magnets...\n')
generateGrilleMaturite()
generateChecklistAIAct()
generateCasUsage()
console.log('\n📁 PDFs générés dans : public/ressources/')
