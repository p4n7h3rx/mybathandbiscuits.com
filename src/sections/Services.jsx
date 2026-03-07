import { useEffect, useRef } from 'react'
import { HiSparkles, HiScissors, HiHeart } from 'react-icons/hi'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
    {
        id: 'luxury-grooming',
        icon: HiScissors,
        title: 'Luxury Grooming',
        subtitle: 'Thoughtful Styling & Gentle Care',
        image: '/images/Grooming-1.webp',
        description:
            'A quiet, comfortable space where experienced hands and gentle handling come together. Every grooming session is tailored to your pet’s coat, comfort level, and individual needs.',
        features: [
            'HydroLux™ Therapeutic Bathing',
            'Elite Breed-Standard Styling',
            'Luxury Bubble Pawdicures',
            'Soothing Facial Treatment',
            'Advanced Deshedding Treatment',
            'Signature Finishing Spritz',
        ],
        badges: ['RVT Led', 'Fear-Free Certification'],
        accent: 'gold',
    },
    {
        id: 'theraclean',
        icon: HiSparkles,
        title: 'Thera-Clean® Microbubble Spa',
        subtitle: 'Deep Cleanse for a Healthy Coat',
        image: '/images/Grooming-spray-1.webp',
        description:
            'The industry gold standard for skin health. Using only water and billions of microscopic bubbles, we penetrate deep into pores to eliminate allergens and odors without harsh chemicals.',
        features: [
            'Billions of Oxygen-Rich Bubbles',
            '100% Chemical-Free Scalpels',
            'Hypoallergenic Deep Cleanse',
            'Dermatological Allergy Relief',
            'Advanced Odor Elimination',
            'RVT-Recommended Therapy',
        ],
        badges: ['National Recognition', 'Clinical Therapy'],
        accent: 'sage',
        featured: true,
    },
    {
        id: 'cat-grooming',
        icon: HiHeart,
        title: 'Feline Specialization',
        subtitle: 'Calm, Expert-Led Cat Care',
        image: '/images/cats.webp',
        description:
            'Our certified feline specialists provide a quiet, stress-free environment designed exclusively for the delicate needs of cats. From master lion cuts to therapeutic bathing, your cat is in expert hands.',
        features: [
            'Experienced Cat Groomers',
            'Exclusive Cat-Only Quiet Zone',
            'Comfortable Lion Cuts & De-matting',
            'Stress-Reduced Hydro Bathing',
            'Coat & Skin Checks',
            'Gentle Claw & Ear Wellness',
        ],
        badges: ['Feline Safety Certified', 'Master Groomers'],
        accent: 'blush',
    },
]

