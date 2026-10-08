import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import PhotoBox from './PhotoBox.jsx'
import Rating from './Rating.jsx'

export default function ProductCard({ product, isFavorite, onToggleFavorite, onEdit, imageSrc, imageNav }) {
  return (
    <article className="panel overflow-hidden p-4">
      <div className="relative">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={product.name}
            loading="lazy"
            className="h-48 w-full rounded-lg bg-white object-contain"
          />
        ) : (
          <PhotoBox alt={product.name} className="h-48 w-full rounded-lg" />
        )}

        {imageNav && (
          <>
            <span
              aria-hidden="true"
              className="absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink-muted shadow"
            >
              <ChevronLeft size={16} />
            </span>
            <span
              aria-hidden="true"
              className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink-muted shadow"
            >
              <ChevronRight size={16} />
            </span>
          </>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-ink dark:text-white">{product.name}</h3>
          <p className="mt-1 text-sm font-bold text-primary">{product.price}</p>
        </div>
        <button
          type="button"
          onClick={() => onToggleFavorite(product.id)}
          aria-label={isFavorite ? `Remove ${product.name} from favorites` : `Add ${product.name} to favorites`}
          aria-pressed={isFavorite}
          className="text-[#F93C65] transition-transform hover:scale-110"
        >
          <Heart size={20} className={isFavorite ? 'fill-[#F93C65]' : ''} />
        </button>
      </div>

      <div className="mt-2">
        <Rating value={product.rating} reviews={product.reviews} />
      </div>

      <button
        type="button"
        onClick={() => onEdit(product)}
        className="mt-4 w-full rounded-lg bg-primary-soft py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white dark:bg-night-soft"
      >
        Edit Product
      </button>
    </article>
  )
}
