// components/whatwedo/ProcessTimeline.tsx

import React from "react";

const steps = [
    { title: "Requirements Analysis", description: "Understanding your goals and defining serverless application specifications." },
    { title: "Architecture Design", description: "Designing a scalable, event-driven serverless architecture." },
    { title: "Function Development", description: "Building serverless functions using cloud-native services and best practices." },
    { title: "Data Flow Optimization", description: "Implementing efficient data flows between serverless components." },
    { title: "Testing & Optimization", description: "Rigorous testing and performance optimization for serverless environments." },
    { title: "Deployment & Monitoring", description: "Deploying your serverless application and setting up comprehensive monitoring." },
];

const ProcessTimeline = () => {
    return (
        <section className="bg-black py-16 px-4 md:px-8">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl text-center mb-12 font-raleway font-semibold font-merriweather bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent uppercase">Our Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-start border border-gray-200 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-green1 text-white font-bold rounded-full mr-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white font-merriweather">{step.title}</h3>
                            </div>
                            <div>
                                <p className="text-white font-montserrat">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
