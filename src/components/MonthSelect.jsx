const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function MonthSelect({ value, onChange, label = 'Select month' }) {
  return (
    <label className="inline-flex items-center">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-lg border border-surface-line bg-white px-3 py-2 text-sm font-semibold text-ink-muted
          focus:border-primary focus:outline-none dark:border-night-line dark:bg-night-soft dark:text-ink-light"
      >
        {MONTHS.map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
    </label>
  )
}
