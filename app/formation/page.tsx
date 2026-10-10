import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, GraduationCap, Mic2, Users, BookOpen,
  Brain, Bot, Shield, Cpu, Clock, Target, ChevronRight,
  Lightbulb, Network, FileText, Star,
} from 'lucide-react'
import { TrustedBy } from '@/components/TrustedBy'

export const metadata: Metadata = {
  title: 'Formations Claude & IA Agentique — Catalogue Intra-Entreprise | David Brenet',
  description:
    'Catalogue de 6 formations intra-entreprise sur Claude, l\'IA agentique et l\'AI Act. De la demi-journée COMEX au parcours 3 jours pour les équipes IT. Formation certifiante, présentiel Niort ou à distance. David Brenet, expert Claude Anthropic.',
  keywords: [
    'formation Claude entreprise',
    'formation IA agentique',
    'formation Claude Code',
    'formation MCP Model Context Protocol',
    'formation AI Act article 4',
    'formation agents IA intra',
    'formation Claude managers',
    'formation COMEX IA',
    'formation assurance IA',
    'David Brenet formateur',
  ],
  alternates: { canonical: 'https://davidbrenet.com/formation' },
}

/* ─── Données formations ─────────────────────────────────── */

const formations = [
  {
    id: 'f1',
    code: 'F-01',
    badge: 'Le plus demandé',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    titre: 'Claude pour les managers et équipes métiers',
    soustitre: 'Prendre en main Claude dans son quotidien professionnel',
    duree: '1 jour (7h)',
    durIcon: Clock,
    public: 'Managers, chargés de clientèle, gestionnaires sinistres, souscripteurs, RH, juristes',
    niveau: 'Débutant — aucun prérequis technique',
    modalite: 'Présentiel intra-entreprise (Niort ou déplacement) / Distanciel',
    effectif: '8 à 12 participants',
    icon: Brain,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    objectifs: [
      'Comprendre ce qu\'est Claude et en quoi il diffère des autres IA',
      'Rédiger des prompts efficaces pour des tâches métier réelles',
      'Intégrer Claude dans ses flux de travail quotidiens',
      'Identifier les limites et les précautions d\'usage (RGPD, confidentialité)',
      'Repérer les cas d\'usage à fort potentiel dans son service',
    ],
    programme: [
      {
        bloc: 'Matin — Comprendre et prendre en main (3h30)',
        items: [
          'Claude vs ChatGPT vs autres : pourquoi Claude pour l\'entreprise ?',
          'Démonstration en live : ce que Claude fait vraiment bien',
          'La mécanique du prompting : contexte, rôle, format, contraintes',
          'Ateliers guidés : rédiger, résumer, structurer, reformuler',
          'Cas d\'usage assurance : réponses clients, notes de couverture, comptes-rendus',
        ],
      },
      {
        bloc: 'Après-midi — Appliquer à vos cas métier (3h30)',
        items: [
          'Projets Claude : organiser ses usages professionnels',
          'Limites de Claude : hallucinations, données récentes, confidentialité',
          'RGPD et usage en entreprise : règles à respecter',
          'Atelier : chaque participant identifie et prototyper son cas d\'usage personnel',
          'Synthèse collective et plan d\'action individuel',
        ],
      },
    ],
    livrables: [
      'Guide de prompting métier (PDF illustré)',
      'Bibliothèque de 30 prompts assurance prêts à l\'emploi',
      'Checklist RGPD & sécurité pour usage Claude en entreprise',
      'Attestation de formation',
    ],
    evaluation: 'Quiz de fin de journée + grille d\'auto-évaluation des acquis',
    accessibilite: 'Formation accessible aux personnes en situation de handicap — me contacter pour adapter le format.',
    ctaHref: '/contact?sujet=formation-claude-managers',
  },
  {
    id: 'f2',
    code: 'F-02',
    badge: 'Technique',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    titre: 'Claude Code & développement assisté par agents',
    soustitre: 'Intégrer Claude Code dans les workflows des équipes IT',
    duree: '2 jours (14h)',
    durIcon: Clock,
    public: 'Développeurs, architectes, ingénieurs DevOps, tech leads',
    niveau: 'Intermédiaire — maîtrise d\'au moins un langage de programmation',
    modalite: 'Présentiel intra-entreprise / Distanciel avec accès labs',
    effectif: '6 à 10 participants',
    icon: Cpu,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    objectifs: [
      'Installer et configurer Claude Code dans son environnement de travail',
      'Utiliser les commandes slash, les sous-agents et les hooks',
      'Déléguer des tâches complexes à Claude Code (refactoring, tests, documentation)',
      'Intégrer Claude Code dans une CI/CD et des workflows d\'équipe',
      'Identifier les risques de sécurité et appliquer les garde-fous',
    ],
    programme: [
      {
        bloc: 'Jour 1 — Maîtriser Claude Code (7h)',
        items: [
          'Introduction à l\'écosystème Claude : API, Claude Code, Projects, MCP',
          'Installation, configuration et premiers pas avec Claude Code CLI',
          'Lecture de codebase, compréhension automatique, navigation',
          'Commandes slash : /review, /test, /commit, custom slash commands',
          'Ateliers : génération de tests unitaires, documentation automatique',
          'Refactoring assisté et détection de bugs complexes',
        ],
      },
      {
        bloc: 'Jour 2 — Agents et intégration (7h)',
        items: [
          'Sous-agents Claude Code : parallélisation de tâches, orchestration',
          'Hooks : pre-tool, post-tool, notification — exemples concrets',
          'Intégration CI/CD : GitHub Actions + Claude Code',
          'Sécurité : permissions, isolation, gestion des secrets',
          'CLAUDE.md : configurer les règles projet pour votre équipe',
          'Atelier fil rouge : automatiser un workflow réel de votre DSI',
          'Mise en production et bonnes pratiques d\'équipe',
        ],
      },
    ],
    livrables: [
      'Guide de configuration Claude Code pour équipe (CLAUDE.md template)',
      'Bibliothèque de hooks et commandes slash réutilisables',
      'Checklist sécurité Claude Code en environnement d\'entreprise',
      'Attestation de formation',
    ],
    evaluation: 'Exercice pratique de fin de formation + revue de code assistée par Claude',
    accessibilite: 'Formation accessible aux personnes en situation de handicap — me contacter pour adapter le format.',
    ctaHref: '/contact?sujet=formation-claude-code',
  },
  {
    id: 'f3',
    code: 'F-03',
    badge: 'Avancé',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    titre: 'Concevoir et déployer des agents IA avec Claude & MCP',
    soustitre: 'Du premier agent au déploiement en production dans votre SI',
    duree: '3 jours (21h)',
    durIcon: Clock,
    public: 'Architectes SI, développeurs seniors, chefs de projets techniques, DSI',
    niveau: 'Avancé — Python requis, notions d\'API REST appréciées',
    modalite: 'Présentiel intra-entreprise / Distanciel avec environnement sandbox',
    effectif: '4 à 8 participants',
    icon: Network,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    objectifs: [
      'Comprendre l\'architecture des agents IA et les patterns d\'orchestration',
      'Concevoir un agent Claude avec le SDK officiel Anthropic',
      'Implémenter le Model Context Protocol (MCP) pour connecter Claude à vos outils',
      'Sécuriser un agent IA pour un usage en production dans un SI d\'entreprise',
      'Évaluer la qualité et monitorer un agent en production',
    ],
    programme: [
      {
        bloc: 'Jour 1 — Fondations agents IA (7h)',
        items: [
          'Architecture des agents : boucle agentique, planification, mémoire, outils',
          'L\'API Claude : messages, tokens, system prompts, tool use',
          'Premiers agents avec le SDK Python Anthropic',
          'Tool use : définir et appeler des outils depuis un agent',
          'Patterns : ReAct, Plan & Execute, Multi-step reasoning',
          'Atelier : construire un agent de traitement de documents assurantiels',
        ],
      },
      {
        bloc: 'Jour 2 — MCP et intégration SI (7h)',
        items: [
          'Model Context Protocol : architecture, serveurs MCP, ressources et prompts',
          'Créer un serveur MCP pour exposer vos API internes',
          'Connecter Claude à vos outils : GED, CRM, base sinistres',
          'Patterns multi-agents : orchestrateur + sous-agents spécialisés',
          'Gestion des contextes longs et mémoire persistante',
          'Atelier : architecture multi-agents pour un workflow sinistres',
        ],
      },
      {
        bloc: 'Jour 3 — Production, sécurité, gouvernance (7h)',
        items: [
          'Sécuriser un agent : prompt injection, données sensibles, RGPD',
          'Logging, traçabilité et audit trail pour compliance',
          'Évaluation et tests d\'agents : benchmarks, red teaming',
          'Monitoring en production : métriques, alertes, rollback',
          'Documentation AI Act : fiche agent, classification risque',
          'Atelier final : plan de mise en production d\'un agent de votre SI',
        ],
      },
    ],
    livrables: [
      'Kit de démarrage agents Claude (SDK, exemples, tests)',
      'Template serveur MCP pour votre SI',
      'Checklist sécurité et conformité agents IA',
      'Template fiche agent AI Act',
      'Attestation de formation',
    ],
    evaluation: 'Soutenance technique du projet fil rouge (agent fonctionnel en sandbox)',
    accessibilite: 'Formation accessible aux personnes en situation de handicap — me contacter pour adapter le format.',
    ctaHref: '/contact?sujet=formation-agents-mcp',
  },
  {
    id: 'f4',
    code: 'F-04',
    badge: 'Dirigeants',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    titre: 'IA agentique pour COMEX & CODIR',
    soustitre: 'Comprendre l\'IA agentique pour décider et gouverner',
    duree: 'Demi-journée (3h30)',
    durIcon: Clock,
    public: 'Membres de COMEX, CODIR, directeurs généraux, secrétaires généraux',
    niveau: 'Aucun prérequis — format conférence interactive',
    modalite: 'Présentiel dans vos locaux (format séminaire / déjeuner conférence)',
    effectif: '8 à 25 participants',
    icon: Users,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    objectifs: [
      'Comprendre la différence entre IA générative et IA agentique',
      'Identifier les opportunités concrètes pour votre organisation',
      'Prendre conscience des risques stratégiques de l\'inaction',
      'Poser les bonnes questions à vos équipes techniques',
      'Fixer un cap et un premier chantier prioritaire',
    ],
    programme: [
      {
        bloc: 'Programme (3h30 en continu)',
        items: [
          'L\'IA agentique en 10 minutes : ce qui change vraiment',
          'Panorama des cas d\'usage en assurance et mutuelles (2026)',
          'Ce que font déjà vos concurrents — et ce que vous pouvez faire',
          'Les 3 erreurs que font 80% des organisations au départ',
          'Gouvernance, AI Act, responsabilité : ce que doit décider le COMEX',
          'Session questions-réponses et priorisation collective',
          'Recommandation personnalisée sur votre contexte',
        ],
      },
    ],
    livrables: [
      'Rapport de synthèse personnalisé (4 pages) post-séance',
      'Grille de maturité IA agentique à compléter avec vos équipes',
      'Bibliographie et ressources pour approfondir',
    ],
    evaluation: 'Questionnaire de satisfaction immédiat + entretien de suivi proposé à J+30',
    accessibilite: 'Format adaptable aux contraintes d\'accessibilité — me contacter.',
    ctaHref: '/contact?sujet=formation-comex',
  },
  {
    id: 'f5',
    code: 'F-05',
    badge: 'Réglementaire',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30',
    titre: 'AI Act & gouvernance de l\'IA agentique',
    soustitre: 'Former ses équipes au sens de l\'article 4 du Règlement IA',
    duree: '1 jour (7h)',
    durIcon: Clock,
    public: 'Responsables conformité, DPO, juristes, risk managers, DSI, managers de projet IA',
    niveau: 'Intermédiaire — connaissance des enjeux réglementaires appréciée',
    modalite: 'Présentiel intra-entreprise / Distanciel',
    effectif: '8 à 15 participants',
    icon: Shield,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    objectifs: [
      'Comprendre le cadre général du Règlement IA (AI Act) européen',
      'Appliquer l\'article 4 : obligation de formation pour les personnels IA',
      'Classifier les systèmes IA selon leur niveau de risque',
      'Mettre en place une politique de gouvernance IA dans son organisation',
      'Documenter ses systèmes IA pour préparer une audit de conformité',
    ],
    programme: [
      {
        bloc: 'Matin — Le cadre réglementaire (3h30)',
        items: [
          'AI Act : calendrier d\'application, champ d\'application, définitions',
          'Article 4 : obligation de « culture IA » — ce que cela implique concrètement',
          'Classification des systèmes IA : interdit / haut risque / limité / minimal',
          'Les systèmes à haut risque dans l\'assurance (scoring, sinistres, souscription)',
          'RGPD + AI Act : articulation, obligations cumulatives',
        ],
      },
      {
        bloc: 'Après-midi — Gouvernance et mise en pratique (3h30)',
        items: [
          'Politique d\'usage IA : contenu obligatoire, qui signe, qui est responsable',
          'Inventaire des systèmes IA : fiche par système, mise à jour',
          'Supervision humaine : exigences concrètes selon le niveau de risque',
          'Atelier : cartographier et classifier les outils IA de votre organisation',
          'Plan d\'action conformité AI Act : priorisation et responsables',
        ],
      },
    ],
    livrables: [
      'Résumé de l\'AI Act en 4 pages (format praticien)',
      'Template politique d\'usage IA (Word éditable)',
      'Template fiche de système IA (conformité article 9 AI Act)',
      'Plan d\'action conformité personnalisé',
      'Attestation de formation (valable au titre de l\'art. 4)',
    ],
    evaluation: 'QCM de validation des acquis + exercice de classification de systèmes IA',
    accessibilite: 'Formation accessible aux personnes en situation de handicap — me contacter pour adapter le format.',
    ctaHref: '/contact?sujet=formation-ai-act',
  },
  {
    id: 'f6',
    code: 'F-06',
    badge: 'Co-construction',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    titre: 'Atelier cas d\'usage & prototypage agentique',
    soustitre: 'Identifier vos meilleurs cas d\'usage et prototyper en équipe mixte',
    duree: '1 jour (7h)',
    durIcon: Clock,
    public: 'Équipes mixtes métier + IT : responsable métier, développeurs, product owners',
    niveau: 'Tous niveaux — format atelier collaboratif',
    modalite: 'Présentiel impératif (atelier collaboratif en salle)',
    effectif: '8 à 16 participants (équipes mixtes)',
    icon: Lightbulb,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    objectifs: [
      'Identifier collectivement les cas d\'usage IA à plus forte valeur dans votre organisation',
      'Prioriser par une grille valeur / faisabilité / risque',
      'Prototyper le cas d\'usage prioritaire avec Claude en temps réel',
      'Évaluer la faisabilité technique et les prérequis données',
      'Repartir avec un plan d\'action pour passer en POC puis en production',
    ],
    programme: [
      {
        bloc: 'Matin — Exploration et priorisation (3h30)',
        items: [
          'Rappel de l\'écosystème Claude et des capacités agentiques (30 min)',
          'Inspiration : 15 cas d\'usage agentiques en assurance démontés',
          'Design sprint : identification des cas d\'usage de votre organisation',
          'Grille de priorisation : valeur métier × faisabilité × risque × délai',
          'Vote et sélection du cas d\'usage à prototyper',
        ],
      },
      {
        bloc: 'Après-midi — Prototypage et plan d\'action (3h30)',
        items: [
          'Conception de l\'agent : rôle, outils, données, workflow',
          'Prototypage guidé avec Claude (API ou Claude.ai Workspaces)',
          'Test, ajustement, évaluation des premiers résultats',
          'Analyse des prérequis : données, SI, gouvernance, ressources',
          'Plan d\'action : prochaines étapes, responsables, jalons, budget estimatif',
        ],
      },
    ],
    livrables: [
      'Cartographie de vos cas d\'usage (matrice priorisée)',
      'Prototype fonctionnel du cas d\'usage prioritaire',
      'Fiche de cas d\'usage (objectif, architecture, données requises)',
      'Plan d\'action 30/60/90 jours personnalisé',
      'Attestation de participation',
    ],
    evaluation: 'Restitution collective du prototype + engagement sur les prochaines étapes',
    accessibilite: 'Format adaptable aux contraintes d\'accessibilité — me contacter.',
    ctaHref: '/contact?sujet=atelier-prototypage',
  },
]

