import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const [nlEmail, setNlEmail] = useState('')
  const [nlStatus, setNlStatus] = useState(null)
  const [nlLoading, setNlLoading] = useState(false)

  const handleNewsletter = async (e) => {
    e.preventDefault()
    setNlLoading(true)
    setNlStatus(null)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: nlEmail })
      })
      const data = await res.json()
      if (res.ok) {
        setNlStatus({ type: 'success', message: 'You\'re subscribed. Welcome to the edit.' })
        setNlEmail('')
      } else {
        setNlStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' })
      }
    } catch {
      setNlStatus({ type: 'error', message: 'Unable to subscribe. Please try again later.' })
    } finally {
      setNlLoading(false)
    }
  }

  return (
    <div className="home">
      {/* ─── Hero ─── */}
      <section className="hero">
        <img src="/images/hero-home.png" alt="Anaisa — Where Intention Meets Timeless Elegance" className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__tagline">Property Styling · Sculptural Florals · Curated Jewellery</p>
          <h1 className="hero__heading">Where Intention Meets Timeless Elegance</h1>
          <p className="hero__sub">Creating warm, sophisticated spaces and experiences that feel deeply personal.</p>
          <Link to="/contact" className="btn btn-white">Book a Consultation</Link>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="services section">
        <div className="services__grid">

            {/* Property Styling */}
            <div className="service-card">
              <div className="service-card__image">
                <img src="/images/property-styling-home.png" alt="Styled by Anaisa — Property Styling" />
              </div>
              <div className="service-card__body">
                <p className="section-label">01</p>
                <h2>Styled by Anaisa</h2>
                <div className="divider divider-left" />
                <p>The team transforms properties into warm, sophisticated, market-ready homes using styling expertise and a deep understanding of buyer psychology.</p>
                <Link to="/styled-by-anaisa" className="btn btn-outline">Our Services</Link>
              </div>
            </div>

            {/* Sculptural Florals */}
            <div className="service-card service-card--reverse">
              <div className="service-card__image">
                <img src="/images/floral-sculptures-home.png" alt="Sculptural Florals by Anaisa" />
              </div>
              <div className="service-card__body">
                <p className="section-label">02</p>
                <h2>Sculptural Florals</h2>
                <div className="divider divider-left" />
                <p>Premium preserved botanical artworks — not arrangements — designed for lasting beauty in homes, events, and commercial spaces.</p>
                <Link to="/floral-sculptures" className="btn btn-outline">Explore Florals</Link>
              </div>
            </div>

            {/* Jewellery */}
            <div className="service-card">
              <div className="service-card__image">
                <img src="/images/jewellery-edit-home.png" alt="The Anaisa Jewellery Edit" />
              </div>
              <div className="service-card__body">
                <p className="section-label">03</p>
                <h2>The Anaisa Jewellery Edit</h2>
                <div className="divider divider-left" />
                <p>Curated semi-precious, statement, and heirloom-style jewellery pieces launching soon, and currently featured at select pop-ups.</p>
                <Link to="/jewellery-edit" className="btn btn-outline">Join the Waitlist</Link>
              </div>
            </div>

          </div>
      </section>

      {/* ─── About / Founder ─── */}
      <section className="founder-section">
        <div className="founder-section__image">
          <img src="/images/sakshi-portrait.png" alt="Sakshi Seth, Founder of Anaisa" />
        </div>
        <div className="founder-section__text">
          <p className="section-label">Our Story</p>
          <h2>"For 18 years my heart was somewhere else entirely. Anaisa is where it landed."</h2>
          <p className="founder-section__attr">— Sakshi Seth, Founder</p>
          <div className="divider divider-left" />
          <p>Built on a foundation of beauty, detail, and intentionality, Anaisa brings together three distinct worlds — property, botanicals, and jewellery — under a single ethos of care.</p>
          <Link to="/our-story" className="btn btn-outline">Read our story</Link>
        </div>
      </section>

      {/* ─── Launch Event ─── */}
      <section className="event-section section">
        <div className="container">
          <div className="event-section__inner">
            <p className="section-label">Upcoming</p>
            <h2>Attend Our Launch Event</h2>
            <div className="divider" />
            <p>An intimate evening featuring styled homes, sculptural florals, and exclusive jewellery previews. Join us at Thompson Hall, Baulkham Hills.</p>
            <p className="event-section__date">13 June 2026</p>
            <a
              href="https://www.eventbrite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>

      {/* ─── Jewellery Hero Banner ─── */}
      <section className="jewellery-banner">
        <img src="/images/jewellery-earrings1.png" alt="Anaisa Jewellery — Jewellery that carries centuries in it" className="jewellery-banner__bg" />
        <div className="jewellery-banner__overlay" />
        <div className="jewellery-banner__content">
          <p className="section-label" style={{ color: 'var(--color-gold-light)' }}>The Jewellery Edit</p>
          <h2>Jewellery that carries centuries in it.</h2>
          <p>Inspired by Polki, Kundan, and Meenakari — coming soon.</p>
          <Link to="/jewellery-edit" className="btn btn-outline-white">Join the Waitlist</Link>
        </div>
      </section>

      {/* ─── Email Signup ─── */}
      <section className="newsletter section">
        <div className="container text-center">
          <p className="section-label">Stay Connected</p>
          <h2>Stay in the Edit</h2>
          <div className="divider" />
          <p>Early access to events, styling inspiration, and jewellery updates — delivered with intention.</p>
          <form className="newsletter__form" onSubmit={handleNewsletter}>
            <input
              type="email"
              placeholder="Your email address"
              required
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-dark" disabled={nlLoading}>
              {nlLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {nlStatus && (
            <p className={`newsletter__status newsletter__status--${nlStatus.type}`}>
              {nlStatus.message}
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
