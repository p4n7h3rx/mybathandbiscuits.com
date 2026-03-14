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
                titleLine2="Bakery Delights"
                subtitle="Small-batch, human-grade ingredients for your pet's happiness. Explore our curated collection of accessories and bakery-fresh delights."
                videoSrc="/images/hero-2.mp4"
                primaryCTA={{ text: "Book Appointment", href: BOOKING_URL }}
                secondaryCTA={{ text: "View the Bakery", href: "#bakery" }}
            />

            {/* Section: The Bone Bar Experience */}
            <section id="bakery" className="py-24 bg-white overflow-hidden border-t border-black/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <span className="font-sans text-[10px] font-black text-black/40 tracking-[0.4rem] uppercase mb-8 block">Hand-Baked Heritage</span>
                            <h2 className="font-serif font-black text-4xl md:text-8xl text-black mb-8 leading-[0.8] tracking-tighter">
                                The Newark <br /> <span className="text-black italic font-normal opacity-70">Bone Bar</span>
                            </h2>
                            <p className="font-sans text-lg text-black/70 mb-12 leading-relaxed max-w-xl font-medium">
                                Our treats aren't just snacks—they're fresh-baked creations. Every cookie is hand-decorated, all-natural, and made with 100% human-grade ingredients. We believe your pet's treats should be as beautiful as they are healthy.
                            </p>

                            <div className="grid grid-cols-2 gap-12">
                                <div className="border-l border-black/10 pl-6">
                                    <h4 className="font-serif font-black text-xl text-black mb-3 uppercase tracking-tight">Small Batch</h4>
                                    <p className="font-sans text-sm text-black/60 font-normal">Always fresh, never mass-produced in our boutique kitchen.</p>
                                </div>
                                <div className="border-l border-black/10 pl-6">
                                    <h4 className="font-serif font-black text-xl text-black mb-3 uppercase tracking-tight">Natural Ingredients</h4>
                                    <p className="font-sans text-sm text-black/60 font-normal">No mystery fillers. Just wholesome, high-quality nutrition.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="rounded-sm overflow-hidden shadow-2xl border border-black/5">
                                <img src="/images/Cookies-1.webp" alt="Fresh-Baked Dog Cookies Newark Ohio" className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
                            </div>
                            <div className="absolute -bottom-4 -left-2 md:-bottom-10 md:-left-10 bg-black p-8 md:p-10 border border-white/10 max-w-[200px] md:max-w-xs shadow-2xl animate-float">
                                <p className="font-serif italic text-base md:text-2xl text-white leading-tight">"The best treats in Newark, bar none!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Boutique Celebration Cakes */}
            <section className="py-24 bg-black text-white overflow-hidden border-y border-white/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 relative group">
                            <div className="rounded-sm overflow-hidden shadow-2xl border border-white/20">
                                <img src="/images/cake.webp" alt="Custom Dog Birthday Cake Newark OH" className="w-full h-auto transition-transform duration-1000 group-hover:scale-105 active:scale-105" />
                            </div>
                            <div className="absolute -top-4 -right-2 md:-top-10 md:-right-10 bg-white p-6 md:p-10 border border-black shadow-2xl animate-float">
                                <span className="font-sans text-[10px] md:text-xs font-black text-black/40 uppercase tracking-widest block mb-2">Signature Pre-Order</span>
                                <p className="font-serif italic text-base md:text-2xl text-black leading-tight">Custom designs for your pet's big day.</p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="font-sans text-[10px] font-black text-white/40 tracking-[0.4rem] uppercase mb-8 block">Celebration Station</span>
                            <h2 className="font-serif font-black text-4xl md:text-8xl text-white mb-8 leading-[0.8] tracking-tighter">
                                Custom <br /> <span className="text-white italic font-normal opacity-70">Bakery Cakes</span>
                            </h2>
                            <p className="font-sans text-lg text-white/60 mb-10 leading-relaxed max-w-xl font-medium">
                                Make their "gotcha day" or birthday unforgettable with a custom-built, human-grade cake. From grain-free bases to hand-decorated icing, our cakes are the centerpiece of every pet party.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { num: "01", text: "Pre-Order 48 Hours in Advance" },
                                    { num: "02", text: "Tailored Allergies & Flavors" },
                                    { num: "03", text: "Custom Lettering & Design" }
                                ].map((item) => (
                                    <div key={item.num} className="flex items-center gap-6 group">
                                        <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center border border-white/10 transition-all group-hover:bg-white group-hover:text-black">
                                            <span className="text-white group-hover:text-black font-serif font-black italic">{item.num}</span>
                                        </div>
                                        <p className="font-sans font-black text-white/80 uppercase text-[10px] tracking-widest">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-16">
                                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary magnetic !px-12">Order Custom Cake</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Boutique Ice Cream Cakes */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="font-sans text-[10px] font-black text-black/40 tracking-[0.4rem] uppercase mb-8 block">Refresh & Reward</span>
                            <h2 className="font-serif font-black text-4xl md:text-8xl text-black mb-8 leading-[0.8] tracking-tighter">
                                Specialty <br /> <span className="text-black italic font-normal opacity-70">Ice Cream Cakes</span>
                            </h2>
                            <p className="font-sans text-lg text-black/70 mb-12 leading-relaxed max-w-xl font-medium">
                                Discover our signature ice cream-styled cakes—a unique boutique treat crafted for the ultimate celebration. These creations combine the visual charm of a sundae with the wholesome, high-quality nutrition of our hand-baked cakes.
                            </p>
                            <div className="flex flex-wrap gap-3 mb-12">
                                {["Yogurt-Based", "Peanut Butter Swirl", "Berry Blast", "Cooling Sensation"].map(feature => (
                                    <span key={feature} className="px-6 py-3 rounded-sm bg-black text-white font-sans font-black text-[10px] uppercase tracking-widest shadow-xl">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                            <p className="font-sans text-[10px] text-black/40 uppercase tracking-widest font-black">Small Batch Production · 📍 Newark, Ohio</p>
                        </div>
                        <div className="relative group">
                            <div className="rounded-sm overflow-hidden shadow-2xl border border-black/5">
                                <img src="/images/ice cream.webp" alt="Dog Ice Cream Cake Newark Ohio" className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
                            </div>
                            <div className="absolute -bottom-4 -right-2 md:-bottom-10 md:-right-10 bg-black p-8 md:p-12 rounded-sm shadow-2xl text-white max-w-[200px] md:max-w-xs rotate-3 border border-white/10">
                                <h4 className="font-serif italic text-xl md:text-3xl mb-2 leading-none font-normal">Sweet Discovery</h4>
                                <p className="font-sans text-[12px] md:text-sm text-white/60 font-medium">Looks like ice cream, eats like a premium bakery cake.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Boutique Curations */}
            <section className="py-24 bg-white border-t border-black/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="rounded-sm overflow-hidden shadow-2xl mt-12 border border-black/5 transform -rotate-2">
                                <img src="/images/Dog-leash.webp" alt="Pet Boutique Accessories Newark" className="w-full h-full object-cover" />
                            </div>
                            <div className="rounded-sm overflow-hidden shadow-2xl mb-12 border border-black/5 transform rotate-2">
                                <img src="/images/toys.webp" alt="Dog Toys and Enrichment Newark OH" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <span className="font-sans text-[10px] font-black text-black/40 tracking-[0.4rem] uppercase mb-8 block">Curated Lifestyle</span>
                        <h2 className="font-serif font-black text-4xl md:text-8xl text-black mb-8 leading-[0.8] tracking-tighter">
                            Boutique Finds <br /> <span className="text-black italic font-normal opacity-70">For Every Pet</span>
                        </h2>
                        <p className="font-sans text-lg text-black/70 mb-12 leading-relaxed font-medium">
                            Beyond bakery treats, we offer a hand-selected collection of premium pet lifestyle goods. From durable, stylish leashes to interactive enrichment toys, our boutique features items you won't find at big-box retailers.
                        </p>
                        <ul className="space-y-6 mb-12">
                            {["Handcrafted Leashes", "Interactive Puzzle Toys", "All-Natural Spa Products", "Dog Accessories"].map(item => (
                                <li key={item} className="flex items-center gap-4 group">
                                    <div className="w-2 h-2 rounded-full bg-black/20 group-hover:bg-black transition-all" />
                                    <span className="font-sans font-black text-black/80 uppercase text-[10px] tracking-widest">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-10 border-t border-black/10">
                            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex flex-col items-center gap-2">
                                <span className="text-black font-black uppercase text-[10px] tracking-[0.4rem] mb-2">Explore Boutique</span>
                                <div className="w-12 h-[1px] bg-black/20 group-hover:w-full transition-all duration-700" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* Section: Celebrations */}
            <section className="py-24 bg-black text-white border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="font-serif font-black text-4xl md:text-7xl mb-8 leading-[0.9] tracking-tighter uppercase">Gotcha Days <br /> <span className="text-white italic font-normal opacity-70">& Birthdays</span></h2>
                    <p className="font-sans text-xl text-white/60 mb-16 leading-relaxed font-medium">
                        Celebrate your pet's special moments with a custom cake or a party pack of our signature treats. Pre-orders recommended to ensure perfection.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <div className="bg-white/5 p-12 flex-1 border border-white/10 rounded-sm hover:-translate-y-2 transition-all transition-duration-500">
                            <img src="/images/cake.webp" alt="Custom Pet Cake Newark" className="w-24 h-24 mx-auto mb-8 rounded-sm object-cover shadow-2xl border border-white/10" />
                            <h4 className="font-serif font-black text-2xl mb-4 uppercase tracking-tighter">Custom Cakes</h4>
                            <p className="font-sans text-sm text-white/60 mb-8 font-normal">Tailored flavors and designs for your pet's big day.</p>
                            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-white font-black uppercase text-[10px] tracking-[0.3rem] hover:tracking-[0.4rem] transition-all">Inquire Now →</a>
                        </div>
                        <div className="bg-white/5 p-12 flex-1 border border-white/10 rounded-sm hover:-translate-y-2 transition-all transition-duration-500">
                            <img src="/images/Cookies-2.webp" alt="Dog Party Cookies Licking County" className="w-24 h-24 mx-auto mb-8 rounded-sm object-cover shadow-2xl border border-white/10" />
                            <h4 className="font-serif font-black text-2xl mb-4 uppercase tracking-tighter">Party Packs</h4>
                            <p className="font-sans text-sm text-white/60 mb-8 font-normal">A curated selection of themed cookies for the whole pack.</p>
                            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-white font-black uppercase text-[10px] tracking-[0.3rem] hover:tracking-[0.4rem] transition-all">Order Online →</a>
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
