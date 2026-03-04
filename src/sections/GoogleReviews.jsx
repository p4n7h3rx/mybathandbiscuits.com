import { HiStar } from 'react-icons/hi'
import { FaGoogle } from 'react-icons/fa'

const REVIEWS = [
    {
        author: "Felicia Walton",
        rating: 5,
        text: "Itty Bitty is 5 years old now and has always gone to Bath and Biscuits! The staff has always been wonderful, the only place that our baby wants to go. Always a pleasure knowing they treat my baby like it's their baby.",
        date: "10 months ago"
    },
    {
        author: "Jackie Bernauer",
        rating: 5,
        text: "Danielle has always been so wonderful. She truly cares and takes wonderful care of my little girl. Not only does she do a wonderful job with her groom, I know she cares about me as well.",
        date: "10 months ago"
    },
    {
        author: "Mitch Breneman",
        rating: 5,
        text: "We've sent Lilah to Bath & Biscuits for about 4 years. The staff does an excellent job and are very attentive to all the pets. If you're looking for daycare and/or grooming, I highly recommend Bath & Biscuits.",
        date: "1 year ago"
    },
    {
        author: "John Taylor",
        rating: 5,
        text: "Always a pleasant experience coming here, my dog is always happy before and after her cleaning which is a big plus as well. She always comes out looking and smelling great.",
        date: "3 weeks ago"
    }
]

export default function GoogleReviews() {
    return (
        <section id="google-reviews" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6 text-sage">
                            <FaGoogle size={24} />
                            <span className="font-sans text-xs font-black uppercase tracking-[0.4em]">Verified Reviews</span>
                        </div>
                        <h2 className="font-serif font-black text-4xl md:text-6xl text-charcoal leading-tight">
                            Trusted By <span className="text-sage italic font-medium">Hundreds</span> <br /> of Local Paws.
                        </h2>
                    </div>

                    <div className="glass-card p-8 border border-sage/10 flex flex-col items-center md:items-start">
                        <div className="flex gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map(i => (
                                <HiStar key={i} className="text-gold" size={24} />
                            ))}
                        </div>
                        <div className="text-charcoal font-sans">
                            <span className="text-3xl font-black mr-2">4.9</span>
                            <span className="text-slate/50 font-bold uppercase text-[10px] tracking-widest">Average Rating · 225+ Google Reviews</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {REVIEWS.map((review, idx) => (
                        <div key={idx} className="glass-card p-8 border border-sage/5 hover:border-sage/20 transition-all duration-500 group flex flex-col">
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <HiStar key={i} className="text-gold" size={16} />
                                ))}
                            </div>
                            <p className="font-sans text-sm text-slate leading-relaxed mb-8 flex-1 italic">
                                "{review.text}"
                            </p>
                            <div className="pt-6 border-t border-charcoal/5 flex items-center justify-between">
                                <div>
                                    <h4 className="font-serif font-bold text-charcoal">{review.author}</h4>
                                    <span className="text-[10px] text-slate/40 uppercase font-black tracking-widest">{review.date}</span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
                                    <FaGoogle size={14} className="text-sage opacity-50" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="/review"
                        className="text-sage font-black uppercase text-[10px] tracking-[0.3em] hover:tracking-[0.5em] transition-all"
                    >
                        Share Your Experience →
                    </a>
                </div>
            </div>
        </section>
    )
}
