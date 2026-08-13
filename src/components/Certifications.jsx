import React from 'react'
import { FiCalendar, FiMapPin, FiAward, FiCheckCircle } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const certifications = [
  {
    degree: 'Emotional Intelligence in Teamwork',
    institution: 'UNIVERSITY OF THE PEOPLE',
    location: 'Remote',
    period: 'July 2026',
    status: 'Completed',
    description: 'Participated in the online co-curricular event “Emotional Intelligence in Teamwork: Strengthening Workplace Relationships.The webinar gave me valuable insights into how emotional intelligence influences the way we communicate, collaborate, manage relationships, make decisions, and work effectively as a team.',
    highlights: ['Emotional Intelligence', 'Self Management', 'Collaboration', 'Interpersonal Communications', 'Active Listening'],
    color: '#0d9488'
  },
  {
    degree: 'Software Engineering Training',
    institution: 'GROUNDBREAKER TALENTS',
    location: 'Remote',
    period: 'June 2025 – June 2026',
    status: 'Completed',
    description: 'Successfully completed a 12-month software engineering training under the Groundbreaker Talents program, demonstrating industry-ready technical skills and practical experience. Technical training executed by Refactory Academy.',
    highlights: ['Software Engineering', 'Practical Experience', 'Industry-Ready Skills', 'Softskills Development'],
    color: '#0ea5e9'
  },
  {
    degree: 'Apprenticeship Training in Software Engineering',
    institution: 'REFACTORY ACADEMY',
    location: 'Kampala, Uganda',
    period: 'October 2025 – June 2026',
    status: 'Completed',
    description: 'Studied core software engineering principles including system design and software architecture, working on real projects across web and mobile platforms.',
    highlights: ['Software Architecture', 'Mobile Development', 'Web Development', 'Problem Solving'],
    color: '#7b68ee'
  },
  {
    degree: 'Frontend Development Certification',
    institution: 'REFACTORY ACADEMY',
    location: 'Remote',
    period: 'July 2025 – September 2025',
    status: 'Completed',
    description: 'Intensive program covering modern frontend development with JavaScript, responsive design, accessibility, and professional development workflows.',
    highlights: ['JavaScript', 'HTML/CSS', 'Git & GitHub', 'Agile & Scrum'],
    color: '#a855f7'
  }
]

