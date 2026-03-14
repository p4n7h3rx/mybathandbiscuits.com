import { useEffect, useRef, useState } from 'react'
import { HiShieldCheck, HiOutlineSupport, HiSparkles, HiBeaker } from 'react-icons/hi'

const BENEFITS = [
    {
        icon: HiShieldCheck,
        title: 'Chemical-Free Purity',
        text: 'Zero harsh shampoos or synthetic detergents. We use billions of microscopic bubbles to deep-clean naturally.',
    },
    {
        icon: HiBeaker,
        title: 'Dermatological Relief',
        text: 'Proven to alleviate chronic hot spots, yeast infections, and dermatitis by flushing out deep-seated bacteria.',
    },
    {
        icon: HiSparkles,
        title: 'Molecular Odor Control',
        text: 'Microbubbles penetrate the pores to remove odor at the molecular source—never masking with fragrance.',
    },
    {
        icon: HiOutlineSupport,
        title: 'Allergic Desensitization',
        text: 'Instantly removes embedded allergens, dander, and environmental irritants for lasting skin comfort.',
    },
]

export default function TheraClean() {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="theraclean"
            className="py-24 md:py-40 relative overflow-hidden bg-white"
        >
            {/* Immersive Background Narrative */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden select-none opacity-5">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-serif font-black text-black/20 whitespace-nowrap rotate-12">
                    WELLNESS
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Main Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-40">
                    <div className="sticky top-32">
                        <span className="font-sans text-[10px] font-black text-black/40 tracking-[0.4rem] uppercase mb-8 block">
                            Gentle Therapy
                        </span>
                        <h2 className="font-serif font-black text-4xl md:text-8xl text-black mb-8 leading-[0.8] tracking-tighter">
                            The Science <br />
                            <span className="text-black italic font-normal opacity-70">Of Pure Clean.</span>
                        </h2>

                        <div className="space-y-10 mt-12">
                            <p className="font-sans text-xl text-slate max-w-xl leading-relaxed">
                                Our Thera-Clean® system is a therapeutic sanctuary for your pet's skin.
                                Using only water and billions of oxygen-rich microbubbles, we reach the depths where standard grooming simply cannot.
                            </p>

                            <div className="flex flex-col gap-8">
                                <div className={`flex items-start gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                                    <div className="w-12 h-12 rounded-sm bg-black text-white flex items-center justify-center shrink-0 shadow-lg group">
                                        <HiShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-black text-xl text-black">RVT Recommended Protocol</h4>
                                        <p className="font-sans text-sm text-slate mt-1 leading-relaxed">Proven to reduce inflammation and accelerate dermatological healing.</p>
                                    </div>
                                </div>
                                <div className={`flex items-start gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                                    <div className="w-12 h-12 rounded-sm bg-black text-white flex items-center justify-center shrink-0 shadow-lg group">
                                        <HiBeaker size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-serif font-black text-xl text-black">Hypoallergenic Standard</h4>
                                        <p className="font-sans text-sm text-slate mt-1 leading-relaxed">A strictly chemical-free environment, essential for senior pets and sensitive coats.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <a href="https://pawpartner.com/pz/book?p=237080" className="btn-primary magnetic !px-12">
                                Reserve Treatment
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Hero Image Container */}
                        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_64px_120px_-32px_rgba(26,26,26,0.3)] border border-white/20">
                                <img
                                    src="/images/Grooming-spray-1.webp"
                                    alt="Thera-Clean Microbubble System"
                                    className="w-full h-auto hover:scale-105 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>

                            {/* Floating Authority Badge */}
                            <div className="absolute -top-6 -right-2 md:-top-10 md:-right-6 bg-white p-4 md:p-8 border border-black/10 shadow-2xl max-w-[140px] md:max-w-[200px] animate-float rounded-sm">
                                <div className="text-black/40 mb-2 md:mb-4"><HiSparkles size={24} className="md:w-[32px] md:h-[32px]" /></div>
                                <p className="font-sans text-[8px] md:text-[10px] font-black uppercase tracking-widest text-black/40 leading-tight">
                                    Trusted By Pet Parents Nationwide
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefit Cards Full-Width Horizontal Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
                    {BENEFITS.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <div
                                key={benefit.title}
                                className={`bg-white p-10 border border-black/5 hover:border-black/20 transition-all duration-700 rounded-sm shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="text-black/40 mb-6 font-black"><Icon size={28} /></div>
                                <h4 className="font-serif font-black text-xl text-black mb-3 uppercase tracking-tight">{benefit.title}</h4>
                                <p className="font-sans text-sm text-black/60 leading-relaxed font-normal">{benefit.text}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Microscopic Comparison Visual */}
                <div className={`mt-24 p-12 md:p-24 rounded-sm bg-black text-white relative overflow-hidden transition-all duration-1000 shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="font-sans text-[10px] font-black text-white/40 uppercase tracking-widest mb-6 block">The Competitive Edge</span>
                            <h3 className="font-serif font-black text-4xl md:text-7xl mb-8 leading-[0.9] tracking-tighter">
                                Standard Bathing vs. <br />
                                <span className="text-white italic font-normal opacity-70">Thera-Clean® Power</span>
                            </h3>
                            <p className="font-sans text-lg text-white/60 mb-10 leading-relaxed">
                                Traditional baths only reach the surface. Thera-Clean microbubbles (at 10 microns) are small enough to penetrate deep into pores and follicles to lift bacteria and allergens out.
                            </p>
                            <div className="flex flex-wrap items-center gap-8 md:gap-12">
                                <div className="text-center">
                                    <p className="text-3xl md:text-4xl font-serif font-black text-white mb-2 leading-none">10μ</p>
                                    <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 font-black">Bubble Size</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl md:text-4xl font-serif font-black text-white mb-2 leading-none">0%</p>
                                    <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 font-black">Chemicals</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl md:text-4xl font-serif font-black text-white mb-2 leading-none">100%</p>
                                    <p className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 font-black">Pure Oxygen</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-square py-12 flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse" />
                            <div className="absolute inset-12 rounded-full border border-white/10 animate-reverse-spin" />
                            <div className="relative z-10 w-48 h-48 rounded-full bg-white/10 backdrop-blur-3xl flex items-center justify-center border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.05)]">
                                <HiSparkles size={64} className="text-white/40 animate-float" />
                            </div>
                        </div>
                    </div>

                    {/* Decorative Abstract Background */}
                    <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none transform translate-x-24 -translate-y-24">
                        <span className="font-serif text-[40rem] leading-none">○</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
