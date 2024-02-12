import Image from "next/image";
import bb from "../../public/BeliefBusiness.webp";

const BeliefBusiness = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse justify-center md:justify-between items-center p-5 md:p-20 gap-10 bg-white">
      <div className="flex flex-col w-full">
        <h2 className="text-black text-3xl md:text-4xl font-merriweather font-black">
          Empowering Impactful Business Evolution
        </h2>
        <p className="text-black mt-10 font-montserrat text-base md:text-lg">
          At VSC, we pride ourselves on our commitment to going beyond
          conventional business transformation through technology. We believe in
          empowering organizations not only to adapt but to create meaningful
          impacts for their customers and the communities they serve. By
          leveraging cutting-edge technology and innovative solutions, we enable
          businesses to drive positive change, foster growth, and make a lasting
          difference in the world.
        </p>
      </div>
      <div className="flex justify-start w-full">
        <Image
          src={bb}
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

export default BeliefBusiness;
