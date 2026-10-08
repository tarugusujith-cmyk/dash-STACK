import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PageTitle from '../components/PageTitle.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { products } from '../data/mockData.js'
import appleWatchMidnight from '../assets/images/apple-watch-midnight.png'

const banners = [
  { id: 1, dates: 'September 12-22', title: 'Enjoy free home delivery in this summer', note: 'Designer Dresses - Pick from trendy Designer Dress.' },
  { id: 2, dates: 'October 01-14', title: 'Save more on every second order', note: 'Electronics - Fresh arrivals with two year warranty.' },
]

// The design's Products screen only ever shows this one item, repeated —
// matching that means the default (no search) view stays exactly this,
// rather than the wider product catalog. Searching still reaches every
// product, so the catalog underneath isn't lost.
const featuredWatch = products.find((product) => product.name === 'Apple Watch Series 4') || products[0]
const featuredCards = [0, 1, 2].map((index) => ({ ...featuredWatch, displayKey: `watch-${index}` }))

export default function Products() {
  const [searchParams] = useSearchParams()
  const query = (searchParams.get('q') || '').toLowerCase()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [slide, setSlide] = useState(0)
  const [editing, setEditing] = useState(null)

  const searchResults = query
    ? products.filter((product) => product.name.toLowerCase().includes(query))
    : null

  const banner = banners[slide]
  const goPrev = () => setSlide((current) => (current === 0 ? banners.length - 1 : current - 1))
  const goNext = () => setSlide((current) => (current + 1) % banners.length)

  return (
    <>
      <PageTitle>Products</PageTitle>

      <section className="relative overflow-hidden rounded-card bg-primary px-6 py-10 text-white sm:px-16 sm:py-14">
        <p className="text-sm font-semibold opacity-90">{banner.dates}</p>
        <h2 className="mt-3 max-w-md text-3xl font-extrabold leading-tight sm:text-4xl">{banner.title}</h2>
        <p className="mt-3 text-sm opacity-90">{banner.note}</p>
        <button type="button" className="mt-6 rounded-lg bg-[#FF9500] px-7 py-3 text-sm font-bold text-white hover:bg-[#E88600]">
          Get Started
        </button>

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous banner"
          className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white text-primary"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next banner"
          className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white text-primary"
        >
          <ChevronRight size={18} />
        </button>
      </section>

      {searchResults && (
        <p className="mt-6 text-sm text-ink-muted dark:text-ink-light">
          {searchResults.length} result{searchResults.length === 1 ? '' : 's'} for “{query}”
        </p>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {(searchResults ?? featuredCards).map((product) => (
          <ProductCard
            key={product.displayKey ?? product.id}
            product={product}
            isFavorite={isFavorite(product.id)}
            onToggleFavorite={toggleFavorite}
            onEdit={setEditing}
            imageSrc={product.name === 'Apple Watch Series 4' ? appleWatchMidnight : undefined}
            imageNav={!searchResults}
          />
        ))}
      </div>

      {searchResults && searchResults.length === 0 && (
        <p className="panel mt-6 p-8 text-center text-sm text-ink-muted dark:text-ink-light">
          No products match that search. Try a different product name.
        </p>
      )}

      {/* Edit dialog — front-end only, no product is saved without a backend. */}
      {editing && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" role="dialog" aria-modal="true">
          <div className="panel w-full max-w-md p-6">
            <h2 className="text-lg font-bold text-ink dark:text-white">Edit {editing.name}</h2>
            <label className="mt-4 block text-sm font-semibold text-ink-muted dark:text-ink-light">
              Product name
              <input defaultValue={editing.name} className="field mt-2" />
            </label>
            <label className="mt-4 block text-sm font-semibold text-ink-muted dark:text-ink-light">
              Price
              <input defaultValue={editing.price} className="field mt-2" />
            </label>
            <div className="mt-6 flex justify-end gap-3">
              <button type="button" className="btn-ghost" onClick={() => setEditing(null)}>Cancel</button>
              <button type="button" className="btn-primary" onClick={() => setEditing(null)}>Save changes</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
