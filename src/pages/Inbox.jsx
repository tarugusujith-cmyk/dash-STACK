import { useState } from 'react'
import {
  AlertTriangle, ArchiveRestore, ArrowLeft, Bookmark, Inbox as InboxIcon, Info, Mic,
  Paperclip, Pencil, Printer, Search, Send, Star, Trash2, Image as ImageIcon,
} from 'lucide-react'
import Avatar from '../components/Avatar.jsx'
import PageTitle from '../components/PageTitle.jsx'
import Pagination from '../components/Pagination.jsx'
import { mailFolders, mailLabels, mailThread, mails } from '../data/mockData.js'

const FOLDER_ICONS = {
  inbox: InboxIcon, star: Star, send: Send, pencil: Pencil,
  alert: AlertTriangle, bookmark: Bookmark, trash: Trash2,
}

const LABEL_COLORS = {
  Primary: { color: '#00B69B', bg: 'rgba(0, 182, 155, 0.15)' },
  Social: { color: '#2E5BFF', bg: 'rgba(46, 91, 255, 0.15)' },
  Work: { color: '#FFA756', bg: 'rgba(255, 167, 86, 0.2)' },
  Friends: { color: '#E93CAC', bg: 'rgba(233, 60, 172, 0.15)' },
}

const EMPTY_COMPOSE = { to: '', subject: '', message: '' }

