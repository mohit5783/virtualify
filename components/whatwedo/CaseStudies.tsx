// components/whatwedo/CaseStudies.tsx

import React from "react";
import Image from "next/image";

interface CaseStudy {
    title: string;
    description: string;
    image: string;
}

interface PropType {
    caseStudies: CaseStudy[];
}

const CaseStudies = (props: PropType) => {
    const { caseStudies } = props;
    return (
        <section className="bg-gray-100 py-16 px-4 md:px-8">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 font-raleway text-black font-merriweather">Innovation Spotlight</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                            <div className="relative h-48 md:h-64">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    layout="fill"
                                    objectFit="cover"
                                    quality={90}
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-black font-merriweather">{study.title}</h3>
                                <p className="text-gray-600 font-montserrat">{study.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;