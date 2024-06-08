"use client"
import React, { useState } from 'react';
import Link from 'next/link';

interface SectionItem {
    title: string;
    description: string;
    link: string | URL;
}

interface SectionContent {
    items: SectionItem[];
}

interface Section {
    id: string;
    title: string;
}

interface NavbarProps {
    setActiveSection: (section: string) => void;
    activeSection: string;
    sections: Section[];
}

interface Screen3Props {
    content: {
        [key: string]: SectionContent;
    };
    sections: Section[];
    mainp: String;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveSection, activeSection, sections }) => {
    return (
        <div>
            <h1 className='text-xl text-black ml-10 font-merriweather'>YOUR CHALLENGE</h1>
            <nav className="bg-white text-black font-merriweather text-xl ml-5">
                <ul className="flex flex-col md:flex-row justify-around p-4 md:p-8">
                    {sections.map((section) => (
                        <li
                            key={section.id}
                            className={`hover:text-black-300 ${activeSection === section.id ? 'relative' : ''} mx-5`}
                        >
                            <a href={`#${section.id}`} onClick={() => setActiveSection(section.id)}>
                                {section.title}
                            </a>
                            <div className='mt-2'>
                                {activeSection === section.id && <hr className="border-t-4 border-blue-500 absolute bottom-0 w-4/5" />}
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

const Screen3: React.FC<Screen3Props> = ({ content, sections, mainp }) => {
    const [activeSection, setActiveSection] = useState(sections[0].id);

    const renderSectionContent = (sectionContent: SectionContent) => {
        return sectionContent.items.map((item, index) => (
            <>
                <div key={index} className="mb-8">
                    <h2 className='font-merriweather'>{item.title}</h2>
                    <p className='font-montserrat text-base md:text-lg my-5'>{item.description}</p>
                </div>
                <div className="flex justify-start my-8">
                    <Link
                        href={item.link}
                        className="flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-lg md:text-xl"
                    >
                        <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Let's talk
                        </span>
                    </Link>
                </div>
            </>
        ));
    };

    return (
        <div className='bg-white'>
            <h1 className='text-3xl text-black mb-5 ml-10 font-merriweather'>{mainp}</h1>
            <Navbar setActiveSection={setActiveSection} activeSection={activeSection} sections={sections} />
            <h1 className='text-xl text-black ml-10 font-merriweather'>OUR SOLUTIONS</h1>
            {sections.map((section) => (
                activeSection === section.id && (
                    <section id={section.id} key={section.id} className="p-8 text-black text-3xl ml-10">
                        {renderSectionContent(content[section.id])}
                    </section>
                )
            ))}
        </div>
    );
};

export default Screen3;
