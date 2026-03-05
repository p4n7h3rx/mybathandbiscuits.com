import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaInstagram, FaFacebookF, FaGoogle, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useMagnetic } from '../hooks/useMagnetic'

const QUICK_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Thera-Clean®', href: '/grooming' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Boutique', href: '/bakery' },
    { name: 'Book Online', href: 'https://pawpartner.com/pz/book?p=237080' },
]

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const igRef = useMagnetic()
    const fbRef = useMagnetic()
    const googleRef = useMagnetic()
    const trustpilotRef = useMagnetic()

    return (
        <footer className="bg-charcoal text-white/40 pt-32 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
                    {/* Brand Meta */}
                    <div className="md:col-span-5">
                        <div className="mb-10">
                            <div className="h-20 w-20 bg-charcoal rounded-full p-2 shadow-2xl ring-1 ring-white/10 mb-6 flex items-center justify-center overflow-hidden transition-transform duration-500 hover:scale-105">
                                <img
                                    src="/images/Logo.png"
                                    alt="Bath & Biscuits"
                                    className="h-full w-full object-contain opacity-90"
                                />
                            </div>
                        </div>
                        <p className="font-sans text-lg text-white/50 leading-relaxed max-w-sm mb-12">
                            Pioneering a higher standard of pet care in Ohio. Artisan grooming, clinical therapy, and curated essentials.
                        </p>
                        <div className="flex gap-6">
                            <a
                                ref={igRef}
                                href="https://www.instagram.com/bathnbiscuits"
                                className="text-white/20 hover:text-sage transition-colors magnetic"
                            >
                                <FaInstagram size={18} />
                            </a>
                            <a
                                ref={fbRef}
                                href="https://www.facebook.com/bathnbiscuits"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/20 hover:text-sage transition-colors magnetic"
                            >
                                <FaFacebookF size={16} />
                            </a>
                            <a
                                ref={googleRef}
                                href="https://maps.app.goo.gl/VrhQ2gPsB4kPxgLn7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/20 hover:text-sage transition-colors magnetic"
                                title="Google Business Profile"
                            >
                                <FaGoogle size={16} />
                            </a>
                            <a
                                ref={trustpilotRef}
                                href="https://www.trustpilot.com/review/mybathandbiscuits.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/20 hover:text-sage transition-colors magnetic"
                                title="Trustpilot"
                            >
                                <FaStar size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-3">
                        <h4 className="font-sans text-xs font-black text-white/20 tracking-[0.3em] uppercase mb-10">Archive</h4>
                        <ul className="space-y-4">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.name}>
                                    {link.href.startsWith('http') ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-sans text-sm font-bold text-white/40 hover:text-white transition-colors cursor-pointer"
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className="font-sans text-sm font-bold text-white/40 hover:text-white transition-colors cursor-pointer"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Detail */}
                    <div className="md:col-span-4">
                        <h4 className="font-sans text-xs font-black text-white/20 tracking-[0.3em] uppercase mb-10">Concierge</h4>
                        <div className="space-y-8">
                            <div>
                                <span className="block font-sans text-[10px] font-black text-white/20 uppercase tracking-widest mb-2">Location</span>
                                <a href="https://maps.app.goo.gl/VrhQ2gPsB4kPxgLn7" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                                    111 Union St · Granville, OH
                                </a>
                            </div>
                            <div>
                                <span className="block font-sans text-[10px] font-black text-white/20 uppercase tracking-widest mb-2">Inquiries</span>
                                <a href="tel:7405870011" className="text-white/60 hover:text-white transition-colors block">(740) 587-0011</a>
                                <a href="mailto:info@mybathandbiscuits.com" className="text-white/60 hover:text-white transition-colors">info@mybathandbiscuits.com</a>
                            </div>
                            <div>
                                <span className="block font-sans text-[10px] font-black text-white/20 uppercase tracking-widest mb-2">Hours</span>
                                <p className="text-white/60">Mon – Fri · 09:00 — 17:00</p>
                                <p className="text-white/60">Sat · 09:00 — 12:00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Credits */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <span className="font-sans text-[9px] font-black text-white/10 uppercase tracking-[0.3em]">
                            © {new Date().getFullYear()} Bath and Biscuits
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/5" />
                        <span className="font-sans text-[9px] font-black text-white/10 uppercase tracking-[0.3em]">
                            All Rights Reserved
                        </span>
                    </div>

                    <a
                        href="https://barkboostsolutions.com"
                        className="font-sans text-[9px] font-black text-white/10 hover:text-sage uppercase tracking-[0.5em] transition-colors"
                    >
                        Made By Bark Boost Solution
                    </a>
                </div>
            </div>
        </footer>
    )
}
