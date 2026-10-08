import { useState } from 'react'
import { Star, Trash2, X } from 'lucide-react'
import PageTitle from '../components/PageTitle.jsx'
import { todoItems } from '../data/mockData.js'

export default function Todo() {
  const [items, setItems] = useState(todoItems)
  const [isAdding, setIsAdding] = useState(false)
  const [draft, setDraft] = useState('')

  const toggleDone = (id) =>
    setItems((current) => current.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))

  const toggleStar = (id) =>
    setItems((current) => current.map((item) => (item.id === id ? { ...item, starred: !item.starred } : item)))

  const remove = (id) => setItems((current) => current.filter((item) => item.id !== id))

  const addTask = () => {
    if (!draft.trim()) return
    setItems((current) => [
      { id: Date.now(), title: draft.trim(), done: false, starred: false },
      ...current,
    ])
    setDraft('')
    setIsAdding(false)
  }

  return (
    <>
      <PageTitle
        action={
          isAdding ? (
            <button type="button" onClick={addTask} className="btn-primary">Save</button>
          ) : (
            <button type="button" onClick={() => setIsAdding(true)} className="btn-primary">Add New Task</button>
          )
        }
      >
        {isAdding ? 'Add New To-Do' : 'To-Do List'}
      </PageTitle>

      {isAdding && (
        <div className="panel mb-4 p-4">
          <label htmlFor="new-task" className="sr-only">Task name</label>
          <input
            id="new-task"
            autoFocus
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && addTask()}
            placeholder="Write Your task name here"
            className="field max-w-md"
          />
        </div>
      )}

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className={`flex items-center gap-4 rounded-card border p-4 transition-colors ${
              item.done
                ? 'border-primary bg-primary text-white'
                : 'border-surface-line bg-white text-ink shadow-card dark:border-night-line dark:bg-night-card dark:text-white dark:shadow-none'
            }`}
          >
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleDone(item.id)}
              aria-label={`Mark ${item.title} as done`}
              className="h-5 w-5 accent-white"
            />
            <span className={`flex-1 text-sm font-semibold ${item.done ? 'text-white' : ''}`}>{item.title}</span>

            {item.done ? (
              <button
                type="button"
                onClick={() => remove(item.id)}
                aria-label={`Delete ${item.title}`}
                className="grid h-9 w-9 place-items-center rounded-lg bg-white/20 text-white"
              >
                <Trash2 size={17} />
              </button>
            ) : (
              <>
                <button type="button" onClick={() => toggleStar(item.id)} aria-label={`Star ${item.title}`}>
                  <Star size={20} className={item.starred ? 'fill-[#FFB800] text-[#FFB800]' : 'text-ink-light'} />
                </button>
                <button
                  type="button"
                  onClick={() => remove(item.id)}
                  aria-label={`Remove ${item.title}`}
                  className="grid h-8 w-8 place-items-center rounded-full border border-surface-line text-ink-muted hover:border-[#EF3826] hover:text-[#EF3826] dark:border-night-line"
                >
                  <X size={15} />
                </button>
              </>
            )}
          </li>
        ))}
      </ul>

      {items.length === 0 && (
        <p className="panel p-10 text-center text-sm text-ink-muted dark:text-ink-light">
          Your list is clear. Add a task to get started.
        </p>
      )}
    </>
  )
}
