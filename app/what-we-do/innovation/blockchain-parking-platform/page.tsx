import dynamic from "next/dynamic";
import { AnimatedWavyBackground, Blockchain } from "@/content/AllSVG";
import blockchainParkingImage1 from "../../../../public/blockchain12.jpg";
import { FaParking, FaLock, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Highlights = dynamic(() => import("@/components/whatwedo/Highlights"));
const Features = dynamic(() => import("@/components/whatwedo/Features"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Connect = dynamic(() => import("@/components/whatwedo/Connect"));
const QuoteComponent = dynamic(() => import("@/components/whatwedo/Quote"));
const UseCases = dynamic(() => import("@/components/whatwedo/UseCases"));

const page = () => {
  const title1 = "Revolutionizing Parking with Blockchain Technology";
  const text1 = "Our Blockchain-parking-platform leverages cutting-edge blockchain technology to create a secure, efficient, and user-friendly parking experience for urban environments.";

  const title2 = "Transforming Urban Mobility through Smart Parking Solutions";
  const text2 = "By integrating blockchain and IoT, we're revolutionizing the parking industry, offering enhanced security, seamless payments, and optimized space utilization.";

  const features = [
    {
      icon: <FaParking className="w-12 h-12" />,
      title: "Smart Space Management",
      description: "Real-time tracking and allocation of parking spaces using IoT sensors.",
    },
    {
      icon: <FaLock className="w-12 h-12" />,
      title: "Blockchain-Secured Transactions",
      description: "Ensure secure and transparent payment processing through blockchain.",
    },
    {
      icon: <FaMobileAlt className="w-12 h-12" />,
      title: "Mobile App Integration",
      description: "Easy booking, navigation, and payment through a user-friendly mobile app.",
    },
    {
      icon: <FaChartLine className="w-12 h-12" />,
      title: "Dynamic Pricing",
      description: "Implement demand-based pricing to optimize parking space utilization.",
    },
  ];

  const highlights = [
    { number: "30%", text: "Increased Parking Efficiency" },
    { number: "100%", text: "Transaction Transparency" },
    { number: "24/7", text: "Automated Operations" },
    { number: "50%", text: "Reduced Parking Violations" }
  ];

  const futureBenefits = [
    "Integration with smart city infrastructure",
    "Predictive parking availability",
    "Automated vehicle parking systems",
    "Peer-to-peer parking space sharing",
    "Electric vehicle charging integration"
  ];

  const useCases = [
    { title: "Urban Centers", description: "Optimized parking management for high-traffic city areas" },
    { title: "Airports", description: "Streamlined long-term parking with secure payment processing" },
    { title: "Shopping Malls", description: "Enhanced customer experience with easy parking solutions" },
    { title: "Residential Complexes", description: "Efficient allocation and management of resident parking" }
  ];

  const innovationQuote = {
    text: "Our Blockchain-parking-platform isn't just about finding a parking space; it's about reimagining urban mobility and space utilization for smarter cities.",
    author: "Sarah Chen",
    position: "Head of Urban Innovation"
  };

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
        image1={blockchainParkingImage1}
      />
      <Features features={features} />
      <Highlights highlights={highlights} />
      <Benefits benefits={futureBenefits} />
      <UseCases cases={useCases} />
      <QuoteComponent quote={innovationQuote} />
      <Connect
        title="Transform Urban Parking with Blockchain"
        description="Ready to revolutionize parking management in your city? Let's explore how our Blockchain-parking-platform can create smarter, more efficient urban spaces."
        l1="" l2="" l3=""
        bt="Request a Demo"
      />
    </div>
  );
};

export default page;