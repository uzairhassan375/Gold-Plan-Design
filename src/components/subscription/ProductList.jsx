import { products } from '../../data/products'
import { Section } from '../ui/Section'

export function ProductList({ onSelect }) {
  return (
    <Section className="bg-neutral-50 py-0 pb-8 md:pb-10">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">Your product vault</h2>
        <p className="mt-2 text-neutral-600">Tap a card for supplier link, ads playbook, and cost model.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onSelect(p)}
            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-lg opacity-0-start animate-fade-in-up"
            style={{ animationDelay: `${Math.min(i * 80, 400)}ms` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-neutral-900 group-hover:text-brand transition-colors">
                {p.name}
              </h3>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <div>
                  <dt className="text-neutral-500">ROAS</dt>
                  <dd className="font-semibold tabular-nums text-neutral-900">{p.roas}x</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">CPA</dt>
                  <dd className="font-semibold tabular-nums text-neutral-900">${p.cpa}</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Orders</dt>
                  <dd className="font-semibold tabular-nums text-neutral-900">{p.orders.toLocaleString()}</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Profit</dt>
                  <dd className="font-semibold tabular-nums text-brand">${p.profit.toLocaleString()}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs font-medium text-brand">View full breakdown →</p>
            </div>
          </button>
        ))}
      </div>
    </Section>
  )
}
