import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Camera } from 'lucide-react'
import PageTitle from '../components/PageTitle.jsx'

const EMPTY_EVENT = { name: '', time: '', date: '', address: '', contact: '' }

export default function AddEvent() {
  const navigate = useNavigate()
  const [form, setForm] = useState(EMPTY_EVENT)
  const [error, setError] = useState('')

  const update = (field) => (event) => setForm({ ...form, [field]: event.target.value })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.date.trim()) {
      setError('Add an event name and date before saving.')
      return
    }
    setError('')
    navigate('/calendar')
  }

  return (
    <>
      <PageTitle>Add New Event</PageTitle>

      <form onSubmit={handleSubmit} className="panel p-6 sm:p-10">
        <div className="flex flex-col items-center">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-surface-page text-ink dark:bg-night-soft dark:text-white">
            <Camera size={26} />
          </span>
          <button type="button" className="mt-3 text-sm font-bold text-primary">Upload Cover Photo</button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <label className="text-sm font-semibold text-ink dark:text-white">
            Event Name
            <input value={form.name} onChange={update('name')} placeholder="Enter event name" className="field mt-2" />
          </label>
          <label className="text-sm font-semibold text-ink dark:text-white">
            Time
            <input value={form.time} onChange={update('time')} placeholder="12:34 BDT" className="field mt-2" />
          </label>
          <label className="text-sm font-semibold text-ink dark:text-white">
            Date
            <input value={form.date} onChange={update('date')} placeholder="11-09-2019" className="field mt-2" />
          </label>
          <label className="text-sm font-semibold text-ink dark:text-white">
            Address
            <input value={form.address} onChange={update('address')} placeholder="Address" className="field mt-2" />
          </label>
          <label className="text-sm font-semibold text-ink dark:text-white md:col-span-2 md:max-w-[calc(50%-12px)]">
            Contact Number
            <input value={form.contact} onChange={update('contact')} placeholder="Enter your Contact Number" className="field mt-2" />
          </label>
        </div>

        {error && <p className="mt-4 text-center text-sm font-semibold text-[#EF3826]">{error}</p>}

        <button type="submit" className="btn-primary mx-auto mt-10 flex w-full max-w-xs">Add Now</button>
      </form>
    </>
  )
}
