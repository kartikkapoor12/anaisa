import './PolicyPage.css'

export default function PolicyPage({ title, children }) {
  return (
    <div className="policy-page">
      <div className="policy-page__hero">
        <div className="policy-page__hero-overlay" />
        <div className="policy-page__hero-content">
          <p className="section-label" style={{ color: 'var(--color-gold-light)' }}>Legal</p>
          <h1>{title}</h1>
        </div>
      </div>
      <section className="policy-page__body section">
        <div className="container">
          <div className="policy-content">
            {children}
          </div>
        </div>
      </section>
    </div>
  )
}
