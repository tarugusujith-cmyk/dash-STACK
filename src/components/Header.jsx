import { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Bell, ChevronDown, KeyRound, LogOut, Menu, Search, Settings, UserCog, History } from 'lucide-react'
import Avatar from './Avatar.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import useClickOutside from '../hooks/useClickOutside.js'
import { languages, notifications } from '../data/mockData.js'

export default function Header({ onMenuClick }) {
  const navigate = useNavigate()
  const [openMenu, setOpenMenu] = useState(null)
  const [language, setLanguage] = useState(languages[0])
  const [query, setQuery] = useState('')

  const close = useCallback(() => setOpenMenu(null), [])
  const menuRef = useClickOutside(close)

  const toggleMenu = (name) => setOpenMenu((current) => (current === name ? null : name))

  const handleSearch = (event) => {
    event.preventDefault()
    if (query.trim()) navigate(`/products?q=${encodeURIComponent(query.trim())}`)
  }

  const panelClass =
    'absolute right-0 top-12 z-50 w-64 rounded-xl border border-surface-line bg-white p-2 shadow-pop dark:border-night-line dark:bg-night-card'

  return (
    <header className="sticky top-0 z-20 border-b border-surface-line bg-white px-4 py-3 dark:border-night-line dark:bg-night-card sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Toggle navigation menu"
          className="grid h-10 w-10 place-items-center rounded-lg text-ink-muted hover:bg-surface-page dark:text-ink-light dark:hover:bg-night-soft"
        >
          <Menu size={20} />
        </button>

        <form onSubmit={handleSearch} className="hidden flex-1 md:block">
          <label htmlFor="global-search" className="sr-only">
            Search
          </label>
          <div className="relative max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-light" />
            <input
              id="global-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              className="w-full rounded-full border border-surface-line bg-surface-page py-2.5 pl-11 pr-4 text-sm
                placeholder:text-ink-light focus:border-primary focus:outline-none
                dark:border-night-line dark:bg-night-soft dark:text-white"
            />
          </div>
        </form>

        <div className="ml-auto flex items-center gap-2 sm:gap-4" ref={menuRef}>
          <ThemeToggle />

          {/* Notifications */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu('notifications')}
              aria-label="Notifications"
              aria-expanded={openMenu === 'notifications'}
              className="relative grid h-10 w-10 place-items-center rounded-full text-primary hover:bg-surface-page dark:hover:bg-night-soft"
            >
              <Bell size={20} className="fill-primary/15" />
              <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-[#F93C65]" />
              <span className="absolute right-1 top-1 grid h-4 w-4 place-items-center rounded-full bg-[#F93C65] text-[10px] font-bold text-white">
                6
              </span>
            </button>

            {openMenu === 'notifications' && (
              <div className={`${panelClass} w-72`}>
                <p className="px-3 py-2 text-sm font-bold text-ink dark:text-white">Notification</p>
                <ul>
                  {notifications.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={close}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-surface-page dark:hover:bg-night-soft"
                      >
                        <span
                          style={{ backgroundColor: item.color }}
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold text-white"
                        >
                          {item.title[0]}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-ink dark:text-white">{item.title}</span>
                          <span className="block text-xs text-ink-light">{item.note}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/"
                  onClick={close}
                  className="block px-3 py-2 text-xs font-semibold text-ink-muted hover:text-primary dark:text-ink-light"
                >
                  See all notification
                </Link>
              </div>
            )}
          </div>

          {/* Language */}
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => toggleMenu('language')}
              aria-expanded={openMenu === 'language'}
              className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-ink-muted hover:bg-surface-page dark:text-ink-light dark:hover:bg-night-soft"
            >
              <img
                src={`https://flagcdn.com/24x18/${language.countryCode}.png`}
                alt={`${language.label} flag`}
                width={22}
                height={16}
                className="rounded-[2px] object-cover"
              />
              <span className="hidden lg:inline">{language.label}</span>
              <ChevronDown size={16} />
            </button>

            {openMenu === 'language' && (
              <div className={panelClass}>
                <p className="px-3 py-2 text-sm font-semibold text-ink dark:text-white">Select Language</p>
                {languages.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setLanguage(item)
                      close()
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-surface-page dark:hover:bg-night-soft"
                  >
                    <img
                      src={`https://flagcdn.com/24x18/${item.countryCode}.png`}
                      alt={`${item.label} flag`}
                      width={22}
                      height={16}
                      className="rounded-[2px] object-cover"
                    />
                    <span className="flex-1 text-left text-ink dark:text-white">{item.label}</span>
                    {language.id === item.id && <span className="text-primary">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu('profile')}
              aria-expanded={openMenu === 'profile'}
              className="flex items-center gap-2 rounded-lg px-1 py-1 hover:bg-surface-page dark:hover:bg-night-soft"
            >
              <Avatar name="Moni Roy" size={40} />
              <span className="hidden text-left sm:block">
                <span className="block text-sm font-bold text-ink dark:text-white">Moni Roy</span>
                <span className="block text-xs text-ink-light">Admin</span>
              </span>
              <ChevronDown size={16} className="text-ink-muted" />
            </button>

            {openMenu === 'profile' && (
              <div className={panelClass}>
                <Link to="/settings" onClick={close} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink hover:bg-surface-page dark:text-white dark:hover:bg-night-soft">
                  <UserCog size={16} className="text-primary" /> Manage Account
                </Link>
                <Link to="/settings" onClick={close} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink hover:bg-surface-page dark:text-white dark:hover:bg-night-soft">
                  <KeyRound size={16} className="text-[#E93CAC]" /> Change Password
                </Link>
                <Link to="/orders" onClick={close} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink hover:bg-surface-page dark:text-white dark:hover:bg-night-soft">
                  <History size={16} className="text-[#00B69B]" /> Activity Log
                </Link>
                <Link to="/settings" onClick={close} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-ink hover:bg-surface-page dark:text-white dark:hover:bg-night-soft">
                  <Settings size={16} className="text-ink-muted" /> Settings
                </Link>
                <Link to="/login" onClick={close} className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#EF3826] hover:bg-surface-page dark:hover:bg-night-soft">
                  <LogOut size={16} /> Log out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search collapses under the bar on small screens */}
      <form onSubmit={handleSearch} className="mt-3 md:hidden">
        <label htmlFor="global-search-mobile" className="sr-only">Search</label>
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-light" />
          <input
            id="global-search-mobile"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            className="w-full rounded-full border border-surface-line bg-surface-page py-2.5 pl-11 pr-4 text-sm
              placeholder:text-ink-light focus:border-primary focus:outline-none
              dark:border-night-line dark:bg-night-soft dark:text-white"
          />
        </div>
      </form>
    </header>
  )
}
