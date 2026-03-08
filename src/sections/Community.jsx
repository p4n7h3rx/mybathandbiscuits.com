import { useRef, useEffect, useState } from 'react'
import { HiHeart } from 'react-icons/hi'

export default function Community() {
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
        <section ref={sectionRef} className="py-24 md:py-40 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    {/* Visual Side */}
                    <div className="lg:w-1/2 relative">
                        <div className={`aspect-square rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 -rotate-2'}`}>
                            <img
                                src="/images/cats.webp"
                                alt="Cat Rescue Newark Ohio - Bath & Biscuits Community"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className={`absolute -bottom-4 -right-2 md:-bottom-10 md:-right-10 bg-sage text-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <HiHeart className="mb-2 md:mb-4 text-2xl md:text-4xl" />
                            <p className="font-serif text-lg md:text-2xl leading-tight">
                                Proud Partners of <br />
                                <span className="font-bold underline decoration-white/20">Whiskers Rescue</span>
                            </p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-8 block">
                            Community Impact
                        </span>
                        <h2 className="font-serif font-black text-3xl sm:text-5xl md:text-7xl text-charcoal leading-[0.9] tracking-tighter mb-8">
                            Hearts for <br />
                            <span className="text-sage italic font-medium">Local Rescue.</span>
                        </h2>
                        <div className="space-y-6 font-sans text-lg text-slate leading-relaxed mb-12">
                            <p>
                                At Bath & Biscuits, our love for animals extends far beyond our salon doors. We are dedicated supporters of local animal rescue missions.
                            </p>
                            <p>
                                We work closely with <span className="text-charcoal font-bold underline decoration-sage/30">Whiskers Animal Rescue of Ohio</span>, focusing on the rehabilitation and rehoming of cats. Our founder Danielle and her husband Mike foster kittens throughout the year, providing a safe haven before they find their forever homes.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 border-t border-charcoal/5 pt-12">
                            <div>
                                <h4 className="font-serif font-bold text-2xl text-charcoal mb-2">Foster Care</h4>
                                <p className="font-sans text-sm text-slate opacity-60">Providing sanctuary for over dozens of kittens annually.</p>
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-2xl text-charcoal mb-2">Local Events</h4>
                                <p className="font-sans text-sm text-slate opacity-60">Sponsoring and participating in community-centered celebrations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
