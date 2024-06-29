import Image from "next/image";
import Link from "next/link";
import webAppImage from "../../public/core-capabilities.png"; // Make sure to have this image

type Technology = {
    name: string;
    icon: JSX.Element;
};

type PropType = {
    webAppTechnologies: Technology[];
    text: string;
};

const TechStack = (props: PropType) => {
    const { webAppTechnologies, text } = props;
    return (
        <section className="bg-[var(--neon-yellow-green)] py-16 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-4 font-merriweather">
                        {text} Tech Stack
                    </h1>
                    <p className="text-xl text-gray-600 font-montserrat">
                        Leveraging cutting-edge technologies to build powerful applications
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {webAppTechnologies.map((tech, index) => (
                                <li key={index} className="flex items-center gap-3 p-3 shadow-md">
                                    <span className="text-3xl text-black">{tech.icon}</span>
                                    <p className="text-lg font-semibold text-gray-700 font-montserrat">{tech.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <Image
                            src={webAppImage}
                            alt="Web App Development"
                            width={500}
                            height={500}
                            loading="lazy"
                            quality={90}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                <div className="flex justify-center py-3">
                    <Link
                        href="what-we-do/technologies"
                        className="mt-8 flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-xl"
                    >
                        <span className="px-8 py-3 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Contact Us for Projects
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
