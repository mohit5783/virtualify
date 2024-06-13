import React from 'react';
import { ImPointRight } from "react-icons/im";

interface BenefitsProps {
    benefits: string[];
}

const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
    return (
        <section className="flex md:flex-row flex-col justify-center md:justify-between items-center p-5 md:p-20 gap-10 bg-black">
            <div className="text-left">
                <h6 className="section-title mb-6 font-raleway font-semibold text-white text-xl">BENEFITS</h6>
                <div className="flex flex-col gap-4">
                    {benefits.map((benefit, index) => (
                        <div className="flex items-center mb-4" key={index}>
                            <ImPointRight className="text-xl text-white" />
                            <h6 className="text-xl text-white font-montserrat ml-4">{benefit}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
