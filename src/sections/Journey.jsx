import { useRef, useEffect, useState } from 'react'

const STEPS = [
    {
        number: '01',
        title: 'Coat & Skin Check',
        description: 'Every session begins with a gentle grooming greeting and skin check to ensure your pet is happy and comfortable.',
        detail: 'Skin, coat, and wellness check.'
    },
    {
        number: '02',
        title: 'Gentle Spa Treatment',
        description: 'Using natural, detergent-free products and therapeutic methods like Thera-Clean® for a superior, healthy cleanse.',
        detail: 'Tailored to breed and skin type.'
    },
    {
        number: '03',
        title: 'Master Styling',
        description: 'Our certified groomers craft unique styles that highlight your pet\'s character while maintaining breed standards.',
        detail: 'Hand-styled finishing & accessories.'
    }
]

export default function Journey() {
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
        <section ref={sectionRef} className="py-24 md:py-40 bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl">
                        <span className="font-sans text-[10px] font-black text-white/40 tracking-[0.4rem] uppercase mb-8 block">
                            Service Standard
                        </span>
                        <h2 className="font-serif font-black text-4xl md:text-8xl leading-[0.8] tracking-tighter">
                            The Elite <br />
                            <span className="text-white italic font-normal opacity-70">Grooming Journey.</span>
                        </h2>
                    </div>
                    <p className="font-sans text-lg text-white/40 max-w-sm mb-4 font-medium italic">
                        We've redefined the grooming process to prioritize pet comfort and experienced care at every step.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[1px] bg-white/10" />

                    {STEPS.map((step, idx) => (
                        <div
                            key={step.number}
                            className={`relative transition-all duration-1000 delay-${idx * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                        >
                            <div className="w-20 h-20 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center mb-10 relative z-10 transition-colors duration-500">
                                <span className="font-serif text-3xl text-white/40 font-black">{step.number}</span>
                            </div>
                            <h3 className="font-serif font-black text-2xl mb-6 uppercase tracking-tight">{step.title}</h3>
                            <p className="font-sans text-white/60 leading-relaxed mb-8 font-normal">
                                {step.description}
                            </p>
                            <div className="pt-8 border-t border-white/10">
                                <span className="font-sans text-[10px] uppercase tracking-widest text-white font-black">Focus</span>
                                <p className="font-sans text-sm mt-3 text-white/40 font-medium italic">{step.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
