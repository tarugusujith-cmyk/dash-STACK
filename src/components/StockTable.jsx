import { Pencil, Trash2 } from 'lucide-react'
import PhotoBox from './PhotoBox.jsx'
import { stockImageFor } from '../utils/stockImages.js'

export default function StockTable({ rows, onEdit, onDelete }) {
  return (
    <div className="scroll-slim overflow-x-auto">
      <table className="w-full min-w-[820px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-surface-line text-left text-ink-muted dark:border-night-line dark:text-ink-light">
            <th className="px-4 py-4 font-bold">Image</th>
            <th className="px-4 py-4 font-bold">Product Name</th>
            <th className="px-4 py-4 font-bold">Category</th>
            <th className="px-4 py-4 font-bold">Price</th>
            <th className="px-4 py-4 font-bold">Piece</th>
            <th className="px-4 py-4 font-bold">Available Color</th>
            <th className="px-4 py-4 font-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item) => {
            const image = stockImageFor(item.name)
            return (
              <tr key={item.id} className="border-b border-surface-line last:border-0 dark:border-night-line">
                <td className="px-4 py-3">
                  {image ? (
                    <img
                      src={image}
                      alt={item.name}
                      loading="lazy"
                      className="h-12 w-12 rounded-lg bg-white object-contain"
                    />
                  ) : (
                    <PhotoBox alt={item.name} className="h-12 w-12 rounded-lg" />
                  )}
                </td>
                <td className="px-4 py-3 text-ink dark:text-white">{item.name}</td>
                <td className="px-4 py-3 text-ink-muted dark:text-ink-light">{item.category}</td>
                <td className="px-4 py-3 text-ink-muted dark:text-ink-light">{item.price}</td>
                <td className="px-4 py-3 text-ink-muted dark:text-ink-light">{item.piece}</td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-2">
                    {item.colors.map((color) => (
                      <span key={color} style={{ backgroundColor: color }} className="h-5 w-5 rounded-full" />
                    ))}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onEdit?.(item)}
                      aria-label={`Edit ${item.name}`}
                      className="grid h-8 w-8 place-items-center rounded-md border border-surface-line text-ink-muted hover:border-primary hover:text-primary dark:border-night-line"
                    >
                      <Pencil size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete?.(item)}
                      aria-label={`Delete ${item.name}`}
                      className="grid h-8 w-8 place-items-center rounded-md border border-surface-line text-[#EF3826] hover:border-[#EF3826] dark:border-night-line"
                    >
                      <Trash2 size={15} />
                    </button>
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {rows.length === 0 && (
        <p className="py-10 text-center text-sm text-ink-muted dark:text-ink-light">
          No products in stock match this search.
        </p>
      )}
    </div>
  )
}
