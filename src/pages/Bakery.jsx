import Hero from '../sections/Hero'
import BakerySection from '../sections/Bakery'
import BookingCTA from '../sections/BookingCTA'
import ImageGallery from '../components/ImageGallery'
import { useEffect } from 'react'

const BOOKING_URL = 'https://pawpartner.com/pz/book?p=237080'
const BAKERY_GALLERY = [
    { url: '/images/Cookies-1.webp', alt: 'Fresh-Baked Dog Cookies Newark OH' },
    { url: '/images/bakery-dog-treats-1.webp', alt: 'Healthy Pups Licking County' },
    { url: '/images/cake.webp', alt: 'Custom Dog Birthday Cakes Newark' },
    { url: '/images/Dog-leash.webp', alt: 'Pet Boutique Accessories Newark' },
    { url: '/images/bakery-1.webp', alt: 'Baked Pet Treats Newark Ohio' },
    { url: '/images/ice cream.webp', alt: 'Specialty Dog Ice Cream Cakes' },
]


export default function BakeryPage() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Hero
                badge="Winner: America's Coolest 2024"
                titleLine1="Fresh-Baked Treats &"
                titleLine2="Boutique Finds"
                subtitle="Small-batch, human-grade ingredients for your pet's happiness. Explore our curated collection of accessories and bakery-fresh delights."
                videoSrc="/images/hero-2.mp4"
                primaryCTA={{ text: "Book Appointment", href: BOOKING_URL }}
                secondaryCTA={{ text: "View the Bakery", href: "#bakery" }}
            />

            {/* Section: The Bone Bar Experience */}
            <section id="bakery" className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-8 block">Hand-Baked Heritage</span>
                            <h2 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl text-charcoal mb-8 leading-tight">
                                The Newark <br /> <span className="text-sage italic font-medium">Bone Bar</span>
                            </h2>
                            <p className="font-sans text-lg text-slate mb-10 leading-relaxed max-w-xl">
                                Our treats aren't just snacks—they're fresh-baked creations. Every cookie is hand-decorated, all-natural, and made with 100% human-grade ingredients. We believe your pet's treats should be as beautiful as they are healthy.
                            </p>

                            <div className="grid grid-cols-2 gap-10">
                                <div>
                                    <h4 className="font-serif font-bold text-xl text-charcoal mb-3">Small Batch</h4>
                                    <p className="font-sans text-sm text-slate">Always fresh, never mass-produced in our boutique kitchen.</p>
                                </div>
                                <div>
                                    <h4 className="font-serif font-bold text-xl text-charcoal mb-3">Natural Ingredients</h4>
                                    <p className="font-sans text-sm text-slate">No mystery fillers. Just wholesome, high-quality nutrition.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-charcoal/5">
                                <img src="/images/Cookies-1.webp" alt="Fresh-Baked Dog Cookies Newark Ohio" className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
                            </div>
                            <div className="absolute -bottom-4 -left-2 md:-bottom-10 md:-left-10 glass-card p-6 md:p-8 border border-white max-w-[200px] md:max-w-xs shadow-2xl animate-float">
                                <p className="font-serif italic text-base md:text-lg text-charcoal">"The best treats in Newark, bar none!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Boutique Celebration Cakes */}
            <section className="py-24 bg-cream overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 relative group">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-white/40">
                                <img src="/images/cake.webp" alt="Custom Dog Birthday Cake Newark OH" className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
                            </div>
                            <div className="absolute -top-4 -right-2 md:-top-10 md:-right-10 glass-card p-6 md:p-8 border border-white max-w-[200px] md:max-w-xs shadow-2xl animate-float">
                                <span className="font-sans text-[10px] md:text-xs font-bold text-sage uppercase tracking-widest block mb-1 md:mb-2">Signature Pre-Order</span>
                                <p className="font-serif italic text-base md:text-lg text-charcoal">Custom designs for your pet's big day.</p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-8 block">Celebration Station</span>
                            <h2 className="font-serif font-black text-5xl md:text-6xl text-charcoal mb-8 leading-tight">
                                Custom <br /> <span className="text-sage italic font-medium">Boutique Cakes</span>
                            </h2>
                            <p className="font-sans text-lg text-slate mb-10 leading-relaxed max-w-xl">
                                Make their "gotcha day" or birthday unforgettable with a custom-built, human-grade cake. From grain-free bases to hand-decorated icing, our cakes are the centerpiece of every pet party.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                                        <span className="text-sage font-serif font-bold italic">01</span>
                                    </div>
                                    <p className="font-sans font-bold text-charcoal">Pre-Order 48 Hours in Advance</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                                        <span className="text-sage font-serif font-bold italic">02</span>
                                    </div>
                                    <p className="font-sans font-bold text-charcoal">Tailored Allergies & Flavors</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                                        <span className="text-sage font-serif font-bold italic">03</span>
                                    </div>
                                    <p className="font-sans font-bold text-charcoal">Custom Lettering & Design</p>
                                </div>
                            </div>
                            <div className="mt-12">
                                <a href="https://pawpartner.com/pz/book?p=237080" target="_blank" rel="noopener noreferrer" className="btn-primary magnetic !px-12">Order Custom Cake</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Boutique Ice Cream Cakes */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-8 block">Refresh & Reward</span>
                            <h2 className="font-serif font-black text-3xl sm:text-5xl md:text-6xl text-charcoal mb-8 leading-tight">
                                Specialty <br /> <span className="text-sage italic font-medium">Ice Cream Cakes</span>
                            </h2>
                            <p className="font-sans text-lg text-slate mb-10 leading-relaxed max-w-xl">
                                Discover our signature ice cream-styled cakes—a unique boutique treat crafted for the ultimate celebration. These creations combine the visual charm of a sundae with the wholesome, high-quality nutrition of our hand-baked cakes.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-12">
                                {["Yogurt-Based Frosting", "Peanut Butter Swirl", "Berry Blast", "Cooling Sensation"].map(feature => (
                                    <span key={feature} className="px-5 py-3 rounded-2xl bg-cream border border-sage/10 text-sage font-sans font-bold text-xs uppercase tracking-widest">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                            <p className="font-sans text-xs text-slate uppercase tracking-widest opacity-60">Small Batch Production · 📍 Newark, Ohio</p>
                        </div>
                        <div className="relative group">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-charcoal/5">
                                <img src="/images/ice cream.webp" alt="Dog Ice Cream Cake Newark Ohio" className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
                            </div>
                            <div className="absolute -bottom-4 -right-2 md:-bottom-10 md:-right-10 bg-sage p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl text-white max-w-[200px] md:max-w-xs rotate-3">
                                <h4 className="font-serif italic text-xl md:text-2xl mb-1 md:mb-2 leading-none">Sweet Discovery</h4>
                                <p className="font-sans text-[12px] md:text-sm text-white/80">Looks like ice cream, eats like a premium cake.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Boutique Curations */}
            <section className="py-24 bg-cream">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="rounded-3xl overflow-hidden shadow-xl mt-12">
                                <img src="/images/Dog-leash.webp" alt="Pet Boutique Accessories Newark" className="w-full h-full object-cover" />
                            </div>
                            <div className="rounded-3xl overflow-hidden shadow-xl mb-12">
                                <img src="/images/toys.webp" alt="Dog Toys and Enrichment Newark OH" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-8 block">Curated Lifestyle</span>
                        <h2 className="font-serif font-black text-3xl sm:text-5xl text-charcoal mb-8 leading-tight">
                            Boutique Finds <br /> <span className="text-sage italic font-medium">For Every Pet</span>
                        </h2>
                        <p className="font-sans text-lg text-slate mb-8 leading-relaxed">
                            Beyond bakery treats, we offer a hand-selected collection of premium pet lifestyle goods. From durable, stylish leashes to interactive enrichment toys, our boutique features items you won't find at big-box retailers.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {["Handcrafted Leashes", "Interactive Puzzle Toys", "All-Natural Spa Products", "Dog Accessories"].map(item => (
                                <li key={item} className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                                    <span className="font-sans font-bold text-charcoal/80 uppercase text-xs tracking-widest">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-8 border-t border-charcoal/5">
                            <a href="https://pawpartner.com/pz/book?p=237080" target="_blank" rel="noopener noreferrer" className="text-sage font-bold uppercase tracking-widest text-xs hover:tracking-[0.2em] transition-all">Explore Boutique →</a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section: Celebrations */}
            <section className="py-24 bg-white border-y border-charcoal/5">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="font-serif font-black text-5xl text-charcoal mb-8">Gotcha Days & Birthdays</h2>
                    <p className="font-sans text-xl text-slate mb-12 leading-relaxed">
                        Celebrate your pet's special moments with a custom cake or a party pack of our signature treats. Pre-orders recommended to ensure perfection.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <div className="glass-card p-10 flex-1 border border-sage/10">
                            <img src="/images/cake.webp" alt="Custom Pet Cake Newark" className="w-20 h-20 mx-auto mb-6 rounded-full object-cover" />
                            <h4 className="font-serif font-bold text-2xl mb-4">Custom Cakes</h4>
                            <p className="font-sans text-sm text-slate mb-6">Tailored flavors and designs for your pet's big day.</p>
                            <a href="https://pawpartner.com/pz/book?p=237080" target="_blank" rel="noopener noreferrer" className="text-sage font-bold uppercase tracking-widest text-xs hover:tracking-[0.2em] transition-all">Inquire Now →</a>
                        </div>
                        <div className="glass-card p-10 flex-1 border border-sage/10">
                            <img src="/images/Cookies-2.webp" alt="Dog Party Cookies Licking County" className="w-20 h-20 mx-auto mb-6 rounded-full object-cover" />
                            <h4 className="font-serif font-bold text-2xl mb-4">Party Packs</h4>
                            <p className="font-sans text-sm text-slate mb-6">A curated selection of themed cookies for the whole pack.</p>
                            <a href="https://pawpartner.com/pz/book?p=237080" target="_blank" rel="noopener noreferrer" className="text-sage font-bold uppercase tracking-widest text-xs hover:tracking-[0.2em] transition-all">Order Online →</a>
                        </div>
                    </div>
                </div>
            </section>

            <ImageGallery
                title="Our Creations"
                subtitle="Baked Fresh In Newark"
                images={BAKERY_GALLERY}
            />

            <BookingCTA />
        </>
    )
}
