import React from 'react';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface PropType {
    features: Feature[];
}

const Features = (props: PropType) => {
    const { features } = props;
    return (
        <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 text-white font-merriweather">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center justify-between">
                            <h3 className="text-xl font-semibold mb-2 font-merriweather">{feature.title}</h3>
                            <div className='flex flex-col items-center text-center '>
                                <div className="text-4xl text-[var(--neon-green)] mb-4">
                                    {feature.icon}
                                </div>
                                <div>
                                    <p className="text-white font-montserrat">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;