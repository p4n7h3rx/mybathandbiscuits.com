import { HiShieldCheck, HiOutlineSparkles, HiAcademicCap } from 'react-icons/hi'

const VALUES = [
    {
        title: "Pet-Safe Sanitation",
        text: "We utilize pet-safe UV sanitation for all tools and state-of-the-art air filtration. Your pet's well-being is our absolute priority.",
        icon: HiShieldCheck
    },
    {
        title: "Expertise You Can Trust",
        text: "With a Registered Veterinary Technician background, our team uses their experience to ensure every pet is ready and comfortable for grooming.",
        icon: HiAcademicCap
    },
    {
        title: "Calm & Quiet Sanctuary",
        text: "Designed with gentle handling and individualized attention. No loud waiting rooms—just a calm, peaceful experience.",
        icon: HiOutlineSparkles
    }
]

export default function ClinicalSafety() {
    return (
        <section className="py-24 bg-charcoal text-white overflow-hidden relative">
            {/* Cinematic background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-sage/5 -skew-x-12 transform translate-x-32" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-8 block">Uncompromising Ethics</span>
                        <h2 className="font-serif font-black text-3xl sm:text-4xl md:text-6xl mb-8 leading-tight">Why Our <span className="text-sage italic font-medium">Care</span> Standards Matter.</h2>
                        <p className="font-sans text-lg text-white/60 mb-12 leading-relaxed max-w-xl">
                            Proper grooming is about more than just a haircut. It's about coat health, emotional safety, and a thoughtful attention to detail that comes from years of experience.
                        </p>

                        <div className="space-y-12">
                            {VALUES.map((val, idx) => {
                                const Icon = val.icon
                                return (
                                    <div key={idx} className="flex items-start gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-sage group-hover:bg-sage group-hover:text-white transition-all duration-500">
                                            <Icon size={28} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif font-bold text-xl mb-3">{val.title}</h4>
                                            <p className="font-sans text-sm text-white/40 leading-relaxed max-w-md">{val.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 relative">
                            <img
                                src="/images/Grooming-2.webp"
                                alt="Pet Grooming Safety Standards Newark OH"
                                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        {/* Status Pin */}
                        <div className="absolute -bottom-4 -left-2 md:-bottom-10 md:-left-10 glass-card !bg-white/10 backdrop-blur-2xl p-6 md:p-8 border border-white/20 max-w-[200px] md:max-w-xs shadow-2xl animate-float">
                            <p className="font-serif italic text-base md:text-lg text-white">"Where experienced hands and thoughtful care come together."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
