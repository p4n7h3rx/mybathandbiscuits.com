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
  const { pathname } = useLocation()

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

  // Dynamic SEO Metadata Configuration
  const SEO = {
    '/': {
      title: 'Bath & Biscuits — Professional Dog & Cat Grooming Newark OH',
      description: 'Award-winning dog and cat grooming in Newark, Ohio. Gentle handling, Thera-Clean Microbubble Spa, fresh-baked pet treats, and boutique finds. Serving Licking County since 2009.',
      breadcrumb: 'Home'
    },
    '/grooming': {
      title: 'Dog & Cat Grooming Services Newark OH | Bath & Biscuits',
      description: 'Professional dog grooming, cat grooming, and Thera-Clean® Microbubble Spa in Newark, Ohio. One-on-one gentle care by certified stylists in Licking County.',
      breadcrumb: 'Grooming Services'
    },
    '/bakery': {
      title: 'Dog Bakery & Custom Pet Cakes Newark OH | Bath & Biscuits',
      description: 'Fresh-baked dog treats, custom birthday cakes, and pet boutique accessories in Newark, Ohio. Human-grade ingredients, small-batch baked in Licking County.',
      breadcrumb: 'Bakery & Boutique'
    },
    '/about': {
      title: 'About Bath & Biscuits — Pet Grooming Newark OH Since 2009',
      description: 'Meet Danielle Wilson RVT and the Bath & Biscuits team. Award-winning pet salon in Newark, Ohio serving Licking County with experienced, gentle grooming since 2009.',
      breadcrumb: 'About Us'
    }
  }

  const currentSEO = SEO[pathname] || SEO['/']

  return (
    <>
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <link rel="canonical" href={`https://www.mybathandbiscuits.com${pathname === '/' ? '' : pathname}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.mybathandbiscuits.com${pathname === '/' ? '' : pathname}`} />
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:image" content="https://www.mybathandbiscuits.com/og-image.webp" />
        <meta property="og:site_name" content="Bath & Biscuits" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://www.mybathandbiscuits.com${pathname === '/' ? '' : pathname}`} />
        <meta name="twitter:title" content={currentSEO.title} />
        <meta name="twitter:description" content={currentSEO.description} />
        <meta name="twitter:image" content="https://www.mybathandbiscuits.com/og-image.webp" />

        {/* BreadcrumbList Schema for Google Rich Results */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mybathandbiscuits.com" },
            ...(pathname !== '/' ? [{ "@type": "ListItem", "position": 2, "name": currentSEO.breadcrumb, "item": `https://www.mybathandbiscuits.com${pathname}` }] : [])
          ]
        })}</script>

        {/* LocalBusiness Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "PetStore"],
            "name": "Bath & Biscuits",
            "description": "Award-winning dog and cat grooming salon, Thera-Clean Microbubble Spa, and fresh-baked pet bakery in Newark, Ohio. Serving Licking County since 2009.",
            "url": "https://www.mybathandbiscuits.com",
            "telephone": "(740) 587-0011",
            "email": "info@mybathandbiscuits.com",
            "logo": "https://www.mybathandbiscuits.com/logo.png",
            "image": [
                "https://www.mybathandbiscuits.com/images/store exterior.webp",
                "https://www.mybathandbiscuits.com/images/Grooming-1.webp"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "75 Westgate Dr",
              "addressLocality": "Newark",
              "addressRegion": "OH",
              "postalCode": "43055",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.076041,
              "longitude": -82.433200
            },
            "areaServed": [
                { "@type": "City", "name": "Newark", "sameAs": "https://www.wikidata.org/wiki/Q516362" },
                { "@type": "City", "name": "Heath", "sameAs": "https://www.wikidata.org/wiki/Q1003460" },
                { "@type": "City", "name": "Granville", "sameAs": "https://www.wikidata.org/wiki/Q1003405" },
                { "@type": "AdministrativeArea", "name": "Licking County", "sameAs": "https://www.wikidata.org/wiki/Q484433" }
            ],
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
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Pet Care Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Luxury Dog Grooming"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Cat Grooming Specialists"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Thera-Clean Microbubble Spa"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Fresh-Baked Dog Treats"
                        }
                    }
                ]
            },
            "priceRange": "$$",
            "sameAs": [
                "https://www.facebook.com/bathandbiscuits"
            ]
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
