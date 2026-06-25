import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import aboutImage from '../assets/about.jpeg'

function About() {
  const imageRef      = useScrollReveal({ threshold: 0.2 })
  const headingRef    = useScrollReveal({ threshold: 0.2 })
  const subheadingRef = useScrollReveal({ threshold: 0.2 })
  const para1Ref      = useScrollReveal({ threshold: 0.2 })
  const para2Ref      = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="about" className="about-section">
      <div className="about-content">

        {/* Image — left side */}
        <div ref={imageRef} className="about-image-section reveal reveal-left">
          <img
            src={aboutImage}
            alt="About Me"
            className="about-image"
          />
        </div>

        {/* Text — right side */}
        <div className="about-text-section">
          <h1 ref={headingRef} className="about-heading reveal">
            About Me
          </h1>

          <h2 ref={subheadingRef} className="about-subheading reveal" style={{ transitionDelay: '0.1s' }}>
            Full Stack Developer
          </h2>

          <p ref={para1Ref} className="about-paragraph reveal reveal-left" style={{ transitionDelay: '0.2s' }}>
            I build responsive web and mobile applications using React.js, React Native, Node.js, and MongoDB.
            I combine technical skills with user-centered design to create seamless cross-platform experiences.
          </p>

          <p ref={para2Ref} className="about-paragraph reveal reveal-left" style={{ transitionDelay: '0.3s' }}>
            I thrive in collaborative Agile environments, turning ideas into impactful digital solutions.
            I'm passionate about continuous learning, problem-solving, and creating products that make a
            meaningful difference in people's lives.
          </p>
        </div>

      </div>
    </section>
  )
}

const styleSheet = document.createElement('style')
styleSheet.textContent = `
  .about-section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .about-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4rem;
    justify-content: center;
  }

  /* ── Image ── */
  .about-image-section {
    flex: 0 0 300px;
  }

  .about-image {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border: 3px solid rgba(184, 168, 255, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: block;
  }

  .about-image:hover {
    transform: scale(1.02);
    box-shadow: 0 25px 50px rgba(138, 43, 226, 0.25);
  }

  /* ── Text ── */
  .about-text-section {
    flex: 1;
    color: #ffffff;
  }

  .about-heading {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #ffffff, #a8b8ff, #b88aff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: left;
  }

  .about-subheading {
    font-size: 1.3rem;
    font-weight: 400;
    color: #b8a8ff;
    margin-bottom: 2rem;
    text-align: left;
    letter-spacing: 1px;
  }

  .about-paragraph {
    line-height: 1.8;
    margin-bottom: 1.2rem;
    font-size: 1.1rem;
    color: #f0f0f0;
    text-align: left;
  }

  /* ── Responsive ── */
  @media (max-width: 968px) {
    .about-content {
      flex-direction: column;
      gap: 2.5rem;
    }
    .about-image-section {
      flex: 0 0 auto;
      width: 260px;
      margin: 0 auto;
    }
    .about-heading,
    .about-subheading,
    .about-paragraph {
      text-align: center;
    }
  }

  @media (max-width: 520px) {
    .about-section {
      padding: 3rem 1.2rem;
    }
    .about-heading {
      font-size: 2.2rem;
    }
    .about-subheading {
      font-size: 1.1rem;
    }
    .about-paragraph {
      font-size: 1rem;
    }
    .about-image-section {
      width: 220px;
    }
  }
`
document.head.appendChild(styleSheet)

export default About