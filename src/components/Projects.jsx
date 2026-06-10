import React, { useState } from 'react'
import { FiExternalLink, FiGithub, FiPackage, FiCloud, FiShoppingBag, FiSmartphone } from 'react-icons/fi'
import {
  SiRender, SiNetlify, SiDjango, SiExpo
} from 'react-icons/si'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Mayondo Wood & Furniture Management System',
    description: 'A comprehensive management system for wood and furniture business operations, featuring inventory tracking, order management, and business analytics.',
    link: 'https://mayondo-654f.onrender.com/',
    github: null,
    icon: <FiPackage size={24} />,
    accentColor: '#CD853F',
    category: 'Web App',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MongoDB'],
    deployedWith: <SiRender size={14} style={{ display: 'inline', marginRight: '5px' }} />,
    deployLabel: 'Render'
  },
  {
    title: 'Weather Forecast Application',
    description: 'Real-time weather forecasting app with location-based services, 7-day forecasts, and dynamic weather visualizations.',
    link: 'https://myweatherwww.netlify.app/',
    github: null,
    icon: <FiCloud size={24} />,
    accentColor: '#4A90E2',
    category: 'Web App',
    tags: ['HTML5' , 'CSS3', 'JavaScript', 'Weather API', 'Geolocation'],
    deployedWith: <SiNetlify size={14} style={{ display: 'inline', marginRight: '5px' }} />,
    deployLabel: 'Netlify'
  },
  {
    title: 'VogueValt Fashion Website',
    description: 'Modern e-commerce fashion website with responsive design, product browsing, and a clean shopping interface.',
    link: 'https://github.com/Becky-234/my-first-website',
    github: 'https://github.com/Becky-234/my-first-website',
    icon: <FiShoppingBag size={24} />,
    accentColor: '#E75480',
    category: 'Website',
    tags: ['HTML5', 'CSS3', 'Responsive'],
    deployedWith: <FiGithub size={14} style={{ display: 'inline', marginRight: '5px' }} />,
    deployLabel: 'GitHub'
  },
  {
    title: 'Multi-Vendor Booking & E-Commerce App',
    description: 'Full-stack mobile app supporting multi-vendor storefronts, product and service listings, bookings, and Paystack payment integration.',
    link: null,
    github: null,
    icon: <FiSmartphone size={24} />,
    accentColor: '#10b981',
    category: 'Mobile App',
    tags: ['React Native', 'Expo', 'Django', 'PostgreSQL', 'Paystack API'],
    deployedWith: <SiExpo size={14} style={{ display: 'inline', marginRight: '5px' }} />,
    deployLabel: 'Expo'
  }
]

const ALL_TABS = ['All', 'Web App', 'Mobile App', 'Website']

