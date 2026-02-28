export interface Reference {
  name: string
  shortName?: string
  sector: string
  logoFile: string   // fichier dans /public/logos/
  url?: string
}

export const references: Reference[] = [
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
    name: 'Groupama',
    sector: 'Assurance',
    logoFile: 'groupama.svg',
    url: 'https://www.groupama.fr',
  },
  {
    name: 'Macif',
    sector: 'Assurance mutualiste',
    logoFile: 'macif.svg',
    url: 'https://www.macif.fr',
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
    name: 'DMM',
    sector: 'Industrie',
    logoFile: 'dmm.svg',
  },
  {
    name: 'Riccobono',
    sector: 'Distribution',
    logoFile: 'riccobono.svg',
  },
  {
    name: 'Yamed',
    sector: 'Santé',
    logoFile: 'yamed.svg',
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
    name: 'EICNAM',
    shortName: 'EICNAM',
    sector: 'École d\'Ingénieurs',
    logoFile: 'eicnam.svg',
    url: 'https://www.cnam.fr',
  },
  {
    name: 'Grenoble École Management',
    shortName: 'GEM',
    sector: 'Grande école',
    logoFile: 'gem.svg',
    url: 'https://www.grenoble-em.com',
  },
  {
    name: 'Institut des Hautes Études du Ministère de l\'Intérieur',
    shortName: 'IHEMI',
    sector: 'Secteur public',
    logoFile: 'ihemi.svg',
  },
  {
    name: 'Université de Tours',
    shortName: 'Univ. Tours',
    sector: 'Enseignement supérieur',
    logoFile: 'univ-tours.svg',
  },
  {
    name: 'Université de La Rochelle',
    shortName: 'Univ. La Rochelle',
    sector: 'Enseignement supérieur',
    logoFile: 'univ-larochelle.svg',
  },
]
