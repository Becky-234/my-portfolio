import React, { useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { SiRender, SiNetlify, SiExpo } from 'react-icons/si'
import { useScrollReveal } from '../hooks/useScrollReveal'

import ekiEcommerce from '../assets/eki.png'
import ekiBuyer from '../assets/eki-buyer.png'
import ekiSeller from '../assets/eki-seller.png'
import mayondo from '../assets/mayondo.png'
import weather from '../assets/weather.png'
import voguevalt from '../assets/voguevalt.png'

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
    deployedWith: <SiRender size={14} />,
    deployLabel: 'Render'
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
    deployLabel: 'Expo'
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
    deployLabel: 'Expo'
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
    deployLabel: 'Render'
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
    deployLabel: 'Netlify'
  },
  {
    title: 'VogueValt Fashion Website',
    description: 'Modern e-commerce fashion website with responsive design, product browsing, and a clean shopping interface. A stylish showcase of frontend skills with a focus on UI polish.',
    link: 'https://github.com/Becky-234/my-first-website',
    github: 'https://github.com/Becky-234/my-first-website',
    accentColor: '#E75480',
    category: 'Website',
    image: voguevalt,
    tags: ['HTML5', 'CSS3', 'Responsive'],
    deployedWith: <FiGithub size={14} />,
    deployLabel: 'GitHub'
  }
]

const ALL_TABS = ['All', 'Web App', 'Mobile App', 'Website']

