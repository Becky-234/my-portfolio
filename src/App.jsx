import React, { useState, useEffect } from 'react'
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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add shooting stars effect globally
  useEffect(() => {
    const createShootingStar = () => {
      const star = document.createElement('div')
      star.innerHTML = '⭐'
      star.style.position = 'fixed'
      star.style.left = Math.random() * window.innerWidth + 'px'
      star.style.top = '-20px'
      star.style.fontSize = '20px'
      star.style.opacity = '0.8'
      star.style.pointerEvents = 'none'
      star.style.zIndex = '9999'
      star.style.animation = `shoot ${Math.random() * 2 + 2}s linear forwards`

      document.body.appendChild(star)

      setTimeout(() => {
        if (star && star.remove) {
          star.remove()
        }
      }, 3000)
    }

    const interval = setInterval(createShootingStar, 5000)
    return () => clearInterval(interval)
  }, [])

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
      <Footer />  {/* Add Footer here */}
    </div>
  )
}

export default App