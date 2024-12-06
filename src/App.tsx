import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { Solution } from './components/Solution'
import { Callout } from './components/Callout'
import { WhyItWorks } from './components/WhyItWorks'
import { DispellingMyth } from './components/DispellingMyth'
import { Footer } from './components/Footer'
import { PrivacyPolicy } from './components/PrivacyPolicy'
import { Terms } from './components/Terms'
import { Investment } from './components/Investment'
import { Calculator } from './components/Calculator'

// Home page component
const Home = () => (
  <>
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
    <DispellingMyth />
    <WhyItWorks />
    <Investment />
    <Callout />
    <Calculator />
  </>
);

function App() {
  return (
    <Router>
      <main className="bg-dark min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/investment" element={<Investment />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
