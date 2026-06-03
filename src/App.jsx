import React, { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Welcome from './components/Welcome.jsx'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const shootingStarInterval = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolledPercent = (winScroll / height) * 100
      setScrollProgress(scrolledPercent)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Optimized shooting stars effect with fewer stars and cleanup
  useEffect(() => {
    // Don't run if welcome screen is showing
    if (showWelcome) return

    let activeStars = []
    
    const createShootingStar = () => {
      // Limit number of stars on screen at once
      if (activeStars.length > 5) return
      
      const star = document.createElement('div')
      star.innerHTML = '⭐'
      star.style.position = 'fixed'
      star.style.left = Math.random() * window.innerWidth + 'px'
      star.style.top = '-20px'
      star.style.fontSize = '16px' // Smaller size for better performance
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
    
    // Longer interval between stars for better performance
    shootingStarInterval.current = setInterval(createShootingStar, 8000)
    
    return () => {
      if (shootingStarInterval.current) {
        clearInterval(shootingStarInterval.current)
      }
      // Clean up all stars on unmount
      activeStars.forEach(star => {
        if (star && star.remove) star.remove()
      })
      activeStars = []
    }
  }, [showWelcome])

  return (
    <div className="app galaxy-container">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      
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
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App