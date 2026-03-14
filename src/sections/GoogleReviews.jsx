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
        <section id="google-reviews" className="py-24 bg-black overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6 text-white/40">
                            <FaGoogle size={24} />
                            <span className="font-sans text-[10px] font-black uppercase tracking-[0.4rem]">Verified Reviews</span>
                        </div>
                        <h2 className="font-serif font-black text-4xl md:text-7xl text-white leading-[0.9] tracking-tighter">
                            Trusted By <span className="text-white italic font-normal opacity-70">Hundreds</span> <br /> of Local Paws.
                        </h2>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-sm flex flex-col items-center md:items-start shadow-2xl">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <HiStar key={i} className="text-white" size={24} />
                            ))}
                        </div>
                        <div className="text-white font-sans">
                            <span className="text-4xl font-black mr-2">4.9</span>
                            <span className="text-white/40 font-black uppercase text-[10px] tracking-widest block mt-2">Average Rating · 225+ Google Reviews</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {REVIEWS.map((review, idx) => (
                        <div key={idx} className="bg-white/5 p-8 border border-white/10 hover:border-white/20 transition-all duration-500 group flex flex-col rounded-sm">
                            <div className="flex gap-1 mb-8">
                                {[...Array(review.rating)].map((_, i) => (
                                    <HiStar key={i} className="text-white/20 group-hover:text-white/60 transition-colors" size={16} />
                                ))}
                            </div>
                            <p className="font-serif text-lg text-white/80 leading-relaxed mb-8 flex-1 italic font-normal">
                                "{review.text}"
                            </p>
                            <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                                <div>
                                    <h4 className="font-serif font-black text-white uppercase tracking-tight">{review.author}</h4>
                                    <span className="text-[10px] text-white/30 uppercase font-black tracking-widest">{review.date}</span>
                                </div>
                                <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center border border-white/10 transition-all group-hover:bg-white group-hover:text-black">
                                    <FaGoogle size={14} className="opacity-80" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a
                        href="/review"
                        className="group inline-flex flex-col items-center gap-2"
                    >
                        <span className="text-white font-black uppercase text-[10px] tracking-[0.4em] mb-2">Share Your Experience</span>
                        <div className="w-12 h-[1px] bg-white/20 group-hover:w-24 transition-all duration-700" />
                    </a>
                </div>
            </div>
        </section>
    )
}
