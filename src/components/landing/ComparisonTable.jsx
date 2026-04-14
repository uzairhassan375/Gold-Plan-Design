import { planComparisonFeatures, pricingPlanCards } from '../../data/products'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

function Cross({ compact }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-white font-bold text-red-600 shadow ring-1 ring-red-100/80 ${
        compact ? 'h-7 w-7 text-sm' : 'h-8 w-8 text-base'
      }`}
      aria-label="Not included"
    >
      ×
    </span>
  )
}

function Tick({ compact }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-white text-xs font-bold text-emerald-700 shadow ring-1 ring-emerald-100/90 ${
        compact ? 'h-7 w-7' : 'h-8 w-8 text-sm'
      }`}
      aria-label="Included"
    >
      ✓
    </span>
  )
}

function PlanHeader({ plan, variant }) {
  const { badge, tagline, price, period } = plan
  const isGold = variant === 'gold'
  const isDiamond = variant === 'diamond'
  const shell =
    isGold
      ? 'bg-gradient-to-br from-accent via-yellow-400 to-accent-hover text-accent-foreground'
      : isDiamond
        ? 'bg-gradient-to-br from-neutral-950 via-neutral-800 to-brand text-white'
        : 'bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-950 text-white'
  const taglineCls = isGold ? 'text-accent-foreground/95' : 'text-white/95'
  const priceCls = isGold ? 'text-accent-foreground' : 'text-white'
  const periodCls = isGold ? 'text-accent-foreground/70' : 'text-white/60'
  const badgeCls = isGold
    ? 'border border-accent-foreground/25 bg-accent-foreground/10 text-accent-foreground'
    : isDiamond
      ? 'border border-white/25 bg-white/10 text-white'
      : 'border border-white/20 bg-white/10 text-white'

  return (
    <div className={`relative flex min-h-[118px] flex-col items-center justify-center overflow-hidden px-2 pb-3 pt-4 text-center md:min-h-[124px] md:px-3 md:pb-3.5 md:pt-5 ${shell}`}>
      {!isGold && (
        <div
          className={`pointer-events-none absolute inset-0 ${
            isDiamond
              ? 'bg-[radial-gradient(ellipse_at_80%_0%,rgba(245,197,24,0.2),transparent_55%)]'
              : 'bg-[radial-gradient(ellipse_at_30%_0%,rgba(255,255,255,0.12),transparent_55%)]'
          }`}
          aria-hidden
        />
      )}
      {isGold && (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(255,255,255,0.35),transparent_50%)]"
          aria-hidden
        />
      )}
      <div className="relative flex w-full flex-col items-center">
        <span
          className={`mb-1.5 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider md:text-[10px] ${badgeCls}`}
        >
          {badge}
        </span>
        <p className={`text-[13px] font-semibold leading-tight md:text-sm ${taglineCls}`}>{tagline}</p>
        <p className={`mt-2 flex flex-wrap items-baseline justify-center gap-x-0.5 tabular-nums ${priceCls}`}>
          <span className="text-[1.65rem] font-bold leading-none tracking-tight md:text-[1.85rem]">{price}</span>
          <span className={`text-[11px] font-semibold md:text-xs ${periodCls}`}>{period}</span>
        </p>
      </div>
    </div>
  )
}

function FeatureHeader() {
  return (
    <div className="relative flex min-h-[118px] flex-col justify-end overflow-hidden border-b border-neutral-200/70 px-3 pb-3 pt-4 md:min-h-[124px] md:px-4">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neutral-800/[0.07] via-neutral-100 to-accent-muted/45"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230a0a0a' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div className="relative">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand md:text-[11px]">Our Features</p>
        <p className="mt-1 max-w-[16rem] text-[10px] leading-snug text-neutral-600 md:text-[11px]">
          Same row across Free, Gold, and Diamond (Diamond matches Gold — only billing differs).
        </p>
        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">Free · Gold · Diamond</p>
      </div>
    </div>
  )
}

function PlanCell({ children, stripe, variant, highlight }) {
  const isFree = variant === 'free'
  const stripeFree = stripe ? 'bg-neutral-200/95' : 'bg-neutral-50'
  const stripePaid = stripe ? 'bg-accent-muted/60' : 'bg-accent-muted/28'
  const highlightFree =
    'border-y border-accent/30 bg-gradient-to-b from-accent-muted/50 to-neutral-100/90 py-2 font-bold shadow-[inset_0_0_0_1px_rgba(245,197,24,0.25)] md:py-2.5'
  const highlightPaid =
    'border-y border-accent/40 bg-gradient-to-b from-accent/35 to-accent-muted/55 py-2 font-bold shadow-[inset_0_0_0_1px_rgba(10,10,10,0.06)] md:py-2.5'
  const base = highlight
    ? isFree
      ? highlightFree
      : highlightPaid
    : isFree
      ? stripeFree
      : stripePaid
  return (
    <div
      className={`flex min-h-[2.5rem] items-center justify-center border-b border-black/[0.04] px-2 py-1.5 transition-colors duration-200 last:border-b-0 md:min-h-[2.65rem] md:px-2.5 ${base} ${
        highlight ? 'md:min-h-[2.85rem]' : ''
      }`}
    >
      {children}
    </div>
  )
}

