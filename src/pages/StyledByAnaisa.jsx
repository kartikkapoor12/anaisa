import { Link } from 'react-router-dom'
import './StyledByAnaisa.css'

export default function StyledByAnaisa() {
  return (
    <div className="styled-page">

      {/* ─── Hero ─── */}
      <section className="page-hero">
        <img src="/images/hero-property.jpg" alt="Styled by Anaisa — Luxury Property Styling Sydney" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="section-label" style={{ color: 'var(--color-gold-light)' }}>Property Styling</p>
          <h1>Elevate Your Home.<br />Maximise Its Value.</h1>
          <p>Bespoke, intentional, and built around your buyer.</p>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <section className="section">
        <div className="two-col styled-intro">
            <div className="two-col-text">
              <p className="section-label">Why it works</p>
              <h2>The difference a styled home makes</h2>
              <div className="divider divider-left" />
              <p>Sakshi Seth brings eighteen years of Australian corporate experience to each project. The core philosophy: successful properties aren't necessarily the biggest or most expensive — they're the ones that felt right the moment you walked in.</p>
              <p style={{ marginTop: 16 }}>"Buyers don't fall in love with floor plans. They fall in love with how a home makes them feel."</p>
            </div>
            <div className="two-col-image">
              <img src="/images/propertystyling-2.jpg" alt="Property styling by Anaisa" />
            </div>
          </div>
      </section>

      {/* ─── Key Benefits ─── */}
      <section className="benefits-section section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <p className="section-label">The Anaisa Advantage</p>
            <h2>What sets us apart</h2>
            <div className="divider" />
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-card__number">01</div>
              <h3>Fewer days on market</h3>
              <p>Styled properties consistently spend less time listed than unstyled ones — presenting confidently from day one.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">02</div>
              <h3>Stronger sale prices</h3>
              <p>Professionally styled homes attract more competitive offers, maximising the return on your property investment.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__number">03</div>
              <h3>One point of view</h3>
              <p>Every project is personally led by Sakshi — not delegated to junior staff or reduced to formulaic approaches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="services-list section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <p className="section-label">What we offer</p>
            <h2>Our Services</h2>
            <div className="divider" />
          </div>

          <div className="services-grid">
            <div className="service-item">
              <div className="service-item__image">
                <img src="/images/property-styling-home.png" alt="Pre-Sale Staging" />
              </div>
              <div className="service-item__body">
                <p className="section-label">01</p>
                <h3>Pre-Sale Staging</h3>
                <p>Uses existing furniture plus soft furnishing accessories to create emotional connection before your property hits the market.</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-item__image">
                <img src="/images/propertystyling-2.jpg" alt="Hero Room Styling" />
              </div>
              <div className="service-item__body">
                <p className="section-label">02</p>
                <h3>Hero Room Styling</h3>
                <p>Focuses on the high-impact spaces — living, dining, master bedroom — where buyers form their first impressions within the first 90 seconds.</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-item__image">
                <img src="/images/property-detail.jpg" alt="Occupied Home Styling" />
              </div>
              <div className="service-item__body">
                <p className="section-label">03</p>
                <h3>Occupied Home Styling</h3>
                <p>Works with clients still living in the property — editing and refreshing without requiring relocation during your sales campaign.</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-item__image">
                <img src="/images/property-5.png" alt="New Build Consulting" />
              </div>
              <div className="service-item__body">
                <p className="section-label">04</p>
                <h3>New Build Consulting</h3>
                <p>Advises on fixture and furniture selections during renovations or new construction, ensuring cohesion from the ground up.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="process-section section" style={{ backgroundColor: 'var(--color-navy)' }}>
        <div className="container text-center">
          <p className="section-label" style={{ color: 'var(--color-gold)' }}>How it works</p>
          <h2 style={{ color: 'var(--color-white)', marginBottom: 16 }}>The Process</h2>
          <div className="divider" />
          <div className="process-steps">
            <div className="process-step">
              <div className="process-step__num">01</div>
              <h3>Consultation</h3>
              <p>Sakshi meets with you, visits the property, and develops a customised plan tailored to your buyer market.</p>
            </div>
            <div className="process-step__line" />
            <div className="process-step">
              <div className="process-step__num">02</div>
              <h3>Styling Day</h3>
              <p>Complete transformation with Sakshi personally overseeing every detail of the process.</p>
            </div>
            <div className="process-step__line" />
            <div className="process-step">
              <div className="process-step__num">03</div>
              <h3>Campaign Support</h3>
              <p>Ongoing availability for adjustments and open home resets throughout your entire sales campaign.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Target / Quote ─── */}
      <section className="styled-quote section">
        <div className="two-col">
            <div className="two-col-image">
              <img src="/images/property-styling-2.png" alt="Anaisa property styling result" />
            </div>
            <div className="two-col-text">
              <p className="section-label">Who we work with</p>
              <h2>We work with properties that deserve this level of attention.</h2>
              <div className="divider divider-left" />
              <p>Investment properties, family homes, and luxury apartments in Sydney. Anaisa is selective — because not every property is right for this level of service, and not every client is right for us.</p>
              <p style={{ marginTop: 20, fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                "Buyers don't fall in love with floor plans. They fall in love with how a home makes them feel."
              </p>
              <Link to="/contact" className="btn btn-dark" style={{ marginTop: 32 }}>Book a Consultation</Link>
            </div>
          </div>
      </section>

    </div>
  )
}
