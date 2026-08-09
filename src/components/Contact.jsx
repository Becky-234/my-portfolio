import React, { useState, useEffect } from 'react'
import { FiMail, FiUser, FiMessageSquare, FiSend, FiGithub, FiLinkedin, FiMapPin, FiCheck, FiAlertCircle, FiTwitter } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const EMAILJS_SERVICE_ID  = 'service_qwq4ziw'
const EMAILJS_TEMPLATE_ID = 'template_2boblws'
const EMAILJS_PUBLIC_KEY  = 'rqmX717gd7xt_oJyo'

const socials = [
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    sub: 'rebecca-kirabo',
    href: 'https://www.linkedin.com/in/rebecca-kirabo-b841002ab/',
    color: '#0a66c2'
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    sub: 'Becky-234',
    href: 'https://github.com/Becky-234',
    color: '#7b68ee'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    label: 'X / Twitter',
    sub: '@KiraboReberbyk',
    href: 'https://twitter.com/@KiraboReberbyk',
    color: '#e2e8f0'
  },
]

function Contact() {
  const headingRef  = useScrollReveal({ threshold: 0.2 })
  const leftRef     = useScrollReveal({ threshold: 0.15 })
  const rightRef    = useScrollReveal({ threshold: 0.15 })

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

  const validateName    = v => !v ? 'Name is required' : v.length < 2 ? 'At least 2 characters' : v.length > 50 ? 'Max 50 characters' : !/^[a-zA-Z\s]+$/.test(v) ? 'Letters and spaces only' : ''
  const validateEmail   = v => !v ? 'Email is required' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Enter a valid email address' : v.length > 100 ? 'Max 100 characters' : ''
  const validateMessage = v => !v ? 'Message is required' : v.length < 10 ? 'At least 10 characters' : v.length > 1000 ? 'Max 1000 characters' : ''

  const validate = (name, value) =>
    name === 'name' ? validateName(value) : name === 'email' ? validateEmail(value) : validateMessage(value)

  const handleChange = ({ target: { name, value } }) => {
    setFormData(p => ({ ...p, [name]: value }))
    if (touched[name]) setErrors(p => ({ ...p, [name]: validate(name, value) }))
  }

  const handleBlur = ({ target: { name, value } }) => {
    setTouched(p => ({ ...p, [name]: true }))
    setErrors(p => ({ ...p, [name]: validate(name, value) }))
  }

  const validateAll = () => {
    const e = { name: validateName(formData.name), email: validateEmail(formData.email), message: validateMessage(formData.message) }
    setErrors(e)
    setTouched({ name: true, email: true, message: true })
    return !e.name && !e.email && !e.message
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateAll()) return
    setStatus('sending')
    setErrorMsg('')
    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name, from_email: formData.email,
        message: formData.message, to_email: 'bkirabo853@gmail.com',
      })
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTouched({ name: false, email: false, message: false })
      setErrors({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setErrorMsg('Something went wrong. Please try again or email me directly at bkirabo853@gmail.com')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  const isValid = () =>
    formData.name && formData.email && formData.message &&
    !validateName(formData.name) && !validateEmail(formData.email) && !validateMessage(formData.message)

  const fieldState = (name) =>
    touched[name] && errors[name] ? 'error' : touched[name] && !errors[name] && formData[name] ? 'success' : ''

  return (
    <section id="contact" className="ct-section">

      {/* Background orb */}
      <div className="ct-bg-orb" aria-hidden="true" />

      <div className="ct-container">

        {/* Header */}
        <div className="ct-header">
          <p ref={headingRef} className="ct-eyebrow reveal">
            <span className="ct-eyebrow-line" aria-hidden="true" />
            Let's talk
          </p>
          <h1 className="ct-heading">
            Get In <span className="ct-heading-outline">Touch</span>
          </h1>
          <p className="ct-subheading">
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>

        {/* Two columns */}
        <div className="ct-cols">

          {/* LEFT — info */}
          <div ref={leftRef} className="ct-left reveal reveal-left" style={{ transitionDelay: '0.1s' }}>

            {/* Availability tag */}
            <div className="ct-available">
              <span className="ct-available-dot" aria-hidden="true" />
              Available for freelance &amp; full-time roles
            </div>

            {/* Info card */}
            <div className="ct-info-card">
              <h3 className="ct-info-title">Connect with me</h3>
              <p className="ct-info-sub">Feel free to reach out through any of these platforms</p>

              <div className="ct-contact-items">
                <div className="ct-contact-item">
                  <span className="ct-contact-icon"><FiMapPin size={15} /></span>
                  <span>Kampala, Uganda</span>
                </div>
                <div className="ct-contact-item">
                  <span className="ct-contact-icon"><FiMail size={15} /></span>
                  <a href="mailto:bkirabo853@gmail.com" className="ct-contact-link">bkirabo853@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="ct-socials">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ct-social-link"
                  style={{ '--sc': s.color }}
                >
                  <span className="ct-social-icon">{s.icon}</span>
                  <div className="ct-social-text">
                    <span className="ct-social-label">{s.label}</span>
                    <span className="ct-social-sub">{s.sub}</span>
                  </div>
                  <span className="ct-social-arrow">→</span>
                </a>
              ))}
            </div>

          </div>

          {/* RIGHT — form */}
          <div ref={rightRef} className="ct-right reveal reveal-right" style={{ transitionDelay: '0.2s' }}>
            <form className="ct-form" onSubmit={handleSubmit} noValidate>

              {/* Name + Email row */}
              <div className="ct-form-row">
                {['name', 'email'].map(field => (
                  <div key={field} className="ct-field">
                    <label className="ct-label">
                      {field === 'name' ? <FiUser size={14} /> : <FiMail size={14} />}
                      {field === 'name' ? 'Your Name' : 'Your Email'}
                      <span className="ct-required" aria-hidden="true">*</span>
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={field === 'name' ? 'Rebecca Kirabo' : 'you@example.com'}
                      className={`ct-input ${fieldState(field)}`}
                      disabled={status === 'sending' || status === 'success'}
                      autoComplete={field === 'email' ? 'email' : 'name'}
                    />
                    {touched[field] && errors[field] && (
                      <p className="ct-field-error"><FiAlertCircle size={11} /> {errors[field]}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Message */}
              <div className="ct-field">
                <label className="ct-label">
                  <FiMessageSquare size={14} />
                  Your Message
                  <span className="ct-required" aria-hidden="true">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project or just say hi…"
                  rows="5"
                  className={`ct-textarea ${fieldState('message')}`}
                  disabled={status === 'sending' || status === 'success'}
                />
                <div className="ct-char-count">
                  <span>{formData.message.length}/1000</span>
                </div>
                {touched.message && errors.message && (
                  <p className="ct-field-error"><FiAlertCircle size={11} /> {errors.message}</p>
                )}
              </div>

              {/* Status banners */}
              {status === 'success' && (
                <div className="ct-banner ct-banner--success">
                  <FiCheck size={16} /> Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="ct-banner ct-banner--error">
                  <FiAlertCircle size={16} /> {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="ct-submit"
                disabled={status === 'sending' || status === 'success' || !isValid()}
              >
                {status === 'sending' ? (
                  <><span className="ct-spinner" aria-hidden="true" /> Sending…</>
                ) : status === 'success' ? (
                  <><FiCheck size={16} /> Sent!</>
                ) : (
                  <><FiSend size={16} /> Send Message</>
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
  /* ── Section ── */
  .ct-section {
    padding: 110px 60px;
    background: transparent;
    position: relative;
    overflow: hidden;
  }

  .ct-bg-orb {
    position: absolute;
    width: 600px; height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(123,104,238,0.1) 0%, transparent 70%);
    bottom: -100px; left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    filter: blur(80px);
  }

  .ct-container {
    max-width: 1060px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* ── Header ── */
  .ct-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .ct-eyebrow {
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

  .ct-eyebrow-line {
    display: block;
    width: 28px; height: 1.5px;
    background: linear-gradient(90deg, transparent, #7b68ee);
    border-radius: 2px;
  }

  .ct-heading {
    font-size: clamp(2.6rem, 5vw, 4rem);
    font-weight: 800;
    letter-spacing: -1.5px;
    color: #ffffff;
    line-height: 1;
    margin-bottom: 16px;
  }

  /* Outline signature — consistent across all sections */
  .ct-heading-outline {
    -webkit-text-stroke: 2px #7b68ee;
    color: transparent;
    filter: drop-shadow(0 0 16px rgba(123,104,238,0.45));
  }

  .ct-subheading {
    font-size: 1rem;
    color: rgba(255,255,255,0.55);
    letter-spacing: 0.5px;
  }

  /* ── Two columns ── */
  .ct-cols {
    display: grid;
    grid-template-columns: 360px 1fr;
    gap: 48px;
    align-items: start;
  }

  /* ═══════════════════
     LEFT COLUMN
  ═══════════════════ */
  .ct-left {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* Availability tag */
  .ct-available {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.78rem;
    font-weight: 500;
    color: #4ade80;
    background: rgba(74,222,128,0.08);
    border: 1px solid rgba(74,222,128,0.22);
    border-radius: 8px;
    padding: 7px 14px;
    letter-spacing: 0.3px;
    width: fit-content;
  }

  .ct-available-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 6px rgba(74,222,128,0.7);
    animation: ct-pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes ct-pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 6px rgba(74,222,128,0.7); }
    50%       { opacity: 0.5; box-shadow: 0 0 12px rgba(74,222,128,0.4); }
  }

  /* Info card */
  .ct-info-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 16px;
    padding: 22px;
  }

  .ct-info-title {
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 6px;
    letter-spacing: -0.2px;
  }

  .ct-info-sub {
    font-size: 0.82rem;
    color: rgba(255,255,255,0.45);
    margin-bottom: 18px;
    line-height: 1.5;
  }

  .ct-contact-items {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .ct-contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.85rem;
    color: rgba(255,255,255,0.7);
    padding: 10px 0;
    border-top: 1px solid rgba(255,255,255,0.06);
  }

  .ct-contact-icon {
    color: #7b68ee;
    display: flex;
    flex-shrink: 0;
  }

  .ct-contact-link {
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .ct-contact-link:hover { color: #b8a8ff; }

  /* Social links */
  .ct-socials {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .ct-social-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    color: white;
    text-decoration: none;
    transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
  }

  .ct-social-link:hover {
    background: color-mix(in srgb, var(--sc, #7b68ee) 12%, transparent);
    border-color: color-mix(in srgb, var(--sc, #7b68ee) 45%, transparent);
    transform: translateX(5px);
  }

  .ct-social-icon {
    width: 36px; height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: color-mix(in srgb, var(--sc, #7b68ee) 15%, transparent);
    color: var(--sc, #b8a8ff);
    flex-shrink: 0;
    transition: background 0.25s ease;
  }

  .ct-social-link:hover .ct-social-icon {
    background: color-mix(in srgb, var(--sc, #7b68ee) 25%, transparent);
  }

  .ct-social-text {
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex: 1;
  }

  .ct-social-label {
    font-size: 0.88rem;
    font-weight: 600;
    color: #fff;
  }

  .ct-social-sub {
    font-size: 0.72rem;
    color: rgba(255,255,255,0.4);
    letter-spacing: 0.2px;
  }

  .ct-social-arrow {
    color: rgba(255,255,255,0.25);
    font-size: 1rem;
    transition: color 0.25s ease, transform 0.25s ease;
  }

  .ct-social-link:hover .ct-social-arrow {
    color: rgba(255,255,255,0.7);
    transform: translateX(3px);
  }

  /* ═══════════════════
     RIGHT COLUMN (form)
  ═══════════════════ */
  .ct-right {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 20px;
    padding: 32px;
  }

  .ct-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .ct-form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .ct-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .ct-label {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 0.8rem;
    font-weight: 600;
    color: rgba(255,255,255,0.6);
    letter-spacing: 0.3px;
  }

  .ct-required {
    color: #f87171;
    font-size: 0.75rem;
    margin-left: 2px;
  }

  .ct-input,
  .ct-textarea {
    width: 100%;
    padding: 11px 14px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    color: #ffffff;
    font-size: 0.88rem;
    transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
    font-family: inherit;
    box-sizing: border-box;
  }

  .ct-input:focus,
  .ct-textarea:focus {
    outline: none;
    border-color: #7b68ee;
    background: rgba(255,255,255,0.09);
    box-shadow: 0 0 0 3px rgba(123,104,238,0.15);
  }

  .ct-input.error,  .ct-textarea.error  { border-color: #f87171; box-shadow: 0 0 0 3px rgba(248,113,113,0.12); }
  .ct-input.success, .ct-textarea.success { border-color: #4ade80; }

  .ct-input::placeholder,
  .ct-textarea::placeholder { color: rgba(255,255,255,0.3); }

  .ct-input:disabled,
  .ct-textarea:disabled { opacity: 0.55; cursor: not-allowed; }

  .ct-textarea {
    resize: vertical;
    min-height: 110px;
    line-height: 1.6;
  }

  .ct-char-count {
    text-align: right;
    font-size: 0.7rem;
    color: rgba(255,255,255,0.35);
    margin-top: -2px;
  }

  .ct-field-error {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.72rem;
    color: #f87171;
    margin-top: 2px;
  }

  /* Status banners */
  .ct-banner {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 10px;
    font-size: 0.84rem;
    font-weight: 500;
  }

  .ct-banner--success {
    background: rgba(74,222,128,0.1);
    border: 1px solid rgba(74,222,128,0.25);
    color: #4ade80;
  }

  .ct-banner--error {
    background: rgba(248,113,113,0.1);
    border: 1px solid rgba(248,113,113,0.25);
    color: #f87171;
  }

  /* Submit button */
  .ct-submit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    width: 100%;
    padding: 13px 24px;
    background: linear-gradient(135deg, #7b68ee, #4f0ea3);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 0.4px;
    transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
    box-shadow: 0 4px 20px rgba(123,104,238,0.3);
    font-family: inherit;
  }

  .ct-submit:hover:not(:disabled) {
    transform: translateY(-2px);
    filter: brightness(1.12);
    box-shadow: 0 8px 30px rgba(123,104,238,0.45);
  }

  .ct-submit:disabled {
    opacity: 0.45;
    cursor: not-allowed;
    transform: none;
  }

  /* Spinner */
  .ct-spinner {
    width: 15px; height: 15px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: ct-spin 0.7s linear infinite;
    display: inline-block;
    flex-shrink: 0;
  }

  @keyframes ct-spin { to { transform: rotate(360deg); } }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .ct-section { padding: 90px 40px; }
    .ct-cols { grid-template-columns: 1fr; gap: 32px; }
    .ct-left { order: 2; }
    .ct-right { order: 1; }
  }

  @media (max-width: 600px) {
    .ct-section { padding: 70px 20px; }
    .ct-heading { font-size: 2.6rem; letter-spacing: -1px; }
    .ct-form-row { grid-template-columns: 1fr; }
    .ct-right { padding: 22px 18px; }
  }

  @media (max-width: 480px) {
    .ct-section { padding: 60px 14px; }
    .ct-heading { font-size: 2.1rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    .ct-available-dot { animation: none !important; }
    .ct-social-link, .ct-submit, .ct-input, .ct-textarea { transition: none !important; }
  }
`
document.head.appendChild(styles)

export default Contact