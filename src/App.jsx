import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import PracticeArena from './components/PracticeArena'
import Gamification from './components/Gamification'
import UnderTheHood from './components/UnderTheHood'
import WhoWhy from './components/WhoWhy'
import WaitlistForm from './components/WaitlistForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <PracticeArena />
        <Gamification />
        <UnderTheHood />
        <WhoWhy />
        <WaitlistForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
