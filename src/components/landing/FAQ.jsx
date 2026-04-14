import { useState } from 'react'
import { Section } from '../ui/Section'

const faqs = [
  {
    q: 'After subscribing to Gold, can I do dropshipping in all Zambeel markets?',
    a: 'Yes, you can start dropshipping in all markets where Zambeel is currently operating.',
  },
  {
    q: 'Will I receive creatives for winning products?',
    a: 'Yes, you will get access to creatives for selected winning products.',
  },
  {
    q: 'When will my personalized WhatsApp group be created?',
    a: 'Your personalized WhatsApp group will be created within 24–48 hours on the number provided during signup.',
  },
  {
    q: 'Will Zambeel run ads on my behalf?',
    a: 'No, Zambeel does not run ads directly. However, we can connect you with our trusted partner agencies who can assist you with advertising services for a fee.',
  },
  {
    q: 'How will I get my $69 back?',
    a: 'If you achieve the required number of delivered orders in a given month, your $69 will be rewarded in the form of a free Gold subscription for the following month.',
  },
  {
    q: 'Can I get a refund for my Gold subscription?',
    a: 'No, the Gold subscription is non-refundable.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <Section id="faq" className="bg-neutral-50">
      <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          Zambeel Gold Subscription – FAQs
        </h2>
      </div>

      <div className="mx-auto max-w-2xl divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white px-2 shadow-sm">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q} className="px-4 py-1">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-neutral-900 transition-colors hover:text-brand"
                aria-expanded={isOpen}
              >
                {item.q}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-brand transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-4 text-sm leading-relaxed text-neutral-600">{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
