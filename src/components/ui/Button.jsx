export function Button({ children, variant = 'primary', className = '', pulseRing = false, ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const variants = {
    primary:
      'bg-accent text-accent-foreground shadow-sm hover:bg-accent-hover hover:shadow-md focus-visible:outline-brand',
    outline:
      'border border-neutral-300 bg-white text-brand hover:border-brand hover:bg-brand-muted focus-visible:outline-brand',
    ghost:
      'text-neutral-700 hover:bg-neutral-100 hover:text-brand focus-visible:outline-neutral-400',
    dark:
      'bg-brand text-brand-foreground hover:bg-brand-hover focus-visible:outline-brand',
  }

  const button = (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${pulseRing ? 'relative z-10' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )

  if (pulseRing && variant === 'primary') {
    return (
      <span className="relative inline-flex items-center justify-center align-middle">
        <span
          className="pointer-events-none absolute inset-[-6px] rounded-full border-2 border-accent animate-cta-pulse-ring"
          aria-hidden
        />
        {button}
      </span>
    )
  }

  return button
}
