import React from 'react'
import mineImage from '../assets/MY.jpeg'
import { FiFolder, FiAward, FiDownload, FiSmartphone, FiGlobe } from 'react-icons/fi'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const WHATSAPP_NUMBER = '256744807739'

function Hero() {
  const imageRef = useScrollReveal({ threshold: 0.2 })
  const textRef  = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="hero" className="hero-section">

      {/* Ambient orbs */}
      <div className="hero-orb hero-orb--1" aria-hidden="true" />
      <div className="hero-orb hero-orb--2" aria-hidden="true" />
      <div className="hero-orb hero-orb--3" aria-hidden="true" />

      <div className="hero-inner">

        {/* ── LEFT: Photo frame ── */}
        <div ref={imageRef} className="hero-photo-col reveal reveal-left">

          {/* Decorative corner brackets around the card */}
          <div className="hero-corner hero-corner--tl" aria-hidden="true" />
          <div className="hero-corner hero-corner--tr" aria-hidden="true" />
          <div className="hero-corner hero-corner--bl" aria-hidden="true" />
          <div className="hero-corner hero-corner--br" aria-hidden="true" />

          {/* Glow behind photo */}
          <div className="hero-photo-glow" aria-hidden="true" />

          {/* Photo card */}
          <div className="hero-photo-wrap">
            <img
              src={mineImage}
              alt="Rebecca Kirabo"
              className="hero-photo"
            />
            <div className="hero-photo-gloss" aria-hidden="true" />
            <div className="hero-photo-fade"  aria-hidden="true" />
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

          {/* Stack pill */}
          <div className="hero-stack-pill" aria-hidden="true">
            <FiGlobe size={11} /> Web &nbsp;·&nbsp; <FiSmartphone size={11} /> Mobile
          </div>

        </div>

        {/* ── RIGHT: Text ── */}
        <div ref={textRef} className="hero-text-col reveal reveal-right">

          <p className="hero-eyebrow">
            <span className="hero-eyebrow-line" aria-hidden="true" />
            Hello, I'm
          </p>

          <h1 className="hero-name" aria-label="Kirabo Rebecca">
            <span className="hero-name-first">KIRABO</span>
            <span className="hero-name-last">
              <span className="hero-name-outline">REB</span>ECCA
            </span>
          </h1>

          <div className="hero-title-strip">
            <span className="hero-title-text">Full Stack Developer</span>
          </div>

          <p className="hero-tagline">
            Building scalable web &amp; mobile experiences<br />
            that make a real difference.
          </p>
          <p className="hero-sub-tagline">
            Code with purpose&nbsp;&nbsp;·&nbsp;&nbsp;Design with passion&nbsp;&nbsp;·&nbsp;&nbsp;Create with impact
          </p>

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

          {/* Socials — LinkedIn, GitHub, X, WhatsApp */}
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/rebecca-kirabo-b841002ab/"
               target="_blank" rel="noopener noreferrer"
               className="hero-social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://github.com/Becky-234"
               target="_blank" rel="noopener noreferrer"
               className="hero-social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://twitter.com/@KiraboReberbyk"
               target="_blank" rel="noopener noreferrer"
               className="hero-social-link" aria-label="X / Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* WhatsApp — opens chat directly */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link hero-social-link--wa"
              aria-label="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

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

  /* ── Orbs ── */
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
    transform: translate(-50%,-50%);
    animation: orbDrift 20s ease-in-out infinite alternate;
    opacity: 0.1;
  }
  @keyframes orbDrift {
    from { transform: translate(0,0); }
    to   { transform: translate(30px,20px); }
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
    width: 420px;
    /* Let height be driven by the photo card */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  /* Corner brackets */
  .hero-corner {
    position: absolute;
    width: 32px; height: 32px;
    pointer-events: none;
    z-index: 4;
  }
  .hero-corner--tl { top: 0;  left: 0;  border-top:  2px solid rgba(123,104,238,0.6); border-left:  2px solid rgba(123,104,238,0.6); border-radius: 6px 0 0 0; }
  .hero-corner--tr { top: 0;  right: 0; border-top:  2px solid rgba(123,104,238,0.6); border-right: 2px solid rgba(123,104,238,0.6); border-radius: 0 6px 0 0; }
  .hero-corner--bl { bottom: 0; left: 0;  border-bottom: 2px solid rgba(123,104,238,0.6); border-left:  2px solid rgba(123,104,238,0.6); border-radius: 0 0 0 6px; }
  .hero-corner--br { bottom: 0; right: 0; border-bottom: 2px solid rgba(123,104,238,0.6); border-right: 2px solid rgba(123,104,238,0.6); border-radius: 0 0 6px 0; }

  /* Glow orb behind photo */
  .hero-photo-glow {
    position: absolute;
    inset: 20px;
    border-radius: 24px;
    background: radial-gradient(circle at 50% 60%, rgba(123,104,238,0.25), transparent 70%);
    filter: blur(30px);
    pointer-events: none;
    z-index: 0;
  }

  /* ── Photo card — tall rounded rectangle ── */
  .hero-photo-wrap {
    position: relative;
    width: 340px;
    height: 440px;           /* tall portrait card */
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid rgba(184,168,255,0.18);
    box-shadow:
      0 0 0 4px rgba(123,104,238,0.08),
      0 0 0 10px rgba(123,104,238,0.04),
      0 32px 80px rgba(0,0,0,0.55);
    z-index: 2;
    flex-shrink: 0;
    animation: floatCard 6s ease-in-out infinite;
    transition: box-shadow 0.4s ease;
  }

  .hero-photo-wrap:hover {
    box-shadow:
      0 0 0 4px rgba(123,104,238,0.15),
      0 0 0 10px rgba(123,104,238,0.07),
      0 40px 90px rgba(0,0,0,0.65),
      0 0 60px rgba(123,104,238,0.2);
  }

  @keyframes floatCard {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-10px); }
  }

  .hero-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;   /* show face, not bottom */
    display: block;
    transition: transform 0.6s ease;
  }

  .hero-photo-wrap:hover .hero-photo {
    transform: scale(1.04);
  }

  /* Diagonal gloss sheen */
  .hero-photo-gloss {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255,255,255,0.06) 0%,
      transparent 45%
    );
    pointer-events: none;
  }

  /* Bottom fade */
  .hero-photo-fade {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 30%;
    background: linear-gradient(to top, rgba(10,10,42,0.45), transparent);
    pointer-events: none;
  }

  /* ── Floating badges ── */
  .hero-badge {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 14px;
    background: rgba(12,10,30,0.85);
    backdrop-filter: blur(18px);
    border: 1px solid rgba(255,255,255,0.11);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07);
    white-space: nowrap;
    z-index: 5;
    animation: floatBadge 5s ease-in-out infinite;
  }

  .hero-badge--projects {
    bottom: 80px;
    left: -10px;
    animation-delay: -1s;
  }

  .hero-badge--certs {
    top: 60px;
    right: -10px;
    animation-delay: -2.8s;
  }

  @keyframes floatBadge {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-7px); }
  }

  .hb-icon  { font-size: 1.15rem; color: #b8a8ff; flex-shrink: 0; }
  .hb-text  { display: flex; flex-direction: column; line-height: 1.1; }
  .hb-num   { font-size: 1.05rem; font-weight: 700; color: #fff; letter-spacing: -0.5px; }
  .hb-label { font-size: 0.62rem; font-weight: 500; color: rgba(255,255,255,0.45); letter-spacing: 0.8px; text-transform: uppercase; }

  /* Stack pill */
  .hero-stack-pill {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 16px;
    border-radius: 6px;
    background: rgba(123,104,238,0.18);
    border: 1px solid rgba(123,104,238,0.38);
    backdrop-filter: blur(12px);
    color: #b8a8ff;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.8px;
    white-space: nowrap;
    z-index: 5;
  }

  /* ════════════════════════════════
     TEXT COLUMN
  ════════════════════════════════ */
  .hero-text-col { display: flex; flex-direction: column; }

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
    width: 36px; height: 1.5px;
    background: linear-gradient(90deg, #7b68ee, #b8a8ff);
    border-radius: 2px;
  }

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
    filter: drop-shadow(0 0 30px rgba(123,104,238,0.4));
  }

  .hero-name-last {
    font-size: clamp(3.8rem, 7vw, 6rem);
    font-weight: 800;
    letter-spacing: -2px;
    color: #fff;
    display: flex;
    align-items: baseline;
  }

  .hero-name-outline {
    -webkit-text-stroke: 1.5px rgba(255,255,255,0.55);
    color: transparent;
    letter-spacing: -2px;
  }

  .hero-title-strip { display: inline-flex; margin-bottom: 28px; width: fit-content; }

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

  /* ── Socials ── */
  .hero-socials {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .hero-social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px; height: 40px;
    border-radius: 8px;
    border: 1px solid rgba(184,168,255,0.2);
    background: rgba(255,255,255,0.03);
    color: rgba(255,255,255,0.65);
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

  /* WhatsApp gets its own green hover */
  .hero-social-link--wa:hover {
    border-color: #25d366;
    background: rgba(37,211,102,0.12);
    box-shadow: 0 6px 20px rgba(37,211,102,0.25);
    color: #25d366;
  }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .hero-section { padding: 120px 40px 80px; }
    .hero-inner { gap: 50px; grid-template-columns: 360px 1fr; }
    .hero-photo-col { width: 360px; }
    .hero-photo-wrap { width: 300px; height: 390px; }
  }

  @media (max-width: 860px) {
    .hero-section { padding: 110px 24px 60px; }
    .hero-inner { grid-template-columns: 1fr; justify-items: center; text-align: center; gap: 70px; }
    .hero-photo-col { width: 300px; padding: 16px; }
    .hero-photo-wrap { width: 260px; height: 340px; }
    .hero-eyebrow { justify-content: center; }
    .hero-name { align-items: center; }
    .hero-title-strip { margin: 0 auto 28px; }
    .hero-ctas { justify-content: center; }
    .hero-socials { justify-content: center; }
    .hero-badge--projects { left: -8px;  bottom: 70px; }
    .hero-badge--certs    { right: -8px; top: 50px; }
  }

  @media (max-width: 520px) {
    .hero-photo-col { width: 260px; }
    .hero-photo-wrap { width: 220px; height: 290px; }
    .hero-name-first, .hero-name-last { font-size: clamp(3rem, 10vw, 3.8rem); }
    .hero-tagline { font-size: 1rem; }
    .hero-badge { padding: 8px 12px; gap: 6px; }
    .hb-num { font-size: 0.9rem; }
    .hero-corner { width: 22px; height: 22px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-photo-wrap, .hero-badge, .hero-orb { animation: none !important; }
  }
`
document.head.appendChild(styles)

export default Hero