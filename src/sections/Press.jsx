import { useRef, useEffect, useState } from 'react'

export default function Press() {
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
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="flex justify-center gap-8 md:gap-16 mb-12">
                        <img
                            src="/images/award-1.webp"
                            alt="America's Coolest Store 2024 Winner"
                            className="h-20 md:h-32 w-auto grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100"
                        />
                        <img
                            src="/images/award-2.webp"
                            alt="PETS+ Magazine Featured Business"
                            className="h-20 md:h-32 w-auto grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100"
                        />
                    </div>
                    <span className="font-sans text-[10px] font-black text-black/40 tracking-[0.4rem] uppercase mb-8 block">
                        National Recognition
                    </span>
                    <h2 className="font-serif font-black text-4xl md:text-8xl text-black leading-[0.8] tracking-tighter mb-10 max-w-4xl">
                        Voted One of <br />
                        <span className="text-black italic font-normal opacity-70">America's Coolest Pet Salons.</span>
                    </h2>
                </div>

                <div className={`glass-card p-10 md:p-20 bg-black text-white relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-12">
                            <div className="mb-12 flex items-center gap-4">
                                <span className="w-12 h-[1px] bg-white/20" />
                                <span className="font-sans text-[10px] font-black uppercase tracking-widest text-white/40">Featured in PETS+ Magazine</span>
                            </div>

                            <blockquote className="font-serif italic text-3xl md:text-4xl text-white/90 leading-tight mb-12">
                                "Danielle Wilson puts a unique spin on the grooming salon and boutique concept, infusing her personal style and love for each pet into a successful business."
                            </blockquote>

                            <div className="flex flex-col sm:flex-row gap-8">
                                <a
                                    href="https://petsplusmag.com/danielle-wilson-does-it-her-way-with-bath-biscuits/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary !px-12"
                                >
                                    Read Profile Feature
                                </a>
                                <a
                                    href="https://petsplusmag.com/meet-the-winners-of-2024s-pets-americas-coolest-contest/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-8 py-4 font-sans font-black text-white text-[10px] tracking-widest uppercase border border-white/20 rounded-sm hover:bg-white/5 transition-all text-center"
                                >
                                    Meet the Winners
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Background Quote Mark */}
                    <div className="absolute -bottom-10 -right-5 opacity-5 pointer-events-none transform translate-y-12">
                        <span className="font-serif text-[30rem] leading-none">"</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
