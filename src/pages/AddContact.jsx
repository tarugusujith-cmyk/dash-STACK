import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Camera } from 'lucide-react'
import PageTitle from '../components/PageTitle.jsx'

const EMPTY = { firstName: '', lastName: '', email: '', phone: '', birthdate: '', gender: 'Male' }

export default function AddContact() {
  const navigate = useNavigate()
  const [form, setForm] = useState(EMPTY)
  const [error, setError] = useState('')

  const update = (field) => (event) => setForm({ ...form, [field]: event.target.value })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.firstName.trim() || !form.email.includes('@')) {
      setError('Add a first name and a valid email address before saving.')
      return
    }
    setError('')
    navigate('/contact')
  }

  return (
    <>
      <PageTitle>Add New Contact</PageTitle>

      <form onSubmit={handleSubmit} className="panel p-6 sm:p-10">
        <div className="flex flex-col items-center">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-surface-page text-ink dark:bg-night-soft dark:text-white">
            <Camera size={26} />
          </span>
          <button type="button" className="mt-3 text-sm font-bold text-primary">Upload Photo</button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <label className="text-sm font-semibold text-ink dark:text-white">
            First Name
            <input value={form.firstName} onChange={update('firstName')} placeholder="Enter your first name" className="field mt-2" />
          </label>
          <label className="text-sm font-semibold text-ink dark:text-white">
            Last Name
            <input value={form.lastName} onChange={update('lastName')} placeholder="Enter your last name" className="field mt-2" />
          </label>
          <label className="text-sm font-semibold text-ink dark:text-white">
            Your email
            <input type="email" value={form.email} onChange={update('email')} placeholder="Enter your email" className="field mt-2" />
          </label>
          <label className="text-sm font-semibold text-ink dark:text-white">
            Phone Number
            <input value={form.phone} onChange={update('phone')} placeholder="Enter your phone number" className="field mt-2" />
          </label>
          <label className="text-sm font-semibold text-ink dark:text-white">
            Date of Birth
            <input value={form.birthdate} onChange={update('birthdate')} placeholder="Enter your birthdate" className="field mt-2" />
          </label>
          <label className="text-sm font-semibold text-ink dark:text-white">
            Gender
            <select value={form.gender} onChange={update('gender')} className="field mt-2">
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </label>
        </div>

        {error && <p className="mt-4 text-center text-sm font-semibold text-[#EF3826]">{error}</p>}

        <button type="submit" className="btn-primary mx-auto mt-10 flex w-full max-w-xs">Add Now</button>
      </form>
    </>
  )
}
