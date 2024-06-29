import dynamic from "next/dynamic";
import { AnimatedWavyBackground, Benzmint } from "@/content/AllSVG";
import benzmintImage1 from "../../../../public/Benzmint.jpg";
import { FaTools, FaChartLine, FaShieldAlt, FaUserShield } from "react-icons/fa";
import QuoteComponent from "@/components/whatwedo/Quote";

const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Highlights = dynamic(() => import("@/components/whatwedo/Highlights"));
const Features = dynamic(() => import("@/components/whatwedo/Features"));
const FutureBenefits = dynamic(() => import("@/components/whatwedo/FutureBenefits"));
const Connect = dynamic(() => import("@/components/whatwedo/Connect"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));

const BenzmintPage = () => {
  const title1 = "Benzmint: The Future of Automotive Maintenance";
  const text1 = "Empowering car owners and service providers with innovative solutions for efficient automotive maintenance";
  const title2 = "Transform Your Automotive Business";
  const text2 = "Benzmint offers cutting-edge automotive maintenance solutions designed to streamline operations, enhance customer satisfaction, and boost profitability.";

  const highlights = [
    { number: "1M+", text: "Services performed annually" },
    { number: "200+", text: "Service centers powered" },
    { number: "99.9%", text: "Customer satisfaction rate" },
    { number: "35%", text: "Reduction in service time" },
  ];

  const solutionsQuote = {
    text: "Revolutionizing automotive maintenance with innovative technology and real-time data to ensure efficiency and customer satisfaction.",
    author: "Jane Doe",
    position: "CEO, Benzmint",
  };

  const panels = [
    {
      heading: "Automated Service Scheduling",
      content: "Streamline service scheduling with our intelligent system that automatically books appointments based on availability and customer preferences.",
      image: "/analytics13.jpg",
      title: "Automated Service Scheduling"
    },
    {
      heading: "Real-Time Diagnostics",
      content: "Utilize advanced diagnostics tools to quickly identify and address vehicle issues, minimizing downtime and enhancing service quality.",
      image: "/benzmint11.jpg",
      title: "Real-Time Diagnostics"
    },
    {
      heading: "Customer Relationship Management",
      content: "Maintain detailed customer profiles and service histories to provide personalized service and build long-term relationships.",
      image: "/benzmint12.avif",
      title: "Customer Relationship Management"
    },
    {
      heading: "Inventory Management",
      content: "Optimize parts inventory with real-time tracking and automated restocking to ensure you always have the necessary parts on hand.",
      image: "/benzmint13.avif",
      title: "Inventory Management"
    },
    {
      heading: "Performance Analytics",
      content: "Gain insights into your service center's performance with comprehensive analytics and reporting tools, helping you make data-driven decisions.",
      image: "/analytics12.jpg",
      title: "Performance Analytics"
    },
    {
      heading: "Mobile Integration",
      content: "Enhance customer convenience with a mobile app for booking services, tracking service status, and receiving updates.",
      image: "/mobile14.jpg",
      title: "Mobile Integration"
    }
  ];

  const features = [
    {
      icon: <FaTools className="w-12 h-12" />,
      title: "Comprehensive Service Management",
      description: "Manage all aspects of automotive maintenance with a single platform.",
    },
    {
      icon: <FaChartLine className="w-12 h-12" />,
      title: "Real-Time Performance Tracking",
      description: "Monitor service center performance with up-to-date analytics.",
    },
    {
      icon: <FaShieldAlt className="w-12 h-12" />,
      title: "Secure Data Management",
      description: "Ensure customer and vehicle data is securely stored and accessible.",
    },
    {
      icon: <FaUserShield className="w-12 h-12" />,
      title: "Enhanced Customer Experience",
      description: "Provide a seamless and personalized experience for your customers.",
    },
  ];

  const futureBenefits = [
    {
      icon: "/iterative 1.png",
      title: "Increased Efficiency",
      description: "Automate routine tasks and optimize workflow for improved efficiency."
    },
    {
      icon: "/agile 1.png",
      title: "Enhanced Customer Satisfaction",
      description: "Deliver exceptional service and build lasting customer relationships."
    },
    {
      icon: "/innovation 1.png",
      title: "Data-Driven Decisions",
      description: "Leverage data to make informed decisions and drive business growth."
    },
    {
      icon: "/testing.png",
      title: "Scalable Solutions",
      description: "Easily scale your operations with flexible and adaptable solutions."
    }
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Benzmint}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={benzmintImage1}
      />
      <Features features={features} />
      <Highlights highlights={highlights} />
      <FutureBenefits benefits={futureBenefits} />
      <BusinessService panels={panels} text1="Benzmint" />
      <QuoteComponent quote={solutionsQuote} />
      <Connect
        title="Transform Your Automotive Business with Benzmint"
        description="Ready to revolutionize your automotive maintenance services? Get in touch with our experts today."
        l1="" l2="" l3=""
        bt="Request a Demo"
      />
    </div>
  );
};

export default BenzmintPage;
