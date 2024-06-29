import React from 'react';

interface Highlight {
    number: string;
    text: string;
}

interface PropType {
    highlights: Highlight[];
}

const Highlights = (props: PropType) => {
    const { highlights } = props;
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-black font-merriweather">Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center transform transition duration-500 hover:scale-105">
                            <p className="text-4xl font-bold text-black mb-2">{highlight.number}</p>
                            <p className="text-gray-700 font-montserrat">{highlight.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;