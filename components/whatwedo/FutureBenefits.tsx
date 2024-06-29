import React from 'react';

interface Benefit {
    icon: string;
    title: string;
    description: string;
}

interface PropType {
    benefits: Benefit[];
}

const FutureBenefits = (props: PropType) => {
    const { benefits } = props;
    return (
        <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 font-merriweather text-white">What to Expect</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-black rounded-lg shadow-md p-6 flex flex-col items-center text-center justify-between">
                            <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 mb-4" />
                            <div className='justify-between'>
                                <h3 className="text-xl font-semibold mb-2 font-merriweather text-white">{benefit.title}</h3>
                                <p className="text-gray-600 font-montserrat text-white">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FutureBenefits;