export default function Services() {
    const sectionRef = useRef(null)
    const triggerRef = useRef(null)

    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            const pin = gsap.fromTo(
                sectionRef.current,
                { translateX: 0 },
                {
                    translateX: "-300vw",
                    ease: "none",
                    duration: 1,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: "3000 top",
                        scrub: 0.6,
                        pin: true,
                        anticipatePin: 1,
                    }
                }
            )
            return () => pin.kill();
        });

        return () => mm.revert();
    }, [])

    return (
        <section id="services" className="w-full overflow-hidden bg-[#FDF8F0]">
            <div ref={triggerRef}>
                <div ref={sectionRef} className="lg:h-screen w-full lg:w-[400vw] flex flex-col lg:flex-row relative">
                    {/* Intro Panel */}
                    <div className="h-[70vh] lg:h-screen w-full lg:w-screen relative flex items-start justify-center overflow-hidden pt-12 md:pt-16 lg:pt-16">
                        <img
                            src="/images/store exterior.webp"
                            className="absolute inset-0 w-full h-full object-cover opacity-20"
                            alt="Bath & Biscuits Exterior"
                        />
                        <div className="relative z-10 max-w-5xl px-6 md:px-24">
                            <span className="font-sans text-[10px] md:text-xs font-bold text-sage tracking-[0.4rem] uppercase mb-6 md:mb-8 block">
                                Portfolio of Services
                            </span>
                            <h2 className="font-serif font-black text-4xl md:text-[6rem] text-charcoal mb-6 md:mb-10 leading-[0.9] tracking-tighter">
                                Excellence <br />
                                <span className="text-sage italic font-medium">In Every Detail.</span>
                            </h2>
                            <p className="font-sans text-lg md:text-xl text-slate max-w-xl leading-relaxed opacity-80">
                                Where experienced hands and thoughtful care come together. We’ve defined a standard of grooming that prioritizes your pet’s comfort and happiness.
                            </p>
                            <div className="mt-10 md:mt-16 flex items-center gap-6">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white bg-champagne overflow-hidden shadow-xl">
                                            <img src={`/images/Grooming-${i === 3 ? 1 : i}.webp`} alt="Happy client" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-charcoal/40">
                                    <p className="font-sans text-[8px] md:text-[10px] font-black uppercase tracking-widest leading-none mb-1">Trusted By</p>
                                    <p className="font-serif italic text-base md:text-lg leading-none">10,000+ Pets Groomed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services Loop */}
                    {SERVICES.map((service) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={service.id}
                                className="min-h-screen lg:h-screen w-full lg:w-screen flex flex-col relative group overflow-hidden py-24 lg:py-0 border-b border-sage/10 lg:border-none"
                                id={`service-${service.id}`}
                            >
                                {/* Immersive Background Layer */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={service.image}
                                        className="w-full h-full object-cover opacity-5 transition-transform duration-[3s] group-hover:scale-110"
                                        alt={service.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-white via-white/90 to-transparent" />
                                </div>

                                <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-24 gap-12 lg:gap-20">
                                    {/* Content Side */}
                                    <div className="w-full lg:w-2/5 mb-12 lg:mb-0">
                                        <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
                                            {service.badges.map(badge => (
                                                <span key={badge} className="px-3 py-1 rounded-full bg-sage/10 text-sage font-sans text-[9px] font-bold uppercase tracking-widest border border-sage/20">
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-charcoal text-white shadow-xl flex items-center justify-center mb-6 md:mb-8">
                                            <Icon size={28} className="md:w-[32px]" />
                                        </div>

                                        <h3 className="font-serif font-black text-4xl md:text-6xl text-charcoal mb-4 md:mb-6 leading-tight tracking-tighter">
                                            {service.title}
                                        </h3>

                                        <p className="font-sans text-base md:text-lg text-slate mb-8 md:mb-10 leading-relaxed max-w-md opacity-80">
                                            {service.description}
                                        </p>

                                        <a href="https://pawpartner.com/pz/book?p=237080" target="_blank" rel="noopener noreferrer" className="btn-primary magnetic !px-8 md:!px-10 py-3 md:!py-4 group text-[10px] md:text-xs text-warm-white self-start">
                                            <span>Reserve Session</span>
                                        </a>
                                    </div>

                                    {/* Features Side */}
                                    <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
                                        {service.features.map((feature, idx) => (
                                            <div
                                                key={feature}
                                                className="glass-card p-4 md:p-6 border border-sage/5 hover:border-sage/20 transition-all duration-500 group/item relative overflow-hidden"
                                            >
                                                <div className="mb-2 md:mb-3 flex justify-between items-center">
                                                    <span className="font-serif italic text-sage text-base md:text-lg opacity-50">0{idx + 1}</span>
                                                    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-sage/20 group-hover/item:bg-sage transition-colors" />
                                                </div>
                                                <h4 className="font-serif font-bold text-sm md:text-base text-charcoal mb-1">{feature}</h4>
                                                <div className="h-[1.5px] w-0 bg-sage transition-all duration-700 group-hover/item:w-8" />
                                            </div>
                                        ))}

                                        {service.featured && (
                                            <div className="sm:col-span-2 xl:col-span-3 mt-2 p-5 md:p-6 rounded-[2rem] bg-charcoal text-white relative overflow-hidden">
                                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                                                    <div className="text-center md:text-left">
                                                        <span className="font-sans text-[8px] md:text-[9px] font-black text-sage uppercase tracking-widest mb-0.5 block opacity-70">Premium Standard</span>
                                                        <h4 className="font-serif text-lg md:text-xl">America's Coolest Award Winner</h4>
                                                    </div>
                                                    <img src="/images/award-1.webp" className="h-8 md:h-10 w-auto brightness-0 invert opacity-40 hover:opacity-100 transition-opacity" alt="Award 1" />
                                                </div>
                                                <div className="absolute top-0 right-0 p-4 md:p-6 opacity-5 pointer-events-none transform translate-x-8 -translate-y-8">
                                                    <HiSparkles size={80} className="md:w-[100px]" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
