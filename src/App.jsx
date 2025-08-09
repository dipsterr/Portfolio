import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ExperienceEducation from './components/ExperienceEducation'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Loader from './components/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Add smooth scrolling behavior
    const style = document.createElement('style')
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <motion.div 
      className="min-h-screen bg-neutral-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header />
      <main>
        <Hero />
        <ExperienceEducation />
        <Projects />
        <Contact />
      </main>
    </motion.div>
  )
}

export default App
