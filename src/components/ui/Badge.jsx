export function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-accent-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand ${className}`}
    >
      {children}
    </span>
  )
}
