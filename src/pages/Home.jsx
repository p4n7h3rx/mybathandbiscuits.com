import Hero from '../sections/Hero'
import Services from '../sections/Services'
import TheraClean from '../sections/TheraClean'
import Community from '../sections/Community'
import Journey from '../sections/Journey'
import Trust from '../sections/Trust'
import Press from '../sections/Press'
import About from '../sections/About'
import Testimonials from '../sections/Testimonials'
import GoogleReviews from '../sections/GoogleReviews'
import TrustpilotReviews from '../sections/TrustpilotReviews'
import FAQ from '../sections/FAQ'
import Bakery from '../sections/Bakery'
import MapSection from '../sections/MapSection'
import BookingCTA from '../sections/BookingCTA'

export default function Home() {
    return (
        <>
            <Hero
                badge="Winner: America's Coolest 2024"
                titleLine1="Elevate Your Pet's"
                titleLine2="Standard of Care"
                subtitle="Where experienced hands, gentle handling, and thoughtful care come together to keep pets healthy, comfortable, and looking their best."
                videoSrc="/images/hero-3.mp4"
                primaryCTA={{ text: "Book Appointment", href: "https://pawpartner.com/pz/book?p=237080" }}
                secondaryCTA={{ text: "Explore Grooming", href: "#services" }}
            />
            <Bakery />
            <Services />
            <TheraClean />
            <Community />
            <Journey />
            <Trust />
            <Press />
            <About />
            <Testimonials />
            <GoogleReviews />
            <TrustpilotReviews />
            <FAQ />
            <BookingCTA />
            <MapSection />
        </>
    )
}
