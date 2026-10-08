import { useState } from 'react'
import { Camera } from 'lucide-react'
import PageTitle from '../components/PageTitle.jsx'

const DEFAULTS = {
  siteName: 'Bright Web',
  copyright: 'All rights Reserved@brightweb',
  seoTitle: 'Bright web is a hybrid dashboard',
  seoDescription: 'Bright web is a hybrid dashboard',
  seoKeywords: 'CEO',
}

export default function Settings() {
  const [form, setForm] = useState(DEFAULTS)
  const [saved, setSaved] = useState(false)

  const update = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value })
    setSaved(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSaved(true)
  }

  return (
    <>
      <PageTitle>General Settings</PageTitle>

      <form onSubmit={handleSubmit} className="panel p-6 sm:p-10">
        <div className="flex flex-col items-center">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-surface-page text-ink dark:bg-night-soft dark:text-white">
            <Camera size={26} />
          </span>
          <button type="button" className="mt-3 text-sm font-bold text-primary">Upload Logo</button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <label className="text-sm font-semibold text-ink dark:text-white">
            Site Name
            <input value={form.siteName} onChange={update('siteName')} className="field mt-2" />
          </label>
          <label className="text-sm font-semibold text-ink dark:text-white">
            Copy Right
            <input value={form.copyright} onChange={update('copyright')} className="field mt-2" />
          </label>
          <label className="text-sm font-semibold text-ink dark:text-white">
            SEO Title
            <input value={form.seoTitle} onChange={update('seoTitle')} className="field mt-2" />
          </label>
          <label className="row-span-2 text-sm font-semibold text-ink dark:text-white">
            SEO Description
            <textarea rows={5} value={form.seoDescription} onChange={update('seoDescription')} className="field mt-2 resize-none" />
          </label>
          <label className="text-sm font-semibold text-ink dark:text-white">
            SEO Keywords
            <input value={form.seoKeywords} onChange={update('seoKeywords')} className="field mt-2" />
          </label>
        </div>

        {saved && (
          <p className="mt-6 text-center text-sm font-semibold text-status-completed">
            Settings saved for this session.
          </p>
        )}

        <button type="submit" className="btn-primary mx-auto mt-10 flex w-full max-w-xs">Save</button>
      </form>
    </>
  )
}
