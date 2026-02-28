import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { references } from '@/lib/references'

/**
 * TrustedBy – grille premium de logos références
 * ─────────────────────────────────────────────
 * Affiche une grille responsive de logos monochromes avec effet hover subtil.
 * Si un fichier /public/logos/<logoFile> n'existe pas encore, affiche le nom
 * textuel avec la même grille et le même style (fallback élégant).
 *
 * Pour ajouter de vrais logos SVG :
 *   1. Déposer les fichiers dans /public/logos/
 *   2. Remplacer <LogoText /> par <Image src={...} /> dans ce composant.
 */

function LogoPlaceholder({ name, shortName }: { name: string; shortName?: string }) {
  const display = shortName ?? name
  return (
    <span className="text-sm font-semibold text-slate-400 leading-tight text-center">
      {display}
    </span>
  )
}

interface TrustedByProps {
  /** Titre optionnel affiché au-dessus de la grille */
  title?: string
  /** Afficher le lien "Voir toutes les références" */
  showLink?: boolean
  /** Variante de fond ('dark' = section séparée, 'inline' = intégré dans une section) */
  variant?: 'dark' | 'inline'
}

export function TrustedBy({
  title = 'Ils nous font confiance',
  showLink = true,
  variant = 'dark',
}: TrustedByProps) {
  const wrapperClass =
    variant === 'dark'
      ? 'py-16 bg-navy-800/40 border-y border-slate-800/50'
      : 'py-12'

  return (
    <section className={wrapperClass} aria-label="Références clients">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* En-tête */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="tag mb-2">Références</div>
            <h2 className="text-2xl font-bold text-slate-100">{title}</h2>
          </div>
          {showLink && (
            <Link
              href="/references"
              className="text-sm text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group self-start sm:self-auto"
            >
              Voir toutes les missions
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>

        {/* Grille logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {references.map(({ name, shortName, sector, url }) => {
            const card = (
              <div
                className={`
                  group relative flex items-center justify-center
                  h-16 px-4 rounded-xl
                  bg-navy-800/60 border border-slate-700/40
                  hover:border-slate-500/60 hover:bg-slate-800/40
                  transition-all duration-200
                  ${url ? 'cursor-pointer' : ''}
                `}
                title={`${name} — ${sector}`}
              >
                {/* Fond hover subtil */}
                <div className="absolute inset-0 rounded-xl bg-cyan-500/0 group-hover:bg-cyan-500/3 transition-colors" />

                {/*
                  Remplacer ce bloc par :
                  <Image
                    src={`/logos/${logoFile}`}
                    alt={name}
                    width={120}
                    height={40}
                    className="object-contain max-h-8 opacity-50 group-hover:opacity-80 transition-opacity grayscale"
                  />
                  ... une fois les fichiers SVG/PNG déposés dans /public/logos/
                */}
                <LogoPlaceholder name={name} shortName={shortName} />
              </div>
            )

            return url ? (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} — ${sector}`}
              >
                {card}
              </a>
            ) : (
              <div key={name}>{card}</div>
            )
          })}
        </div>

        {/* Sous-texte */}
        <p className="text-center text-xs text-slate-600 mt-6">
          Grands comptes, institutions publiques, établissements académiques — conseil, formation &amp; conférences
        </p>
      </div>
    </section>
  )
}
