import React, { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Welcome from './components/Welcome.jsx'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const shootingStarInterval = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (showWelcome) return

    let activeStars = []

    const createShootingStar = () => {
      if (activeStars.length > 5) return

      const star = document.createElement('div')
      star.innerHTML = '⭐'
      star.style.cssText = `
        position: fixed;
        left: ${Math.random() * window.innerWidth}px;
        top: -20px;
        font-size: 16px;
        opacity: 0.6;
        pointer-events: none;
        z-index: 9999;
        will-change: transform;
        animation: shoot ${Math.random() * 2 + 2}s linear forwards;
      `

      document.body.appendChild(star)
      activeStars.push(star)

      setTimeout(() => {
        star?.remove()
        activeStars = activeStars.filter(s => s !== star)
      }, 3000)
    }

    shootingStarInterval.current = setInterval(createShootingStar, 8000)

    return () => {
      clearInterval(shootingStarInterval.current)
      activeStars.forEach(s => s?.remove())
      activeStars = []
    }
  }, [showWelcome])

  return (
    <div className="app galaxy-container">
      {showWelcome && <Welcome setShowWelcome={setShowWelcome} />}

      <div className="stars" />
      <div className="twinkling-stars" />
      <div className="nebula" />

      <Header scrolled={scrolled} />
      <main className="content-wrapper">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App