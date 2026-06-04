import React, { useState, useEffect } from 'react'
import { FiMail, FiUser, FiMessageSquare, FiSend, FiGithub, FiLinkedin, FiMapPin, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const EMAILJS_SERVICE_ID  = 'service_qwq4ziw'
const EMAILJS_TEMPLATE_ID = 'template_2boblws' 
const EMAILJS_PUBLIC_KEY  = 'rqmX717gd7xt_oJyo'

function Contact() {
  const headingRef    = useScrollReveal({ threshold: 0.2 })
  const subtitleRef   = useScrollReveal({ threshold: 0.2 })
  const leftRef       = useScrollReveal({ threshold: 0.15 })
  const rightRef      = useScrollReveal({ threshold: 0.15 })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors]     = useState({ name: '', email: '', message: '' })
  const [touched, setTouched]   = useState({ name: false, email: false, message: false })
  const [status, setStatus]     = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    script.onload = () => window.emailjs.init(EMAILJS_PUBLIC_KEY)
    document.head.appendChild(script)
  }, [])

  const validateName    = (name)    => {
    if (!name) return 'Name is required'
    if (name.length < 2) return 'Name must be at least 2 characters'
    if (name.length > 50) return 'Name must be less than 50 characters'
    if (!/^[a-zA-Z\s]+$/.test(name)) return 'Name can only contain letters and spaces'
    return ''
  }
  const validateEmail   = (email)   => {
    if (!email) return 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email address (e.g., name@example.com)'
    if (email.length > 100) return 'Email must be less than 100 characters'
    return ''
  }
  const validateMessage = (message) => {
    if (!message) return 'Message is required'
    if (message.length < 10) return 'Message must be at least 10 characters'
    if (message.length > 1000) return 'Message must be less than 1000 characters'
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const error = name === 'name' ? validateName(value)
                  : name === 'email' ? validateEmail(value)
                  : validateMessage(value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = name === 'name' ? validateName(value)
                : name === 'email' ? validateEmail(value)
                : validateMessage(value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const validateForm = () => {
    const nameError    = validateName(formData.name)
    const emailError   = validateEmail(formData.email)
    const messageError = validateMessage(formData.message)
    setErrors({ name: nameError, email: emailError, message: messageError })
    setTouched({ name: true, email: true, message: true })
    return !nameError && !emailError && !messageError
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setStatus('sending')
    setErrorMsg('')
    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name:  formData.name,
        from_email: formData.email,
        message:    formData.message,
        to_email:   'bkirabo853@gmail.com',
      })
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTouched({ name: false, email: false, message: false })
      setErrors({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setErrorMsg('Something went wrong. Please try again or email me directly at bkirabo853@gmail.com')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  const isFormValid = () =>
    formData.name && formData.email && formData.message &&
    !validateName(formData.name) &&
    !validateEmail(formData.email) &&
    !validateMessage(formData.message)

  return (
    <section id="contact" className="contactSection">
      <div className="contactContainer">

        <h1 ref={headingRef} className="contactHeading reveal">Get In Touch</h1>
        <p ref={subtitleRef} className="contactSubtitle reveal" style={{ transitionDelay: '0.1s' }}>
          Have a project in mind? I'd love to hear from you.
        </p>

        <div className="contactTwoColumns">

          {/* LEFT COLUMN */}
          <div ref={leftRef} className="contactLeft reveal reveal-left" style={{ transitionDelay: '0.2s' }}>
            <div className="contactInfo">
              <h3 className="contactInfoTitle">Connect with me</h3>
              <p className="contactInfoText">Feel free to reach out through any of these platforms</p>
              <div className="contactLocation">
                <FiMapPin size={20} />
                <span>Kampala, Uganda</span>
              </div>
              <div className="contactLocation">
                <FiMail size={20} />
                <span>bkirabo853@gmail.com</span>
              </div>
            </div>

            <div className="socialLinksContainer">
              <a href="https://www.linkedin.com/in/rebecca-kirabo-b841002ab/" target="_blank" className="socialLink" rel="noopener noreferrer">
                <FiLinkedin size={28} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Becky-234" target="_blank" className="socialLink" rel="noopener noreferrer">
                <FiGithub size={28} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <div ref={rightRef} className="contactRight reveal reveal-right" style={{ transitionDelay: '0.3s' }}>
            <form className="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="formRow">
                <div className="formGroup">
                  <label className="formLabel">
                    <FiUser size={16} />
                    Your Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="Enter your name"
                    className={`formInput ${touched.name && errors.name ? 'error' : touched.name && !errors.name ? 'success' : ''}`}
                    disabled={status === 'sending' || status === 'success'}
                  />
                  {touched.name && errors.name && <div className="errorMessage">{errors.name}</div>}
                  {touched.name && !errors.name && formData.name && <div className="successMessage">✓ Valid name</div>}
                </div>

                <div className="formGroup">
                  <label className="formLabel">
                    <FiMail size={16} />
                    Your Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="Enter your email"
                    className={`formInput ${touched.email && errors.email ? 'error' : touched.email && !errors.email ? 'success' : ''}`}
                    disabled={status === 'sending' || status === 'success'}
                  />
                  {touched.email && errors.email && <div className="errorMessage">{errors.email}</div>}
                  {touched.email && !errors.email && formData.email && <div className="successMessage">✓ Valid email</div>}
                </div>
              </div>

              <div className="formGroup">
                <label className="formLabel">
                  <FiMessageSquare size={16} />
                  Your Message <span className="required">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="What would you like to say? (min. 10 characters)"
                  rows="5"
                  className={`formTextarea ${touched.message && errors.message ? 'error' : touched.message && !errors.message ? 'success' : ''}`}
                  disabled={status === 'sending' || status === 'success'}
                />
                <div className="charCounter">{formData.message.length}/1000 characters</div>
                {touched.message && errors.message && <div className="errorMessage">{errors.message}</div>}
                {touched.message && !errors.message && formData.message && <div className="successMessage">✓ Valid message</div>}
              </div>

              {status === 'success' && (
                <div className="statusMessage statusSuccess">
                  <FiCheck size={18} />
                  <span>Message sent! I'll get back to you soon.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="statusMessage statusError">
                  <FiAlertCircle size={18} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                className="submitBtn"
                disabled={status === 'sending' || status === 'success' || !isFormValid()}
              >
                {status === 'sending' ? (
                  <><span className="spinner" />Sending...</>
                ) : status === 'success' ? (
                  <><FiCheck size={18} />Sent!</>
                ) : (
                  <><FiSend size={18} />Send Message</>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

const styles = document.createElement('style')
styles.textContent = `
  .contactSection {
    padding: 100px 20px;
    background: transparent;
  }

  .contactContainer {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
  }

  .contactHeading {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
    position: relative;
    background: linear-gradient(135deg, #ffffff, #b8a8ff, #7b68ee);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .contactHeading::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #7b68ee, #b8a8ff);
    border-radius: 2px;
  }

  .contactSubtitle {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 50px;
    font-size: 1.1rem;
  }

  .contactTwoColumns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    text-align: left;
  }

  .contactLeft {
    display: flex;
    flex-direction: column;
    gap: 30px;
    /* merge reveal-left transition with hover */
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .contactRight {
    background: rgba(255, 255, 255, 0.05);
    padding: 30px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    /* merge reveal-right transition */
    transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .contactInfo {
    background: rgba(255, 255, 255, 0.05);
    padding: 25px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .contactInfoTitle {
    font-size: 1.5rem;
    font-weight: 600;
    color: #b8a8ff;
    margin-bottom: 10px;
  }

  .contactInfoText {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    margin-bottom: 20px;
    line-height: 1.6;
  }

  .contactLocation {
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    padding: 12px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .contactLocation:first-of-type {
    border-top: none;
    padding-top: 0;
  }

  .socialLinksContainer {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .socialLink {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .socialLink:hover {
    background: rgba(123, 104, 238, 0.2);
    border-color: rgba(123, 104, 238, 0.5);
    transform: translateX(5px);
  }

  .socialLink span {
    font-size: 1rem;
    font-weight: 500;
  }

  .contactForm {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .formRow {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }

  .formGroup {
    text-align: left;
    flex: 1;
  }

  .formLabel {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #b8a8ff;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
  }

  .required {
    color: #f87171;
    font-size: 12px;
  }

  .formInput,
  .formTextarea {
    width: 100%;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    color: white;
    font-size: 14px;
    transition: all 0.3s ease;
    font-family: inherit;
    box-sizing: border-box;
  }

  .formInput:focus,
  .formTextarea:focus {
    outline: none;
    border-color: #7b68ee;
    background: rgba(255, 255, 255, 0.12);
  }

  .formInput.error,
  .formTextarea.error { border-color: #f87171; }

  .formInput.success,
  .formTextarea.success { border-color: #4ade80; }

  .formInput::placeholder,
  .formTextarea::placeholder { color: rgba(255, 255, 255, 0.4); }

  .formInput:disabled,
  .formTextarea:disabled { opacity: 0.6; cursor: not-allowed; }

  .formTextarea {
    resize: vertical;
    min-height: 100px;
  }

  .charCounter {
    text-align: right;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 5px;
  }

  .errorMessage {
    color: #f87171;
    font-size: 12px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .successMessage {
    color: #4ade80;
    font-size: 12px;
    margin-top: 5px;
  }

  .statusMessage {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
  }

  .statusSuccess {
    background: rgba(34, 197, 94, 0.15);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: #4ade80;
  }

  .statusError {
    background: rgba(239, 68, 68, 0.15);
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #f87171;
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    display: inline-block;
    flex-shrink: 0;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .submitBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 12px 25px;
    background: linear-gradient(135deg, rgba(123, 104, 238, 0.8), rgba(75, 0, 130, 0.8));
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .submitBtn:hover:not(:disabled) {
    transform: translateY(-2px);
    background: linear-gradient(135deg, rgba(90, 70, 210, 0.9), rgba(55, 0, 110, 0.9));
    box-shadow: 0 5px 15px rgba(123, 104, 238, 0.3);
  }

  .submitBtn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    .contactSection { padding: 80px 20px; }
    .contactHeading { font-size: 2.5rem; }
    .contactTwoColumns { grid-template-columns: 1fr; gap: 30px; }
    .contactLeft { order: 2; }
    .contactRight { order: 1; }
    .formRow { grid-template-columns: 1fr; gap: 20px; }
  }

  @media (max-width: 480px) {
    .contactSection { padding: 60px 15px; }
    .contactHeading { font-size: 2rem; }
    .contactSubtitle { font-size: 0.95rem; }
    .contactRight { padding: 20px; }
    .socialLink { padding: 12px 15px; }
  }
`
document.head.appendChild(styles)

export default Contact