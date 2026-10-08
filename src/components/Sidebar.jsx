import { NavLink } from 'react-router-dom'
import {
  CalendarDays, ClipboardList, Contact2, CreditCard, Gauge, Heart, Inbox,
  LayoutGrid, ListChecks, LogOut, Package, PieChart, Settings, Table2, User, X,
} from 'lucide-react'

const mainLinks = [
  { to: '/', label: 'Dashboard', icon: Gauge, end: true },
  { to: '/products', label: 'Products', icon: LayoutGrid },
  { to: '/favorites', label: 'Favorites', icon: Heart },
  { to: '/inbox', label: 'Inbox', icon: Inbox },
  { to: '/orders', label: 'Order Lists', icon: ListChecks },
  { to: '/product-stock', label: 'Product Stock', icon: Package },
]

const pageLinks = [
  { to: '/pricing', label: 'Pricing', icon: CreditCard },
  { to: '/calendar', label: 'Calender', icon: CalendarDays },
  { to: '/todo', label: 'To-Do', icon: ClipboardList },
  { to: '/contact', label: 'Contact', icon: Contact2 },
  { to: '/invoice', label: 'Invoice', icon: CreditCard },
  { to: '/ui-elements', label: 'UI Elements', icon: PieChart },
  { to: '/team', label: 'Team', icon: User },
  { to: '/table', label: 'Table', icon: Table2 },
]

const bottomLinks = [
  { to: '/settings', label: 'Settings', icon: Settings },
  { to: '/login', label: 'Logout', icon: LogOut },
]

function SidebarLink({ item, onNavigate }) {
  const Icon = item.icon

  return (
    <NavLink
      to={item.to}
      end={item.end}
      onClick={onNavigate}
      className={({ isActive }) =>
        `relative flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
          isActive
            ? 'bg-primary text-white'
            : 'text-ink-muted hover:bg-primary-soft hover:text-primary dark:text-ink-light dark:hover:bg-night-soft'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <span className="absolute -left-4 top-1/2 h-9 w-1 -translate-y-1/2 rounded-r bg-primary" />
          )}
          <Icon size={18} />
          <span>{item.label}</span>
        </>
      )}
    </NavLink>
  )
}

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Dimmed backdrop for the mobile drawer */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity lg:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        className={`scroll-slim fixed inset-y-0 left-0 z-40 w-64 overflow-y-auto border-r border-surface-line
          bg-white px-4 pb-8 pt-6 transition-transform duration-200 dark:border-night-line dark:bg-night-card
          lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="mb-8 flex items-center justify-between px-2">
          <NavLink to="/" onClick={onClose} className="text-xl font-extrabold tracking-tight">
            <span className="text-primary">Dash</span>
            <span className="text-ink dark:text-white">Stack</span>
          </NavLink>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="text-ink-muted lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="space-y-1">
          {mainLinks.map((item) => (
            <SidebarLink key={item.to} item={item} onNavigate={onClose} />
          ))}
        </nav>

        <p className="mb-2 mt-7 px-4 text-xs font-semibold text-ink-light">PAGES</p>
        <nav className="space-y-1">
          {pageLinks.map((item) => (
            <SidebarLink key={item.to} item={item} onNavigate={onClose} />
          ))}
        </nav>

        <div className="mt-7 space-y-1 border-t border-surface-line pt-5 dark:border-night-line">
          {bottomLinks.map((item) => (
            <SidebarLink key={item.to} item={item} onNavigate={onClose} />
          ))}
        </div>
      </aside>
    </>
  )
}
