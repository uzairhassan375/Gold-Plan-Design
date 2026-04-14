import { useInViewOnce } from '../../hooks/useInViewOnce'

export function AnimatedProgressBar({
  targetPercent,
  durationMs = 1000,
  trackClassName = 'h-3 overflow-hidden rounded-full bg-neutral-200',
  barClassName = 'h-full rounded-full bg-gradient-to-r from-accent to-brand',
}) {
  const [ref, visible] = useInViewOnce(0.2)

  return (
    <div ref={ref} className={trackClassName}>
      <div
        className={`${barClassName} ease-out`}
        style={{
          width: visible ? `${targetPercent}%` : '0%',
          transition: `width ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
      />
    </div>
  )
}
