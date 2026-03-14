import { HiArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function BakeryWelcome() {
    return (
        <section id="bakery-welcome" className="w-full bg-white pt-32 pb-20 overflow-hidden border-b border-black/5">
            <div className="max-w-7xl mx-auto section-padding">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Visual Side - Heritage Cluster */}
                    <div className="lg:col-span-7 relative group order-2 lg:order-1 h-[500px] md:h-[600px]">
                        {/* Main Image (bakery-1) */}
                        <div className="absolute top-0 right-0 w-4/5 aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border border-black/5 z-10">
                            <img
                                src="/images/bakery-1.webp"
                                alt="The Bone Bar Bakery"
                                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                            />
                        </div>

                        {/* Secondary Big Image (bakery-2) */}
                        <div className="absolute top-20 left-0 w-3/5 aspect-square rounded-sm overflow-hidden shadow-2xl border-4 border-white z-20 transition-transform duration-700 hover:-translate-y-2">
                            <img
                                src="/images/bakery-2.webp"
                                alt="Bakery Display"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Tertiary Big Image (bakery-3) */}
                        <div className="absolute bottom-0 right-10 w-2/5 aspect-square rounded-sm overflow-hidden shadow-2xl border-4 border-white z-30 transition-transform duration-1000 group-hover:translate-x-4">
                            <img
                                src="/images/bakery-3.webp"
                                alt="Bakery Detail"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Immersive Store Exterior Overlay (Mini) - Repositioned */}
                        <div className="absolute -bottom-6 -left-4 w-32 md:w-48 aspect-square rounded-sm overflow-hidden shadow-2xl border-2 border-white z-40 transform -rotate-3">
                            <img
                                src="/images/store exterior.webp"
                                alt="Front Entrance"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative Heritage Element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-black/5 rounded-full blur-3xl -z-10" />
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[1.5px] bg-black/20" />
                            <span className="font-sans text-[10px] font-black text-black/40 tracking-[0.4rem] uppercase">The Bone Bar</span>
                        </div>

                        <h2 className="font-serif font-black text-5xl md:text-7xl text-black mb-8 leading-[0.85] tracking-tighter">
                            Newark's <br />
                            <span className="text-black italic font-normal opacity-70 italic">Signature</span> <br />
                            Pet Bakery.
                        </h2>

                        <p className="font-sans text-lg text-black/70 mb-12 leading-relaxed font-medium">
                            Step into a world of hand-decorated cookies and custom cakes. Before the groom, treat them to something special at Newark's premier pet boutique.
                        </p>

                        {/* Supporting Imagery Teaser - Fixed Sizes */}
                        <div className="flex gap-4 mb-12">
                            <div className="w-24 h-24 rounded-sm overflow-hidden border border-black/5 shadow-lg group/img">
                                <img src="/images/Cookies-2.webp" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500" alt="Treat detail" />
                            </div>
                            <div className="w-24 h-24 rounded-sm overflow-hidden border border-black/5 shadow-lg group/img">
                                <img src="/images/bakery-dog-treats-2.webp" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500" alt="Treat detail" />
                            </div>
                            <div className="w-24 h-24 rounded-sm overflow-hidden border border-black/5 shadow-lg hidden sm:block group/img">
                                <img src="/images/cake.webp" className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500" alt="Treat detail" />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start gap-8">
                            <Link
                                to="/bakery"
                                className="btn-primary !px-10 group flex items-center justify-center gap-3 w-full sm:w-auto"
                            >
                                Visit The Bakery <HiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <div className="flex flex-col">
                                <span className="font-sans text-[8px] font-black text-black/40 uppercase tracking-widest mb-1">Authentically Newark</span>
                                <span className="font-serif italic text-base text-black/60">Since 2009</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
