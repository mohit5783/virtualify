import Image from "next/image";
import op from "../../public/our-people.webp";

const OurPeople = () => {
  return (
    <section className="relative pb-1 md:pb-36">
      <Image
        src={op}
        width={1500}
        height={1000}
        loading="lazy"
        className="w-full object-cover h-[70vh] md:h-auto"
        sizes="(max-width: 768px) 100vw, 75vw"
        alt="People at VSC - Virutalify Software Consultancy"
      />
      <div className="absolute left-10 top-10 bg-black px-5 py-1 bg-opacity-60">
        <h3 className="text-2xl md:text-4xl font-raleway font-bold text-white">
          Quality over quantity
        </h3>
      </div>
      <div className="absolute left-14 top-32 md:top-1/4 right-14 md:right-1/4 lg:right-1/3 bg-white px-5 py-2 bg-opacity-60">
        <p className="text-5xl md:text-4xl lg:text-5xl font-raleway font-bold text-black">
          We curate a team of industry celebrities and experts to bring
          exceptional skills and innovation to the forefront.
        </p>
      </div>
      <div className="absolute w-full left-0 top-3/4 hidden md:block md:-mt-20 lg:-mt-8 -mt-10 p-8">
        <div className="w-full flex justify-between items-center gap-2 md:gap-5 lg:gap-10 xl:gap-20">
          <div className="bg-[var(--neon-orange)] w-full h-[25vh] text-black opacity-90">
            <div className="flex flex-col justify-center items-center h-full gap-2">
              <h5 className="lg:text-3xl md:text-2xl text-xl text-center font-montserrat font-bold">
                Our Employees
              </h5>
              <p className="font-ubuntu font-thin text-6xl">17+</p>
              <p className="hidden lg:block font-ubuntu font-thin text-2xl p-2 text-center">
                quality workforce with expertise
              </p>
            </div>
          </div>
          <div className="bg-[var(--neon-yellow)] w-full h-[25vh] text-black opacity-90">
            <div className="flex flex-col justify-center items-center h-full gap-2">
              <h5 className="lg:text-3xl md:text-2xl text-xl text-center font-montserrat font-bold">
                Our Clients
              </h5>
              <p className="font-ubuntu font-thin text-6xl">80+</p>
              <p className="hidden lg:block font-ubuntu font-thin text-2xl p-2 text-center">
                satisfied clients across the globe
              </p>
            </div>
          </div>
          <div className="bg-[var(--neon-green)] w-full h-[25vh] text-black opacity-90">
            <div className="flex flex-col justify-center items-center h-full gap-2">
              <h5 className="lg:text-3xl md:text-2xl text-xl text-center font-montserrat font-bold">
                Our Investors
              </h5>
              <p className="font-ubuntu font-thin text-6xl">8+</p>
              <p className="hidden lg:block font-ubuntu font-thin text-2xl p-2 text-center">
                investors with a shared vision
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full block md:hidden p-5">
        <div className="w-full flex flex-col justify-between items-center gap-5">
          <div className="bg-[var(--neon-orange)] w-full h-[25vh] text-black">
            <div className="flex flex-col justify-center items-center h-full gap-2">
              <h5 className="lg:text-3xl md:text-2xl text-xl text-center font-montserrat font-bold">
                Our Employees
              </h5>
              <p className="font-ubuntu font-thin text-6xl">17+</p>
              <p className="font-ubuntu font-thin text-2xl text-center">
                quality workforce with expertise
              </p>
            </div>
          </div>
          <div className="bg-[var(--neon-yellow)] w-full h-[25vh] text-black opacity-90">
            <div className="flex flex-col justify-center items-center h-full gap-2">
              <h5 className="lg:text-3xl md:text-2xl text-xl text-center font-montserrat font-bold">
                Our Clients
              </h5>
              <p className="font-ubuntu font-thin text-6xl">80+</p>
              <p className="font-ubuntu font-thin text-2xl text-center">
                satisfied clients across the globe
              </p>
            </div>
          </div>
          <div className="bg-[var(--neon-green)] w-full h-[25vh] text-black opacity-90">
            <div className="flex flex-col justify-center items-center h-full gap-2">
              <h5 className="lg:text-3xl md:text-2xl text-xl text-center font-montserrat font-bold">
                Our Investors
              </h5>
              <p className="font-ubuntu font-thin text-6xl">8+</p>
              <p className="font-ubuntu font-thin text-2xl text-center">
                investors with a shared vision
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPeople;
