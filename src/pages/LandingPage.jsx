import { BlurredProducts } from '../components/landing/BlurredProducts'
import { ComparisonTable } from '../components/landing/ComparisonTable'
import { FAQ } from '../components/landing/FAQ'
import { FomoLiveStats } from '../components/landing/FomoLiveStats'
import { HeroSlider } from '../components/landing/HeroSlider'
import { OrdersRewardBanner } from '../components/landing/OrdersRewardBanner'
export function LandingPage({ onSubscribe }) {
  return (
    <>
      <HeroSlider onCta={onSubscribe} />
      <OrdersRewardBanner />
      <div id="fomo-stats">
        <FomoLiveStats />
      </div>
      <BlurredProducts />
      <ComparisonTable onCta={onSubscribe} />
      <FAQ />
      <footer className="border-t border-neutral-200 bg-white py-6 text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Gold Plan. Premium product intelligence for ecommerce.</p>
      </footer>
    </>
  )
}
