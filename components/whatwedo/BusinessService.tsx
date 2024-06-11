"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const panels = [
    {
        heading: "Enterprise AI",
        content: "VSC's AI InsightNext™ empowers enterprises to adopt cutting-edge technologies, enabling the development or enhancement of custom LLM models and embedded generative AI applications.",
        image: "/Enterprise AI.jpg",
        title: "Enterprise AI"
    },
    {
        heading: "Responsible AI",
        content: "Implementing Gen AI and Large Language Model-based solutions is intricate. Discover how our services can facilitate successful, ethical, and responsible AI implementations.",
        image: "/responsible-ai.jpg",
        title: "Responsible AI"
    },
    {
        heading: "Data and AI",
        content: "Explore our Data and AI services on Google Cloud, designed to provide intelligent analytics that accelerate data modernization and offer unparalleled flexibility to enterprises.",
        image: "/data-and-ai.jpg",
        title: "Data and AI"
    },
    {
        heading: "Machine Learning on AWS",
        content: "Learn about VSC's AIML solutions powered by AWS SageMaker, and how AI technologies like intelligent robotics and process automation can enhance customer experience.",
        image: "/Machine Learning on AWS.jpg",
        title: "Machine Learning on AWS"
    },
    {
        heading: "Cloud and AI",
        content: "Discover how integrating Microsoft 365 Copilot with business applications can help enterprises transform the workplace and significantly boost productivity.",
        image: "/Cloud and AI.jpg",
        title: "Cloud and AI"
    },
    {
        heading: "Generative AI Solutions",
        content: "VSC guides enterprises through the journey of generative AI-based business transformations using Microsoft Azure Open AI and GitHub Copilot. Find out how we can help.",
        image: "/Generative AI Solutions.jpg",
        title: "Generative AI Solutions"
    },
    {
        heading: "AI for Operations",
        content: "VSC's Cognix for Network aims to create resilient and business-aligned enterprise networks with solutions like NaaS, SASE, TNaaS, and open/cloud networking.",
        image: "/AI for Operations.jpg",
        title: "AI for Operations"
    }
];

const BusinessService: React.FC = () => {
    const [openPanel, setOpenPanel] = useState<number | null>(0);

    const handleToggle = (panel: number) => {
        setOpenPanel(openPanel === panel ? null : panel);
    };

    return (
        <div className="container mx-auto mt-12">
            <div className="flex flex-col w-full">
                <h2 className="text-white text-3xl md:text-4xl font-merriweather font-white">
                    AI Solutions for Your Business
                </h2>
                <p className="text-white mt-10 font-montserrat text-base md:text-lg">
                    Whether you're just beginning with AI or looking to integrate responsible AI practices, we provide comprehensive support throughout your AI journey, ensuring seamless adoption and implementation at every stage.
                </p>
            </div>
            <div className="flex mt-4">
                {/* Left side - headings */}
                <div className="w-1/3">
                    <div className="space-y-4">
                        {panels.map((panel, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md">
                                <div className="p-0 rounded-lg" role="tab">
                                    <h4 className="text-lg font-semibold">
                                        <button
                                            className={`flex justify-between items-center w-full text-white bg-red-600 px-8 py-4 rounded-lg focus:outline-none ${openPanel === index ? 'bg-red-700' : 'bg-red-600'}`}
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
