import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, Users, Clock, TrendingUp, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Études de cas — Agents IA & Claude en Assurance | David Brenet',
  description:
    'Retours d\'expérience concrets sur le déploiement d\'agents Claude dans des organisations d\'assurance et de mutuelles. Contexte, enjeux, intervention, résultats mesurés.',
  alternates: { canonical: 'https://davidbrenet.com/cas-clients' },
}

const caseStudies = [
  {
    slug: 'agent-sinistres-iard',
    sector: 'Assurance IARD',
    type: 'Déploiement agent IA',
    title: 'Agent d\'instruction automatique des sinistres dégâts des eaux',
    summary: 'Déploiement d\'un agent Claude pour l\'instruction des sinistres simples en branche dégâts des eaux. Réduction du délai d\'instruction de 3,2 jours à 4,7 heures.',
    tags: ['Sinistres', 'Agents IA', 'MCP', 'Claude API'],
    results: [
      { metric: '– 85%', label: 'Délai d\'instruction' },
      { metric: '91%', label: 'Taux de validation' },
      { metric: '100', label: 'Dossiers/mois' },
    ],
    color: 'border-cyan-500/30',
    tagColor: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    slug: 'formation-claude-dsi-mutuelle',
    sector: 'Mutuelle',
    type: 'Formation intra-entreprise',
    title: 'Formation Claude Code & Agents IA pour les équipes IT d\'une mutuelle',
    summary: 'Programme de formation sur 2 jours pour une équipe de 12 développeurs. Adoption de Claude Code, gain de productivité mesuré, déploiement d\'un premier agent en 6 semaines post-formation.',
    tags: ['Formation', 'Claude Code', 'SDK Agents', 'DSI'],
    results: [
      { metric: '12', label: 'Développeurs formés' },
      { metric: '+ 38%', label: 'Productivité mesurée' },
      { metric: '6 sem.', label: '1er agent en prod' },
    ],
    color: 'border-purple-500/30',
    tagColor: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    slug: 'gouvernance-ai-act-assureur',
    sector: 'Assureur vie',
    type: 'Gouvernance & AI Act',
    title: 'Mise en conformité AI Act article 4 et politique d\'usage IA',
    summary: 'Accompagnement d\'un assureur vie dans la mise en place de sa gouvernance IA : politique d\'usage, inventaire des systèmes, formation des équipes et documentation AI Act.',
    tags: ['AI Act', 'Gouvernance', 'Formation', 'Conformité'],
    results: [
      { metric: '87', label: 'Collaborateurs formés' },
      { metric: '100%', label: 'Systèmes inventoriés' },
      { metric: '3 mois', label: 'Durée d\'accompagnement' },
    ],
    color: 'border-red-500/30',
    tagColor: 'text-red-400',
    bg: 'bg-red-500/10',
  },
  {
    slug: 'keynote-comex-assurance',
    sector: 'Groupe d\'assurance',
    type: 'Keynote COMEX',
    title: 'Keynote IA agentique pour le COMEX d\'un groupe assurantiel',
    summary: 'Demi-journée de sensibilisation pour le comité de direction d\'un groupe d\'assurance. Présentation des enjeux agentiques, panorama sectoriel et priorisation collective des chantiers.',
    tags: ['COMEX', 'Keynote', 'Stratégie', 'IA Agentique'],
    results: [
      { metric: '18', label: 'Dirigeants participants' },
      { metric: '3', label: 'Chantiers priorisés' },
      { metric: 'J+30', label: '1er chantier lancé' },
    ],
    color: 'border-amber-500/30',
    tagColor: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
]

export default function CasClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Études de cas</div>
          <div className="cyan-line mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
            Ce que ça donne<br />
            <span className="gradient-text">en conditions réelles</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Retours d&apos;expérience sur des déploiements d&apos;agents Claude et des formations
            IA dans des organisations d&apos;assurance et de mutuelles. Avec des résultats mesurés.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/cas-clients/${cs.slug}`}
                className={`card-glass border ${cs.color} p-7 hover:border-opacity-60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col`}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 size={12} className="text-slate-500" />
                      <span className="text-xs text-slate-500">{cs.sector}</span>
                    </div>
                    <span className={`text-xs font-semibold ${cs.tagColor} ${cs.bg} px-2.5 py-0.5 rounded-full`}>{cs.type}</span>
                  </div>
                  <ArrowRight size={16} className={`${cs.tagColor} opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1`} />
                </div>

                <h2 className="text-lg font-bold text-slate-100 leading-tight mb-3 group-hover:text-cyan-400 transition-colors">
                  {cs.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
                  {cs.summary}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {cs.results.map(({ metric, label }) => (
                    <div key={label} className="text-center bg-navy-800/50 rounded-lg p-3">
                      <div className={`text-lg font-bold ${cs.tagColor}`}>{metric}</div>
                      <div className="text-xs text-slate-500 leading-tight">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="text-xs text-slate-500 bg-navy-800/60 border border-slate-700/40 rounded-full px-2.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Note confidentialité */}
      <section className="py-10 bg-navy-800/40 border-y border-slate-800/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-500 leading-relaxed">
            Les études de cas sont anonymisées à la demande des clients. Les résultats chiffrés
            sont réels et mesurés en production. Si vous souhaitez échanger directement avec
            une référence, c&apos;est possible sur demande lors d&apos;un premier contact.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">
            Votre organisation pourrait être<br />
            <span className="gradient-text">la prochaine étude de cas</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Prenons 30 minutes pour explorer ce qui est faisable chez vous.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact?sujet=diagnostic" className="btn-primary text-base px-8 py-4">
              Demander un diagnostic <ArrowRight size={18} />
            </Link>
            <Link href="/offres" className="btn-outline text-base px-8 py-4">
              Voir les offres
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
