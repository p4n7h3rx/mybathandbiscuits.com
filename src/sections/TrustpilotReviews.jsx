import { HiStar } from 'react-icons/hi'
import { FaStar } from 'react-icons/fa'

const REVIEWS = [
    {
        author: "Diane Berry",
        rating: 5,
        text: "Brilliant job, Ted went in looking like a yeti. He came out very debonair. I highly recommend this dog groomer's. Very understanding of your dog's needs. excellent job.",
        date: "Jan 31, 2026"
    },
    {
        author: "doug matthies",
        rating: 5,
        text: "Staff was pleasant and quick with service. Lady at front desk was very helpful. Website check in was easy once you got to it!",
        date: "Feb 6, 2026"
    },
    {
        author: "Guest",
        rating: 5,
        text: "The boys always come out looking great. They keep track of their needs, schedule recurrent visits in advance and are consistently friendly and helpful.",
        date: "Nov 24, 2025"
    },
    {
        author: "Karen",
        rating: 4,
        text: "Very friendly staff. Usually a 5 star but she was not trimmed around her feet as closely as she normally is. Overall still very happy with the service.",
        date: "Mar 6, 2025"
    }
]

export default function TrustpilotReviews() {
    return (
        <section id="trustpilot-reviews" className="py-24 bg-black overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6 text-white">
                            <FaStar size={24} />
                            <span className="font-sans text-xs font-black uppercase tracking-[0.4em] text-white">Trustpilot Reviews</span>
                        </div>
                        <h2 className="font-serif font-black text-4xl md:text-6xl text-white leading-tight">
                            Excellence <span className="text-white italic font-normal opacity-70">Verified</span> <br /> by the Community.
                        </h2>
                    </div>

                    <div className="glass-card p-8 border border-white/10 flex flex-col items-center md:items-start bg-white/5">
                        <div className="flex gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map(i => (
                                <HiStar key={i} className="text-white" size={24} />
                            ))}
                        </div>
                        <div className="text-white font-sans">
                            <span className="text-3xl font-black mr-2">4.7</span>
                            <span className="text-white/50 font-bold uppercase text-[10px] tracking-widest">Trustscore · 40+ Reviews</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {REVIEWS.map((review, idx) => (
                        <div key={idx} className="glass-card p-8 border border-white/5 hover:border-white/20 transition-all duration-500 group flex flex-col bg-white/5">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className={`p-1 ${i < review.rating ? 'bg-white' : 'bg-white/10'}`}>
                                        <FaStar className="text-white" size={10} />
                                    </div>
                                ))}
                            </div>
                            <p className="font-sans text-sm text-white/70 leading-relaxed mb-8 flex-1 italic">
                                "{review.text}"
                            </p>
                            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                <div>
                                    <h4 className="font-serif font-bold text-white">{review.author}</h4>
                                    <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">{review.date}</span>
                                </div>
                                <div className="text-white opacity-50 font-sans font-black text-[10px] tracking-tighter">
                                    TRUSTPILOT
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://www.trustpilot.com/review/mybathandbiscuits.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-black uppercase text-[10px] tracking-[0.3em] hover:tracking-[0.5em] transition-all"
                    >
                        View All Trustpilot Reviews →
                    </a>
                </div>
            </div>
        </section>
    )
}
