import dynamic from "next/dynamic";
import { AnimatedWavyBackground, PWAs } from "@/content/AllSVG";
import pwaImage1 from "../../../../public/pwa1.avif";
import pwaImage2 from "../../../../public/pwa2.avif";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import { SiPwa, SiWebpack, SiMockserviceworker } from "react-icons/si";

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

const title = "Elevate User Experience with Progressive Web Apps";
const description = "Develop fast, reliable, and engaging Progressive Web Apps that work across all devices and enhance user retention.";
const l1 = "Cross-platform Progressive Web App development";
const l2 = "Optimized for performance and offline capabilities";
const l3 = "Seamless integration with device features";
const bt = "Start Your PWA Project";

const customTechnologies = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3 /> },
  { name: "PWA", icon: <SiPwa /> },
  { name: "Webpack", icon: <SiWebpack /> },
  { name: "Service Workers", icon: <SiMockserviceworker /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
];

const ProgressiveWebAppsPage = () => {
  const title1 = "Transform Web Experiences with PWAs";
  const title2 = "Innovative Solutions for Modern Web Applications";
  const title3 = "Enhance User Engagement with Progressive Web Apps";
  const text1 = "";
  const text2 = `In today's mobile-first world, Progressive Web Apps (PWAs) offer the perfect blend of web and native app experiences. Our PWA development services focus on creating fast, reliable, and engaging applications that work seamlessly across all devices and network conditions.`;
  const text3 = `Our expert team leverages cutting-edge PWA technologies and best practices to develop applications that provide native-like experiences, work offline, and can be installed on users' home screens. From responsive design to push notifications, we provide end-to-end PWA solutions that drive user engagement and retention.`;

  const benefits = [
    "Reach users across all devices with a single codebase",
    "Provide fast, app-like experiences on the web",
    "Enable offline functionality for improved reliability",
    "Increase user engagement with push notifications",
    "Improve discoverability through search engines",
    "Reduce development and maintenance costs",
    "Offer easy installation without app store approval",
    "Ensure automatic updates for all users",
    "Enhance performance with caching strategies",
    "Improve conversion rates with app-like user experience"
  ];

  const caseStudies = [
    {
      title: "E-commerce Transformation",
      description: "How we helped an online retailer increase mobile conversions by 65% with a PWA.",
      image: "/ecommerce.jpg"
    },
    {
      title: "News App Engagement",
      description: "Developing a PWA for a news outlet that increased daily active users by 40%.",
      image: "/newss.jpg"
    },
    {
      title: "Offline-First Travel Guide",
      description: "Creating a PWA travel guide that works offline, resulting in a 200% increase in user satisfaction.",
      image: "/travel.jpg"
    },
  ];

  const faqItems = [
    {
      question: "What makes a web app 'progressive'?",
      answer: "Progressive Web Apps use modern web capabilities to deliver app-like experiences. They are responsive, connectivity-independent, app-like, fresh, safe, discoverable, re-engageable, installable, and linkable."
    },
    {
      question: "Can PWAs work offline?",
      answer: "Yes, PWAs can work offline or in low-quality network conditions. This is achieved through the use of service workers, which cache app resources and data."
    },
    {
      question: "How do PWAs compare to native mobile apps?",
      answer: "PWAs offer many benefits of native apps, such as offline functionality and push notifications, while being more accessible (no app store required) and easier to maintain. They work across all devices but may have limited access to some device-specific features."
    },
    {
      question: "Can you convert an existing website into a PWA?",
      answer: "Yes, we can transform existing websites into PWAs. This process typically involves making the site responsive, adding a service worker for offline functionality, and creating a web app manifest for installability."
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={PWAs}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={pwaImage1}
      />
      <ProcessTimeline />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={pwaImage2}
      />
      <CaseStudies caseStudies={caseStudies} />
      <Benefits benefits={benefits} />
      <TechStack webAppTechnologies={customTechnologies} text="Progressive Web App Development Technologies" />
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

export default ProgressiveWebAppsPage;