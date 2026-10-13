import { Link } from 'react-router-dom'
import './OurStory.css'

export default function OurStory() {
  return (
    <div className="story-page">

      {/* ─── Hero ─── */}
      <section className="page-hero">
        <img src="/images/story-img2702.jpg" alt="The Anaisa Story" />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="section-label" style={{ color: 'var(--color-gold-light)' }}>Our Story</p>
          <h1>"Anaisa began the moment I stopped waiting for the right time."</h1>
        </div>
      </section>

      {/* ─── Opening quote ─── */}
      <section className="section story-opening">
        <div className="container text-center">
          <p className="story-opening__quote">
            "Anaisa began the moment I stopped waiting for the right time and started creating the world I've felt was always inside me."
          </p>
          <div className="divider" />
          <p className="story-opening__sub">— Sakshi Seth, Founder</p>
        </div>
      </section>

      {/* ─── Founder section ─── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="two-col">
            <div className="two-col-image">
              <img src="/images/sakshi-portrait.png" alt="Sakshi Seth — Founder of Anaisa" />
            </div>
            <div className="two-col-text">
              <p className="section-label">The founder</p>
              <h2>Sakshi Seth</h2>
              <div className="divider divider-left" />
              <p>Sakshi brings contemporary aesthetics combined with luxury craftsmanship and tradition to Anaisa's foundation. She experienced beauty as a daily practice growing up — not reserved for special moments.</p>
              <p style={{ marginTop: 16 }}>Over eighteen years in Australian corporate environments, she observed how a single furniture placement could shift the energy of a room, how properties sold quickly when they felt right upon entry, and how jewellery influenced the personal presence of the person wearing it.</p>
              <p style={{ marginTop: 16 }}>These observations became convictions. And those convictions became Anaisa.</p>
              <blockquote className="story-quote">
                "I grew up watching beauty being practised as a daily act, not saved for special occasions. That's what Anaisa is built on. The things around you should be chosen with the same care you'd give to anything that matters."
              </blockquote>
            </div>
          </div>
      </section>

      {/* ─── Three services ─── */}
      <section className="section story-services" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <p className="section-label">What we do</p>
            <h2>Three worlds. One ethos.</h2>
            <div className="divider" />
            <p style={{ maxWidth: 560, margin: '0 auto' }}>Anaisa brings together property styling, botanical sculpture, and curated jewellery under a single philosophy of intentional beauty.</p>
          </div>

          <div className="story-services__grid">
            <div className="story-service">
              <div className="story-service__image">
                <img src="/images/story-4.png" alt="Property Styling by Anaisa" />
              </div>
              <div className="story-service__body">
                <p className="section-label">01</p>
                <h3>Property Styling</h3>
                <p>Homes presented through intentional design that communicates their story before a single word is spoken.</p>
                <Link to="/styled-by-anaisa" className="story-service__link">Explore →</Link>
              </div>
            </div>

            <div className="story-service">
              <div className="story-service__image">
                <img src="/images/floral-2.png" alt="Botanical Sculptures by Anaisa" />
              </div>
              <div className="story-service__body">
                <p className="section-label">02</p>
                <h3>Botanical Sculptures</h3>
                <p>Handcrafted permanent installations created around vessels and spaces — functional art pieces, not temporary arrangements.</p>
                <Link to="/floral-sculptures" className="story-service__link">Explore →</Link>
              </div>
            </div>

            <div className="story-service">
              <div className="story-service__image">
                <img src="/images/story-jewellery.png" alt="The Jewellery Edit by Anaisa" />
              </div>
              <div className="story-service__body">
                <p className="section-label">03</p>
                <h3>The Jewellery Edit</h3>
                <p>Curated semi-precious Indian heritage pieces inspired by Polki, Kundan, and Meenakari — sourced from multi-generational artisans.</p>
                <Link to="/jewellery-edit" className="story-service__link">Explore →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Beliefs ─── */}
      <section className="beliefs-section section">
        <div className="two-col">
            <div className="two-col-text">
              <p className="section-label">What we believe</p>
              <h2>Built on conviction, not convenience.</h2>
              <div className="divider divider-left" />
              <div className="beliefs-list">
                <div className="belief">
                  <div className="belief__dot" />
                  <p>Every project is personally managed by Sakshi — with undivided attention from start to finish.</p>
                </div>
                <div className="belief">
                  <div className="belief__dot" />
                  <p>We are committed to permanence over trends — pieces and spaces designed to last.</p>
                </div>
                <div className="belief">
                  <div className="belief__dot" />
                  <p>Our approach is heritage-informed yet universally relevant — anchored in tradition, designed for now.</p>
                </div>
              </div>
              <Link to="/contact" className="btn btn-dark" style={{ marginTop: 40 }}>Get in Touch</Link>
            </div>
            <div className="two-col-image">
              <img src="/images/story-img2676.jpg" alt="Anaisa at work" />
            </div>
          </div>
      </section>

    </div>
  )
}
