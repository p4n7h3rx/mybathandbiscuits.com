import Hero from '../sections/Hero'
import AboutSection from '../sections/About'
import SignatureMemories from '../sections/SignatureMemories'
import TeamSection from '../sections/TeamSection'
import Trust from '../sections/Trust'
import MapSection from '../sections/MapSection'
import Testimonials from '../sections/Testimonials'
import BookingCTA from '../sections/BookingCTA'
import ImageGallery from '../components/ImageGallery'
import { useEffect } from 'react'

const HERITAGE_GALLERY = [
    { url: '/images/store exterior.webp', alt: 'Bath & Biscuits Newark Store Exterior' },
    { url: '/images/Store Sign Board.webp', alt: 'Award-Winning Pet Salon Branding' },
    { url: '/images/Store Board Sign with Decore bone.webp', alt: 'Pet Styling Details Newark' },
    { url: '/images/Photo area.webp', alt: 'Pet Photo Area Licking County' },
    { url: '/images/bakery-dog-treats-2.webp', alt: 'Dog Bakery Newark Treats' },
    { url: '/images/IMG_9244.webp', alt: 'Small Batch Dog Treats OH' },
]

export default function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Hero
                badge="Winner: America's Coolest 2024"
                titleLine1="Our Heart for"
                titleLine2="Thoughtful Care"
                subtitle="From our Granville roots to our new home in Newark, discover the dedicated passion behind Bath & Biscuits."
                videoSrc="/images/hero-2.mp4"
                primaryCTA={{ text: "Book Appointment", href: "https://pawpartner.com/pz/book?p=237080" }}
                secondaryCTA={{ text: "Meet the Team", href: "#about" }}
            />
            <AboutSection />
            <SignatureMemories />
            <TeamSection />

            <section className="py-24 bg-charcoal text-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { title: "Baked with Love", text: "Every treat is baked in small batches with simple, wholesome ingredients." },
                            { title: "Care & Comfort", text: "We prioritize gentle handling and thoughtful care for every pet on our table." },
                            { title: "Community Roots", text: "Proudly serving the Licking County community and beyond since 2009." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                                <span className="text-sage text-2xl font-serif block mb-4">0{idx + 1}</span>
                                <h3 className="font-serif font-bold text-xl mb-4">{item.title}</h3>
                                <p className="font-sans text-sm text-white/60 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Trust />

            <ImageGallery
                title="The Heritage Gallery"
                subtitle="A Legacy of Dedication"
                images={HERITAGE_GALLERY}
            />

            <Testimonials />

            <MapSection />

            <BookingCTA />
        </>
    )
}
