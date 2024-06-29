import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
import { AnimatedWavyBackground, BigData } from "@/content/AllSVG";
import bigDataImg1 from "../../../../public/bigdata1.jpg";
import bigDataImg2 from "../../../../public/bigdata2.jpg";

const page = () => {
  const title1 = "Harness the Power of Big Data";
  const title2 = "Transform Your Business with Data-Driven Insights";
  const title3 = "Unlock the Potential of Big Data Analytics";
  const text1 = "";
  const text2 = `In today's data-driven world, harnessing the power of big data is essential for business success. Our big data services focus on collecting, processing, and analyzing vast amounts of data to uncover valuable insights and drive informed decision-making.`;
  const text3 = `Our comprehensive big data solutions empower businesses to leverage data for strategic advantage. From data integration to advanced analytics, we provide end-to-end services that ensure seamless and effective data management, helping you stay ahead in a competitive market.`;

  const panels = [
    {
      heading: "Big Data Strategy and Consulting",
      content: "Develop a robust big data strategy with our expert consulting services, tailored to your business needs.",
      image: "/bigdata11.jpg",
      title: "Big Data Strategy and Consulting"
    },
    {
      heading: "Data Integration and Management",
      content: "Ensure seamless data flow and robust data governance with our data integration and management solutions.",
      image: "/bigdata12.jpg",
      title: "Data Integration and Management"
    },
    {
      heading: "Advanced Data Analytics",
      content: "Leverage our advanced analytics services to gain actionable insights and drive data-driven decision-making.",
      image: "/bigdata13.jpg",
      title: "Advanced Data Analytics"
    },
    {
      heading: "Real-Time Data Processing",
      content: "Utilize real-time data processing capabilities to make immediate, informed decisions and improve operational efficiency.",
      image: "/web3-13.jpg",
      title: "Real-Time Data Processing"
    },
    {
      heading: "Scalable Data Solutions",
      content: "Implement scalable big data solutions that grow with your business and adapt to evolving data needs.",
      image: "/cs15.jpg",
      title: "Scalable Data Solutions"
    }
  ];

  const benefits = [
    "Gain actionable insights from vast amounts of data.",
    "Enhance decision-making with data-driven strategies.",
    "Improve operational efficiency with real-time data processing.",
    "Ensure robust data governance and integration.",
    "Stay competitive with advanced analytics capabilities.",
    "Achieve scalability with flexible big data solutions.",
    "Unlock new business opportunities through data exploration.",
    "Drive innovation with comprehensive data analysis.",
    "Enhance customer experiences with personalized insights.",
    "Foster a data-centric culture within your organization."
  ];

  const approachItems = [
    {
      image: "/data-visualization 1.png",
      title: "Insightful",
    },
    {
      image: "/S1.png",
      title: "Strategic",
    },
    {
      image: "/testing.png",
      title: "Real-Time",
    },
    {
      image: "/iterative 1.png",
      title: "Scalable",
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={BigData}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={bigDataImg1}
      />
      <ApproachSection approachItems={approachItems} />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={bigDataImg2}
      />
      <Benefits benefits={benefits} />
      <Partners />
      <BusinessService panels={panels} text1="Big Data" />
      <Technologies />
    </div>
  );
};

export default page;
