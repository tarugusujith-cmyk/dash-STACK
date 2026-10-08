export default function PageTitle({ children, action }) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
      <h1 className="text-2xl font-bold text-ink dark:text-white sm:text-3xl">{children}</h1>
      {action}
    </div>
  )
}
