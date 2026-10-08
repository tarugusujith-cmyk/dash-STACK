import { useEffect, useRef } from 'react'

/** Closes dropdowns when the user clicks away or presses Escape. */
export default function useClickOutside(onClose) {
  const ref = useRef(null)

  useEffect(() => {
    function handlePointer(event) {
      if (ref.current && !ref.current.contains(event.target)) onClose()
    }
    function handleKey(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('mousedown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return ref
}
