import { useState } from 'react'
import { HiPlus, HiMinus } from 'react-icons/hi'

const FAQS = [
    {
        question: "Is the Thera-Clean® Microbubble Spa in Newark right for my pet?",
        answer: "The Thera-Clean® system is ideal for any pet, but it's especially beneficial for those with sensitive skin, allergies, persistent odors, or dermatological conditions. Since it uses only water and microscopic bubbles (no chemicals), it is one of the safest and deepest cleanses available in the industry. We're proud to offer this service right here in Newark, OH."
    },
    {
        question: "What grooming products does Bath & Biscuits use?",
        answer: "We use strictly natural, detergent-free, and paraben-free shampoos and conditioners. As part of our care standard, we select products based on your pet's specific skin and coat needs identified during our initial check."
    },
    {
        question: "Do you require up-to-date vaccinations for pet grooming in Licking County?",
        answer: "Yes. For the safety of all our guests and staff, we require proof of Rabies, Distemper, and Bordetella vaccinations for dogs, and Rabies and Distemper for cats. Keeping your pet protected is a core part of our care standard."
    },
    {
        question: "How long does a dog grooming session take in Newark, OH?",
        answer: "A standard one-on-one session typically lasts 2 to 4 hours, depending on the service and coat condition. We prioritize a stress-free experience, giving each pet the time they need to feel comfortable and relaxed rather than rushing through an 'assembly line' process."
    },
    {
        question: "Does Bath & Biscuits groom senior pets or anxious dogs and cats?",
        answer: "Absolutely. With our Registered Veterinary Technician background, we are uniquely equipped to handle the physiological and emotional needs of senior pets and those with high anxiety. We use gentle handling techniques and provide a calm, quiet environment to ensure their well-being."
    },
    {
        question: "Do you offer cat grooming near Newark and Heath, Ohio?",
        answer: "Yes! Our certified feline specialists provide a quiet, stress-free environment designed exclusively for cats. From lion cuts to therapeutic bathing, we serve cats across Newark, Heath, Granville, and the wider Licking County area."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section className="py-24 md:py-40 bg-white">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="text-center mb-20">
                    <span className="font-sans text-xs font-bold text-sage tracking-[0.4em] uppercase mb-8 block">
                        Common Questions
                    </span>
                    <h2 className="font-serif font-black text-5xl md:text-6xl text-charcoal leading-[0.9] tracking-tighter mb-4">
                        Frequently <br />
                        <span className="text-sage italic font-medium">Asked.</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`rounded-3xl border transition-all duration-500 overflow-hidden ${openIndex === idx ? 'bg-sage/5 border-sage/20 shadow-xl shadow-sage/5' : 'bg-white border-charcoal/5 hover:border-charcoal/10'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                className="w-full px-8 py-8 flex items-center justify-between text-left group"
                            >
                                <span className={`font-serif text-xl md:text-2xl transition-colors duration-500 ${openIndex === idx ? 'text-charcoal' : 'text-charcoal/60 group-hover:text-charcoal'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === idx ? 'bg-sage text-white rotate-180' : 'bg-charcoal/5 text-charcoal/40'}`}>
                                    {openIndex === idx ? <HiMinus /> : <HiPlus />}
                                </div>
                            </button>

                            <div
                                className={`transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-8 pb-8 pr-16">
                                    <p className="font-sans text-lg text-slate leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="font-sans text-slate/40 text-sm mb-6">Have a more specific inquiry about your pet?</p>
                    <a
                        href="mailto:info@mybathandbiscuits.com"
                        className="font-sans text-xs font-bold text-sage uppercase tracking-widest underline decoration-sage/20 hover:decoration-sage transition-all"
                    >
                        Contact Our Experienced Team
                    </a>
                </div>
            </div>

            {/* FAQPage Schema for Google Featured Snippets */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": FAQS.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })
            }} />
        </section>
    )
}
