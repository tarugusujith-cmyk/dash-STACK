import { useState } from 'react'
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { Filter } from 'lucide-react'
import PageTitle from '../components/PageTitle.jsx'
import { useTheme } from '../context/ThemeContext.jsx'
import { barChartGroups, donutCharts, pieCharts } from '../data/mockData.js'

const SECTIONS = ['Charts', 'Bar Chart', 'Pie Chart', 'Donut Chart']

/** Turns a plain list of values into the shape recharts needs. */
function toBarData(group) {
  return group.values.map((value, index) => ({
    name: `#${index + 1}`,
    base: group.colors.length > 1 ? Math.round(value * 0.6) : value,
    top: group.colors.length > 1 ? Math.round(value * 0.4) : 0,
  }))
}

export default function UIElements() {
  const { isDark } = useTheme()
  const [section, setSection] = useState('Charts')

  const tooltipStyle = {
    backgroundColor: isDark ? '#273142' : '#FFFFFF',
    border: `1px solid ${isDark ? '#313D4F' : '#E0E0E0'}`,
    borderRadius: 8,
    color: isDark ? '#FFFFFF' : '#202224',
    fontSize: 12,
  }

  const showBar = section === 'Charts' || section === 'Bar Chart'
  const showPie = section === 'Charts' || section === 'Pie Chart'
  const showDonut = section === 'Charts' || section === 'Donut Chart'

  return (
    <>
      <PageTitle
        action={
          <div className="panel flex items-center gap-3 px-4 py-2">
            <Filter size={18} className="text-ink-muted" />
            <span className="text-sm font-bold text-ink dark:text-white">Filter By</span>
            <label htmlFor="chart-filter" className="sr-only">Filter charts</label>
            <select
              id="chart-filter"
              value={section}
              onChange={(event) => setSection(event.target.value)}
              className="bg-transparent text-sm font-semibold text-ink-muted focus:outline-none dark:text-ink-light"
            >
              {SECTIONS.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
        }
      >
        UI Elements
      </PageTitle>

      {showBar && (
        <section className="panel p-5">
          <h2 className="mb-6 text-lg font-bold text-ink dark:text-white">Bar Chart</h2>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {barChartGroups.map((group) => (
              <div key={group.id} className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={toBarData(group)} barSize={10}>
                    <Tooltip cursor={{ fill: 'transparent' }} contentStyle={tooltipStyle} />
                    <Bar dataKey="base" stackId="a" radius={[0, 0, 4, 4]}>
                      {toBarData(group).map((entry, index) => (
                        <Cell key={index} fill={group.colors[0]} />
                      ))}
                    </Bar>
                    {group.colors.length > 1 && (
                      <Bar dataKey="top" stackId="a" radius={[4, 4, 0, 0]}>
                        {toBarData(group).map((entry, index) => (
                          <Cell key={index} fill={group.colors[1]} />
                        ))}
                      </Bar>
                    )}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ))}
          </div>
        </section>
      )}

      {showPie && (
        <section className="panel mt-6 p-5">
          <h2 className="mb-6 text-lg font-bold text-ink dark:text-white">Pie Chart</h2>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {pieCharts.map((chart) => {
              const data = [
                { name: 'Share', value: chart.value, color: chart.color },
                { name: 'Rest', value: 100 - chart.value, color: isDark ? '#323D4E' : '#EEF1F6' },
              ]
              return (
                <div key={chart.id} className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={data} dataKey="value" outerRadius="90%" startAngle={90} endAngle={-270}>
                        {data.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} stroke="none" />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={tooltipStyle} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {showDonut && (
        <section className="panel mt-6 p-5">
          <h2 className="mb-6 text-lg font-bold text-ink dark:text-white">Donut Chart</h2>
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {donutCharts.map((chart) => (
              <div key={chart.id} className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chart.slices.map((slice, index) => ({ name: `Slice ${index + 1}`, ...slice }))}
                      dataKey="value"
                      innerRadius="64%"
                      outerRadius="90%"
                      startAngle={90}
                      endAngle={-270}
                    >
                      {chart.slices.map((slice, index) => (
                        <Cell
                          key={index}
                          fill={slice.color === '#EEF1F6' && isDark ? '#323D4E' : slice.color}
                          stroke="none"
                        />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={tooltipStyle} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
