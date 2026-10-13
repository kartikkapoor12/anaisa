import { useState } from 'react'
import { Link } from 'react-router-dom'
import './JewelleryEdit.css'

export default function JewelleryEdit() {
  const [waitlist, setWaitlist] = useState({ name: '', email: '' })
  const [wlStatus, setWlStatus] = useState(null)
  const [wlLoading, setWlLoading] = useState(false)

  const handleWaitlist = async (e) => {
    e.preventDefault()
    setWlLoading(true)
    setWlStatus(null)
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(waitlist)
      })
      const data = await res.json()
      if (res.ok) {
        setWlStatus({ type: 'success', message: 'You\'re on the list! We\'ll be in touch when the collection launches.' })
        setWaitlist({ name: '', email: '' })
      } else {
        setWlStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' })
      }
    } catch {
      setWlStatus({ type: 'error', message: 'Unable to register. Please email us at sakshi@anaisa.com.au' })
    } finally {
      setWlLoading(false)
    }
  }

  return (
    <div className="jewellery-page">

      {/* ─── Hero ─── */}
      <section className="jewellery-hero">
        <img src="/images/jewellery-earrings1.png" alt="Anaisa Jewellery Edit" className="jewellery-hero__bg" />
        <div className="jewellery-hero__overlay" />
        <div className="jewellery-hero__content">
          <p className="section-label" style={{ color: 'var(--color-gold-light)' }}>The Jewellery Edit</p>
          <h1>Jewellery that carries centuries in it.</h1>
          <p>Coming Soon — Register your interest for first access.</p>
          <a href="#waitlist" className="btn btn-outline-white">Join the Waitlist</a>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <section className="section">
        <div className="two-col">
            <div className="two-col-text">
              <p className="section-label">The collection</p>
              <h2>This isn't just jewellery you buy. It's jewellery you'll treasure for a lifetime.</h2>
              <div className="divider divider-left" />
              <p>A curated selection of semi-precious Indian heritage jewellery inspired by Polki, Kundan, and Meenakari styles. Each piece is sourced from multi-generational artisans who have perfected their craft over lifetimes.</p>
              <p style={{ marginTop: 16 }}>Currently in pre-launch, featured at select pop-ups across Sydney.</p>
            </div>
            <div className="two-col-image">
              <img src="/images/jewellery-earrings2.png" alt="Anaisa jewellery earrings" />
            </div>
          </div>
      </section>

      {/* ─── The Craft ─── */}
      <section className="craft-section section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <p className="section-label">The craft</p>
            <h2>Centuries of technique, curated for today</h2>
            <div className="divider" />
          </div>
          <div className="craft-grid">
            <div className="craft-card">
              <div className="craft-card__image">
                <img src="/images/jewellery-img2693.jpg" alt="Polki jewellery technique" />
              </div>
              <div className="craft-card__body">
                <h3>Polki</h3>
                <p>Uses uncut, unfaceted diamonds or stones set flat in gold — a technique that captures raw, natural beauty in its most original form.</p>
              </div>
            </div>
            <div className="craft-card">
              <div className="craft-card__image">
                <img src="/images/jewellery-photoshoot.jpg" alt="Kundan jewellery technique" />
              </div>
              <div className="craft-card__body">
                <h3>Kundan</h3>
                <p>Employs gold foil and semi-precious stones in hand-pressed intricate settings, creating jewellery of extraordinary intricacy and permanence.</p>
              </div>
            </div>
            <div className="craft-card">
              <div className="craft-card__image">
                <img src="/images/jewellery-img0485.jpg" alt="Meenakari jewellery technique" />
              </div>
              <div className="craft-card__body">
                <h3>Meenakari</h3>
                <p>Enamel art featuring deep greens, ruby reds, and peacock blues fired into metal — colour as enduring as the piece itself.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Curation Criteria ─── */}
      <section className="curation-section section">
        <div className="two-col">
            <div className="two-col-image">
              <img src="/images/jewellery-earrings1.png" alt="Anaisa curation criteria" />
            </div>
            <div className="two-col-text">
              <p className="section-label">Our curation criteria</p>
              <h2>Every piece must earn its place.</h2>
              <div className="divider divider-left" />
              <div className="curation-items">
                <div className="curation-item">
                  <span className="curation-item__num">01</span>
                  <div>
                    <h4>Exceptional craft quality</h4>
                    <p>Setting precision, enamel quality, and metalwork finish — each piece is assessed against the highest standards of its tradition.</p>
                  </div>
                </div>
                <div className="curation-item">
                  <span className="curation-item__num">02</span>
                  <div>
                    <h4>Wearability for today</h4>
                    <p>Heritage-inspired but designed for contemporary occasions — pieces you'll reach for, not just admire.</p>
                  </div>
                </div>
                <div className="curation-item">
                  <span className="curation-item__num">03</span>
                  <div>
                    <h4>Heirloom potential</h4>
                    <p>Every piece is assessed for lifetime durability — made to be passed down, not discarded.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* ─── Founder Quote ─── */}
      <section className="jewellery-quote section" style={{ backgroundColor: 'var(--color-navy)' }}>
        <div className="container text-center">
          <p className="section-label" style={{ color: 'var(--color-gold)' }}>From the founder</p>
          <blockquote>
            "I grew up watching the women around me wear jewellery that had stories behind it. Pieces chosen with care, kept for decades. That's what the Anaisa edit is built on."
          </blockquote>
          <p className="jewellery-quote__attr">— Sakshi Seth, Founder</p>
        </div>
      </section>

      {/* ─── Waitlist ─── */}
      <section id="waitlist" className="waitlist-section section">
        <div className="container text-center">
          <p className="section-label">Coming soon</p>
          <h2>Register Your Interest</h2>
          <div className="divider" />
          <p>Be first to access the collection when it launches. Register below for early access and exclusive updates.</p>
          <form className="waitlist-form" onSubmit={handleWaitlist}>
            <input
              type="text"
              placeholder="Your name"
              required
              value={waitlist.name}
              onChange={(e) => setWaitlist(p => ({ ...p, name: e.target.value }))}
            />
            <input
              type="email"
              placeholder="Your email address"
              required
              value={waitlist.email}
              onChange={(e) => setWaitlist(p => ({ ...p, email: e.target.value }))}
            />
            {wlStatus && (
              <div className={`waitlist-status waitlist-status--${wlStatus.type}`}>
                {wlStatus.message}
              </div>
            )}
            <button type="submit" className="btn btn-dark" disabled={wlLoading}>
              {wlLoading ? 'Registering...' : 'Register Interest'}
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}
