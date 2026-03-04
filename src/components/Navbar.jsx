import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { useMagnetic } from '../hooks/useMagnetic'

const BOOKING_URL = 'https://pawpartner.com/pz/book?p=237080'
const NAV_LINKS = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'Services', href: '/grooming', type: 'route' },
    { name: 'About', href: '/about', type: 'route' },
    { name: 'Testimonials', href: '/#testimonials', type: 'anchor' },
    { name: 'Boutique', href: '/bakery', type: 'route' },
    { name: 'Contact', href: BOOKING_URL, type: 'external' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const isLightPage = ['/review'].includes(pathname)
    const activeScrolled = isScrolled || isLightPage

    const logoRef = useMagnetic()
    const bookBtnRef = useMagnetic()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            setIsScrolled(currentScrollY > 50)

            if (currentScrollY > lastScrollY && currentScrollY > 300) {
                setIsHidden(true)
            } else {
                setIsHidden(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const handleNavClick = (e, link) => {
        setIsMobileOpen(false)

        if (link.type === 'external') {
            e.preventDefault()
            window.open(link.href, '_blank', 'noopener,noreferrer')
            return
        }

        if (link.type === 'anchor') {
            const [path, hash] = link.href.split('#')
            const isTargetHome = path === '/' || path === ''
            const isCurrentHome = pathname === '/'

            if ((isTargetHome && isCurrentHome) || pathname === path) {
                // Same page scroll
                e.preventDefault()
                const el = document.querySelector(`#${hash}`)
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' })
                }
            } else {
                // Different page navigation
                // navigate(link.href) is handled by default Link behavior if not prevented
            }
        }
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isHidden ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <nav
                className={`transition-all duration-700 mx-auto w-full ${activeScrolled
                    ? 'max-w-6xl mt-0 lg:mt-6'
                    : 'max-w-7xl mt-6'
                    }`}
            >
                <div className={`px-6 md:px-8 py-6 md:py-5 flex items-center justify-between transition-all duration-700 ${activeScrolled
                    ? 'glass-card !bg-white/70 shadow-2xl shadow-charcoal/5 border-white/50 backdrop-blur-3xl rounded-none lg:rounded-[2rem]'
                    : 'bg-transparent border-transparent'
                    }`}>
                    {/* Logo */}
                    <Link
                        ref={logoRef}
                        to="/"
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center gap-4 cursor-pointer group magnetic"
                    >
                        <div className="w-16 h-16 rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-110 shadow-2xl border-2 border-white/40 bg-white p-1.5">
                            <img
                                src="/images/Logo.webp"
                                alt="B"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className={`font-serif font-black text-xl leading-none block tracking-tighter transition-colors duration-700 ${activeScrolled ? 'text-charcoal' : 'text-warm-white'}`}>
                                Bath & Biscuits
                            </span>
                            <span className={`font-sans text-[9px] font-black tracking-[0.2em] uppercase leading-none mt-1 block transition-colors duration-700 ${activeScrolled ? 'text-sage' : 'text-sage/90'}`}>
                                Pet Salon & Boutique
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            link.type === 'external' ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`font-sans text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer ${activeScrolled
                                        ? 'text-charcoal/50 hover:text-charcoal'
                                        : 'text-warm-white/70 hover:text-warm-white'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className={`font-sans text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer ${activeScrolled
                                        ? 'text-charcoal/50 hover:text-charcoal'
                                        : 'text-warm-white/70 hover:text-warm-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>

                    <div className="hidden lg:block">
                        <a
                            ref={bookBtnRef}
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary !px-8 !py-4 magnetic"
                        >
                            Book Salon
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className={`lg:hidden p-2 transition-colors cursor-pointer ${activeScrolled || isMobileOpen ? 'text-charcoal' : 'text-warm-white'}`}
                        aria-label="Toggle menu"
                    >
                        {isMobileOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 bg-warm-white z-40 transition-all duration-500 ${isMobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-6 md:gap-8 pt-20">
                    {NAV_LINKS.map((link) => (
                        link.type === 'external' ? (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-serif text-3xl md:text-4xl text-charcoal hover:text-gold transition-colors duration-300 cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={(e) => handleNavClick(e, link)}
                                className="font-serif text-3xl md:text-4xl text-charcoal hover:text-gold transition-colors duration-300 cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <a
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary mt-4"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </header>
    )
}

