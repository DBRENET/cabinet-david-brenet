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
  'ia-act-guide-conformite-entreprise': {
    title: 'IA Act : guide pratique de mise en conformité pour les entreprises françaises',
    subtitle: 'Le règlement européen sur l\'IA entre en vigueur par étapes. Ce guide vous aide à comprendre vos obligations et à structurer votre mise en conformité.',
    date: '2026-01-15',
    readTime: '12 min',
    category: 'Gouvernance IA',
    categoryColor: 'text-purple-400',
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ab26367b',
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
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ab26367b',
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
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ab26367b',
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
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ab26367b',
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
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ab26367b',
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
    linkedinUrl: 'https://www.linkedin.com/in/david-brenet-ab26367b',
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
    alternates: { canonical: `https://davidbrenet.com/blog/${params.slug}` },
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
      sameAs: 'https://www.linkedin.com/in/david-brenet-ab26367b',
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

          <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 ${post.categoryColor} border border-current/20 mb-5`}>
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
                  href="https://www.linkedin.com/in/david-brenet-ab26367b"
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
