import React, { useEffect, useState } from 'react'
import mineImage from '../assets/MINE.png'
import { FiDownload, FiLinkedin, FiGithub } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'

const WHATSAPP_NUMBER = '256777474462'

const STATS = [
  { value: '7+', label: 'projects built' },
  { value: '4',  label: 'certifications earned' },
  { value: '2',  label: 'platforms, web and mobile' },
  { value: '6',  label: 'frameworks in my stack' },
]

// The cutout PNG has empty transparent space around the person, which makes
// sizing unpredictable. This crops it to the visible pixels once it loads.
function useTrimmedImage(src) {
  const [state, setState] = useState({ src, ready: false })

  useEffect(() => {
    let cancelled = false
    let objectUrl = null
    const img = new Image()

    img.onload = () => {
      try {
        const w = img.naturalWidth
        const h = img.naturalHeight
        const canvas = document.createElement('canvas')
        canvas.width = w
        canvas.height = h
        const ctx = canvas.getContext('2d', { willReadFrequently: true })
        ctx.drawImage(img, 0, 0)
        const { data } = ctx.getImageData(0, 0, w, h)

        let top = h, left = w, right = -1, bottom = -1
        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            if (data[(y * w + x) * 4 + 3] > 40) {
              if (x < left) left = x
              if (x > right) right = x
              if (y < top) top = y
              if (y > bottom) bottom = y
            }
          }
        }
        if (right < 0) throw new Error('empty image')

        const cw = right - left + 1
        const ch = bottom - top + 1
        const out = document.createElement('canvas')
        out.width = cw
        out.height = ch
        out.getContext('2d').drawImage(canvas, left, top, cw, ch, 0, 0, cw, ch)
        out.toBlob((blob) => {
          if (cancelled) return
          if (!blob) { setState({ src, ready: true }); return }
          objectUrl = URL.createObjectURL(blob)
          setState({ src: objectUrl, ready: true })
        }, 'image/png')
      } catch {
        if (!cancelled) setState({ src, ready: true })
      }
    }
    img.onerror = () => { if (!cancelled) setState({ src, ready: true }) }
    img.src = src

    return () => {
      cancelled = true
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [src])

  return state
}

