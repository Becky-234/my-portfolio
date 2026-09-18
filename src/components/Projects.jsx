import React, { useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { SiRender, SiNetlify, SiExpo, SiDigitalocean } from 'react-icons/si'
import { useScrollReveal } from '../hooks/useScrollReveal'

import ekiEcommerce from '../assets/eki.png'
import ekiBuyer from '../assets/eki-buyer.png'
import ekiSeller from '../assets/eki-seller.png'
import mayondo from '../assets/mayondo.png'
import weather from '../assets/weather.png'
import ssebbale from '../assets/ssebbale.png'
import activeinteriors from '../assets/active-interiors.png'
import handsofhope from '../assets/handsOfHope.png'
import mamacare from '../assets/mama-care.png'

const projects = [
  {
    title: 'EKI E-Commerce Platform',
    description: 'A full-featured e-commerce web platform with product management, shopping cart, user authentication, and secure payment integration. Built to scale for modern online marketplaces.',
    link: 'https://joineki.com/',
    github: 'https://github.com/Becky-234/eki-ecommerce',
    accentColor: '#7C3AED',
    category: 'Web App',
    image: ekiEcommerce,
    tags: ['React.js', 'Python', 'PostgreSQL'],
    deployedWith: <SiDigitalocean size={14} />,
    deployLabel: 'DigitalOcean',
    inProgress: false
  },
  {
    title: 'EKI Buyer App',
    description: 'Mobile shopping app for customers to browse products, place orders, track order status, and make secure payments. Designed for a seamless mobile-first shopping experience.',
    link: null,
    github: null,
    accentColor: '#10b981',
    category: 'Mobile App',
    image: ekiBuyer,
    tags: ['React Native', 'Expo', 'Python', 'Paystack'],
    deployedWith: <SiExpo size={14} />,
    deployLabel: 'Expo',
    inProgress: true
  },
  {
    title: 'EKI Seller: Vendor App',
    description: 'Mobile app for vendors to manage products, track orders, handle inventory, and monitor sales analytics. Empowers sellers with real-time business insights on the go.',
    link: null,
    github: null,
    accentColor: '#F59E0B',
    category: 'Mobile App',
    image: ekiSeller,
    tags: ['React Native', 'Expo', 'Python', 'PostgreSQL'],
    deployedWith: <SiExpo size={14} />,
    deployLabel: 'Expo',
    inProgress: true
  },
  {
    title: 'Mayondo Wood & Furniture Management System',
    description: 'A comprehensive management system for wood and furniture business operations, featuring inventory tracking, order management, and business analytics to streamline operations.',
    link: 'https://mayondo-654f.onrender.com/',
    github: null,
    accentColor: '#CD853F',
    category: 'Web App',
    image: mayondo,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB'],
    deployedWith: <SiRender size={14} />,
    deployLabel: 'Render',
    inProgress: false
  },
  {
    title: 'Weather Forecast Application',
    description: 'Real-time weather forecasting app with location-based services, 7-day forecasts, and dynamic weather visualizations. Delivers accurate, up-to-date weather data at a glance.',
    link: 'https://myweatherwww.netlify.app/',
    github: null,
    accentColor: '#4A90E2',
    category: 'Web App',
    image: weather,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Weather API', 'Geolocation'],
    deployedWith: <SiNetlify size={14} />,
    deployLabel: 'Netlify',
    inProgress: false
  },
  {
    title: 'Ssebbale Stitches',
    description: 'A tailoring management system for tracking client orders, measurements, and delivery timelines. Built to help bespoke tailors manage their workflow and keep operations organised in one place.',
    link: 'https://ssebbale-stitches.vercel.app/',
    github: null,
    accentColor: '#C084FC',
    category: 'Web App',
    image: ssebbale,
    tags: ['React', 'TypeScript', 'Python'],
    deployedWith: null,
    deployLabel: 'Vercel',
    inProgress: true
  },
   {
    title: 'Active Interiors and Construction Website',
    description: 'A modern website for Active Interiors and Construction, showcasing their services, portfolio, and contact information. Designed with a focus on responsive design and user experience.',
    link: 'https://active-interiors-and-contructions.vercel.app/',
    github: 'https://github.com/Becky-234/Active-Interiors',
    accentColor: '#f2c94c',
    category: 'Website',
    image: activeinteriors,
    tags: ['Vue.js', 'CSS3', 'Typescript', 'Responsive'],
    deployedWith: <FiGithub size={14} />,
    deployLabel: 'Vercel',
    inProgress: false
  },
  {
    title: 'Hands Of Hope Website',
    description: 'A website for a charitable organization focused on providing hope and support to underprivileged communities.',
    link: 'https://sites.halvektech.com/',
    github: 'https://github.com/Halvek-Tech/handsofhope.org',
    accentColor: '#003e82',
    category: 'Website',
    image: handsofhope,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Responsive'],
    deployedWith: <FiGithub size={14} />,
    deployLabel: 'GitHub',
    inProgress: true
  },
  {
    title: 'MamaCare - AI',
    description: 'A maternal health companion that reaches pregnant women in rural Uganda through the channels they already have: a basic phone and a SIM card.',
    link: '',
    github: null,
    accentColor: '#2d6a4f',
    category: 'Web App',
    image: mamacare,
    tags: ['React', 'TypeScript', 'Next.js'],
    deployedWith: null,
    deployLabel: '',
    inProgress: true
  },
]

const ALL_TABS = ['All', 'Web App', 'Mobile App', 'Website']

/* ── Desktop browser frame ── */
function DesktopFrame({ image, title, accentColor, url }) {
  const displayUrl = url ? url.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'localhost'
  return (
    <div className="frame-desktop" style={{ '--accent': accentColor }}>
      <div className="frame-desktop-bar">
        <div className="frame-desktop-dots">
          <span className="frame-dot" style={{ background: '#ff5f57' }} />
          <span className="frame-dot" style={{ background: '#febc2e' }} />
          <span className="frame-dot" style={{ background: '#28c840' }} />
        </div>
        <div className="frame-desktop-url">
          <span className="frame-desktop-url-text">● {displayUrl}</span>
        </div>
        <div className="frame-desktop-actions" />
      </div>
      <div className="frame-desktop-screen">
        <img
          src={image || `https://via.placeholder.com/900x560/1a1a2e/7b68ee?text=${encodeURIComponent(title)}`}
          alt={title}
          className="frame-desktop-img"
          onError={(e) => { e.target.src = `https://via.placeholder.com/900x560/1a1a2e/7b68ee?text=${encodeURIComponent(title)}` }}
        />
        <div className="frame-screen-shine" />
      </div>
      <div className="frame-desktop-stand">
        <div className="frame-desktop-neck" />
        <div className="frame-desktop-base" />
      </div>
    </div>
  )
}

/* ── Mobile phone frame ── */
function MobileFrame({ image, title, accentColor }) {
  return (
    <div className="frame-mobile" style={{ '--accent': accentColor }}>
      <div className="frame-mobile-notch">
        <div className="frame-mobile-camera" />
      </div>
      <div className="frame-mobile-screen">
        <img
          src={image}
          alt={title}
          className="frame-mobile-img"
          onError={(e) => { e.target.src = `https://via.placeholder.com/400x800/1a1a2e/7b68ee?text=${title}` }}
        />
        <div className="frame-screen-shine" />
      </div>
      <div className="frame-mobile-home" />
      <div className="frame-mobile-btn frame-mobile-btn--vol-up" />
      <div className="frame-mobile-btn frame-mobile-btn--vol-down" />
      <div className="frame-mobile-btn frame-mobile-btn--power" />
    </div>
  )
}

function ProjectRow({ project, index }) {
  const imageRef = useScrollReveal({ threshold: 0.15 })
  const textRef  = useScrollReveal({ threshold: 0.15 })
  const isEven   = index % 2 === 0
  const isMobile = project.category === 'Mobile App'

  return (
    <div className="proj-row" style={{ '--accent': project.accentColor }}>
      {/* Frame side */}
      <div
        ref={imageRef}
        className={`proj-image-side reveal ${isEven ? 'reveal-left' : 'reveal-right'}`}
        style={{ transitionDelay: '0.05s' }}
      >
        {isMobile
          ? <MobileFrame image={project.image} title={project.title} accentColor={project.accentColor} />
          : <DesktopFrame image={project.image} title={project.title} accentColor={project.accentColor} url={project.link} />
        }
      </div>

      {/* Text side */}
      <div
        ref={textRef}
        className={`proj-text-side reveal ${isEven ? 'reveal-right' : 'reveal-left'}`}
        style={{ transitionDelay: '0.15s' }}
      >
        {/* Meta row */}
        <div className="proj-meta-row">
          <span className="proj-number" style={{ color: project.accentColor }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="proj-category" style={{
            color: project.accentColor,
            borderColor: `${project.accentColor}55`,
            background: `${project.accentColor}11`
          }}>
            {project.category}
          </span>
          {project.inProgress && (
            <span className="proj-wip-badge">In Progress</span>
          )}
        </div>

        {/* Title */}
        <h3 className="proj-title">{project.title}</h3>

        {/* Accent line */}
        <div className="proj-accent-line" style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }} />

        {/* Description */}
        <p className="proj-description">{project.description}</p>

        {/* Tags */}
        <div className="proj-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="proj-tag" style={{ borderColor: `${project.accentColor}40`, color: 'rgba(255,255,255,0.75)' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="proj-footer">
          {(project.deployedWith || project.deployLabel) && (
            <span className="proj-deploy">
              {project.deployedWith && <span className="proj-deploy-icon">{project.deployedWith}</span>}
              {project.deployLabel}
            </span>
          )}
          <div className="proj-btns">
            {project.github && (
              <a href={project.github} className="proj-btn-icon" target="_blank" rel="noopener noreferrer" title="View Code">
                <FiGithub size={16} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                className="proj-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: `linear-gradient(135deg, ${project.accentColor}ee, ${project.accentColor}99)` }}
              >
                View Project <FiExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const headingRef    = useScrollReveal({ threshold: 0.2 })
  const subheadingRef = useScrollReveal({ threshold: 0.2 })
  const tabsRef       = useScrollReveal({ threshold: 0.2 })
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? projects
    : projects.filter(p => p.category === activeTab)

  return (
    <section id="projects" className="projects-section">

      {/* Background orb */}
      <div className="proj-bg-orb" aria-hidden="true" />

      <div className="projects-header">
        {/* Eyebrow */}
        <p ref={headingRef} className="proj-eyebrow reveal">
          <span className="proj-eyebrow-line" aria-hidden="true" />
          What I've built
        </p>

        {/* Heading — consistent outline signature */}
        <h1 className="projects-heading">
          My <span className="projects-heading-outline">Projects</span>
        </h1>

        <p ref={subheadingRef} className="projects-subheading reveal" style={{ transitionDelay: '0.1s' }}>
          A selection of web &amp; mobile work I'm proud of
        </p>

        {/* Tabs */}
        <div ref={tabsRef} className="projects-tabs reveal" style={{ transitionDelay: '0.2s' }}>
          {ALL_TABS.map(tab => (
            <button
              key={tab}
              className={`projects-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-list">
        {filtered.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

const styles = document.createElement('style')
styles.textContent = `
  /* ── Section ── */
  .projects-section {
    padding: 110px 0 60px;
    background: transparent;
    position: relative;
    overflow: hidden;
  }

  /* Background orb */
  .proj-bg-orb {
    position: absolute;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(123,104,238,0.08) 0%, transparent 70%);
    top: 20%;
    left: -250px;
    pointer-events: none;
    filter: blur(80px);
  }

  /* ── Header ── */
  .projects-header {
    text-align: center;
    padding: 0 20px;
    margin-bottom: 72px;
    position: relative;
    z-index: 1;
  }

  /* Eyebrow */
  .proj-eyebrow {
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

  .proj-eyebrow-line {
    display: block;
    width: 28px;
    height: 1.5px;
    background: linear-gradient(90deg, transparent, #7b68ee);
    border-radius: 2px;
  }

  /* Heading */
  .projects-heading {
    font-size: clamp(2.8rem, 5.5vw, 4.2rem);
    font-weight: 800;
    letter-spacing: -2px;
    color: #ffffff;
    line-height: 1;
    margin-bottom: 16px;
  }

  /* Outline word — same signature across all sections */
  .projects-heading-outline {
    -webkit-text-stroke: 2px #7b68ee;
    color: transparent;
    filter: drop-shadow(0 0 18px rgba(123,104,238,0.45));
  }

  .projects-subheading {
    color: rgba(255,255,255,0.55);
    font-size: 1rem;
    margin-bottom: 36px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  /* Tabs */
  .projects-tabs {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .projects-tab {
    padding: 8px 22px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.04);
    color: rgba(255,255,255,0.55);
    font-size: 0.86rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.22s ease;
    font-family: inherit;
    letter-spacing: 0.3px;
  }

  .projects-tab:hover {
    background: rgba(123,104,238,0.12);
    border-color: rgba(123,104,238,0.4);
    color: #fff;
  }

  .projects-tab.active {
    background: rgba(123,104,238,0.2);
    border-color: #7b68ee;
    color: white;
    box-shadow: 0 4px 18px rgba(123,104,238,0.25);
  }

  /* ── Project list ── */
  .projects-list {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
  }

  /* ── Row ── */
  .proj-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    padding: 80px 80px;
    position: relative;
    transition: background 0.3s ease;
  }

  /* Subtle hover tint on whole row */
  .proj-row:hover {
    background: rgba(255,255,255,0.015);
  }

  .proj-row:nth-child(even) .proj-image-side { order: 2; }
  .proj-row:nth-child(even) .proj-text-side  { order: 1; }

  /* Row separator */
  .proj-row::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 80px;
    right: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
  }
  .proj-row:last-child::after { display: none; }

  /* ── Desktop frame ── */
  .frame-desktop {
    display: flex;
    flex-direction: column;
    align-items: center;
    filter: drop-shadow(0 24px 48px rgba(0,0,0,0.5));
    transition: transform 0.4s ease, filter 0.4s ease;
  }

  .frame-desktop:hover {
    transform: translateY(-8px);
    filter: drop-shadow(0 36px 64px rgba(0,0,0,0.6))
            drop-shadow(0 0 40px color-mix(in srgb, var(--accent) 20%, transparent));
  }

  .frame-desktop-bar {
    width: 100%;
    height: 34px;
    background: linear-gradient(180deg, #2e2e3a, #252530);
    border-radius: 12px 12px 0 0;
    border: 1px solid rgba(255,255,255,0.12);
    border-bottom: none;
    display: flex;
    align-items: center;
    padding: 0 12px;
    gap: 10px;
    box-sizing: border-box;
  }

  .frame-desktop-dots { display: flex; gap: 5px; flex-shrink: 0; }

  .frame-dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    display: block;
  }

  .frame-desktop-url {
    flex: 1;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 5px;
    height: 18px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    overflow: hidden;
  }

  .frame-desktop-url-text {
    font-size: 9px;
    color: rgba(255,255,255,0.35);
    white-space: nowrap;
    letter-spacing: 0.2px;
  }

  .frame-desktop-actions { width: 40px; flex-shrink: 0; }

  .frame-desktop-screen {
    width: 100%;
    position: relative;
    border: 1px solid rgba(255,255,255,0.1);
    border-top: none;
    overflow: hidden;
    background: #0d0d14;
    border-radius: 0 0 4px 4px;
  }

  .frame-desktop-img {
    width: 100%;
    height: auto;
    display: block;
    max-height: 300px;
    object-fit: cover;
    object-position: top;
  }

  .frame-desktop-stand { display: flex; flex-direction: column; align-items: center; }

  .frame-desktop-neck {
    width: 18px; height: 22px;
    background: linear-gradient(180deg, #2a2a38, #1e1e2a);
    border-left: 1px solid rgba(255,255,255,0.08);
    border-right: 1px solid rgba(255,255,255,0.08);
  }

  .frame-desktop-base {
    width: 80px; height: 7px;
    background: linear-gradient(180deg, #2a2a38, #1e1e2a);
    border-radius: 0 0 6px 6px;
    border: 1px solid rgba(255,255,255,0.08);
    border-top: none;
  }

  /* ── Mobile frame ── */
  .frame-mobile {
    width: 220px;
    margin: 0 auto;
    position: relative;
    background: linear-gradient(160deg, #2a2a3a, #1a1a26);
    border-radius: 36px;
    border: 2px solid rgba(255,255,255,0.14);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05), 0 24px 60px rgba(0,0,0,0.55);
    padding: 14px 10px 20px;
    box-sizing: border-box;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.4));
  }

  .frame-mobile:hover {
    transform: translateY(-8px) rotate(-1deg);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.07),
                0 36px 80px rgba(0,0,0,0.65),
                0 0 40px color-mix(in srgb, var(--accent) 20%, transparent);
    filter: drop-shadow(0 30px 50px rgba(0,0,0,0.5));
  }

  .frame-mobile-notch {
    width: 70px; height: 20px;
    background: #111118;
    border-radius: 0 0 14px 14px;
    margin: 0 auto 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
  }

  .frame-mobile-camera {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #2a3a4a, #0d1520);
    border: 1px solid rgba(255,255,255,0.1);
  }

  .frame-mobile-screen {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    background: #0d0d14;
    border: 1px solid rgba(255,255,255,0.08);
  }

  .frame-mobile-img {
    width: 100%;
    height: auto;
    display: block;
    max-height: 380px;
    object-fit: cover;
    object-position: top;
  }

  .frame-mobile-home {
    width: 60px; height: 4px;
    background: rgba(255,255,255,0.25);
    border-radius: 2px;
    margin: 10px auto 0;
  }

  .frame-mobile-btn {
    position: absolute;
    background: linear-gradient(180deg, #2e2e3e, #1e1e2a);
    border-radius: 2px;
    right: -3px;
  }

  .frame-mobile-btn--power      { width: 3px; height: 50px; top: 90px; }
  .frame-mobile-btn--vol-up     { width: 3px; height: 32px; top: 80px;  right: auto; left: -3px; }
  .frame-mobile-btn--vol-down   { width: 3px; height: 32px; top: 122px; right: auto; left: -3px; }

  .frame-screen-shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 45%, rgba(0,0,0,0.08) 100%);
    pointer-events: none;
  }

  /* ── Text side ── */
  .proj-text-side { display: flex; flex-direction: column; }

  .proj-meta-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .proj-number {
    font-size: 2.8rem;
    font-weight: 800;
    line-height: 1;
    opacity: 0.2;
    letter-spacing: -2px;
  }

  .proj-category {
    font-size: 0.7rem;
    font-weight: 600;
    padding: 3px 12px;
    border-radius: 6px;
    border: 1px solid;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  .proj-wip-badge {
    font-size: 0.7rem;
    font-weight: 600;
    color: #fbbf24;
    background: rgba(251,191,36,0.1);
    border: 1px solid rgba(251,191,36,0.3);
    padding: 3px 10px;
    border-radius: 6px;
    letter-spacing: 0.5px;
    animation: wip-pulse 2.5s ease-in-out infinite;
  }

  @keyframes wip-pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.5; }
  }

  .proj-title {
    font-size: 1.75rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 16px;
    color: #ffffff;
    letter-spacing: -0.5px;
  }

  .proj-accent-line {
    height: 2px;
    width: 44px;
    border-radius: 2px;
    margin-bottom: 20px;
  }

  .proj-description {
    color: rgba(255,255,255,0.65);
    font-size: 0.97rem;
    line-height: 1.85;
    margin-bottom: 24px;
  }

  /* Tags */
  .proj-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 28px;
  }

  .proj-tag {
    padding: 4px 12px;
    border-radius: 6px;
    border: 1px solid;
    font-size: 0.73rem;
    font-weight: 500;
    background: rgba(255,255,255,0.04);
    letter-spacing: 0.3px;
  }

  /* Footer */
  .proj-footer {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.07);
  }

  .proj-deploy {
    display: flex;
    align-items: center;
    gap: 6px;
    color: rgba(255,255,255,0.35);
    font-size: 0.76rem;
    letter-spacing: 0.3px;
  }

  .proj-deploy-icon { display: flex; align-items: center; }

  .proj-btns {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: auto;
  }

  .proj-btn-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px; height: 36px;
    border-radius: 8px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    transition: all 0.25s ease;
  }

  .proj-btn-icon:hover {
    background: rgba(123,104,238,0.2);
    border-color: rgba(123,104,238,0.5);
    color: #fff;
    transform: scale(1.08);
  }

  .proj-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 20px;
    border-radius: 8px;
    color: white;
    font-size: 0.84rem;
    font-weight: 600;
    text-decoration: none;
    border: none;
    transition: all 0.25s ease;
    box-shadow: 0 4px 16px rgba(0,0,0,0.25);
    letter-spacing: 0.3px;
  }

  .proj-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
    filter: brightness(1.15);
  }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .proj-row { padding: 60px 40px; gap: 40px; }
  }

  @media (max-width: 768px) {
    .projects-section { padding: 80px 0 40px; }
    .projects-heading { font-size: 2.8rem; letter-spacing: -1px; }

    .proj-row {
      grid-template-columns: 1fr;
      padding: 50px 20px;
      gap: 36px;
    }

    .proj-row:nth-child(even) .proj-image-side,
    .proj-row:nth-child(even) .proj-text-side { order: unset; }

    .proj-row::after { left: 20px; right: 20px; }
    .proj-title { font-size: 1.45rem; }
    .proj-number { font-size: 2rem; }
    .frame-mobile { width: 180px; }
    .frame-mobile-img { max-height: 300px; }
  }

  @media (max-width: 480px) {
    .projects-heading { font-size: 2.2rem; }
    .proj-row { padding: 40px 16px; gap: 28px; }
    .proj-title { font-size: 1.2rem; }
    .projects-tab { padding: 7px 14px; font-size: 0.8rem; border-radius: 6px; }
    .frame-mobile { width: 160px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .frame-desktop, .frame-mobile, .proj-btn-primary, .proj-btn-icon { transition: none !important; }
    .proj-wip-badge { animation: none !important; }
  }
`
document.head.appendChild(styles)

export default Projects