/* ── Desktop browser frame ── */
function DesktopFrame({ image, title, accentColor }) {
  return (
    <div className="frame-desktop" style={{ '--accent': accentColor }}>
      {/* Browser chrome */}
      <div className="frame-desktop-bar">
        <div className="frame-desktop-dots">
          <span className="frame-dot" style={{ background: '#ff5f57' }} />
          <span className="frame-dot" style={{ background: '#febc2e' }} />
          <span className="frame-dot" style={{ background: '#28c840' }} />
        </div>
        <div className="frame-desktop-url">
          <span className="frame-desktop-url-text">● joineki.com</span>
        </div>
        <div className="frame-desktop-actions" />
      </div>
      {/* Screen */}
      <div className="frame-desktop-screen">
        <img
          src={image}
          alt={title}
          className="frame-desktop-img"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/900x560/1a1a2e/7b68ee?text=${title}`
          }}
        />
        <div className="frame-screen-shine" />
      </div>
      {/* Stand */}
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
      {/* Notch */}
      <div className="frame-mobile-notch">
        <div className="frame-mobile-camera" />
      </div>
      {/* Screen */}
      <div className="frame-mobile-screen">
        <img
          src={image}
          alt={title}
          className="frame-mobile-img"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x800/1a1a2e/7b68ee?text=${title}`
          }}
        />
        <div className="frame-screen-shine" />
      </div>
      {/* Home indicator */}
      <div className="frame-mobile-home" />
      {/* Side buttons */}
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
    <div className="proj-row">
      {/* Image / Frame side */}
      <div
        ref={imageRef}
        className={`proj-image-side reveal ${isEven ? 'reveal-left' : 'reveal-right'}`}
        style={{ transitionDelay: '0.05s' }}
      >
        {isMobile
          ? <MobileFrame image={project.image} title={project.title} accentColor={project.accentColor} />
          : <DesktopFrame image={project.image} title={project.title} accentColor={project.accentColor} />
        }
      </div>

      {/* Text side */}
      <div
        ref={textRef}
        className={`proj-text-side reveal ${isEven ? 'reveal-right' : 'reveal-left'}`}
        style={{ transitionDelay: '0.15s' }}
      >
        <div className="proj-meta-row">
          <span className="proj-number" style={{ color: project.accentColor }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className="proj-category"
            style={{
              color: project.accentColor,
              borderColor: `${project.accentColor}55`,
              background: `${project.accentColor}11`
            }}
          >
            {project.category}
          </span>
        </div>

        <h3 className="proj-title">{project.title}</h3>

        <div className="proj-accent-line" style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }} />

        <p className="proj-description">{project.description}</p>

        <div className="proj-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="proj-tag" style={{ borderColor: `${project.accentColor}44`, color: 'rgba(255,255,255,0.7)' }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="proj-footer">
          <span className="proj-deploy">
            <span className="proj-deploy-icon">{project.deployedWith}</span>
            {project.deployLabel}
          </span>
          <div className="proj-btns">
            {project.github && (
              <a href={project.github} className="proj-btn-icon" target="_blank" rel="noopener noreferrer" title="View Code">
                <FiGithub size={16} />
              </a>
            )}
            {project.link ? (
              <a
                href={project.link}
                className="proj-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: `linear-gradient(135deg, ${project.accentColor}dd, ${project.accentColor}88)` }}
              >
                View Project <FiExternalLink size={13} />
              </a>
            ) : (
              <span className="proj-btn-wip">In Progress</span>
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
      <div className="projects-header">
        <h1 ref={headingRef} className="projects-heading reveal">Projects</h1>
        <p ref={subheadingRef} className="projects-subheading reveal" style={{ transitionDelay: '0.1s' }}>
          Some of my recent work and creations
        </p>
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
  /* ─────────────────────────────────────────
     SECTION & HEADER
  ───────────────────────────────────────── */
  .projects-section {
    padding: 100px 0;
    background: transparent;
    position: relative;
  }

  .projects-header {
    text-align: center;
    padding: 0 20px;
    margin-bottom: 80px;
  }

  .projects-heading {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 15px;
    position: relative;
    display: inline-block;
    background: linear-gradient(135deg, #ffffff, #b8a8ff, #7b68ee);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .projects-heading::after {
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

  .projects-subheading {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    margin-top: 25px;
    margin-bottom: 36px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  /* ── Tabs ── */
  .projects-tabs {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .projects-tab {
    padding: 8px 22px;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease;
    font-family: inherit;
    letter-spacing: 0.3px;
  }

  .projects-tab:hover {
    background: rgba(123, 104, 238, 0.15);
    border-color: rgba(123, 104, 238, 0.4);
    color: #b8a8ff;
  }

  .projects-tab.active {
    background: linear-gradient(135deg, rgba(123, 104, 238, 0.8), rgba(75, 0, 130, 0.8));
    border-color: rgba(123, 104, 238, 0.6);
    color: white;
    box-shadow: 0 4px 15px rgba(123, 104, 238, 0.3);
  }

  /* ─────────────────────────────────────────
     PROJECT ROWS
  ───────────────────────────────────────── */
  .projects-list {
    display: flex;
    flex-direction: column;
  }

  .proj-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    padding: 80px 80px;
    position: relative;
  }

  .proj-row:nth-child(even) .proj-image-side { order: 2; }
  .proj-row:nth-child(even) .proj-text-side  { order: 1; }

  .proj-row::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 80px;
    right: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
  }
  .proj-row:last-child::after { display: none; }

  /* ─────────────────────────────────────────
     DESKTOP FRAME
  ───────────────────────────────────────── */
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

  /* Browser chrome bar */
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

  .frame-desktop-dots {
    display: flex;
    gap: 5px;
    flex-shrink: 0;
  }

  .frame-dot {
    width: 10px;
    height: 10px;
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

  .frame-desktop-actions {
    width: 40px;
    flex-shrink: 0;
  }

  /* Screen */
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

  /* Stand */
  .frame-desktop-stand {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .frame-desktop-neck {
    width: 18px;
    height: 22px;
    background: linear-gradient(180deg, #2a2a38, #1e1e2a);
    border-left: 1px solid rgba(255,255,255,0.08);
    border-right: 1px solid rgba(255,255,255,0.08);
  }

  .frame-desktop-base {
    width: 80px;
    height: 7px;
    background: linear-gradient(180deg, #2a2a38, #1e1e2a);
    border-radius: 0 0 6px 6px;
    border: 1px solid rgba(255,255,255,0.08);
    border-top: none;
  }

  /* ─────────────────────────────────────────
     MOBILE FRAME
  ───────────────────────────────────────── */
  .frame-mobile {
    width: 220px;
    margin: 0 auto;
    position: relative;
    background: linear-gradient(160deg, #2a2a3a, #1a1a26);
    border-radius: 36px;
    border: 2px solid rgba(255,255,255,0.14);
    box-shadow:
      inset 0 0 0 1px rgba(255,255,255,0.05),
      0 24px 60px rgba(0,0,0,0.55);
    padding: 14px 10px 20px;
    box-sizing: border-box;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.4));
  }

  .frame-mobile:hover {
    transform: translateY(-8px) rotate(-1deg);
    box-shadow:
      inset 0 0 0 1px rgba(255,255,255,0.07),
      0 36px 80px rgba(0,0,0,0.65),
      0 0 40px color-mix(in srgb, var(--accent) 20%, transparent);
    filter: drop-shadow(0 30px 50px rgba(0,0,0,0.5));
  }

  /* Notch */
  .frame-mobile-notch {
    width: 70px;
    height: 20px;
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
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #2a3a4a, #0d1520);
    border: 1px solid rgba(255,255,255,0.1);
  }

  /* Screen */
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

  /* Home indicator */
  .frame-mobile-home {
    width: 60px;
    height: 4px;
    background: rgba(255,255,255,0.25);
    border-radius: 2px;
    margin: 10px auto 0;
  }

  /* Side buttons */
  .frame-mobile-btn {
    position: absolute;
    background: linear-gradient(180deg, #2e2e3e, #1e1e2a);
    border-radius: 2px;
    right: -3px;
  }

  .frame-mobile-btn--power {
    width: 3px;
    height: 50px;
    top: 90px;
  }

  .frame-mobile-btn--vol-up {
    width: 3px;
    height: 32px;
    top: 80px;
    right: auto;
    left: -3px;
  }

  .frame-mobile-btn--vol-down {
    width: 3px;
    height: 32px;
    top: 122px;
    right: auto;
    left: -3px;
  }

  /* Shared screen shine */
  .frame-screen-shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255,255,255,0.06) 0%,
      transparent 45%,
      rgba(0,0,0,0.08) 100%
    );
    pointer-events: none;
  }

  /* ─────────────────────────────────────────
     TEXT SIDE
  ───────────────────────────────────────── */
  .proj-text-side {
    display: flex;
    flex-direction: column;
  }

  .proj-meta-row {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 16px;
  }

  .proj-number {
    font-size: 2.8rem;
    font-weight: 800;
    line-height: 1;
    opacity: 0.25;
    letter-spacing: -2px;
  }

  .proj-category {
    font-size: 0.72rem;
    font-weight: 600;
    padding: 3px 12px;
    border-radius: 20px;
    border: 1px solid;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  .proj-title {
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.25;
    margin-bottom: 16px;
    background: linear-gradient(135deg, #ffffff, #d0c8ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .proj-accent-line {
    height: 3px;
    width: 50px;
    border-radius: 2px;
    margin-bottom: 20px;
  }

  .proj-description {
    color: rgba(255, 255, 255, 0.72);
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 24px;
  }

  .proj-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 28px;
  }

  .proj-tag {
    padding: 4px 12px;
    border-radius: 8px;
    border: 1px solid;
    font-size: 0.75rem;
    font-weight: 500;
    background: rgba(255, 255, 255, 0.05);
    letter-spacing: 0.3px;
  }

  .proj-footer {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .proj-deploy {
    display: flex;
    align-items: center;
    gap: 6px;
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.78rem;
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
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .proj-btn-icon:hover {
    background: rgba(123, 104, 238, 0.3);
    border-color: rgba(123, 104, 238, 0.5);
    transform: scale(1.1);
  }

  .proj-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 9px 20px;
    border-radius: 25px;
    color: white;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    border: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(0,0,0,0.25);
    letter-spacing: 0.3px;
  }

  .proj-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
    filter: brightness(1.15);
  }

  .proj-btn-wip {
    font-size: 0.78rem;
    font-weight: 600;
    color: #fbbf24;
    background: rgba(251, 191, 36, 0.12);
    border: 1px solid rgba(251, 191, 36, 0.3);
    padding: 6px 14px;
    border-radius: 25px;
    letter-spacing: 0.3px;
  }

  /* ─────────────────────────────────────────
     RESPONSIVE
  ───────────────────────────────────────── */
  @media (max-width: 1024px) {
    .proj-row { padding: 60px 40px; gap: 40px; }
  }

  @media (max-width: 768px) {
    .projects-section { padding: 80px 0; }
    .projects-heading { font-size: 2.5rem; }

    .proj-row {
      grid-template-columns: 1fr;
      padding: 50px 20px;
      gap: 36px;
    }

    /* Reset alternating order — image always on top */
    .proj-row:nth-child(even) .proj-image-side,
    .proj-row:nth-child(even) .proj-text-side {
      order: unset;
    }

    .proj-row::after { left: 20px; right: 20px; }
    .proj-title { font-size: 1.4rem; }
    .proj-number { font-size: 2rem; }

    .frame-mobile { width: 180px; }
    .frame-mobile-img { max-height: 300px; }
  }

  @media (max-width: 480px) {
    .projects-heading { font-size: 2rem; }
    .proj-row { padding: 40px 16px; gap: 28px; }
    .proj-title { font-size: 1.2rem; }
    .projects-tab { padding: 7px 16px; font-size: 0.82rem; }
    .frame-mobile { width: 160px; }
  }
`
document.head.appendChild(styles)

export default Projects