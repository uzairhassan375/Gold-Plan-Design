import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

function pad(n) {
  return String(n).padStart(2, '0')
}

export function UrgencySection({ onCta }) {
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    const end = Date.now() + 47 * 60 * 60 * 1000 + 32 * 60 * 1000 + 15 * 1000
    const tick = () => {
      const r = Math.max(0, end - Date.now())
      setRemaining(r)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const h = Math.floor(remaining / 3600000)
  const m = Math.floor((remaining % 3600000) / 60000)
  const s = Math.floor((remaining % 60000) / 1000)

  const units = [
    { label: 'Hours', value: pad(h) },
    { label: 'Minutes', value: pad(m) },
    { label: 'Seconds', value: pad(s), tick: true },
  ]

  return (
    <Section className="border-y border-brand/20 bg-brand text-white">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">Limited launch pricing</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Founding member rate ends when the timer hits zero
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-neutral-400">
          Lock in today’s price. When the window closes, Gold renews at standard rates.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6">
          {units.map((u) => (
            <div
              key={u.label}
              className="min-w-[88px] rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm transition-transform duration-300 hover:scale-105"
            >
              <p className="font-mono text-3xl font-semibold tabular-nums text-accent md:text-4xl">
                {u.tick ? (
                  <span key={u.value} className="inline-block min-w-[2.25ch] animate-countdown-tick">
                    {u.value}
                  </span>
                ) : (
                  u.value
                )}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-neutral-500">{u.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button type="button" onClick={onCta} className="min-w-[200px]" pulseRing>
            Get Gold Plan Now
          </Button>
        </div>
      </div>
    </Section>
  )
}
