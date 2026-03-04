import { useEffect, useRef, useState } from 'react'
import { HiPhone, HiMail, HiClock, HiLocationMarker } from 'react-icons/hi'

export default function BookingCTA() {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.15 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="booking"
            ref={sectionRef}
            className="py-32 md:py-48 relative overflow-hidden bg-white"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center w-full">
                    <div className="lg:col-span-12 text-center flex flex-col items-center">
                        <span className="font-sans text-xs font-bold text-sage tracking-[0.5em] uppercase mb-10 block">
                            Join the Waitlist
                        </span>
                        <h2 className="font-serif font-black text-4xl md:text-6xl lg:text-[7rem] text-charcoal mb-12 leading-[0.85] tracking-tighter">
                            The New Standard <br />
                            <span className="text-sage italic font-medium">Of Pet Wellness.</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-6 mb-16">
                            <a
                                href="https://pawpartner.com/pz/book?p=237080"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-12 py-5 bg-charcoal text-white rounded-full font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-sage hover:shadow-2xl hover:shadow-sage/20 transition-all duration-500"
                            >
                                Book Appointment
                            </a>
                            <a
                                href="tel:7405870011"
                                className="px-12 py-5 border-2 border-charcoal text-charcoal rounded-full font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-charcoal hover:text-white transition-all duration-500"
                            >
                                Call: (740) 587-0011
                            </a>
                        </div>

                        {/* Trust Pins */}
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-12 border-t border-charcoal/5">
                            {[
                                "Safe & Sanitized",
                                "Certified Care",
                                "Local & Independent",
                                "RVT Owned"
                            ].map((pin) => (
                                <div key={pin} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-sage" />
                                    <span className="font-sans text-[10px] font-black text-charcoal/40 uppercase tracking-widest">
                                        {pin}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-24 border-t border-charcoal/5">
                    <div className="text-center">
                        <h4 className="font-sans text-[10px] font-black text-charcoal/30 uppercase tracking-[0.3em] mb-6">Concierge</h4>
                        <p className="font-sans text-lg text-charcoal font-bold">(740) 587-0011</p>
                        <p className="font-sans text-sm text-slate">info@mybathandbiscuits.com</p>
                    </div>
                    <div className="text-center">
                        <h4 className="font-sans text-[10px] font-black text-charcoal/30 uppercase tracking-[0.3em] mb-6">Registry</h4>
                        <p className="font-sans text-lg text-charcoal font-bold">75 Westgate Dr</p>
                        <p className="font-sans text-sm text-slate">Newark, OH 43055</p>
                    </div>
                    <div className="text-center">
                        <h4 className="font-sans text-[10px] font-black text-charcoal/30 uppercase tracking-[0.3em] mb-6">Availability</h4>
                        <p className="font-sans text-lg text-charcoal font-bold">Mon – Fri, 9 — 5</p>
                        <p className="font-sans text-sm text-slate">Saturday, 9 — 12</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
