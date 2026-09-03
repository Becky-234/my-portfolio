import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import aboutImage from '../assets/about.jpeg'
import { FiCode, FiSmartphone, FiUsers, FiZap } from 'react-icons/fi'

const highlights = [
  { icon: <FiCode />,       label: 'Web Dev',    sub: '' },
  { icon: <FiSmartphone />, label: 'Mobile',     sub: '' },
  { icon: <FiUsers />,      label: 'Agile',      sub: ''  },
  { icon: <FiZap />,        label: 'Fast learner', sub: '' },
]

function About() {
  const imageRef   = useScrollReveal({ threshold: 0.15 })
  const textRef    = useScrollReveal({ threshold: 0.15 })

  return (
    <section id="about" className="ab-section">

      {/* Subtle background accent */}
      <div className="ab-bg-orb" aria-hidden="true" />

      <div className="ab-inner">

        {/* ── LEFT: image block ── */}
        <div ref={imageRef} className="ab-image-col reveal reveal-left">

          {/* Decorative corner brackets */}
          <div className="ab-bracket ab-bracket--tl" aria-hidden="true" />
          <div className="ab-bracket ab-bracket--br" aria-hidden="true" />

          {/* Image */}
          <div className="ab-photo-wrap">
            <img src={aboutImage} alt="Rebecca Kirabo" className="ab-photo" />
            {/* Colour wash */}
            <div className="ab-photo-wash" aria-hidden="true" />
          </div>

          {/* Floating experience tag */}
          <div className="ab-exp-tag">
            <span className="ab-exp-num">1+</span>
            <span className="ab-exp-label">yr experience</span>
          </div>

        </div>

        {/* ── RIGHT: text block ── */}
        <div ref={textRef} className="ab-text-col reveal reveal-right">

          {/* Eyebrow */}
          <p className="ab-eyebrow">
            <span className="ab-eyebrow-dot" aria-hidden="true" />
            Who I am
          </p>

          {/* Heading */}
          <h1 className="ab-heading">
            About<br />
            <span className="ab-heading-accent">Me</span>
          </h1>

          {/* Role pill */}
          <div className="ab-role-pill">
            Frontend-focused Full Stack Developer &amp; Problem Solver
          </div>

          {/* Paragraphs */}
          <p className="ab-para">
          I'm a software engineer with a focus on building responsive,
          cross-platform applications. I bring a blend of technical depth 
          and design sensibility to every product I work on because good software
          should be functional and feel right to use.
          </p>
          <p className="ab-para">
            Shaped by the energy and ambition of the tech scene,
            I'm committed to continuous growth and to building digital solutions
            that make a real difference in people's lives.
          </p>

          {/* Highlight grid */}
          <div className="ab-highlights">
            {highlights.map((h, i) => (
              <div key={i} className="ab-highlight-card">
                <span className="ab-highlight-icon">{h.icon}</span>
                <span className="ab-highlight-label">{h.label}</span>
                <span className="ab-highlight-sub">{h.sub}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a href="#contact" className="ab-cta">
            Let's work together →
          </a>

        </div>
      </div>
    </section>
  )
}

const styleSheet = document.createElement('style')
styleSheet.textContent = `
  /* ── Section ── */
  .ab-section {
    padding: 110px 60px;
    position: relative;
    overflow: hidden;
    background: transparent;
  }

  /* Background orb */
  .ab-bg-orb {
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%);
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    pointer-events: none;
    filter: blur(60px);
  }

  /* ── Layout ── */
  .ab-inner {
    max-width: 1160px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 90px;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  /* ════════════════════
     IMAGE COLUMN
  ════════════════════ */
  .ab-image-col {
    position: relative;
  }

  /* Corner bracket decorations */
  .ab-bracket {
    position: absolute;
    width: 36px;
    height: 36px;
    pointer-events: none;
    z-index: 2;
  }

  .ab-bracket--tl {
    top: -10px; left: -10px;
    border-top: 2.5px solid #7b68ee;
    border-left: 2.5px solid #7b68ee;
    border-radius: 4px 0 0 0;
  }

  .ab-bracket--br {
    bottom: -10px; right: -10px;
    border-bottom: 2.5px solid #7b68ee;
    border-right: 2.5px solid #7b68ee;
    border-radius: 0 0 4px 0;
  }

  /* Photo */
  .ab-photo-wrap {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid rgba(184,168,255,0.18);
    box-shadow:
      0 30px 70px rgba(0,0,0,0.45),
      0 0 0 1px rgba(255,255,255,0.04) inset;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  .ab-photo-wrap:hover {
    transform: translateY(-6px);
    box-shadow:
      0 40px 90px rgba(0,0,0,0.55),
      0 0 50px rgba(123,104,238,0.18),
      0 0 0 1px rgba(255,255,255,0.06) inset;
  }

  .ab-photo {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }

  .ab-photo-wrap:hover .ab-photo {
    transform: scale(1.03);
  }

  /* Colour wash over photo */
  .ab-photo-wash {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(10,10,42,0.45) 0%,
      transparent 50%
    );
    pointer-events: none;
  }

  /* Experience tag */
  .ab-exp-tag {
    position: absolute;
    bottom: 24px;
    right: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px 20px;
    border-radius: 16px;
    background: rgba(12,10,35,0.82);
    backdrop-filter: blur(18px);
    border: 1px solid rgba(184,168,255,0.2);
    box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07);
    line-height: 1.15;
  }

  .ab-exp-num {
    font-size: 1.6rem;
    font-weight: 800;
    background: linear-gradient(135deg, #fff, #b8a8ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    letter-spacing: -1px;
  }

  .ab-exp-label {
    font-size: 0.62rem;
    font-weight: 500;
    color: rgba(255,255,255,0.45);
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  /* ════════════════════
     TEXT COLUMN
  ════════════════════ */
  .ab-text-col {
    display: flex;
    flex-direction: column;
  }

  /* Eyebrow */
  .ab-eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.78rem;
    font-weight: 600;
    color: #7b68ee;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .ab-eyebrow-dot {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #7b68ee;
    box-shadow: 0 0 8px rgba(123,104,238,0.8);
  }

  /* Heading */
  .ab-heading {
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 800;
    line-height: 0.9;
    letter-spacing: -2px;
    color: #ffffff;
    margin-bottom: 24px;
  }

  .ab-heading-accent {
    /* Outline text — same signature trick as hero */
    -webkit-text-stroke: 2px #7b68ee;
    color: transparent;
    display: inline-block;
    filter: drop-shadow(0 0 20px rgba(123,104,238,0.5));
  }

  /* Role pill */
  .ab-role-pill {
    display: inline-block;
    font-size: 0.82rem;
    font-weight: 500;
    color: #b8a8ff;
    background: rgba(123,104,238,0.1);
    border: 1px solid rgba(123,104,238,0.3);
    border-radius: 6px;
    padding: 6px 16px;
    letter-spacing: 0.3px;
    margin-bottom: 28px;
    width: fit-content;
  }

  /* Paragraphs */
  .ab-para {
    font-size: 1rem;
    line-height: 1.85;
    color: rgba(255,255,255,0.72);
    margin-bottom: 18px;
  }

  /* Highlight cards */
  .ab-highlights {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-top: 8px;
    margin-bottom: 32px;
  }

  .ab-highlight-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 16px 10px;
    border-radius: 14px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
    text-align: center;
  }

  .ab-highlight-card:hover {
    background: rgba(123,104,238,0.1);
    border-color: rgba(123,104,238,0.35);
    transform: translateY(-4px);
  }

  .ab-highlight-icon {
    font-size: 1.3rem;
    color: #b8a8ff;
    display: flex;
  }

  .ab-highlight-label {
    font-size: 0.78rem;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 0.3px;
  }

  .ab-highlight-sub {
    font-size: 0.62rem;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.3px;
  }

  /* CTA link */
  .ab-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #b8a8ff;
    text-decoration: none;
    letter-spacing: 0.4px;
    border-bottom: 1px solid rgba(184,168,255,0.35);
    padding-bottom: 2px;
    width: fit-content;
    transition: color 0.25s ease, border-color 0.25s ease, gap 0.25s ease;
  }

  .ab-cta:hover {
    color: #ffffff;
    border-color: rgba(255,255,255,0.6);
    gap: 14px;
  }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .ab-section { padding: 90px 40px; }
    .ab-inner { gap: 60px; grid-template-columns: 340px 1fr; }
  }

  @media (max-width: 860px) {
    .ab-section { padding: 80px 24px; }
    .ab-inner {
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 50px;
      text-align: center;
    }
    .ab-image-col { width: 280px; }
    .ab-exp-tag { right: -10px; }
    .ab-eyebrow { justify-content: center; }
    .ab-role-pill { margin: 0 auto 28px; }
    .ab-heading { letter-spacing: -1px; }
    .ab-highlights { grid-template-columns: repeat(2, 1fr); }
    .ab-cta { margin: 0 auto; }
    .ab-bracket--tl { top: -8px; left: -8px; }
    .ab-bracket--br { bottom: -8px; right: -8px; }
  }

  @media (max-width: 480px) {
    .ab-section { padding: 60px 16px; }
    .ab-image-col { width: 240px; }
    .ab-heading { font-size: 2.8rem; }
    .ab-highlights { grid-template-columns: repeat(2, 1fr); gap: 8px; }
    .ab-highlight-card { padding: 12px 8px; }
    .ab-para { font-size: 0.95rem; }
  }
`
document.head.appendChild(styleSheet)

export default About