const schools = [
  {
    name: 'CNAM',
    fullName: 'Conservatoire National des Arts et Métiers',
    since: 'Depuis 2021',
    levels: 'L3 → Ingénieur EICNAM',
    modules: 'Méthodologie SI, Data, Programmation, Accompagnement mémoires & soutenances',
  },
  {
    name: 'CESI',
    fullName: 'CESI École d\'Ingénieurs',
    since: 'Depuis 2024',
    levels: 'Master — Ingénieurs DevSecOps',
    modules: 'Intelligence Artificielle, Systèmes d\'information',
  },
  {
    name: 'Ifpass',
    fullName: 'Institut de Formation de la Profession de l\'Assurance',
    since: 'Depuis 2022',
    levels: 'BTS → Master',
    modules: 'IA & assurance, Digitalisation, Conduite de projets',
  },
]

/* ─── Page ─────────────────────────────────────────────── */

export default function FormationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Catalogue formations intra-entreprise</div>
          <div className="cyan-line mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
            6 formations Claude &amp; IA agentique<br />
            <span className="gradient-text">pour les entreprises de tous secteurs</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-8">
            De la demi-journée COMEX au parcours 3 jours pour vos équipes IT — des formations
            toutes construites sur des cas d&apos;usage réels, adaptés à votre secteur.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact?sujet=formation" className="btn-primary text-base px-8 py-4">
              Demander un devis <ArrowRight size={18} />
            </Link>
            <Link href="/contact?sujet=conference" className="btn-outline text-base px-8 py-4">
              <Mic2 size={18} />
              Inviter pour une conférence
            </Link>
          </div>

          {/* Quick nav */}
          <div className="mt-12 flex flex-wrap gap-2">
            {formations.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-cyan-400 border border-slate-700/60 hover:border-cyan-500/40 rounded-full px-3 py-1.5 transition-colors"
              >
                <span className="text-slate-600">{f.code}</span>
                {f.titre.split(' ').slice(0, 4).join(' ')}…
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-16">
          {formations.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={f.id}
                id={f.id}
                className={`card-glass border ${f.border} overflow-hidden scroll-mt-28`}
              >
                {/* Header */}
                <div className={`${f.bg} border-b ${f.border} px-8 py-6`}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-navy-900/60 flex items-center justify-center flex-shrink-0`}>
                        <Icon size={22} className={f.color} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className={`text-xs font-mono ${f.color} opacity-60`}>{f.code}</span>
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${f.badgeColor}`}>{f.badge}</span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-slate-100 leading-tight">
                          {f.titre}
                        </h2>
                        <p className={`text-sm mt-1 ${f.color}`}>{f.soustitre}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-navy-900/60 rounded-lg px-4 py-2 flex-shrink-0">
                      <Clock size={14} className={f.color} />
                      <span className="text-sm font-semibold text-slate-100">{f.duree}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  {/* Info grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                      { label: 'Public cible', value: f.public },
                      { label: 'Niveau', value: f.niveau },
                      { label: 'Modalité', value: f.modalite },
                      { label: 'Effectif', value: f.effectif },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-navy-800/50 rounded-lg p-3">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{label}</div>
                        <div className="text-xs text-slate-300 leading-relaxed">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Objectifs */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Target size={14} className={f.color} />
                        <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Objectifs pédagogiques</h3>
                      </div>
                      <ul className="space-y-2">
                        {f.objectifs.map((obj) => (
                          <li key={obj} className="flex items-start gap-2 text-sm text-slate-400">
                            <CheckCircle2 size={13} className={`${f.color} mt-0.5 flex-shrink-0`} />
                            {obj}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Programme */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen size={14} className={f.color} />
                        <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">Programme</h3>
                      </div>
                      <div className="space-y-4">
                        {f.programme.map((bloc) => (
                          <div key={bloc.bloc}>
                            <div className={`text-xs font-semibold ${f.color} mb-2`}>{bloc.bloc}</div>
                            <ul className="space-y-1.5">
                              {bloc.items.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                                  <ChevronRight size={11} className="text-slate-600 mt-0.5 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Livrables + meta */}
                  <div className="mt-8 pt-8 border-t border-slate-800/60 grid sm:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <FileText size={13} className={f.color} />
                        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Livrables inclus</h3>
                      </div>
                      <ul className="space-y-1.5">
                        {f.livrables.map((l) => (
                          <li key={l} className="flex items-start gap-2 text-xs text-slate-400">
                            <Star size={10} className={`${f.color} mt-0.5 flex-shrink-0`} />
                            {l}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Évaluation</div>
                        <div className="text-xs text-slate-400">{f.evaluation}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Accessibilité</div>
                        <div className="text-xs text-slate-400">{f.accessibilite}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Prochaine session inter</div>
                        <div className="text-xs text-slate-400 italic">[À COMPLÉTER — formation disponible en intra dès maintenant]</div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href={f.ctaHref} className="btn-primary">
                      Demander un devis <ArrowRight size={16} />
                    </Link>
                    <Link href="/contact?sujet=programme" className="btn-outline text-sm">
                      Recevoir le programme complet
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Enseignement supérieur */}
      <section className="py-20 bg-navy-800/40 border-y border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <GraduationCap size={18} className="text-emerald-400" />
                </div>
                <div>
                  <div className="tag mb-0.5">Enseignement</div>
                  <h2 className="text-3xl font-bold text-slate-100">Enseignement supérieur</h2>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8">
                J&apos;enseigne au <strong className="text-slate-200">CNAM</strong>,{' '}
                <strong className="text-slate-200">CESI</strong> et{' '}
                <strong className="text-slate-200">Ifpass</strong> depuis 2021.
                Modules IA, data, systèmes d&apos;information et accompagnement mémoires
                pour des niveaux L3 à ingénieur.
              </p>

              <div className="space-y-4 mb-8">
                {schools.map(({ name, fullName, since, levels, modules }) => (
                  <div key={name} className="card-glass p-5 border-emerald-500/20">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-emerald-400">{name}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-100 text-sm">{fullName}</div>
                        <div className="text-xs text-emerald-400 mt-0.5">{since} — {levels}</div>
                        <div className="text-xs text-slate-500 mt-1.5 leading-relaxed">{modules}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact?sujet=conference" className="btn-primary">
                  <Mic2 size={16} />
                  Inviter pour une conférence
                </Link>
                <Link href="/contact?sujet=programme-cours" className="btn-outline">
                  Demander un programme de cours
                </Link>
              </div>
            </div>

            {/* Pourquoi choisir ces formations */}
            <div className="card-glass p-8 border-slate-700/50">
              <h3 className="text-lg font-bold text-slate-100 mb-6">
                Pourquoi ces formations sont différentes
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: Target,
                    color: 'text-cyan-400',
                    title: 'Cas d\'usage sectoriels',
                    body: 'Chaque exercice, chaque exemple est adapté à votre secteur. Mon expérience en assurance, banque, industrie et secteur public nourrit des cas concrets.',
                  },
                  {
                    icon: Brain,
                    color: 'text-purple-400',
                    title: '23 ans côté client',
                    body: 'Je connais vos contraintes SI, réglementaires et organisationnelles de l\'intérieur. Je ne vends pas de rêve.',
                  },
                  {
                    icon: Bot,
                    color: 'text-blue-400',
                    title: 'Spécialiste Claude Anthropic',
                    body: 'Formation sur l\'écosystème complet : Claude.ai, API, Claude Code, MCP, SDK agents. Pas de formation généraliste.',
                  },
                  {
                    icon: Shield,
                    color: 'text-red-400',
                    title: 'Gouvernance & conformité incluses',
                    body: 'Chaque formation intègre les dimensions AI Act, RGPD et politique d\'usage. Pas une option.',
                  },
                ].map(({ icon: Icon, color, title, body }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} className={color} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200 text-sm mb-1">{title}</div>
                      <div className="text-xs text-slate-500 leading-relaxed">{body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Références */}
      <TrustedBy
        title="Ils m'ont fait confiance"
        showLink={true}
        variant="dark"
      />

      {/* CTA final */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="tag mb-4">Passons à l&apos;action</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-5">
            Une formation sur mesure<br />
            <span className="gradient-text">pour votre organisation</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Chaque programme est adapté à votre public, votre secteur et vos contraintes.
            Réponse sous 48h. Devis gratuit et sans engagement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact?sujet=formation" className="btn-primary text-base px-8 py-4">
              Demander un devis <ArrowRight size={18} />
            </Link>
            <Link href="/ressources" className="btn-outline text-base px-8 py-4">
              Télécharger les ressources gratuites
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
