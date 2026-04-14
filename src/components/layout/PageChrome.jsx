import { Button } from '../ui/Button'

/**
 * Minimal chrome for embedding as a single page inside an existing site.
 * No full “marketing site” nav — title + optional demo toggle + primary CTA.
 */
export function PageChrome({ subscribed, onToggleDemo, onUnlock }) {
  return (
    <div className="border-b border-brand/10 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="min-w-0">
          <p className="truncate text-xs font-medium uppercase tracking-widest text-brand">Membership</p>
          <p className="truncate text-sm font-semibold text-neutral-900">Gold Plan</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onToggleDemo}
            className="hidden rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-neutral-500 transition-colors hover:border-brand/40 hover:text-brand sm:inline-flex"
          >
            {subscribed ? 'Preview landing' : 'Preview member'}
          </button>
          {!subscribed ? (
            <Button pulseRing onClick={onUnlock} className="!px-4 !py-2 text-xs sm:!px-5 sm:text-sm">
              Unlock Gold Plan
            </Button>
          ) : (
            <span className="rounded-full bg-accent-muted px-3 py-1.5 text-xs font-semibold text-brand">
              Active
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
