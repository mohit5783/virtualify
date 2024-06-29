import dynamic from "next/dynamic";
import { AnimatedWavyBackground, SmartTv } from "@/content/AllSVG";
import smartTvAppsImg1 from "../../../../public/smarttv1.jpg";
import smartTvAppsImg2 from "../../../../public/smarttv2.jpg";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import { SiAndroid, SiRoku, SiAppletv } from "react-icons/si";

const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const TechStack = dynamic(() => import("@/components/whatwedo/TechStack"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const CaseStudies = dynamic(() => import("@/components/whatwedo/CaseStudies"));
const Testimonials = dynamic(() => import("@/components/HomeTestimonials"));
const Connect = dynamic(() => import("@/components/whatwedo/Connect"));
const FAQ = dynamic(() => import("@/components/whatwedo/FAQ"));
const Team = dynamic(() => import("@/components/whatwedo/Team"));
const ProcessTimeline = dynamic(() => import("@/components/whatwedo/ProcessTimeline"));

const title = "Revolutionize Home Entertainment with Smart TV Apps";
const description = "From concept to living room, we develop engaging, high-performance Smart TV applications that captivate audiences across major platforms.";
const l1 = "Cross-platform Smart TV app development";
const l2 = "Optimized for large screen experiences";
const l3 = "Seamless integration with TV features";
const bt = "Start Your Smart TV App Project";

const customTechnologies = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3 /> },
  { name: "Android TV", icon: <SiAndroid /> },
  { name: "Roku", icon: <SiRoku /> },
  { name: "tvOS", icon: <SiAppletv /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
];

const SmartTvAppsPage = () => {
  const title1 = "Transform Living Rooms with Smart TV Apps";
  const title2 = "Innovative Solutions for Modern Smart TV Platforms";
  const title3 = "Elevate User Experience with Engaging Smart TV Applications";
  const text1 = "";
  const text2 = `In the era of connected homes, compelling Smart TV applications are crucial for reaching audiences. Our comprehensive Smart TV app services focus on creating user-friendly, performant, and visually stunning solutions that cater to the unique requirements of large screen experiences.`;
  const text3 = `Our expert team leverages the latest Smart TV technologies and best practices to develop applications that enhance viewer engagement, provide rich interactive experiences, and drive content consumption. From custom development to platform certification, we provide end-to-end Smart TV app solutions.`;

  const benefits = [
    "Reach a growing audience of Smart TV users",
    "Create immersive, large-screen optimized experiences",
    "Develop once, deploy across multiple Smart TV platforms",
    "Enhance content discovery and user engagement",
    "Integrate with TV-specific features like remote controls and voice commands",
    "Optimize performance for limited TV hardware resources",
    "Ensure compatibility with various TV brands and models",
    "Leverage TV-specific monetization opportunities",
    "Provide seamless updates and content refreshes",
    "Extend your brand presence into the living room"
  ];

  const caseStudies = [
    {
      title: "Streaming Service Expansion",
      description: "How we helped a niche streaming service increase their viewer base by 200% with a Smart TV app.",
      image: "/Streaming-Service.jpg"
    },
    {
      title: "Interactive Education",
      description: "Developing an engaging educational app for Smart TVs that increased lesson completion rates by 150%.",
      image: "/Interactive-Education.jpg"
    },
    {
      title: "Fitness at Home",
      description: "Creating an intuitive fitness app for Smart TVs, resulting in a 300% increase in at-home workout sessions.",
      image: "/fitness.jpg"
    },
  ];

  const faqItems = [
    {
      question: "Which Smart TV platforms do you develop for?",
      answer: "We develop apps for major Smart TV platforms including Samsung's Tizen, LG's webOS, Android TV, Roku, and Apple's tvOS. We can target one or multiple platforms based on your needs."
    },
    {
      question: "How long does it take to develop a Smart TV app?",
      answer: "Development time varies based on complexity and target platforms. A basic app might take 2-3 months, while a complex, multi-platform app could take 4-6 months or more. We provide detailed timelines during our initial consultation."
    },
    {
      question: "How do you ensure good performance on different TV hardware?",
      answer: "We optimize our apps for TV hardware limitations, use efficient coding practices, and extensively test on various TV models to ensure smooth performance across devices."
    },
    {
      question: "Can you help with the submission process to Smart TV app stores?",
      answer: "Absolutely! We handle the entire submission process, including documentation, testing, and addressing any platform-specific requirements to ensure your app is approved and listed in the relevant Smart TV app stores."
    },
  ];


  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={SmartTv}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={smartTvAppsImg1}
      />
      <ProcessTimeline />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={smartTvAppsImg2}
      />
      <CaseStudies caseStudies={caseStudies} />
      <Benefits benefits={benefits} />
      <TechStack webAppTechnologies={customTechnologies} text="Smart TV App Development Technologies" />
      <Testimonials />
      <Team />
      <FAQ items={faqItems} />
      <Connect
        title={title}
        description={description}
        l1={l1}
        l2={l2}
        l3={l3}
        bt={bt}
      />
    </div>
  );
};

export default SmartTvAppsPage;