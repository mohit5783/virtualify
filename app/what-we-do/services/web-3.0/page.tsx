import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
import { AnimatedWavyBackground, Web3 } from "@/content/AllSVG";
import web3Img1 from "../../../../public/web3-1.jpg";
import web3Img2 from "../../../../public/web3-2.jpg";

const page = () => {
  const title1 = "Embrace the Future with Web 3.0";
  const title2 = "Decentralized and User-Centric Experiences";
  const title3 = "Transform Your Digital Presence with Web 3.0";
  const text1 = "";
  const text2 = `Web 3.0 represents the next evolution of the internet, characterized by decentralized networks, user empowerment, and enhanced data privacy. By leveraging blockchain technology and decentralized protocols, Web 3.0 enables more secure and transparent interactions online.`;
  const text3 = `Our Web 3.0 services empower businesses to create innovative, user-centric digital experiences. From decentralized applications (dApps) to digital asset management, our expertise covers the full spectrum of Web 3.0 technologies, ensuring robust and future-ready solutions.`;

  const panels = [
    {
      heading: "Web 3.0 Strategy and Consulting",
      content: "Craft a comprehensive Web 3.0 strategy tailored to your business with our expert consulting services.",
      image: "/web3-11.jpg",
      title: "Web 3.0 Strategy and Consulting"
    },
    {
      heading: "Decentralized Applications (dApps)",
      content: "Develop cutting-edge decentralized applications that provide secure and user-centric experiences.",
      image: "/web3-12.jpg",
      title: "Decentralized Applications (dApps)"
    },
    {
      heading: "Digital Asset Management",
      content: "Manage and secure your digital assets with our advanced Web 3.0 solutions.",
      image: "/web3-13.jpg",
      title: "Digital Asset Management"
    },
    {
      heading: "Smart Contract Development",
      content: "Automate and secure your business processes with our smart contract development services.",
      image: "/web3-14.jpg",
      title: "Smart Contract Development"
    },
    {
      heading: "Blockchain Integration",
      content: "Seamlessly integrate blockchain technology into your existing systems for enhanced security and transparency.",
      image: "/web3-15.jpg",
      title: "Blockchain Integration"
    }
  ];

  const benefits = [
    "Enhance security and transparency with decentralized technologies.",
    "Empower users with control over their data and digital assets.",
    "Drive innovation with cutting-edge decentralized applications.",
    "Reduce reliance on intermediaries with peer-to-peer transactions.",
    "Ensure data privacy and protection with advanced cryptographic techniques.",
    "Create seamless and secure digital experiences.",
    "Stay ahead of the competition with future-ready Web 3.0 solutions.",
    "Foster trust and collaboration in decentralized networks.",
    "Leverage blockchain for robust and tamper-proof records.",
    "Facilitate new business models with tokenization and digital assets."
  ];

  const approachItems = [
    {
      image: "/decentralized 1.png",
      title: "Decentralized",
    },
    {
      image: "/customer 1.png",
      title: "User-Centric",
    },
    {
      image: "/S1.png",
      title: "Secure",
    },
    {
      image: "/innovation 1.png",
      title: "Innovative",
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Web3}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={web3Img1}
      />
      <ApproachSection approachItems={approachItems} />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={web3Img2}
      />
      <Benefits benefits={benefits} />
      <Partners />
      <BusinessService panels={panels} text1="Web 3.0" />
      <Technologies />
    </div>
  );
};

export default page;
