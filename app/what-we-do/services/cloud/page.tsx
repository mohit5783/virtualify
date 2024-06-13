import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
import { AnimatedWavyBackground, Cloud } from "@/content/AllSVG";
import ss from "../../../../public/cloud1.jpg";
import ss1 from "../../../../public/cloud2.jpg";


const page = () => {
  const title1 = "Transform with Cloud. Lead with Innovation.";
  const title2 = "Empowering Businesses with Cloud-First Strategies";
  const title3 = "Cloud-Powered Transformation";
  const text1 = "";
  const text2 = `In an age where digital transformation is paramount, leveraging cloud technologies is critical to staying ahead. Tailored cloud solutions provide scalability, security, and efficiency. By collaborating closely with clients, we ensure seamless cloud adoption and optimization, driving substantial business impact and agility.`;
  const text3 = `Harness the power of the cloud to drive innovation and operational excellence. Our Cloud Services division offers comprehensive cloud strategies and solutions, from migration to management. With our expertise, achieve seamless, scalable, and secure cloud environments that propel your business forward.`


  const panels = [
    {
      heading: "Cloud Strategy and Transformation",
      content: "VSC's enterprise cloud solutions enable businesses to develop scalable strategies and accelerate their cloud transformation journey. Discover how we can add value to your organization.",
      image: "/cloud11.jpg",
      title: "Cloud Strategy and Transformation"
    },
    {
      heading: "VSC and AWS Cloud",
      content: "Experience the synergy of VSC and AWS, helping you accelerate digital transformation and innovate continuously with AWS Cloud. Unlock the full potential of your business with our expert solutions.",
      image: "/cloud13.jpg",
      title: "VSC and AWS Cloud"
    },
    {
      heading: "VSC and Google Cloud",
      content: "Explore the advantages of VSC and Google Cloud collaboration. Learn how our services empower companies to achieve superior business value through cloud transformation initiatives.",
      image: "/cloud14.jpg",
      title: "VSC and Google Cloud"
    },
    {
      heading: "VSC and Microsoft Cloud",
      content: "Discover how VSC's strategic partnership with Microsoft Cloud can drive your edge-to-cloud transformation journey, delivering cutting-edge solutions for Business 4.0 outcomes.",
      image: "/cloud15.jpg",
      title: "VSC and Microsoft Cloud"
    },
    {
      heading: "Enterprise Cloud",
      content: "VSC's cloud services offer a future-ready hybrid cloud strategy, providing industry-specific solutions that enhance business agility and competitive edge. Transform your enterprise with our expertise.",
      image: "/cloud12.jpg",
      title: "Enterprise Cloud"
    }
  ];

  const benefits = [
    "Secure a resilient future with customized solutions.",
    "Envision fresh opportunities for your enterprise.",
    "Evolve, innovate, and expand with mission-driven ecosystems.",
    "Develop innovative business models and scale swiftly.",
    "Leverage cutting-edge technologies.",
    "Speed up innovation and tap into new growth possibilities."
  ];

  const approachItems = [
    {
      image: "/business 1.png",
      title: "Achieve business excellence",
    },
    {
      image: "/dependable 1.png",
      title: "Foster resilience",
    },
    {
      image: "/innovation 1.png",
      title: "Pioneer innovation and reimagination",
    },
    {
      image: "/technology 1.png",
      title: "Embrace transformation and evolution",
    },
  ];


  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Cloud}
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
      <BusinessService panels={panels} />
      <Technologies />
    </div>
  );
};

export default page;
