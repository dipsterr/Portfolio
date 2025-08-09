import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import ExperienceEducation from './components/ExperienceEducation'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main>
        <Hero />
        <ExperienceEducation />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
