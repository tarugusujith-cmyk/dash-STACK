import { useCallback, useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Filter, RotateCcw } from 'lucide-react'
import OrdersTable from '../components/OrdersTable.jsx'
import PageTitle from '../components/PageTitle.jsx'
import useClickOutside from '../hooks/useClickOutside.js'
import { orderStatuses, orderTypes, orders } from '../data/mockData.js'

const WEEK_DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
// February 2019 grid exactly as drawn in the Figma calendar popover.
const FEB_2019 = [
  [27, 28, 29, 30, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31],
]

// The design maps each order type chip onto one of the short table types.
const TYPE_MAP = {
  'Health & Medicine': ['Medicine'],
  'Book & Stationary': ['Book'],
  'Services & Industry': [],
  'Fashion & Beauty': [],
  'Home & Living': ['Electric'],
  Electronics: ['Electric'],
  'Mobile & Phone': ['Mobile'],
  Accessories: ['Watch'],
}

function FilterButton({ label, isOpen, onClick, muted }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-sm font-semibold sm:w-auto ${
        muted ? 'text-ink-light' : 'text-ink dark:text-white'
      }`}
    >
      {label}
      <ChevronDown size={16} />
    </button>
  )
}

export default function OrderLists() {
  const [openFilter, setOpenFilter] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [draftDay, setDraftDay] = useState(14)
  const [selectedTypes, setSelectedTypes] = useState([])
  const [draftTypes, setDraftTypes] = useState([])
  const [selectedStatuses, setSelectedStatuses] = useState([])
  const [draftStatuses, setDraftStatuses] = useState([])
  const [page, setPage] = useState(1)

  const close = useCallback(() => setOpenFilter(null), [])
  const filterRef = useClickOutside(close)

  const toggleFilter = (name) => setOpenFilter((current) => (current === name ? null : name))

  const toggleInDraft = (value, list, setList) =>
    setList(list.includes(value) ? list.filter((item) => item !== value) : [...list, value])

  const resetFilters = () => {
    setSelectedDate(null)
    setSelectedTypes([])
    setSelectedStatuses([])
    setDraftTypes([])
    setDraftStatuses([])
    setOpenFilter(null)
    setPage(1)
  }

  const allowedTypes = selectedTypes.flatMap((type) => TYPE_MAP[type] || [])
  const filteredOrders = orders
    .filter((order) => (allowedTypes.length ? allowedTypes.includes(order.type) : true))
    .filter((order) => (selectedStatuses.length ? selectedStatuses.includes(order.status) : true))

  // The date filter in the prototype re-labels every row with the chosen day.
  const dateFilteredOrders = selectedDate ? filteredOrders.slice(0, 6) : filteredOrders

  const PAGE_SIZE = 5
  const totalPages = Math.max(1, Math.ceil(dateFilteredOrders.length / PAGE_SIZE))
  const clampedPage = Math.min(page, totalPages)
  const visibleOrders = dateFilteredOrders.slice((clampedPage - 1) * PAGE_SIZE, clampedPage * PAGE_SIZE)
  const rangeStart = dateFilteredOrders.length === 0 ? 0 : (clampedPage - 1) * PAGE_SIZE + 1
  const rangeEnd = Math.min(clampedPage * PAGE_SIZE, dateFilteredOrders.length)

  const popoverClass =
    'absolute left-0 top-full z-30 mt-2 w-[320px] rounded-xl border border-surface-line bg-white p-5 shadow-pop dark:border-night-line dark:bg-night-card'

  return (
    <>
      <PageTitle>Order Lists</PageTitle>

      <div
        ref={filterRef}
        className="panel relative mb-5 flex flex-col divide-y divide-surface-line p-0 dark:divide-night-line sm:flex-row sm:items-center sm:divide-x sm:divide-y-0"
      >
        <span className="flex items-center gap-2 px-4 py-3 text-ink-muted dark:text-ink-light">
          <Filter size={18} />
        </span>
        <span className="px-4 py-3 text-sm font-bold text-ink dark:text-white">Filter By</span>

        <div className="relative">
          <FilterButton
            label={selectedDate || 'Date'}
            muted={!selectedDate}
            isOpen={openFilter === 'date'}
            onClick={() => toggleFilter('date')}
          />
          {openFilter === 'date' && (
            <div className={popoverClass}>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-bold text-ink dark:text-white">February 2019</p>
                <span className="flex gap-1 text-ink-muted">
                  <button type="button" aria-label="Previous month" className="btn-ghost h-7 w-7 p-0"><ChevronLeft size={14} /></button>
                  <button type="button" aria-label="Next month" className="btn-ghost h-7 w-7 p-0"><ChevronRight size={14} /></button>
                </span>
              </div>
              <table className="w-full text-center text-sm">
                <thead>
                  <tr className="text-ink-muted dark:text-ink-light">
                    {WEEK_DAYS.map((day, index) => (
                      <th key={`${day}-${index}`} className="pb-2 font-semibold">{day}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {FEB_2019.map((week, weekIndex) => (
                    <tr key={weekIndex}>
                      {week.map((day, dayIndex) => {
                        const isCurrentMonth = !(weekIndex === 0 && day > 20)
                        const isSelected = isCurrentMonth && draftDay === day
                        return (
                          <td key={`${weekIndex}-${dayIndex}`} className="py-1">
                            <button
                              type="button"
                              onClick={() => isCurrentMonth && setDraftDay(day)}
                              className={`grid h-8 w-8 place-items-center rounded-lg ${
                                isSelected
                                  ? 'bg-primary font-bold text-white'
                                  : isCurrentMonth
                                    ? 'text-ink hover:bg-surface-page dark:text-white dark:hover:bg-night-soft'
                                    : 'text-ink-light'
                              }`}
                            >
                              {day}
                            </button>
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3 text-xs text-ink-light">*You can choose multiple date</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedDate(`${String(draftDay).padStart(2, '0')} Feb 2019`)
                  setPage(1)
                  close()
                }}
                className="btn-primary mx-auto mt-4 flex px-8"
              >
                Apply Now
              </button>
            </div>
          )}
        </div>

        <div className="relative">
          <FilterButton
            label="Order Type"
            muted={openFilter === 'type'}
            isOpen={openFilter === 'type'}
            onClick={() => toggleFilter('type')}
          />
          {openFilter === 'type' && (
            <div className={`${popoverClass} w-[420px] max-w-[85vw]`}>
              <p className="mb-4 text-base font-bold text-ink dark:text-white">Select Order Type</p>
              <div className="flex flex-wrap gap-3">
                {orderTypes.map((type) => {
                  const active = draftTypes.includes(type)
                  return (
                    <button
                      key={type}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleInDraft(type, draftTypes, setDraftTypes)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                        active
                          ? 'border-primary bg-primary text-white'
                          : 'border-surface-line text-ink hover:border-primary dark:border-night-line dark:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  )
                })}
              </div>
              <p className="mt-4 text-xs text-ink-light">*You can choose multiple Order type</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedTypes(draftTypes)
                  setPage(1)
                  close()
                }}
                className="btn-primary mx-auto mt-4 flex px-8"
              >
                Apply Now
              </button>
            </div>
          )}
        </div>

        <div className="relative">
          <FilterButton
            label="Order Status"
            muted={openFilter === 'status'}
            isOpen={openFilter === 'status'}
            onClick={() => toggleFilter('status')}
          />
          {openFilter === 'status' && (
            <div className={`${popoverClass} w-[420px] max-w-[85vw]`}>
              <p className="mb-4 text-base font-bold text-ink dark:text-white">Select Order Status</p>
              <div className="flex flex-wrap gap-3">
                {orderStatuses.map((status) => {
                  const active = draftStatuses.includes(status)
                  return (
                    <button
                      key={status}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleInDraft(status, draftStatuses, setDraftStatuses)}
                      className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                        active
                          ? 'border-primary bg-primary text-white'
                          : 'border-surface-line text-ink hover:border-primary dark:border-night-line dark:text-white'
                      }`}
                    >
                      {status}
                    </button>
                  )
                })}
              </div>
              <p className="mt-4 text-xs text-ink-light">*You can choose multiple Order status</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedStatuses(draftStatuses)
                  setPage(1)
                  close()
                }}
                className="btn-primary mx-auto mt-4 flex px-8"
              >
                Apply Now
              </button>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={resetFilters}
          className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-[#EA0234]"
        >
          <RotateCcw size={16} /> Reset Filter
        </button>
      </div>

      <section className="panel p-0">
        <OrdersTable rows={visibleOrders} dateOverride={selectedDate} />
      </section>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink-muted dark:text-ink-light">
          Showing {String(rangeStart).padStart(2, '0')}-{String(rangeEnd).padStart(2, '0')} of {dateFilteredOrders.length}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={clampedPage === 1}
            className="btn-ghost disabled:opacity-40"
          >
            <ChevronLeft size={16} /> {selectedDate ? 'Prev. Date' : 'Previous'}
          </button>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            disabled={clampedPage >= totalPages}
            className="btn-ghost disabled:opacity-40"
          >
            {selectedDate ? 'Next Date' : 'Next'} <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </>
  )
}
