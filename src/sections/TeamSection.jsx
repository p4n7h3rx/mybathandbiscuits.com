import { useEffect, useRef, useState } from 'react'

const TEAM_MEMBERS = [
    {
        name: 'Danielle Wilson',
        role: 'Owner & Lead Groomer',
        credentials: 'RVT · Certified Dog & Cat Groomer',
        bio: 'Registered Veterinary Technician with 15+ years of clinical and artisan grooming experience. Ohio State alumna.',
        image: '/images/Danielle.webp'
    },
    {
        name: 'Ash Butcher',
        role: 'General Manager',
        credentials: 'Hospitality Specialist',
        bio: 'Ensuring every pet and parent feels the unique boutique charm of Bath & Biscuits from the moment they enter.',
        image: '/images/team/Ash-Butcher-General-Manager.webp'
    },
    {
        name: 'Maureen Cantlebary',
        role: 'Dog Groomer & Stylist',
        credentials: 'Master Stylist',
        bio: 'Expert in breed-specific precision and creative styling, transforming every pet into a Granville standout.',
        image: '/images/team/Maureen-Cantlebary-Dog Groomer & Stylist.webp'
    },
    {
        name: 'Shay Roberts',
        role: 'Salon Supervisor',
        credentials: 'Operational Lead',
        bio: 'Managing the rhythm of the salon to ensure a calm, low-stress environment for every high-end spa session.',
        image: '/images/team/Shay-Roberts-Salon-Supervisor.webp'
    },
    {
        name: 'Kaitlyn Lorenz',
        role: 'Bather & Grooming Assistant',
        credentials: 'Hydro-Massage Specialist',
        bio: 'Master of the clinical-clean, ensuring every pet receives the thorough care foundation they deserve.',
        image: '/images/team/Kaitlyn-Lorenz-Bather & Grooming Assistant.webp'
    }
]

export default function TeamSection() {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true)
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} id="team" className="py-24 md:py-32 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-6 block">The Elite Crew</span>
                    <h2 className="font-serif font-black text-4xl md:text-5xl text-charcoal mb-8 leading-tight">
                        Meet Your Pet's <br /> <span className="text-sage italic font-medium">Wellness Partners.</span>
                    </h2>
                    <p className="font-sans text-slate max-w-2xl mx-auto leading-relaxed">
                        Our team combines clinical veterinary expertise with artisan passion to deliver Granville's most sophisticated pet grooming experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {TEAM_MEMBERS.map((member, index) => (
                        <div
                            key={member.name}
                            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl mb-8 group border border-charcoal/5">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/5 to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

                                <div className="absolute bottom-8 left-8 right-8">
                                    <span className="font-sans text-[9px] font-black text-white/90 uppercase tracking-[0.2em] bg-sage/80 backdrop-blur-md px-4 py-1.5 rounded-full inline-block mb-3 border border-white/10">
                                        {member.credentials}
                                    </span>
                                </div>
                            </div>

                            <div className="px-2">
                                <h3 className="font-serif font-bold text-2xl text-charcoal mb-2">{member.name}</h3>
                                <p className="font-sans text-[10px] font-black text-sage tracking-[0.2em] uppercase mb-4">{member.role}</p>
                                <p className="font-sans text-sm text-slate leading-relaxed opacity-70">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
