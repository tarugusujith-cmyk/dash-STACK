import { useState } from 'react'
import {
  Area, AreaChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import PhotoBox from '../components/PhotoBox.jsx'
import MonthSelect from '../components/MonthSelect.jsx'
import PageTitle from '../components/PageTitle.jsx'
import StatCard from '../components/StatCard.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import { useTheme } from '../context/ThemeContext.jsx'
import {
  customerSplit, deals, featuredProduct, revenueData,
  salesAnalytics, salesDetails, summaryStats,
} from '../data/mockData.js'

function Panel({ title, action, children, className = '' }) {
  return (
    <section className={`panel p-5 ${className}`}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-ink dark:text-white">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  )
}

export default function Dashboard() {
  const { isDark } = useTheme()
  const [salesMonth, setSalesMonth] = useState('October')
  const [dealsMonth, setDealsMonth] = useState('October')
  const [revenueMonth, setRevenueMonth] = useState('October')

  const gridColor = isDark ? '#313D4F' : '#F0F1F3'
  const axisColor = isDark ? '#9CA3AF' : '#606A72'
  const tooltipStyle = {
    backgroundColor: isDark ? '#273142' : '#FFFFFF',
    border: `1px solid ${isDark ? '#313D4F' : '#E0E0E0'}`,
    borderRadius: 8,
    color: isDark ? '#FFFFFF' : '#202224',
    fontSize: 12,
  }

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {summaryStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      <Panel
        title="Sales Details"
        className="mt-6"
        action={<MonthSelect value={salesMonth} onChange={setSalesMonth} label="Sales month" />}
      >
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={salesDetails} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
              <defs>
                <linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4880FF" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#4880FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke={gridColor} />
              <XAxis dataKey="x" tickLine={false} axisLine={false} tick={{ fill: axisColor, fontSize: 12 }} />
              <YAxis
                tickLine={false}
                axisLine={false}
                domain={[0, 100]}
                ticks={[20, 40, 60, 80, 100]}
                tickFormatter={(value) => `${value}%`}
                tick={{ fill: axisColor, fontSize: 12 }}
              />
              <Tooltip contentStyle={tooltipStyle} formatter={(value) => [`${value}%`, 'Sales']} />
              <Area
                type="linear"
                dataKey="value"
                stroke="#4880FF"
                strokeWidth={2}
                fill="url(#salesFill)"
                dot={{ r: 3, fill: '#4880FF' }}
                activeDot={{ r: 5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Panel>

      <Panel
        title="Deals Details"
        className="mt-6"
        action={<MonthSelect value={dealsMonth} onChange={setDealsMonth} label="Deals month" />}
      >
        <div className="scroll-slim overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="rounded-lg bg-surface-page text-left text-ink-muted dark:bg-night-soft dark:text-ink-light">
                <th className="rounded-l-lg px-4 py-3 font-bold">Product Name</th>
                <th className="px-4 py-3 font-bold">Location</th>
                <th className="px-4 py-3 font-bold">Date - Time</th>
                <th className="px-4 py-3 font-bold">Piece</th>
                <th className="px-4 py-3 font-bold">Amount</th>
                <th className="rounded-r-lg px-4 py-3 font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              {deals.map((deal) => (
                <tr key={deal.id} className="border-b border-surface-line last:border-0 dark:border-night-line">
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-3 font-semibold text-ink dark:text-white">
                      <PhotoBox alt={deal.product} className="h-8 w-8 rounded-lg" />
                      {deal.product}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-ink-muted dark:text-ink-light">{deal.location}</td>
                  <td className="px-4 py-4 text-ink-muted dark:text-ink-light">{deal.datetime}</td>
                  <td className="px-4 py-4 text-ink-muted dark:text-ink-light">{deal.piece}</td>
                  <td className="px-4 py-4 font-semibold text-ink dark:text-white">{deal.amount}</td>
                  <td className="px-4 py-4"><StatusBadge status={deal.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <Panel
        title="Revenue"
        className="mt-6"
        action={<MonthSelect value={revenueMonth} onChange={setRevenueMonth} label="Revenue month" />}
      >
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -18, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke={gridColor} />
              <XAxis dataKey="x" tickLine={false} axisLine={false} tick={{ fill: axisColor, fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} domain={[0, 100]} tick={{ fill: axisColor, fontSize: 12 }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="profit" stroke="#E93CFF" fill="#E93CFF" fillOpacity={0.55} strokeWidth={0} name="Profit" />
              <Area type="monotone" dataKey="sales" stroke="#FF4B21" fill="#FF4B21" fillOpacity={0.8} strokeWidth={0} name="Sales" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex items-center justify-center gap-8 text-sm font-semibold">
          <span className="flex items-center gap-2 text-ink dark:text-white">
            <span className="h-3 w-3 rounded-full bg-[#FF4B21]" /> Sales
          </span>
          <span className="flex items-center gap-2 text-ink dark:text-white">
            <span className="h-3 w-3 rounded-full bg-[#E93CFF]" /> Profit
          </span>
        </div>
      </Panel>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <Panel title="Customers">
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={customerSplit}
                  dataKey="value"
                  innerRadius="68%"
                  outerRadius="88%"
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={0}
                >
                  {customerSplit.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-start justify-center gap-10">
            {customerSplit.map((entry) => (
              <div key={entry.name} className="text-center">
                <p className="text-2xl font-bold text-ink dark:text-white">
                  {entry.value.toLocaleString()}
                </p>
                <p className="mt-1 flex items-center justify-center gap-2 text-xs font-semibold text-ink-muted dark:text-ink-light">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                  {entry.name}
                </p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Featured Product">
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Previous product" className="btn-ghost h-9 w-9 rounded-full p-0">
              <ChevronLeft size={18} />
            </button>
            <PhotoBox alt={featuredProduct.name} className="h-40 flex-1 rounded-lg" />
            <button type="button" aria-label="Next product" className="btn-ghost h-9 w-9 rounded-full p-0">
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="mt-5 text-center">
            <p className="text-base font-bold text-ink dark:text-white">{featuredProduct.name}</p>
            <p className="mt-1 text-sm font-bold text-primary">{featuredProduct.price}</p>
          </div>
        </Panel>

        <Panel title="Sales Analytics">
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesAnalytics} margin={{ top: 10, right: 10, left: -22, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke={gridColor} />
                <XAxis dataKey="year" tickLine={false} axisLine={false} tick={{ fill: axisColor, fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} tick={{ fill: axisColor, fontSize: 12 }} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="current" name="This period" stroke="#2E5BFF" strokeWidth={3} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="previous" name="Last period" stroke="#0A6E4B" strokeWidth={3} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>
    </>
  )
}
