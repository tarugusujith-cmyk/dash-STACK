import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout.jsx'

export default function NotFound() {
  return (
    <AuthLayout>
      <div className="mx-auto w-full max-w-xs">
        <div className="rounded-lg bg-[#2E8BFF] p-6 text-center">
          <span className="block text-6xl font-extrabold text-[#FFC43D]">404</span>
        </div>
      </div>

      <h1 className="mt-8 text-center text-xl font-bold text-ink dark:text-white">
        Looks like you’ve got lost....
      </h1>
      <Link to="/" className="btn-primary mt-6 w-full">Back to Dashboard</Link>
    </AuthLayout>
  )
}
