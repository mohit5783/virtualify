import Image from "next/image";
import whoweare from "../public/WhoWeAre-Home.webp";
import Link from "next/link";

const HomeWho = () => {
  return (
    <section className="relative mt-20">
      <div className="bg-[#181818]">
        <div className="w-2/3">
          <Image
            src={whoweare}
            alt="Who We Are"
            width={2000}
            height={1400}
            loading="lazy"
          />
        </div>
        <div className="absolute left-1/2 top-40 bottom-40 w-1/2 bg-[#181818]">
          <div className="h-full flex items-center">
            <div className="ms-5">
              <div className="flex">
                <h1 className="uppercase text-lg bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent font-raleway">
                  Who We Are
                </h1>
              </div>
              <h2 className="text-2xl font-handlee mr-20 mt-5 text-[var(--neon-yellow)]">
                We foster greater futures through a commitment to innovation and
                the synergy of collective knowledge.
              </h2>
              <p className="mt-5 mr-20 text-base">
                Virtualify Software Consultancy (VSC) is a distinguished
                organization specializing in IT services, development,
                consulting, and business solutions. With a proven track record
                spanning over one year, we have been privileged to partner with
                numerous businesses, guiding them through transformative
                journeys with unwavering commitment and expertise.
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
      </div>
    </section>
  );
};

export default HomeWho;
