import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Interests from './components/Interests'

const SECTIONS = ['about', 'experience', 'education', 'projects', 'skills', 'interests']

export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const observers = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.25, rootMargin: '-10% 0px -60% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = (id) => {
    setNavOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navigation
        activeSection={activeSection}
        navOpen={navOpen}
        onToggleNav={() => setNavOpen((o) => !o)}
        onNavClick={handleNavClick}
      />
      <main className="main-content" id="page-top">
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Interests />
      </main>
    </div>
  )
}
