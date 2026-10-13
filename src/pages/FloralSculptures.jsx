import { Link } from 'react-router-dom'
import './FloralSculptures.css'

export default function FloralSculptures() {
  return (
    <div className="floral-page">

      {/* ─── Hero ─── */}
      <section className="page-hero">
        <img src="/images/hero-floral.png" alt="Anaisa Sculptural Florals" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="section-label" style={{ color: 'var(--color-gold-light)' }}>Botanical Sculptures</p>
          <h1>The vessel and the botanicals.<br />One unique arrangement.</h1>
          <p>Handcrafted · Permanent · Designed as art</p>
        </div>
      </section>

      {/* ─── Concept ─── */}
      <section className="section">
        <div className="two-col">
            <div className="two-col-text">
              <p className="section-label">What makes these different</p>
              <h2>Sculptures, not arrangements</h2>
              <div className="divider divider-left" />
              <p>The design process begins with the vessel rather than the flowers. Each piece is built around a specific vessel — from vintage crystal compotes and raw driftwood to ceramic pieces — with botanicals chosen to integrate with it entirely.</p>
              <p style={{ marginTop: 16 }}>The result is a permanent designed object meant to function like artwork: placed with intention, seen with feeling.</p>
            </div>
            <div className="two-col-image">
              <img src="/images/floral-2.png" alt="Floral sculpture detail" />
            </div>
          </div>
      </section>

      {/* ─── Who it's for ─── */}
      <section className="floral-markets section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <p className="section-label">Where they belong</p>
            <h2>Made for spaces that matter</h2>
            <div className="divider" />
          </div>
          <div className="markets-grid">
            <div className="market-card">
              <div className="market-card__image">
                <img src="/images/floral-sculptures-home.png" alt="Botanical sculptures for homes" />
              </div>
              <div className="market-card__body">
                <h3>Homes</h3>
                <p>Entryways, dining tables, living room corners — pieces that anchor a space and give it a sense of considered beauty.</p>
              </div>
            </div>
            <div className="market-card">
              <div className="market-card__image">
                <img src="/images/floral-design.png" alt="Botanical sculptures for offices" />
              </div>
              <div className="market-card__body">
                <h3>Offices &amp; Commercial</h3>
                <p>Reception areas, boardrooms, private offices. A single piece communicates everything about a brand's aesthetic values.</p>
              </div>
            </div>
            <div className="market-card">
              <div className="market-card__image">
                <img src="/images/floral-15.png" alt="Botanical sculptures for events" />
              </div>
              <div className="market-card__body">
                <h3>Special Occasions</h3>
                <p>Weddings, ceremonies, and commissioned gifts — created to be kept long after the event, as a lasting memory of the day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="floral-process section">
        <div className="two-col">
            <div className="two-col-image">
              <img src="/images/hero-floral.png" alt="Floral sculpture process" />
            </div>
            <div className="two-col-text">
              <p className="section-label">How it works</p>
              <h2>From concept to creation</h2>
              <div className="divider divider-left" />
              <div className="floral-steps">
                <div className="floral-step">
                  <span className="floral-step__num">01</span>
                  <div>
                    <h4>Consultation</h4>
                    <p>We discuss your space, aesthetic preferences, and what the piece needs to do in the room.</p>
                  </div>
                </div>
                <div className="floral-step">
                  <span className="floral-step__num">02</span>
                  <div>
                    <h4>Design Concept</h4>
                    <p>A design concept is developed and presented for your approval before any work begins.</p>
                  </div>
                </div>
                <div className="floral-step">
                  <span className="floral-step__num">03</span>
                  <div>
                    <h4>Handcrafted &amp; Delivered</h4>
                    <p>Each piece is handcrafted using preserved or premium artificial botanicals, then delivered and placed in your space.</p>
                  </div>
                </div>
              </div>
              <p className="floral-pricing">Starting from <strong>$100</strong> · 2–3 week commission lead time</p>
              <Link to="/contact" className="btn btn-dark">Commission a Piece</Link>
            </div>
          </div>
      </section>
      <section className="floral-quote section" style={{ backgroundColor: 'var(--color-navy)' }}>
        <div className="container text-center">
          <p className="section-label" style={{ color: 'var(--color-gold)' }}>From the founder</p>
          <blockquote>
            "I want people to walk into a room, see the piece, and feel something shift — a sense that the space has been considered, that someone truly cared."
          </blockquote>
          <p className="floral-quote__attr">— Sakshi Seth, Founder</p>
          <Link to="/contact" className="btn btn-outline-white" style={{ marginTop: 32 }}>Start a Commission</Link>
        </div>
      </section>

    </div>
  )
}
