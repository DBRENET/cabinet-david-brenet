import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, Bot, Network, Cpu, Shield, Zap,
  Database, Users, TrendingUp, AlertTriangle, ChevronRight,
  Lightbulb, Lock, GitBranch,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'IA Agentique — Claude, Gemini, Copilot : Guide Complet | David Brenet',
  description:
    'Tout comprendre sur l\'IA agentique et les grands modèles (Claude, Gemini, Copilot). Définitions, architecture, cas d\'usage, MCP, SDK agents, gouvernance AI Act — le guide complet par David Brenet, consultant IA agentique à Niort.',
  keywords: [
    'IA agentique entreprise',
    'Claude Anthropic entreprise',
    'Google Gemini entreprise',
    'Microsoft Copilot',
    'agents IA entreprise',
    'Model Context Protocol MCP',
    'Claude Code DSI',
    'SDK agents Claude',
    'gouvernance IA agentique',
    'formation Claude entreprise',
    'Claude vs Gemini vs Copilot',
  ],
  alternates: { canonical: 'https://davidbrenet.com/claude-ia-agentique' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'IA Agentique — Claude, Gemini, Copilot : Guide Complet',
  description: 'Guide de référence sur l\'IA agentique et les grands modèles LLM pour l\'entreprise',
  author: {
    '@type': 'Person',
    name: 'David Brenet',
    url: 'https://davidbrenet.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'David Brenet — IA Agentique & Agents Claude / Gemini / Copilot',
    url: 'https://davidbrenet.com',
  },
  datePublished: '2026-01-01',
  dateModified: '2026-10-01',
}

export default function ClaudeIaAgentiquePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute left-0 top-1/3 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Guide de référence</div>
          <div className="cyan-line mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
            IA agentique &amp; agents IA<br />
            <span className="gradient-text">Claude · Gemini · Copilot</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-8">
            Comprendre l&apos;IA agentique, comparer les grands écosystèmes (Claude, Gemini, Copilot)
            et passer à la production. Le guide complet — définitions, architecture, MCP, SDK agents,
            gouvernance AI Act — par un praticien.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#ecosysteme-claude" className="btn-primary">
              L&apos;écosystème Claude <ArrowRight size={16} />
            </Link>
            <Link href="#comparatif-llm" className="btn-outline">
              Claude vs Gemini vs Copilot
            </Link>
          </div>
        </div>
      </section>

      {/* Table des matières */}
      <section className="py-8 bg-navy-800/40 border-y border-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            {[
              ['#definition', '1. Qu\'est-ce que l\'IA agentique ?'],
              ['#vs-chatbot', '2. Agentique vs chatbot'],
              ['#ecosysteme-claude', '3. L\'écosystème Claude'],
              ['#mcp', '4. Le MCP expliqué'],
              ['#comparatif-llm', '5. Claude vs Gemini vs Copilot'],
              ['#cas-usage', '6. Cas d\'usage concrets'],
              ['#gouvernance', '7. Gouvernance & AI Act'],
              ['#demarrer', '8. Par où commencer ?'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="text-slate-400 hover:text-cyan-400 transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 — Définition */}
      <section id="definition" className="py-20 bg-navy-900 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Section 1</div>
          <h2 className="text-3xl font-bold text-slate-100 mb-6">
            Qu&apos;est-ce que l&apos;IA agentique ?
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            L&apos;IA agentique désigne des systèmes d&apos;intelligence artificielle capables d&apos;agir de
            manière autonome pour atteindre un objectif défini. Contrairement à un modèle de
            langage classique qui répond à une question, un agent IA <strong className="text-slate-200">planifie,
            prend des décisions, utilise des outils et exécute des actions</strong> dans le monde réel.
          </p>
          <p className="text-slate-400 leading-relaxed mb-10">
            En assurance, cela signifie un agent qui ne se contente pas de rédiger un email —
            il consulte le contrat, vérifie les garanties, calcule l&apos;indemnisation, génère
            le projet de lettre et le soumet à validation. Tout ça en quelques secondes.
          </p>

          {/* Définition formelle */}
          <div className="card-glass border-cyan-500/20 p-8 mb-10">
            <h3 className="text-lg font-bold text-slate-100 mb-4">Les 4 capacités d&apos;un agent IA</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: Lightbulb, color: 'text-cyan-400', bg: 'bg-cyan-500/10', title: 'Percevoir', body: 'L\'agent reçoit des informations : texte, données, résultats d\'API, documents. Il comprend le contexte.' },
                { icon: GitBranch, color: 'text-purple-400', bg: 'bg-purple-500/10', title: 'Raisonner', body: 'Il planifie les étapes nécessaires, décompose les objectifs complexes, évalue les options.' },
                { icon: Zap, color: 'text-amber-400', bg: 'bg-amber-500/10', title: 'Agir', body: 'Il utilise des outils (APIs, bases de données, applications) pour exécuter des actions concrètes.' },
                { icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-500/10', title: 'Apprendre', body: 'Il observe les résultats de ses actions, s\'adapte, et s\'améliore sur la durée.' },
              ].map(({ icon: Icon, color, bg, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-200 mb-1">{title}</div>
                    <div className="text-sm text-slate-400 leading-relaxed">{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Agentique vs chatbot */}
      <section id="vs-chatbot" className="py-20 bg-navy-800/40 border-y border-slate-800/50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Section 2</div>
          <h2 className="text-3xl font-bold text-slate-100 mb-6">
            IA agentique vs chatbot vs automatisation
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Ces trois technologies sont souvent confondues. Elles ne répondent pas aux mêmes
            besoins et ne créent pas la même valeur.
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left py-3 pr-6 text-slate-400 font-semibold">Critère</th>
                  <th className="text-left py-3 pr-6 text-slate-500 font-semibold">Chatbot classique</th>
                  <th className="text-left py-3 pr-6 text-slate-500 font-semibold">Automatisation RPA</th>
                  <th className="text-left py-3 text-cyan-400 font-semibold">Agent IA Claude</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {[
                  ['Compréhension du langage', 'Limitée (règles)', 'Aucune', 'Excellente'],
                  ['Gestion de l\'incertitude', 'Non', 'Non', 'Oui'],
                  ['Utilisation d\'outils', 'Non', 'Oui (scripts fixes)', 'Oui (dynamique)'],
                  ['Adaptation au contexte', 'Faible', 'Nulle', 'Élevée'],
                  ['Cas d\'usage non prévus', 'Échec', 'Échec', 'Gère ou escalade'],
                  ['Valeur créée', 'Faible', 'Moyenne', 'Élevée'],
                ].map(([crit, chat, rpa, agent]) => (
                  <tr key={crit}>
                    <td className="py-3 pr-6 text-slate-300 font-medium">{crit}</td>
                    <td className="py-3 pr-6 text-slate-500">{chat}</td>
                    <td className="py-3 pr-6 text-slate-500">{rpa}</td>
                    <td className="py-3 text-cyan-400 font-medium">{agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card-glass border-amber-500/20 p-6">
            <div className="flex gap-3">
              <AlertTriangle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-slate-200">Le piège fréquent :</strong> beaucoup d&apos;organisations
                investissent dans des chatbots et croient avoir fait de l&apos;IA agentique. Ce n&apos;est
                pas la même chose. Un chatbot répond — un agent agit. La différence de valeur
                créée est considérable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Écosystème Claude */}
      <section id="ecosysteme-claude" className="py-20 bg-navy-900 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Section 3</div>
          <h2 className="text-3xl font-bold text-slate-100 mb-6">
            L&apos;écosystème Claude Anthropic
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10">
            Claude n&apos;est pas qu&apos;un modèle de langage. C&apos;est un écosystème complet pour
            construire, déployer et gouverner des agents IA en entreprise. Voici les
            5 composants que j&apos;utilise et recommande.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: Bot,
                color: 'text-cyan-400',
                bg: 'bg-cyan-500/10',
                border: 'border-cyan-500/20',
                name: 'Claude.ai Enterprise',
                tag: 'Interface & Projects',
                desc: 'L\'interface de travail quotidien pour les équipes. Les "Projects" permettent d\'organiser des contextes thématiques persistants avec des documents et des instructions dédiées. Chaque équipe peut avoir son propre projet Claude avec ses règles.',
                usages: ['Rédaction et analyse documentaire', 'Projets d\'équipe avec contexte partagé', 'Confidentialité des données garantie par contrat'],
              },
              {
                icon: Cpu,
                color: 'text-blue-400',
                bg: 'bg-blue-500/10',
                border: 'border-blue-500/20',
                name: 'Claude Code',
                tag: 'Développement assisté',
                desc: 'L\'assistant de développement IA pour les équipes IT. Installé en CLI dans l\'environnement de développement, il comprend les codebases, génère des tests, documente le legacy et automatise les tâches répétitives des développeurs.',
                usages: ['Revue de code automatisée', 'Génération de tests unitaires', 'Documentation de code legacy', 'Refactoring assisté'],
              },
              {
                icon: Network,
                color: 'text-purple-400',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/20',
                name: 'Model Context Protocol (MCP)',
                tag: 'Connectivité SI',
                desc: 'Le protocole qui permet à Claude de se connecter à votre SI : GED, CRM, base sinistres, APIs internes. Chaque connexion est un serveur MCP que vous contrôlez entièrement. C\'est la pièce qui transforme Claude en agent opérationnel dans votre environnement.',
                usages: ['Connexion aux APIs internes', 'Accès sécurisé aux données métier', 'Intégration GED / CRM / SI sinistres'],
              },
              {
                icon: GitBranch,
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10',
                border: 'border-emerald-500/20',
                name: 'SDK Agents Anthropic',
                tag: 'Développement d\'agents',
                desc: 'Le kit de développement officiel pour créer des agents Claude en Python ou TypeScript. Gère la boucle agentique, les appels d\'outils, la mémoire, l\'orchestration multi-agents. Bien plus sûr et maintenable que de construire son propre framework.',
                usages: ['Création d\'agents métier', 'Orchestration multi-agents', 'Gestion de la mémoire agentique'],
              },
              {
                icon: Shield,
                color: 'text-red-400',
                bg: 'bg-red-500/10',
                border: 'border-red-500/20',
                name: 'Constitutional AI & Gouvernance',
                tag: 'Sécurité & conformité',
                desc: 'La sécurité de Claude est architecturale, pas optionnelle. L\'approche Constitutional AI d\'Anthropic aligne le comportement de Claude sur des valeurs éthiques définies. En enterprise, les données ne sont pas utilisées pour l\'entraînement. La politique de sécurité est auditée régulièrement.',
                usages: ['Données non utilisées pour entraînement', 'Contrat de traitement DPA RGPD', 'Audit de sécurité tiers disponible'],
              },
            ].map(({ icon: Icon, color, bg, border, name, tag, desc, usages }) => (
              <div key={name} className={`card-glass border ${border} p-7`}>
                <div className="flex items-start gap-5">
                  <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} className={color} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-slate-100">{name}</h3>
                      <span className={`text-xs font-medium ${color} bg-current/10 px-2.5 py-0.5 rounded-full`}>{tag}</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-sm mb-4">{desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {usages.map((u) => (
                        <span key={u} className="flex items-center gap-1.5 text-xs text-slate-400 bg-navy-800/60 border border-slate-700/40 rounded-full px-3 py-1">
                          <CheckCircle2 size={10} className={color} />
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — MCP */}
      <section id="mcp" className="py-20 bg-navy-800/40 border-y border-slate-800/50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Section 4</div>
          <h2 className="text-3xl font-bold text-slate-100 mb-6">
            Le Model Context Protocol (MCP) expliqué simplement
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Le MCP est souvent perçu comme complexe. En réalité, son principe est simple :
            c&apos;est une manière standardisée de dire à Claude &quot;tu peux utiliser ces outils
            pour faire des choses dans le monde réel&quot;.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              {
                step: '01',
                color: 'text-cyan-400',
                bg: 'bg-cyan-500/10',
                title: 'Vous créez un serveur MCP',
                body: 'Un petit programme qui expose vos données ou vos actions. Ex : "consulter un contrat par son numéro" ou "enregistrer une note dans le dossier sinistre".',
              },
              {
                step: '02',
                color: 'text-purple-400',
                bg: 'bg-purple-500/10',
                title: 'Claude y accède via le protocole',
                body: 'Quand Claude a besoin d\'une information ou doit effectuer une action, il appelle le serveur MCP correspondant — comme un humain utiliserait une API.',
              },
              {
                step: '03',
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10',
                title: 'Vous gardez le contrôle',
                body: 'Votre serveur MCP définit exactement ce que Claude peut faire : lire uniquement, ou écrire dans certaines conditions. Vous gérez les droits, les logs, les limites.',
              },
            ].map(({ step, color, bg, title, body }) => (
              <div key={step} className="card-glass p-6">
                <div className={`text-3xl font-bold ${color} mb-4`}>{step}</div>
                <h3 className="font-semibold text-slate-200 mb-2">{title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="card-glass border-cyan-500/20 p-6">
            <h3 className="font-bold text-slate-100 mb-3">Exemples de serveurs MCP en assurance</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Consultation de contrats par numéro de police',
                'Interrogation de l\'historique sinistres client',
                'Lecture des données de l\'outil CRM',
                'Accès à la GED documentaire',
                'Appel du moteur de tarification',
                'Création d\'une note dans le dossier sinistre',
                'Envoi d\'une alerte compliance',
                'Interrogation du référentiel produits',
              ].map((ex) => (
                <div key={ex} className="flex items-center gap-2 text-sm text-slate-400">
                  <ChevronRight size={13} className="text-cyan-500 flex-shrink-0" />
                  {ex}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Comparatif LLM */}
      <section id="comparatif-llm" className="py-20 bg-navy-900 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Section 5</div>
          <h2 className="text-3xl font-bold text-slate-100 mb-6">
            Claude, Gemini, Copilot — lequel choisir ?
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10">
            Il n&apos;y a pas de réponse universelle : le bon LLM dépend de votre écosystème
            existant, de vos contraintes de sécurité et de vos cas d&apos;usage. Voici ma lecture
            terrain après avoir travaillé avec les trois.
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left py-3 pr-4 text-slate-400 font-semibold">Critère</th>
                  <th className="text-left py-3 pr-4 text-cyan-400 font-semibold">Claude (Anthropic)</th>
                  <th className="text-left py-3 pr-4 text-blue-400 font-semibold">Gemini (Google)</th>
                  <th className="text-left py-3 text-purple-400 font-semibold">Copilot (Microsoft)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {[
                  ['Sécurité des données', 'Constitutional AI, DPA RGPD, pas d\'entraînement sur vos données', 'DPA disponible, Google Cloud confidentiel', 'Intégré M365, conforme Enterprise'],
                  ['Développement d\'agents', 'SDK officiel + MCP — le plus mature', 'Vertex AI Agent Builder — complet', 'Copilot Studio — no-code orienté'],
                  ['Intégration SI existant', 'MCP — connexion à n\'importe quel SI', 'Google Workspace + APIs GCP', 'Power Platform + Microsoft 365'],
                  ['Qualité de raisonnement', 'Excellent (Claude 3.7 Sonnet)', 'Excellent (Gemini 2.0 Ultra)', 'Bon (GPT-4o sous-jacent)'],
                  ['Contexte long', '200k tokens (Claude 3)', '1M tokens (Gemini 1.5 Pro)', '128k tokens (GPT-4o)'],
                  ['Idéal pour', 'Agents métier complexes, sécurité++', 'Org. Google, données multimodales', 'Org. Microsoft, adoption sans dev'],
                ].map(([crit, claude, gemini, copilot]) => (
                  <tr key={crit}>
                    <td className="py-3 pr-4 text-slate-300 font-medium text-xs">{crit}</td>
                    <td className="py-3 pr-4 text-slate-400 text-xs">{claude}</td>
                    <td className="py-3 pr-4 text-slate-400 text-xs">{gemini}</td>
                    <td className="py-3 text-slate-400 text-xs">{copilot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              {
                color: 'text-cyan-400',
                bg: 'bg-cyan-500/10',
                border: 'border-cyan-500/20',
                name: 'Claude',
                signature: 'Ma signature',
                when: 'Quand choisir Claude ?',
                items: [
                  'Agents IA complexes avec logique métier',
                  'Contraintes RGPD / données sensibles fortes',
                  'Équipes de développement présentes',
                  'Connexion à un SI interne via MCP',
                  'Besoin de raisonnement long et nuancé',
                ],
              },
              {
                color: 'text-blue-400',
                bg: 'bg-blue-500/10',
                border: 'border-blue-500/20',
                name: 'Gemini',
                signature: 'Écosystème Google',
                when: 'Quand choisir Gemini ?',
                items: [
                  'Organisation déjà dans Google Workspace',
                  'Données multimodales (images, vidéos, PDF)',
                  'Contexte très long (>200k tokens)',
                  'Infrastructure GCP existante',
                  'Projets avec BigQuery / Looker',
                ],
              },
              {
                color: 'text-purple-400',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/20',
                name: 'Copilot',
                signature: 'Écosystème Microsoft',
                when: 'Quand choisir Copilot ?',
                items: [
                  'Organisation Microsoft 365 / Teams',
                  'Automatisation Office (Word, Excel, Outlook)',
                  'Adoption sans équipe dev dédiée',
                  'Power Automate + SharePoint existants',
                  'Premier pas IA sans infrastructure',
                ],
              },
            ].map(({ color, bg, border, name, signature, when, items }) => (
              <div key={name} className={`card-glass border ${border} p-6`}>
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`text-lg font-bold ${color}`}>{name}</h3>
                  <span className={`text-xs ${color} ${bg} px-2 py-0.5 rounded-full font-medium`}>{signature}</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">{when}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 size={10} className={`${color} mt-0.5 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="card-glass border-cyan-500/20 p-6">
            <div className="flex gap-3">
              <Lightbulb size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-slate-200">Architecture agnostique :</strong> dans les projets
                complexes, je construis souvent des architectures qui peuvent basculer d&apos;un LLM
                à l&apos;autre — avec des abstractions qui isolent le modèle du reste de l&apos;agent.
                Cela protège votre investissement si les tarifs ou les performances évoluent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Cas d'usage */}
      <section id="cas-usage" className="py-20 bg-navy-800/40 border-y border-slate-800/50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Section 6</div>
          <h2 className="text-3xl font-bold text-slate-100 mb-6">
            Cas d&apos;usage agentiques concrets
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10">
            Ces cas d&apos;usage sont réels — certains sont en production, d&apos;autres en phase
            pilote dans des organisations que j&apos;accompagne. Ils sont adaptables à tous secteurs.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Database,
                color: 'text-cyan-400',
                bg: 'bg-cyan-500/10',
                domain: 'Sinistres',
                title: 'Instruction automatique des sinistres simples',
                desc: 'L\'agent consulte le contrat, vérifie les garanties, calcule l\'indemnisation préliminaire et soumet un projet de décision à validation humaine. Résultat constaté : délai d\'instruction de 3 jours à 4 heures.',
                complexity: 'Moyen',
                value: 'Élevée',
              },
              {
                icon: Users,
                color: 'text-blue-400',
                bg: 'bg-blue-500/10',
                domain: 'Souscription',
                title: 'Analyse de risque et scoring automatisé',
                desc: 'L\'agent analyse les documents de souscription, identifie les points de risque spécifiques, propose une classification et des clauses adaptées. Le souscripteur valide ou ajuste.',
                complexity: 'Élevé',
                value: 'Très élevée',
              },
              {
                icon: Shield,
                color: 'text-red-400',
                bg: 'bg-red-500/10',
                domain: 'Conformité',
                title: 'Veille LCB-FT et détection des alertes',
                desc: 'Surveillance continue des dossiers clients au regard des critères LCB-FT. L\'agent détecte les patterns suspects et génère des alertes structurées pour les équipes compliance.',
                complexity: 'Élevé',
                value: 'Élevée',
              },
              {
                icon: Bot,
                color: 'text-purple-400',
                bg: 'bg-purple-500/10',
                domain: 'Service client',
                title: 'Agent de service client augmenté',
                desc: 'Répond aux questions clients complexes en consultant en temps réel le contrat, l\'historique et les garanties. Ce n\'est pas un chatbot FAQ — c\'est un agent qui sait lire votre SI.',
                complexity: 'Moyen',
                value: 'Élevée',
              },
              {
                icon: TrendingUp,
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10',
                domain: 'Réclamations',
                title: 'Traitement des réclamations de premier niveau',
                desc: 'L\'agent analyse la réclamation, récupère le contexte complet, identifie la réponse appropriée selon la procédure interne et prépare le projet de réponse. Le gestionnaire valide.',
                complexity: 'Faible',
                value: 'Moyenne',
              },
              {
                icon: Cpu,
                color: 'text-amber-400',
                bg: 'bg-amber-500/10',
                domain: 'DSI',
                title: 'Développement et maintenance assistés par Claude Code',
                desc: 'Les équipes de développement utilisent Claude Code pour documenter le legacy, générer les tests, effectuer les revues de code. Gain de productivité mesuré : 30 à 50% sur les tâches de maintenance.',
                complexity: 'Faible',
                value: 'Élevée',
              },
            ].map(({ icon: Icon, color, bg, domain, title, desc, complexity, value }) => (
              <div key={title} className="card-glass p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div>
                    <div className={`text-xs font-semibold ${color} mb-0.5`}>{domain}</div>
                    <h3 className="font-bold text-slate-200 text-sm leading-tight">{title}</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{desc}</p>
                <div className="flex gap-4 text-xs">
                  <span className="text-slate-500">Complexité : <span className="text-slate-300">{complexity}</span></span>
                  <span className="text-slate-500">Valeur : <span className={color}>{value}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — Gouvernance */}
      <section id="gouvernance" className="py-20 bg-navy-900 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Section 7</div>
          <h2 className="text-3xl font-bold text-slate-100 mb-6">
            Gouvernance, RGPD et AI Act
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            La conformité n&apos;est pas une option. Voici ce que je mets en place
            systématiquement avant tout déploiement d&apos;agent IA, quel que soit le secteur.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: Lock,
                color: 'text-cyan-400',
                title: 'Politique d\'usage IA',
                items: ['Définir les usages autorisés et interdits', 'Classifier les données selon leur sensibilité', 'Former les équipes (obligation AI Act art. 4)', 'Nommer un responsable IA'],
              },
              {
                icon: Shield,
                color: 'text-red-400',
                title: 'Conformité RGPD + AI Act',
                items: ['Identifier les systèmes IA à risque élevé', 'Documenter chaque agent (fiche système)', 'Garantir la supervision humaine', 'Prévoir le droit à l\'examen humain'],
              },
              {
                icon: Database,
                color: 'text-purple-400',
                title: 'Sécurité des données',
                items: ['Compte Claude Enterprise (pas d\'entraînement)', 'Serveurs MCP avec authentification', 'Logs exhaustifs de tous les appels', 'Revue trimestrielle des accès'],
              },
              {
                icon: TrendingUp,
                color: 'text-emerald-400',
                title: 'Pilotage & amélioration',
                items: ['KPIs de qualité des agents', 'Revue mensuelle des escalades', 'Mise à jour des prompts système', 'Veille réglementaire continue'],
              },
            ].map(({ icon: Icon, color, title, items }) => (
              <div key={title} className="card-glass p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={16} className={color} />
                  <h3 className="font-semibold text-slate-200">{title}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                      <CheckCircle2 size={12} className={`${color} mt-0.5 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Par où commencer */}
      <section id="demarrer" className="py-20 bg-navy-800/40 border-y border-slate-800/50 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Section 8</div>
          <h2 className="text-3xl font-bold text-slate-100 mb-6">
            Par où commencer concrètement ?
          </h2>

          <div className="space-y-4 mb-12">
            {[
              {
                num: '01',
                color: 'text-cyan-400',
                title: 'Évaluez votre maturité IA agentique',
                body: 'Avant de choisir un cas d\'usage, faites le point sur votre SI (qualité des données, APIs disponibles), vos équipes (compétences, formation), votre gouvernance (politique d\'usage, RGPD). Notre grille de maturité gratuite vous guide en 20 minutes.',
                cta: 'Télécharger la grille',
                href: '/ressources',
              },
              {
                num: '02',
                color: 'text-purple-400',
                title: 'Identifiez le bon premier cas d\'usage',
                body: 'Le meilleur premier agent n\'est pas le plus ambitieux — c\'est celui qui combine fort volume + processus bien défini + faible risque + données disponibles. L\'atelier de prototypage aide à l\'identifier en équipe mixte.',
                cta: 'Voir l\'atelier',
                href: '/formation#f6',
              },
              {
                num: '03',
                color: 'text-emerald-400',
                title: 'Posez les fondations de gouvernance',
                body: 'Politique d\'usage, classification des données, formation des équipes (AI Act art. 4), fiche système. Ce travail prend 2 à 4 semaines — il est indispensable pour un déploiement durable.',
                cta: 'Voir la formation AI Act',
                href: '/formation#f5',
              },
              {
                num: '04',
                color: 'text-amber-400',
                title: 'Déployez et mesurez',
                body: 'Un premier agent en production en 6 à 10 semaines. Avec des KPIs définis, une supervision humaine claire et un plan de montée en charge. Puis passez au deuxième.',
                cta: 'Voir l\'offre déploiement',
                href: '/offres',
              },
            ].map(({ num, color, title, body, cta, href }) => (
              <div key={num} className="card-glass p-6 flex gap-5">
                <div className={`text-2xl font-bold ${color} flex-shrink-0 w-10`}>{num}</div>
                <div>
                  <h3 className="font-bold text-slate-200 mb-2">{title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-3">{body}</p>
                  <Link href={href} className={`text-sm font-medium ${color} hover:opacity-80 inline-flex items-center gap-1 transition-opacity`}>
                    {cta} <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA final */}
          <div className="card-glass border-cyan-500/20 p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-100 mb-3">
              Vous voulez aller plus loin ?
            </h3>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              Je propose un diagnostic de maturité IA agentique de 2h pour faire le point
              sur votre situation et identifier les meilleures prochaines étapes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact?sujet=diagnostic" className="btn-primary">
                Demander un diagnostic <ArrowRight size={16} />
              </Link>
              <Link href="/ressources" className="btn-outline">
                Ressources gratuites
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
