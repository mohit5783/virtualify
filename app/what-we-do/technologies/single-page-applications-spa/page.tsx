import dynamic from "next/dynamic";
import { AnimatedWavyBackground, SPApp } from "@/content/AllSVG";
import spaImage1 from "../../../../public/spa1.jpg";
import spaImage2 from "../../../../public/spa2.avif";
import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import { SiRedux, SiWebpack } from "react-icons/si";

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

const title = "Create Seamless User Experiences with Single Page Applications";
const description = "Develop fast, responsive, and interactive Single Page Applications that provide a fluid user experience and improve engagement.";
const l1 = "Modern SPA development with React, Vue, or Angular";
const l2 = "Optimized for performance and user experience";
const l3 = "Seamless integration with backend services";
const bt = "Start Your SPA Project";

const customTechnologies = [
  { name: "React", icon: <FaReact /> },
  { name: "Vue.js", icon: <FaVuejs /> },
  { name: "Angular", icon: <FaAngular /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3 /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Webpack", icon: <SiWebpack /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
];

const SinglePageApplicationsPage = () => {
  const title1 = "Revolutionize Web Experiences with SPAs";
  const title2 = "Innovative Solutions for Modern Web Applications";
  const title3 = "Enhance User Engagement with Single Page Applications";
  const text1 = "";
  const text2 = `In the era of instant gratification, Single Page Applications (SPAs) offer unparalleled user experiences. Our SPA development services focus on creating fast, responsive, and interactive web applications that load once and dynamically update as users interact with them.`;
  const text3 = `Our expert team leverages cutting-edge SPA frameworks and best practices to develop applications that provide smooth, native-like experiences on the web. From optimized routing to state management, we provide end-to-end SPA solutions that drive user engagement and satisfaction.`;

  const benefits = [
    "Deliver faster, more responsive user experiences",
    "Reduce server load and bandwidth usage",
    "Provide seamless, uninterrupted user interactions",
    "Simplify and streamline development and maintenance",
    "Enable offline functionality and improved performance",
    "Facilitate easier integration with mobile apps",
    "Improve user engagement and retention rates",
    "Offer a consistent user experience across devices",
    "Enable real-time updates and interactions",
    "Simplify deployment and scaling processes"
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Revamp",
      description: "How we increased conversion rates by 40% with a React-based SPA for an online marketplace.",
      image: "/ecommerce.jpg"
    },
    {
      title: "Social Media Dashboard",
      description: "Developing a Vue.js SPA that improved user engagement time by 60% for a social media management tool.",
      image: "/mobile12.jpg"
    },
    {
      title: "Financial Analytics Tool",
      description: "Creating an Angular SPA for real-time financial data analysis, resulting in a 50% increase in user productivity.",
      image: "/SliderImage3.webp"
    },
  ];

  const faqItems = [
    {
      question: "What is a Single Page Application (SPA)?",
      answer: "A Single Page Application is a web app that loads a single HTML page and dynamically updates the content as the user interacts with the app, without reloading the entire page. This results in faster, more fluid user experiences."
    },
    {
      question: "What are the advantages of SPAs over traditional multi-page applications?",
      answer: "SPAs offer faster performance, smoother user experiences, reduced server load, and easier development and maintenance. They also enable offline functionality and can provide a more app-like feel on the web."
    },
    {
      question: "Which frameworks do you use for SPA development?",
      answer: "We primarily use React, Vue.js, and Angular for SPA development, choosing the best fit based on project requirements. We're also experienced with other frameworks and can adapt to your preferred technology stack."
    },
    {
      question: "How do SPAs handle SEO?",
      answer: "While SPAs traditionally had challenges with SEO, modern techniques like server-side rendering, static site generation, and proper use of meta tags have largely mitigated these issues. We implement best practices to ensure your SPA is search engine friendly."
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={SPApp}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={spaImage1}
      />
      <ProcessTimeline />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={spaImage2}
      />
      <CaseStudies caseStudies={caseStudies} />
      <Benefits benefits={benefits} />
      <TechStack webAppTechnologies={customTechnologies} text="Single Page Application Development Technologies" />
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

export default SinglePageApplicationsPage;