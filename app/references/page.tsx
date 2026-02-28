import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Brain, Network, Mic2, GraduationCap, Building2, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Références — Missions & Clients de David Brenet',
  description:
    'Découvrez les références de David Brenet : Saint-Gobain, LVMH, Groupama, Macif, IMA, CNAM, GEM et bien d\'autres. Conseil stratégique IA, transformation SI, formation et conférences.',
  alternates: { canonical: 'https://davidbrenet.com/references' },
}

const categories = [
  {
    icon: Brain,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    title: 'Conseil Stratégique IA',
    desc: 'Accompagnement de directions dans leur stratégie d\'adoption et de déploiement de l\'IA.',
    refs: [
      { name: 'LVMH', sector: 'Luxe & Retail mondial', mission: 'Conseil stratégie IA & gouvernance des données' },
      { name: 'Saint-Gobain', sector: 'Industrie mondiale', mission: 'Stratégie IA & gouvernance des données' },
      { name: 'Groupama Centre-Atlantique', sector: 'Assurance', mission: 'Stratégie SI & transformation digitale' },
      { name: 'MACIF Finance Épargne', sector: 'Finance & Assurance', mission: 'Management IT & déploiement IA (Vertex AI)' },
      { name: 'Macif', sector: 'Assurance mutualiste', mission: 'Accompagnement transformation IA' },
      { name: 'Mutavie', sector: 'Épargne & prévoyance', mission: 'Stratégie et déploiement IA' },
      { name: 'IMA (Inter Mutuelles Assistance)', sector: 'Assistance mutualiste', mission: 'Conseil IA & transformation numérique' },
      { name: 'Zodiac', sector: 'Industrie / Aéronautique', mission: 'Conseil stratégie IA & systèmes d\'information' },
      { name: 'BlueSoft', sector: 'Services IT', mission: 'Conseil & accompagnement stratégique IA' },
      { name: 'Extia', sector: 'Conseil IT', mission: 'Expertise stratégique IA' },
      { name: 'Yamed', sector: 'Santé', mission: 'Transformation numérique & IA' },
      { name: 'Ministère de l\'Intérieur (IHEMI)', sector: 'Fonction publique — Hauts fonctionnaires', mission: 'Sensibilisation & conseil IA pour cadres dirigeants' },
    ],
  },
  {
    icon: Network,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    title: 'Transformation des Systèmes d\'Information',
    desc: 'Modernisation SI, architecture orientée API, digitalisation et projets de transformation.',
    refs: [
      { name: 'Groupama Centre-Atlantique', sector: 'Assurance', mission: 'Responsable pôle solutions applicatives — 27 collaborateurs managés' },
      { name: 'Groupe IMA', sector: 'Assistance mutualiste', mission: 'Mission IT Consultant — cartographie organisationnelle' },
      { name: 'Inter Mutuelles Habitat', sector: 'Immobilier & mutualisme', mission: 'Refonte SI, ERP, flux EAI' },
      { name: 'Macif', sector: 'Assurance mutualiste', mission: 'Modernisation SI & architecture applicative' },
      { name: 'Mutavie', sector: 'Épargne & prévoyance', mission: 'Transformation SI & intégration cloud' },
      { name: 'DMM', sector: 'Industrie', mission: 'Architecture & conseil SI' },
      { name: 'Riccobono', sector: 'Distribution', mission: 'Transformation numérique & modernisation SI' },
      { name: 'Zodiac', sector: 'Industrie / Aéronautique', mission: 'Conseil architecture & systèmes' },
    ],
  },
  {
    icon: Mic2,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    title: 'Conférences IA',
    desc: 'Interventions orales sur la stratégie IA, la gouvernance et la transformation par l\'IA.',
    refs: [
      { name: 'Saint-Gobain', sector: 'Industrie mondiale', mission: 'Conférence IA pour comité de direction' },
      { name: 'LVMH', sector: 'Luxe & Retail', mission: 'Conférence IA générative & enjeux stratégiques' },
      { name: 'Groupama', sector: 'Assurance', mission: 'Séminaire COMEX IA & transformation' },
      { name: 'Macif', sector: 'Assurance mutualiste', mission: 'Conférence IA pour équipes dirigeantes' },
      { name: 'IMA (Inter Mutuelles Assistance)', sector: 'Assistance mutualiste', mission: 'Conférence IA & usages métiers' },
      { name: 'Institut des Hautes Études du Min. de l\'Intérieur', sector: 'Fonction publique', mission: 'Conférence stratégie IA pour hauts fonctionnaires' },
      { name: 'Université de Tours', sector: 'Enseignement supérieur', mission: 'Conférence IA pour étudiants et professionnels' },
      { name: 'Université de La Rochelle', sector: 'Enseignement supérieur', mission: 'Conférence IA appliquée' },
      { name: 'Grenoble École Management', sector: 'Grande école', mission: 'Conférence IA & transformation des entreprises' },
      { name: 'Extia', sector: 'Conseil IT', mission: 'Conférence IA & transformation numérique' },
      { name: 'BlueSoft', sector: 'Services IT', mission: 'Conférence IA Générative & agents' },
    ],
  },
  {
    icon: GraduationCap,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    title: 'Formation & Enseignement',
    desc: 'Programmes de formation et cours universitaires auprès d\'ingénieurs, masters et professionnels.',
    refs: [
      { name: 'CNAM', sector: 'Enseignement supérieur national', mission: 'Enseignant vacataire depuis 2021 — Méthodologie SI, Data, Programmation, IA' },
      { name: 'EICNAM', sector: 'École d\'Ingénieurs du CNAM', mission: 'Enseignement IA & systèmes avancés pour ingénieurs' },
      { name: 'CESI', sector: 'Grandes Écoles d\'Ingénieurs', mission: 'Enseignant depuis 2024 — Masters & Ingénieurs DevSecOps' },
      { name: 'IFPASS', sector: 'Formation assurance & finance', mission: 'Formateur depuis 2022 — Masters assurance, IA, digitalisation' },
      { name: 'Grenoble École Management', sector: 'Grande école de management', mission: 'Modules IA & transformation des organisations' },
      { name: 'Université de Tours', sector: 'Université', mission: 'Modules IA et transformation digitale' },
      { name: 'Université de La Rochelle', sector: 'Université', mission: 'Modules IA appliquée & gouvernance' },
      { name: 'Macif — Formation interne', sector: 'Assurance mutualiste', mission: 'Formation équipes et managers à l\'IA' },
      { name: 'Saint-Gobain — Formation interne', sector: 'Industrie', mission: 'Acculturation IA pour managers & équipes IT' },
      { name: 'IHEMI — Formation hauts fonctionnaires', sector: 'Fonction publique', mission: 'Module IA stratégique pour cadres dirigeants' },
    ],
  },
]

