import Image from "next/image";
import whatwedo from "../public/WhatWeDo-Home.webp";
import Link from "next/link";

const HomeWhat = () => {
  return (
    <section className="h-[70vh] lg:h-full relative bg-[#181818] mt-8">
      <div className="flex justify-between">
        <div>
          <div className="lg:block hidden bg-[#181818] absolute top-14 xl:top-20 right-1/2 bottom-14 xl:bottom-20">
            <div className="h-full flex items-center">
              <div className="ms-5">
                <div className="flex">
                  <h1 className="uppercase text-lg bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent font-raleway">
                    What we do
                  </h1>
                </div>
                <h2 className="text-2xl font-handlee mr-5 mt-5 text-[var(--neon-yellow)]">
                  VSC Empowers businesses through strategic technological
                  transformations.
                </h2>
                <p className="mt-5 mr-5">
                  We assist businesses in navigating digital transformation with
                  success, propelling genuine growth. Leveraging a potent blend
                  of extensive experience and contextual knowledge within a
                  broad ecosystem of expertise, we ensure impactful outcomes.
                </p>
                <div className="flex justify-start">
                  <Link
                    href="/what-we-do"
                    aria-label="Explore What We Do"
                    className="mt-8 flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-xl"
                  >
                    <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Explore What We Do
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden block bg-[#181818] absolute top-1/3 md:top-1/2 sm:left-20 left-2 right-2 sm:right-20 pt-7">
            <div className="h-full flex items-center">
              <div className="ms-5">
                <div className="flex">
                  <h1 className="uppercase text-lg bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent font-raleway">
                    What we do
                  </h1>
                </div>
                <h2 className="text-2xl font-handlee mr-5 mt-5 text-[var(--neon-yellow)]">
                  VSC Empowers businesses through strategic technological
                  transformations.
                </h2>
                <p className="mt-5 mr-5">
                  We assist businesses in navigating digital transformation with
                  success, propelling genuine growth. Leveraging a potent blend
                  of extensive experience and contextual knowledge within a
                  broad ecosystem of expertise, we ensure impactful outcomes.
                </p>
                <div className="flex justify-start">
                  <Link
                    href="/what-we-do"
                    aria-label="Explore What We Do"
                    className="mt-8 flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-xl"
                  >
                    <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Explore What We Do
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <Image
            src={whatwedo}
            alt="Who We Are"
            width={2000}
            height={942}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeWhat;
