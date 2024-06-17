import React from 'react';
import Image from 'next/image';

interface ApproachItem {
    image: string;
    title: string;
}

interface PropType {
    approachItems: ApproachItem[];
}

const ApproachSection = (props: PropType) => {
    const { approachItems } = props;
    return (
        <section className="flex md:flex-row flex-col justify-center md:justify-between items-center p-5 md:p-20 gap-10 bg-black">
            <div className="text-left">
                <h6 className="section-title mb-6 font-raleway font-semibold text-white text-xl">OUR APPROACH</h6>
                {/* <!-- column --> */}
                <div className="flex flex-col md:flex-row gap-4">
                    {approachItems.map((item, index) => (
                        <div key={index} className="flex flex-col-reverse items-center justify-between">
                            <Image
                                src={item.image}
                                alt={item.title}
                                quality={90}
                                height={500}
                                width={750}
                                loading="lazy"
                                className="w-1/3 mr-4"
                            />
                            <h6 className="text-xl text-white mb-8 font-montserrat text-center">{item.title}</h6>
                        </div>
                    ))}
                </div>
                {/* <!-- end of column --> */}
            </div>
            {/* <!-- end of container --> */}
        </section>
    );
};

export default ApproachSection;