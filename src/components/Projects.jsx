import React from 'react'
import { FiPackage, FiCloud, FiShoppingBag, FiExternalLink } from 'react-icons/fi'

function Projects() {
  const projects = [
    {
      title: 'Mayondo Wood & Furniture Management System',
      description: 'A comprehensive management system for wood and furniture business operations',
      link: 'https://mayondo-654f.onrender.com/',
      icon: <FiPackage size={40} />,
      iconColor: '#CD853F'
    },
    {
      title: 'Weather Forecast Application',
      description: 'Real-time weather forecasting app with location based services',
      link: 'https://myweatherwww.netlify.app/',
      icon: <FiCloud size={40} />,
      iconColor: '#4A90E2'
    },
    {
      title: 'VogueValt Fashion Website',
      description: 'Modern e-commerce fashion website with responsive design',
      link: 'https://github.com/Becky-234/my-first-website',
      icon: <FiShoppingBag size={40} />,
      iconColor: '#E75480'
    }
  ]

  return (
    <section id="projects" className="projectsContainer">
      <h1 className="projects-heading">Projects</h1>
      <p className="projects-subheading">Some of my recent work and creations</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon" style={{ color: project.iconColor }}>
              {project.icon}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-btn" target="_blank" rel="noopener noreferrer">
                View Project <FiExternalLink size={14} style={{ marginLeft: '8px' }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// CSS AT THE BOTTOM - ORIGINAL HOVER EFFECT
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
    margin-bottom: 50px;
    margin-top: 25px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* GLASS CARD STYLES - ORIGINAL HOVER */
  .project-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 30px;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .project-card:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(123, 104, 238, 0.4);
    box-shadow: 0 15px 40px rgba(123, 104, 238, 0.2);
  }

  .project-icon {
    margin-bottom: 20px;
    transition: all 0.3s ease;
  }

  .project-card:hover .project-icon {
    transform: scale(1.1);
  }

  .project-content h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    background: linear-gradient(135deg, #ffffff, #b8a8ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
  }

  .project-content p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .project-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 25px;
    background: linear-gradient(135deg, rgba(123, 104, 238, 0.8), rgba(75, 0, 130, 0.8));
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .project-btn:hover {
    background: linear-gradient(135deg, rgba(90, 70, 210, 0.9), rgba(55, 0, 110, 0.9));
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(123, 104, 238, 0.3);
  }

  @media (max-width: 768px) {
    .projectsContainer {
      padding: 80px 20px;
    }
    .projects-heading {
      font-size: 2.5rem;
    }
    .projects-subheading {
      font-size: 1rem;
      margin-bottom: 40px;
    }
    .projects-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .project-card {
      padding: 25px;
    }
  }

  @media (max-width: 480px) {
    .projectsContainer {
      padding: 60px 15px;
    }
    .projects-heading {
      font-size: 2rem;
    }
    .projects-subheading {
      font-size: 0.9rem;
      margin-bottom: 30px;
    }
    .project-content h3 {
      font-size: 1.2rem;
    }
  }
`
document.head.appendChild(styles)

export default Projects