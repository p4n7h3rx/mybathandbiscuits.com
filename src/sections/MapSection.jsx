import { HiLocationMarker, HiPhone, HiClock, HiStar } from 'react-icons/hi'
import { FaGoogle } from 'react-icons/fa'

export default function MapSection() {
    return (
        <section id="location" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Visual Map Side */}
                    <div className="h-[400px] lg:h-auto min-h-[500px] rounded-sm overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.15)] relative group border border-black/5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1525.7956973059535!2d-82.480630922444!3d40.05670417932644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88381565128e5fa3%3A0x1e991052dd6355e!2sBath%20%26%20Biscuits!5e0!3m2!1sen!2sus!4v1740256800000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                        ></iframe>
                        <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-xl p-6 border border-black/5 shadow-2xl max-w-xs transition-all duration-500 group-hover:border-black/20">
                            <div className="flex items-center gap-3 mb-4 text-black/40">
                                <FaGoogle size={20} />
                                <span className="font-sans text-[10px] font-black uppercase tracking-widest">Google Business</span>
                            </div>
                            <p className="font-serif italic text-lg text-black mb-4 font-normal">"The place pets love to visit in Newark."</p>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <HiStar key={i} className="text-black/40" size={14} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Information Side */}
                    <div className="flex flex-col justify-center p-4 md:p-8">
                        <span className="font-sans text-[10px] font-black text-black/40 tracking-[0.4rem] uppercase mb-8 block">Find Us</span>
                        <h2 className="font-serif font-black text-4xl md:text-7xl text-black mb-10 leading-[0.9] tracking-tighter">
                            In the Heart <br /> of our <span className="text-black italic font-normal opacity-70">Community.</span>
                        </h2>

                        <div className="space-y-10 mb-12">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-sm bg-black text-white flex items-center justify-center transition-all shadow-lg group-hover:scale-110">
                                    <HiLocationMarker size={24} />
                                </div>
                                <div>
                                    <span className="block font-sans text-[10px] font-black text-black/20 uppercase tracking-widest mb-1 text-left">The Boutique</span>
                                    <p className="font-serif text-xl text-black font-black uppercase tracking-tight">75 Westgate Dr NE, Newark, OH 43055</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-sm bg-black text-white flex items-center justify-center transition-all shadow-lg group-hover:scale-110">
                                    <HiPhone size={24} />
                                </div>
                                <div>
                                    <span className="block font-sans text-[10px] font-black text-black/20 uppercase tracking-widest mb-1 text-left">Direct Line</span>
                                    <a href="tel:7405870011" className="font-serif text-xl text-black font-black uppercase tracking-tight hover:text-black/60 transition-colors">(740) 587-0011</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-sm bg-black text-white flex items-center justify-center transition-all shadow-lg group-hover:scale-110">
                                    <HiClock size={24} />
                                </div>
                                <div>
                                    <span className="block font-sans text-[10px] font-black text-black/20 uppercase tracking-widest mb-1 text-left">Curated Hours</span>
                                    <p className="font-serif text-xl text-black font-black uppercase tracking-tight">Mon – Fri · 09:00 — 17:00</p>
                                    <p className="font-serif text-lg text-black/40 italic font-normal leading-none mt-1">Sat · 09:00 — 12:00</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://maps.app.goo.gl/VrhQ2gPsB4kPxgLn7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-4 bg-black text-white rounded-sm font-sans text-[10px] font-black uppercase tracking-[0.2rem] text-center cursor-pointer hover:bg-black/80 transition-all shadow-xl"
                            >
                                Get Directions
                            </a>
                            <a
                                href="/review"
                                className="group px-10 py-4 flex items-center justify-center gap-3 font-sans text-[10px] font-black uppercase tracking-[0.2rem] text-black/40 hover:text-black transition-all duration-500 border border-black/5 hover:border-black/20 rounded-sm"
                            >
                                <FaGoogle size={14} />
                                <span>Leave a Review</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
