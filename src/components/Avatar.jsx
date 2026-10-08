import { useState } from 'react'

const TINTS = ['#4880FF', '#00B69B', '#FFA756', '#E93CAC', '#6226EF', '#FF5B29']

/**
 * Person photo, seeded by name so it stays stable across renders. Falls
 * back to an initials badge if the photo fails to load (e.g. offline).
 */
export default function Avatar({ name = '', src = '', size = 40, rounded = 'full', className = '' }) {
  const [failed, setFailed] = useState(false)

  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  const tint = TINTS[name.length % TINTS.length]
  const shapeClass = rounded === 'full' ? 'rounded-full' : 'rounded-lg'

  if (failed) {
    return (
      <span
        aria-hidden="true"
        style={{ width: size, height: size, backgroundColor: `${tint}22`, color: tint, fontSize: size / 2.6 }}
        className={`inline-grid shrink-0 place-items-center font-bold ${shapeClass} ${className}`}
      >
        {initials || '?'}
      </span>
    )
  }

  return (
    <img
      src={src || `https://i.pravatar.cc/${size * 2}?u=${encodeURIComponent(name)}`}
      alt={name ? `${name}'s photo` : 'Profile photo'}
      width={size}
      height={size}
      onError={() => setFailed(true)}
      style={{ width: size, height: size }}
      className={`inline-block shrink-0 object-cover ${shapeClass} ${className}`}
    />
  )
}
