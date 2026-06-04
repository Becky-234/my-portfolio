import React from 'react'
import { FiHeart, FiGithub, FiLinkedin, FiMapPin, FiMail } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Footer() {
  const currentYear = new Date().getFullYear()

  const brandRef   = useScrollReveal({ threshold: 0.1 })
  const linksRef   = useScrollReveal({ threshold: 0.1 })
  const contactRef = useScrollReveal({ threshold: 0.1 })
  const socialRef  = useScrollReveal({ threshold: 0.1 })
  const bottomRef  = useScrollReveal({ threshold: 0.1 })

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">

          {/* Logo and Tagline */}
          <div ref={brandRef} className="footer-section reveal" style={{ transitionDelay: '0s' }}>
            <h3 className="footer-logo">Becky</h3>
            <p className="footer-tagline">Building beautiful, accessible web experiences that make a difference</p>
          </div>

          {/* Quick Links */}
          <div ref={linksRef} className="footer-section reveal" style={{ transitionDelay: '0.1s' }}>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div ref={contactRef} className="footer-section reveal" style={{ transitionDelay: '0.2s' }}>
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact">
              <FiMail size={16} />
              <a href="mailto:bkirabo853@gmail.com">bkirabo853@gmail.com</a>
            </div>
            <div className="footer-contact">
              <FiMapPin size={16} />
              <span>Kampala, Uganda</span>
            </div>
          </div>

          {/* Social Links */}
          <div ref={socialRef} className="footer-section reveal" style={{ transitionDelay: '0.3s' }}>
            <h4 className="footer-title">Follow Me</h4>
            <div className="footer-social">
              <a href="https://github.com/Becky-234" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rebecca-kirabo-b841002ab/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FiLinkedin size={20} />
              </a>
              <a href="https://twitter.com/@KiraboReberbyk" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div ref={bottomRef} className="footer-bottom reveal" style={{ transitionDelay: '0.4s' }}>
          <p>© {currentYear} Kirabo Rebecca. All rights reserved.</p>
          <p className="footer-made-with">
            Made with <FiHeart size={14} color="#ff6b6b" /> using React
          </p>
        </div>
      </div>
    </footer>
  )
}

// CSS AT THE BOTTOM
const styles = document.createElement('style')
styles.textContent = `
  .footer {
    background: rgba(10, 10, 42, 0.6);
    backdrop-filter: blur(15px);
    border-top: 1px solid rgba(138, 43, 226, 0.3);
    padding: 50px 20px 20px;
    margin-top: 50px;
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
  }

  .footer-section {
    text-align: left;
  }

  .footer-logo {
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff, #b8a8ff, #7b68ee);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 15px;
  }

  .footer-tagline {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.6;
    max-width: 250px;
  }

  .footer-title {
    color: #b8a8ff;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }

  .footer-links {
    list-style: none;
    padding: 0;
  }

  .footer-links li {
    margin-bottom: 12px;
  }

  .footer-links a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 0.9rem;
  }

  .footer-links a:hover {
    color: #b8a8ff;
    transform: translateX(5px);
    display: inline-block;
  }

  .footer-contact {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }

  .footer-contact a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-contact a:hover {
    color: #b8a8ff;
  }

  .footer-social {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  .footer-social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 50%;
    color: white;
    transition: all 0.3s ease;
  }

  .footer-social-link:hover {
    background: rgba(123, 104, 238, 0.3);
    border-color: rgba(123, 104, 238, 0.5);
    transform: translateY(-3px);
  }

  .footer-bottom {
    padding-top: 20px;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
  }

  .footer-bottom p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
  }

  .footer-made-with {
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .footer { padding: 40px 20px 20px; }
    .footer-content { grid-template-columns: 1fr; gap: 30px; text-align: center; }
    .footer-section { text-align: center; }
    .footer-tagline { max-width: 100%; }
    .footer-contact { justify-content: center; }
    .footer-social { justify-content: center; }
    .footer-bottom { flex-direction: column; text-align: center; }
  }

  @media (max-width: 480px) {
    .footer { padding: 30px 15px 15px; }
    .footer-logo { font-size: 1.5rem; }
    .footer-title { font-size: 1rem; }
  }
`
document.head.appendChild(styles)

export default Footer