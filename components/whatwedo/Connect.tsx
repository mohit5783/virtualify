import Image from 'next/image';
import Link from 'next/link';

interface PropType {
    title: string,
    description: string,
    l1: string,
    l2: string,
    l3: string,
    bt: string
}

const Connect = (props: PropType) => {
    const { title, description, l1, l2, l3, bt } = props;
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left side - Image */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <Image
                            src="/our-people.webp"
                            alt="Web App Development"
                            width={600}
                            height={400}
                            layout="responsive"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div className="w-full md:w-1/2 md:pl-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-merriweather">
                            {title}
                        </h2>
                        <p className="text-xl text-gray-600 mb-6 font-montserrat">
                            {description}
                        </p>
                        <ul className="text-gray-600 mb-6 space-y-2">
                            {l1 && (
                                <li className="flex items-center font-montserrat">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {l1}
                                </li>
                            )}
                            {l2 && (
                                <li className="flex items-center font-montserrat">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {l2}
                                </li>
                            )}
                            {l3 && (
                                <li className="flex items-center font-montserrat">
                                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    {l3}
                                </li>
                            )}
                        </ul>
                        <div className="flex justify-center mt-8">
                            <Link
                                href="/what-we-do/services"
                                className="flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-lg md:text-xl"
                            >
                                <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    {bt}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connect;
