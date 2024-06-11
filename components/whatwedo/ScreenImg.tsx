import React from 'react'
import Link from "next/link";



const ScreenImg = ({ title1, text1, AnimatedWavyBackground, BankCreditCard }: { title1: any, text1: any, AnimatedWavyBackground: any, BankCreditCard: any }) => {
    return (
        <section className="relative">
            <div className="p-4 md:p-10 flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-1/3 px-2 md:px-5 py-10">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold font-raleway">
                        {title1}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl font-montserrat text-[var(--neon-green)] drop-shadow-md">
                        {text1}
                    </p>
                    <div className="flex justify-start mt-8">
                        <Link
                            href="/contact-us"
                            className="flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-lg md:text-xl"
                        >
                            <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Let's talk
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-end mt-10 md:mt-0 ">
                    <BankCreditCard />
                </div>
            </div>
            <div className="hidden md:block absolute left-0 right-0 bottom-0 -z-10 ">
                <AnimatedWavyBackground />
            </div>
        </section>
    )
};

export default ScreenImg