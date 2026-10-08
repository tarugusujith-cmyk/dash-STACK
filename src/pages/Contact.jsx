import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import PersonPhoto from '../components/PersonPhoto.jsx'
import PageTitle from '../components/PageTitle.jsx'
import { contacts } from '../data/mockData.js'
import { contactImageFor } from '../utils/contactImages.js'

export default function Contact() {
  return (
    <>
      <PageTitle action={<Link to="/contact/new" className="btn-primary">Add New Contact</Link>}>
        Contact
      </PageTitle>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {contacts.map((person) => {
          const image = contactImageFor(person.name)
          return (
            <article key={person.id} className="panel overflow-hidden p-4 text-center">
              {image ? (
                <img
                  src={image}
                  alt={`${person.name} photo`}
                  loading="lazy"
                  className="h-44 w-full rounded-lg object-cover"
                />
              ) : (
                <PersonPhoto name={person.name} className="h-44 w-full rounded-lg" />
              )}
              <h2 className="mt-4 text-base font-bold text-ink dark:text-white">{person.name}</h2>
              <p className="mt-1 text-sm text-ink-muted dark:text-ink-light">{person.email}</p>
              <a
                href={`mailto:${person.email}`}
                className="mt-4 inline-flex items-center gap-2 border-t border-surface-line pt-4 text-sm font-semibold text-ink-muted hover:text-primary dark:border-night-line dark:text-ink-light"
              >
                <Mail size={16} /> Message
              </a>
            </article>
          )
        })}
      </div>
    </>
  )
}
