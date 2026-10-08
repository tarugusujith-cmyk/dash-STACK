import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '', remember: true })
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.email.includes('@') || form.password.length < 6) {
      setError('Enter a valid email and a password of at least 6 characters.')
      return
    }
    setError('')
    navigate('/')
  }

  return (
    <AuthLayout>
      <h1 className="text-center text-2xl font-bold text-ink dark:text-white">Login to Account</h1>
      <p className="mt-2 text-center text-sm text-ink-muted dark:text-ink-light">
        Please enter your email and password to continue
      </p>

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

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-semibold text-ink dark:text-white">Password</label>
            <button type="button" className="text-sm text-ink-muted hover:text-primary dark:text-ink-light">
              Forget Password?
            </button>
          </div>
          <input
            id="password"
            type="password"
            value={form.password}
            onChange={(event) => setForm({ ...form, password: event.target.value })}
            placeholder="••••••"
            className="field mt-2 bg-surface-page"
          />
        </div>

        <label className="flex items-center gap-2 text-sm text-ink dark:text-white">
          <input
            type="checkbox"
            checked={form.remember}
            onChange={(event) => setForm({ ...form, remember: event.target.checked })}
            className="h-4 w-4 accent-primary"
          />
          Remember Password
        </label>

        {error && <p className="text-sm font-semibold text-[#EF3826]">{error}</p>}

        <button type="submit" className="btn-primary w-full">Sign In</button>
      </form>

      <p className="mt-6 text-center text-sm text-ink dark:text-white">
        Don’t have an account?{' '}
        <Link to="/signup" className="font-bold text-primary underline">Create Account</Link>
      </p>
    </AuthLayout>
  )
}
