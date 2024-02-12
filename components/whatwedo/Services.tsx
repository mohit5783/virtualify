import Image from "next/image";
import Link from "next/link";

import wmuu from "../../public/web-mobile-ui-ux.webp";
import meta from "../../public/metaverse.webp";
import cloud from "../../public/cloud.webp";
import ss from "../../public/seo-smo.webp";

const cardData = [
  {
    title: "Design & Development",
    image: wmuu,
    imageAlt: "Design & Development: Web, Mobile & UI/UX",
    keywords: ["web", "mobile", "ui/ux"],
  },
  {
    title: "Virtual Reality",
    image: meta,
    imageAlt: "Virtual Reality: Metaverse, Web 3.0 & Blockchain.",
    keywords: ["ar/vr", "Metaverse", "web 3.0"],
  },
  {
    title: "Cloud Solutions",
    image: cloud,
    imageAlt: "Cloud Solutions: AWS, Azure & GCP.",
    keywords: ["aws", "azure", "gcp"],
  },
  {
    title: "Digital Marketing",
    image: ss,
    imageAlt: "Digital Marketing: SEO, SEM, SMO & SMM",
    keywords: ["seo", "smo", "sem"],
  },
];
const Services = () => {
  return (
    <section className="home-core-capability">
      <div className="h-full">
        <div className="p-12 pb-1 flex justify-between items-center my-8">
          <h1 className="text-2xl md:text-4xl font-raleway font-semibold bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent uppercase">
            Services
          </h1>
        </div>
        <div className="p-12 pt-1 lg:flex-row flex-col flex justify-center items-center gap-8">
          {cardData.map((card, i) => (
            <div key={i} id="card" className="relative group">
              <Image
                src={card.image}
                alt={card.imageAlt}
                quality={90}
                height={1500}
                width={1000}
                loading="lazy"
                className="rounded-xl grayscale group-hover:grayscale-0 transition-all duration-100"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white text-black bg-opacity-70 group-hover:opacity-0">
                <h2 className="text-2xl font-merriweather font-extrabold text-center mt-4 shadow-sm">
                  {card.title}
                </h2>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <p className="text-2xl text-black uppercase font-bold bg-white shadow-sm px-5 bg-opacity-50 font-ubuntu transform -rotate-90 absolute left-0">
                  {card.keywords[0]}
                </p>
                <p className="text-2xl text-black uppercase font-bold bg-white px-5 bg-opacity-50 font-ubuntu absolute top-5">
                  {card.keywords[1]}
                </p>
                <p className="text-2xl text-black uppercase font-bold bg-white px-5 bg-opacity-50 font-ubuntu transform rotate-90 absolute right-0">
                  {card.keywords[2]}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/what-we-do/services"
            className="flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-lg md:text-xl"
          >
            <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              View More Services
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
