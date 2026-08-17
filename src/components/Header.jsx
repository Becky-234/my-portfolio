import React, { useState, useEffect } from 'react'

function Header({ scrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  const navItems = [
    { name: 'About',          href: '#about' },
    { name: 'Skills',         href: '#skills' },
    { name: 'Projects',       href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact',        href: '#contact' },
  ]

  const scrollTo = (href) => {
    console.log('Scrolling to:', href)
    
    const id = href.replace('#', '')
    
    let target = document.getElementById(id)
    if (!target) {
      target = document.querySelector(href)
    }
    if (!target) {
      target = document.querySelector(`section[id="${id}"]`)
    }
    
    if (target) {
      console.log('Found target:', target)
      
      // Using scrollIntoView
      try {
        target.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        })
      } catch {
        // Method 2: Using window.scrollTo
        const rect = target.getBoundingClientRect()
        const absoluteTop = rect.top + window.pageYOffset - 80
        window.scrollTo({
          top: absoluteTop,
          behavior: 'smooth'
        })
      }
      
      if (window.location.hash !== href) {
        history.pushState(null, '', href)
      }
      
      setIsMenuOpen(false)
    } else {
      console.error('Target not found:', href)
      window.location.hash = href
      setIsMenuOpen(false)
    }
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    e.stopPropagation()
    scrollTo(href)
  }

  useEffect(() => {
    const checkSections = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'contact']
      console.log('Checking for sections:')
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el) {
          console.log(` #${id} found`)
        } else {
          console.log(` #${id} NOT found`)
        }
      })
    }
    
    checkSections()
    setTimeout(checkSections, 500)
    setTimeout(checkSections, 1000)
  }, [])

  useEffect(() => {
    const updateActiveLink = () => {
      const hash = window.location.hash
      if (hash) {
        setActiveLink(hash)
      }
    }

    window.addEventListener('hashchange', updateActiveLink)
    updateActiveLink()

    const onScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      if (sections.length === 0) return
      
      let current = ''
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 150) {
          current = `#${section.id}`
        }
      })
      
      if (current) {
        setActiveLink(current)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    
    return () => {
      window.removeEventListener('hashchange', updateActiveLink)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        scrollTo(hash)
      }, 300)
    }
  }, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="navContainer">
        <nav className="navbar">

          <a
            href="#hero"
            className="logo"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            Becky
          </a>

          <button
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`nav-link ${activeLink === item.href ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

        </nav>
      </div>
    </header>
  )
}

const headerStyles = document.createElement('style')
headerStyles.textContent = `
  header {
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;
    z-index: 1000;
    background: transparent;
    transition: top 0.3s ease;
  }

  header.scrolled {
    top: 10px;
  }

  .navContainer {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 28px;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff, #b8a8ff, #7b68ee);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.25s ease;
    display: inline-block;
    animation: floatSpace 3s ease-in-out infinite;
  }

  .logo:hover {
    filter: brightness(1.2);
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 6px;
    margin: 0;
    padding: 0;
  }

  .nav-link {
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    color: rgba(255,255,255,0.85);
    padding: 8px 18px;
    border-radius: 30px;
    border: 1px solid transparent;
    background: transparent;
    cursor: pointer;
    display: inline-block;
    transition: background 0.25s ease, border-color 0.25s ease,
                color 0.25s ease, transform 0.25s ease,
                box-shadow 0.25s ease;
    animation: floatSpace 3s ease-in-out infinite;
  }

  .nav-links li:nth-child(1) .nav-link { animation-delay: 0s; }
  .nav-links li:nth-child(2) .nav-link { animation-delay: 0.2s; }
  .nav-links li:nth-child(3) .nav-link { animation-delay: 0.4s; }
  .nav-links li:nth-child(4) .nav-link { animation-delay: 0.6s; }
  .nav-links li:nth-child(5) .nav-link { animation-delay: 0.8s; }

  @keyframes floatSpace {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-5px); }
  }

  .nav-link:hover {
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(10px);
    border-color: rgba(255,255,255,0.25);
    color: #ffffff;
    transform: translateY(-2px);
    animation: none;
  }

  .nav-link.active {
    background: rgba(123,104,238,0.25);
    backdrop-filter: blur(10px);
    border-color: rgba(123,104,238,0.55);
    color: #b8a8ff;
    animation: none;
  }

  .mobile-menu-btn {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 28px;
    height: 20px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
  }

  .mobile-menu-btn span {
    display: block;
    height: 2.5px;
    width: 100%;
    background: #b8a8ff;
    border-radius: 3px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .mobile-menu-btn.active span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
  .mobile-menu-btn.active span:nth-child(2) { opacity: 0; }
  .mobile-menu-btn.active span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }

  @media (max-width: 768px) {
    header { top: 10px; }

    .mobile-menu-btn { display: flex; }

    .nav-links {
      position: fixed;
      top: 68px;
      left: 16px;
      right: 16px;
      background: rgba(10,10,42,0.96);
      backdrop-filter: blur(24px);
      flex-direction: column;
      gap: 6px;
      padding: 16px;
      border-radius: 18px;
      border: 1px solid rgba(138,43,226,0.3);
      transform: translateY(-20px);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s;
    }

    .nav-links.active {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }

    .nav-link {
      display: block;
      text-align: center;
      padding: 12px 20px;
      animation: none;
      font-size: 15px;
    }
  }

  @media (max-width: 480px) {
    .logo { font-size: 22px; }
  }
`
document.head.appendChild(headerStyles)

export default Header