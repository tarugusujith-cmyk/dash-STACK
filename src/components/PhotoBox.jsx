import { Image as ImageIcon } from 'lucide-react'

/**
 * Neutral placeholder for any product/place that doesn't have a real
 * photo asset wired in yet. Earlier builds pulled photos from a
 * category-keyword image service, but that service kept returning
 * unrelated, sometimes odd photos (a dog, sand dunes, batteries) for
 * common product names — worse than no photo at all. Until real
 * exported images are supplied, this shows a clean, honest "no photo"
 * tile instead of a wrong one. Pass `imageSrc` on ProductCard (or use
 * an <img> directly) wherever a real asset exists.
 */
export default function PhotoBox({ alt = 'No photo available', className = '' }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex items-center justify-center bg-gradient-to-br from-[#EEF2FA] to-[#DCE4F2]
        text-ink-light dark:from-night-soft dark:to-night-line ${className}`}
    >
      <ImageIcon size={28} />
    </div>
  )
}
