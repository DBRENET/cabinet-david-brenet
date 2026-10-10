import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, Tag, Share2, ArrowRight, Linkedin } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Contenu des articles — inspiré des publications LinkedIn de David Brenet
// Pour synchroniser avec votre LinkedIn, remplacez par une intégration CMS/MDX
// ─────────────────────────────────────────────────────────────────────────────
const blogData: Record<string, {
  title: string
  subtitle: string
  date: string
  readTime: string
  category: string
  categoryColor: string
  linkedinUrl?: string
  content: string
}> = {
  'claude-code-dsi-assureur': {
    title: 'Claude Code en DSI d\'assureur : retour d\'expérience après 3 mois',
    subtitle: 'Comment Claude Code transforme le quotidien des équipes IT dans une DSI d\'assureur : revue de code automatisée, génération de tests, documentation de legacy. Ce que ça change vraiment.',
    date: '2026-09-15',
    readTime: '10 min',
    category: 'Claude',
    categoryColor: 'text-cyan-400',
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ia/',
    content: `
## Pourquoi j'ai voulu tester Claude Code en conditions réelles

Depuis que Claude Code est disponible, je l'utilise quotidiennement dans mes propres projets. Mais ce qui m'intéressait vraiment, c'est de savoir comment il se comporte dans une vraie DSI d'assureur — avec des contraintes IT réelles : codebase legacy, règles de sécurité strictes, équipes de 20+ développeurs, et procédures de validation du code avant tout déploiement.

J'ai eu l'occasion de déployer Claude Code pendant 3 mois dans une DSI que j'accompagne. Voici ce que j'ai observé.

## Contexte : une DSI d'assureur en 2026

L'équipe : 22 développeurs répartis entre une équipe backend Java (SI de gestion sinistres), une équipe frontend React, et une équipe data (Python/Spark). Environnement hybride on-premise / cloud.

Contraintes principales :
- Aucune donnée métier ne peut quitter l'environnement interne
- Utilisation de Claude API via le compte Enterprise Anthropic (données non utilisées pour l'entraînement)
- CLAUDE.md configuré avec les règles maison : conventions de code, bibliothèques autorisées, interdictions explicites (pas d'accès réseau depuis les agents, pas de modifications de fichiers de configuration en dehors d'un répertoire dédié)

## Ce qui a vraiment changé : 3 usages à fort impact

### 1. La revue de code automatisée

Avant : les revues de code prenaient en moyenne 45 minutes par PR pour les développeurs seniors. Avec Claude Code, ils lancent un '/review' sur la PR avant de la soumettre. Claude identifie les problèmes potentiels de sécurité, les violations des conventions maison (via le CLAUDE.md), les cas limites non gérés.

Résultat mesuré sur 3 mois : le nombre de commentaires de revue de code par PR a baissé de 62%. Les PR passent plus vite en revue humaine parce qu'elles arrivent déjà "pré-revues". Le temps de revue humaine est passé de 45 à 18 minutes en moyenne.

### 2. La documentation du legacy Java

Problème historique dans cette DSI : des modules Java écrits entre 2008 et 2015, documentés a minima, avec un turnover important. Des développeurs passaient parfois 2 jours à comprendre un module avant de pouvoir le modifier.

Avec Claude Code, ils demandent une explication complète du module avant d'intervenir. Claude lit le code, identifie les patterns architecturaux, documente les flux de données, signale les zones à risque.

Ce qui m'a surpris : Claude est particulièrement bon sur du legacy — il reconnaît des patterns anciens, comprend les dialectes Java de l'époque, et explique le "pourquoi" probable derrière des choix techniques qui semblent obscurs aujourd'hui.

### 3. La génération de tests unitaires

L'équipe avait une couverture de tests autour de 42% sur le backend — en dessous des standards. Générer des tests unitaires est une tâche fastidieuse que les développeurs font à reculons.

Avec Claude Code : '/test' sur un fichier génère les tests unitaires correspondants en quelques secondes. L'équipe a fait passer sa couverture de 42% à 71% en 6 semaines, sans augmenter la charge de travail perçue.

## Ce qui ne marche pas (ou moins bien)

**Les architectures très spécifiques.** Sur les modules les plus anciens avec des patterns maison non documentés, Claude fait parfois des hypothèses incorrectes. Il faut toujours valider humainement les suggestions sur le legacy critique.

**La génération de code from scratch.** Claude Code est excellent pour améliorer, documenter, tester du code existant. Il l'est moins pour concevoir from scratch une architecture complexe — ce n'est pas son rôle principal d'ailleurs.

**La gestion des secrets.** Bien que Claude Code soit configuré pour ne pas traiter les fichiers contenant des credentials, il faut être vigilant. Le CLAUDE.md doit explicitement lister les répertoires et fichiers interdits.

## La question de la gouvernance : ce que nous avons mis en place

Politique d'usage Claude Code adoptée par la DSI avant tout déploiement :
- Compte Enterprise Anthropic — traçabilité des usages
- CLAUDE.md versionné dans le repo principal — les règles s'appliquent à toute l'équipe
- Aucun fichier de configuration de production accessible depuis Claude Code
- Les suggestions de Claude sont toujours revues avant merge — jamais de "merge automatique"
- Formation de 2h pour chaque développeur avant premier usage

## Conclusion : ce que je recommande

Claude Code crée de la valeur réelle et mesurable dans une DSI d'assureur — à condition de l'encadrer correctement. Ce n'est pas un outil qu'on déploie en 5 minutes. C'est un assistant technique qui doit être configuré, gouverné et intégré dans les workflows existants.

Les deux prérequis non négociables : un compte Enterprise (pour la confidentialité des données) et un CLAUDE.md bien rédigé (pour que Claude respecte les règles de votre organisation).

Pour les DSI qui me lisent : commencez par un pilote sur une équipe volontaire de 3 à 5 développeurs, sur des projets non critiques. Mesurez. Puis étendez.
    `,
  },

  'mcp-connecter-agents-si-assurance': {
    title: 'MCP : comment connecter vos agents Claude à votre SI assurantiel',
    subtitle: 'Le Model Context Protocol permet à Claude d\'accéder à vos API, GED et bases de données internes. Architecture, sécurité, cas d\'usage — le guide pratique pour les architectes SI.',
    date: '2026-08-28',
    readTime: '14 min',
    category: 'IA Agentique',
    categoryColor: 'text-purple-400',
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ia/',
    content: `
## Le problème que MCP résout

Vous avez déployé Claude dans votre organisation. Vos équipes l'utilisent pour rédiger, résumer, analyser. Mais Claude ne sait rien de votre SI. Il ne peut pas consulter votre GED de sinistres, interroger votre base contrats, ni appeler l'API de votre outil de gestion. Il travaille en aveugle.

C'est exactement le problème que résout le Model Context Protocol (MCP).

## Qu'est-ce que MCP ?

MCP (Model Context Protocol) est un protocole ouvert créé par Anthropic qui définit comment un modèle de langage peut interagir avec des outils et des sources de données externes de manière standardisée et sécurisée.

Concrètement : MCP permet à Claude de "brancher" des outils sur votre SI — comme on branche des plugins sur un navigateur web. Chaque outil est exposé via un serveur MCP, que Claude peut appeler de manière contrôlée.

## L'architecture MCP : 3 composants

**1. Le client MCP** — C'est Claude (ou votre application Claude). Il envoie des requêtes aux serveurs MCP et traite les réponses.

**2. Le serveur MCP** — C'est le code que vous écrivez pour exposer vos outils. Un serveur MCP peut exposer des ressources (données accessibles en lecture), des outils (actions pouvant être exécutées) et des prompts (templates de messages prédéfinis).

**3. Le transport** — La couche de communication entre client et serveur (stdio pour du local, HTTP/SSE pour du distant).

## Cas d'usage concrets en assurance

### Cas 1 — Agent de consultation de contrats

Un agent Claude avec accès à l'API GED de votre système de gestion contrats. Un conseiller peut demander : "Récupère le contrat de M. Dupont et résume les garanties incendie applicables."

Serveur MCP à créer : un outil 'get_contract(contract_id)' qui appelle votre API interne et retourne les données du contrat formatées.

Complexité : faible. Deux semaines de développement pour un développeur Python senior.

### Cas 2 — Agent d'instruction de sinistres simples

Un agent qui instruite automatiquement les sinistres "simples" (dégâts des eaux < 5 000€, sans litige apparent). Il consulte le contrat, vérifie les garanties, calcule l'indemnisation préliminaire, génère le projet de lettre de décision.

Serveurs MCP nécessaires :
- 'get_contract(id)' — lecture contrat
- 'get_sinistre(id)' — lecture dossier sinistre
- 'calculate_indemnisation(params)' — moteur de calcul
- 'create_draft_letter(sinistre_id, content)' — création draft (écriture)

Complexité : moyenne. 4 à 6 semaines de développement. Supervision humaine obligatoire sur la décision finale.

### Cas 3 — Agent de veille réglementaire

Un agent qui surveille les évolutions réglementaires (ACPR, EIOPA, CNIL) et alerte les équipes compliance sur les dispositions applicables à votre organisation.

Serveurs MCP :
- 'search_acpr_circulars(query, date_from)' — scraping/API ACPR
- 'get_company_profile()' — profil réglementaire de l'entreprise
- 'create_alert(team, content, urgency)' — création d'alerte interne

## Sécurité : les 5 principes que j'applique

**1. Principe du moindre privilège.** Chaque serveur MCP n'expose que les données et les actions strictement nécessaires pour son cas d'usage. Un agent de lecture de contrats n'a pas besoin d'un outil de modification.

**2. Authentification à deux niveaux.** L'accès au serveur MCP est protégé (API key, JWT). Les accès aux données sous-jacentes utilisent les droits de l'utilisateur — pas un super-compte.

**3. Journalisation exhaustive.** Chaque appel MCP est loggé : qui, quoi, quand, résultat. Indispensable pour la conformité et le debugging.

**4. Validation des paramètres.** Le serveur MCP valide strictement les paramètres reçus de Claude. Une injection de paramètre malformé ne doit pas pouvoir atteindre votre SI.

**5. Rate limiting.** Limitez le nombre d'appels par session et par utilisateur. Un agent qui "s'emballe" peut générer une charge inattended sur vos API internes.

## Guide de démarrage : votre premier serveur MCP

Le SDK officiel Anthropic propose des packages Python et TypeScript pour créer des serveurs MCP. Voici la structure minimale en Python :

L'implémentation d'un outil simple prend 10 à 30 lignes de code. La vraie complexité est dans la gestion des erreurs, la sécurité et l'intégration avec vos API existantes.

## Ce que MCP change pour l'architecture des agents

Avant MCP, chaque déploiement d'agent IA était un développement sur mesure : l'intégration SI était codée directement dans l'agent, les outils n'étaient pas réutilisables, et chaque nouvel agent nécessitait de recoder les mêmes intégrations.

Avec MCP, vous construisez une bibliothèque de serveurs MCP réutilisables. Votre GED exposée en MCP peut être utilisée par 5 agents différents. Vos APIs core business deviennent des ressources partagées.

C'est le passage d'un modèle "projet IA" à un modèle "plateforme IA" — et c'est là que se trouve le vrai retour sur investissement.

## Conclusion

MCP est la pièce manquante pour passer des agents IA en sandbox aux agents IA en production dans un SI réel. Il impose une discipline d'architecture — ce qui est une bonne chose — et crée les conditions d'une industrialisation à l'échelle.

Pour les architectes SI que je conseille : commencez par un inventaire des API internes que vous souhaitez exposer à Claude. Priorisez par valeur métier et par maturité de l'API. Et surtout : impliquez votre RSSI dès le début.
    `,
  },

  'agents-ia-gestion-sinistres': {
    title: 'Agents IA en gestion de sinistres : architecture et premiers résultats',
    subtitle: 'Anatomie d\'un agent Claude pour l\'instruction automatique des sinistres courants : orchestration, outils, supervision humaine et conformité RGPD. Retour sur un prototype en production.',
    date: '2026-08-10',
    readTime: '16 min',
    category: 'Assurance',
    categoryColor: 'text-emerald-400',
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ia/',
    content: `
## La gestion de sinistres : un terrain idéal pour les agents IA

La gestion de sinistres concentre trois caractéristiques qui en font un terrain privilégié pour les agents IA :

**Volume répétable** : une part significative des sinistres (entre 30% et 60% selon les branches) sont "simples" — même processus, critères connus, décision prévisible.

**Données structurées disponibles** : le contrat, l'historique client, le barème de garanties, les plafonds — tout existe dans le SI.

**Fort enjeu de délai** : le client en attente d'une décision sinistre est un client sensible. Réduire le délai d'instruction de 72h à quelques heures crée une valeur réelle et mesurable.

## Le prototype que nous avons déployé

Contexte : un assureur IARD, branche dégâts des eaux. Volume : environ 180 sinistres dégâts des eaux par mois. Critères de "sinistres simples" définis avec les experts métier : dommage inférieur à 8 000€, pas de mise en cause d'un tiers, déclaration < 5 jours après le sinistre, pas de sinistre antérieur sur le même bien dans les 18 mois.

Environ 55% du volume correspondait à ces critères — soit ~100 sinistres/mois automatisables.

## Architecture de l'agent

L'agent est construit avec le SDK Python Anthropic. Il suit un pattern ReAct (Reasoning + Acting) avec 5 outils MCP :

**Outil 1 — get_contract(policy_id)**
Récupère les données du contrat : garanties souscrites, plafonds, franchises, exclusions. Connecté à l'API de gestion des contrats.

**Outil 2 — get_sinistre(claim_id)**
Récupère les données du dossier sinistre : date, nature, description, pièces jointes disponibles. Connecté au SI sinistres.

**Outil 3 — get_client_history(client_id)**
Vérifie l'historique sinistres du client sur les 36 derniers mois. Anti-fraude de premier niveau.

**Outil 4 — calculate_indemnisation(params)**
Moteur de calcul réglementaire : applique les franchises, les plafonds, les règles de proportionnalité. C'est une règle métier pure — pas de l'IA.

**Outil 5 — submit_for_review(claim_id, recommendation, reasoning)**
Soumet la recommandation de l'agent à la file de validation humaine. L'agent ne décide jamais seul.

## Le prompt système : la clé de tout

Le comportement de l'agent est entièrement défini par son prompt système. Les 3 éléments critiques que nous avons appris à l'usage :

**La définition explicite du périmètre** : "Tu instruits des sinistres dégâts des eaux simples. Si le dossier présente l'un des critères suivants, tu dois immédiatement escalader à un gestionnaire humain sans formuler de recommandation : [liste des critères d'escalade]."

**L'obligation de transparence** : "Ta recommandation doit toujours inclure le raisonnement complet, la référence exacte aux garanties du contrat, et le calcul détaillé de l'indemnisation. Aucune recommandation sans justification."

**La gestion de l'incertitude** : "Si tu n'as pas toutes les informations nécessaires, tu dois demander les informations manquantes ou escalader. Tu ne dois jamais formuler une recommandation sur la base d'hypothèses."

## Résultats après 4 mois en production

Sur 382 sinistres "simples" traités par l'agent :

**Taux d'accord gestionnaire** : 91% des recommandations de l'agent ont été validées sans modification par le gestionnaire. 6% ont nécessité un ajustement mineur. 3% ont été refusées (souvent parce que le gestionnaire avait une information contextuelle que l'agent n'avait pas).

**Délai d'instruction** : passé de 3,2 jours en moyenne à 4,7 heures pour les dossiers traités par l'agent.

**Qualité du dossier** : les gestionnaires ont unanimement noté que les dossiers instruits par l'agent arrivent mieux documentés que les dossiers instruits manuellement — le raisonnement de l'agent est explicite et traçable.

**Escalades** : 23% des dossiers initialement identifiés comme "simples" ont été escaladés par l'agent après consultation du dossier complet. Ce taux élevé d'escalade est volontaire — nous préférons qu'il escalade trop que pas assez.

## Ce que la conformité RGPD impose

Travailler sur des dossiers sinistres, c'est travailler avec des données personnelles sensibles. Les points de conformité non négociables :

**Traçabilité** : chaque interaction de l'agent avec le SI est loggée avec horodatage, identifiant dossier, action effectuée et résultat. Ces logs sont conservés 5 ans.

**Droit d'information** : les assurés dont le sinistre est traité par un système IA automatisé en sont informés dans l'accusé de réception.

**Droit à l'examen humain** : conformément à l'article 22 du RGPD, l'assuré peut demander un examen humain de sa décision. Le processus de demande est clairement documenté.

**Localisation des données** : l'agent utilise l'API Claude Enterprise. Les données ne quittent jamais l'environnement contractuel défini avec Anthropic.

## Ce que j'ai appris

**La qualité du prompt système est plus importante que l'architecture technique.** Nous avons passé 3 semaines à affiner le prompt système avec les experts métier — c'est là que s'est jouée la qualité du résultat.

**La supervision humaine n'est pas un obstacle, c'est une feature.** Le gestionnaire qui valide les recommandations de l'agent gagne du temps ET monte en compétence — il apprend à identifier rapidement ce qui est juste ou faux dans le raisonnement de l'agent.

**L'escalade doit être facile et valorisée.** Au début, les gestionnaires avaient tendance à valider des recommandations douteuses pour "ne pas bloquer le système". Il a fallu travailler sur la culture : escalader est normal, attendu, et valorisé.

## Prochaines étapes

En phase 2, nous allons étendre l'agent à la branche bris de glace (volume encore plus élevé, processus plus simple) et expérimenter avec un agent de détection précoce des dossiers à risque de contentieux.

La phase 3 (horizon 18 mois) : agent de gestion des recours entre assureurs — un processus aujourd'hui très manuel, lourd en échanges de courriers, et à fort potentiel d'automatisation.

## Conclusion

Les agents IA en gestion de sinistres ne sont plus de la science-fiction. Ils sont en production dans des organisations que j'accompagne, avec des résultats mesurables. Mais leur succès repose sur trois piliers que je répète à chaque client : une définition rigoureuse du périmètre, une supervision humaine bien pensée, et une gouvernance RGPD irréprochable.

L'agent IA ne remplace pas le gestionnaire — il l'augmente. Et c'est exactement la promesse qu'il tient.
    `,
  },

  'ia-act-guide-conformite-entreprise': {
    title: 'IA Act : guide pratique de mise en conformité pour les entreprises françaises',
    subtitle: 'Le règlement européen sur l\'IA entre en vigueur par étapes. Ce guide vous aide à comprendre vos obligations et à structurer votre mise en conformité.',
    date: '2026-01-15',
    readTime: '12 min',
    category: 'Gouvernance IA',
    categoryColor: 'text-purple-400',
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ia/',
    content: `
## Ce que j'observe sur le terrain

En accompagnant des entreprises françaises sur leur stratégie IA, je constate que l'IA Act est encore trop souvent perçu comme une contrainte lointaine. Pourtant, les premières obligations sont déjà en vigueur depuis février 2025. Voici ce que vous devez absolument savoir.

## Qu'est-ce que l'IA Act ?

Le règlement européen sur l'Intelligence Artificielle (IA Act) est le premier cadre réglementaire complet au monde encadrant les systèmes d'IA. Adopté en 2024, il impose des obligations différenciées selon le niveau de risque des systèmes IA déployés.

Ce n'est pas qu'un texte de droit. C'est un changement de paradigme : l'IA ne peut plus être déployée sans évaluation de ses risques et sans gouvernance documentée.

## Les quatre niveaux de risque

**1. Risque inacceptable** — Ces systèmes sont purement et simplement interdits : manipulation comportementale, notation sociale par les autorités publiques, reconnaissance faciale en temps réel dans les espaces publics (avec exceptions strictes).

**2. Risque élevé** — Systèmes utilisés dans des domaines critiques (recrutement, crédit scoring, infrastructures critiques, justice...). Soumis à des exigences strictes : qualité des données d'entraînement, documentation technique, transparence, supervision humaine obligatoire.

**3. Risque limité** — Obligations de transparence. L'utilisateur doit savoir qu'il interagit avec une IA (chatbots, deepfakes).

**4. Risque minimal** — Pas d'obligations spécifiques au-delà du droit commun. La grande majorité des cas d'usage professionnels relèvent de cette catégorie.

## Calendrier de mise en application

- **Février 2025** : Interdictions des IA à risque inacceptable — déjà en vigueur
- **Août 2025** : Obligations pour les modèles d'IA généraux (GPAI) comme GPT-4, Gemini, Claude
- **Août 2026** : Obligations pour les systèmes IA à haut risque (recrutement, crédit, santé...)

## Comment préparer votre entreprise concrètement ?

### Étape 1 : Inventorier vos systèmes IA

Commencez par une cartographie exhaustive de tous les systèmes IA utilisés dans votre organisation : achetés, développés en interne, fournis par des tiers. Incluez les outils SaaS qui embarquent des fonctions IA — ils sont souvent oubliés.

### Étape 2 : Classifier les risques

Pour chaque système identifié, évaluez sa classification selon l'IA Act. Cette étape nécessite une collaboration entre les équipes juridiques, IT et métiers. Un tableau de bord partagé est indispensable.

### Étape 3 : Évaluer les écarts de conformité

Comparez vos pratiques actuelles aux exigences de l'IA Act pour chaque système à haut risque. Documentez les écarts constatés et leur criticité.

### Étape 4 : Construire le plan de mise en conformité

Priorisez les actions correctives selon l'urgence réglementaire et le niveau de risque. Budgétisez les investissements nécessaires — ne sous-estimez pas le volet formation des équipes.

### Étape 5 : Mettre en place la gouvernance IA

Désignez un responsable IA (AI Officer), constituez un comité de gouvernance, rédigez votre charte IA interne. Ces fondations sont indispensables pour une conformité durable.

## L'erreur que je vois le plus souvent

Traiter l'IA Act comme un projet juridique et non comme un projet d'entreprise. La conformité IA est avant tout une question de culture, de processus et d'organisation — pas seulement de documentation.

## Conclusion

L'IA Act n'est pas une contrainte supplémentaire mais une opportunité de structurer votre approche IA de manière responsable et durable. Les organisations qui anticipent leur conformité bénéficieront d'un avantage concurrentiel réel face à celles qui découvriront les exigences en retard.
    `,
  },

  'agents-ia-metiers-conception-deploiement': {
    title: 'Agents IA métiers : de la conception au déploiement en production',
    subtitle: 'Comment concevoir des agents IA robustes pour les processus métiers ? Architecture, orchestration, sécurité et pilotage : retour d\'expérience.',
    date: '2026-01-08',
    readTime: '15 min',
    category: 'Agents IA',
    categoryColor: 'text-cyan-400',
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ia/',
    content: `
## Pourquoi les agents IA changent tout

Depuis 18 mois, j'accompagne des entreprises dans le déploiement d'agents IA pour leurs processus métiers. Et je peux vous dire que la différence entre un PoC qui impressionne et un agent en production qui crée de la valeur est considérable.

Voici ce que j'ai appris sur le terrain.

## Qu'est-ce qu'un agent IA métier ?

Un agent IA métier est un système autonome capable de percevoir son environnement, de raisonner, de planifier et d'agir pour atteindre un objectif défini — avec ou sans supervision humaine selon le niveau d'autonomie choisi.

À la différence d'un simple chatbot ou d'une automatisation RPA classique, un agent IA peut :
- Décomposer un objectif complexe en sous-tâches
- Utiliser des outils (API, bases de données, applications métiers)
- S'adapter au contexte et gérer l'incertitude
- Apprendre de ses interactions (selon l'architecture)

## Les trois architectures clés

**Architecture ReAct (Reasoning + Acting)**
L'agent alterne entre réflexion et action. Il planifie, exécute une action, observe le résultat, raisonne à nouveau. Simple et robuste pour des tâches structurées.

**Architecture multi-agents**
Plusieurs agents spécialisés collaborent : un agent orchestrateur coordonne des agents spécialistes (recherche, calcul, rédaction...). Plus puissant mais plus complexe à gouverner.

**Architecture RAG-Agent**
L'agent s'appuie sur une base de connaissances interne (RAG) pour ancrer ses réponses dans la réalité documentaire de l'entreprise. Essentiel pour les cas d'usage métiers sensibles.

## Les 5 erreurs que je vois le plus souvent

**Erreur 1 : Vouloir tout automatiser d'emblée.** Commencez par des tâches à haut volume, faible complexité et faible risque. Montez en complexité progressivement.

**Erreur 2 : Négliger la supervision humaine.** Un agent en production doit avoir des points de validation humaine clairement définis. L'autonomie totale est rarement souhaitable en première itération.

**Erreur 3 : Sous-estimer la gestion des erreurs.** Que se passe-t-il quand l'agent échoue, est incertain ou sort de son périmètre ? Ces scénarios doivent être conçus dès le départ.

**Erreur 4 : Ignorer la sécurité des prompts.** Les injections de prompt sont réelles et peuvent détourner le comportement de l'agent. Testez vos agents comme vous testeriez une API exposée.

**Erreur 5 : Pas de métriques de pilotage.** Sans KPIs définis (taux de succès, temps d'exécution, taux d'escalade humaine, satisfaction utilisateur), il est impossible de piloter et d'améliorer.

## Ma méthode de déploiement en 4 phases

### Phase 1 — Cadrage (2 semaines)
Identification du processus cible, cartographie des outils nécessaires, définition du niveau d'autonomie, critères de succès.

### Phase 2 — Prototype (3-4 semaines)
Développement du PoC, tests avec données réelles, ajustement des prompts système, validation utilisateurs clés.

### Phase 3 — Pilote production (4-6 semaines)
Déploiement restreint (10-20 utilisateurs), collecte des métriques, correction des comportements inattendus, formation des équipes.

### Phase 4 — Généralisation
Passage à l'échelle, documentation, intégration dans les processus RH et qualité, gouvernance continue.

## Conclusion

Les agents IA métiers représentent la prochaine vague de valeur de l'IA en entreprise. Mais comme toute technologie puissante, ils exigent rigueur, méthode et une bonne dose d'humilité face à la complexité des processus réels.
    `,
  },

  'rag-securise-entreprise-donnees-internes': {
    title: 'RAG sécurisé : exploiter vos données internes avec les LLM sans risque',
    subtitle: 'La Retrieval Augmented Generation permet d\'ancrer les réponses de l\'IA dans votre base de connaissances. Comment l\'implémenter sans fuites de données ?',
    date: '2025-12-20',
    readTime: '10 min',
    category: 'Architecture IA',
    categoryColor: 'text-blue-400',
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ia/',
    content: `
## Le problème que tout le monde a

Vous avez une base documentaire riche : procédures internes, contrats, notes techniques, rapports... Et vous voulez que votre IA puisse répondre à partir de ces documents, sans avoir à les envoyer à OpenAI ou à un autre fournisseur cloud.

C'est exactement à ça que sert le RAG (Retrieval Augmented Generation).

## RAG : le principe en 3 étapes

**1. Ingestion** : vos documents sont découpés en chunks, transformés en embeddings (vecteurs numériques) et stockés dans une base vectorielle.

**2. Retrieval** : quand un utilisateur pose une question, le système recherche les passages les plus pertinents dans la base vectorielle.

**3. Generation** : le LLM reçoit la question + les passages récupérés et génère une réponse ancrée dans vos documents.

Ce qui change tout : le LLM n'a pas besoin d'avoir été entraîné sur vos données. Il les reçoit dynamiquement au moment de la génération.

## Les 4 composants d'un RAG sécurisé

**La base vectorielle** : Qdrant, Weaviate, Chroma ou pgvector pour des données moins volumineuses. Elle doit être hébergée dans votre infrastructure (on-premise ou cloud privé).

**Le modèle d'embedding** : transforme le texte en vecteurs. Des modèles open source comme Nomic Embed ou BGE permettent de traiter l'embedding en local, sans envoyer vos données à l'extérieur.

**Le LLM** : Mistral, Llama 3, Phi-3 ou Azure OpenAI (contrat enterprise). Le choix dépend de vos contraintes de souveraineté des données.

**L'orchestrateur** : LangChain, LlamaIndex, ou un pipeline custom. C'est lui qui coordonne les étapes retrieval → augmentation → generation.

## Les risques à ne pas négliger

**Fuite de données via le LLM cloud** : si vous utilisez un API externe (OpenAI, Anthropic), vos données de contexte transitent par leurs serveurs. Vérifiez les clauses de confidentialité de votre contrat.

**Injection de prompt dans les documents** : un document malveillant peut contenir des instructions qui détournent le comportement du LLM. Nettoyez et validez vos sources documentaires.

**Hallucination sur des documents mal chunckés** : un découpage inadapté crée des contextes incohérents. Soignez votre stratégie de chunking (taille, overlap, métadonnées).

**Gestion des droits d'accès** : tous les utilisateurs ne devraient pas accéder à tous les documents. Le RAG doit respecter vos ACL (Access Control Lists) existantes.

## Ce que je recommande à mes clients

Commencez simple : un seul corpus documentaire, un seul cas d'usage, une technologie éprouvée. Validez la qualité des réponses et la satisfaction utilisateurs avant d'élargir.

La complexité d'un RAG n'est pas dans la technique — elle est dans la qualité et la fraîcheur de vos données sources. Un mauvais document produit une mauvaise réponse, peu importe la sophistication du système.

## Conclusion

Le RAG est aujourd'hui la méthode la plus pragmatique pour déployer l'IA générative sur vos données internes de manière sécurisée et maîtrisée. Mais il ne remplace pas une réflexion sur la qualité de votre base documentaire — c'est souvent le premier chantier à mener.
    `,
  },

  'roadmap-ia-structurer-strategie': {
    title: '5 étapes pour structurer une roadmap IA qui génère de la valeur',
    subtitle: 'Comment passer d\'une liste de projets IA épars à une stratégie cohérente, priorisée par ROI et alignée sur les enjeux métiers ? Méthode et outils.',
    date: '2025-12-10',
    readTime: '8 min',
    category: 'Stratégie IA',
    categoryColor: 'text-emerald-400',
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ia/',
    content: `
## La question que tout DSI me pose

"On a plein d'idées de projets IA. Par où on commence ?"

C'est la situation de 80% des organisations que j'accompagne. Elles ont identifié des cas d'usage, peut-être fait quelques PoC, mais elles peinent à construire une stratégie cohérente et priorisée.

Voici la méthode que j'applique.

## Étape 1 : Audit de maturité IA

Avant de construire une roadmap, il faut savoir d'où vous partez. L'audit de maturité IA évalue 5 dimensions :

- **Données** : qualité, accessibilité, gouvernance
- **Infrastructure** : cloud, compute, MLOps
- **Compétences** : data scientists, ingénieurs IA, culture data
- **Organisation** : gouvernance IA, ownership, budget
- **Expérience** : PoC réalisés, projets en production, leçons apprises

Le résultat : un score de maturité par dimension et un positionnement sur une échelle de 1 à 5. Cela évite de vouloir déployer des agents IA complexes quand la base data n'est pas prête.

## Étape 2 : Cartographie des cas d'usage

Recensez tous les cas d'usage IA identifiés dans votre organisation. Pas de filtre à cette étape — sortez tout ce qui est dans les têtes. Ateliers métiers, interviews DSI/DG, benchmark sectoriel.

Structurez-les par domaine métier : Finance, RH, Commercial, Production, IT...

## Étape 3 : Scoring et priorisation

Pour chaque cas d'usage, évaluez :

**Valeur business** (1-5) : gain de productivité, réduction de coûts, amélioration de la qualité, avantage concurrentiel.

**Faisabilité technique** (1-5) : qualité des données disponibles, complexité de l'implémentation, dépendances SI.

**Rapidité de mise en œuvre** (1-5) : time-to-value, ressources nécessaires, complexité organisationnelle.

Construisez une matrice valeur/faisabilité. Les cas d'usage en haut à droite (forte valeur, haute faisabilité) sont vos Quick Wins. Commencez par eux.

## Étape 4 : Construction de la roadmap

Structurez votre roadmap sur 3 horizons :

**Horizon 1 (0-6 mois)** : Quick Wins. Projets à fort impact, faible complexité. Objectif : démontrer la valeur, créer des champions internes.

**Horizon 2 (6-18 mois)** : Projets structurants. Cas d'usage à valeur élevée nécessitant des fondations (données, infrastructure, compétences).

**Horizon 3 (18-36 mois)** : Transformations profondes. Réorganisation de processus métiers, nouveaux modèles opérationnels.

## Étape 5 : Définir les KPIs de pilotage

Sans métriques, pas de pilotage. Pour chaque projet, définissez :

- **KPI de valeur** : gains mesurables attendus (temps économisé, erreurs réduites, revenus générés)
- **KPI de déploiement** : taux d'adoption, nombre d'utilisateurs actifs, satisfaction
- **KPI opérationnel** : disponibilité, latence, taux d'erreur

Revoyez la roadmap tous les trimestres. L'IA évolue vite — votre stratégie doit rester agile.

## L'erreur classique à éviter

Construire une roadmap IA déconnectée de la stratégie d'entreprise. L'IA doit être au service des enjeux business — pas l'inverse. Chaque projet IA doit répondre à la question : "Quel problème métier résout-on ?"

## Conclusion

Une roadmap IA efficace n'est pas un catalogue de technologies. C'est un outil de décision stratégique qui aligne l'ambition IA avec les capacités réelles et les priorités business de l'organisation.
    `,
  },

  'ia-generative-charte-entreprise': {
    title: 'Rédiger une charte IA générative pour votre entreprise : le guide complet',
    subtitle: 'La charte IA est le document fondateur de la gouvernance de l\'IA générative. Comment la rédiger pour qu\'elle soit utile, applicable et acceptée des collaborateurs ?',
    date: '2025-11-28',
    readTime: '11 min',
    category: 'Gouvernance IA',
    categoryColor: 'text-purple-400',
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ia/',
    content: `
## Pourquoi votre charte IA actuelle ne fonctionne pas

J'ai relu des dizaines de chartes IA d'entreprises françaises ces deux dernières années. La majorité pèche par les mêmes défauts : trop vague, trop juridique, non opérationnelle. Résultat : les collaborateurs ne la lisent pas, et encore moins ne l'appliquent.

Voici comment rédiger une charte IA qui fait vraiment son travail.

## Les 8 chapitres d'une charte IA efficace

### 1. Objet et champ d'application
Définissez précisément ce que couvre la charte : quels outils IA, quels utilisateurs, quels contextes d'usage. Soyez spécifique — "les outils d'IA générative dont ChatGPT, Microsoft Copilot, Gemini" — plutôt que "l'IA en général".

### 2. Principes éthiques fondamentaux
Listez vos engagements : transparence (indiquer quand une production intègre de l'IA), équité (ne pas utiliser l'IA pour discriminer), respect de la vie privée, responsabilité humaine finale.

### 3. Cas d'usage autorisés
Soyez affirmatif avant d'être restrictif. Listez explicitement ce que les collaborateurs peuvent faire avec l'IA : rédiger des résumés, générer des ébauches, analyser des données non confidentielles, coder, se former...

### 4. Usages interdits ou restreints
Les données confidentielles, les données personnelles de clients ou collaborateurs, les informations stratégiques non publiques. Précisez les conséquences en cas de violation.

### 5. Règles spécifiques par type de données
- **Données publiques** : usage libre
- **Données internes non sensibles** : usage sur outils approuvés uniquement
- **Données confidentielles** : interdit sur LLM cloud, solutions on-premise uniquement
- **Données personnelles** : RGPD + IA Act, strictement encadrées

### 6. Obligations de vérification
L'IA générative hallucine. Toute production IA doit être relue, vérifiée et validée par un humain avant utilisation professionnelle. C'est non négociable.

### 7. Outils approuvés
Listez les solutions validées par votre DSI : Microsoft Copilot pour Teams, Azure OpenAI via API interne, etc. Expliquez le processus de demande d'approbation pour de nouveaux outils.

### 8. Formation et accompagnement
Renvoyez vers les ressources disponibles : formations, guides pratiques, référent IA, canal de questions/réponses. La charte est un document vivant, pas une loi gravée dans le marbre.

## Les 3 pièges à éviter

**Piège 1 : Rédiger la charte sans les utilisateurs.** Impliquez des représentants de chaque métier. Une charte imposée d'en haut sans consultation sera ignorée.

**Piège 2 : Copier-coller la charte d'une autre entreprise.** Chaque organisation a ses propres enjeux, sa culture et ses contraintes sectorielles. La charte doit refléter votre réalité.

**Piège 3 : Croire que la charte suffit.** La gouvernance IA, c'est 20% de document et 80% de culture, de formation et d'animation continue. La charte est un point de départ, pas une solution.

## Processus de validation recommandé

1. Groupe de travail pluridisciplinaire : DSI + DRH + Juridique + Métiers
2. Version draft partagée avec managers et représentants du personnel
3. Validation par la direction générale
4. Communication interne claire : pourquoi cette charte, ce qu'elle change concrètement
5. Révision annuelle obligatoire (les outils évoluent vite)

## Conclusion

Une bonne charte IA n'est pas celle qui interdit le plus — c'est celle qui encadre avec clarté pour permettre un usage professionnel responsable et confiant. L'objectif est de libérer la valeur de l'IA tout en gérant les risques réels.
    `,
  },

  'roi-ia-mesurer-valeur-projets': {
    title: 'Comment mesurer le ROI de vos projets IA en entreprise ?',
    subtitle: 'Le pilotage de la valeur des projets IA reste un défi majeur pour les directions. Quels indicateurs ? Quelle méthode de calcul ? Quels pièges éviter ?',
    date: '2025-11-15',
    readTime: '9 min',
    category: 'Stratégie IA',
    categoryColor: 'text-emerald-400',
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ia/',
    content: `
## La question que tout DAF me pose

"On investit dans l'IA depuis 18 mois. Comment on sait si ça vaut vraiment le coup ?"

C'est la question légitime de toute direction financière face à des projets IA. Et la réponse honnête est : ça dépend — mais voici comment mesurer correctement.

## Pourquoi le ROI IA est difficile à calculer

L'IA génère souvent une valeur diffuse et multi-dimensionnelle : gain de productivité individuel, amélioration de la qualité, réduction d'erreurs, accélération des cycles... Des bénéfices réels mais difficiles à isoler et à quantifier.

De plus, les coûts sont souvent sous-évalués : formation, changement, infrastructure, maintenance, gouvernance. Le coût d'un projet IA ne se limite pas aux licences ou au développement initial.

## Les 4 catégories de valeur IA

**Valeur directe mesurable**
- Réduction du temps de traitement (heures économisées × coût horaire)
- Réduction des erreurs (coût de non-qualité évité)
- Augmentation du volume traité (productivité)

**Valeur indirecte qualifiable**
- Amélioration de l'expérience client (NPS, satisfaction)
- Réduction du stress et amélioration de l'engagement collaborateur
- Accélération du time-to-market

**Valeur stratégique**
- Avantage concurrentiel
- Nouvelles capacités business
- Meilleure prise de décision

**Valeur d'apprentissage**
- Compétences acquises
- Infrastructure construite (réutilisable pour d'autres projets)
- Culture et maturité IA de l'organisation

## Ma méthode de calcul du ROI IA

### Étape 1 : Calculer les coûts réels

Coûts initiaux + Coûts récurrents + Coûts cachés

Les coûts cachés souvent oubliés : temps des équipes métiers pour la recette et la validation, coûts de formation, effort de change management, coûts de correction des erreurs IA, dette technique.

### Étape 2 : Quantifier les bénéfices mesurables

Pour chaque bénéfice identifié, définissez une unité de mesure, une baseline de référence (avant IA) et une cible.

Exemple : "Le traitement d'une demande de crédit passera de 45 min à 8 min. Volume mensuel : 500 dossiers. Coût horaire moyen : 40€. Gain mensuel = (45-8)/60 × 500 × 40 = 12 300€"

### Étape 3 : Estimer les bénéfices non quantifiables

Pour les bénéfices difficiles à chiffrer (satisfaction client, qualité...), utilisez des proxies : un point de NPS représente X€ de revenus supplémentaires, une réduction du taux de churn de 1% représente Y€ de revenus préservés.

### Étape 4 : Calculer le ROI sur 3 ans

ROI = (Bénéfices totaux - Coûts totaux) / Coûts totaux × 100

Un ROI à 12 mois est souvent négatif pour les projets IA (investissement initial fort). Le bon horizon d'évaluation est 24 à 36 mois.

## Les KPIs que je recommande de suivre systématiquement

**KPIs d'adoption** : taux d'utilisation active, fréquence d'usage, taux d'abandon

**KPIs de performance IA** : taux de précision, taux d'hallucination, taux d'escalade humaine

**KPIs business** : temps de traitement, taux d'erreur, volume traité, satisfaction utilisateurs

**KPIs financiers** : coût par transaction, productivité (revenus/ETP), économies réalisées

## Le piège du "ROI IA global"

Évitez de calculer un ROI global de "votre programme IA". Calculez le ROI de chaque cas d'usage séparément. Certains projets seront très rentables, d'autres moins — et c'est normal. L'agrégation masque les réalités et empêche les décisions d'investissement éclairées.

## Conclusion

Mesurer le ROI de l'IA n'est pas une science exacte. Mais l'absence de mesure est encore plus coûteuse : elle vous prive de la capacité à optimiser, à prioriser et à communiquer la valeur créée à votre direction. Commencez avec des métriques imparfaites — elles s'amélioreront avec la pratique.
    `,
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogData[params.slug]
  if (!post) return { title: 'Article non trouvé' }

  return {
    title: post.title,
    description: post.subtitle,
    alternates: { canonical: 'https://davidbrenet.com/blog/${params.slug}' },
    openGraph: {
      title: post.title,
      description: post.subtitle,
      type: 'article',
      publishedTime: post.date,
      authors: ['David Brenet'],
    },
  }
}

function renderMarkdown(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()
    if (!line) { i++; continue }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-slate-100 mt-10 mb-4 leading-tight">
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-slate-200 mt-8 mb-3 leading-tight">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
      const text = line.slice(2, -2)
      elements.push(
        <p key={i} className="text-slate-200 font-semibold mt-5 mb-2 text-base">
          {text}
        </p>
      )
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={i} className="text-slate-400 leading-relaxed ml-4 list-disc mb-1">
          {line.slice(2)}
        </li>
      )
    } else {
      // Replace inline **bold** in paragraph
      const parts = line.split(/(\*\*.*?\*\*)/)
      elements.push(
        <p key={i} className="text-slate-400 leading-relaxed mb-4 text-base">
          {parts.map((part, pi) =>
            part.startsWith('**') && part.endsWith('**')
              ? <strong key={pi} className="text-slate-200 font-semibold">{part.slice(2, -2)}</strong>
              : part
          )}
        </p>
      )
    }
    i++
  }

  return elements
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogData[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-900 pt-20">
        <div className="text-center px-6">
          <div className="text-6xl font-bold text-slate-700 mb-4">404</div>
          <h1 className="text-2xl font-bold text-slate-200 mb-4">Article non trouvé</h1>
          <p className="text-slate-400 mb-8">Cet article n&apos;existe pas ou a été déplacé.</p>
          <Link href="/blog" className="btn-primary">
            <ArrowLeft size={16} /> Retour au blog
          </Link>
        </div>
      </div>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.subtitle,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'David Brenet',
      url: 'https://davidbrenet.com',
      sameAs: 'https://www.linkedin.com/in/david-brenet-ia/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'David Brenet — Conseil & Formation IA',
      url: 'https://davidbrenet.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-navy-950 to-navy-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-8"
          >
            <ArrowLeft size={15} /> Retour au blog
          </Link>

          <div className={'inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 ${post.categoryColor} border border-current/20 mb-5'}>
            <Tag size={10} />
            {post.category}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-8">{post.subtitle}</p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">DB</div>
              David Brenet
            </span>
            <span>{new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime} de lecture</span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-12 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-base leading-relaxed">
            {renderMarkdown(post.content)}
          </div>

          {/* LinkedIn & Share */}
          <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-sm text-slate-500">Vous avez trouvé cet article utile ?</div>
            <div className="flex items-center gap-3">
              {post.linkedinUrl && (
                <a
                  href={post.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors border border-slate-700/60 hover:border-blue-400/40 rounded-xl px-4 py-2"
                >
                  <Linkedin size={14} /> Suivre sur LinkedIn
                </a>
              )}
              <button className="btn-outline text-sm gap-2">
                <Share2 size={14} /> Partager
              </button>
            </div>
          </div>

          {/* Author card */}
          <div className="mt-10 card-glass p-8">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-cyan-500/20">
                <Image
                  src="/images/david-brenet.jpg"
                  alt="David Brenet"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-slate-100 mb-1">David Brenet</div>
                <div className="text-sm text-cyan-400 mb-3">Expert IA — Conseil, Formation & Agents IA | Auteur | Conférencier | Enseignant</div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Ingénieur SI (CNAM), diplômé GEM. 23 ans d&apos;expérience IT dans des environnements grands comptes.
                  Auteur de deux ouvrages sur l&apos;IA aux Éditions ENI. Enseignant au CNAM, CESI et Ifpass.
                </p>
                <a
                  href="https://www.linkedin.com/in/david-brenet-ia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:underline mt-3"
                >
                  <Linkedin size={13} /> Suivre sur LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 card-glass p-8 text-center border-cyan-500/20">
            <h3 className="text-xl font-bold text-slate-100 mb-3">
              Besoin d&apos;un accompagnement IA ?
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Discutons de votre contexte et de la manière dont je peux vous aider dans votre stratégie,
              votre formation ou votre déploiement d&apos;agents IA.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                Prendre contact <ArrowRight size={16} />
              </Link>
              <Link href="/blog" className="btn-outline">
                <ArrowLeft size={16} /> Autres articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
