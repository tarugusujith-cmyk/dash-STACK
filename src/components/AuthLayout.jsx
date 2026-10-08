import ThemeToggle from './ThemeToggle.jsx'

/**
 * Full-bleed blue canvas with the soft blob shapes from the Figma
 * login, sign up and 404 screens.
 */
export default function AuthLayout({ children }) {
  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-primary p-4 dark:bg-night-page">
      <svg
        aria-hidden="true"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full text-white/10"
      >
        <path fill="currentColor" d="M120 0c90 70 40 170-30 230S20 420 110 500 320 600 250 600H0V0h120Z" />
        <path fill="currentColor" d="M800 80c-120 20-190 120-150 230s150 140 90 250l-80 40h140V80Z" />
        <circle fill="currentColor" cx="420" cy="70" r="120" />
      </svg>

      <div className="absolute right-4 top-4 z-10">
        <ThemeToggle className="border-white/40 text-white hover:border-white hover:text-white" />
      </div>

      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-8 shadow-pop dark:bg-night-card sm:p-10">
        {children}
      </div>
    </div>
  )
}
