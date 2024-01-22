import Image from "next/image";
import wwa from "../../public/wwa.webp";

const Hero = () => {
  return (
    <section className="relative">
      <Image
        src={wwa}
        width={1785}
        height={1000}
        priority
        className="w-full object-cover h-[80vh] md:h-auto"
        sizes="(max-width: 768px) 100vw, 75vw"
        alt="Who we are"
      />
      <div className="absolute h-full w-full left-0 top-0">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-ubuntu font-semibold bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent">
            Who we are
          </h1>
          <h2 className="text-center mt-32 font-merriweather text-4xl md:text-6xl text-[var(--neon-green)]">
            When Innovation Meets Imagination
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
