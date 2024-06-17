"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Panel {
    heading: string;
    content: string;
    image: string;
    title: string;
}

interface PropType {
    panels: Panel[];
    text1: string;
}

const BusinessService = (props: PropType) => {
    const { panels, text1 } = props;
    const [openPanel, setOpenPanel] = useState<number | null>(0);

    const handleToggle = (panel: number) => {
        setOpenPanel(openPanel === panel ? null : panel);
    };

    return (
        <div className="container mx-auto mt-12 mb-8">
            <div className="flex flex-col w-full">
                <h2 className="text-white text-3xl md:text-4xl font-merriweather font-white">
                    {text1} Solutions for Your Business
                </h2>
                <p className="text-white mt-10 font-montserrat text-base md:text-lg">
                    Whether you&apos;re just beginning with {text1} or looking to integrate responsible {text1} practices, we provide comprehensive support throughout your {text1} journey, ensuring seamless adoption and implementation at every stage.
                </p>
            </div>
            <div className="flex mt-4">
                {/* Left side - headings */}
                <div className="w-1/3">
                    <div className="space-y-4">
                        {panels.map((panel, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md ">
                                <div className="p-0 rounded-lg" role="tab">
                                    <h4 className="text-lg font-semibold">
                                        <button
                                            className={`flex justify-center md:justify-between items-center w-full text-black bg-white px-8 py-4 rounded-lg focus:outline-none ${openPanel === index ? 'bg-gray-300' : 'bg-white'}`}
                                            onClick={() => handleToggle(index)}
                                        >
                                            {panel.heading}
                                            <span className={`fa ${openPanel === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></span>
                                        </button>
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side - content */}
                <div className="w-2/3 pl-8">
                    {openPanel !== null && (
                        <div className="bg-white p-6 rounded-lg shadow-md text-gray-600">
                            <h4 className="text-xl font-semibold font-merriweather mb-4">{panels[openPanel].heading}</h4>
                            <p className='font-montserrat'>{panels[openPanel].content}</p>
                            <Image
                                src={panels[openPanel].image}
                                alt={panels[openPanel].title}
                                quality={90}
                                height={500}
                                width={750}
                                loading="lazy"
                                className="w-3/4 h-64 mr-4 border-2 border-black my-4"
                            />
                            <div className="flex justify-start mt-8">
                                <Link
                                    href="/contact-us"
                                    className="flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-lg md:text-xl"
                                >
                                    <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Read more...
                                    </span>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BusinessService;