function CertCard({ item, index }) {
  const cardRef = useScrollReveal({ threshold: 0.15 })
  const isEven  = index % 2 === 0

  return (
    <div
      ref={cardRef}
      className={`cert-card reveal ${isEven ? 'reveal-left' : 'reveal-right'}`}
      style={{ transitionDelay: `${index * 0.15}s`, '--color': item.color }}
    >
      {/* Left colour bar */}
      <div className="cert-bar" aria-hidden="true" />

      {/* Glow on hover */}
      <div className="cert-glow" aria-hidden="true" />

      <div className="cert-inner">

        {/* Top row: icon + title + status */}
        <div className="cert-top">
          <div className="cert-icon-wrap">
            <FiAward size={20} />
          </div>

          <div className="cert-title-block">
            <h3 className="cert-degree">{item.degree}</h3>
            <p className="cert-institution">{item.institution}</p>
          </div>

          <span className="cert-status">
            <FiCheckCircle size={12} />
            {item.status}
          </span>
        </div>

        {/* Meta row */}
        <div className="cert-meta">
          <span className="cert-meta-item">
            <FiCalendar size={12} />
            {item.period}
          </span>
          <span className="cert-meta-dot" aria-hidden="true" />
          <span className="cert-meta-item">
            <FiMapPin size={12} />
            {item.location}
          </span>
        </div>

        {/* Description */}
        <p className="cert-description">{item.description}</p>

        {/* Tags */}
        <div className="cert-tags">
          {item.highlights.map((tag, i) => (
            <span key={i} className="cert-tag">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}

function Certifications() {
  const headingRef = useScrollReveal({ threshold: 0.2 })
  const subRef     = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="certifications" className="cert-section">

      {/* Background orb */}
      <div className="cert-bg-orb" aria-hidden="true" />

      <div className="cert-container">

        {/* Header */}
        <div className="cert-header">
          <p ref={headingRef} className="cert-eyebrow reveal">
            <span className="cert-eyebrow-line" aria-hidden="true" />
            What I've earned
          </p>
          <h1 className="cert-heading">
            My <span className="cert-heading-outline">Certifications</span>
          </h1>
          <p ref={subRef} className="cert-subheading reveal" style={{ transitionDelay: '0.1s' }}>
            Training &amp; professional certifications I've completed
          </p>
        </div>

        {/* Timeline */}
        <div className="cert-timeline">
          <div className="cert-timeline-line" aria-hidden="true" />
          <div className="cert-cards">
            {certifications.map((item, index) => (
              <CertCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

const styles = document.createElement('style')
styles.textContent = `
  /* ── Section ── */
  .cert-section {
    padding: 110px 60px;
    background: transparent;
    position: relative;
    overflow: hidden;
  }

  .cert-bg-orb {
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(168,85,247,0.09) 0%, transparent 70%);
    top: 50%;
    right: -180px;
    transform: translateY(-50%);
    pointer-events: none;
    filter: blur(80px);
  }

  .cert-container {
    max-width: 860px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* ── Header ── */
  .cert-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .cert-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 0.78rem;
    font-weight: 600;
    color: #7b68ee;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 14px;
    justify-content: center;
  }

  .cert-eyebrow-line {
    display: block;
    width: 28px;
    height: 1.5px;
    background: linear-gradient(90deg, transparent, #7b68ee);
    border-radius: 2px;
  }

  .cert-heading {
    font-size: clamp(2.6rem, 5vw, 4rem);
    font-weight: 800;
    letter-spacing: -1.5px;
    color: #ffffff;
    line-height: 1;
    margin-bottom: 16px;
  }

  /* Outline signature — consistent across all sections */
  .cert-heading-outline {
    -webkit-text-stroke: 2px #7b68ee;
    color: transparent;
    filter: drop-shadow(0 0 16px rgba(123,104,238,0.45));
  }

  .cert-subheading {
    font-size: 1rem;
    color: rgba(255,255,255,0.55);
    letter-spacing: 0.5px;
  }

  /* ── Timeline ── */
  .cert-timeline {
    position: relative;
  }

  .cert-timeline-line {
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(123,104,238,0.4) 10%,
      rgba(184,168,255,0.3) 50%,
      rgba(123,104,238,0.4) 90%,
      transparent 100%
    );
    pointer-events: none;
  }

  .cert-cards {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-left: 52px;
  }

  /* ── Card ── */
  .cert-card {
    position: relative;
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(16px);
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,0.09);
    overflow: hidden;
    transition:
      opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      background 0.3s ease,
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .cert-card:hover {
    background: rgba(255,255,255,0.08);
    border-color: color-mix(in srgb, var(--color, #7b68ee) 40%, transparent);
    box-shadow: 0 16px 48px rgba(0,0,0,0.25),
                0 0 0 1px color-mix(in srgb, var(--color, #7b68ee) 20%, transparent) inset;
    transform: translateY(-5px) !important;
  }

  /* Left colour bar */
  .cert-bar {
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: var(--color, #7b68ee);
    border-radius: 18px 0 0 18px;
    opacity: 0.8;
  }

  /* Hover glow blob */
  .cert-glow {
    position: absolute;
    top: -40px; left: -40px;
    width: 160px; height: 160px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--color, #7b68ee) 25%, transparent);
    filter: blur(50px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease;
  }

  .cert-card:hover .cert-glow {
    opacity: 1;
  }

  /* Timeline dot — sits in the left gutter */
  .cert-card::before {
    content: '';
    position: absolute;
    left: -40px;
    top: 32px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--color, #7b68ee);
    box-shadow: 0 0 0 3px rgba(10,10,42,1),
                0 0 0 5px color-mix(in srgb, var(--color, #7b68ee) 40%, transparent);
  }

  .cert-inner {
    padding: 26px 26px 24px 32px;
    position: relative;
    z-index: 1;
  }

  /* ── Top row ── */
  .cert-top {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 14px;
    flex-wrap: wrap;
  }

  .cert-icon-wrap {
    width: 42px;
    height: 42px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: color-mix(in srgb, var(--color, #7b68ee) 15%, transparent);
    border: 1px solid color-mix(in srgb, var(--color, #7b68ee) 35%, transparent);
    color: var(--color, #7b68ee);
    transition: background 0.3s ease, transform 0.3s ease;
  }

  .cert-card:hover .cert-icon-wrap {
    background: color-mix(in srgb, var(--color, #7b68ee) 25%, transparent);
    transform: scale(1.08);
  }

  .cert-title-block {
    flex: 1;
    min-width: 0;
  }

  .cert-degree {
    font-size: 1.1rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 4px;
    line-height: 1.35;
    letter-spacing: -0.2px;
  }

  .cert-institution {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--color, #b8a8ff);
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  .cert-status {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 11px;
    border-radius: 6px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.4px;
    background: rgba(74,222,128,0.1);
    color: #4ade80;
    border: 1px solid rgba(74,222,128,0.25);
    white-space: nowrap;
    align-self: flex-start;
    flex-shrink: 0;
  }

  /* ── Meta ── */
  .cert-meta {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
    flex-wrap: wrap;
  }

  .cert-meta-item {
    display: flex;
    align-items: center;
    gap: 5px;
    color: rgba(255,255,255,0.4);
    font-size: 0.78rem;
    letter-spacing: 0.3px;
  }

  .cert-meta-dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    flex-shrink: 0;
  }

  /* ── Description ── */
  .cert-description {
    color: rgba(255,255,255,0.65);
    font-size: 0.93rem;
    line-height: 1.75;
    margin-bottom: 18px;
  }

  /* ── Tags ── */
  .cert-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  .cert-tag {
    padding: 3px 11px;
    border-radius: 6px;
    border: 1px solid color-mix(in srgb, var(--color, #7b68ee) 40%, transparent);
    color: var(--color, #b8a8ff);
    font-size: 0.72rem;
    font-weight: 500;
    background: color-mix(in srgb, var(--color, #7b68ee) 8%, transparent);
    letter-spacing: 0.3px;
    transition: background 0.25s ease;
  }

  .cert-card:hover .cert-tag {
    background: color-mix(in srgb, var(--color, #7b68ee) 14%, transparent);
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .cert-section { padding: 80px 24px; }
    .cert-heading { font-size: 2.6rem; letter-spacing: -1px; }
    .cert-timeline-line { left: 14px; }
    .cert-cards { padding-left: 36px; }
    .cert-card::before { left: -30px; }
  }

  @media (max-width: 480px) {
    .cert-section { padding: 60px 14px; }
    .cert-heading { font-size: 2.1rem; }
    .cert-timeline-line { display: none; }
    .cert-cards { padding-left: 0; }
    .cert-card::before { display: none; }
    .cert-inner { padding: 20px 18px 18px 22px; }
    .cert-degree { font-size: 1rem; }
    .cert-institution { font-size: 0.72rem; }
    .cert-description { font-size: 0.88rem; }
    .cert-icon-wrap { width: 36px; height: 36px; border-radius: 8px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .cert-card, .cert-glow, .cert-icon-wrap, .cert-tag { transition: none !important; }
  }
`
document.head.appendChild(styles)

export default Certifications