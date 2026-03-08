import { useEffect, useRef, useState } from 'react'

export default function SignatureMemories() {
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
        <section ref={sectionRef} className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="order-2 lg:order-1">
                        <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-8 block">The Boutique Connection</span>
                        <h2 className="font-serif font-black text-3xl sm:text-5xl text-charcoal mb-8 leading-tight">
                            Signature <span className="text-sage italic font-medium">Memories.</span>
                        </h2>
                        <p className="font-sans text-lg text-slate mb-10 leading-relaxed">
                            The transformation doesn't end at the grooming table. Our <span className="text-charcoal font-bold">Signature Photo Area</span> is where we celebrate the joyful culmination of every visit. It's a moment for your pet to shine, captured in our beautifully curated boutique environment—ready to be shared with friends, family, and our growing community of pet parents.
                        </p>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </span>
                                <span className="font-sans font-bold text-charcoal/80 uppercase text-[10px] tracking-widest">Complimentary Session Capture</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </span>
                                <span className="font-sans font-bold text-charcoal/80 uppercase text-[10px] tracking-widest">Special Celebration Layouts</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-[0_64px_120px_-32px_rgba(26,26,26,0.1)] border border-charcoal/5 group">
                            <img
                                src="/images/Photo area.webp"
                                alt="Signature Photo Area - Celebrating Grooming Excellence"
                                className="w-full h-auto group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
