import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Strength = dynamic(() => import("@/components/whatwedo/Strength"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
import { AnimatedWavyBackground, Analytics } from "@/content/AllSVG";
import analysisImg1 from "../../../../public/analytics1.jpg";
import analysisImg2 from "../../../../public/analytics2.jpg";

const page = () => {
  const title1 = "Unlock Insights with Advanced Analytics Services";
  const title2 = "Elevate Business Performance with Data-Driven Strategies";
  const title3 = "Transform Your Operations with Comprehensive Analytics";
  const text1 = "";
  const text2 = `In the era of big data, leveraging analytics to drive decision-making is crucial. Our specialized analytics services focus on extracting actionable insights, optimizing processes, and achieving compliance with industry standards. Through close collaboration, we ensure seamless integration and execution of analytics strategies, resulting in enhanced business outcomes and customer satisfaction.`;
  const text3 = `Harness the power of advanced analytics to foster innovation and operational excellence. Our Analytics Services division offers a full spectrum of solutions, from descriptive analytics to predictive modeling. With our expertise, establish a robust, scalable, and effective analytics framework that propels your business forward.`;

  const panels = [
    {
      heading: "Analytics Strategy and Implementation",
      content: "Our analytics solutions help businesses craft scalable strategies and expedite their transformation journeys. Discover how our services can elevate your organization's data-driven decision-making and value creation.",
      image: "/analytics11.jpg",
      title: "Analytics Strategy and Implementation"
    },
    {
      heading: "Data Integration and Management",
      content: "Experience the benefits of our comprehensive data integration and management services, ensuring seamless data flow and robust data governance.",
      image: "/analytics12.jpg",
      title: "Data Integration and Management"
    },
    {
      heading: "Advanced Predictive Analytics",
      content: "Utilize our predictive analytics services to anticipate market trends and customer behavior, enabling proactive and informed business strategies.",
      image: "/analytics13.jpg",
      title: "Advanced Predictive Analytics"
    },
    {
      heading: "Business Intelligence Solutions",
      content: "Leverage our business intelligence solutions to gain deep insights into your operations and drive data-informed decision-making.",
      image: "/analytics14.jpg",
      title: "Business Intelligence Solutions"
    },
    {
      heading: "Industry-Specific Analytics Solutions",
      content: "Our tailored analytics services provide industry-specific insights, helping you stay competitive and enhance product and service quality.",
      image: "/analytics15.jpg",
      title: "Industry-Specific Analytics Solutions"
    }
  ];

  const benefits = [
    "Unlock actionable insights with personalized analytics solutions.",
    "Identify new opportunities for process optimization and innovation.",
    "Drive growth and efficiency with data-driven strategies.",
    "Develop unique analytics models and scale rapidly.",
    "Adopt cutting-edge analytics technologies.",
    "Accelerate innovation and unlock new growth potential through analytics."
  ];

  const approachItems = [
    {
      image: "/analytics 1.png",
      title: "Comprehensive Data Analysis",
    },
    {
      image: "/technology 1.png",
      title: "Strategic Predictive Modeling",
    },
    {
      image: "/dependable 1.png",
      title: "Robust Data Security",
    },
    {
      image: "/data-visualization 1.png",
      title: "Insightful Data Visualization",
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Analytics}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={analysisImg1}
      />
      <ApproachSection approachItems={approachItems} />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={analysisImg2}
      />
      <Strength text1="Analytics" />
      <Partners />
      <BusinessService panels={panels} text1="Analytics" />
      <Technologies />
    </div>
  );
};

export default page;
