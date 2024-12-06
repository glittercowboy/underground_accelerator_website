import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Solution } from './components/Solution'
import { Callout } from './components/Callout'
import { WhyItWorks } from './components/WhyItWorks'
import { DispellingMyth } from './components/DispellingMyth'

function App() {
  return (
    <main className="bg-dark min-h-screen">
      <div className="relative">
        <header className="absolute top-8 w-full z-50">
          <div className="container">
            <div className="flex justify-center">
              <img 
                src="/images/ua-logo.png" 
                alt="Underground Accelerator" 
                className="h-16 w-auto"
              />
            </div>
          </div>
        </header>
        <Hero />
      </div>
      <Problem />
      <Solution />
      <Callout />
      <WhyItWorks />
      <DispellingMyth />
    </main>
  )
}

export default App
