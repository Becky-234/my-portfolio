import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import aboutImage from '../assets/about.jpeg'

function About() {
  const headingRef    = useScrollReveal({ threshold: 0.2 })
  const subheadingRef = useScrollReveal({ threshold: 0.2 })
  const para1Ref      = useScrollReveal({ threshold: 0.2 })
  const para2Ref      = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="about" style={styles.container}>
      <div style={styles.aboutContent}>
        
        {/* Image Section */}
        <div ref={headingRef} className="reveal reveal-left" style={styles.imageSection}>
          <img 
            src={aboutImage} 
            alt="About Me" 
            className="about-image"
            style={styles.image}
          />
        </div>

        {/* Text Section */}
        <div style={styles.textSection}>
          <h1 ref={headingRef} className="reveal" style={styles.heading}>
            About Me
          </h1>

          <h2 ref={subheadingRef} className="reveal" style={{ ...styles.subheading, transitionDelay: '0.1s' }}>
            Full Stack Developer
          </h2>

          <p ref={para1Ref} className="reveal reveal-left" style={{ ...styles.paragraph, transitionDelay: '0.2s' }}>
            I build responsive web and mobile applications using React.js, React Native, Node.js, and MongoDB.
            I combine technical skills with user-centered design to create seamless cross-platform experiences.
          </p>

          <p ref={para2Ref} className="reveal reveal-left" style={{ ...styles.paragraph, transitionDelay: '0.3s' }}>
            I thrive in collaborative Agile environments, turning ideas into impactful digital solutions.
            I'm passionate about continuous learning, problem-solving, and creating products that make a 
            meaningful difference in people's lives.
          </p>
        </div>

      </div>
    </section>
  )
}

const styles = {
  container: {
    padding: '4rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  aboutContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    justifyContent: 'center',
  },
  imageSection: {
    flex: '0 0 300px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    border: '3px solid rgba(184, 168, 255, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  textSection: {
    flex: '1',
    color: '#ffffff',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '0.5rem',
    background: 'linear-gradient(135deg, #ffffff, #a8b8ff, #b88aff)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    textAlign: 'left',
  },
  subheading: {
    fontSize: '1.3rem',
    fontWeight: 400,
    color: '#b8a8ff',
    marginBottom: '2rem',
    textAlign: 'left',
    letterSpacing: '1px',
  },
  paragraph: {
    lineHeight: 1.8,
    marginBottom: '1.2rem',
    fontSize: '1.1rem',
    color: '#f0f0f0',
    textAlign: 'left',
  },
}

// Add hover effect with CSS
const styleSheet = document.createElement('style')
styleSheet.textContent = `
  .about-image:hover {
    transform: scale(1.02);
    box-shadow: 0 25px 50px rgba(138, 43, 226, 0.2);
  }

  @media (max-width: 968px) {
    .about-content {
      flex-direction: column;
      text-align: center;
    }
    .about-image-section {
      flex: 0 0 auto;
      max-width: 300px;
      margin: 0 auto;
    }
    .about-heading,
    .about-subheading,
    .about-paragraph {
      text-align: center !important;
    }
  }
`
document.head.appendChild(styleSheet)

export default About