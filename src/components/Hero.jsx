import React from 'react'
import mineImage from '../assets/mine.jpg'
import { FiFolder, FiAward, FiCpu } from 'react-icons/fi'

function Hero() {
  return (
    <section id="hero" className="introContainer">
      <div className="intro">
        <img 
          src={mineImage} 
          alt="Rebecca Kirabo" 
          className="hero-image"
        />
        <div className="head">
          <h3 className="hero-h3">Hello, I'm</h3>
          <h1 className="hero-h1">KIRABO REBECCA</h1>
          <h2 className="hero-major">Frontend Developer</h2>
          
          <div className="motto-container">
            <p className="motto-text">Building beautiful, accessible web experiences that make a difference</p>
            <p className="motto-sub">Code with purpose • Design with passion • Create with impact</p>
          </div>

          <a href="#contact" className="cta-button">
            Get In Touch
          </a>

          {/* Stats Section with Separators */}
          <div className="stats-container">
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

// CSS AT THE BOTTOM
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
    width: 400px;
    height: 400px;
    border-radius: 50%;
    object-fit: cover;
    border: 8px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease;
    animation: float 3s ease-in-out infinite;
  }

  .hero-image:hover {
    transform: scale(1.05);
    border-color: rgba(184, 168, 255, 0.6);
    box-shadow: 0 25px 50px rgba(138, 43, 226, 0.3);
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

  .cta-button {
    display: inline-block;
    padding: 15px 35px;
    background: linear-gradient(135deg, rgba(123, 104, 238, 0.8), rgba(75, 0, 130, 0.8));
    color: white;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .cta-button:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, rgba(90, 70, 210, 0.9), rgba(55, 0, 110, 0.9));
    box-shadow: 0 10px 30px rgba(123, 104, 238, 0.3);
  }

  /* STATS SECTION - ICON AND NUMBER ON SAME LINE */
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
    .hero-image { width: 300px; height: 300px; }
    .motto-text { font-size: 1.1rem; }
    .motto-sub { font-size: 0.9rem; }
    .stats-container { justify-content: center; }
  }

  @media (max-width: 768px) {
    .introContainer { padding: 100px 20px 60px; }
    .hero-h1 { font-size: 2.5rem; }
    .hero-major { font-size: 1.5rem; }
    .hero-image { width: 250px; height: 250px; }
    .motto-text { font-size: 1rem; }
    .stat-number { font-size: 1.5rem; }
    .stat-icon { font-size: 24px; }
    .stat-divider { height: 35px; }
    .stats-container { gap: 20px; }
  }

  @media (max-width: 480px) {
    .hero-h1 { font-size: 2rem; }
    .hero-major { font-size: 1.3rem; }
    .hero-image { width: 200px; height: 200px; }
    .cta-button { padding: 12px 25px; font-size: 1rem; }
    .motto-text { font-size: 0.9rem; }
    .motto-sub { font-size: 0.8rem; word-spacing: 2px; }
    .stats-container { gap: 15px; }
    .stat-number { font-size: 1.2rem; }
    .stat-icon { font-size: 20px; }
    .stat-label { font-size: 0.65rem; }
    .stat-divider { height: 30px; }
    .stat-item { gap: 6px; }
  }
`
document.head.appendChild(styles)

export default Hero