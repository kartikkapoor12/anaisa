import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import StyledByAnaisa from './pages/StyledByAnaisa'
import FloralSculptures from './pages/FloralSculptures'
import JewelleryEdit from './pages/JewelleryEdit'
import OurStory from './pages/OurStory'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import RefundPolicy from './pages/RefundPolicy'
import ShippingPolicy from './pages/ShippingPolicy'
import WebsiteTerms from './pages/WebsiteTerms'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/styled-by-anaisa" element={<StyledByAnaisa />} />
          <Route path="/floral-sculptures" element={<FloralSculptures />} />
          <Route path="/jewellery-edit" element={<JewelleryEdit />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/website-terms" element={<WebsiteTerms />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
