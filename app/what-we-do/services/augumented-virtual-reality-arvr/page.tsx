import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
// const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
const Strength = dynamic(() => import("@/components/whatwedo/Strength"));
import { AnimatedWavyBackground, ARVR } from "@/content/AllSVG";
import ss from "../../../../public/arvr1.jpg";
import ss1 from "../../../../public/arvr2.jpg";

const page = () => {
  const title1 = "Explore the Future with AR/VR.";
  const title2 = "Enhancing Business Engagement through AR/VR Solutions";
  const title3 = "Transform Your Business with Immersive AR/VR";
  const text1 = "";
  const text2 = `In the rapidly evolving digital world, adopting AR/VR technologies can provide a significant competitive edge. Our bespoke AR/VR solutions are designed to enhance user engagement, provide immersive experiences, and drive operational efficiency. Partnering closely with our clients, we ensure seamless AR/VR implementation and optimization, leading to measurable business outcomes and increased user satisfaction.`;
  const text3 = `Leverage the potential of AR/VR to drive innovation and operational excellence. Our AR/VR Services division offers comprehensive strategies and solutions, from development to deployment. With our expertise, create immersive, scalable, and secure AR/VR environments that propel your business forward.`;

  const panels = [
    {
      heading: "AR/VR Strategy and Transformation",
      content: "VSC's AR/VR solutions enable businesses to develop scalable strategies and accelerate their transformation journey. Discover how our services can add value to your organization.",
      image: "/arvr11.jpg",
      title: "AR/VR Strategy and Transformation"
    },
    {
      heading: "VSC and Augmented Reality",
      content: "Experience the synergy of VSC and Augmented Reality, helping you to innovate continuously and transform your business with cutting-edge AR solutions.",
      image: "/arvr12.jpg",
      title: "VSC and Augmented Reality"
    },
    {
      heading: "VSC and Virtual Reality",
      content: "Explore the advantages of VSC's Virtual Reality services. Learn how our VR solutions empower companies to achieve superior business value through immersive experiences.",
      image: "/arvr13.jpg",
      title: "VSC and Virtual Reality"
    },
    {
      heading: "VSC and Mixed Reality",
      content: "Discover how VSC's expertise in Mixed Reality can drive your AR/VR transformation journey, delivering state-of-the-art solutions for immersive business outcomes.",
      image: "/arvr14.jpg",
      title: "VSC and Mixed Reality"
    },
    {
      heading: "Enterprise AR/VR Solutions",
      content: "VSC's AR/VR services offer a future-ready strategy, providing industry-specific solutions that enhance business agility and competitive edge. Transform your enterprise with our expertise.",
      image: "/arvr15.jpg",
      title: "Enterprise AR/VR Solutions"
    }
  ];

  const benefits = [
    "Ensure a resilient future with customized AR/VR solutions.",
    "Discover new opportunities for your immersive strategy.",
    "Innovate, adapt, and expand with AR/VR-driven ecosystems.",
    "Develop innovative AR/VR models and scale swiftly.",
    "Adopt cutting-edge AR/VR technologies.",
    "Accelerate immersive innovation and unlock new growth potential."
  ];

  const approachItems = [
    {
      image: "/customer 1.png",
      title: "Immersive User Experience",
    },
    {
      image: "/innovation 1.png",
      title: "Scalable Solutions",
    },
    {
      image: "/business 1.png",
      title: "Innovative Design",
    },
    {
      image: "/dependable 1.png",
      title: "Robust Security",
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
        image1={ss}
      />
      <ApproachSection approachItems={approachItems} />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={ss1}
      />
      {/* <Benefits benefits={benefits} /> */}
      <Strength text1="AR/VR" />
      <Partners />
      <BusinessService panels={panels} text1="ARVR" />
      <Technologies />
    </div>
  );
};

export default page;
