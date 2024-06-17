import React from 'react';
import Image from 'next/image';
import { ImPointRight } from "react-icons/im";

interface StrengthProps {
    text1: string;
}

const Strength = (props: StrengthProps) => {
    const { text1 } = props;
    return (
        <section className="flex md:flex-row flex-col justify-center md:justify-between items-center p-5 md:p-20 gap-10 bg-black">
            <div className="text-left">
                <h6 className="section-title mb-6 font-raleway font-semibold text-white text-xl">OUR STRENGTH</h6>
                {/* <!-- column --> */}
                <div className="flex flex-col gap-4 ">
                    <div className="flex flex-row-reverse items-center justify-between">
                        <Image
                            src='/analytics 1.png'
                            alt=''
                            quality={90}
                            height={100}
                            width={100}
                            loading="lazy"
                            className="w-1/6 md:w-1/12 mr-4 ml-10"
                        />
                        <div className="flex items-center mb-4">
                            <ImPointRight className="text-xl text-white" />
                            <h6 className="text-xl text-white font-montserrat ml-4">A dynamic team of highly skilled {text1} experts</h6>
                        </div>

                    </div>

                    <div className="flex flex-row-reverse items-center justify-between">
                        <Image
                            src='/S1.png'
                            alt=''
                            quality={90}
                            height={100}
                            width={100}
                            loading="lazy"
                            className="w-1/6 md:w-1/12 mr-4  ml-10"
                        />
                        <div className="flex items-center mb-4">
                            <ImPointRight className="text-xl text-white" />
                            <h6 className="text-xl text-white font-montserrat ml-4">Strategic alliances with leading cloud providers and {text1} innovators</h6>
                        </div>

                    </div>

                    <div className="flex flex-row-reverse items-center justify-between">
                        <Image
                            src='/S2.png'
                            alt=''
                            quality={90}
                            height={100}
                            width={100}
                            loading="lazy"
                            className="w-1/6 md:w-1/12 mr-4  ml-10"
                        />
                        <div className="flex items-center mb-4">
                            <ImPointRight className="text-xl text-white" />
                            <h6 className="text-xl text-white font-montserrat ml-4">Cutting-edge research capabilities and a robust network of co-innovation partners</h6>
                        </div>

                    </div>
                </div>
                {/* <!-- end of column --> */}
            </div>
            {/* <!-- end of container --> */}
        </section>
    );
};

export default Strength;
