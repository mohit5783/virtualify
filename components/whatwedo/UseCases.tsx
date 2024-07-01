import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface UseCase {
    title: string;
    description: string;
}

interface PropType {
    cases: UseCase[];
}

const UseCases = (props: PropType) => {
    const { cases } = props;
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 font-merriweather bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent">
                    Innovative Use Cases
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {cases.map((useCase, index) => (
                        <div key={index} className="bg-gray-900 rounded-lg p-8 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800">
                            <h3 className="text-2xl font-semibold mb-4 font-merriweather bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent">
                                {useCase.title}
                            </h3>
                            <p className="text-gray-300 font-montserrat mb-6">{useCase.description}</p>
                            <div className="flex items-center text-[var(--neon-yellow)] font-semibold group cursor-pointer">
                                <span className="mr-2">Learn More</span>
                                <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;