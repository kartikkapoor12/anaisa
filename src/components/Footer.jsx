import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <Link to="/">
            <img src="/images/Logo_Anaisa_Blue.png" alt="Anaisa" className="footer__logo" />
          </Link>
          <p className="footer__tagline">
            Premium property styling, sculptural florals, and curated jewellery created with intention in Sydney, Australia.
          </p>
          <div className="footer__contact">
            <a href="mailto:sakshi@anaisa.com.au">sakshi@anaisa.com.au</a>
            <a href="https://www.instagram.com/anaisa.co" target="_blank" rel="noopener noreferrer">@anaisa.co</a>
          </div>
        </div>

        <div className="footer__links">
          <h4 className="footer__heading">Explore</h4>
          <nav className="footer__nav">
            <Link to="/styled-by-anaisa">Our Services</Link>
            <Link to="/floral-sculptures">Sculptural Florals</Link>
            <Link to="/jewellery-edit">Jewellery Edit</Link>
            <Link to="/our-story">Our Story</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer__links">
          <h4 className="footer__heading">Legal</h4>
          <nav className="footer__nav">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/shipping-policy">Shipping Policy</Link>
            <Link to="/website-terms">Website Terms</Link>
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Anaisa. All rights reserved. Sydney, Australia.</p>
        </div>
      </div>
    </footer>
  )
}
