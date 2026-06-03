import React from 'react'

function Skills() {
  const skills = [
    { name: 'HTML5', percentage: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', percentage: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', percentage: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', percentage: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'React Native', percentage: 70, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Figma', percentage: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
  ]
  
  return (
    <section id="skills" className="skills-section">
      <div className="skillsContainer">
        <div className="headSkill">
          <h1 className="skills-heading">Skills</h1>
          <p className="skills-subheading">Technologies & Tools I Work With</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-info">
                <div className="skill-header">
                  <img src={skill.logo} alt={skill.name} className="skill-logo" />
                  <h3>{skill.name}</h3>
                </div>
                <div className="skill-percentage">
                  <div className="percentage-bar">
                    <div 
                      className="percentage-fill" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                  <span className="percentage-text">{skill.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CSS AT THE BOTTOM - ORIGINAL HOVER EFFECT
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
    margin-bottom: 50px;
    margin-top: 25px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 20px;
  }

  /* GLASS CARD STYLES - ORIGINAL HOVER */
  .skill-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 30px;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .skill-card:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(123, 104, 238, 0.4);
    box-shadow: 0 15px 40px rgba(123, 104, 238, 0.2);
  }

  .skill-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
  }

  .skill-logo {
    width: 50px;
    height: 50px;
    object-fit: contain;
    transition: all 0.3s ease;
  }

  .skill-card:hover .skill-logo {
    transform: scale(1.1);
  }

  .skill-info h3 {
    font-size: 1.5rem;
    background: linear-gradient(135deg, #ffffff, #b8a8ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
    margin: 0;
  }

  .skill-percentage {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
  }

  .percentage-bar {
    flex: 1;
    height: 10px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    overflow: hidden;
  }

  .percentage-fill {
    height: 100%;
    background: linear-gradient(90deg, #7b68ee, #b8a8ff);
    border-radius: 10px;
    transition: width 1s ease;
  }

  .percentage-text {
    color: #b8a8ff;
    font-size: 1rem;
    font-weight: 600;
    min-width: 45px;
    text-align: right;
  }

  @media (max-width: 768px) {
    .skills-section {
      padding: 80px 20px;
    }
    .skills-heading {
      font-size: 2.5rem;
    }
    .skills-subheading {
      font-size: 1rem;
      margin-bottom: 40px;
    }
    .skills-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .skill-card {
      padding: 25px;
    }
    .skill-logo {
      width: 40px;
      height: 40px;
    }
    .skill-info h3 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    .skills-section {
      padding: 60px 15px;
    }
    .skills-heading {
      font-size: 2rem;
    }
    .skills-subheading {
      font-size: 0.9rem;
      margin-bottom: 30px;
    }
    .skill-logo {
      width: 35px;
      height: 35px;
    }
    .skill-info h3 {
      font-size: 1.2rem;
    }
    .percentage-text {
      font-size: 0.9rem;
    }
  }
`
document.head.appendChild(styles)

export default Skills