import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Solution } from './components/Solution'
import { Callout } from './components/Callout'
import { WhyItWorks } from './components/WhyItWorks'
import { DispellingMyth } from './components/DispellingMyth'

function App() {
  return (
    <main className="bg-dark min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Callout />
      <WhyItWorks />
      <DispellingMyth />
    </main>
  )
}

export default App