export default function Inbox() {
  const [folder, setFolder] = useState('inbox')
  const [mailList, setMailList] = useState(mails)
  const [selectedIds, setSelectedIds] = useState([])
  const [openMail, setOpenMail] = useState(null)
  const [search, setSearch] = useState('')
  const [reply, setReply] = useState('')
  const [thread, setThread] = useState(mailThread)
  const [isComposing, setIsComposing] = useState(false)
  const [compose, setCompose] = useState(EMPTY_COMPOSE)
  const [composeError, setComposeError] = useState('')
  const [sentNotice, setSentNotice] = useState('')
  const [page, setPage] = useState(1)
  const PAGE_SIZE = 5

  const updateCompose = (field) => (event) => setCompose({ ...compose, [field]: event.target.value })

  const sendCompose = (event) => {
    event.preventDefault()
    if (!compose.to.trim() || !compose.message.trim()) {
      setComposeError('Add a recipient and a message before sending.')
      return
    }
    setMailList((current) => [
      {
        id: Date.now(),
        sender: compose.to.trim(),
        label: 'Primary',
        subject: compose.subject.trim() || '(No subject)',
        time: 'Just now',
        starred: false,
      },
      ...current,
    ])
    setIsComposing(false)
    setCompose(EMPTY_COMPOSE)
    setComposeError('')
    setSentNotice(`Message sent to ${compose.to.trim()}.`)
    window.setTimeout(() => setSentNotice(''), 4000)
  }

  const toggleSelect = (id) =>
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    )

  const toggleStar = (id) =>
    setMailList((current) =>
      current.map((mail) => (mail.id === id ? { ...mail, starred: !mail.starred } : mail)),
    )

  const deleteSelected = () => {
    setMailList((current) => current.filter((mail) => !selectedIds.includes(mail.id)))
    setSelectedIds([])
  }

  const sendReply = (event) => {
    event.preventDefault()
    if (!reply.trim()) return
    setThread((current) => [
      ...current,
      { id: current.length + 1, from: 'me', time: 'now', text: reply.trim() },
    ])
    setReply('')
  }

  const visibleMails = mailList
    .filter((mail) => (folder === 'starred' ? mail.starred : true))
    .filter((mail) =>
      search
        ? `${mail.sender} ${mail.subject}`.toLowerCase().includes(search.toLowerCase())
        : true,
    )

  const totalPages = Math.max(1, Math.ceil(visibleMails.length / PAGE_SIZE))
  const clampedPage = Math.min(page, totalPages)
  const pagedMails = visibleMails.slice((clampedPage - 1) * PAGE_SIZE, clampedPage * PAGE_SIZE)
  const rangeStart = visibleMails.length === 0 ? 0 : (clampedPage - 1) * PAGE_SIZE + 1
  const rangeEnd = Math.min(clampedPage * PAGE_SIZE, visibleMails.length)

  return (
    <>
      <PageTitle>Inbox</PageTitle>

      <div className="grid gap-5 lg:grid-cols-[260px,1fr]">
        <aside className="panel h-max p-4">
          <button type="button" onClick={() => setIsComposing(true)} className="btn-primary w-full">
            + Compose
          </button>
          {sentNotice && (
            <p className="mt-3 rounded-lg bg-status-completed/10 px-3 py-2 text-xs font-semibold text-status-completed">
              {sentNotice}
            </p>
          )}

          <p className="mb-2 mt-6 text-sm font-bold text-ink dark:text-white">My Email</p>
          <ul className="space-y-1">
            {mailFolders.map((item) => {
              const Icon = FOLDER_ICONS[item.icon]
              const isActive = folder === item.id
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setFolder(item.id)
                      setOpenMail(null)
                      setPage(1)
                    }}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-primary-soft text-primary dark:bg-night-soft'
                        : 'text-ink-muted hover:bg-surface-page dark:text-ink-light dark:hover:bg-night-soft'
                    }`}
                  >
                    <Icon size={17} />
                    <span className="flex-1 text-left">{item.label}</span>
                    <span className="text-xs">{item.count}</span>
                  </button>
                </li>
              )
            })}
          </ul>

          <p className="mb-2 mt-6 text-sm font-bold text-ink dark:text-white">Label</p>
          <ul className="space-y-2">
            {mailLabels.map((label) => (
              <li key={label.id} className="flex items-center gap-3 px-3 text-sm text-ink-muted dark:text-ink-light">
                <span className="h-4 w-4 rounded border-2" style={{ borderColor: label.color }} />
                {label.label}
              </li>
            ))}
          </ul>
          <button type="button" className="mt-4 px-3 text-sm font-semibold text-ink-muted hover:text-primary dark:text-ink-light">
            + Create New Label
          </button>
        </aside>

        <section className="panel p-4">
          {openMail ? (
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-3 border-b border-surface-line pb-4 dark:border-night-line">
                <button type="button" onClick={() => setOpenMail(null)} aria-label="Back to inbox" className="text-ink-muted hover:text-primary">
                  <ArrowLeft size={20} />
                </button>
                <h2 className="text-lg font-bold text-ink dark:text-white">{openMail.sender}</h2>
                {openMail.label && (
                  <span
                    style={LABEL_COLORS[openMail.label] && { color: LABEL_COLORS[openMail.label].color, backgroundColor: LABEL_COLORS[openMail.label].bg }}
                    className="rounded-md px-2 py-0.5 text-xs font-bold"
                  >
                    {openMail.label}
                  </span>
                )}
                <div className="ml-auto flex items-center gap-2 text-ink-muted">
                  <button type="button" aria-label="Print message" className="btn-ghost h-9 w-9 p-0"><Printer size={16} /></button>
                  <button type="button" aria-label="Star message" onClick={() => toggleStar(openMail.id)} className="btn-ghost h-9 w-9 p-0"><Star size={16} /></button>
                  <button type="button" aria-label="Delete message" className="btn-ghost h-9 w-9 p-0"><Trash2 size={16} /></button>
                </div>
              </div>

              <div className="flex-1 space-y-5 py-6">
                {thread.map((message) => (
                  <div key={message.id} className={`flex gap-3 ${message.from === 'me' ? 'justify-end' : ''}`}>
                    {message.from === 'them' && <Avatar name={openMail.sender} size={36} />}
                    <div className={`max-w-[75%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                      message.from === 'me'
                        ? 'bg-primary text-white'
                        : 'bg-surface-page text-ink dark:bg-night-soft dark:text-white'
                    }`}>
                      <p>{message.text}</p>
                      <p className={`mt-2 text-xs ${message.from === 'me' ? 'text-white/80' : 'text-ink-light'}`}>{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={sendReply} className="flex items-center gap-3 border-t border-surface-line pt-4 dark:border-night-line">
                <Mic size={18} className="text-ink-muted" />
                <label htmlFor="reply" className="sr-only">Write message</label>
                <input
                  id="reply"
                  value={reply}
                  onChange={(event) => setReply(event.target.value)}
                  placeholder="Write message"
                  className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-light dark:text-white"
                />
                <Paperclip size={18} className="text-ink-muted" />
                <ImageIcon size={18} className="text-ink-muted" />
                <button type="submit" className="btn-primary px-5 py-2">Send <Send size={15} /></button>
              </form>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center gap-3 border-b border-surface-line pb-4 dark:border-night-line">
                <div className="relative min-w-[200px] flex-1">
                  <label htmlFor="mail-search" className="sr-only">Search mail</label>
                  <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-light" />
                  <input
                    id="mail-search"
                    value={search}
                    onChange={(event) => {
                      setSearch(event.target.value)
                      setPage(1)
                    }}
                    placeholder="Search mail"
                    className="w-full rounded-full border border-surface-line bg-white py-2.5 pl-11 pr-4 text-sm
                      placeholder:text-ink-light focus:border-primary focus:outline-none
                      dark:border-night-line dark:bg-night-soft dark:text-white"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" aria-label="Archive selected" className="btn-ghost h-9 w-9 p-0"><ArchiveRestore size={16} /></button>
                  <button type="button" aria-label="Mark as important" className="btn-ghost h-9 w-9 p-0"><Info size={16} /></button>
                  <button type="button" aria-label="Delete selected" onClick={deleteSelected} className="btn-ghost h-9 w-9 p-0"><Trash2 size={16} /></button>
                </div>
              </div>

              <ul className="divide-y divide-surface-line dark:divide-night-line">
                {pagedMails.map((mail) => (
                  <li key={mail.id} className="flex items-center gap-3 px-1 py-3 hover:bg-surface-page dark:hover:bg-night-soft">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(mail.id)}
                      onChange={() => toggleSelect(mail.id)}
                      aria-label={`Select mail from ${mail.sender}`}
                      className="h-4 w-4 accent-primary"
                    />
                    <button type="button" onClick={() => toggleStar(mail.id)} aria-label={`Star mail from ${mail.sender}`}>
                      <Star size={17} className={mail.starred ? 'fill-[#FFB800] text-[#FFB800]' : 'text-ink-light'} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpenMail(mail)}
                      className="flex min-w-0 flex-1 flex-wrap items-center gap-3 text-left"
                    >
                      <span className="w-32 shrink-0 truncate text-sm font-bold text-ink dark:text-white">{mail.sender}</span>
                      {mail.label && (
                        <span
                          style={{ color: LABEL_COLORS[mail.label].color, backgroundColor: LABEL_COLORS[mail.label].bg }}
                          className="rounded-md px-2 py-0.5 text-xs font-bold"
                        >
                          {mail.label}
                        </span>
                      )}
                      <span className="min-w-0 flex-1 truncate text-sm text-ink-muted dark:text-ink-light">{mail.subject}</span>
                      <span className="shrink-0 text-xs font-semibold text-ink-muted dark:text-ink-light">{mail.time}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {visibleMails.length === 0 && (
                <p className="py-10 text-center text-sm text-ink-muted dark:text-ink-light">
                  No messages here. Try another folder or search term.
                </p>
              )}

              <Pagination
                label={`Showing ${rangeStart}-${rangeEnd} of ${visibleMails.length}`}
                prevLabel=""
                nextLabel=""
                onPrev={() => setPage((current) => Math.max(1, current - 1))}
                onNext={() => setPage((current) => Math.min(totalPages, current + 1))}
                disabledPrev={clampedPage === 1}
                disabledNext={clampedPage >= totalPages}
              />
            </>
          )}
        </section>
      </div>

      {isComposing && (
        <div className="fixed inset-0 z-50 grid place-items-end bg-black/40 p-4 sm:place-items-center" role="dialog" aria-modal="true">
          <form onSubmit={sendCompose} className="panel w-full max-w-lg p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-ink dark:text-white">New Message</h2>
              <button
                type="button"
                onClick={() => {
                  setIsComposing(false)
                  setComposeError('')
                }}
                aria-label="Close compose window"
                className="text-ink-muted hover:text-primary"
              >
                <ArrowLeft size={18} className="rotate-45" />
              </button>
            </div>

            <label className="block text-sm font-semibold text-ink dark:text-white">
              To
              <input
                value={compose.to}
                onChange={updateCompose('to')}
                placeholder="Recipient name or email"
                className="field mt-2"
              />
            </label>

            <label className="mt-4 block text-sm font-semibold text-ink dark:text-white">
              Subject
              <input
                value={compose.subject}
                onChange={updateCompose('subject')}
                placeholder="Subject"
                className="field mt-2"
              />
            </label>

            <label className="mt-4 block text-sm font-semibold text-ink dark:text-white">
              Message
              <textarea
                rows={5}
                value={compose.message}
                onChange={updateCompose('message')}
                placeholder="Write your message"
                className="field mt-2 resize-none"
              />
            </label>

            {composeError && <p className="mt-3 text-sm font-semibold text-[#EF3826]">{composeError}</p>}

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsComposing(false)
                  setComposeError('')
                }}
                className="btn-ghost"
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary px-6">
                Send <Send size={15} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
