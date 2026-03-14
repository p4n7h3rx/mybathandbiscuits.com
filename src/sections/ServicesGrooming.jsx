import { HiSparkles, HiScissors, HiHeart } from 'react-icons/hi'

const SERVICES = [
    {
        id: 'luxury-grooming',
        icon: HiScissors,
        title: 'Luxury Grooming',
        subtitle: 'Thoughtful Styling & Individual Care',
        image: '/images/Grooming-1.webp',
        imageAlt: 'Professional Dog Grooming Newark OH',
        description:
            'A quiet, comfortable space where experienced hands and gentle handling come together.',
        features: [
            'HydroLux™ Therapeutic Bathing',
            'Elite Breed-Standard Styling',
            'Luxury Precision Pawdicures',
            'Advanced Deshedding Treatment',
            'Signature Finishing Spritz',
        ],
        badges: ['RVT Led', 'Fear-Free'],
        accent: 'black',
    },
    {
        id: 'theraclean',
        icon: HiSparkles,
        title: 'Thera-Clean® Spa',
        subtitle: 'Wholesome Skin Care',
        image: '/images/Grooming-spray-1.webp',
        imageAlt: 'Thera-Clean Microbubble Spa Newark Ohio',
        description:
            'The trusted standard for deep-pore skin health and allergy relief.',
        features: [
            'Billions of Oxygen-Rich Bubbles',
            '100% Chemical-Free Scalpels',
            'Hypoallergenic Deep Cleanse',
            'Dermatological Allergy Relief',
            'Advanced Odor Elimination',
        ],
        badges: ['Skin Wellness'],
        accent: 'black',
        featured: true,
    },
    {
        id: 'cat-grooming',
        icon: HiHeart,
        title: 'Feline Specialization',
        subtitle: 'Expert-Led Cat Care',
        image: '/images/cats.webp',
        imageAlt: 'Expert Cat Grooming Licking County Ohio',
        description:
            'Experienced groomers provide a quiet, stress-free cat environment.',
        features: [
            'Experienced Groomers',
            'Exclusive Cat-Only Quiet Zone',
            'Tailored Lion Cuts & De-matting',
            'Stress-Reduced Hydro Bathing',
            'Coat & Skin Checks',
        ],
        badges: ['Safety Certified', 'Expert Stylists'],
        accent: 'black',
    },
]

export default function ServicesGrooming() {
    return (
        <section id="services-grooming" className="w-full bg-black py-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Unified Intro Area */}
                <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl">
                        <span className="font-sans text-[10px] md:text-xs font-black text-white/40 tracking-[0.4rem] uppercase mb-6 block">
                            Specialized Treatments
                        </span>
                        <h2 className="font-serif font-black text-4xl md:text-8xl text-white mb-8 leading-[0.8] tracking-tighter">
                            Excellence <span className="text-white italic font-normal opacity-70">In Every Detail.</span>
                        </h2>
                        <p className="font-sans text-lg text-white/60 leading-relaxed font-medium">
                            Where experienced hands and thoughtful care come together. We've defined a standard of grooming that prioritizes your pet's comfort and happiness.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 bg-white/5 p-8 rounded-sm border border-white/10 shadow-2xl">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black bg-white/10 overflow-hidden shadow-lg">
                                    <img src={`/images/Grooming-${i === 3 ? 1 : i}.webp`} alt="Happy client" className="w-full h-full object-cover grayscale" />
                                </div>
                            ))}
                        </div>
                        <div className="text-white/40">
                            <p className="font-sans text-[8px] font-black uppercase tracking-widest leading-none mb-1">Trusted By</p>
                            <p className="font-serif italic text-lg leading-none whitespace-nowrap text-white/80">10,000+ Pets</p>
                        </div>
                    </div>
                </div>

                {/* Vertical-Density Service Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service) => {
                        const Icon = service.icon
                        return (
                            <div
                                key={service.id}
                                className={`group relative flex flex-col bg-white/5 rounded-sm overflow-hidden shadow-2xl border border-white/10 transition-all duration-700 hover:-translate-y-2 ${service.featured ? 'ring-1 ring-white/40 ring-offset-[8px] ring-offset-black' : ''}`}
                            >
                                {/* Compact Immersive Header */}
                                <div className="h-64 relative overflow-hidden">
                                    <img
                                        src={service.image}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 active:scale-105"
                                        alt={service.imageAlt || service.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                        {service.badges.map(badge => (
                                            <span key={badge} className="px-3 py-1 rounded-sm bg-black text-white font-sans text-[8px] font-black uppercase tracking-widest shadow-xl border border-white/10">
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-10 pb-12 flex flex-col flex-1">
                                    <div className="w-14 h-14 rounded-sm bg-white text-black shadow-xl flex items-center justify-center mb-8">
                                        <Icon size={28} />
                                    </div>

                                    <h3 className="font-serif font-black text-3xl text-white mb-6 leading-[0.9] tracking-tighter uppercase">
                                        {service.title}
                                    </h3>

                                    <p className="font-sans text-sm text-white/60 mb-10 leading-relaxed font-normal min-h-[3rem]">
                                        {service.description}
                                    </p>

                                    {/* Compact Feature List */}
                                    <div className="space-y-4 mb-12 flex-1">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-4 group/item">
                                                <div className="w-1 h-1 rounded-full bg-white/20 group-hover/item:bg-white transition-all transform group-hover/item:scale-150" />
                                                <span className="font-sans text-[10px] font-black text-white/40 group-hover:text-white/80 uppercase tracking-widest transition-colors">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a href="https://pawpartner.com/pz/book?p=237080" target="_blank" rel="noopener noreferrer" className="btn-primary magnetic !w-full !py-5 text-[10px] font-black tracking-[0.2em] text-center uppercase">
                                        Reserve Session
                                    </a>
                                </div>

                                {service.featured && (
                                    <div className="absolute top-0 right-0 bg-white px-6 py-2 rounded-bl-sm text-black font-sans text-[10px] font-black uppercase tracking-[0.2em] shadow-xl z-10">
                                        Signature
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
