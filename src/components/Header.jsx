import React, { useState, useEffect } from 'react'

function Header({ scrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetElement = document.querySelector(href)
    if (targetElement) {
      const headerHeight = 80
      const targetPosition = targetElement.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const updateActiveLink = () => {
      const sections = document.querySelectorAll('section')
      const scrollPos = window.scrollY + 100

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveLink(`#${sectionId}`)
        }
      })
    }

    window.addEventListener('scroll', updateActiveLink)
    updateActiveLink()
    return () => window.removeEventListener('scroll', updateActiveLink)
  }, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="navContainer">
        <nav className="navbar">
          <a href="#intro" className="logo" onClick={(e) => handleNavClick(e, '#intro')}>
            Becky
          </a>

          <button className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
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

// CSS INJECTED AT THE BOTTOM - NO GLASS CARD, PURE FLOATING BUTTONS
const headerStyles = document.createElement('style')
headerStyles.textContent = `
  header {
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;
    z-index: 1000;
    background: transparent;
    transition: all 0.3s ease;
  }

  header.scrolled {
    top: 10px;
  }

  .navContainer {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    flex-wrap: wrap;
  }

  /* Logo floating in space - NO BACKGROUND */
  .logo {
    font-size: 28px;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff, #b8a8ff, #7b68ee);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: floatSpace 3s ease-in-out infinite;
    display: inline-block;
  }

  /* Navigation links - FLOATING IN SPACE, NO BACKGROUND */
  .nav-links {
    list-style: none;
    display: flex;
    gap: 25px;
    margin: 0;
    padding: 0;
  }

  .nav-links li {
    display: inline-block;
  }

  /* PURE BUTTONS IN SPACE - NO BACKGROUND, NO CARD */
  .navbar a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    padding: 8px 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    display: inline-block;
    background: transparent;
    border-radius: 30px;
    animation: floatSpace 3s ease-in-out infinite;
  }

  /* Different floating delays for each button */
  .nav-links li:nth-child(1) a { animation-delay: 0s; }
  .nav-links li:nth-child(2) a { animation-delay: 0.2s; }
  .nav-links li:nth-child(3) a { animation-delay: 0.4s; }
  .nav-links li:nth-child(4) a { animation-delay: 0.6s; }
  .nav-links li:nth-child(5) a { animation-delay: 0.8s; }
  @keyframes floatSpace {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  /* HOVER - Glass effect ONLY on hover */
  .navbar a:hover {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    transform: translateY(-3px);
  }

  /* ACTIVE - Glass effect ONLY when active */
  .navbar a.active {
    background: rgba(123, 104, 238, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(123, 104, 238, 0.6);
    color: #b8a8ff;
  }

  .mobile-menu-btn {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .mobile-menu-btn span {
    display: block;
    height: 3px;
    width: 100%;
    background: #b8a8ff;
    border-radius: 3px;
    transition: all 0.3s ease;
  }

  .mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  .mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    header {
      top: 10px;
    }

    .mobile-menu-btn {
      display: flex;
    }

    .nav-links {
      position: fixed;
      top: 70px;
      left: 20px;
      right: 20px;
      background: rgba(10, 10, 42, 0.95);
      backdrop-filter: blur(20px);
      flex-direction: column;
      gap: 10px;
      padding: 20px;
      border-radius: 20px;
      transform: translateY(-200%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      border: 1px solid rgba(138, 43, 226, 0.3);
    }

    .nav-links.active {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    .navbar a {
      display: block;
      text-align: center;
      padding: 12px 20px;
      animation: none;
    }
  }

  @media (max-width: 480px) {
    .logo {
      font-size: 24px;
    }
  }
`
document.head.appendChild(headerStyles)

export default Header