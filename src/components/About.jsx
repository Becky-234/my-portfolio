import React from 'react'

function About() {
  return (
    <section id="about" style={styles.container}>
      <div style={styles.aboutContent}>
        <div style={styles.textSection}>
          <h1 style={styles.heading}>About Me</h1>
          <h2 style={styles.subheading}>Frontend Developer & Problem Solver</h2>
          <p style={styles.paragraph}>
            My expertise lies in building responsive web and mobile applications using React.js, React Native, 
            JavaScript, HTML5, CSS3, and Tailwind CSS. I combine technical development skills with a strong 
            understanding of user-centered design to create seamless experiences across different platforms.
          </p>
          <p style={styles.paragraph}>
            I thrive in collaborative environments and have experience working with Agile (Scrum) teams, 
            managing priorities, and turning ideas into impactful digital solutions. I am passionate about 
            continuous learning, problem-solving, and creating products that make a meaningful difference in 
            people's lives.
          </p>
          <p style={styles.paragraph}>
            When I'm not coding or designing, I enjoy exploring new technologies, improving my design skills, 
            and finding creative ways to enhance user experiences.
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
    justifyContent: 'center',
  },
  textSection: {
    maxWidth: '800px',
    margin: '0 auto',
    color: '#ffffff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '0.5rem',
    background: 'linear-gradient(135deg, #ffffff, #a8b8ff, #b88aff)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '1.3rem',
    fontWeight: 400,
    color: '#b8a8ff',
    marginBottom: '2rem',
    textAlign: 'center',
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

export default About