function Hero() {
  const contentRef = useScrollReveal({ threshold: 0.15 })
  const photoRef   = useScrollReveal({ threshold: 0.15 })
  const statsRef   = useScrollReveal({ threshold: 0.15 })
  const { src: photoSrc, ready: photoReady } = useTrimmedImage(mineImage)

  return (
    <section id="hero" className="hx-section">

      <div className="hx-inner">

        {/* Left column: intro */}
        <div ref={contentRef} className="hx-content reveal reveal-left">
          <p className="hx-eyebrow">
            <span className="hx-eyebrow-line" aria-hidden="true" />
            Hello, I'm
          </p>

          <h1 className="hx-name" aria-label="Kirabo Rebecca">
            <span className="hx-name-first">KIRABO</span>
            <span className="hx-name-last">REBECCA</span>
          </h1>

          <p className="hx-role">Full Stack Developer</p>
          <p className="hx-sub">
            Code with purpose, create with impact. Building scalable web &amp;
            mobile experiences that make a real difference.
          </p>

          <div className="hx-ctas">
            <a href="#contact" className="hx-btn hx-btn--primary">Get In Touch</a>
            <a
              href="https://drive.google.com/file/d/1RpzCWrkyCB7An5OBCTGanvMend9T6kik/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hx-btn hx-btn--ghost"
            >
              <FiDownload size={16} /> Download CV
            </a>
          </div>

          <div className="hx-socials">
            <a href="https://www.linkedin.com/in/rebecca-kirabo-b841002ab/"
               target="_blank" rel="noopener noreferrer"
               className="hx-social" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://github.com/Becky-234"
               target="_blank" rel="noopener noreferrer"
               className="hx-social" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://twitter.com/@KiraboReberbyk"
               target="_blank" rel="noopener noreferrer"
               className="hx-social" aria-label="X / Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`}
               target="_blank" rel="noopener noreferrer"
               className="hx-social hx-social--wa" aria-label="Chat on WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right column: photo */}
        <div ref={photoRef} className="hx-photo-wrap reveal reveal-right">
          <div className="hx-photo-glow" aria-hidden="true" />

          {/* Decoration behind the photo */}
          <div className="hx-deco" aria-hidden="true">
            <span className="hx-deco-ring hx-deco-ring--1" />
            <span className="hx-deco-ring hx-deco-ring--2" />
            <span className="hx-deco-arch" />
            <span className="hx-deco-dots" />
            <span className="hx-deco-orb hx-deco-orb--1" />
            <span className="hx-deco-orb hx-deco-orb--2" />
            <span className="hx-deco-plus">+</span>
          </div>
          <img
            src={photoSrc}
            alt="Rebecca Kirabo"
            className={`hx-photo${photoReady ? ' is-ready' : ''}`}
          />
        </div>

        {/* Bottom stats */}
        <ul ref={statsRef} className="hx-stats reveal">
          {STATS.map((s) => (
            <li key={s.label}>
              <span className="hx-stat-value">{s.value}</span>
              <span className="hx-stat-label">{s.label}</span>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

const STYLE_ID = 'hero-section-styles'
const styles = document.getElementById(STYLE_ID) || document.createElement('style')
styles.id = STYLE_ID
styles.textContent = `
  /* ── Section ── */
  .hx-section {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 130px 40px 60px;
    overflow: hidden;
    background: transparent;
    color: #fff;
  }

  /* ── Inner layout: intro left, photo right, stats row below ── */
  .hx-inner {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    column-gap: 40px;
    row-gap: 56px;
    align-items: center;
  }
  .hx-content { grid-column: 1; grid-row: 1; }

  /* ── Photo (right column) ── */
  .hx-photo-wrap {
    position: relative;
    grid-column: 2;
    grid-row: 1;
    width: 100%;
    height: clamp(520px, 82vh, 860px);
  }
  .hx-photo-glow {
    position: absolute;
    left: 50%; top: 45%;
    width: 90%; aspect-ratio: 1;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(123,104,238,0.45), transparent 68%);
    filter: blur(50px);
    pointer-events: none;
  }
  /* ── Decoration behind the photo ── */
  .hx-deco { position: absolute; inset: 0; pointer-events: none; }

  .hx-deco-arch {
    position: absolute;
    left: 50%; top: 6%;
    width: 72%; height: 88%;
    transform: translateX(-50%);
    border-radius: 999px 999px 0 0;
    background: linear-gradient(180deg, rgba(123,104,238,0.38) 0%, rgba(79,14,163,0.10) 70%, transparent 100%);
    border: 1px solid rgba(184,168,255,0.28);
    border-bottom: none;
    -webkit-mask-image: linear-gradient(to bottom, #000 55%, transparent 100%);
            mask-image: linear-gradient(to bottom, #000 55%, transparent 100%);
  }

  .hx-deco-ring {
    position: absolute;
    left: 50%; top: 36%;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 1px solid rgba(184,168,255,0.2);
  }
  .hx-deco-ring--1 { width: 96%; }
  .hx-deco-ring--2 { width: 124%; border-color: rgba(184,168,255,0.1); }

  .hx-deco-dots {
    position: absolute;
    right: 2%; top: 14%;
    width: 120px; height: 120px;
    background: radial-gradient(circle, rgba(184,168,255,0.55) 1.6px, transparent 2.2px) 0 0 / 16px 16px;
  }

  .hx-deco-orb {
    position: absolute;
    border-radius: 50%;
    animation: hxFloat 6s ease-in-out infinite;
  }
  .hx-deco-orb--1 {
    left: 6%; top: 22%;
    width: 46px; height: 46px;
    background: linear-gradient(135deg, #b8a8ff, #7b68ee);
    box-shadow: 0 10px 30px rgba(123,104,238,0.5);
  }
  .hx-deco-orb--2 {
    right: 8%; top: 52%;
    width: 22px; height: 22px;
    border: 2px solid #b8a8ff;
    animation-delay: -3s;
  }
  .hx-deco-plus {
    position: absolute;
    left: 14%; top: 56%;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1;
    color: rgba(184,168,255,0.7);
    animation: hxFloat 7s ease-in-out infinite;
    animation-delay: -1.5s;
  }
  @keyframes hxFloat {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-14px); }
  }

  .hx-photo {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: contain;          /* whole person, now trimmed to the visible pixels */
    object-position: center top;  /* head at the top of the column */
    display: block;
    pointer-events: none;
    /* bottom fades so it melts into the stats rectangle */
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 55%, transparent 98%);
            mask-image: linear-gradient(to bottom, #000 0%, #000 55%, transparent 98%);
  }

  .hx-photo { opacity: 0; transition: opacity 0.4s ease; }
  .hx-photo.is-ready { opacity: 1; }

  /* ── Left Content ── */
  .hx-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 600px; 
  }

  .hx-eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.85rem;
    font-weight: 500;
    color: #b8a8ff;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0 0 14px;
  }
  .hx-eyebrow-line {
    display: block;
    width: 36px; height: 1.5px;
    background: currentColor;
    border-radius: 2px;
  }

  /* ── Big name ── */
  .hx-name {
    display: flex;
    flex-direction: column;
    line-height: 0.92;
    margin: 0 0 20px;
    user-select: none;
  }
  .hx-name-first,
  .hx-name-last {
    font-size: clamp(3.8rem, 8vw, 6.8rem);
    letter-spacing: -3px;
    color: #fff;
  }
  .hx-name-first { font-weight: 300; }
  .hx-name-last  { font-weight: 800; }

  .hx-role {
    font-size: 0.95rem;
    font-weight: 600;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  .hx-sub {
    max-width: 470px;
    font-size: 1.02rem;
    line-height: 1.65;
    color: rgba(255,255,255,0.78);
    margin: 0 0 28px;
  }

  /* ── Buttons ── */
  .hx-ctas {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
    margin-bottom: 24px;
  }
  .hx-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.25s ease, filter 0.25s ease, background 0.25s ease;
  }
  .hx-btn:hover { transform: translateY(-3px); }
  .hx-btn--primary {
    color: #fff;
    background: linear-gradient(135deg, #7b68ee, #4f0ea3);
    box-shadow: 0 6px 26px rgba(123,104,238,0.4);
  }
  .hx-btn--primary:hover { filter: brightness(1.15); }
  .hx-btn--ghost {
    color: #fff;
    background: rgba(255,255,255,0.1);
    -webkit-backdrop-filter: blur(12px);
            backdrop-filter: blur(12px);
  }
  .hx-btn--ghost:hover { background: rgba(255,255,255,0.18); }

  /* ── Socials ── */
  .hx-socials { display: flex; align-items: center; gap: 10px; }
  .hx-social {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px; height: 42px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    -webkit-backdrop-filter: blur(12px);
            backdrop-filter: blur(12px);
    color: #fff;
    font-size: 1.05rem;
    text-decoration: none;
    transition: all 0.25s ease;
  }
  .hx-social:hover { transform: translateY(-3px); background: #7b68ee; }
  .hx-social--wa:hover { background: #25d366; }

  /* ── Bottom Centered Stats ── */
  .hx-stats {
    grid-column: 1 / -1;
    grid-row: 2;
    justify-self: center;
    align-self: center; 
    width: 100%;
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 26px 28px;
    border-radius: 24px;
    background: rgba(255,255,255,0.07);
    -webkit-backdrop-filter: blur(20px) saturate(120%);
            backdrop-filter: blur(20px) saturate(120%);
    box-shadow:
      inset 0 1px 0 rgba(255,255,255,0.14),
      0 18px 50px rgba(0,0,0,0.3);
    position: relative;
    z-index: 2; 
  }
  .hx-stats li { display: flex; flex-direction: column; gap: 6px; }
  .hx-stat-value {
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 300;
    line-height: 1;
    letter-spacing: -1px;
  }
  .hx-stat-label { font-size: 0.78rem; line-height: 1.35; color: rgba(255,255,255,0.65); }

  /* ── Tablet ── */
  @media (max-width: 1024px) {
    .hx-section { padding: 120px 28px 48px; }
    .hx-inner { column-gap: 24px; }
    .hx-stats { gap: 14px; padding: 22px 20px; max-width: 100%; }
  }

  /* ── Mobile: Stack everything vertically ── */
  @media (max-width: 860px) {
    .hx-section {
      padding: 90px 20px 40px;
      flex-direction: column;
      min-height: auto;
    }
    
    .hx-inner {
      grid-template-columns: 1fr;
      align-items: center;
      text-align: center;
      row-gap: 36px;
    }
    .hx-content, .hx-photo-wrap, .hx-stats { grid-column: 1; grid-row: auto; }
    .hx-photo-wrap { order: -1; height: 440px; }
    .hx-content { align-items: center; }
    .hx-eyebrow { justify-content: center; }
    .hx-name { align-items: center; }
    .hx-ctas, .hx-socials { justify-content: center; }
    
    .hx-stats { 
      grid-template-columns: repeat(2, 1fr); 
      text-align: center; 
      width: 100%;
    }
    .hx-stats li { align-items: center; }
  }

  @media (prefers-reduced-motion: reduce) {
    .hx-deco-orb, .hx-deco-plus { animation: none; }
  }

  @media (max-width: 520px) {
    .hx-deco-dots { width: 80px; height: 80px; }
    .hx-deco-ring--2 { display: none; }
    .hx-name-first, .hx-name-last { font-size: clamp(3rem, 15vw, 4.2rem); letter-spacing: -2px; }
    .hx-photo-wrap { height: 360px; }
  }
`
if (!styles.isConnected) document.head.appendChild(styles)

export default Hero