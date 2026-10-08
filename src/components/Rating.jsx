import { Star } from 'lucide-react'

export default function Rating({ value = 0, reviews }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={star <= value ? 'fill-[#FFB800] text-[#FFB800]' : 'text-[#D5D5D5]'}
        />
      ))}
      {reviews != null && (
        <span className="ml-1 text-xs text-ink-light">({reviews})</span>
      )}
    </div>
  )
}
