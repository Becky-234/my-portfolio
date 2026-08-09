import React from 'react'
import mineImage from '../assets/MY.jpeg'
import { FiFolder, FiAward, FiDownload, FiSmartphone, FiGlobe } from 'react-icons/fi'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Hero() {
  const imageRef   = useScrollReveal({ threshold: 0.2 })
  const textRef    = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="hero" className="hero-section">

      {/* Decorative ambient orbs */}
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />
      <div className="hero-orb hero-orb--3" aria-hidden="true" />

      <div className="hero-inner">

        {/* ── LEFT: Photo frame ── */}
        <div ref={imageRef} className="hero-photo-col reveal reveal-left">

          {/* Outer spinning ring */}
          <div className="hero-ring hero-ring--outer" aria-hidden="true">
            <div className="hero-ring-dot" />
          </div>

          {/* Middle dashed ring */}
          <div className="hero-ring hero-ring--mid" aria-hidden="true" />

          {/* Photo itself */}
          <div className="hero-photo-wrap">
            <img
              src={mineImage}
              alt="Rebecca Kirabo"
              className="hero-photo"
            />
            {/* Glassy colour wash over photo */}
            <div className="hero-photo-gloss" aria-hidden="true" />
          </div>

          {/* Badge — Projects */}
          <div className="hero-badge hero-badge--projects" aria-label="5+ projects built">
            <FiFolder className="hb-icon" />
            <div className="hb-text">
              <span className="hb-num">5+</span>
              <span className="hb-label">Projects</span>
            </div>
          </div>

          {/* Badge — Certifications */}
          <div className="hero-badge hero-badge--certs" aria-label="3 certifications">
            <FiAward className="hb-icon" />
            <div className="hb-text">
              <span className="hb-num">3</span>
              <span className="hb-label">Certs</span>
            </div>
          </div>

          {/* Badge — Stack pill at bottom */}
          <div className="hero-stack-pill" aria-hidden="true">
            <FiGlobe size={12} /> Web &nbsp;·&nbsp; <FiSmartphone size={12} /> Mobile
          </div>

        </div>

        {/* ── RIGHT: Text ── */}
        <div ref={textRef} className="hero-text-col reveal reveal-right">

          {/* Eyebrow */}
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-line" aria-hidden="true" />
            Hello, I'm
          </p>

          {/* Name — the signature element */}
          <h1 className="hero-name" aria-label="Kirabo Rebecca">
            <span className="hero-name-first">KIRABO</span>
            <span className="hero-name-last">
              <span className="hero-name-outline">REB</span>ECCA
            </span>
          </h1>

          {/* Title strip */}
          <div className="hero-title-strip">
            <span className="hero-title-text">Full Stack Developer</span>
          </div>

          {/* Tagline */}
          <p className="hero-tagline">
            Building scalable web &amp; mobile experiences<br />
            that make a real difference.
          </p>
          <p className="hero-sub-tagline">
            Code with purpose&nbsp;&nbsp;·&nbsp;&nbsp;Design with passion&nbsp;&nbsp;·&nbsp;&nbsp;Create with impact
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#contact" className="hero-cta-primary">Get In Touch</a>
            <a
              href="https://drive.google.com/drive/folders/1sSEJLoKRtXU1tDqc-cjwCZVEEgEKzv88"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-outline"
            >
              <FiDownload /> Download CV
            </a>
          </div>

          {/* Socials */}
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/rebecca-kirabo-b841002ab/" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://github.com/Becky-234" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://twitter.com/@KiraboReberbyk" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="X / Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ── Styles ── */
const styles = document.createElement('style')
styles.textContent = `
  /* ── Section ── */
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 120px 60px 80px;
    position: relative;
    overflow: hidden;
    background: transparent;
  }

  /* ── Ambient orbs ── */
  .hero-orb {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(80px);
    opacity: 0.18;
  }
  .hero-orb--1 {
    width: 520px; height: 520px;
    background: radial-gradient(circle, #7c3aed, transparent 70%);
    top: -120px; left: -140px;
    animation: orbDrift 12s ease-in-out infinite alternate;
  }
  .hero-orb--2 {
    width: 380px; height: 380px;
    background: radial-gradient(circle, #2563eb, transparent 70%);
    bottom: -80px; right: -80px;
    animation: orbDrift 16s ease-in-out infinite alternate-reverse;
  }
  .hero-orb--3 {
    width: 260px; height: 260px;
    background: radial-gradient(circle, #c084fc, transparent 70%);
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    animation: orbDrift 20s ease-in-out infinite alternate;
    opacity: 0.1;
  }
  @keyframes orbDrift {
    from { transform: translate(0,0); }
    to   { transform: translate(30px, 20px); }
  }

  /* ── Layout ── */
  .hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 420px 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
    width: 100%;
  }

  /* ════════════════════════════════
     PHOTO COLUMN
  ════════════════════════════════ */
  .hero-photo-col {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 420px;
    height: 420px;
  }

  /* Spinning outer ring */
  .hero-ring {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  .hero-ring--outer {
    inset: -28px;
    border: 1.5px solid rgba(184, 168, 255, 0.25);
    animation: spinRing 18s linear infinite;
  }

  .hero-ring-dot {
    position: absolute;
    top: 50%;
    left: -5px;
    width: 10px;
    height: 10px;
    background: #b8a8ff;
    border-radius: 50%;
    box-shadow: 0 0 10px #b8a8ff, 0 0 20px rgba(184,168,255,0.5);
    transform: translateY(-50%);
  }

  /* Dashed mid ring */
  .hero-ring--mid {
    inset: -14px;
    border: 1px dashed rgba(123, 104, 238, 0.3);
    animation: spinRing 28s linear infinite reverse;
  }

  @keyframes spinRing {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  /* Photo container */
  .hero-photo-wrap {
    width: 380px;
    height: 380px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    border: 3px solid rgba(255,255,255,0.08);
    box-shadow:
      0 0 0 6px rgba(123,104,238,0.12),
      0 0 0 12px rgba(123,104,238,0.07),
      0 30px 80px rgba(0,0,0,0.5),
      inset 0 0 40px rgba(123,104,238,0.1);
    animation: floatPhoto 5s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes floatPhoto {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-12px); }
  }

  .hero-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }

  .hero-photo-wrap:hover .hero-photo {
    transform: scale(1.06);
  }

  /* Gloss sheen */
  .hero-photo-gloss {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(184,168,255,0.08) 0%,
      transparent 40%,
      rgba(123,104,238,0.06) 100%
    );
    pointer-events: none;
    border-radius: 50%;
  }

  /* ── Floating badges ── */
  .hero-badge {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 16px;
    background: rgba(15, 12, 35, 0.75);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255,255,255,0.12);
    box-shadow: 0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08);
    white-space: nowrap;
    animation: floatPhoto 5s ease-in-out infinite;
  }

  .hero-badge--projects {
    bottom: 40px;
    left: -30px;
    animation-delay: -1s;
  }

  .hero-badge--certs {
    top: 40px;
    right: -30px;
    animation-delay: -2.5s;
  }

  .hb-icon {
    font-size: 1.2rem;
    color: #b8a8ff;
    flex-shrink: 0;
  }

  .hb-text {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }

  .hb-num {
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: -0.5px;
  }

  .hb-label {
    font-size: 0.65rem;
    font-weight: 500;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  /* Stack pill at bottom of frame */
  .hero-stack-pill {
    position: absolute;
    bottom: -18px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 18px;
    border-radius: 30px;
    background: rgba(123,104,238,0.2);
    border: 1px solid rgba(123,104,238,0.4);
    backdrop-filter: blur(12px);
    color: #b8a8ff;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.8px;
    white-space: nowrap;
  }

  /* ════════════════════════════════
     TEXT COLUMN
  ════════════════════════════════ */
  .hero-text-col {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* Eyebrow */
  .hero-eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.85rem;
    font-weight: 500;
    color: #b8a8ff;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  .hero-eyebrow-line {
    display: block;
    width: 36px;
    height: 1.5px;
    background: linear-gradient(90deg, #7b68ee, #b8a8ff);
    border-radius: 2px;
  }

  /* ── Name — signature element ── */
  .hero-name {
    display: flex;
    flex-direction: column;
    line-height: 0.88;
    margin-bottom: 24px;
    user-select: none;
  }

  .hero-name-first {
    font-size: clamp(3.8rem, 7vw, 6rem);
    font-weight: 800;
    letter-spacing: -2px;
    background: linear-gradient(135deg, #ffffff 0%, #d0c8ff 50%, #7b68ee 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    /* Subtle text shadow for depth */
    filter: drop-shadow(0 0 30px rgba(123,104,238,0.4));
  }

  .hero-name-last {
    font-size: clamp(3.8rem, 7vw, 6rem);
    font-weight: 800;
    letter-spacing: -2px;
    color: #ffffff;
    display: flex;
    align-items: baseline;
    gap: 0;
  }

  /* "REB" rendered as outline text — the unique typographic signature */
  .hero-name-outline {
    -webkit-text-stroke: 1.5px rgba(255,255,255,0.55);
    color: transparent;
    letter-spacing: -2px;
  }

  /* Title strip */
  .hero-title-strip {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 28px;
    width: fit-content;
  }

  .hero-title-text {
    font-size: 1rem;
    font-weight: 500;
    color: rgba(255,255,255,0.6);
    letter-spacing: 2.5px;
    text-transform: uppercase;
    padding: 6px 16px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 4px;
    background: rgba(255,255,255,0.03);
  }

  /* Taglines */
  .hero-tagline {
    font-size: 1.15rem;
    font-weight: 400;
    color: rgba(255,255,255,0.82);
    line-height: 1.7;
    margin-bottom: 10px;
  }

  .hero-sub-tagline {
    font-size: 0.8rem;
    color: rgba(184,168,255,0.65);
    letter-spacing: 1.2px;
    margin-bottom: 36px;
  }

  /* CTAs */
  .hero-ctas {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
    margin-bottom: 28px;
  }

  .hero-cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 32px;
    border-radius: 6px;
    background: linear-gradient(135deg, #7b68ee, #4f0ea3);
    color: #fff;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.4px;
    transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
    box-shadow: 0 4px 24px rgba(123,104,238,0.35);
  }

  .hero-cta-primary:hover {
    transform: translateY(-3px);
    filter: brightness(1.15);
    box-shadow: 0 10px 36px rgba(123,104,238,0.5);
  }

  .hero-cta-outline {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 32px;
    border-radius: 6px;
    border: 1.5px solid rgba(184,168,255,0.4);
    color: #b8a8ff;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.4px;
    transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
    background: rgba(184,168,255,0.04);
  }

  .hero-cta-outline:hover {
    transform: translateY(-3px);
    background: rgba(184,168,255,0.1);
    border-color: rgba(184,168,255,0.7);
    color: #fff;
  }

  /* Socials */
  .hero-socials {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .hero-social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid rgba(184,168,255,0.2);
    background: rgba(255,255,255,0.03);
    color: rgba(255,255,255,0.6);
    font-size: 1.1rem;
    text-decoration: none;
    transition: all 0.25s ease;
  }

  .hero-social-link:hover {
    color: #fff;
    border-color: #b8a8ff;
    background: rgba(184,168,255,0.1);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(123,104,238,0.3);
  }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .hero-section { padding: 120px 40px 80px; }
    .hero-inner { gap: 50px; grid-template-columns: 360px 1fr; }
    .hero-photo-col { width: 360px; height: 360px; }
    .hero-photo-wrap { width: 320px; height: 320px; }
  }

  @media (max-width: 860px) {
    .hero-section { padding: 110px 24px 60px; }
    .hero-inner {
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: center;
      gap: 60px;
    }
    .hero-photo-col { width: 300px; height: 300px; }
    .hero-photo-wrap { width: 270px; height: 270px; }
    .hero-eyebrow { justify-content: center; }
    .hero-name { align-items: center; }
    .hero-title-strip { margin: 0 auto 28px; }
    .hero-ctas { justify-content: center; }
    .hero-socials { justify-content: center; }
    .hero-badge--projects { left: -10px; bottom: 20px; }
    .hero-badge--certs    { right: -10px; top: 20px; }
  }

  @media (max-width: 520px) {
    .hero-photo-col { width: 260px; height: 260px; }
    .hero-photo-wrap { width: 230px; height: 230px; }
    .hero-name-first,
    .hero-name-last { font-size: clamp(3rem, 10vw, 3.8rem); }
    .hero-tagline { font-size: 1rem; }
    .hero-badge { padding: 8px 12px; gap: 6px; }
    .hb-num { font-size: 0.95rem; }
    .hero-ring--outer { inset: -18px; }
    .hero-ring--mid   { inset: -8px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-ring--outer,
    .hero-ring--mid,
    .hero-photo-wrap,
    .hero-badge,
    .hero-orb { animation: none !important; }
  }
`
document.head.appendChild(styles)

export default Hero