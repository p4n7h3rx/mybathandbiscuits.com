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
        accent: 'gold',
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
        accent: 'sage',
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
        accent: 'blush',
    },
]

export default function ServicesGrooming() {
    return (
        <section id="services-grooming" className="w-full bg-[#FDF8F0] py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Unified Intro Area */}
                <div className="mb-20 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl">
                        <span className="font-sans text-[10px] md:text-xs font-bold text-sage tracking-[0.4rem] uppercase mb-6 block">
                            Specialized Treatments
                        </span>
                        <h2 className="font-serif font-black text-4xl md:text-6xl text-charcoal mb-8 leading-[1.1] tracking-tighter">
                            Excellence <span className="text-sage italic font-medium">In Every Detail.</span>
                        </h2>
                        <p className="font-sans text-lg text-slate leading-relaxed opacity-80">
                            Where experienced hands and thoughtful care come together. We’ve defined a standard of grooming that prioritizes your pet’s comfort and happiness.
                        </p>
                    </div>

                    <div className="flex items-center gap-6 bg-white/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/60 shadow-xl">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white bg-champagne overflow-hidden shadow-lg">
                                    <img src={`/images/Grooming-${i === 3 ? 1 : i}.webp`} alt="Happy client" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="text-charcoal/60">
                            <p className="font-sans text-[8px] font-black uppercase tracking-widest leading-none mb-1">Trusted By</p>
                            <p className="font-serif italic text-lg leading-none whitespace-nowrap">10,000+ Pets</p>
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
                                className={`group relative flex flex-col bg-white rounded-[3.5rem] overflow-hidden shadow-2xl shadow-charcoal/5 border border-white transition-all duration-700 hover:-translate-y-2 ${service.featured ? 'ring-2 ring-sage ring-offset-[8px] ring-offset-[#FDF8F0]' : ''}`}
                            >
                                {/* Compact Immersive Header */}
                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={service.image}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        alt={service.imageAlt || service.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                        {service.badges.map(badge => (
                                            <span key={badge} className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-charcoal font-sans text-[8px] font-bold uppercase tracking-widest shadow-sm">
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-8 pb-10 flex flex-col flex-1">
                                    <div className="w-12 h-12 rounded-2xl bg-charcoal text-white shadow-lg flex items-center justify-center mb-6">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="font-serif font-black text-3xl text-charcoal mb-4 leading-tight tracking-tight">
                                        {service.title}
                                    </h3>

                                    <p className="font-sans text-sm text-slate mb-8 leading-relaxed opacity-80 min-h-[3rem]">
                                        {service.description}
                                    </p>

                                    {/* Compact Feature List */}
                                    <div className="space-y-4 mb-10 flex-1">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3 group/item">
                                                <div className="w-1 h-1 rounded-full bg-sage/30 group-hover/item:bg-sage transition-colors" />
                                                <span className="font-sans text-[11px] font-bold text-charcoal/70 uppercase tracking-widest">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a href="https://pawpartner.com/pz/book?p=237080" target="_blank" rel="noopener noreferrer" className="btn-primary magnetic !w-full !py-4 text-[10px] text-warm-white text-center">
                                        Reserve Session
                                    </a>
                                </div>

                                {service.featured && (
                                    <div className="absolute top-0 right-0 bg-sage px-6 py-2 rounded-bl-[2rem] text-white font-sans text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-sage/20 z-10">
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
