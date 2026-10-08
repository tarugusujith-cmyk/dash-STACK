const STYLES = {
  Completed: { color: '#00B69B', bg: 'rgba(0, 182, 155, 0.2)' },
  Delivered: { color: '#00B69B', bg: 'rgba(0, 182, 155, 0.2)' },
  Processing: { color: '#6226EF', bg: 'rgba(98, 38, 239, 0.2)' },
  Rejected: { color: '#EF3826', bg: 'rgba(239, 56, 38, 0.2)' },
  'On Hold': { color: '#FFA756', bg: 'rgba(255, 167, 86, 0.2)' },
  'In Transit': { color: '#BA29FF', bg: 'rgba(186, 41, 255, 0.2)' },
  Pending: { color: '#FFA756', bg: 'rgba(255, 167, 86, 0.2)' },
}

export default function StatusBadge({ status }) {
  const style = STYLES[status] || { color: '#606A72', bg: 'rgba(96, 106, 114, 0.15)' }

  return (
    <span
      style={{ color: style.color, backgroundColor: style.bg }}
      className="inline-flex min-w-[90px] justify-center rounded-md px-3 py-1 text-xs font-bold"
    >
      {status}
    </span>
  )
}
