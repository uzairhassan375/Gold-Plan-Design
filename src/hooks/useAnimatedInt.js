import { useEffect, useRef, useState } from 'react'

/** Smoothly animates when `target` integer changes (easing). */
export function useAnimatedInt(target, duration = 420) {
  const [display, setDisplay] = useState(target)
  const fromRef = useRef(target)

  useEffect(() => {
    const from = fromRef.current
    if (from === target) return

    let rafId
    let cancelled = false
    const start = performance.now()

    const tick = (now) => {
      if (cancelled) return
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - t) ** 3
      setDisplay(Math.round(from + (target - from) * eased))
      if (t < 1) rafId = requestAnimationFrame(tick)
      else fromRef.current = target
    }

    rafId = requestAnimationFrame(tick)
    return () => {
      cancelled = true
      cancelAnimationFrame(rafId)
    }
  }, [target, duration])

  return display
}
