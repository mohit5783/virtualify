import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
import { AnimatedWavyBackground, ARVR } from "@/content/AllSVG";
import metaverseImg1 from "../../../../public/metaverse1 (1).jpg";
import metaverseImg2 from "../../../../public/metaverse2 (1).jpg";

const page = () => {
  const title1 = "Enter the Metaverse";
  const title2 = "Immersive Virtual Experiences";
  const title3 = "Transform Your Digital Interaction with the Metaverse";
  const text1 = "";
  const text2 = `The Metaverse represents a new era of digital interaction, offering immersive and interactive virtual experiences. By integrating advanced technologies such as virtual reality (VR), augmented reality (AR), and blockchain, the Metaverse enables users to engage in a shared virtual environment in unprecedented ways.`;
  const text3 = `Our Metaverse services empower businesses to create and explore virtual worlds that enhance engagement, collaboration, and innovation. From virtual meetings to digital marketplaces, our comprehensive Metaverse solutions cater to diverse industry needs, ensuring dynamic and future-ready implementations.`;

  const panels = [
    {
      heading: "Metaverse Strategy and Consulting",
      content: "Develop a comprehensive Metaverse strategy tailored to your business with our expert consulting services.",
      image: "/metaverse11.jpg",
      title: "Metaverse Strategy and Consulting"
    },
    {
      heading: "Virtual Reality (VR) Experiences",
      content: "Create immersive VR experiences that captivate and engage your audience.",
      image: "/metaverse12.jpg",
      title: "Virtual Reality (VR) Experiences"
    },
    {
      heading: "Augmented Reality (AR) Solutions",
      content: "Enhance the real world with our cutting-edge AR solutions, offering interactive and engaging experiences.",
      image: "/arvr13.jpg",
      title: "Augmented Reality (AR) Solutions"
    },
    {
      heading: "Blockchain Integration",
      content: "Utilize blockchain technology to ensure secure and transparent interactions within the Metaverse.",
      image: "/blockchain1.jpg",
      title: "Blockchain Integration"
    },
    {
      heading: "Digital Marketplaces",
      content: "Develop and manage digital marketplaces within the Metaverse, enabling seamless transactions and interactions.",
      image: "/metaverse13.jpg",
      title: "Digital Marketplaces"
    }
  ];

  const benefits = [
    "Create immersive and interactive virtual environments.",
    "Enhance engagement and collaboration with innovative Metaverse solutions.",
    "Drive innovation with cutting-edge VR and AR technologies.",
    "Ensure secure and transparent interactions with blockchain integration.",
    "Develop new business models within the Metaverse.",
    "Foster community and connectivity in shared virtual spaces.",
    "Stay ahead of the competition with dynamic and future-ready Metaverse solutions.",
    "Enhance customer experiences with personalized and interactive virtual engagements.",
    "Unlock new revenue streams through digital marketplaces and virtual goods.",
    "Facilitate global collaboration and communication in a virtual environment."
  ];

  const approachItems = [
    {
      image: "/S2.png",
      title: "Immersive",
    },
    {
      image: "/interaction 1.png",
      title: "Interactive",
    },
    {
      image: "/innovation 1.png",
      title: "Innovative",
    },
    {
      image: "/dependable 1.png",
      title: "Secure",
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={ARVR}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={metaverseImg1}
      />
      <ApproachSection approachItems={approachItems} />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={metaverseImg2}
      />
      <Benefits benefits={benefits} />
      <Partners />
      <BusinessService panels={panels} text1="Metaverse" />
      <Technologies />
    </div>
  );
};

export default page;
