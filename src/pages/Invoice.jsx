import { useState } from 'react'
import { Printer, Send } from 'lucide-react'
import PageTitle from '../components/PageTitle.jsx'
import { invoice } from '../data/mockData.js'

export default function Invoice() {
  const total = invoice.lines.reduce((sum, line) => sum + line.total, 0)
  const [sent, setSent] = useState(false)

  const handleSend = () => {
    setSent(true)
    window.setTimeout(() => setSent(false), 4000)
  }

  return (
    <>
      <PageTitle>Invoice</PageTitle>

      <section className="panel p-6 sm:p-10">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-sm text-ink-muted dark:text-ink-light">Invoice From :</p>
            <p className="mt-2 text-base font-bold text-ink dark:text-white">{invoice.from.name}</p>
            <p className="text-sm text-ink-muted dark:text-ink-light">{invoice.from.address}</p>
          </div>
          <div>
            <p className="text-sm text-ink-muted dark:text-ink-light">Invoice To :</p>
            <p className="mt-2 text-base font-bold text-ink dark:text-white">{invoice.to.name}</p>
            <p className="text-sm text-ink-muted dark:text-ink-light">{invoice.to.address}</p>
          </div>
          <div className="sm:text-right">
            <p className="text-sm text-ink dark:text-white">Invoice Date : {invoice.date}</p>
            <p className="mt-2 text-sm text-ink dark:text-white">Due Date : {invoice.dueDate}</p>
          </div>
        </div>

        <div className="scroll-slim mt-10 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-sm">
            <thead>
              <tr className="rounded-lg bg-surface-page text-ink-muted dark:bg-night-soft dark:text-ink-light">
                <th className="rounded-l-lg px-4 py-3 text-left font-bold">Serial No.</th>
                <th className="px-4 py-3 text-left font-bold">Description</th>
                <th className="px-4 py-3 text-right font-bold">Quantity</th>
                <th className="px-4 py-3 text-right font-bold">Base Cost</th>
                <th className="rounded-r-lg px-4 py-3 text-right font-bold">Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {invoice.lines.map((line) => (
                <tr key={line.id} className="border-b border-surface-line last:border-0 dark:border-night-line">
                  <td className="px-4 py-4 text-ink dark:text-white">{line.id}</td>
                  <td className="px-4 py-4 text-ink dark:text-white">{line.description}</td>
                  <td className="px-4 py-4 text-right text-ink-muted dark:text-ink-light">{line.quantity}</td>
                  <td className="px-4 py-4 text-right text-ink-muted dark:text-ink-light">${line.base}</td>
                  <td className="px-4 py-4 text-right font-semibold text-ink dark:text-white">${line.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-right text-base font-bold text-ink dark:text-white">
          Total &nbsp;=&nbsp; ${total.toLocaleString()}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-end gap-3">
          {sent && (
            <p className="text-sm font-semibold text-status-completed">
              Invoice sent to {invoice.to.name}.
            </p>
          )}
          <button type="button" onClick={() => window.print()} className="btn-ghost h-12 w-12 p-0" aria-label="Print invoice">
            <Printer size={18} />
          </button>
          <button type="button" onClick={handleSend} className="btn-primary px-8 py-3">
            Send <Send size={16} />
          </button>
        </div>
      </section>
    </>
  )
}
