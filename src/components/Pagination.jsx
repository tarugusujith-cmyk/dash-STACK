import { ChevronLeft, ChevronRight } from 'lucide-react'

/** Showing 1-09 of 78 style footer used under every table in the design. */
export default function Pagination({ label, onPrev, onNext, prevLabel, nextLabel, disabledPrev, disabledNext }) {
  const buttonClass =
    'inline-flex items-center gap-1 rounded-lg border border-surface-line px-3 py-2 text-sm font-semibold text-ink-muted transition-colors enabled:hover:border-primary enabled:hover:text-primary disabled:opacity-40 dark:border-night-line dark:text-ink-light'

  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-ink-muted dark:text-ink-light">{label}</p>
      <div className="flex items-center gap-2">
        <button type="button" onClick={onPrev} disabled={disabledPrev} className={buttonClass}>
          <ChevronLeft size={16} />
          {prevLabel}
        </button>
        <button type="button" onClick={onNext} disabled={disabledNext} className={buttonClass}>
          {nextLabel}
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}
