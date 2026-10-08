import { useState } from 'react'

/**
 * Real headshot-style photo for a person, seeded by name so the same
 * person always shows the same face. Unlike Avatar (circular, fixed
 * square size), this fills any box shape — used for the larger contact
 * cards where the design shows a tall rectangular photo.
 */
export default function PersonPhoto({ name = '', src = '', alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    const initials = name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase()

    return (
      <div
        aria-hidden="true"
        className={`grid place-items-center bg-surface-page text-2xl font-bold text-ink-light dark:bg-night-soft ${className}`}
      >
        {initials || '?'}
      </div>
    )
  }

  return (
    <img
      src={src || `https://i.pravatar.cc/600?u=${encodeURIComponent(name)}`}
      alt={alt || (name ? `${name}'s photo` : 'Profile photo')}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}
