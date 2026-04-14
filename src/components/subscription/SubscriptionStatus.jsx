import { useMemo, useState } from 'react'
import { AnimatedProgressBar } from '../ui/AnimatedProgressBar'
import { Section } from '../ui/Section'

const PLANS = {
  monthly: { label: '30 days', totalDays: 30 },
  semiannual: { label: '6 months', totalDays: 180 },
}

export function SubscriptionStatus() {
  const [planKey, setPlanKey] = useState('monthly')
  const plan = PLANS[planKey]

  const { remainingFraction, daysLeft } = useMemo(() => {
    const total = plan.totalDays
    const left = planKey === 'monthly' ? 23 : 142
    return {
      remainingFraction: left / total,
      daysLeft: left,
    }
  }, [plan.totalDays, planKey])

  const pct = remainingFraction * 100

  return (
    <Section className="bg-white pb-8 pt-6">
      <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-8 shadow-sm md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-brand">Subscription status</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Gold Plan active
            </h2>
            <p className="mt-2 text-neutral-600">
              <span className="font-medium text-neutral-900">{daysLeft}</span> days remaining in your current
              period ({plan.label} billing preview).
            </p>
          </div>
          <div className="flex shrink-0 gap-2 rounded-full border border-neutral-200 bg-white p-1">
            <button
              type="button"
              onClick={() => setPlanKey('monthly')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                planKey === 'monthly'
                  ? 'bg-accent text-accent-foreground shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              30 days
            </button>
            <button
              type="button"
              onClick={() => setPlanKey('semiannual')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                planKey === 'semiannual'
                  ? 'bg-accent text-accent-foreground shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              6 months
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-2 flex justify-between text-sm">
            <span className="text-neutral-600">Period progress</span>
            <span className="font-medium text-neutral-900">{Math.round(remainingFraction * 100)}% left</span>
          </div>
          <AnimatedProgressBar
            key={planKey}
            targetPercent={pct}
            durationMs={1100}
            barClassName="h-full rounded-full bg-gradient-to-r from-accent to-brand"
          />
        </div>
      </div>
    </Section>
  )
}
