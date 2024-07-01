import dynamic from "next/dynamic";
import { AnimatedWavyBackground, IoT } from "@/content/AllSVG";
import iotSmartTrainingImage1 from "../../../../public/iot1.jpg";
import { FaRobot, FaChartLine, FaCloudUploadAlt, FaMobileAlt } from 'react-icons/fa';

const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Highlights = dynamic(() => import("@/components/whatwedo/Highlights"));
const Features = dynamic(() => import("@/components/whatwedo/Features"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Connect = dynamic(() => import("@/components/whatwedo/Connect"));
const QuoteComponent = dynamic(() => import("@/components/whatwedo/Quote"));
const UseCases = dynamic(() => import("@/components/whatwedo/UseCases"));

const page = () => {
  const title1 = "Revolutionizing Learning with IoT Smart Training";
  const text1 = "Our IoT Smart Training platform leverages cutting-edge Internet of Things technology to create an immersive, adaptive, and highly effective learning experience.";

  const title2 = "Empowering Learners through Connected Intelligence";
  const text2 = "By integrating IoT devices and AI-driven analytics, we're transforming the training industry, offering personalized learning paths, real-time feedback, and data-driven insights.";

  const features = [
    {
      icon: <FaRobot className="w-12 h-12" />,
      title: "AI-Powered Personalization",
      description: "Tailored learning experiences based on individual progress and preferences.",
    },
    {
      icon: <FaChartLine className="w-12 h-12" />,
      title: "Real-Time Analytics",
      description: "Instant insights into learner performance and engagement metrics.",
    },
    {
      icon: <FaCloudUploadAlt className="w-12 h-12" />,
      title: "Cloud-Based Learning Environment",
      description: "Access training materials and progress from anywhere, anytime.",
    },
    {
      icon: <FaMobileAlt className="w-12 h-12" />,
      title: "Mobile Integration",
      description: "Seamless learning experience across all devices with progress synchronization.",
    },
  ];

  const highlights = [
    { number: "40%", text: "Improved Learning Retention" },
    { number: "60%", text: "Faster Skill Acquisition" },
    { number: "24/7", text: "Accessible Learning" },
    { number: "90%", text: "Learner Satisfaction Rate" }
  ];

  const futureBenefits = [
    "Virtual Reality (VR) integrated training modules",
    "Biometric feedback for stress and focus optimization",
    "Gamified learning experiences with IoT-enabled props",
    "AI-driven career path recommendations",
    "Cross-platform knowledge sharing networks"
  ];

  const useCases = [
    { title: "Corporate Training", description: "Efficient upskilling and reskilling programs for employees" },
    { title: "Technical Education", description: "Hands-on learning with IoT-enabled equipment and real-time feedback" },
    { title: "Healthcare Training", description: "Simulated patient care scenarios with IoT-enabled medical devices" },
    { title: "Safety Training", description: "Immersive hazard recognition and response training using IoT sensors" }
  ];

  const innovationQuote = {
    text: "Our IoT Smart Training platform doesn't just deliver content; it creates an ecosystem of connected learning that adapts to each individual's needs and potential.",
    author: "Dr. Amelia Zhao",
    position: "Chief Learning Innovation Officer"
  };

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={IoT}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={iotSmartTrainingImage1}
      />
      <Features features={features} />
      <Highlights highlights={highlights} />
      <Benefits benefits={futureBenefits} />
      <UseCases cases={useCases} />
      <QuoteComponent quote={innovationQuote} />
      <Connect
        title="Transform Your Training with IoT"
        description="Ready to revolutionize your organization's learning and development? Let's explore how our IoT Smart Training platform can enhance skill acquisition and knowledge retention."
        l1="" l2="" l3=""
        bt="Schedule a Consultation"
      />
    </div>
  );
};

export default page;