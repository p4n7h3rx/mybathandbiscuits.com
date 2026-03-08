import { Suspense, lazy, useRef, useEffect } from 'react'
import { useMagnetic } from '../hooks/useMagnetic'

// Video-1.mp4 integrated as background

function CSSFallbackBubbles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 15 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-gold/10 animate-float"
                    style={{
                        width: `${20 + Math.random() * 60}px`,
                        height: `${20 + Math.random() * 60}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${50 + Math.random() * 50}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${5 + Math.random() * 5}s`,
                    }}
                />
            ))}
        </div>
    )
}

function hasWebGL() {
    try {
        const canvas = document.createElement('canvas')
        return !!(window.WebGLRenderingContext && canvas.getContext('webgl'))
    } catch (e) {
        return false
    }
}

export default function Hero({
    badge = "Since 2009 · Licking County",
    titleLine1 = "Professional Grooming for",
    titleLine2 = "Dogs & Cats in Licking County",
    subtitle = "Where experienced hands, gentle handling, and thoughtful care come together to keep pets healthy, comfortable, and looking their best.",
    videoSrc = "/images/Video-1.mp4",
    primaryCTA = { text: "Book Appointment", href: "https://pawpartner.com/pz/book?p=237080" },
    secondaryCTA = { text: "Explore Services", href: "#services", onClick: null }
}) {
    const videoRef = useRef(null)
    const bookBtnRef = useMagnetic()
    const exploreBtnRef = useMagnetic()

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const handleSeamlessLoop = () => {
            // Trigger loop slightly before end to prevent blank frame
            if (video.currentTime > video.duration - 0.15) {
                video.currentTime = 0
                video.play().catch(() => { })
            }
        }

        const handleStart = () => {
            video.play().catch(() => { })
        }

        video.addEventListener('timeupdate', handleSeamlessLoop)
        video.addEventListener('canplay', handleStart)

        // Ensure it's playing if already loaded
        if (video.readyState >= 2) handleStart()

        return () => {
            video.removeEventListener('timeupdate', handleSeamlessLoop)
            video.removeEventListener('canplay', handleStart)
        }
    }, [videoSrc])

    const defaultScrollToServices = (e) => {
        e.preventDefault()
        const targetId = secondaryCTA.href.replace('#', '')
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    }

    const defaultScrollToBooking = (e) => {
        if (e) e.preventDefault()
        window.open('https://pawpartner.com/pz/book?p=237080', '_blank', 'noopener,noreferrer')
    }

    return (
        <section
            id="hero"
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #FDF8F0 0%, #F5E6D3 60%, #FDF8F0 100%)' }}
        >
            {/* Cinematic Video Background with Multi-Layer Overlays */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-charcoal">
                <div className="absolute inset-0 bg-charcoal/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-[#FDF8F0] z-20" />
                <video
                    ref={videoRef}
                    key={videoSrc}
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover object-top opacity-60"
                />
            </div>

            {/* Hero Content */}
            {/* Hero Content */}
            <div className="relative z-20 text-center px-6 md:px-12 max-w-6xl mx-auto pt-20 md:pt-32">

                {/* Tagline badge */}
                {badge && (
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-10 mt-8 animate-fade-in-up">
                        <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                        <span className="font-sans text-xs font-bold text-warm-white tracking-[0.2em] uppercase">
                            {badge}
                        </span>
                    </div>
                )}

                {/* Main Heading */}
                <h1 className="font-serif font-black text-4xl sm:text-6xl md:text-[5.5rem] text-warm-white mb-8 leading-[0.9] tracking-tighter animate-fade-in-up"
                    style={{
                        animationDelay: '0.2s',
                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                    }}
                >
                    {titleLine1} <br />
                    <span className="text-sage italic font-medium">{titleLine2}</span>
                </h1>

                {/* Subtitle */}
                {subtitle && (
                    <p
                        className="font-sans text-base md:text-xl text-warm-white/90 transform max-w-2xl mx-auto mb-10 md:mb-12 text-balance animate-fade-in-up leading-relaxed"
                        style={{ animationDelay: '0.4s' }}
                    >
                        {subtitle}
                    </p>
                )}

                {/* CTAs */}
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in-up"
                    style={{ animationDelay: '0.6s' }}
                >
                    {primaryCTA && (
                        <a
                            ref={bookBtnRef}
                            href={primaryCTA.href}
                            onClick={primaryCTA.onClick || defaultScrollToBooking}
                            className="btn-primary group magnetic"
                        >
                            {primaryCTA.text}
                        </a>
                    )}
                    {secondaryCTA && (
                        <a
                            ref={exploreBtnRef}
                            href={secondaryCTA.href}
                            onClick={secondaryCTA.onClick || defaultScrollToServices}
                            className="btn-outline !border-charcoal/20 !text-charcoal hover:!bg-charcoal hover:!text-white group magnetic px-10"
                        >
                            {secondaryCTA.text}
                        </a>
                    )}
                </div>
            </div>
        </section>
    )
}
