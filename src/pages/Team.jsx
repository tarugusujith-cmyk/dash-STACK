import { Link } from 'react-router-dom'
import Avatar from '../components/Avatar.jsx'
import PageTitle from '../components/PageTitle.jsx'
import { teamMembers } from '../data/mockData.js'

export default function Team() {
  return (
    <>
      <PageTitle action={<Link to="/team/new" className="btn-primary">Add New Member</Link>}>
        Team
      </PageTitle>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member) => (
          <article key={member.id} className="panel p-6 text-center">
            <Avatar name={member.name} src={member.avatar} size={96} className="mx-auto" />
            <h2 className="mt-4 text-base font-bold text-ink dark:text-white">{member.name}</h2>
            <p className="mt-1 text-sm text-ink-muted dark:text-ink-light">{member.role}</p>
            <a href={`mailto:${member.email}`} className="mt-2 block break-all text-sm text-ink-muted hover:text-primary dark:text-ink-light">
              {member.email}
            </a>
          </article>
        ))}
      </div>
    </>
  )
}
