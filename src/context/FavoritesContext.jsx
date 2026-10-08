import { createContext, useContext, useEffect, useState } from 'react'
import { products } from '../data/mockData.js'

const STORAGE_KEY = 'dashstack-favorites'

const FavoritesContext = createContext(null)

function getInitialFavorites() {
  if (typeof window === 'undefined') return [1]
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY))
    if (Array.isArray(saved)) return saved
  } catch {
    // Ignore unreadable storage and fall back to the default selection.
  }
  return products.slice(0, 6).map((product) => product.id)
}

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(getInitialFavorites)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds))
  }, [favoriteIds])

  const toggleFavorite = (id) =>
    setFavoriteIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )

  const isFavorite = (id) => favoriteIds.includes(id)

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error('useFavorites must be used inside a FavoritesProvider')
  return context
}
