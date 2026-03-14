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
        <section ref={sectionRef} className="py-24 md:py-40 bg-white overflow-hidden border-t border-black/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    {/* Visual Side */}
                    <div className="lg:w-1/2 relative">
                        <div className={`aspect-square rounded-sm overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 -rotate-2'}`}>
                            <img
                                src="/images/cats.webp"
                                alt="Cat Rescue Newark Ohio - Bath & Biscuits Community"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className={`absolute -bottom-4 -right-2 md:-bottom-10 md:-right-10 bg-black text-white p-6 md:p-12 rounded-sm shadow-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <HiHeart className="mb-2 md:mb-4 text-2xl md:text-4xl text-white/40" />
                            <p className="font-serif text-lg md:text-3xl leading-[1.1] tracking-tight">
                                Proud Partners of <br />
                                <span className="font-black underline decoration-white/20 uppercase">Whiskers Rescue</span>
                            </p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <span className="font-sans text-[10px] font-black text-black/40 tracking-[0.4rem] uppercase mb-8 block">
                            Community Impact
                        </span>
                        <h2 className="font-serif font-black text-4xl md:text-8xl text-black leading-[0.8] tracking-tighter mb-10">
                            Hearts for <br />
                            <span className="text-black italic font-normal opacity-70">Local Rescue.</span>
                        </h2>
                        <div className="space-y-6 font-sans text-lg text-black/70 leading-relaxed mb-12 font-medium">
                            <p>
                                At Bath & Biscuits, our love for animals extends far beyond our salon doors. We are dedicated supporters of local animal rescue missions.
                            </p>
                            <p>
                                We work closely with <span className="text-black font-black underline decoration-black/20 uppercase tracking-tight">Whiskers Animal Rescue of Ohio</span>, focusing on the rehabilitation and rehoming of cats. Our founder Danielle and her husband Mike foster kittens throughout the year, providing a safe haven before they find their forever homes.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-12">
                            <div>
                                <h4 className="font-serif font-black text-2xl text-black mb-2 uppercase tracking-tight">Foster Care</h4>
                                <p className="font-sans text-sm text-black/60 font-normal">Providing sanctuary for over dozens of kittens annually.</p>
                            </div>
                            <div>
                                <h4 className="font-serif font-black text-2xl text-black mb-2 uppercase tracking-tight">Local Events</h4>
                                <p className="font-sans text-sm text-black/60 font-normal">Sponsoring and participating in community-centered celebrations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
