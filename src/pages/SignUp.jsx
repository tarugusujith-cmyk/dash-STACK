import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'
import { pricingPlans } from '../data/mockData.js'

export default function SignUp() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const selectedPlan = pricingPlans.find((plan) => plan.id === searchParams.get('plan'))
  const [form, setForm] = useState({ email: '', username: '', password: '', accepted: true })
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.email.includes('@') || !form.username.trim() || form.password.length < 6) {
      setError('Fill in every field. Passwords need at least 6 characters.')
      return
    }
    if (!form.accepted) {
      setError('Accept the terms and conditions to create an account.')
      return
    }
    setError('')
    navigate('/')
  }

  return (
    <AuthLayout>
      <h1 className="text-center text-2xl font-bold text-ink dark:text-white">Create an Account</h1>
      <p className="mt-2 text-center text-sm text-ink-muted dark:text-ink-light">
        Create a account to continue
      </p>

      {selectedPlan && (
        <p className="mt-4 rounded-lg bg-primary-soft px-4 py-2 text-center text-sm font-semibold text-primary dark:bg-night-soft">
          Signing up for the {selectedPlan.name} plan — {selectedPlan.price}/mo
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <label className="block text-sm font-semibold text-ink dark:text-white">
          Email address:
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            placeholder="esteban_schiller@gmail.com"
            className="field mt-2 bg-surface-page"
          />
        </label>

        <label className="block text-sm font-semibold text-ink dark:text-white">
          Username
          <input
            value={form.username}
            onChange={(event) => setForm({ ...form, username: event.target.value })}
            placeholder="Username"
            className="field mt-2 bg-surface-page"
          />
        </label>

        <label className="block text-sm font-semibold text-ink dark:text-white">
          Password
          <input
            type="password"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
            placeholder="••••••"
            className="field mt-2 bg-surface-page"
          />
        </label>

        <label className="flex items-center gap-2 text-sm text-ink dark:text-white">
          <input
            type="checkbox"
            checked={form.accepted}
            onChange={(event) => setForm({ ...form, accepted: event.target.checked })}
            className="h-4 w-4 accent-primary"
          />
          I accept terms and conditions
        </label>

        {error && <p className="text-sm font-semibold text-[#EF3826]">{error}</p>}

        <button type="submit" className="btn-primary w-full">Sign Up</button>
      </form>

      <p className="mt-6 text-center text-sm text-ink dark:text-white">
        Already have an account? <Link to="/login" className="font-bold text-primary underline">Login</Link>
      </p>
    </AuthLayout>
  )
}