function ProjectCard({ project, index }) {
  const cardRef = useScrollReveal({ threshold: 0.15 })

  return (
    <div
      ref={cardRef}
      className="project-card reveal reveal-scale"
      style={{ transitionDelay: `${index * 0.12}s`, '--accent': project.accentColor }}
    >
      {/* Top accent line */}
      <div className="project-top-bar" style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }} />

      <div className="project-card-body">
        {/* Icon + category badge */}
        <div className="project-card-top">
          <div className="project-icon-wrap" style={{ background: `${project.accentColor}22`, border: `1px solid ${project.accentColor}44`, color: project.accentColor }}>
            {project.icon}
          </div>
          <span className="project-category-badge" style={{ color: project.accentColor, borderColor: `${project.accentColor}55`, background: `${project.accentColor}11` }}>
            {project.category}
          </span>
        </div>

        {/* Title & description */}
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        {/* Tech tags */}
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>

        {/* Footer: deploy info + buttons */}
        <div className="project-footer">
          <span className="project-deploy">
            {project.deployedWith}
            {project.deployLabel}
          </span>
          <div className="project-btns">
            {project.github && (
              <a href={project.github} className="project-btn-icon" target="_blank" rel="noopener noreferrer" title="View Code">
                <FiGithub size={16} />
              </a>
            )}
            {project.link && (
              <a href={project.link} className="project-btn-primary" target="_blank" rel="noopener noreferrer"
                style={{ background: `linear-gradient(135deg, ${project.accentColor}cc, ${project.accentColor}88)` }}>
                View Project <FiExternalLink size={13} />
              </a>
            )}
            {!project.link && (
              <span className="project-btn-wip">In Progress</span>
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
    <section id="projects" className="projectsContainer">
      <h1 ref={headingRef} className="projects-heading reveal">Projects</h1>
      <p ref={subheadingRef} className="projects-subheading reveal" style={{ transitionDelay: '0.1s' }}>
        Some of my recent work and creations
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

      <div className="projects-grid">
        {filtered.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

const styles = document.createElement('style')
styles.textContent = `
  .projectsContainer {
    padding: 100px 20px;
    background: transparent;
    position: relative;
  }

  .projects-heading {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 15px;
    text-align: center;
    position: relative;
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
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    margin-top: 25px;
    margin-bottom: 30px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  /* TABS */
  .projects-tabs {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 50px;
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

  /* GRID — 2 columns, rectangular cards */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* CARD */
  .project-card {
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(15px);
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                background 0.3s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-6px) !important;
    background: rgba(255, 255, 255, 0.10);
    border-color: rgba(123, 104, 238, 0.35);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  }

  .project-top-bar {
    height: 3px;
    width: 100%;
    flex-shrink: 0;
  }

  .project-card-body {
    padding: 20px 22px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .project-card-top {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
  }

  .project-icon-wrap {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  .project-card:hover .project-icon-wrap {
    transform: scale(1.05);
  }

  .project-category-badge {
    font-size: 0.72rem;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 20px;
    border: 1px solid;
    letter-spacing: 0.5px;
    margin-left: auto;
  }

  .project-title {
    font-size: 1.05rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff, #d0c8ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 8px;
    line-height: 1.4;
  }

  .project-desc {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.86rem;
    line-height: 1.65;
    margin-bottom: 14px;
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* TECH TAGS */
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  }

  .project-tag {
    padding: 3px 9px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.65);
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.3px;
  }

  /* FOOTER */
  .project-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 14px;
  }

  .project-deploy {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.75rem;
    gap: 4px;
  }

  .project-btns {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .project-btn-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .project-btn-icon:hover {
    background: rgba(123, 104, 238, 0.3);
    border-color: rgba(123, 104, 238, 0.5);
  }

  .project-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 20px;
    color: white;
    font-size: 0.8rem;
    font-weight: 600;
    text-decoration: none;
    border: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  .project-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    filter: brightness(1.15);
  }

  .project-btn-wip {
    font-size: 0.75rem;
    font-weight: 600;
    color: #fbbf24;
    background: rgba(251, 191, 36, 0.12);
    border: 1px solid rgba(251, 191, 36, 0.3);
    padding: 4px 11px;
    border-radius: 20px;
    letter-spacing: 0.3px;
  }

  /* Tablet: still 2 columns */
  @media (max-width: 768px) {
    .projectsContainer { padding: 80px 16px; }
    .projects-heading { font-size: 2.5rem; }
    .projects-subheading { font-size: 1rem; }
    .projects-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .project-card-body { padding: 16px 18px; }
    .project-title { font-size: 0.95rem; }
    .project-icon-wrap { width: 38px; height: 38px; }
    .project-icon-wrap svg { width: 20px; height: 20px; }
  }

  /* Mobile: single column */
  @media (max-width: 520px) {
    .projectsContainer { padding: 60px 14px; }
    .projects-heading { font-size: 2rem; }
    .projects-subheading { font-size: 0.9rem; }
    .projects-grid { grid-template-columns: 1fr; gap: 14px; }
    .project-card-body { padding: 16px; }
    .project-title { font-size: 1rem; }
    .projects-tab { padding: 7px 16px; font-size: 0.82rem; }
  }
`
document.head.appendChild(styles)

export default Projects