import Image from "next/image";
import whoweare from "../public/WhoWeAre-Home.webp";
import Link from "next/link";

const HomeWho = () => {
  return (
    <section className="h-screen lg:h-full relative bg-[#181818] mt-8">
      <div className="w-full lg:w-2/3">
        <Image
          src={whoweare}
          alt="Who We Are"
          placeholder="blur"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="lg:block hidden bg-[#181818] absolute top-14 xl:top-20 left-1/2 bottom-14 xl:bottom-20">
        <div className="h-full flex items-center">
          <div className="ms-5">
            <div className="flex">
              <h1 className="uppercase text-lg bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent font-raleway">
                Who We Are
              </h1>
            </div>
            <h2 className="text-2xl font-merriweather font-[300] mr-10 mt-5 text-[var(--neon-yellow)]">
              Fueling brighter tomorrows through innovative synergy and
              collective wisdom.
            </h2>
            <p className="font-montserrat font-medium mt-5 mr-5 text-lg">
              Virtualify Software Consultancy (VSC) is specializing in IT
              services, development, consulting, and business solutions. We
              partner with numerous businesses, guiding them to transform with
              commitment and expertise.
            </p>
            <div className="flex justify-start">
              <Link
                href="/who-we-are"
                className="mt-8 flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-xl"
              >
                <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Discover Virtualify
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
                Who We Are
              </h1>
            </div>
            <h2 className="text-2xl font-merriweather font-[300] mr-10 mt-5 text-[var(--neon-yellow)]">
              We foster greater futures through a commitment to innovation and
              the synergy of collective knowledge.
            </h2>
            <p className="font-montserrat mt-5 mr-5 text-lg">
              Virtualify Software Consultancy (VSC) is a distinguished
              organization specializing in IT services, development, consulting,
              and business solutions. With a proven track record spanning over
              one year, we have been privileged to partner with numerous
              businesses, guiding them through transformative journeys with
              unwavering commitment and expertise.
            </p>
            <div className="flex justify-start">
              <Link
                href="/who-we-are"
                className="mt-8 flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-xl"
              >
                <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Discover Virtualify
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWho;
