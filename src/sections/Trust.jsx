import { useEffect, useRef, useState } from 'react'
import { HiShieldCheck, HiStar, HiClock, HiAcademicCap } from 'react-icons/hi'

const STATS = [
    { icon: HiClock, number: '15+', label: 'Years of Experience', suffix: '' },
    { icon: HiStar, number: '5', label: 'Star Reviews', suffix: '★' },
    { icon: HiShieldCheck, number: '100', label: 'Pet CPR & First Aid Certified', suffix: '%' },
    { icon: HiAcademicCap, number: '2', label: 'Certified Groomers (Dog & Cat)', suffix: '' },
]

const TRUST_POINTS = [
    'All staff trained in Pet CPR & First Aid',
    'Thorough coat & skin check before every session',
    'Up-to-date vaccinations required for all pets',
    'Natural, detergent-free grooming products',
    'One-on-one attention — no assembly lines',
    'Registered Veterinary Technician on staff',
]

function AnimatedCounter({ target, suffix = '' }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    const num = parseInt(target)
                    if (isNaN(num)) {
                        setCount(target)
                        return
                    }
                    const duration = 2000
                    const steps = 60
                    const stepTime = duration / steps
                    const increment = num / steps
                    let current = 0
                    const timer = setInterval(() => {
                        current += increment
                        if (current >= num) {
                            setCount(num)
                            clearInterval(timer)
                        } else {
                            setCount(Math.floor(current))
                        }
                    }, stepTime)
                }
            },
            { threshold: 0.5 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target])

    return (
        <span ref={ref} className="gold-text font-serif font-bold text-4xl md:text-5xl">
            {count}{suffix}
        </span>
    )
}

export default function Trust() {
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
        <section ref={sectionRef} className="py-24 md:py-40 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Header */}
                <div className="text-center mb-24">
                    <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-8 block">
                        Our Heritage
                    </span>
                    <h2 className="font-serif font-black text-4xl md:text-6xl text-charcoal mb-8 leading-[0.9] tracking-tighter">
                        Why We Are <br />
                        <span className="text-sage italic font-medium">A Class Above.</span>
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-32 border-y border-charcoal/5 py-16">
                    {STATS.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <div
                                key={stat.label}
                                className="text-center group"
                            >
                                <div className="mb-6 flex justify-center">
                                    <Icon className="text-sage/40 group-hover:text-sage transition-colors" size={24} />
                                </div>
                                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                                <p className="font-sans text-[10px] font-black text-charcoal/30 uppercase tracking-[0.2em] mt-3">
                                    {stat.label}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* Safety Promise Narrative */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
                        <h3 className="font-serif font-bold text-4xl text-charcoal mb-8">
                            Our Commitment to <br />Experienced Care
                        </h3>
                        <p className="font-sans text-lg text-slate leading-relaxed mb-10">
                            Unlike traditional grooming salons, we combine years of medical knowledge from our veterinary background with a love for grooming. Your pet is treated like a member of our family.
                        </p>

                        <div className="space-y-8 mb-12">
                            {[
                                { title: "Pet-Safe Sanitation", desc: "We utilize strictly pet-safe disinfectants and thoughtful protocols to ensure a clean and healthy environment for every pet." },
                                { title: "Stress-Reduction Techniques", desc: "Our handling techniques are rooted in fear-free principles, prioritizing your pet's comfort and emotional well-being." },
                                { title: "Continuous Health Awareness", desc: "We keep an eye on skin, coat, and behavior across visits to notice any changes in your pet’s needs." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                                    <div>
                                        <h4 className="font-serif font-bold text-lg text-charcoal mb-1">{item.title}</h4>
                                        <p className="font-sans text-sm text-slate opacity-70 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-sage/5 rounded-[2rem] p-10 border border-sage/10">
                            <p className="font-serif italic text-xl text-sage">
                                “The safety of our pets is non-negotiable. We perform a coat and skin check at the start of every appointment to ensure your pet is comfortable and ready.”
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {TRUST_POINTS.map((point, idx) => (
                            <div
                                key={point}
                                className={`flex items-center gap-6 p-6 glass-card border border-white/40 hover:border-sage/20 transition-all group animate-on-scroll ${isVisible ? 'is-visible' : ''}`}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage group-hover:bg-sage group-hover:text-white transition-all">
                                    <HiShieldCheck size={20} />
                                </div>
                                <span className="font-sans text-sm font-bold text-charcoal/70 tracking-tight">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
