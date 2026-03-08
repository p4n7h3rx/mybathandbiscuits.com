import { HiLocationMarker, HiPhone, HiClock, HiStar } from 'react-icons/hi'
import { FaGoogle } from 'react-icons/fa'

export default function MapSection() {
    return (
        <section id="location" className="py-24 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Visual Map Side */}
                    <div className="h-[400px] lg:h-auto min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative group">
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
                        <div className="absolute top-8 left-8 glass-card !bg-white/90 backdrop-blur-xl p-6 border border-sage/20 shadow-xl max-w-xs animate-float">
                            <div className="flex items-center gap-3 mb-4 text-sage">
                                <FaGoogle size={20} />
                                <span className="font-sans text-[10px] font-black uppercase tracking-widest">Google Business</span>
                            </div>
                            <p className="font-serif italic text-lg text-charcoal mb-4">"The place pets love to visit in Newark."</p>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <HiStar key={i} className="text-gold" size={14} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Information Side */}
                    <div className="flex flex-col justify-center p-4 md:p-8">
                        <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-8 block">Find Us</span>
                        <h2 className="font-serif font-black text-4xl md:text-6xl text-charcoal mb-10 leading-tight">
                            At the Heart <br /> of our <span className="text-sage italic font-medium">Community.</span>
                        </h2>

                        <div className="space-y-10 mb-12">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-charcoal text-white flex items-center justify-center transition-transform group-hover:scale-110">
                                    <HiLocationMarker size={24} />
                                </div>
                                <div>
                                    <span className="block font-sans text-[10px] font-black text-charcoal/20 uppercase tracking-widest mb-1 text-left">The Boutique</span>
                                    <p className="font-serif text-xl text-charcoal">75 Westgate Dr NE, Newark, OH 43055</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-sage text-white flex items-center justify-center transition-transform group-hover:scale-110">
                                    <HiPhone size={24} />
                                </div>
                                <div>
                                    <span className="block font-sans text-[10px] font-black text-charcoal/20 uppercase tracking-widest mb-1 text-left">Direct Line</span>
                                    <a href="tel:7405870011" className="font-serif text-xl text-charcoal hover:text-sage transition-colors">(740) 587-0011</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-2xl bg-champagne text-charcoal flex items-center justify-center transition-transform group-hover:scale-110">
                                    <HiClock size={24} />
                                </div>
                                <div>
                                    <span className="block font-sans text-[10px] font-black text-charcoal/20 uppercase tracking-widest mb-1 text-left">Curated Hours</span>
                                    <p className="font-serif text-xl text-charcoal">Mon – Fri · 09:00 — 17:00</p>
                                    <p className="font-serif text-lg text-charcoal/60 italic">Sat · 09:00 — 12:00</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://maps.app.goo.gl/VrhQ2gPsB4kPxgLn7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary !px-10 py-4 text-center cursor-pointer"
                            >
                                Get Directions
                            </a>
                            <a
                                href="/review"
                                className="group px-10 py-4 flex items-center justify-center gap-3 font-sans text-[10px] font-black uppercase tracking-[0.2rem] text-charcoal/40 hover:text-sage transition-all duration-500 border border-charcoal/5 hover:border-sage/20 rounded-full"
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
