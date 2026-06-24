import React from 'react'
import mineImage from '../assets/MY.jpeg'
import { FiFolder, FiAward, FiDownload } from 'react-icons/fi'
import { FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Hero() {
  const imageRef   = useScrollReveal({ threshold: 0.2 })
  const greetRef   = useScrollReveal({ threshold: 0.2 })
  const nameRef    = useScrollReveal({ threshold: 0.2 })
  const titleRef   = useScrollReveal({ threshold: 0.2 })
  const mottoRef   = useScrollReveal({ threshold: 0.2 })
  const ctaRef     = useScrollReveal({ threshold: 0.2 })
  const statsRef   = useScrollReveal({ threshold: 0.2 })
  const socialRef  = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="hero" className="introContainer">
      <div className="intro">

        <img
          ref={imageRef}
          src={mineImage}
          alt="Rebecca Kirabo"
          className="hero-image reveal reveal-left"
        />

        <div className="head">
          <h3 ref={greetRef} className="hero-h3 reveal">Hello, I'm</h3>
          <h1 ref={nameRef}  className="hero-h1 reveal" style={{ transitionDelay: '0.1s' }}>KIRABO REBECCA</h1>
          <h2 ref={titleRef} className="hero-major reveal" style={{ transitionDelay: '0.2s' }}>Frontend Developer</h2>

          <div ref={mottoRef} className="motto-container reveal" style={{ transitionDelay: '0.3s' }}>
            <p className="motto-text">Building beautiful, accessible web experiences that make a difference</p>
            <p className="motto-sub">Code with purpose • Design with passion • Create with impact</p>
          </div>

          <div ref={ctaRef} className="cta-group reveal" style={{ transitionDelay: '0.4s' }}>
            <a href="#contact" className="cta-button">
              Get In Touch
            </a>
            <a href="/Kirabo_Rebecca_CV.pdf" download className="cta-button cta-outline">
              <FiDownload className="cta-icon" />
              Download CV
            </a>
          </div>

          <div ref={socialRef} className="social-links reveal" style={{ transitionDelay: '0.45s' }}>
            <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X / Twitter">
              <svg className="social-icon-x" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          <div ref={statsRef} className="stats-container stagger-children" style={{ transitionDelay: '0.5s' }}>
            <div className="stat-item">
              <FiFolder className="stat-icon" />
              <span className="stat-number">3+</span>
              <span className="stat-label">PROJECTS BUILT</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <FiAward className="stat-icon" />
              <span className="stat-number">3</span>
              <span className="stat-label">CERTIFICATIONS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

const styles = document.createElement('style')
styles.textContent = `
  .introContainer {
    padding: 100px 15px 75px;
    background: transparent;
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .intro {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 55px;
    position: relative;
    z-index: 1;
  }

  .hero-image {
    width: 440px;
    height: 440px;
    border-radius: 50%;
    object-fit: cover;
    border: 8px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                border-color 0.5s ease,
                box-shadow 0.5s ease;
    animation: float 3s ease-in-out infinite;
    flex-shrink: 0;
  }

  .hero-image:hover {
    transform: scale(1.05);
    border-color: rgba(184, 168, 255, 0.6);
    box-shadow: 0 25px 50px rgba(138, 43, 226, 0.3);
  }

  .hero-image.reveal:not(.visible) {
    animation: none;
  }

  .hero-image.reveal.visible {
    animation: float 3s ease-in-out infinite;
  }

  .head {
    flex: 1;
    text-align: left;
    padding: 20px;
  }

  .hero-h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #b8a8ff;
    margin-bottom: 10px;
  }

  .hero-h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    background: linear-gradient(135deg, #ffffff, #b8a8ff, #7b68ee);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .hero-major {
    font-size: 1.8rem;
    font-weight: 600;
    color: #a0c0ff;
    margin-bottom: 30px;
  }

  .motto-container {
    margin-bottom: 40px;
  }

  .motto-text {
    font-size: 1.3rem;
    font-style: normal;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.95);
    margin-bottom: 15px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  .motto-sub {
    font-size: 1rem;
    color: #b8a8ff;
    letter-spacing: 1px;
    font-weight: 400;
    word-spacing: 4px;
    font-style: normal;
  }

  /* CTA GROUP */
  .cta-group {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 28px;
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 15px 35px;
    background: linear-gradient(135deg, rgba(123, 104, 238, 0.8), rgba(75, 0, 130, 0.8));
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  }

  .cta-button:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, rgba(90, 70, 210, 0.9), rgba(55, 0, 110, 0.9));
    box-shadow: 0 10px 30px rgba(123, 104, 238, 0.3);
  }

  .cta-outline {
    background: transparent;
    border: 1.5px solid rgba(184, 168, 255, 0.5);
    color: #b8a8ff;
  }

  .cta-outline:hover {
    background: rgba(184, 168, 255, 0.1);
    border-color: rgba(184, 168, 255, 0.8);
    box-shadow: 0 10px 30px rgba(184, 168, 255, 0.15);
    color: #ffffff;
  }

  .cta-icon {
    font-size: 1.1rem;
  }

  /* SOCIAL LINKS */
  .social-links {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 36px;
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1.5px solid rgba(184, 168, 255, 0.35);
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.25s ease, border-color 0.25s ease,
                background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  }

  .social-link:hover {
    color: #ffffff;
    border-color: #b8a8ff;
    background: rgba(184, 168, 255, 0.12);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(123, 104, 238, 0.3);
  }

  .social-icon-x {
    width: 1.1rem;
    height: 1.1rem;
  }

  /* STATS */
  .stats-container {
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .stat-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .stat-icon {
    font-size: 28px;
    color: #b8a8ff;
  }

  .stat-number {
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff, #b8a8ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .stat-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 1px;
    margin-left: 5px;
  }

  .stat-divider {
    width: 1px;
    height: 40px;
    background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @media (max-width: 968px) {
    .intro { flex-direction: column; text-align: center; gap: 40px; }
    .head { text-align: center; }
    .hero-h1 { font-size: 3rem; }
    .hero-image { width: 340px; height: 340px; }
    .motto-text { font-size: 1.1rem; }
    .motto-sub { font-size: 0.9rem; }
    .stats-container { justify-content: center; }
    .cta-group { justify-content: center; }
    .social-links { justify-content: center; }
  }

  @media (max-width: 768px) {
    .introContainer { padding: 100px 20px 60px; }
    .hero-h1 { font-size: 2.5rem; }
    .hero-major { font-size: 1.5rem; }
    .hero-image { width: 280px; height: 280px; }
    .motto-text { font-size: 1rem; }
    .stat-number { font-size: 1.5rem; }
    .stat-icon { font-size: 24px; }
    .stat-divider { height: 35px; }
    .stats-container { gap: 20px; }
  }

  @media (max-width: 480px) {
    .hero-h1 { font-size: 2rem; }
    .hero-major { font-size: 1.3rem; }
    .hero-image { width: 220px; height: 220px; }
    .cta-button { padding: 12px 25px; font-size: 1rem; }
    .motto-text { font-size: 0.9rem; }
    .motto-sub { font-size: 0.8rem; word-spacing: 2px; }
    .stats-container { gap: 15px; }
    .stat-number { font-size: 1.2rem; }
    .stat-icon { font-size: 20px; }
    .stat-label { font-size: 0.65rem; }
    .stat-divider { height: 30px; }
    .stat-item { gap: 6px; }
    .social-link { width: 38px; height: 38px; font-size: 1.05rem; }
  }
`
document.head.appendChild(styles)

export default Hero