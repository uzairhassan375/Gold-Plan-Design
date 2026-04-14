import { products } from '../../data/products'
import { Section } from '../ui/Section'

export function BlurredProducts() {
  const preview = products.slice(0, 4)

  return (
    <Section className="bg-white">
      <div className="mb-8 text-center md:mb-10">
        <p className="text-sm font-medium uppercase tracking-widest text-brand">Inside the vault</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          Winning products, hidden until you join
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-600">
          Real SKUs our members scale with—metrics verified, updated weekly.
        </p>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 md:p-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt=""
                  className="h-full w-full scale-105 object-cover blur-lg transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-neutral-900/15" />
              </div>
              <div className="space-y-3 p-4">
                <div className="min-h-[1.25rem] overflow-hidden">
                  <span
                    className="block max-w-full truncate text-sm font-semibold text-neutral-900 blur-[7px] select-none"
                    aria-hidden
                  >
                    {p.name}
                  </span>
                  <span className="sr-only">Product name hidden for non-members</span>
                </div>
                <dl className="grid grid-cols-3 gap-2 border-t border-neutral-100 pt-3 text-center">
                  <div>
                    <dt className="text-[10px] font-medium uppercase tracking-wide text-neutral-500">Orders</dt>
                    <dd className="mt-0.5 text-sm font-semibold tabular-nums text-neutral-900 sm:text-base">
                      {p.orders.toLocaleString()}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-medium uppercase tracking-wide text-neutral-500">ROAS</dt>
                    <dd className="mt-0.5 text-sm font-semibold tabular-nums text-brand sm:text-base">
                      {p.roas}x
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-medium uppercase tracking-wide text-neutral-500">CPA</dt>
                    <dd className="mt-0.5 text-sm font-semibold tabular-nums text-neutral-900 sm:text-base">
                      ${p.cpa}
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="#compare"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold tracking-tight text-accent-foreground shadow-sm transition-all duration-300 hover:bg-accent-hover hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            View more
          </a>
        </div>
      </div>
    </Section>
  )
}
