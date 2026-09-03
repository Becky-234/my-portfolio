import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skillCategories = [
  {
    label: 'Frontend',
    color: '#7b68ee',
    skills: [
      { name: 'HTML5',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'PHP',          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'React',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Vue.js',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Flutter',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Expo',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg' },
    ]
  },
  {
    label: 'Backend',
    color: '#10b981',
    skills: [
      { name: 'Node.js',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Django',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
      { name: 'NestJS',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
      { name: 'Express',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    ]
  },
  {
    label: 'Database',
    color: '#f59e0b',
    skills: [
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Supabase',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
    ]
  },
  {
    label: 'Design',
    color: '#ec4899',
    skills: [
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ]
  },
  {
    label: 'Tools',
    color: '#06b6d4',
    skills: [
      { name: 'GitHub',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Trello',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    ]
  },
]

const ALL_LABEL = 'All'

function SkillCard({ skill, index, accentColor }) {
  const cardRef = useScrollReveal({ threshold: 0.15 })

  return (
    <div
      ref={cardRef}
      className="sk-card reveal reveal-scale"
      style={{
        transitionDelay: `${index * 0.07}s`,
        '--accent': accentColor,
      }}
    >
      <div className="sk-card-glow" aria-hidden="true" />

      <div className="sk-logo-wrap">
        <img src={skill.logo} alt={skill.name} className="sk-logo" />
      </div>
      <span className="sk-name">{skill.name}</span>

      <div className="sk-bar" aria-hidden="true" />
    </div>
  )
}

function Skills() {
  const headingRef = useScrollReveal({ threshold: 0.2 })
  const subRef     = useScrollReveal({ threshold: 0.2 })
  const tabsRef    = useScrollReveal({ threshold: 0.2 })

  const [activeTab, setActiveTab] = useState(ALL_LABEL)

  const allSkills = skillCategories.flatMap(c =>
    c.skills.map(s => ({ ...s, color: c.color }))
  )

  const activeCategory = skillCategories.find(c => c.label === activeTab)
  const visibleSkills =
    activeTab === ALL_LABEL
      ? allSkills
      : (activeCategory?.skills ?? []).map(s => ({ ...s, color: activeCategory.color }))

  const tabs = [ALL_LABEL, ...skillCategories.map(c => c.label)]

  return (
    <section id="skills" className="sk-section">

      <div className="sk-bg-orb" aria-hidden="true" />

      <div className="sk-container">

        <div className="sk-header">
          <p ref={headingRef} className="sk-eyebrow reveal">
            <span className="sk-eyebrow-line" aria-hidden="true" />
            What I work with
          </p>
          <h1 className="sk-heading">
            Skills &amp; <span className="sk-heading-outline">Tools</span>
          </h1>
          <p ref={subRef} className="sk-subheading reveal" style={{ transitionDelay: '0.1s' }}>
            Technologies I use to build web &amp; mobile experiences
          </p>
        </div>

        <div ref={tabsRef} className="sk-tabs reveal" style={{ transitionDelay: '0.15s' }}>
          {tabs.map(tab => {
            const cat = skillCategories.find(c => c.label === tab)
            const color = cat?.color ?? '#7b68ee'
            return (
              <button
                key={tab}
                className={`sk-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                style={activeTab === tab ? { '--tab-color': color } : {}}
              >
                {tab !== ALL_LABEL && (
                  <span
                    className="sk-tab-dot"
                    style={{ background: color }}
                    aria-hidden="true"
                  />
                )}
                {tab}
              </button>
            )
          })}
        </div>

        <div className="sk-grid">
          {visibleSkills.map((skill, i) => (
            <SkillCard
              key={`${activeTab}-${skill.name}`}
              skill={skill}
              index={i}
              accentColor={skill.color}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

const styles = document.createElement('style')
styles.textContent = `
  .sk-section {
    padding: 110px 60px;
    background: transparent;
    position: relative;
    overflow: hidden;
  }

  .sk-bg-orb {
    position: absolute;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(123,104,238,0.09) 0%, transparent 70%);
    top: 50%;
    right: -200px;
    transform: translateY(-50%);
    pointer-events: none;
    filter: blur(80px);
  }

  .sk-container {
    max-width: 1160px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .sk-header {
    text-align: center;
    margin-bottom: 52px;
  }

  .sk-eyebrow {
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

  .sk-eyebrow-line {
    display: block;
    width: 28px;
    height: 1.5px;
    background: linear-gradient(90deg, transparent, #7b68ee);
    border-radius: 2px;
  }

  .sk-heading {
    font-size: clamp(2.6rem, 5vw, 4rem);
    font-weight: 800;
    letter-spacing: -1.5px;
    color: #ffffff;
    line-height: 1;
    margin-bottom: 16px;
  }

  .sk-heading-outline {
    -webkit-text-stroke: 2px #7b68ee;
    color: transparent;
    filter: drop-shadow(0 0 16px rgba(123,104,238,0.45));
  }

  .sk-subheading {
    font-size: 1rem;
    color: rgba(255,255,255,0.55);
    letter-spacing: 0.5px;
  }

  .sk-tabs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 48px;
  }

  .sk-tab {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 8px 20px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.04);
    color: rgba(255,255,255,0.55);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.22s ease;
    font-family: inherit;
    letter-spacing: 0.3px;
  }

  .sk-tab:hover {
    border-color: rgba(123,104,238,0.4);
    color: #fff;
    background: rgba(123,104,238,0.1);
  }

  .sk-tab.active {
    background: rgba(var(--tab-color-rgb, 123,104,238), 0.18);
    border-color: var(--tab-color, #7b68ee);
    color: #fff;
    box-shadow: 0 0 0 1px var(--tab-color, #7b68ee) inset,
                0 4px 20px rgba(123,104,238,0.25);
  }

  .sk-tab.active {
    border-color: var(--tab-color, #7b68ee);
    box-shadow: 0 4px 20px rgba(123,104,238,0.2);
  }

  .sk-tab-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .sk-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(148px, 1fr));
    gap: 18px;
  }

  .sk-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 30px 18px 24px;
    border-radius: 18px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.09);
    overflow: hidden;
    cursor: default;
    transition:
      opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
      background 0.28s ease,
      border-color 0.28s ease,
      box-shadow 0.28s ease;
  }

  .sk-card:hover {
    transform: translateY(-8px) !important;
    background: rgba(255,255,255,0.08);
    border-color: color-mix(in srgb, var(--accent, #7b68ee) 60%, transparent);
    box-shadow:
      0 16px 48px rgba(0,0,0,0.3),
      0 0 0 1px color-mix(in srgb, var(--accent, #7b68ee) 30%, transparent) inset;
  }

  .sk-card-glow {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--accent, #7b68ee) 30%, transparent);
    filter: blur(28px);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .sk-card:hover .sk-card-glow {
    opacity: 1;
  }

  .sk-logo-wrap {
    width: 58px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.08);
    transition: background 0.28s ease, border-color 0.28s ease, transform 0.28s ease;
  }

  .sk-card:hover .sk-logo-wrap {
    background: color-mix(in srgb, var(--accent, #7b68ee) 15%, transparent);
    border-color: color-mix(in srgb, var(--accent, #7b68ee) 40%, transparent);
    transform: scale(1.08);
  }

  .sk-logo {
    width: 34px;
    height: 34px;
    object-fit: contain;
    display: block;
  }

  .sk-name {
    font-size: 0.82rem;
    font-weight: 600;
    color: rgba(255,255,255,0.8);
    text-align: center;
    letter-spacing: 0.3px;
    transition: color 0.25s ease;
  }

  .sk-card:hover .sk-name {
    color: #ffffff;
  }

  .sk-bar {
    position: absolute;
    bottom: 0;
    left: 20%;
    right: 20%;
    height: 2px;
    border-radius: 2px 2px 0 0;
    background: var(--accent, #7b68ee);
    opacity: 0;
    transform: scaleX(0);
    transition: opacity 0.3s ease, transform 0.3s ease;
    transform-origin: center;
  }

  .sk-card:hover .sk-bar {
    opacity: 1;
    transform: scaleX(1);
  }

  @media (max-width: 1024px) {
    .sk-section { padding: 90px 40px; }
  }

  @media (max-width: 768px) {
    .sk-section { padding: 80px 20px; }
    .sk-heading { font-size: 2.6rem; }
    .sk-grid { grid-template-columns: repeat(auto-fill, minmax(126px, 1fr)); gap: 14px; }
    .sk-card { padding: 24px 14px 20px; gap: 12px; }
    .sk-logo-wrap { width: 50px; height: 50px; }
    .sk-logo { width: 28px; height: 28px; }
    .sk-tab { padding: 7px 14px; font-size: 0.8rem; }
  }

  @media (max-width: 480px) {
    .sk-section { padding: 60px 14px; }
    .sk-heading { font-size: 2.2rem; letter-spacing: -1px; }
    .sk-grid { grid-template-columns: repeat(auto-fill, minmax(108px, 1fr)); gap: 10px; }
    .sk-card { padding: 20px 10px 16px; border-radius: 14px; }
    .sk-logo-wrap { width: 44px; height: 44px; border-radius: 10px; }
    .sk-logo { width: 24px; height: 24px; }
    .sk-name { font-size: 0.75rem; }
    .sk-tab { padding: 6px 12px; font-size: 0.75rem; border-radius: 6px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .sk-card, .sk-card-glow, .sk-bar, .sk-logo-wrap { transition: none !important; }
  }
`
document.head.appendChild(styles)

export default Skills