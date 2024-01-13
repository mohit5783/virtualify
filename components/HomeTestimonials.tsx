import Image from "next/image";
import Link from "next/link";
import quote from "@/public/quote.webp";

const TestimonialData = [
  {
    name: "Priya Sharma",
    designation: "Founder, TechCraft Solutions",
    description:
      "Absolutely loved the services from Virtualify Software Consultancy (VSC). They transformed our digital presence and brought innovation to every project. Highly recommend!",
    TestimonialDate: "2022-05-15",
  },
  {
    name: "Raj Singh",
    designation: "CTO, Digital Innovators",
    description:
      "Working with VSC was a game-changer for our tech stack. Their expertise in emerging technologies like Web3.0 and Blockchain is unparalleled. Delivered on time and exceeded expectations!",
    TestimonialDate: "2022-09-08",
  },
  {
    name: "Arun Patel",
    designation: "VP of Operations, EcomPulse",
    description:
      "VSC's team has an incredible knack for understanding client needs. They crafted seamless and intuitive mobile apps that enhanced our user experience. A pleasure to work with!",
    TestimonialDate: "2022-07-22",
  },
  {
    name: "Neha Reddy",
    designation: "Head of Marketing, DataSphere",
    description:
      "Virtualify Software Consultancy (VSC) is not just a service provider; they are partners in success. Their tailored solutions and transparent communication make them stand out. 10/10!",
    TestimonialDate: "2022-08-30",
  },
  {
    name: "Vikram Malhotra",
    designation: "CEO, InnovateLabs",
    description:
      "Innovation meets affordability with VSC. They revolutionized our digital strategy, bringing cutting-edge solutions that fit our budget. Great team, great results!",
    TestimonialDate: "2022-06-12",
  },
  {
    name: "Ananya Verma",
    designation: "Product Manager, SmartCorp",
    description:
      "The dedication and expertise of VSC's team are unparalleled. From ideation to execution, they ensured our project's success. Couldn't be happier with the results!",
    TestimonialDate: "2022-10-05",
  },
];

const HomeTestimonials = () => {
  return (
    <section className="home-core-capability mt-20">
      <div className="h-full">
        <div className="flex justify-center items-center">
          <h1 className="text-4xl font-raleway font-semibold bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent uppercase">
            Our Fans Says
          </h1>
        </div>
        <div className="mt-10 flex flex-wrap">
          {TestimonialData.map((card, i) => (
            <div key={i} className="lg:w-1/3 md:w-1/2 w-full p-2 relative">
              <div className="relative">
                <Image
                  src={quote}
                  alt="quote"
                  height={200}
                  width={150}
                  className="object-cover w-auto h-auto"
                />
                <div className="absolute top-5 left-0 w-full h-full flex flex-col items-center p-3 pr-10">
                  <p className="text-4xl font-raleway font-thin">{card.name}</p>
                  <p className="text-2xl font-inter">{card.designation}</p>
                </div>
              </div>
              <div className="m-1 p-3 relative">
                <p className="mt-3 text-xl font-extralight">
                  {card.description}
                </p>
              </div>
              <hr className="border-[0.5px] border-[var(--neon-green)] w-3/4" />
              <div className="flex pl-3 m-3">
                <time
                  dateTime={card.TestimonialDate}
                  className="text-sm font-mono"
                >
                  {card.TestimonialDate}
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
