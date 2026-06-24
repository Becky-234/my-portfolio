import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skillCategories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML5',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React',        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Vue.js',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Flutter',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Expo',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg' },
    ]
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ]
  },
  {
    label: 'Database',
    skills: [
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ]
  },
  {
    label: 'Design',
    skills: [
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ]
  },
  {
    label: 'Tools',
    skills: [
      { name: 'GitHub',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Trello',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    ]
  },
]

const ALL_LABEL = 'All'

function SkillCard({ skill, index }) {
  const cardRef = useScrollReveal({ threshold: 0.2 })

  return (
    <div ref={cardRef} className="skill-card reveal" style={{ transitionDelay: `${index * 0.08}s` }}>
      <img src={skill.logo} alt={skill.name} className="skill-logo" />
      <h3>{skill.name}</h3>
    </div>
  )
}

function Skills() {
  const headingRef    = useScrollReveal({ threshold: 0.2 })
  const subheadingRef = useScrollReveal({ threshold: 0.2 })
  const [activeTab, setActiveTab] = useState(ALL_LABEL)

  const allSkills = skillCategories.flatMap(c => c.skills)

  const visibleSkills =
    activeTab === ALL_LABEL
      ? allSkills
      : skillCategories.find(c => c.label === activeTab)?.skills ?? []

  const tabs = [ALL_LABEL, ...skillCategories.map(c => c.label)]

  return (
    <section id="skills" className="skills-section">
      <div className="skillsContainer">
        <div className="headSkill">
          <h1 ref={headingRef} className="skills-heading reveal">Skills</h1>
          <p ref={subheadingRef} className="skills-subheading reveal" style={{ transitionDelay: '0.1s' }}>
            Technologies & Tools I Work With
          </p>
        </div>

        <div className="skills-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`skills-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {visibleSkills.map((skill, index) => (
            <SkillCard key={`${activeTab}-${skill.name}`} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = document.createElement('style')
styles.textContent = `
  .skills-section {
    padding: 100px 20px;
    background: transparent;
    position: relative;
  }

  .skillsContainer {
    max-width: 1200px;
    margin: 0 auto;
  }

  .skills-heading {
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

  .skills-heading::after {
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

  .skills-subheading {
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    margin-bottom: 40px;
    margin-top: 25px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .skills-tabs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 40px;
  }

  .skills-tab {
    padding: 10px 22px;
    border-radius: 50px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.65);
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease;
    letter-spacing: 0.5px;
  }

  .skills-tab:hover {
    border-color: rgba(123, 104, 238, 0.5);
    color: #fff;
    background: rgba(123, 104, 238, 0.15);
  }

  .skills-tab.active {
    background: linear-gradient(135deg, #7b68ee, #b8a8ff);
    border-color: transparent;
    color: #fff;
    box-shadow: 0 4px 20px rgba(123, 104, 238, 0.4);
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 24px;
    margin-top: 10px;
  }

  .skill-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 32px 20px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                background 0.3s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease;
  }

  .skill-card:hover {
    transform: translateY(-10px) !important;
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(123, 104, 238, 0.4);
    box-shadow: 0 15px 40px rgba(123, 104, 238, 0.2);
  }

  .skill-logo {
    width: 56px;
    height: 56px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  .skill-card:hover .skill-logo {
    transform: scale(1.15);
  }

  .skill-card h3 {
    font-size: 1rem;
    font-weight: 600;
    background: linear-gradient(135deg, #ffffff, #b8a8ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin: 0;
    text-align: center;
    letter-spacing: 0.3px;
  }

  @media (max-width: 768px) {
    .skills-section { padding: 80px 20px; }
    .skills-heading { font-size: 2.5rem; }
    .skills-subheading { font-size: 1rem; margin-bottom: 30px; }
    .skills-grid { grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 16px; }
    .skill-card { padding: 24px 16px; }
    .skill-logo { width: 46px; height: 46px; }
    .skill-card h3 { font-size: 0.9rem; }
    .skills-tabs { gap: 8px; }
    .skills-tab { padding: 8px 16px; font-size: 0.88rem; }
  }

  @media (max-width: 480px) {
    .skills-section { padding: 60px 15px; }
    .skills-heading { font-size: 2rem; }
    .skills-subheading { font-size: 0.9rem; margin-bottom: 20px; }
    .skills-grid { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); gap: 12px; }
    .skill-card { padding: 20px 12px; gap: 12px; }
    .skill-logo { width: 40px; height: 40px; }
    .skill-card h3 { font-size: 0.85rem; }
  }
`
document.head.appendChild(styles)

export default Skills