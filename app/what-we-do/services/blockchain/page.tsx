import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
import { AnimatedWavyBackground, Blockchain } from "@/content/AllSVG";
import blockchainImg1 from "../../../../public/blockchain1.jpg";
import blockchainImg2 from "../../../../public/blockchain2.jpg";

const page = () => {
  const title1 = "Revolutionizing Trust with Blockchain";
  const title2 = "Seamless and Secure Transactions";
  const title3 = "Empower Your Business with Blockchain Technology";
  const text1 = "";
  const text2 = `Blockchain technology provides a decentralized and secure way to conduct transactions and manage data. By leveraging blockchain, organizations can ensure transparency, reduce fraud, and enhance operational efficiency.`;
  const text3 = `Our blockchain services help businesses harness the power of distributed ledger technology to create robust, scalable, and secure solutions. From supply chain management to digital identity verification, our blockchain expertise spans across various industries, ensuring tailored implementations that drive innovation and trust.`;

  const panels = [
    {
      heading: "Blockchain Strategy and Consulting",
      content: "Develop a robust blockchain strategy tailored to your business needs with our expert consulting services.",
      image: "/blockchain11.jpg",
      title: "Blockchain Strategy and Consulting"
    },
    {
      heading: "Smart Contracts Development",
      content: "Automate processes and reduce operational costs with our smart contract development services.",
      image: "/blockchain12.jpg",
      title: "Smart Contracts Development"
    },
    {
      heading: "Supply Chain Solutions",
      content: "Enhance transparency and efficiency in your supply chain with our blockchain-based solutions.",
      image: "/blockchain13.jpg",
      title: "Supply Chain Solutions"
    },
    {
      heading: "Digital Identity Verification",
      content: "Ensure secure and reliable digital identity verification with our blockchain technology.",
      image: "/blockchain14.jpg",
      title: "Digital Identity Verification"
    },
    {
      heading: "Blockchain Integration",
      content: "Seamlessly integrate blockchain technology into your existing systems with our comprehensive integration services.",
      image: "/blockchain15.jpg",
      title: "Blockchain Integration"
    }
  ];

  const benefits = [
    "Enhance transparency and trust with decentralized ledgers.",
    "Reduce fraud and enhance security with immutable records.",
    "Streamline operations and reduce costs with smart contracts.",
    "Improve supply chain efficiency and traceability.",
    "Ensure secure and reliable digital identity verification.",
    "Enable seamless integration with existing systems.",
    "Drive innovation and stay ahead of the competition.",
    "Ensure compliance with industry standards.",
    "Leverage advanced cryptographic techniques for secure transactions.",
    "Foster collaboration and trust across decentralized networks."
  ];

  const approachItems = [
    {
      image: "/decentralized 1.png",
      title: "Decentralized",
    },
    {
      image: "/dependable 1.png",
      title: "Secure",
    },
    {
      image: "/agile 1.png",
      title: "Transparent",
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
        BankCreditCard={Blockchain}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={blockchainImg1}
      />
      <ApproachSection approachItems={approachItems} />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={blockchainImg2}
      />
      <Benefits benefits={benefits} />
      <Partners />
      <BusinessService panels={panels} text1="Blockchain" />
      <Technologies />
    </div>
  );
};

export default page;
