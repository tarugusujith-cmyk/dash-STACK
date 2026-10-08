import { useState } from 'react'
import PageTitle from '../components/PageTitle.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { products } from '../data/mockData.js'
import appleWatchStarlight from '../assets/images/apple-watch-starlight.png'

export default function Favorites() {
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites()
  const [editing, setEditing] = useState(null)

  const favoriteProducts = products.filter((product) => favoriteIds.includes(product.id))

  return (
    <>
      <PageTitle>Favorites</PageTitle>

      {favoriteProducts.length === 0 ? (
        <p className="panel p-10 text-center text-sm text-ink-muted dark:text-ink-light">
          Nothing saved yet. Tap the heart on any product to keep it here.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={isFavorite(product.id)}
              onToggleFavorite={toggleFavorite}
              onEdit={setEditing}
              imageSrc={appleWatchStarlight}
            />
          ))}
        </div>
      )}

      {editing && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" role="dialog" aria-modal="true">
          <div className="panel w-full max-w-md p-6">
            <h2 className="text-lg font-bold text-ink dark:text-white">Edit {editing.name}</h2>
            <label className="mt-4 block text-sm font-semibold text-ink-muted dark:text-ink-light">
              Product name
              <input defaultValue={editing.name} className="field mt-2" />
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
