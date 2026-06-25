import React from 'react'
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const certifications = [
  {
    degree: 'Apprenticeship Training in Software Engineering',
    institution: 'REFECTORY ACADEMY',
    location: 'Kampala, Uganda',
    period: 'October 2025 – June 2026',
    status: 'Completed',
    description: 'Studied core software engineering principles including system design, and software architecture.',
    highlights: ['Software Architecture', 'Mobile Development', 'Web Development', 'Problem Solving'],
    color: '#7b68ee'
  },
  {
    degree: 'Frontend Development Certification',
    institution: 'REFACTORY ACADEMY',
    location: 'Remote',
    period: 'July 2025 - September 2025',
    status: 'Completed',
    description: 'Intensive program covering modern frontend development with JavaScript, responsive design, accessibility, and professional development workflows.',
    highlights: ['JavaScript', 'HTML/CSS', 'Git & GitHub', 'Agile & Scrum'],
    color: '#a855f7'
  }
]

function CertificationCard({ item, index }) {
  const cardRef = useScrollReveal({ threshold: 0.15 })

  return (
    <div
      ref={cardRef}
      className={`edu-card reveal ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Colored left accent bar */}
      <div className="edu-accent" style={{ background: item.color }} />

      <div className="edu-card-inner">
        {/* Header */}
        <div className="edu-header">
          <div className="edu-icon-wrap" style={{ background: `${item.color}22`, border: `1px solid ${item.color}55` }}>
            <FiAward size={22} style={{ color: item.color }} />
          </div>
          <div className="edu-header-text">
            <h3 className="edu-degree">{item.degree}</h3>
            <p className="edu-institution">{item.institution}</p>
          </div>
          <span
            className="edu-status"
            style={{
              background: item.status === 'In Progress' ? 'rgba(251,191,36,0.15)' : 'rgba(74,222,128,0.15)',
              color:      item.status === 'In Progress' ? '#fbbf24' : '#4ade80',
              border:     `1px solid ${item.status === 'In Progress' ? 'rgba(251,191,36,0.3)' : 'rgba(74,222,128,0.3)'}`,
            }}
          >
            {item.status}
          </span>
        </div>

        {/* Meta */}
        <div className="edu-meta">
          <span className="edu-meta-item">
            <FiCalendar size={13} />
            {item.period}
          </span>
          <span className="edu-meta-item">
            <FiMapPin size={13} />
            {item.location}
          </span>
        </div>

        {/* Description */}
        <p className="edu-description">{item.description}</p>

        {/* Highlights */}
        <div className="edu-highlights">
          {item.highlights.map((tag, i) => (
            <span key={i} className="edu-tag" style={{ borderColor: `${item.color}55`, color: item.color }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Education() {
  const headingRef    = useScrollReveal({ threshold: 0.2 })
  const subheadingRef = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="education" className="edu-section">
      <div className="edu-container">

        <div className="edu-heading-wrap">
          <h1 ref={headingRef} className="edu-heading reveal">
            <FiAward size={32} style={{ display: 'inline', marginRight: '12px', verticalAlign: 'middle' }} />
            Certifications
          </h1>
          <p ref={subheadingRef} className="edu-subheading reveal" style={{ transitionDelay: '0.1s' }}>
            My training & professional certifications
          </p>
        </div>

        {/* Timeline line */}
        <div className="edu-timeline">
          <div className="edu-timeline-line" />
          <div className="edu-cards">
            {certifications.map((item, index) => (
              <CertificationCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

const styles = document.createElement('style')
styles.textContent = `
  .edu-section {
    padding: 100px 20px;
    background: transparent;
    position: relative;
  }

  .edu-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .edu-heading-wrap {
    text-align: center;
    margin-bottom: 60px;
  }

  .edu-heading {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 15px;
    position: relative;
    background: linear-gradient(135deg, #ffffff, #b8a8ff, #7b68ee);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
  }

  .edu-heading::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #7b68ee, #b8a8ff);
    border-radius: 2px;
  }

  .edu-subheading {
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    margin-top: 25px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  /* TIMELINE */
  .edu-timeline {
    position: relative;
  }

  .edu-timeline-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, transparent, rgba(123, 104, 238, 0.5) 10%, rgba(184, 168, 255, 0.4) 50%, rgba(123, 104, 238, 0.5) 90%, transparent);
    transform: translateX(-50%);
    pointer-events: none;
  }

  .edu-cards {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  /* CARD */
  .edu-card {
    position: relative;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                background 0.3s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease;
  }

  .edu-card:hover {
    background: rgba(255, 255, 255, 0.10);
    border-color: rgba(123, 104, 238, 0.35);
    box-shadow: 0 16px 48px rgba(123, 104, 238, 0.2);
    transform: translateY(-6px) !important;
  }

  /* Colored left accent bar */
  .edu-accent {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    border-radius: 20px 0 0 20px;
  }

  .edu-card-inner {
    padding: 28px 28px 28px 36px;
  }

  /* HEADER */
  .edu-header {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .edu-icon-wrap {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .edu-header-text {
    flex: 1;
    min-width: 0;
  }

  .edu-degree {
    font-size: 1.2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff, #d0c8ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 4px;
    line-height: 1.4;
  }

  .edu-institution {
    font-size: 0.95rem;
    color: #b8a8ff;
    font-weight: 500;
  }

  .edu-status {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    white-space: nowrap;
    align-self: flex-start;
    flex-shrink: 0;
  }

  /* META */
  .edu-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 14px;
    flex-wrap: wrap;
  }

  .edu-meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.82rem;
    letter-spacing: 0.3px;
  }

  /* DESCRIPTION */
  .edu-description {
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 18px;
  }

  /* TAGS */
  .edu-highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .edu-tag {
    padding: 4px 12px;
    border-radius: 20px;
    border: 1px solid;
    font-size: 0.78rem;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.04);
    letter-spacing: 0.3px;
  }

  @media (max-width: 768px) {
    .edu-section { padding: 80px 20px; }
    .edu-heading { font-size: 2.5rem; }
    .edu-timeline-line { display: none; }
    .edu-degree { font-size: 1.1rem; }
  }

  @media (max-width: 480px) {
    .edu-section { padding: 60px 15px; }
    .edu-heading { font-size: 2rem; }
    .edu-card-inner { padding: 22px 20px 22px 28px; }
    .edu-header { gap: 12px; }
    .edu-icon-wrap { width: 38px; height: 38px; }
    .edu-degree { font-size: 1rem; }
    .edu-institution { font-size: 0.85rem; }
    .edu-description { font-size: 0.88rem; }
  }
`
document.head.appendChild(styles)

export default Education