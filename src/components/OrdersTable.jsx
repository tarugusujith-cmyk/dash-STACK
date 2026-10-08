import StatusBadge from './StatusBadge.jsx'

export default function OrdersTable({ rows, dateOverride }) {
  return (
    <div className="scroll-slim overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-surface-line text-left text-ink-muted dark:border-night-line dark:text-ink-light">
            <th className="px-4 py-4 font-bold">ID</th>
            <th className="px-4 py-4 font-bold">NAME</th>
            <th className="px-4 py-4 font-bold">ADDRESS</th>
            <th className="px-4 py-4 font-bold">DATE</th>
            <th className="px-4 py-4 font-bold">TYPE</th>
            <th className="px-4 py-4 font-bold">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((order) => (
            <tr key={order.id} className="border-b border-surface-line last:border-0 dark:border-night-line">
              <td className="px-4 py-4 text-ink dark:text-white">{order.id}</td>
              <td className="px-4 py-4 text-ink dark:text-white">{order.name}</td>
              <td className="px-4 py-4 text-ink-muted dark:text-ink-light">{order.address}</td>
              <td className="px-4 py-4 text-ink-muted dark:text-ink-light">{dateOverride || order.date}</td>
              <td className="px-4 py-4 text-ink-muted dark:text-ink-light">{order.type}</td>
              <td className="px-4 py-4"><StatusBadge status={order.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>

      {rows.length === 0 && (
        <p className="py-10 text-center text-sm text-ink-muted dark:text-ink-light">
          No orders match these filters. Reset the filter to see everything again.
        </p>
      )}
    </div>
  )
}
