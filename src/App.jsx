import React, { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Welcome from './components/Welcome.jsx'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const shootingStarInterval = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Optimized shooting stars effect
  useEffect(() => {
    if (showWelcome) return

    let activeStars = []
    
    const createShootingStar = () => {
      if (activeStars.length > 5) return
      
      const star = document.createElement('div')
      star.innerHTML = '⭐'
      star.style.position = 'fixed'
      star.style.left = Math.random() * window.innerWidth + 'px'
      star.style.top = '-20px'
      star.style.fontSize = '16px'
      star.style.opacity = '0.6'
      star.style.pointerEvents = 'none'
      star.style.zIndex = '9999'
      star.style.willChange = 'transform'
      star.style.animation = `shoot ${Math.random() * 2 + 2}s linear forwards`
      
      document.body.appendChild(star)
      activeStars.push(star)
      
      setTimeout(() => {
        if (star && star.remove) {
          star.remove()
          activeStars = activeStars.filter(s => s !== star)
        }
      }, 3000)
    }
    
    shootingStarInterval.current = setInterval(createShootingStar, 8000)
    
    return () => {
      if (shootingStarInterval.current) {
        clearInterval(shootingStarInterval.current)
      }
      activeStars.forEach(star => {
        if (star && star.remove) star.remove()
      })
      activeStars = []
    }
  }, [showWelcome])

  return (
    <div className="app galaxy-container">
      {showWelcome && <Welcome setShowWelcome={setShowWelcome} />}
      
      <div className="stars"></div>
      <div className="twinkling-stars"></div>
      <div className="nebula"></div>
      
      <Header scrolled={scrolled} />
      <main className="content-wrapper">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App