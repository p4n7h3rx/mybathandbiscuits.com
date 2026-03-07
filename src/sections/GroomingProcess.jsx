import { HiClipboardCheck, HiBeaker, HiSparkles, HiScissors, HiHeart } from 'react-icons/hi'

const STEPS = [
    {
        title: 'Coat & Skin Check',
        text: 'We perform a thorough coat and skin check at the start of every appointment to ensure your pet is comfortable and ready for grooming.',
        icon: HiClipboardCheck,
        image: '/images/IMG_9234.webp'
    },
    {
        title: 'Relaxing Bath',
        text: 'A deep-cleansing organic bath using gentle water pressure to wash away stress and revitalize your pet’s skin.',
        icon: HiBeaker,
        image: '/images/TheraCleanMicroBubblesExample.webp'
    },
    {
        title: 'Individual Styling',
        text: 'Our experienced stylists use gentle handling and careful scissoring to give your pet a look that’s tailored just for them.',
        icon: HiScissors,
        image: '/images/Grooming-1.webp'
    },
    {
        title: 'Finishing Touches',
        text: 'A signature spritz, paw-pad treatment, and an optional capture in our client photo area.',
        icon: HiHeart,
        image: '/images/Beautiful+doodle+groomed+Dog.webp'
    }
]

export default function GroomingProcess() {
    return (
        <section className="py-24 md:py-40 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-8 block">The Method</span>
                    <h2 className="font-serif font-black text-4xl md:text-6xl text-charcoal mb-8 leading-tight">The Process of <span className="text-sage italic font-medium">Perfection.</span></h2>
                    <p className="font-sans text-lg text-slate leading-relaxed">We’ve developed a thoughtful workflow that prioritizes your pet’s comfort and happiness throughout their visit.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STEPS.map((step, idx) => {
                        const Icon = step.icon
                        return (
                            <div key={idx} className="group relative">
                                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl relative">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
                                    <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-xl flex items-center justify-center text-charcoal shadow-xl">
                                        <Icon size={24} />
                                    </div>
                                </div>
                                <div className="px-2">
                                    <span className="font-serif italic text-sage text-2xl mb-4 block">0{idx + 1}</span>
                                    <h4 className="font-serif font-bold text-2xl text-charcoal mb-4">{step.title}</h4>
                                    <p className="font-sans text-sm text-slate leading-relaxed opacity-80">{step.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
