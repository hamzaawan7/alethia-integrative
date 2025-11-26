import { Routes, Route, Navigate } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogArchive from './pages/BlogArchive'
import BookOnline from './pages/BookOnline'
import ContactUs from './pages/ContactUs'
import Contents from './pages/Contents'
import Locations from './pages/Locations'
import Membership from './pages/Membership'
import OurTerms from './pages/OurTerms'
import Providers from './pages/Providers'
import Schedule from './pages/Schedule'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Testimonials from './pages/Testimonials'
import TherapyPricelist from './pages/TherapyPricelist'
import YourPrivacy from './pages/YourPrivacy'
import AccessibilityStatement from './pages/AccessibilityStatement'
import NotFound from './pages/NotFound'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>        
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog-archive" element={<BlogArchive />} />
        <Route path="book-online" element={<BookOnline />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="contact" element={<Navigate to="/contact-us" replace />} />
        <Route path="contents" element={<Contents />} />
        <Route path="locations" element={<Locations />} />
        <Route path="membership" element={<Membership />} />
        <Route path="our-terms" element={<OurTerms />} />
        <Route path="providers" element={<Providers />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="services" element={<Services />} />
        <Route path="service/:slug" element={<ServiceDetail />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="therapy-pricelist" element={<TherapyPricelist />} />
        <Route path="your-privacy" element={<YourPrivacy />} />
        <Route path="accessibility-statement" element={<AccessibilityStatement />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
