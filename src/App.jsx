import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { Helmet } from 'react-helmet-async'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Grooming from './pages/Grooming'
import BakeryPage from './pages/Bakery'
import AboutPage from './pages/About'
import ReviewRedirect from './pages/ReviewRedirect'
import Footer from './sections/Footer'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'

function ScrollToTopHandler() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [pathname, hash])

  return null
}

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Bath &amp; Biscuits — Premium Pet Salon &amp; Boutique | Granville, OH</title>
        <meta name="description" content="Elevating Pet Care to a Class Above the Rest. Luxury grooming, Thera-Clean® Microbubble Spa, cat grooming, and artisan pet bakery in Granville, Ohio. Since 2009." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bath & Biscuits",
            "description": "Granville's premier pet salon and boutique offering luxury grooming, Thera-Clean Microbubble Spa, and artisan pet bakery.",
            "url": "https://www.mybathandbiscuits.com",
            "telephone": "(740) 587-0011",
            "email": "info@mybathandbiscuits.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "75 Westgate Dr",
              "addressLocality": "Newark",
              "addressRegion": "OH",
              "postalCode": "43055",
              "addressCountry": "US"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "09:00",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "12:00"
              }
            ],
            "priceRange": "$$",
            "image": "https://www.mybathandbiscuits.com/og-image.webp"
          }
        `}</script>
      </Helmet>

      <Navbar />
      <ScrollToTopHandler />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grooming" element={<Grooming />} />
          <Route path="/bakery" element={<BakeryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/review" element={<ReviewRedirect />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
      <CustomCursor />
    </>
  )
}

export default App
