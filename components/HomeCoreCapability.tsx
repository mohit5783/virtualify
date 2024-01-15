import Image from "next/image";
import Link from "next/link";
import corecapability from "../public/core-capabilities.png";
import {
  FaReact,
  FaReacteurope,
  FaApple,
  FaAndroid,
  FaUser,
  FaSearch,
  FaGlobe,
  FaInfinity,
  FaCubes,
  FaCloud,
} from "react-icons/fa";
import { SiBlockchaindotcom, SiFlutter, SiIota } from "react-icons/si";
import { GiArtificialIntelligence, GiCommercialAirplane } from "react-icons/gi";
import { TbAugmentedReality } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { GiTechnoHeart } from "react-icons/gi";
import { IoShareSocialSharp } from "react-icons/io5";

const technologies = [
  { name: "React", icon: <FaReact /> },
  { name: "React-Native", icon: <FaReacteurope /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "iOS", icon: <FaApple /> },
  { name: "Android", icon: <FaAndroid /> },
  { name: "UI/UX", icon: <FaUser /> },
  { name: "SEO", icon: <FaSearch /> },
  { name: "Web 3.0", icon: <FaGlobe /> },
  { name: "Metaverse", icon: <FaInfinity /> },
  { name: "Blockchain", icon: <SiBlockchaindotcom /> },
  { name: "AI/ML", icon: <GiArtificialIntelligence /> },
  { name: "AR/VR", icon: <TbAugmentedReality /> },
  { name: "IoT", icon: <SiIota /> },
  { name: "Cloud", icon: <FaCloud /> },
  { name: "Web Apps", icon: <CgWebsite /> },
  { name: "E-Commerce", icon: <GiCommercialAirplane /> },
];

const HomeCoreCapability = () => {
  return (
    <section className="home-core-capability mt-8 bg-[var(--neon-yellow-green)]">
      <div className="pt-20">
        <h1 className="text-6xl font-ubuntu text-black font-semibold justify-center flex">
          Digital Core Capabilities
        </h1>
        <h2 className="font-ubuntu text-slate-600 text-2xl justify-center flex">
          Foster essential competencies to achieve impactful digital results.
        </h2>
        <div className="flex justify-center py-3">
          <Link
            href="what-we-do/technologies"
            className="mt-8 flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-xl"
          >
            <span className="px-8 py-3 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Explore VSC Core Capabilities
            </span>
          </Link>
        </div>
      </div>
      <div className="h-full flex justify-center items-center pb-12">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="ms-5 p-3 w-2/3">
            <div className="mt-8">
              <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 text-black gap-4">
                {technologies.map((tech, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <span className="text-3xl md:text-5xl">{tech.icon}</span>
                    <p className="text-xl">{tech.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/3 ">
            <Image
              src={corecapability}
              alt="Core Capabilities"
              width={1028}
              height={713}
              loading="lazy"
              quality={10}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCoreCapability;
