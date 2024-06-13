import React from 'react';
import Image from 'next/image';

const PartnersItems = [
    { image: '/datasphere 1.png', title: 'DataSphere' },
    { image: '/innovatelabs 1.png', title: 'InnovateLabs' },
    { image: '/techcraft.jpg', title: 'TechCraft Solutions' },
    { image: '/DI.png', title: 'Digital Innovators' },
    { image: '/smartcorp.png', title: 'SmartCorp' },
    { image: '/ecompulse.png', title: 'EcomPulse' },
];

const Partners = () => {
    return (
        <section className="flex md:flex-row flex-col justify-center md:justify-between items-center p-5 md:p-20 gap-10 bg-white">
            <div className="text-left w-full">
                <h6 className="section-title mb-6 font-raleway font-semibold text-black text-xl">OUR PARTNERS</h6>
                <div className="flex flex-col md:flex-row gap-4">
                    {PartnersItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-4">
                            <Image
                                src={item.image}
                                alt={item.title}
                                quality={90}
                                height={500}
                                width={750}
                                loading="lazy"
                                className="w-3/4 md:w-full mr-4 border-2 border-black"
                            />
                            <h6 className="text-xl text-black mb-8 font-montserrat">{item.title}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
