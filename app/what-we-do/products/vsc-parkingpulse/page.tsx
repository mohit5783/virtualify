import dynamic from "next/dynamic";
import { AnimatedWavyBackground, Parking } from "@/content/AllSVG";
import parkingpulseImage1 from "../../../../public/parking1.jpg";
import { FaCar, FaParking, FaMobile, FaMoneyBillWave } from "react-icons/fa";
import QuoteComponent from "@/components/whatwedo/Quote";

const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Highlights = dynamic(() => import("@/components/whatwedo/Highlights"));
const Features = dynamic(() => import("@/components/whatwedo/Features"));
const FutureBenefits = dynamic(() => import("@/components/whatwedo/FutureBenefits"));
const Connect = dynamic(() => import("@/components/whatwedo/Connect"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));

const VscParkingPulsePage = () => {
  const title1 = "VSC ParkingPulse: Revolutionizing Parking Management";
  const text1 = "Empowering parking operators with smart technology for efficient operations";
  const title2 = "Optimize Your Parking Business";
  const text2 = "VSC ParkingPulse is an all-in-one parking management solution designed to streamline operations, enhance user experiences, and maximize revenue.";

  const highlights = [
    { number: "1M+", text: "Parking transactions processed monthly" },
    { number: "500+", text: "Parking facilities powered" },
    { number: "99.9%", text: "System uptime" },
    { number: "30%", text: "Increase in parking efficiency" },
  ];

  const solutionsQuote = {
    text: "Optimizing parking management with advanced analytics and real-time data ensures efficiency and a seamless parking experience for everyone.",
    author: "John Smith",
    position: "CEO, ParkingPulse",
  };

  const panels = [
    {
      heading: "Smart Occupancy Tracking",
      content: "Monitor real-time parking occupancy with advanced sensors and analytics. Optimize space utilization and guide drivers to available spots efficiently.",
      image: "/parking11.avif",
      title: "Smart Occupancy Tracking"
    },
    {
      heading: "Automated Payment Systems",
      content: "Implement contactless payment options including mobile apps, RFID, and credit card systems for seamless transactions and reduced wait times.",
      image: "/parking12.jpg",
      title: "Automated Payment Systems"
    },
    {
      heading: "Dynamic Pricing",
      content: "Utilize data-driven pricing strategies to optimize revenue based on demand, time of day, and special events.",
      image: "/parking13.jpg",
      title: "Dynamic Pricing"
    },
    {
      heading: "License Plate Recognition",
      content: "Enhance security and streamline entry/exit with advanced LPR technology, enabling ticketless parking solutions.",
      image: "/uiux13.jpg",
      title: "License Plate Recognition"
    },
    {
      heading: "Parking Guidance System",
      content: "Guide drivers to available spaces with LED indicators and digital signage, reducing congestion and improving the parking experience.",
      image: "/parking14.jpg",
      title: "Parking Guidance System"
    },
    {
      heading: "Reporting and Analytics",
      content: "Access comprehensive reports and analytics to gain insights into parking patterns, revenue trends, and operational efficiency.",
      image: "/analytics2.jpg",
      title: "Reporting and Analytics"
    }
  ];

  const features = [
    {
      icon: <FaCar className="w-12 h-12" />,
      title: "Real-time Occupancy Monitoring",
      description: "Track available spaces across your parking facilities in real-time.",
    },
    {
      icon: <FaParking className="w-12 h-12" />,
      title: "Automated Entry/Exit Management",
      description: "Streamline vehicle flow with barrier-free entry and exit systems.",
    },
    {
      icon: <FaMobile className="w-12 h-12" />,
      title: "Mobile App Integration",
      description: "Convenient booking and payments via a user-friendly app",
    },
    {
      icon: <FaMoneyBillWave className="w-12 h-12" />,
      title: "Revenue Management",
      description: "Optimize pricing and track revenue with advanced analytics tools.",
    },
  ];

  const futureBenefits = [
    {
      icon: "/iterative 1.png",
      title: "Increased Operational Efficiency",
      description: "Automate routine tasks and optimize resource allocation for smoother operations."
    },
    {
      icon: "/agile 1.png",
      title: "Enhanced User Experience",
      description: "Ensure seamless parking with user-friendly tech and minimal wait times."
    },
    {
      icon: "/innovation 1.png",
      title: "Data-Driven Decision Making",
      description: "Use analytics to enhance parking strategies and decision-making."
    },
    {
      icon: "/testing.png",
      title: "Scalable Solution",
      description: "Easily expand your parking management capabilities as your business grows."
    }
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Parking}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={parkingpulseImage1}
      />
      <Features features={features} />
      <Highlights highlights={highlights} />
      <FutureBenefits benefits={futureBenefits} />
      <BusinessService panels={panels} text1="Parking Pulse" />
      <QuoteComponent quote={solutionsQuote} />
      <Connect
        title="Transform Your Parking Operations with VSC ParkingPulse"
        description="Ready to optimize your parking facility? Get in touch with our experts today."
        l1="" l2="" l3=""
        bt="Request a Demo"
      />
    </div>
  );
};

export default VscParkingPulsePage;