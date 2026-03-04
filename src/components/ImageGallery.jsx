import { motion } from 'framer-motion'

export default function ImageGallery({ images, title, subtitle }) {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20 animate-on-scroll">
                    <span className="font-sans text-xs font-bold text-sage tracking-[0.5em] uppercase mb-6 block">
                        {subtitle}
                    </span>
                    <h2 className="font-serif font-medium text-4xl md:text-6xl text-charcoal italic">
                        {title}
                    </h2>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group rounded-[2rem] overflow-hidden shadow-xl border border-white/40 break-inside-avoid"
                        >
                            <img
                                src={img.url}
                                alt={img.alt || "Salon Gallery"}
                                className="w-full h-auto transition-transform duration-1000 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <span className="font-serif italic text-white text-xl">View Details</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
