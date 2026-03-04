import { useEffect, useRef, useState } from 'react'
import { HiCake, HiGift, HiSparkles, HiHeart } from 'react-icons/hi'

const CATEGORIES = [
    {
        icon: HiCake,
        title: 'Decorated Dog Cookies',
        description: 'Fresh-baked, beautifully decorated treats using 100% human-consumable ingredients.',
    },
    {
        icon: HiHeart,
        title: 'Birthday Cakes',
        description: 'Custom birthday cakes for your pup — pre-order for gotcha days, birthdays, and celebrations.',
    },
    {
        icon: HiSparkles,
        title: 'All-Natural Treats & Chews',
        description: 'No fillers, no mystery ingredients. Just wholesome, high-quality snacks your pet will love.',
    },
    {
        icon: HiGift,
        title: 'Premium Products',
        description: 'Curated grooming essentials, stylish collars, interactive toys, and locally-made artisan finds.',
    },
]

export default function Bakery() {
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
            id="bakery"
            ref={sectionRef}
            className="py-24 md:py-40 relative overflow-hidden bg-[#fafafa]"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Interactive Imagery */}
                    <div className="relative group">
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_48px_80px_-16px_rgba(26,26,26,0.15)] border border-white/40">
                            <img
                                src="/images/bakery-dog-treats-1.webp"
                                alt="The Bone Bar"
                                className="w-full h-auto scale-[1.01] hover:scale-105 transition-transform duration-1000"
                                loading="lazy"
                            />
                        </div>
                        {/* Decorative background shape */}
                        <div className="absolute -top-12 -left-12 w-64 h-64 bg-charcoal/5 rounded-full blur-3xl -z-10" />

                        {/* Floating Artisan Quote */}
                        <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-6 glass-card p-6 md:p-10 border border-white max-w-[200px] md:max-w-xs shadow-2xl animate-float">
                            <span className="text-3xl md:text-4xl text-sage font-serif block mb-2 md:mb-4">“</span>
                            <p className="font-serif italic text-base md:text-lg text-charcoal leading-snug">
                                Artisan treats baked with love, for the pets we cherish.
                            </p>
                        </div>
                    </div>

                    {/* Right: Narrative Content */}
                    <div className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
                        <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-8 block">
                            The Artisan Boutique
                        </span>
                        <h2 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-charcoal mb-8 leading-[0.9] tracking-tighter">
                            Hand-Baked <br />
                            <span className="text-sage italic font-medium text-3xl sm:text-4xl md:text-6xl">With Love in Granville.</span>
                        </h2>

                        <p className="font-sans text-xl text-slate mb-12 leading-relaxed">
                            Our boutique is a curated sanctuary for the discerning pet parent. From human-grade artisan cookies to hand-selected accessories, we source only the finest for your pet.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {CATEGORIES.map((cat, idx) => {
                                const Icon = cat.icon
                                return (
                                    <div
                                        key={cat.title}
                                        className={`group cursor-pointer animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                                        style={{ transitionDelay: `${idx * 150}ms` }}
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage group-hover:bg-sage group-hover:text-white transition-all">
                                                <Icon size={18} />
                                            </div>
                                            <h4 className="font-serif font-bold text-xl text-charcoal group-hover:text-sage transition-colors">
                                                {cat.title}
                                            </h4>
                                        </div>
                                        <p className="font-sans text-sm text-slate leading-relaxed">
                                            {cat.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="pt-8 border-t border-charcoal/5 flex flex-col md:flex-row items-center gap-8">
                            <a href="https://pawpartner.com/pz/book?p=237080" target="_blank" rel="noopener noreferrer" className="btn-primary magnetic !px-12 w-full md:w-auto">
                                Book Appointment
                            </a>
                            <div className="text-center md:text-left">
                                <p className="font-sans text-xs font-black text-charcoal/40 uppercase tracking-widest mb-1">
                                    📍 Granville, Ohio
                                </p>
                                <p className="font-sans text-[10px] font-bold text-sage uppercase tracking-widest">
                                    Fresh Batches Daily
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Artisan Gallery Upgrade */}
                <div className="mt-20 md:mt-32 pt-16 md:pt-24 border-t border-charcoal/5">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
                        <div className="w-full md:w-auto">
                            <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-6 block">Visual Menu</span>
                            <h3 className="font-serif font-black text-4xl md:text-5xl text-charcoal">Artisan <span className="text-sage italic font-medium">Spotlight.</span></h3>
                        </div>
                        <p className="font-sans text-sm text-slate/50 max-w-xs mx-auto md:mx-0">Each treat is a handcrafted masterpiece, designed for health and celebration.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { src: "/images/Cookies-1.webp", label: "Decorated Bones" },
                            { src: "/images/cake.webp", label: "Custom Cakes" },
                            { src: "/images/Cookies-2.webp", label: "Seasonal Shapes" },
                            { src: "/images/bakery-dog-treats-1.webp", label: "Grain-Free Bites" },
                            { src: "/images/toys.webp", label: "Curated Toys" }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className={`group relative aspect-square w-[calc(50%-12px)] md:w-[calc(25%-18px)] lg:w-[calc(20%-20px)] rounded-[2rem] overflow-hidden bg-white shadow-xl transition-all duration-1000 delay-${idx * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <span className="font-sans text-[10px] font-black text-white uppercase tracking-widest">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
