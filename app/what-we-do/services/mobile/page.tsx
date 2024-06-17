import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
import { AnimatedWavyBackground, Mobile } from "@/content/AllSVG";
import ss from "../../../../public/mobile1.jpg";
import ss1 from "../../../../public/mobile2.jpg";

const MobilePage = () => {
  const title1 = "Go Mobile. Lead with Innovation.";
  const title2 = "Empowering Businesses with Mobile-First Strategies";
  const title3 = "Mobile-Powered Transformation";
  const text1 = "";
  const text2 = `In today's mobile-centric world, leveraging mobile technologies is crucial for staying ahead. Tailored mobile solutions provide accessibility, security, and efficiency. By collaborating closely with clients, we ensure seamless mobile adoption and optimization, driving significant business impact and agility.`;
  const text3 = `Harness the power of mobile to drive innovation and operational excellence. Our Mobile Services division offers comprehensive mobile strategies and solutions, from development to deployment. With our expertise, achieve seamless, scalable, and secure mobile environments that propel your business forward.`;

  const panels = [
    {
      heading: "Mobile Strategy and Transformation",
      content: "VSC's enterprise mobile solutions enable businesses to develop scalable strategies and accelerate their mobile transformation journey. Discover how we can add value to your organization.",
      image: "/mobile11.jpg",
      title: "Mobile Strategy and Transformation"
    },
    {
      heading: "VSC and Android Development",
      content: "Experience the synergy of VSC and Android development, helping you accelerate digital transformation and innovate continuously with Android apps. Unlock the full potential of your business with our expert solutions.",
      image: "/mobile12.jpg",
      title: "VSC and Android Development"
    },
    {
      heading: "VSC and iOS Development",
      content: "Explore the advantages of VSC and iOS development collaboration. Learn how our services empower companies to achieve superior business value through mobile transformation initiatives.",
      image: "/mobile13.jpg",
      title: "VSC and iOS Development"
    },
    {
      heading: "VSC and Hybrid Mobile Apps",
      content: "Discover how VSC's expertise in hybrid mobile apps can drive your mobile transformation journey, delivering cutting-edge solutions for Business 4.0 outcomes.",
      image: "/mobile14.jpg",
      title: "VSC and Hybrid Mobile Apps"
    },
    {
      heading: "Enterprise Mobile Solutions",
      content: "VSC's mobile services offer a future-ready strategy, providing industry-specific solutions that enhance business agility and competitive edge. Transform your enterprise with our expertise.",
      image: "/mobile15.jpg",
      title: "Enterprise Mobile Solutions"
    }
  ];

  const benefits = [
    "Secure a resilient future with customized mobile solutions.",
    "Envision fresh opportunities for your mobile strategy.",
    "Evolve, innovate, and expand with mobile-driven ecosystems.",
    "Develop innovative mobile models and scale swiftly.",
    "Leverage cutting-edge mobile technologies.",
    "Speed up mobile innovation and tap into new growth possibilities."
  ];

  const approachItems = [
    {
      image: "/customer 1.png",
      title: "User-Centric Design",
    },
    {
      image: "/agile 1.png",
      title: "Agile Development",
    },
    {
      image: "/exchange 1.png",
      title: "Cross-Platform Compatibility",
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
        BankCreditCard={Mobile}
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
      <Benefits benefits={benefits} />
      <Partners />
      <BusinessService panels={panels} text1="Mobile" />
      <Technologies />
    </div>
  );
};

export default MobilePage;
