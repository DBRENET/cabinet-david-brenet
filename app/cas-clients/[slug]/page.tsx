import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Target, Lightbulb, TrendingUp, Building2 } from 'lucide-react'

const caseStudiesData: Record<string, {
  sector: string
  type: string
  title: string
  subtitle: string
  context: string
  challenge: string
  intervention: string[]
  results: { metric: string; label: string; detail: string }[]
  learnings: string[]
  tags: string[]
  color: string
  tagColor: string
}> = {
  'agent-sinistres-iard': {
    sector: 'Assurance IARD',
    type: 'Déploiement agent IA',
    title: 'Agent d\'instruction automatique des sinistres dégâts des eaux',
    subtitle: 'De 3,2 jours à 4,7 heures pour les sinistres simples',
    context: 'Assureur IARD régional, 280 collaborateurs, DSI de 18 personnes. La branche dégâts des eaux représente environ 40 % des sinistres, soit 180 dossiers par mois. Chaque sinistre simple nécessitait trois étapes manuelles : collecte et vérification des pièces justificatives, contrôle de la validité du contrat, rédaction de la recommandation d\'indemnisation. Ces tâches représentaient 60 % du temps de travail des 8 gestionnaires DDO, au détriment des dossiers complexes qui exigent leur expertise réelle.',
    challenge: 'Le délai moyen d\'instruction sur les sinistres simples (montant inférieur à 2 000 €, sans tiers impliqué, pièces complètes) atteignait 3,2 jours ouvrés — contre un engagement contractuel de 5 jours. En apparence conforme, mais avec une marge insuffisante en période de pointe (automne/hiver). Le taux de satisfaction client sur ce type de dossier stagnait à 67 %. La direction souhaitait passer sous 24 heures sur les sinistres simples sans augmenter les effectifs, dans un contexte de hausse de la sinistralité climatique.',
    intervention: [
      'Phase 1 — Cadrage (2 semaines) : définition des critères d\'éligibilité des sinistres automatisables — montant < 2 000 €, contrat valide et à jour, aucun tiers impliqué, pièces justificatives complètes et lisibles. Résultat : 55 % du volume DDO éligible.',
      'Phase 2 — Développement de l\'agent Claude (6 semaines) : intégration au SI sinistres via serveurs MCP, connexion à la base contrats en lecture seule, moteur de vérification documentaire OCR + Claude, génération automatique de la recommandation d\'indemnisation structurée.',
      'Phase 3 — Pilote 30 jours : traitement de 25 dossiers avec validation systématique par un gestionnaire senior avant toute décision. Affinage des critères d\'escalade sur la base des cas limites identifiés. Aucune décision erronée sur la cohorte pilote.',
      'Phase 4 — Généralisation et formation : montée en charge sur 100 dossiers/mois. Formation des 8 gestionnaires au nouveau workflow : ils valident les recommandations de l\'agent plutôt que de les produire. Mise en place d\'un tableau de bord de supervision.',
    ],
    results: [
      { metric: '– 85%', label: 'Délai d\'instruction', detail: 'De 3,2 jours ouvrés à 4,7 heures en moyenne, toutes pièces reçues. L\'objectif de 24 h est atteint et largement dépassé.' },
      { metric: '91%', label: 'Taux de validation', detail: 'Des recommandations générées par l\'agent validées sans modification par le gestionnaire. Les 9 % restants sont des demandes de complément de pièces, pas des erreurs.' },
      { metric: '100', label: 'Dossiers/mois', detail: 'Volume traité automatiquement, soit 55 % du total sinistres DDO. Les gestionnaires se concentrent sur les 45 % de dossiers complexes à forte valeur ajoutée.' },
    ],
    learnings: [
      'La définition des critères d\'escalade est plus importante que le code de l\'agent — passer du temps sur les cas limites avant de coder évite de retravailler l\'agent en production.',
      'La supervision humaine valorise le travail du gestionnaire plutôt que de le menacer — ils valident et apprennent de l\'agent, ils ne sont pas remplacés.',
      'Les logs exhaustifs sont indispensables pour la conformité et la confiance — chaque décision de l\'agent est tracée, horodatée et auditable.',
    ],
    tags: ['Sinistres', 'Agents IA', 'MCP', 'Claude API', 'RGPD'],
    color: 'border-cyan-500/30',
    tagColor: 'text-cyan-400',
  },
  'formation-claude-dsi-mutuelle': {
    sector: 'Mutuelle santé',
    type: 'Formation intra-entreprise',
    title: 'Formation Claude Code & Agents IA pour les équipes IT d\'une mutuelle',
    subtitle: '12 développeurs formés, un agent en production en 6 semaines',
    context: 'Mutuelle de santé de taille intermédiaire, 12 000 adhérents, équipe IT de 12 développeurs. Stack technique mixte : PHP/Symfony pour les applications front, Java/Spring pour les APIs métier, Oracle en base de données. Le backlog de maintenance du legacy accaparait 70 % de la capacité de l\'équipe. Contexte de transformation numérique avec une volonté affichée de la direction IT de monter en compétence sur l\'IA sans dépendre d\'un prestataire externe long terme.',
    challenge: 'Productivité en baisse sur les projets de maintenance : un développeur passait en moyenne 2h à comprendre une portion de code legacy avant de pouvoir intervenir. Documentation quasi inexistante des systèmes Java hérités. Difficulté à recruter des profils IA sur le bassin d\'emploi. Budget contraint : pas plus de 5 jours de formation, ROI attendu dans les 3 mois suivants.',
    intervention: [
      'Audit préalable (2 jours) : analyse des pratiques de développement, entretiens avec 6 développeurs, identification des 5 cas d\'usage IA les plus à portée — documentation automatique du legacy en tête.',
      'Formation Claude Code (2 jours) : installation et configuration, rédaction du CLAUDE.md projet, workflows de revue de code, génération et compréhension du code legacy Java, tests automatisés. Chaque développeur repart avec un CLAUDE.md fonctionnel pour son périmètre.',
      'Formation Agents & MCP (3 jours) : architecture d\'un agent avec le SDK Anthropic, conception de serveurs MCP pour connecter Claude aux APIs métier existantes, gestion des erreurs et de la supervision, mise en production sur environnement de test.',
      'Accompagnement post-formation (6 semaines) : 1h de suivi hebdomadaire en visio, revue du code de l\'agent pilote, déblocage des points de friction. L\'agent de consultation de contrats adhérents passe en production à la semaine 6.',
    ],
    results: [
      { metric: '12', label: 'Développeurs formés', detail: '2 cohortes de 6, programme adapté aux niveaux — les juniors sur Claude Code, les seniors sur l\'architecture agents.' },
      { metric: '+ 38%', label: 'Productivité mesurée', detail: 'Sur les tâches de maintenance et de revue de code, mesuré par comparaison avant/après sur un échantillon de tickets JIRA.' },
      { metric: '6 sem.', label: '1er agent en prod', detail: 'Agent de consultation de contrats adhérents (lecture seule) — les conseillers peuvent interroger un contrat en langage naturel sans quitter leur interface.' },
    ],
    learnings: [
      'La formation seule ne suffit pas — l\'accompagnement post-formation est déterminant pour qu\'un premier agent passe en production plutôt que de rester un exercice.',
      'Le CLAUDE.md partagé est la clé de l\'adoption en équipe — quand tout le monde utilise le même fichier de contexte, la qualité des outputs de Claude devient homogène.',
      'Les développeurs seniors sont souvent les plus enthousiastes une fois convaincus — leur influence sur le reste de l\'équipe est décisive pour l\'adoption.',
    ],
    tags: ['Formation', 'Claude Code', 'SDK Agents', 'DSI', 'Mutuelle'],
    color: 'border-purple-500/30',
    tagColor: 'text-purple-400',
  },
  'gouvernance-ai-act-assureur': {
    sector: 'Assureur vie',
    type: 'Gouvernance & AI Act',
    title: 'Mise en conformité AI Act article 4 et politique d\'usage IA',
    subtitle: '87 collaborateurs formés, politique d\'usage déployée en 3 mois',
    context: 'Assureur vie, 450 collaborateurs répartis sur 3 sites. Utilisation spontanée et croissante de Claude, ChatGPT et Gemini dans les équipes — principalement les acteurs commerciaux, les actuaires et le service client. Le DPO avait reçu plusieurs remontées terrain concernant le partage de documents clients dans des interfaces IA en ligne non auditées. La direction souhaitait cadrer sans interdire, en s\'appuyant sur l\'obligation réglementaire AI Act article 4 comme levier de structuration.',
    challenge: 'Le shadow AI était omniprésent : un questionnaire anonyme révélait que 60 % des collaborateurs utilisaient des IA génératives au moins hebdomadairement, dont 35 % avec des données potentiellement sensibles (contrats, données médicales pseudonymisées, données financières clients). L\'obligation AI Act article 4 — formation IA obligatoire pour le personnel utilisant des systèmes IA dans l\'exercice de leur fonction — entrait en application, avec un risque d\'amende en cas de non-conformité. Il fallait agir vite et créer une culture IA responsable, pas une liste de règles incomprises.',
    intervention: [
      'Audit de l\'usage IA existant (3 semaines) : 20 entretiens individuels représentatifs + questionnaire anonyme à l\'ensemble des collaborateurs. Cartographie des usages réels, des données manipulées, des outils utilisés.',
      'Co-rédaction de la politique d\'usage IA (2 semaines) : ateliers de travail avec DPO, RSSI et représentants des métiers. La politique distingue 3 niveaux d\'usage (libre, encadré, interdit) selon la sensibilité des données et le type de système.',
      'Inventaire et classification AI Act : identification de 23 systèmes IA utilisés dans l\'organisation, classification selon les catégories de risque AI Act, documentation pour les 6 systèmes classifiés à risque limité ou élevé.',
      'Formation AI Act article 4 (3 cohortes) : ½ journée pour les 18 dirigeants (enjeux stratégiques, responsabilité), 1 journée pour 42 collaborateurs métiers (usages pratiques, règles, bonnes pratiques), 1 journée pour 27 collaborateurs IT (conformité technique, gouvernance des systèmes).',
      'Documentation et suivi : production des attestations de formation conformes AI Act, plan de mise à jour annuelle, tableau de bord de suivi des usages.',
    ],
    results: [
      { metric: '87', label: 'Collaborateurs formés', detail: '3 cohortes distinctes selon profil — dirigeants (½j), métiers (1j), IT (1j). Taux de satisfaction formation : 4,6/5.' },
      { metric: '100%', label: 'Systèmes inventoriés', detail: '23 systèmes IA identifiés, classifiés et documentés. 6 nécessitent une documentation AI Act spécifique.' },
      { metric: '3 mois', label: 'Durée accompagnement', detail: 'De l\'audit initial à la politique déployée et l\'ensemble des collaborateurs formés — dans les délais réglementaires.' },
    ],
    learnings: [
      'Le shadow AI est toujours plus répandu qu\'on ne le croit initialement — les entretiens qualitatifs révèlent des usages que le questionnaire anonyme ne capte pas.',
      'La politique d\'usage doit être co-construite avec les métiers — pas imposée par la DRH ou le DPO. L\'appropriation est la condition de l\'efficacité.',
      'La formation change radicalement la perception de l\'IA par les équipes — les collaborateurs formés deviennent des ambassadeurs de l\'usage responsable, pas des opposants.',
    ],
    tags: ['AI Act', 'Gouvernance', 'Formation', 'Conformité', 'RGPD'],
    color: 'border-red-500/30',
    tagColor: 'text-red-400',
  },
  'keynote-comex-assurance': {
    sector: 'Groupe assurantiel',
    type: 'Keynote COMEX',
    title: 'Keynote IA agentique pour le COMEX d\'un groupe assurantiel',
    subtitle: '18 dirigeants, 3 chantiers priorisés, 1er lancé à J+30',
    context: 'Groupe assurantiel multi-branches (vie, IARD, prévoyance), 1 200 collaborateurs, présent sur 5 régions. COMEX de 18 membres. Plusieurs PoC IA avaient été menés par la DSI sur les 18 mois précédents — chatbot de service client, assistant de souscription, aide à la rédaction — sans aboutir à de la production. Pression des actionnaires sur le ROI de la transformation digitale. Le DSI et le DG souhaitaient aligner l\'ensemble du COMEX avant de lancer des chantiers structurants, pour éviter des projets orphelins faute de sponsor direction.',
    challenge: 'Le COMEX percevait l\'IA comme un sujet technique, pas stratégique. Les projets IA étaient présentés en COMEX comme des reportings d\'avancement, jamais comme des décisions à prendre. Résultat : des PoC qui ne passaient pas en production faute de portage direction, des équipes IT démobilisées, et un retard croissant par rapport aux concurrents qui commençaient à industrialiser. L\'enjeu était de créer une culture de décision IA au niveau CODIR, pas d\'informer.',
    intervention: [
      'Briefing préparatoire (2h avec DSI et DG) : analyse du contexte sectoriel, benchmark de 5 concurrents directs, sélection des 8 cas d\'usage les plus pertinents à soumettre au vote lors de l\'atelier.',
      'Keynote de 2h : état de l\'art de l\'IA agentique (sans jargon), 3 démonstrations live d\'agents Claude sur des cas concrets du secteur, panorama des erreurs à éviter (PoC sans sponsor, données non structurées, surenchère sur les modèles), questions-réponses.',
      'Atelier de priorisation (30 min) : chaque membre du COMEX vote sur 8 cas d\'usage proposés selon une grille valeur/risque/délai. Vote individuel puis convergence collective — alignement en une demi-heure sur 3 chantiers prioritaires.',
      'Rapport de synthèse (J+7) : recommandations personnalisées, estimation budgétaire indicative pour les 3 chantiers, proposition de gouvernance, bibliographie sélective.',
    ],
    results: [
      { metric: '18', label: 'Dirigeants participants', detail: '100 % de présence, session très interactive — 35 questions posées lors de la séance Q&A. Score NPS post-intervention : 72.' },
      { metric: '3', label: 'Chantiers priorisés', detail: 'Agent de service client multicanal, assistant de souscription vie, programme de formation Claude pour les équipes IT — consensus atteint en 30 min d\'atelier.' },
      { metric: 'J+30', label: '1er chantier lancé', detail: 'L\'agent de service client entre en phase de cadrage 30 jours après la keynote, avec un sponsor COMEX identifié et un budget alloué.' },
    ],
    learnings: [
      'Le COMEX a besoin de concret, pas de théorie — les démonstrations live d\'agents réels sont ce qui crée le déclic, pas les slides sur l\'architecture technique.',
      'L\'atelier de priorisation crée l\'alignement que les présentations seules ne créent jamais — voter ensemble en 30 min vaut mieux que 3 mois de réunions bilatérales.',
      'La question du sponsor COMEX est le premier filtre de tout projet IA — sans sponsor nommé et budget alloué à l\'issue de la session, le chantier ne démarrera pas.',
    ],
    tags: ['COMEX', 'Keynote', 'Stratégie', 'IA Agentique', 'Priorisation'],
    color: 'border-amber-500/30',
    tagColor: 'text-amber-400',
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cs = caseStudiesData[params.slug]
  if (!cs) return { title: 'Étude de cas non trouvée' }
  return {
    title: `${cs.title} — Étude de cas | David Brenet`,
    description: cs.subtitle,
    alternates: { canonical: `https://davidbrenet.com/cas-clients/${params.slug}` },
  }
}

export default function CasClientPage({ params }: { params: { slug: string } }) {
  const cs = caseStudiesData[params.slug]

  if (!cs) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-900 pt-20">
        <div className="text-center px-6">
          <div className="text-6xl font-bold text-slate-700 mb-4">404</div>
          <h1 className="text-2xl font-bold text-slate-200 mb-4">Étude de cas non trouvée</h1>
          <Link href="/cas-clients" className="btn-primary">
            <ArrowLeft size={16} /> Retour aux études de cas
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-navy-950 to-navy-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/cas-clients"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-8"
          >
            <ArrowLeft size={15} /> Retour aux études de cas
          </Link>

          <div className="flex items-center gap-2 mb-3">
            <Building2 size={12} className="text-slate-500" />
            <span className="text-xs text-slate-500">{cs.sector}</span>
            <span className="text-slate-700">·</span>
            <span className={`text-xs font-semibold ${cs.tagColor}`}>{cs.type}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight mb-4">
            {cs.title}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-8">{cs.subtitle}</p>

          {/* Results */}
          <div className="grid grid-cols-3 gap-4">
            {cs.results.map(({ metric, label }) => (
              <div key={label} className="card-glass p-4 text-center">
                <div className={`text-2xl font-bold ${cs.tagColor} mb-1`}>{metric}</div>
                <div className="text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">

          {/* Contexte */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                <Building2 size={14} className="text-slate-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Contexte</h2>
            </div>
            <div className="card-glass p-6">
              <p className="text-slate-400 leading-relaxed">{cs.context}</p>
            </div>
          </div>

          {/* Enjeux */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Target size={14} className="text-amber-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Enjeux & problématique</h2>
            </div>
            <div className="card-glass p-6">
              <p className="text-slate-400 leading-relaxed">{cs.challenge}</p>
            </div>
          </div>

          {/* Intervention */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Lightbulb size={14} className="text-cyan-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Mon intervention</h2>
            </div>
            <div className="card-glass p-6">
              <ol className="space-y-4">
                {cs.intervention.map((step, i) => (
                  <li key={i} className="flex gap-4 text-slate-400">
                    <span className="text-slate-600 font-mono text-sm flex-shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}.</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Résultats */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <TrendingUp size={14} className="text-emerald-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Résultats mesurés</h2>
            </div>
            <div className="space-y-3">
              {cs.results.map(({ metric, label, detail }) => (
                <div key={label} className="card-glass p-5 flex items-center gap-5">
                  <div className={`text-2xl font-bold ${cs.tagColor} w-20 text-center flex-shrink-0`}>{metric}</div>
                  <div>
                    <div className="font-semibold text-slate-200 text-sm">{label}</div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enseignements */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <CheckCircle2 size={14} className="text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Ce que j&apos;en ai appris</h2>
            </div>
            <div className="card-glass p-6">
              <ul className="space-y-4">
                {cs.learnings.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                    <CheckCircle2 size={13} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
            {cs.tags.map((tag) => (
              <span key={tag} className="text-xs text-slate-500 bg-navy-800/60 border border-slate-700/40 rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800/40 border-t border-slate-800/50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Ce projet vous parle ?
          </h2>
          <p className="text-slate-400 mb-6">
            Prenons 30 minutes pour voir ce qui est faisable dans votre contexte.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact?sujet=diagnostic" className="btn-primary">
              Demander un diagnostic <ArrowRight size={16} />
            </Link>
            <Link href="/cas-clients" className="btn-outline">
              Voir d&apos;autres études de cas
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
