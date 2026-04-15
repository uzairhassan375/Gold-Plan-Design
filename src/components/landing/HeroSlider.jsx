import { useEffect, useState } from 'react'
import { platformPulse } from '../../data/fomo'
import { heroSlides } from '../../data/products'
import { Button } from '../ui/Button'

const aedFmt = new Intl.NumberFormat('en-AE', {
  style: 'currency',
  currency: 'AED',
  maximumFractionDigits: 0,
})

export function HeroSlider({ onCta }) {
  const [index, setIndex] = useState(0)
  const mult = platformPulse.goldVsNonGoldWeeklyRevenueMultiplier
  const nonGoldAed = platformPulse.nonGoldAvgWeeklyAed
  const goldIllustrativeAed = nonGoldAed * mult
  const highlightedPhrases = ['60 days faster', '8 times higher weekly revenue', '10 times less']

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6500)
    return () => clearInterval(t)
  }, [])

  const slide = heroSlides[index]
  const emphasizedPhrase = highlightedPhrases.find((phrase) => slide.headline.includes(phrase))
  const [beforeEmphasis, afterEmphasis] = emphasizedPhrase
    ? slide.headline.split(emphasizedPhrase)
    : [slide.headline, '']

  return (
    <div className="bg-white px-4 pb-1.5 pt-3 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-brand shadow-lg ring-1 ring-black/20">
          <div className="relative min-h-[300px] md:min-h-[320px]">
            {heroSlides.map((s, i) => (
              <div
                key={s.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  i === index ? 'z-[1] opacity-100' : 'z-0 opacity-0'
                }`}
                aria-hidden={i !== index}
              >
                <img src={s.image} alt="" className="h-full w-full object-cover opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand/95 to-neutral-950" />
              </div>
            ))}

            <div className="relative z-10 flex min-h-[300px] w-full flex-col items-center justify-center gap-6 px-5 py-8 md:min-h-[320px] md:flex-row md:items-center md:justify-between md:gap-8 md:px-8 md:py-10">
              <div
                key={slide.id}
                className="mx-auto w-full max-w-xl text-center opacity-0-start animate-fade-in-up md:mx-0 md:text-left"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-accent">Gold Plan</p>
                <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-[1.85rem] md:leading-snug lg:text-[2rem]">
                  {beforeEmphasis}
                  {emphasizedPhrase ? <span className="font-extrabold text-accent">{emphasizedPhrase}</span> : null}
                  {afterEmphasis}
                </h1>
                <div className="mt-6 flex flex-nowrap items-center justify-center gap-4 overflow-visible md:justify-start md:gap-6">
                  <div className="shrink-0 pr-1 sm:pr-2">
                    <Button pulseRing onClick={onCta}>
                      Unlock Gold Plan
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mx-auto w-full max-w-[17.5rem] shrink-0 space-y-2 md:mx-0 md:mt-0 md:w-72 md:max-w-none">
                <div className="rounded-xl border border-accent/40 bg-gradient-to-r from-accent/15 to-white/5 p-3 text-center backdrop-blur-md shadow-[0_0_20px_rgba(245,197,24,0.2)]">
                  <p className="text-base font-semibold leading-snug text-white">
                    <span className="font-extrabold text-accent">800</span> sellers subscribe to gold plan every month
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-md">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
                    weekly revenue of gold seller
                  </p>
                  <p className="mt-2 text-2xl font-bold tabular-nums leading-none text-accent">{mult}x</p>
                  <p className="mt-1 text-[11px] leading-snug text-neutral-300">
                    as compared to non-gold seller
                  </p>
                  <div
                    className="mt-3 border-t border-white/10 pt-3"
                    aria-label={`Non-Gold about ${aedFmt.format(nonGoldAed)} per week; Gold illustrative ${mult} times that`}
                  >
                    <div className="flex h-[5.5rem] items-end justify-center gap-5">
                      <div className="flex flex-col items-center gap-1">
                        <div
                          className="h-2 w-8 rounded-md bg-white/35"
                          title="Non-Gold (bar height illustrative, not to scale)"
                        />
                        <span className="text-[9px] font-semibold uppercase tracking-wide text-neutral-500">
                          Non-Gold
                        </span>
                        <p className="text-[11px] font-semibold tabular-nums text-neutral-300">
                          {aedFmt.format(nonGoldAed)}
                        </p>
                      </div>
                      <span className="self-center pb-5 text-sm font-bold text-white/25" aria-hidden>
                        vs
                      </span>
                      <div className="flex flex-col items-center gap-1">
                        <div
                          className="h-14 w-8 rounded-md bg-accent shadow-[0_0_14px_rgba(245,197,24,0.35)]"
                          title="Gold (bar height illustrative, not to scale)"
                        />
                        <span className="text-[9px] font-semibold uppercase tracking-wide text-accent">Gold</span>
                        <p className="text-[11px] font-semibold tabular-nums text-white">
                          {aedFmt.format(goldIllustrativeAed)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="border-t border-white/10 bg-black/40">
          <div className="flex items-center justify-between px-4 py-2.5 md:px-6">
            <div className="flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-accent' : 'w-1.5 bg-white/25 hover:bg-white/40'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
