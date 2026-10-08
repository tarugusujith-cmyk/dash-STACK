import { useState } from 'react'
import { Search } from 'lucide-react'
import PageTitle from '../components/PageTitle.jsx'
import Pagination from '../components/Pagination.jsx'
import StockTable from '../components/StockTable.jsx'
import { productStock } from '../data/mockData.js'

export default function ProductStock() {
  const [search, setSearch] = useState('')
  const [rows, setRows] = useState(productStock)
  const [page, setPage] = useState(1)
  const PAGE_SIZE = 4

  const visibleRows = rows.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  )

  const totalPages = Math.max(1, Math.ceil(visibleRows.length / PAGE_SIZE))
  const clampedPage = Math.min(page, totalPages)
  const pagedRows = visibleRows.slice((clampedPage - 1) * PAGE_SIZE, clampedPage * PAGE_SIZE)
  const rangeStart = visibleRows.length === 0 ? 0 : (clampedPage - 1) * PAGE_SIZE + 1
  const rangeEnd = Math.min(clampedPage * PAGE_SIZE, visibleRows.length)

  const handleDelete = (item) => setRows((current) => current.filter((row) => row.id !== item.id))

  return (
    <>
      <PageTitle
        action={
          <div className="relative w-full sm:w-72">
            <label htmlFor="stock-search" className="sr-only">Search product name</label>
            <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-light" />
            <input
              id="stock-search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value)
                setPage(1)
              }}
              placeholder="Search product name"
              className="w-full rounded-full border border-surface-line bg-white py-2.5 pl-11 pr-4 text-sm
                placeholder:text-ink-light focus:border-primary focus:outline-none
                dark:border-night-line dark:bg-night-card dark:text-white"
            />
          </div>
        }
      >
        Product Stock
      </PageTitle>

      <section className="panel p-0">
        <StockTable rows={pagedRows} onDelete={handleDelete} />
      </section>

      <Pagination
        label={`Showing ${String(rangeStart).padStart(2, '0')}-${String(rangeEnd).padStart(2, '0')} of ${visibleRows.length}`}
        prevLabel=""
        nextLabel=""
        onPrev={() => setPage((current) => Math.max(1, current - 1))}
        onNext={() => setPage((current) => Math.min(totalPages, current + 1))}
        disabledPrev={clampedPage === 1}
        disabledNext={clampedPage >= totalPages}
      />
    </>
  )
}
