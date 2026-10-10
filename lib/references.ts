export interface Reference {
  name: string
  shortName?: string
  sector: string
  logoFile: string   // fichier dans /public/logos/
  url?: string
}

export const references: Reference[] = [
  // ── Assurance & Mutuelles ───────────────────────────────────────────────────
  {
    name: 'Groupama',
    sector: 'Assurance',
    logoFile: 'groupama.svg',
    url: 'https://www.groupama.fr',
  },
  {
    name: 'Mutavie',
    sector: 'Épargne & prévoyance',
    logoFile: 'mutavie.svg',
    url: 'https://www.mutavie.fr',
  },
  {
    name: 'IMA',
    shortName: 'IMA',
    sector: 'Assistance mutualiste',
    logoFile: 'ima.svg',
    url: 'https://www.ima.fr',
  },
  // ── Grands comptes ──────────────────────────────────────────────────────────
  {
    name: 'Saint-Gobain',
    sector: 'Industrie mondiale',
    logoFile: 'saint-gobain.svg',
    url: 'https://www.saint-gobain.com',
  },
  {
    name: 'LVMH',
    sector: 'Luxe & Retail',
    logoFile: 'lvmh.svg',
    url: 'https://www.lvmh.fr',
  },
  {
    name: 'Zodiac',
    sector: 'Industrie / Aéronautique',
    logoFile: 'zodiac.svg',
  },
  {
    name: 'BlueSoft',
    sector: 'Services IT',
    logoFile: 'bluesoft.svg',
  },
  {
    name: 'Extia',
    sector: 'Conseil IT',
    logoFile: 'extia.svg',
    url: 'https://www.extia.fr',
  },
  {
    name: 'Yamed',
    sector: 'Santé',
    logoFile: 'yamed.svg',
  },
  // ── Institutions publiques ──────────────────────────────────────────────────
  {
    name: 'IHEMI',
    shortName: 'IHEMI',
    sector: 'Min. de l\'Intérieur',
    logoFile: 'ihemi.svg',
  },
  // ── Établissements académiques ───────────────────────────────────────────────
  {
    name: 'CNAM',
    shortName: 'CNAM',
    sector: 'Enseignement supérieur',
    logoFile: 'cnam.svg',
    url: 'https://www.cnam.fr',
  },
  {
    name: 'CESI',
    shortName: 'CESI',
    sector: 'École d\'Ingénieurs',
    logoFile: 'cesi.svg',
  },
  {
    name: 'Ifpass',
    shortName: 'Ifpass',
    sector: 'Formation assurance',
    logoFile: 'ifpass.svg',
  },
  {
    name: 'Grenoble École Management',
    shortName: 'GEM',
    sector: 'Grande école',
    logoFile: 'gem.svg',
    url: 'https://www.grenoble-em.com',
  },
]
