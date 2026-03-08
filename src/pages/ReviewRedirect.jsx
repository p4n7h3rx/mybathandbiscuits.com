import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiStar, HiHeart, HiEmojiHappy, HiEmojiSad } from 'react-icons/hi'
import { FaGoogle } from 'react-icons/fa'

const GOOGLE_REVIEW_URL = 'https://www.google.com/maps/place/Bath+%26+Biscuits/@40.0567002,-82.4795366,641m/data=!3m1!1e3!4m8!3m7!1s0x88381565128e5fa3:0x1e991052dd6355e!8m2!3d40.0567002!4d-82.4795366!9m1!1b1!16s%2Fg%2F1tg6qsfl?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D'

export default function ReviewRedirect() {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        if (rating > 3) {
            // Delay slightly for visual feedback before redirect
            const timer = setTimeout(() => {
                window.location.href = GOOGLE_REVIEW_URL
            }, 800)
            return () => clearTimeout(timer)
        } else if (rating > 0 && rating <= 3) {
            setSubmitted(true)
        }
    }, [rating])

    return (
        <section className="min-h-screen pt-32 pb-24 bg-[#FDF8F0] flex items-center justify-center overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-serif font-black text-charcoal/20 whitespace-nowrap rotate-12">
                    FEEDBACK
                </span>
            </div>

            <div className="max-w-xl w-full mx-auto px-6 relative z-10">
                <AnimatePresence mode="wait">
                    {!submitted && rating <= 3 ? (
                        <motion.div
                            key="rating-step"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="glass-card p-12 md:p-16 border border-sage/20 text-center shadow-[0_64px_120px_-32px_rgba(26,26,26,0.1)]"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-sage/5 flex items-center justify-center text-sage mx-auto mb-10 border border-sage/10">
                                <HiHeart size={40} />
                            </div>

                            <h1 className="font-serif font-black text-4xl text-charcoal mb-6 leading-tight">
                                How was your <br /> <span className="text-sage italic font-medium">Experience?</span>
                            </h1>
                            <p className="font-sans text-slate mb-12 leading-relaxed">
                                Your feedback helps us maintain the elite standard of care your pet deserves. Please select a rating below.
                            </p>

                            <div className="flex items-center justify-center gap-4 mb-12">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(0)}
                                        onClick={() => setRating(star)}
                                        className="p-1 transition-transform hover:scale-125 focus:outline-none"
                                    >
                                        <HiStar
                                            size={48}
                                            className={`transition-colors duration-300 ${(hover || rating) >= star ? 'text-gold' : 'text-charcoal/5'
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>

                            <p className="font-sans text-[10px] font-black uppercase tracking-widest text-slate/40">
                                Click a star to continue
                            </p>
                        </motion.div>
                    ) : submitted ? (
                        <motion.div
                            key="thanks-step"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-card p-12 md:p-16 border border-sage/20 text-center shadow-[0_64px_120px_-32px_rgba(26,26,26,0.1)]"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-sage/5 flex items-center justify-center text-sage mx-auto mb-10 border border-sage/10">
                                <HiEmojiHappy size={40} />
                            </div>

                            <h2 className="font-serif font-black text-4xl text-charcoal mb-6 leading-tight">
                                Thank You for <br /> <span className="text-sage italic font-medium">Your Feedback.</span>
                            </h2>
                            <p className="font-sans text-slate mb-12 leading-relaxed">
                                We sincerely appreciate your honesty. Our management team will review your comments to ensure we continue providing Licking County's premier pet experience.
                            </p>

                            <a
                                href="/"
                                className="btn-primary !px-12 magnetic"
                            >
                                Return Home
                            </a>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="redirecting-step"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-card p-12 md:p-16 border border-sage/20 text-center shadow-[0_64px_120px_-32px_rgba(26,26,26,0.1)]"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-sage/5 flex items-center justify-center text-sage mx-auto mb-10 border border-sage/10">
                                <FaGoogle size={32} />
                            </div>

                            <h2 className="font-serif font-black text-3xl text-charcoal mb-6 leading-tight">
                                Sharing Your <br /> <span className="text-sage italic font-medium">5-Star Story.</span>
                            </h2>
                            <p className="font-sans text-slate mb-10 leading-relaxed">
                                We are thrilled you had a great experience! Redirecting you to Google to share your review with the community...
                            </p>

                            <div className="flex items-center justify-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-sage animate-bounce [animation-delay:-0.3s]" />
                                <div className="w-2 h-2 rounded-full bg-sage animate-bounce [animation-delay:-0.15s]" />
                                <div className="w-2 h-2 rounded-full bg-sage animate-bounce" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}
