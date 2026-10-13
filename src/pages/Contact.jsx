import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ type: 'success', message: 'Your enquiry has been sent. We\'ll be in touch soon.' })
        setForm({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Unable to send. Please email us directly at sakshi@anaisa.com.au' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-page">

      {/* ─── Hero ─── */}
      <section className="page-hero">
        <img src="/images/hero-contact.png" alt="Contact Anaisa" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="section-label" style={{ color: 'var(--color-gold-light)' }}>Get in Touch</p>
          <h1>Let's Create Something Beautiful Together</h1>
        </div>
      </section>

      {/* ─── Contact section ─── */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">

            {/* Form */}
            <div className="contact-form-wrap">
              <p className="section-label">Send an enquiry</p>
              <h2>We'd love to hear from you</h2>
              <div className="divider divider-left" />
              <p className="contact-intro">Whether it's about property styling, botanical sculptures, jewellery, or a custom project — get in touch and we'll respond personally.</p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                  />
                </div>

                {status && (
                  <div className={`form-status form-status--${status.type}`}>
                    {status.message}
                  </div>
                )}

                <button type="submit" className="btn btn-dark" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="contact-info">
              <p className="section-label">Direct contact</p>
              <h2>Reach us directly</h2>
              <div className="divider divider-left" />

              <div className="contact-info__items">
                <div className="contact-info__item">
                  <h4>Email</h4>
                  <a href="mailto:sakshi@anaisa.com.au">sakshi@anaisa.com.au</a>
                </div>
                <div className="contact-info__item">
                  <h4>Instagram</h4>
                  <a href="https://www.instagram.com/anaisa.co" target="_blank" rel="noopener noreferrer">@anaisa.co</a>
                </div>
                <div className="contact-info__item">
                  <h4>Location</h4>
                  <p>Sydney, Australia</p>
                </div>
              </div>

              <div className="contact-brand-desc">
                <p>Premium property styling, sculptural florals, and curated jewellery. Created with intention.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