function FeatureRow({ children, stripe, highlight }) {
  const normal = stripe ? 'bg-neutral-50/90' : 'bg-white'
  const hi =
    'relative border-y border-accent/35 bg-gradient-to-r from-accent-muted/40 via-amber-50/50 to-accent-muted/35 py-2 pl-2 text-[13px] font-extrabold leading-snug text-brand md:min-h-[2.85rem] md:border-l-4 md:border-accent md:pl-2.5 md:text-[0.9375rem]'
  return (
    <div
      className={`flex min-h-[2.5rem] items-center border-b border-neutral-200/60 px-3 py-1.5 text-[13px] font-medium leading-snug text-neutral-900 last:border-b-0 md:min-h-[2.65rem] md:px-4 md:text-[0.9375rem] ${
        highlight ? hi : normal
      }`}
    >
      {children}
    </div>
  )
}

function renderPlanValue(row, tier) {
  const isFree = tier === 'free'
  if (row.variant === 'text') {
    const label = isFree ? row.freeLabel : row.goldLabel
    const bold = row.highlight ? 'font-extrabold' : 'font-semibold'
    const color =
      isFree
        ? 'text-neutral-900'
        : row.highlight
          ? 'text-accent-foreground'
          : 'text-neutral-900'
    return (
      <span className={`whitespace-normal text-center text-[11px] leading-tight md:text-xs ${bold} ${color}`}>{label}</span>
    )
  }
  return isFree ? <Cross compact /> : <Tick compact />
}

export function ComparisonTable({ onCta }) {
  return (
    <Section id="compare" className="bg-neutral-50 py-6 md:py-8">
      <div className="rounded-[1.15rem] border border-neutral-200/80 bg-gradient-to-b from-neutral-100 to-neutral-200/90 p-1 shadow-[0_12px_36px_-20px_rgba(10,10,10,0.16)] sm:p-1.5 md:rounded-2xl md:p-1.5">
        <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
          <div className="mx-auto flex min-w-[40rem] gap-2 pb-0 sm:min-w-[44rem] md:min-w-0 md:gap-2.5">
            <div className="flex min-w-[11.5rem] flex-1 flex-col overflow-hidden rounded-2xl border border-neutral-200/90 bg-white/95 shadow-[0_12px_40px_-20px_rgba(10,10,10,0.12)] backdrop-blur-sm md:min-w-[12.5rem] md:rounded-3xl">
              <FeatureHeader />
              {planComparisonFeatures.map((row, i) => (
                <FeatureRow key={row.key} stripe={i % 2 === 1} highlight={row.highlight}>
                  <span className={row.highlight ? 'tracking-tight' : ''}>{row.label}</span>
                </FeatureRow>
              ))}
            </div>

            {['free', 'gold', 'diamond'].map((tier) => {
              const plan = pricingPlanCards.find((p) => p.key === tier)
              return (
              <div
                key={tier}
                className={`flex w-[8.25rem] shrink-0 flex-col overflow-hidden rounded-2xl border shadow-md md:w-[9.75rem] md:rounded-3xl ${
                  tier === 'free'
                    ? 'border-neutral-300/70 bg-white/50 shadow-[0_14px_36px_-18px_rgba(10,10,10,0.2)]'
                    : tier === 'gold'
                      ? 'border-accent/35 bg-white/40 shadow-[0_16px_44px_-14px_rgba(245,197,24,0.45)] ring-1 ring-accent/25'
                      : 'border-brand/20 bg-white/50 shadow-[0_14px_40px_-16px_rgba(10,10,10,0.18)] ring-1 ring-brand/15'
                }`}
              >
                <PlanHeader plan={plan} variant={tier} />
                {planComparisonFeatures.map((row, i) => (
                  <PlanCell key={`${tier}-${row.key}`} stripe={i % 2 === 1} variant={tier} highlight={row.highlight}>
                    {renderPlanValue(row, tier)}
                  </PlanCell>
                ))}
              </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-6">
        <Button pulseRing onClick={onCta}>
          Buy Gold Plan
        </Button>
        <Button variant="outline" onClick={onCta}>
          Buy Diomand Plan
        </Button>
      </div>
    </Section>
  )
}
