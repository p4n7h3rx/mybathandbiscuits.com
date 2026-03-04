import { useState, useEffect, useRef, useCallback } from 'react'
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const TESTIMONIALS = [
    {
        text: "Always a pleasant experience coming here, my dog is always happy before and after her cleaning which is a big plus as well. She always comes out looking and smelling great, it's easy to tell that the staff takes great pride in their work.",
        author: 'John Taylor (Google)',
        stars: 5,
    },
    {
        text: "AMAZING dog groomers!!! Super professional, always polite, AMAZING with my two adult goldendoodles who look gorgeous every.single.time! Highly highly recommended!",
        author: 'Patty (Google)',
        stars: 5,
    },
    {
        text: "Brilliant job, Ted went in looking like a yeti. He came out very debonair. I highly recommend this dog groomer's. Very understanding of your dog's needs. Excellent job.",
        author: 'Diane Berry (Trustpilot)',
        stars: 5,
    },
    {
        text: "The folks at B&B always send him home looking great, even when he's being a grumpy old man. Our dog has developed behavioral issues as he's aged and grooming him can be tricky. Highly recommend!!!",
        author: 'J Hutchison (Google)',
        stars: 5,
    },
    {
        text: "Leo has alopecia and the Theraclean baths have been great at growing new hair. His skin is soft and he smells like a dream. We love bath and biscuits. They do a great job.",
        author: 'Frankie Folk (Google)',
        stars: 5,
    },
    {
        text: "Our senior golden retriever (9) has been coming here for almost a year. They have a golden buckeye program for senior dogs where they get special treatment to be as gentle as possible.",
        author: 'Bri Nauman (Google)',
        stars: 5,
    },
]

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)
    const intervalRef = useRef(null)

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

    const startAutoPlay = useCallback(() => {
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
        }, 5000)
    }, [])

    useEffect(() => {
        startAutoPlay()
        return () => clearInterval(intervalRef.current)
    }, [startAutoPlay])

    const goTo = (index) => {
        clearInterval(intervalRef.current)
        setActiveIndex(index)
        startAutoPlay()
    }

    const prev = () => goTo((activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    const next = () => goTo((activeIndex + 1) % TESTIMONIALS.length)

    const current = TESTIMONIALS[activeIndex]

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            className="py-32 md:py-48 bg-charcoal relative overflow-hidden"
        >
            {/* Background Narrative Elements */}
            <div className="absolute top-20 left-10 text-[30rem] font-serif font-black text-white/[0.02] leading-none select-none pointer-events-none">
                “
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-24">
                    <span className="font-sans text-xs font-bold text-sage tracking-[0.5em] uppercase mb-8 block">
                        Guest Journals
                    </span>
                    <h2 className="font-serif italic font-medium text-4xl md:text-6xl text-white">
                        Stories of Care & Trust
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="min-h-[300px] md:min-h-[400px] flex flex-col justify-center items-center text-center">
                        <p className="font-serif text-xl sm:text-2xl md:text-5xl text-white/90 leading-[1.2] mb-16 tracking-tight transition-all duration-700 ease-out">
                            {current.text}
                        </p>

                        <div className="flex flex-col items-center gap-4">
                            <div className="flex gap-1.5 mb-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <HiStar key={i} className="text-sage" size={16} />
                                ))}
                            </div>
                            <h4 className="font-sans text-xs font-black tracking-[0.3em] uppercase text-white/40">
                                — {current.author}
                            </h4>
                        </div>
                    </div>

                    {/* Navigation - Minimalist */}
                    <div className="flex items-center justify-center gap-12 mt-24">
                        <button
                            onClick={prev}
                            className="group flex items-center gap-4 text-white/30 hover:text-white transition-all cursor-pointer magnetic"
                        >
                            <span className="text-[10px] font-sans font-black tracking-widest uppercase">Prev</span>
                            <span className="w-12 h-[1px] bg-white/20 group-hover:bg-white group-hover:w-20 transition-all duration-500" />
                        </button>

                        <div className="flex gap-4">
                            {TESTIMONIALS.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goTo(index)}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 cursor-pointer ${index === activeIndex ? 'bg-sage scale-150' : 'bg-white/10'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="group flex items-center gap-4 text-white/30 hover:text-white transition-all cursor-pointer magnetic"
                        >
                            <span className="w-12 h-[1px] bg-white/20 group-hover:bg-white group-hover:w-20 transition-all duration-500" />
                            <span className="text-[10px] font-sans font-black tracking-widest uppercase">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
