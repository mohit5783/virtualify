// components/whatwedo/FAQ.tsx
"use client"
import React, { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface PropType {
    items: FAQItem[];
}

const FAQ = (props: PropType) => {
    const { items } = props;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black">
            <div className="p-12 pb-1 flex justify-between items-center my-4">
                <h1 className="text-2xl md:text-4xl font-raleway font-semibold font-merriweather bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent uppercase">
                    Frequently Asked Questions
                </h1>
            </div>
            <div className="container mx-auto max-w-3xl py-16 px-4 md:px-8">
                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div key={index} className="rounded-lg shadow-md overflow-hidden">
                            <button
                                className="w-full text-left p-4 focus:outline-none flex justify-between items-center"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-lg font-semibold font-montserrat">{item.question}</h3>
                                <svg
                                    className={`w-6 h-6 transition-transform duration-200 ${openIndex === index ? 'transform rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="p-4">
                                    <p className="text-white font-montserrat">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;