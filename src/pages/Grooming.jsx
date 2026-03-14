import Hero from '../sections/Hero'
import ServicesGrooming from '../sections/ServicesGrooming'
import GroomingProcess from '../sections/GroomingProcess'
import ClinicalSafety from '../sections/ClinicalSafety'
import GoogleReviews from '../sections/GoogleReviews'
import MapSection from '../sections/MapSection'
import TheraClean from '../sections/TheraClean'
import BookingCTA from '../sections/BookingCTA'
import ImageGallery from '../components/ImageGallery'
import { useEffect } from 'react'

const GROOMING_GALLERY = [
    { url: '/images/Grooming-1.webp', alt: 'Professional Dog Grooming Newark OH' },
    { url: '/images/Grooming-2.webp', alt: 'Small Dog Spa Licking County' },
    { url: '/images/bakery-2.webp', alt: 'Natural Dog Treats Newark' },
    { url: '/images/Groomin-spray-2.webp', alt: 'Dog Finishing Spritz Newark' },
    { url: '/images/Grooming-spray-1.webp', alt: 'Coat Therapy & Wellness OH' },
    { url: '/images/cats.webp', alt: 'Expert Cat Grooming Licking County' },
    { url: '/images/IMG_9244.webp', alt: 'Quality Pet Styling Newark' },
    { url: '/images/bakery-dog-treats-1.webp', alt: 'Natural Dog Rewards Newark' },
]

export default function Grooming() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Hero
                badge="Winner: America's Coolest 2024"
                titleLine1="The Elite Standard"
                titleLine2="For Licking County Pets"
                subtitle="Quality grooming, gentle handling, and thoughtful care. We provide a low-stress, one-on-one environment for your pet's complete well-being."
                videoSrc="/images/hero-grooming.mp4"
                primaryCTA={{ text: "Book Appointment", href: "https://pawpartner.com/pz/book?p=237080" }}
                secondaryCTA={{ text: "View Treatments", href: "#services-grooming" }}
            />

            <ServicesGrooming />

            <GroomingProcess />

            <section className="py-24 bg-white overflow-hidden border-t border-black/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="font-sans text-[10px] font-black text-black/40 tracking-[0.4rem] uppercase mb-8 block">Uncompromising Standards</span>
                        <h2 className="font-serif font-black text-4xl md:text-8xl text-black mb-8 leading-[0.8] tracking-tighter">
                            Quality Care <br /> Meets <span className="text-black italic font-normal opacity-70">Experienced Hands</span>
                        </h2>
                        <p className="font-sans text-lg text-black/70 mb-12 leading-relaxed font-medium">
                            Every pet deserves the same level of care we'd give our own. That's why we utilize pet-safe sanitation, state-of-the-art drying systems, and hydro-massage bathing for every visit.
                        </p>
                        <ul className="space-y-6 mb-12">
                            {[
                                "One-on-One Individualized Care",
                                "Pet-Safe UV Sanitation",
                                "AKC S.A.F.E. Certified Practices",
                                "Skin & Coat Check"
                            ].map(item => (
                                <li key={item} className="flex items-center gap-4 group">
                                    <div className="w-2 h-2 rounded-full bg-black/20 group-hover:bg-black transition-all" />
                                    <span className="font-sans font-black text-black/80 uppercase text-[10px] tracking-widest">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-sm overflow-hidden shadow-2xl relative group bg-black border border-black/5">
                        <video
                            id="grooming-video-player"
                            src="/images/grooming-video.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                    </div>
                </div>
            </section>

            <TheraClean />

            <ClinicalSafety />

            <GoogleReviews />

            <ImageGallery
                title="The Salon Gallery"
                subtitle="Captured Moments of Care"
                images={GROOMING_GALLERY}
            />

            <MapSection />

            <BookingCTA />
        </>
    )
}
