import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import PageTitle from '../components/PageTitle.jsx'
import { pricingPlans } from '../data/mockData.js'

export default function Pricing() {
  const navigate = useNavigate()
  const [selectedId, setSelectedId] = useState(null)

  // No backend exists yet, so "Get Started" just marks the chosen plan and
  // sends the visitor into account creation with that plan pre-selected.
  const choosePlan = (plan) => {
    setSelectedId(plan.id)
    navigate(`/signup?plan=${plan.id}`)
  }

  return (
    <>
      <PageTitle>Pricing</PageTitle>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            key={plan.id}
            className={`panel flex flex-col p-8 text-center transition-colors ${
              selectedId === plan.id ? 'ring-2 ring-primary' : ''
            }`}
          >
            <h2 className="text-xl font-bold text-ink dark:text-white">{plan.name}</h2>
            <p className="mt-2 text-sm text-ink-muted dark:text-ink-light">Monthly Charge</p>
            <p className="mt-3 text-4xl font-extrabold text-primary">{plan.price}</p>

            <ul className="my-8 space-y-4 border-y border-surface-line py-8 dark:border-night-line">
              {plan.features.map((feature) => (
                <li
                  key={feature.label}
                  className={`flex items-center justify-center gap-2 text-sm ${
                    feature.included
                      ? 'font-semibold text-ink dark:text-white'
                      : 'text-ink-light line-through decoration-transparent'
                  }`}
                >
                  {feature.included && <Check size={15} className="text-status-completed" />}
                  {feature.label}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => choosePlan(plan)}
              className={`mt-auto rounded-full px-8 py-3 text-sm font-bold transition-colors ${
                plan.highlight
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'border border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              Get Started
            </button>
            <button
              type="button"
              onClick={() => choosePlan(plan)}
              className="mt-4 text-sm font-bold text-ink underline dark:text-white"
            >
              Start Your 30 Day Free Trial
            </button>
          </article>
        ))}
      </div>
    </>
  )
}
