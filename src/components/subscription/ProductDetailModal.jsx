import { Modal } from '../ui/Modal'

export function ProductDetailModal({ product, open, onClose }) {
  if (!product) return null

  const { costBreakdown } = product

  return (
    <Modal open={open} onClose={onClose} title={product.name}>
      <div className="space-y-6">
        <div className="overflow-hidden rounded-xl border border-neutral-100">
          <img src={product.image} alt="" className="h-48 w-full object-cover sm:h-56" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Metric label="ROAS" value={product.roas.toFixed(1) + 'x'} />
          <Metric label="CPA" value={'$' + product.cpa} />
          <Metric label="Orders" value={product.orders.toLocaleString()} />
          <Metric label="Profit" value={'$' + product.profit.toLocaleString()} />
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Supplier</h3>
          <a
            href={product.supplierUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-brand underline-offset-2 hover:underline"
          >
            Open supplier link
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Ads strategy</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">{product.adsStrategy}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Audience targeting</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">{product.audienceTargeting}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Cost breakdown</h3>
          <ul className="mt-3 space-y-2 rounded-xl border border-neutral-100 bg-neutral-50 p-4 text-sm">
            <Row label="COGS (est.)" value={'$' + costBreakdown.cogs} />
            <Row label="Shipping (avg.)" value={'$' + costBreakdown.shipping} />
            <Row label="Platform fees" value={'$' + costBreakdown.platformFees} />
            <Row label="Ad spend share of revenue" value={costBreakdown.adSpendShare + '%'} highlight />
          </ul>
        </div>
      </div>
    </Modal>
  )
}

function Metric({ label, value }) {
  return (
    <div className="rounded-xl border border-neutral-100 bg-neutral-50 px-3 py-3 text-center">
      <p className="text-xs text-neutral-500">{label}</p>
      <p className="mt-1 font-semibold tabular-nums text-neutral-900">{value}</p>
    </div>
  )
}

function Row({ label, value, highlight }) {
  return (
    <li className={`flex justify-between gap-4 ${highlight ? 'font-semibold text-neutral-900' : 'text-neutral-700'}`}>
      <span>{label}</span>
      <span className="tabular-nums">{value}</span>
    </li>
  )
}
