export function Section({ id, children, className = '', innerClassName = '' }) {
  return (
    <section id={id} className={`py-8 md:py-12 ${className}`}>
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </section>
  )
}
