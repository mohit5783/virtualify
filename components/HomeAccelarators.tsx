import Image from "next/image";
import HealthTech from "../public/HealthTechHome.webp";
import aiml from "../public/AI-ML-Home.webp";
import web3 from "../public/Web3Home.webp";

import Link from "next/link";
const cardData = [
  {
    title: "Health & Wellness",
    description:
      "Metaverse Converges with Cutting-Edge Healthcare for Futuristic Advancements.",
    image: HealthTech,
    imageAlt: "Health & Wellness - The metaverse meets mordern medicine.",
    linkText: "Accelerate Health & Wellness",
    link: "application-modernization",
  },
  {
    title: "AI & ML",
    description:
      "Smart AI, Mastering Patterns with Sentient Precision for Next-Level Innovation.",
    image: aiml,
    imageAlt: "AI & ML - Sentient AI with smart pattern matching.",
    linkText: "Accelerate Artificial Intelligence",
    link: "applied-ai",
  },
  {
    title: "Mobile, Web & Web 3.0",
    description: "Evolving from Web 2.0 to Web 3.0 and Beyond with Blockchain.",
    image: web3,
    imageAlt: "Mobile, Web & Web 3.0 - Web 2.0 to Web 3.0 & Blockchain.",
    linkText: "Accelerate Mobile, Web & Web 3.0",
    link: "blockchain",
  },
];
const HomeAccelarators = () => {
  return (
    <section className="home-core-capability mt-20">
      <div className="h-full">
        <div className="p-12 pb-1 flex justify-between items-center">
          <h1 className="text-4xl font-raleway font-semibold bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent uppercase">
            Accelarators
          </h1>
          <Link
            href="/who-we-are/accelarations"
            className="font-inter text-[var(--neon-orange)] uppercase text-sm hover:text-[var(--neon-green)] transition-all ease-in duration-200"
          >
            View ALL
          </Link>
        </div>
        <div className="p-12 pt-1 flex justify-center items-center gap-12">
          {cardData.map((card, i) => (
            <div key={i} id="card" className="relative group">
              <Image
                src={card.image}
                alt={card.imageAlt}
                priority
                className="w-full h-full"
                height={3100}
                width={2160}
              />
              <div
                id="blackOverlay"
                className="absolute top-1/4 left-0 w-full h-3/4 bg-gradient-to-b from-transparent to-[#181818] opacity-100 group-hover:to-75% transition-all duration-300"
              >
                &nbsp;
              </div>
              <h1 className="absolute top-5 left-5 bg-[#181818] text-[var(--neon-green)] px-4 py-1 rounded-full text-sm">
                {card.title}
              </h1>
              <p className="absolute bottom-16 left-5 px-4 py-1 text-xl font-raleway font-bold drop-shadow">
                {card.description}
              </p>
              <Link
                href={`/who-we-are/accelarations/${card.link}`}
                className="absolute bottom-4 left-5 px-4 py-1 font-raleway text-[var(--neon-orange)] hover:text-[var(--neon-green)] transition-all ease-in duration-200"
              >
                {card.linkText} &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAccelarators;
