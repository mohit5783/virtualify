import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Strength = dynamic(() => import("@/components/whatwedo/Strength"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
import { AnimatedWavyBackground, AI } from "@/content/AllSVG";
import ss from "../../../../public/AI.jpg";
import ss1 from "../../../../public/ML.jpg";


const page = () => {
  const title1 = "AI shapes tomorrow. Humanity defines it.";
  const title2 = "Fusing human ingenuity with AI to reinvent industries";
  const title3 = "ML-Driven Success: Embrace the Cloud";
  const text1 = "";
  const text2 = `In an era where AI is revolutionizing every facet of existence, achieving success 
  demands a delicate equilibrium between innovation and prudence. Tailoring AI architectures to 
  suit specific industries and organizations, while implementing safeguards to protect stakeholders,
   is paramount. By collaborating with humans, AI has the potential to democratize knowledge and 
   enhance decision-making prowess. With human creativity and strategic acumen at its core, AI has 
   the power to fundamentally transform businesses and drive unparalleled results.`;
  const text3 = `Harness the power of machine learning for transformative business value across the assist,
   augment, and transform spectrum. Leveraging cloud, machine learning, and data, our ML.Cloud division 
   redefines value chains and operational paradigms. With our expertise, achieve scalable, sustainable, 
   and responsible ML outcomes, from strategy to execution.`


  const panels = [
    {
      heading: "Enterprise AI",
      content: "VSC's AI InsightNext™ empowers enterprises to adopt cutting-edge technologies, enabling the development or enhancement of custom LLM models and embedded generative AI applications.",
      image: "/Enterprise AI.jpg",
      title: "Enterprise AI"
    },
    {
      heading: "Responsible AI",
      content: "Implementing Gen AI and Large Language Model-based solutions is intricate. Discover how our services can facilitate successful, ethical, and responsible AI implementations.",
      image: "/responsible-ai.jpg",
      title: "Responsible AI"
    },
    {
      heading: "Data and AI",
      content: "Explore our Data and AI services on Google Cloud, designed to provide intelligent analytics that accelerate data modernization and offer unparalleled flexibility to enterprises.",
      image: "/data-and-ai.jpg",
      title: "Data and AI"
    },
    {
      heading: "Machine Learning on AWS",
      content: "Learn about VSC's AIML solutions powered by AWS SageMaker, and how AI technologies like intelligent robotics and process automation can enhance customer experience.",
      image: "/Machine Learning on AWS.jpg",
      title: "Machine Learning on AWS"
    },
    {
      heading: "Cloud and AI",
      content: "Discover how integrating Microsoft 365 Copilot with business applications can help enterprises transform the workplace and significantly boost productivity.",
      image: "/Cloud and AI.jpg",
      title: "Cloud and AI"
    },
    {
      heading: "Generative AI Solutions",
      content: "VSC guides enterprises through the journey of generative AI-based business transformations using Microsoft Azure Open AI and GitHub Copilot. Find out how we can help.",
      image: "/Generative AI Solutions.jpg",
      title: "Generative AI Solutions"
    },
    {
      heading: "AI for Operations",
      content: "VSC's Cognix for Network aims to create resilient and business-aligned enterprise networks with solutions like NaaS, SASE, TNaaS, and open/cloud networking.",
      image: "/AI for Operations.jpg",
      title: "AI for Operations"
    }
  ];

  const approachItems = [
    {
      image: "/business 1.png",
      title: "Innovative and Scalable",
    },
    {
      image: "/customer 1.png",
      title: "User-Centric Design",
    },
    {
      image: "/technology 1.png",
      title: "Seamlessly Integrated",
    },
    {
      image: "/dependable 1.png",
      title: "Secure and Reliable",
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={AI}
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
      <Strength text1="AI" />
      <Partners />
      <BusinessService panels={panels} />
      <Technologies />
    </div>
  );
};

export default page;
