import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { useMagnetic } from '../hooks/useMagnetic'

const BOOKING_URL = 'https://pawpartner.com/pz/book?p=237080'
const NAV_LINKS = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'Grooming', href: '/grooming', type: 'route' },
    { name: 'About', href: '/about', type: 'route' },
    { name: 'Testimonials', href: '/#testimonials', type: 'anchor' },
    { name: 'Bakery', href: '/bakery', type: 'route' },
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'} ${activeScrolled ? 'pt-2 md:pt-4' : 'pt-6 md:pt-8'}`}
        >
            <nav
                className={`transition-all duration-700 mx-auto px-4 ${activeScrolled ? 'max-w-5xl' : 'max-w-7xl'}`}
            >
                <div className={`flex items-center justify-between gap-4 md:gap-8 transition-all duration-700 nav-pill ${activeScrolled
                    ? 'bg-black/95 shadow-2xl border border-white/10 !px-8'
                    : 'bg-transparent border-transparent'
                    }`}>
                    {/* Logo Area */}
                    <Link
                        to="/"
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center gap-3 md:gap-4 cursor-pointer group"
                    >
                        <div className={`transition-all duration-500 flex items-center justify-center aspect-square ${activeScrolled ? 'h-12 md:h-14' : 'h-16 md:h-20'}`}>
                            <img
                                src="/images/BB.png"
                                alt="Bath & Biscuits"
                                className="h-full w-auto object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={`font-serif font-black transition-all duration-700 tracking-tight block leading-none ${activeScrolled ? 'text-base text-white' : 'text-xl text-white'}`}>
                                Bath & Biscuits
                            </span>
                            <span className={`font-sans font-black uppercase tracking-[0.3em] transition-all duration-700 block mt-1.5 whitespace-nowrap ${activeScrolled ? 'text-[8px] text-white/50' : 'text-[9px] text-white/60'}`}>
                                Newark · Ohio
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={`hidden lg:flex items-center transition-all duration-700 ${activeScrolled ? 'gap-6 xl:gap-10' : 'gap-8 xl:gap-14'}`}>
                        {NAV_LINKS.map((link) => (
                            link.type === 'external' ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`nav-link ${activeScrolled ? 'text-white/70 hover:text-white' : 'text-white/80 hover:text-white'}`}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className={`nav-link ${activeScrolled ? 'text-white/70 hover:text-white' : 'text-white/80 hover:text-white'}`}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:block">
                            <a
                                ref={bookBtnRef}
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn-primary magnetic whitespace-nowrap !tracking-[0.1em] shadow-xl ${activeScrolled ? '!px-8 !py-3 !text-[10px]' : '!px-10 !py-4'}`}
                            >
                                Book Salon
                            </a>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className={`lg:hidden p-3 rounded-full transition-all duration-300 cursor-pointer ${activeScrolled || isMobileOpen ? 'text-white bg-white/10' : 'text-white hover:bg-white/10'}`}
                            aria-label="Toggle menu"
                        >
                            {isMobileOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed inset-0 bg-black z-40 transition-all duration-500 ${isMobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
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
                                className="font-serif text-3xl md:text-4xl text-white hover:text-white/70 transition-colors duration-300 cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={(e) => handleNavClick(e, link)}
                                className="font-serif text-3xl md:text-4xl text-white hover:text-white/70 transition-colors duration-300 cursor-pointer"
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

