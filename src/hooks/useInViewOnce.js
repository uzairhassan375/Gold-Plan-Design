import { useEffect, useRef, useState } from 'react'

/** Fires once when the ref element scrolls into view. */
export function useInViewOnce(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -6% 0px' }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [inView, threshold])

  return [ref, inView]
}
