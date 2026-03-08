import { useEffect, useRef, useState } from 'react'


export default function About() {
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
            id="about"
            ref={sectionRef}
            className="py-24 md:py-32"
            style={{ background: 'linear-gradient(180deg, #FDF8F0 0%, #F5E6D3 100%)' }}
        >
            <div className="max-w-7xl mx-auto section-padding">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center gap-8 mb-10 overflow-hidden px-4">
                        <img
                            src="/images/award-1.webp"
                            alt="America's Coolest Store 2024 Winner"
                            className="h-20 md:h-28 w-auto grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100"
                        />
                        <img
                            src="/images/award-2.webp"
                            alt="PETS+ Magazine Featured Business"
                            className="h-20 md:h-28 w-auto grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100"
                        />
                    </div>
                    <span className="font-sans text-sm font-semibold text-gold tracking-widest uppercase mb-4 block">
                        Our Story
                    </span>
                    <h2 className="font-serif font-bold text-section-mobile md:text-section text-charcoal mb-6 text-balance">
                        Meet the Family Behind Bath & Biscuits
                    </h2>
                </div>

                {/* Who is Bath & Biscuits? - Expanded Narrative */}
                <div
                    className={`glass-card p-8 md:p-16 mb-24 border border-sage/10 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Danielle's Photo */}
                        <div className="w-full lg:w-2/5 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-sage/20 relative group sticky top-32">
                            <img
                                src="/images/Danielle.webp"
                                alt="Danielle Wilson - Owner of Bath & Biscuits"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-60" />
                        </div>

                        <div className="lg:w-3/5">
                            <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-6 block">Our Founder</span>
                            <h3 className="font-serif font-bold text-4xl text-charcoal mb-8">Who is Bath & Biscuits?</h3>

                            <div className="space-y-6 font-sans text-base text-slate leading-relaxed">
                                <p>
                                    My name is <span className="text-charcoal font-bold">Danielle Wilson</span>. I opened Bath & Biscuits in 2009 in Granville (Licking County). In 2025, we moved to our current location in Newark, which allowed us to expand our boutique and bakery, and gave us the much-needed room for our growing salon.
                                </p>
                                <p>
                                    I grew up in a family that love animals. I was always bringing stray animals home, volunteering at local veterinary hospitals or working at the Columbus Zoo. I attended The Ohio State University to study animal husbandry and then graduated from Columbus State as a Registered Veterinary Technician.
                                </p>
                                <p>
                                    I learned to groom as a RVT and then became certified in both dog and cat grooming. In 2009 I opened Bath & Biscuits to offer quality spa services and wholesome pet food to the Newark and Licking County area. My Pomeranian, Fia inspires me every day to provide the best for all my furry clients and seek out the safest, most natural way to groom them. I love to groom cats too and help them feel better with clean coats and skin.
                                </p>
                                <p>
                                    I support local animal rescue, including <span className="text-sage font-bold">Whiskers Animal Rescue of Ohio</span> which focuses on cat rescue. My husband Mike and I foster kittens for Whiskers throughout the year. I also support <span className="text-charcoal font-bold italic">Ethical Dog Breeders</span> who make it their life's passion to learn about the history of their breed, canine health, genetics and structure.
                                </p>
                            </div>

                            <div className="mt-12 pt-10 border-t border-sage/10 flex items-center gap-6">
                                <div className="text-left">
                                    <p className="font-serif italic text-xl text-charcoal">Danielle Wilson</p>
                                    <p className="font-sans text-[10px] uppercase tracking-widest text-sage font-bold">Owner · RVT · Certified Groomer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Press Spotlight: PETS+ July-August 2024 */}
                <div className={`max-w-4xl mx-auto mb-32 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="p-10 rounded-[3rem] bg-charcoal text-white relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="px-4 py-1.5 rounded-full bg-sage/20 text-sage font-sans text-[10px] font-bold uppercase tracking-widest border border-sage/20">
                                    Industry Recognition
                                </span>
                                <span className="text-white/30 font-sans text-[10px] uppercase tracking-widest">July / August 2024</span>
                            </div>

                            <h3 className="font-serif text-3xl md:text-4xl mb-8 leading-tight">
                                Featured in <span className="italic text-sage">PETS+ Magazine</span> as part of America's Coolest Contest
                            </h3>

                            <blockquote className="font-serif italic text-xl md:text-2xl text-white/80 mb-10 pl-8 border-l-2 border-sage/30">
                                "Danielle Wilson puts a unique spin on the grooming salon and boutique concept, infusing her personal style and love for each pet into a successful business."
                            </blockquote>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href="https://petsplusmag.com/danielle-wilson-does-it-her-way-with-bath-biscuits/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-sage text-white rounded-2xl font-sans text-xs font-bold uppercase tracking-widest hover:bg-sage/80 transition-all text-center"
                                >
                                    Read Profile Feature
                                </a>
                                <a
                                    href="https://petsplusmag.com/meet-the-winners-of-2024s-pets-americas-coolest-contest/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-sans text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center"
                                >
                                    America's Coolest Winners
                                </a>
                            </div>
                        </div>

                        {/* Background Decorative Element */}
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transform translate-x-12 -translate-y-12">
                            <span className="font-serif text-[15rem] leading-none">"</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
