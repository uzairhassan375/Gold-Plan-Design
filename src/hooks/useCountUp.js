import { useEffect, useState } from 'react'

/** Counts from 0 to `target` over `duration` while `enabled`. Shows 0 when disabled. */
export function useCountUp(target, { duration = 1100, enabled } = {}) {
  const [animated, setAnimated] = useState(0)

  useEffect(() => {
    if (!enabled) return

    let rafId
    let cancelled = false
    const start = performance.now()

    const tick = (now) => {
      if (cancelled) return
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 2
      setAnimated(Math.round(target * eased))
      if (t < 1) rafId = requestAnimationFrame(tick)
      else setAnimated(target)
    }

    rafId = requestAnimationFrame(tick)
    return () => {
      cancelled = true
      cancelAnimationFrame(rafId)
    }
  }, [target, duration, enabled])

  return enabled ? animated : 0
}
