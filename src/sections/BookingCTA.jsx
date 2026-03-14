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
                        <span className="font-sans text-[10px] font-black text-black/40 tracking-[0.5em] uppercase mb-10 block">
                            Join the Waitlist
                        </span>
                        <h2 className="font-serif font-black text-4xl md:text-7xl lg:text-[10rem] text-black mb-12 leading-[0.85] tracking-tighter">
                            The New <br />
                            <span className="text-black italic font-normal opacity-70">Standard.</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-6 mb-16">
                            <a
                                href="https://pawpartner.com/pz/book?p=237080"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-16 py-6 bg-black text-white rounded-sm font-sans text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black/80 hover:shadow-2xl transition-all duration-500"
                            >
                                Book Appointment
                            </a>
                            <a
                                href="tel:7405870011"
                                className="px-16 py-6 border border-black text-black rounded-sm font-sans text-[10px] font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-500"
                            >
                                Call: (740) 587-0011
                            </a>
                        </div>

                        {/* Trust Pins */}
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 pt-12 border-t border-black/5">
                            {[
                                "Safe & Sanitized",
                                "Certified Care",
                                "Local & Independent",
                                "RVT Owned"
                            ].map((pin) => (
                                <div key={pin} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                                    <span className="font-sans text-[10px] font-black text-black/40 uppercase tracking-widest">
                                        {pin}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-24 border-t border-black/5">
                    <div className="text-center">
                        <h4 className="font-sans text-[10px] font-black text-black/30 uppercase tracking-[0.3em] mb-6">Concierge</h4>
                        <p className="font-sans text-lg text-black font-black uppercase tracking-tight">(740) 587-0011</p>
                        <p className="font-sans text-sm text-black/60 font-medium">info@mybathandbiscuits.com</p>
                    </div>
                    <div className="text-center">
                        <h4 className="font-sans text-[10px] font-black text-black/30 uppercase tracking-[0.3em] mb-6">Registry</h4>
                        <p className="font-sans text-lg text-black font-black uppercase tracking-tight">75 Westgate Dr</p>
                        <p className="font-sans text-sm text-black/60 font-medium">Newark, OH 43055</p>
                    </div>
                    <div className="text-center">
                        <h4 className="font-sans text-[10px] font-black text-black/30 uppercase tracking-[0.3em] mb-6">Availability</h4>
                        <p className="font-sans text-lg text-black font-black uppercase tracking-tight">Mon – Fri, 9 — 5</p>
                        <p className="font-sans text-sm text-black/60 font-medium">Saturday, 9 — 12</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
