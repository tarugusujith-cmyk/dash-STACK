import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PersonPhoto from '../components/PersonPhoto.jsx'
import PageTitle from '../components/PageTitle.jsx'
import { calendarEvents } from '../data/mockData.js'

const WEEK_DAYS = ['MON', 'TUE', 'WED', 'THE', 'FRI', 'SAT', 'SUN']

// October 2019 starts on a Tuesday, so the grid opens with 30 September.
const GRID = [
  [{ day: 25, muted: true }, { day: 26, muted: true }, { day: 27, muted: true }, { day: 28, muted: true }, { day: 29, muted: true }, { day: 30, muted: true }, { day: 1 }],
  [{ day: 2 }, { day: 3 }, { day: 4 }, { day: 5 }, { day: 6 }, { day: 7 }, { day: 8 }],
  [{ day: 9 }, { day: 10 }, { day: 11 }, { day: 12 }, { day: 13 }, { day: 14 }, { day: 15 }],
  [{ day: 16 }, { day: 17 }, { day: 18 }, { day: 19 }, { day: 20 }, { day: 21 }, { day: 22 }],
  [{ day: 23 }, { day: 24 }, { day: 25 }, { day: 26 }, { day: 27 }, { day: 28 }, { day: 29 }],
  [{ day: 30 }, { day: 31 }, { day: 1, muted: true }, { day: 2, muted: true }, { day: 3, muted: true }, { day: 4, muted: true }, { day: 5, muted: true }],
]

const VIEWS = ['Day', 'Week', 'Month']

export default function Calendar() {
  const [view, setView] = useState('Month')
  const [activeEvent, setActiveEvent] = useState(null)
  const [showAllEvents, setShowAllEvents] = useState(false)

  const PREVIEW_COUNT = 2
  const visibleEvents = showAllEvents ? calendarEvents : calendarEvents.slice(0, PREVIEW_COUNT)

  return (
    <>
      <PageTitle>Calender</PageTitle>

      <div className="grid gap-5 lg:grid-cols-[300px,1fr]">
        <aside className="panel h-max p-4">
          <Link to="/calendar/new-event" className="btn-primary w-full">+ Add New Event</Link>

          <h2 className="mb-4 mt-6 text-base font-bold text-ink dark:text-white">You are going to</h2>
          <ul className="space-y-5">
            {visibleEvents.map((event) => (
              <li key={event.id} className="flex gap-3">
                <PersonPhoto name={`event-${event.id}`} src={event.image} className="h-10 w-10 shrink-0 rounded-full" />
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink dark:text-white">{event.title}</p>
                  <p className="mt-1 text-xs text-ink-muted dark:text-ink-light">{event.when}</p>
                  <p className="text-xs text-ink-muted dark:text-ink-light">{event.address}</p>
                  <p className="text-xs text-ink-muted dark:text-ink-light">{event.place}</p>
                  <div className="mt-2 flex items-center">
                    {[0, 1, 2].map((index) => (
                      <PersonPhoto
                        key={index}
                        name={`event-${event.id}-guest-${index}`}
                        className="-ml-2 h-6 w-6 rounded-full border-2 border-white first:ml-0 dark:border-night-card"
                      />
                    ))}
                    <span className="-ml-2 grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-primary-soft text-[10px] font-bold text-primary dark:border-night-card dark:bg-night-soft">
                      {event.guests}+
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {calendarEvents.length > PREVIEW_COUNT && (
            <button
              type="button"
              onClick={() => setShowAllEvents((prev) => !prev)}
              className="btn-ghost mx-auto mt-6 flex"
            >
              {showAllEvents ? 'See Less' : 'See More'}
            </button>
          )}
        </aside>

        <section className="panel p-4">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <button type="button" className="text-sm font-semibold text-ink-muted dark:text-ink-light">Today</button>
            <div className="flex items-center gap-3">
              <button type="button" aria-label="Previous month" className="text-ink-muted"><ChevronLeft size={20} /></button>
              <h2 className="text-lg font-bold text-ink dark:text-white">October 2019</h2>
              <button type="button" aria-label="Next month" className="text-ink-muted"><ChevronRight size={20} /></button>
            </div>
            <div className="flex overflow-hidden rounded-lg border border-surface-line dark:border-night-line">
              {VIEWS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setView(item)}
                  className={`px-4 py-2 text-sm font-semibold ${
                    view === item ? 'bg-primary text-white' : 'text-ink-muted dark:text-ink-light'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="scroll-slim overflow-x-auto">
            <div className="min-w-[700px]">
              <div className="grid grid-cols-7 border-b border-surface-line pb-2 text-center text-xs font-bold text-ink-muted dark:border-night-line dark:text-ink-light">
                {WEEK_DAYS.map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>

              <div className="grid grid-cols-7">
                {GRID.flat().map((cell, index) => {
                  const event = calendarEvents.find((item) => !cell.muted && item.day === cell.day)
                  return (
                    <div
                      key={index}
                      className={`min-h-[90px] border-b border-r border-surface-line p-2 dark:border-night-line ${
                        cell.muted ? 'bg-surface-page/60 dark:bg-night-soft/40' : ''
                      }`}
                    >
                      <span className={`text-sm font-semibold ${cell.muted ? 'text-ink-light' : 'text-ink dark:text-white'}`}>
                        {cell.day}
                      </span>
                      {event && (
                        <button
                          type="button"
                          onClick={() => setActiveEvent(event)}
                          style={{ borderLeftColor: event.color, backgroundColor: `${event.color}1A`, color: event.color }}
                          className="mt-2 block w-full truncate rounded-r border-l-4 px-2 py-1 text-left text-[11px] font-bold"
                        >
                          {event.title}
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      {activeEvent && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" role="dialog" aria-modal="true">
          <div className="panel w-full max-w-sm p-5">
            <PersonPhoto name={`event-${activeEvent.id}`} src={activeEvent.image} className="h-40 w-full rounded-lg" />
            <h2 className="mt-4 text-lg font-bold text-ink dark:text-white">{activeEvent.title}</h2>
            <p className="text-sm text-ink-muted dark:text-ink-light">{activeEvent.host}</p>
            <p className="mt-2 text-sm text-ink-muted dark:text-ink-light">{activeEvent.when}</p>
            <p className="text-sm text-ink-muted dark:text-ink-light">{activeEvent.address}</p>
            <p className="mt-3 text-sm font-bold text-primary">+{activeEvent.guests} going</p>
            <button type="button" onClick={() => setActiveEvent(null)} className="btn-primary mt-5 w-full">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
