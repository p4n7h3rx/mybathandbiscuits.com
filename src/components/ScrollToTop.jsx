import { useState, useEffect } from 'react'
import { HiChevronUp } from 'react-icons/hi'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 600)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black 
        flex items-center justify-center shadow-2xl shadow-black/30
        hover:scale-110 transition-all duration-300 cursor-pointer
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            aria-label="Scroll to top"
        >
            <HiChevronUp className="text-warm-white" size={24} />
        </button>
    )
}
