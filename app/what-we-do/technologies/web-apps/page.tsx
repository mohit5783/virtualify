import dynamic from "next/dynamic";
import { AnimatedWavyBackground, Web } from "@/content/AllSVG";
import webAppsImg1 from "../../../../public/web.jpg";
import webAppsImg2 from "../../../../public/web3-13.jpg";
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaDatabase,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import { SiTypescript, SiGraphql, SiMongodb, SiRedis } from "react-icons/si";
import { DiRuby } from "react-icons/di";

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

const title = "Transform Your Business with Custom Web Apps";
const description = "From concept to deployment, we create powerful, scalable, and user-friendly web applications tailored to your unique business needs.";
const l1 = "Cutting-edge technologies";
const l2 = "Responsive and intuitive designs";
const l3 = "Scalable and secure solutions";
const bt = "Start Your Web App Project";


const customTechnologies = [
  { name: "React", icon: <FaReact /> },
  { name: "Angular", icon: <FaAngular /> },
  { name: "Vue.js", icon: <FaVuejs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Ruby", icon: <DiRuby /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
];

const WebAppsPage = () => {
  const title1 = "Empower Your Business with Advanced Web Apps";
  const title2 = "Innovative Solutions for Modern Web Development";
  const title3 = "Transform Your Digital Presence with Cutting-Edge Web Applications";
  const text1 = "";
  const text2 = `In the digital age, robust and dynamic web applications are crucial for business success. Our comprehensive web app services focus on creating user-friendly, scalable, and secure web solutions that cater to your business needs.`;
  const text3 = `Our expert team leverages the latest technologies and best practices to develop web applications that enhance user experience, improve operational efficiency, and drive business growth. From custom development to maintenance and support, we provide end-to-end web app solutions.`;


  const benefits = [
    "Enhance user engagement with intuitive web applications.",
    "Boost operational efficiency with custom web solutions.",
    "Increase revenue through robust e-commerce platforms.",
    "Ensure seamless performance across all devices with PWAs.",
    "Protect your applications with advanced security measures.",
    "Achieve scalability and flexibility with modern web technologies.",
    "Receive ongoing support and maintenance for uninterrupted performance.",
    "Drive innovation and stay ahead of the competition.",
    "Leverage data-driven insights to improve user experience.",
    "Foster a digital-first culture within your organization."
  ];

  const caseStudies = [
    {
      title: "E-commerce Revolution",
      description: "How we helped a retail company increase their online sales by 50% with a custom e-commerce solution.",
      image: "/ecommerce.jpg"
    },
    {
      title: "Healthcare Innovation",
      description: "Developing a progressive web app for a healthcare provider that improved patient engagement and satisfaction.",
      image: "/SliderImage2.webp"
    },
    {
      title: "FinTech Transformation",
      description: "Creating a secure and scalable web application for a financial services company, streamlining operations and improving customer experience.",
      image: "/SliderImage3.webp"
    },
  ];


  const faqItems = [
    {
      question: "What types of web applications do you develop?",
      answer: "We develop a wide range of web applications, including custom business solutions, e-commerce platforms, progressive web apps, content management systems, and more. Our team is skilled in creating both simple and complex web applications tailored to your specific needs."
    },
    {
      question: "How long does it take to develop a web application?",
      answer: "The development timeline varies depending on the complexity and scope of the project. A simple web application might take 4-8 weeks, while a more complex system could take several months. We provide detailed project timelines during our initial consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance for web applications?",
      answer: "Yes, we offer comprehensive support and maintenance services to ensure your web application remains secure, up-to-date, and performs optimally. Our team can provide regular updates, bug fixes, and feature enhancements as needed."
    },
    {
      question: "How do you ensure the security of web applications?",
      answer: "We implement industry-standard security measures, including encryption, secure authentication, regular security audits, and compliance with relevant data protection regulations. Our team stays updated on the latest security best practices to protect your web application and user data."
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Web}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={webAppsImg1}
      />
      <ProcessTimeline />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={webAppsImg2}
      />
      <CaseStudies caseStudies={caseStudies} />
      <Benefits benefits={benefits} />
      <TechStack webAppTechnologies={customTechnologies} text="Web App Development" />
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

export default WebAppsPage;