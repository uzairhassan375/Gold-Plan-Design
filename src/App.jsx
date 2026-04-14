import { useState } from 'react'
import { PageChrome } from './components/layout/PageChrome'
import { LandingPage } from './pages/LandingPage'
import { SubscriberPage } from './pages/SubscriberPage'

function App() {
  const [subscribed, setSubscribed] = useState(false)

  const handleUnlock = () => setSubscribed(true)
  const toggleDemo = () => setSubscribed((s) => !s)

  return (
    <div className="min-h-screen bg-white">
      <PageChrome subscribed={subscribed} onToggleDemo={toggleDemo} onUnlock={handleUnlock} />
      {subscribed ? <SubscriberPage /> : <LandingPage onSubscribe={handleUnlock} />}
    </div>
  )
}

export default App
