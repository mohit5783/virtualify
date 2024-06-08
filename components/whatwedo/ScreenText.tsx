import React from 'react'
import Image from 'next/image';

function ScreenText({ title2, text2, image1 }: { title2: any, text2: any, image1: any }) {
    return (
        <section className="flex md:flex-row flex-col-reverse justify-center md:justify-between items-center p-5 md:p-20 gap-10 bg-white">
            <div className="flex flex-col w-full">
                <h2 className="text-black text-3xl md:text-4xl font-merriweather font-black">
                    {title2}
                </h2>
                <p className="text-black mt-10 font-montserrat text-base md:text-lg">
                    {text2}
                </p>
            </div>
            <div className="flex justify-start w-full">
                <Image
                    src={image1}
                    alt="Banking"
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="w-full object-cover h-[50vh] md:h-full"
                    sizes="(max-width: 768px) 100vw, 75vw"
                />
            </div>
        </section>
    )
}

export default ScreenText;