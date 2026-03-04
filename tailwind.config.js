/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: '#FDF8F0',
                'warm-white': '#FEFCF7',
                champagne: '#F5E6D3',
                gold: '#C9A96E',
                'gold-dark': '#A8873D',
                charcoal: '#3A3A3A', // Updated to match sign/logo background
                slate: '#5A5A5A',
                sage: '#A8C686', // Updated to match salon walls
                sky: '#4CA6D6', // Added from branded outdoor bench
                blush: '#E8C4B8',
                'deep-brown': '#4A3728',
            },
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['DM Sans', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'hero-mobile': ['2.75rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
                'section': ['2.5rem', { lineHeight: '1.2' }],
                'section-mobile': ['2rem', { lineHeight: '1.25' }],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'float-delayed': 'float 7s ease-in-out 2s infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
