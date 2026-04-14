import { useState } from 'react'
import { ProductDetailModal } from '../components/subscription/ProductDetailModal'
import { ProductList } from '../components/subscription/ProductList'
import { SubscriptionStatus } from '../components/subscription/SubscriptionStatus'

export function SubscriberPage() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <SubscriptionStatus />
      <ProductList onSelect={setSelected} />
      <ProductDetailModal product={selected} open={!!selected} onClose={() => setSelected(null)} />
      <footer className="border-t border-neutral-200 bg-neutral-50 py-10 text-center text-sm text-neutral-500">
        <p>Need help? Contact support from your account settings.</p>
      </footer>
    </>
  )
}