const stats = [
  { value: '30+', label: 'Organisations accompagnées', icon: Users },
  { value: '23+', label: 'Années d\'expérience', icon: Building2 },
  { value: '6+', label: 'Établissements académiques', icon: GraduationCap },
  { value: '2', label: 'Ouvrages publiés', icon: Brain },
]

export default function ReferencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy-950 to-navy-900 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="tag mb-3">Références</div>
          <div className="cyan-line mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-slate-100 leading-tight mb-6">
            Ils me font<br />
            <span className="gradient-text">confiance depuis des années</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Des grands comptes aux institutions publiques, David Brenet accompagne des organisations
            de tous secteurs dans leur stratégie IA, leur formation et leur transformation numérique.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-navy-800/40 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-cyan-400">{value}</div>
                <div className="text-sm text-slate-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References par catégorie */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {categories.map(({ icon: Icon, color, bg, title, desc, refs }) => (
            <div key={title}>
              <div className="flex items-start gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={22} className={color} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-100 leading-tight">{title}</h2>
                  <p className="text-slate-400 mt-1">{desc}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {refs.map(({ name, sector, mission }) => (
                  <div key={name + sector} className="card-glass p-6 hover:border-slate-600 hover:-translate-y-0.5 transition-all duration-200">
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Building2 size={14} className={color} />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-200 text-sm leading-tight">{name}</div>
                        <div className={`text-xs ${color} mt-0.5`}>{sector}</div>
                        <div className="text-xs text-slate-500 mt-2 leading-relaxed">{mission}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-800/40 border-t border-slate-800/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-100 mb-5">
            Rejoignez mes références
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Chaque organisation bénéficie d&apos;un accompagnement personnalisé, adapté à son contexte,
            ses contraintes et ses ambitions IA.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Démarrer une mission <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
