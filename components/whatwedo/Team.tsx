// components/whatwedo/Team.tsx

import React from "react";
import Image from "next/image";

const members = [
    { name: "Alice Johnson", role: "Lead Web Developer", image: "/alice-johnson.jpg" },
    { name: "Bob Smith", role: "UX/UI Designer", image: "/bob-smith.jpg" },
    { name: "Carol Davis", role: "Backend Architect", image: "/carol-davis.jpg" },
    { name: "David Lee", role: "DevOps Engineer", image: "/david-lee.jpg" },
];
const Team = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 md:px-8">
            <div className="container mx-auto">
                <h6 className="section-title mb-6 font-raleway font-semibold text-black text-xl font-merriweather">OUR TEAM</h6>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {members.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                            <div className="relative h-64 w-full">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-semibold mb-1 text-black font-merriweather">{member.name}</h3>
                                <p className="text-gray-600 font-montserrat">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;