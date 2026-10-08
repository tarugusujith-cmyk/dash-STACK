import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

/**
 * Single switch for the whole app. It only talks to the theme context,
 * so no component has to keep its own copy of the theme.
 */
export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`grid h-10 w-10 place-items-center rounded-full border border-surface-line
        text-ink-muted transition-colors hover:border-primary hover:text-primary
        dark:border-night-line dark:text-ink-light dark:hover:text-primary ${className}`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
