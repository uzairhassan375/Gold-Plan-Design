function RewardTickerLine() {
  return (
    <span className="inline whitespace-normal">
      <span className="font-bold animate-[pulse_0.6s_ease-in-out_infinite]">Try Gold subscription Risk-FREE</span>
      <span>{' — achieve a small monthly target and we\'ll '}</span>
      <span className="font-bold">return your $69.</span>
    </span>
  )
}

export function OrdersRewardBanner() {
  return (
    <section
      className="w-full border-y border-black/15 bg-accent py-2.5 text-accent-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
      aria-label="Gold subscription offer"
    >
      <div className="overflow-hidden" aria-live="off">
        <div className="reward-ticker-track">
          <span className="inline-flex shrink-0 items-center px-8 text-sm font-medium leading-snug md:text-base">
            <RewardTickerLine />
            <span className="mx-6 shrink-0 text-accent-foreground/45" aria-hidden>
              ·
            </span>
          </span>
          <span
            className="inline-flex shrink-0 items-center px-8 text-sm font-medium leading-snug md:text-base"
            aria-hidden="true"
          >
            <RewardTickerLine />
            <span className="mx-6 shrink-0 text-accent-foreground/45">·</span>
          </span>
        </div>
      </div>
    </section>
  )
}
