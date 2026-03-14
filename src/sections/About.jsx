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
            className="py-24 md:py-32 bg-white"
        >
            <div className="max-w-7xl mx-auto section-padding">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center gap-8 mb-10 overflow-hidden px-4">
                        <img
                            src="/images/award-1.webp"
                            alt="America's Coolest Store 2024 Winner"
                            className="h-20 md:h-28 w-auto grayscale transition-all duration-700 opacity-30 hover:opacity-100"
                        />
                        <img
                            src="/images/award-2.webp"
                            alt="PETS+ Magazine Featured Business"
                            className="h-20 md:h-28 w-auto grayscale transition-all duration-700 opacity-30 hover:opacity-100"
                        />
                    </div>
                    <span className="font-sans text-[10px] font-black text-black/40 tracking-[0.4rem] uppercase mb-4 block">
                        Our Story
                    </span>
                    <h2 className="font-serif font-black text-4xl md:text-7xl text-black mb-6 tracking-tighter leading-[0.9]">
                        Meet the Family <br />
                        <span className="text-black italic font-normal opacity-70">Behind Bath & Biscuits.</span>
                    </h2>
                </div>

                {/* Who is Bath & Biscuits? - Expanded Narrative */}
                <div
                    className={`p-8 md:p-16 mb-24 border border-black/5 max-w-6xl mx-auto transition-all duration-1000 bg-white shadow-sm rounded-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Danielle's Photo */}
                        <div className="w-full lg:w-2/5 aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border border-black/10 relative group sticky top-32">
                            <img
                                src="/images/Danielle.webp"
                                alt="Danielle Wilson - Owner of Bath & Biscuits"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                        </div>

                        <div className="lg:w-3/5">
                            <span className="font-sans text-[10px] font-black text-black/40 tracking-[0.4em] uppercase mb-6 block">Our Founder</span>
                            <h3 className="font-serif font-black text-4xl text-black mb-8 tracking-tight">Who is Bath & Biscuits?</h3>

                            <div className="space-y-6 font-sans text-base text-black/70 leading-relaxed font-medium">
                                <p>
                                    My name is <span className="text-black font-black">Danielle Wilson</span>. I opened Bath & Biscuits in 2009 in Granville (Licking County). In 2025, we moved to our current location in Newark, which allowed us to expand our boutique and bakery, and gave us the much-needed room for our growing salon.
                                </p>
                                <p>
                                    I grew up in a family that love animals. I was always bringing stray animals home, volunteering at local veterinary hospitals or working at the Columbus Zoo. I attended The Ohio State University to study animal husbandry and then graduated from Columbus State as a Registered Veterinary Technician.
                                </p>
                                <p>
                                    I learned to groom as a RVT and then became certified in both dog and cat grooming. In 2009 I opened Bath & Biscuits to offer quality spa services and wholesome pet food to the Newark and Licking County area. My Pomeranian, Fia inspires me every day to provide the best for all my furry clients and seek out the safest, most natural way to groom them. I love to groom cats too and help them feel better with clean coats and skin.
                                </p>
                                <p>
                                    I support local animal rescue, including <span className="text-black font-black">Whiskers Animal Rescue of Ohio</span> which focuses on cat rescue. My husband Mike and I foster kittens for Whiskers throughout the year. I also support <span className="text-black font-black italic">Ethical Dog Breeders</span> who make it their life's passion to learn about the history of their breed, canine health, genetics and structure.
                                </p>
                            </div>

                            <div className="mt-12 pt-10 border-t border-black/10 flex items-center gap-6">
                                <div className="text-left">
                                    <p className="font-serif italic text-2xl text-black font-normal">Danielle Wilson</p>
                                    <p className="font-sans text-[10px] uppercase tracking-widest text-black/40 font-black">Owner · RVT · Certified Groomer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Press Spotlight: PETS+ July-August 2024 */}
                <div className={`max-w-4xl mx-auto mb-32 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="p-10 rounded-sm bg-black text-white relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="px-4 py-1.5 rounded-sm bg-white/10 text-white font-sans text-[10px] font-black uppercase tracking-widest border border-white/20">
                                    Industry Recognition
                                </span>
                                <span className="text-white/30 font-sans text-[10px] font-black uppercase tracking-widest">July / August 2024</span>
                            </div>

                            <h3 className="font-serif font-black text-3xl md:text-5xl mb-8 leading-tight tracking-tight">
                                Featured in <span className="italic font-normal text-white/70">PETS+ Magazine</span> as part of America's Coolest Contest
                            </h3>

                            <blockquote className="font-serif italic text-xl md:text-2xl text-white/80 mb-10 pl-8 border-l border-white/20">
                                "Danielle Wilson puts a unique spin on the grooming salon and boutique concept, infusing her personal style and love for each pet into a successful business."
                            </blockquote>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <a
                                    href="https://petsplusmag.com/danielle-wilson-does-it-her-way-with-bath-biscuits/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white text-black rounded-sm font-sans text-[10px] font-black uppercase tracking-widest hover:bg-white/90 transition-all text-center"
                                >
                                    Read Profile Feature
                                </a>
                                <a
                                    href="https://petsplusmag.com/meet-the-winners-of-2024s-pets-americas-coolest-contest/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-sm font-sans text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all text-center"
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
