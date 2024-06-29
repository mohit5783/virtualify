import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
import { AnimatedWavyBackground, Testing } from "@/content/AllSVG";
import testImg1 from "../../../../public/testing1.jpg";
import testImg2 from "../../../../public/testing2.jpg";

const page = () => {
  const title1 = "Ensure Quality with Comprehensive Testing Services";
  const title2 = "Driving Business Excellence with Rigorous Testing Strategies";
  const title3 = "Transform Your Business with Quality Assurance";
  const text1 = "";
  const text2 = `In today's competitive market, ensuring the quality and reliability of your products is paramount. Our tailored testing solutions focus on identifying and mitigating risks, enhancing performance, and ensuring compliance with industry standards. By collaborating closely with clients, we ensure effective testing implementation and optimization, leading to significant improvements in product quality and customer satisfaction.`;
  const text3 = `Leverage the power of comprehensive testing to drive innovation and operational excellence. Our Testing Services division provides a full range of testing strategies and solutions, from functional testing to performance testing. With our expertise, achieve a robust, scalable, and effective testing strategy that propels your business forward.`;

  const panels = [
    {
      heading: "Testing Strategy and Transformation",
      content: "VSC's testing solutions help businesses develop scalable strategies and accelerate their transformation journeys. Discover how our services can enhance your organization's product quality and value.",
      image: "/testing11.jpg",
      title: "Testing Strategy and Transformation"
    },
    {
      heading: "VSC and Functional Testing",
      content: "Experience the benefits of VSC's in-depth functional testing, providing insights into application functionality and ensuring robust performance.",
      image: "/testing12.jpg",
      title: "VSC and Functional Testing"
    },
    {
      heading: "VSC and Performance Testing",
      content: "Leverage VSC's performance testing services to ensure your applications perform optimally under varying load conditions, ensuring a superior user experience.",
      image: "/testing13.jpg",
      title: "VSC and Performance Testing"
    },
    {
      heading: "VSC and Security Testing",
      content: "Utilize VSC's expertise in security testing to identify vulnerabilities and protect your applications from potential threats, ensuring a secure and reliable system.",
      image: "/testing14.jpg",
      title: "VSC and Security Testing"
    },
    {
      heading: "Enterprise Testing Solutions",
      content: "VSC's tailored testing services provide future-ready strategies, offering industry-specific solutions that enhance product quality and competitive edge.",
      image: "/testing15.jpg",
      title: "Enterprise Testing Solutions"
    }
  ];

  const benefits = [
    "Ensure robust product quality with personalized testing solutions.",
    "Discover new opportunities for improving product performance.",
    "Innovate, adapt, and grow with testing-driven strategies.",
    "Develop unique testing models and expand quickly.",
    "Adopt advanced testing technologies.",
    "Accelerate quality assurance innovation and unlock new growth potential."
  ];

  const approachItems = [
    {
      image: "/software-testing 1.png",
      title: "Comprehensive Functional Testing",
    },
    {
      image: "/agile 1.png",
      title: "Strategic Performance Testing",
    },
    {
      image: "/dependable 1.png",
      title: "Effective Security Testing",
    },
    {
      image: "/analytics 1.png",
      title: "Data-Driven Analytics",
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Testing}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={testImg1}
      />
      <ApproachSection approachItems={approachItems} />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={testImg2}
      />
      <Benefits benefits={benefits} />
      <Partners />
      <BusinessService panels={panels} text1="Testing" />
      <Technologies />
    </div>
  );
};

export default page;
