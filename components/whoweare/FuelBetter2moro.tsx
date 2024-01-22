import Image from "next/image";
import fbt from "../../public/Fueling-brighter-tomorrows.webp";

const FuelBetter2moro = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse justify-center md:justify-between items-center p-5 md:p-20 gap-10 bg-white">
      <div className="flex flex-col w-full">
        <h3 className="text-black text-3xl md:text-4xl font-merriweather font-black">
          Fueling brighter tomorrows through innovative synergy and collective
          wisdom.
        </h3>
        <p className="text-black mt-10 font-montserrat text-base md:text-lg">
          Virtualify Software Consultancy (VSC) stands as a distinguished IT
          services, consulting, and business solutions partner. With a
          commitment to catalyzing positive change, we emphasize innovative
          collaboration and leverage collective knowledge to craft tailored
          solutions. Our dedicated team seamlessly collaborates with businesses,
          embodying excellence and forward-thinking strategies. At VSC, we
          envision a future where every venture flourishes through the power of
          innovative synergy and shared wisdom, creating lasting impacts and
          sustained success.
        </p>
      </div>
      <div className="flex justify-start w-full">
        <Image
          src={fbt}
          alt="Fueling brighter tomorrows"
          width={1000}
          height={1000}
          loading="lazy"
          className="w-full object-cover h-[50vh] md:h-full"
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </div>
    </section>
  );
};

export default FuelBetter2moro;
