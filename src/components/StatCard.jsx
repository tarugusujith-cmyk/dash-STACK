import { Box, LineChart, TimerReset, TrendingDown, TrendingUp, Users } from 'lucide-react'

const ICONS = { users: Users, box: Box, chart: LineChart, clock: TimerReset }

export default function StatCard({ stat }) {
  const Icon = ICONS[stat.icon] || Users
  const TrendIcon = stat.direction === 'up' ? TrendingUp : TrendingDown
  const trendColor = stat.direction === 'up' ? 'text-[#00B69B]' : 'text-[#F93C65]'

  return (
    <article className="panel p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-ink-muted dark:text-ink-light">{stat.label}</p>
          <p className="mt-3 text-2xl font-bold text-ink dark:text-white sm:text-3xl">{stat.value}</p>
        </div>
        <span
          style={{ backgroundColor: `${stat.tint}33`, color: stat.tint }}
          className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl"
        >
          <Icon size={24} />
        </span>
      </div>

      <p className="mt-5 flex items-center gap-2 text-sm">
        <TrendIcon size={18} className={trendColor} />
        <span className={`font-bold ${trendColor}`}>{stat.change}</span>
        <span className="text-ink-muted dark:text-ink-light">{stat.note}</span>
      </p>
    </article>
  )
}
