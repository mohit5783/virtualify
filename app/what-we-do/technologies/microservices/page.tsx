import dynamic from "next/dynamic";
import { AnimatedWavyBackground, Microservices } from "@/content/AllSVG";
import microservicesImage1 from "../../../../public/microservices1.avif";
import microservicesImage2 from "../../../../public/microservices2.jpg";
import {
  FaJava,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiApachekafka,
  SiMongodb,
  SiPostgresql,
  SiRabbitmq,
  SiGrafana,
  SiKubernetes
} from "react-icons/si";

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

const title = "Empower Your Business with Microservices Architecture";
const description = "Design, develop, and deploy scalable, resilient, and maintainable microservices architectures for your modern applications.";
const l1 = "Microservices design and implementation";
const l2 = "Scalable and resilient architecture";
const l3 = "Seamless integration and orchestration";
const bt = "Start Your Microservices Project";

const customTechnologies = [
  { name: "Java", icon: <FaJava /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Kafka", icon: <SiApachekafka /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "RabbitMQ", icon: <SiRabbitmq /> },
  { name: "Grafana", icon: <SiGrafana /> },
];

const MicroservicesPage = () => {
  const title1 = "Transform Your Architecture with Microservices";
  const title2 = "Innovative Solutions for Modern Application Development";
  const title3 = "Enhance Scalability and Flexibility with Microservices";
  const text1 = "";
  const text2 = `In today's fast-paced digital landscape, microservices architecture offers unparalleled flexibility, scalability, and maintainability. Our microservices development services focus on breaking down monolithic applications into smaller, independently deployable services that work together seamlessly.`;
  const text3 = `Our expert team leverages industry-leading technologies and best practices to design, develop, and deploy microservices that align with your business goals. From API design to containerization and orchestration, we provide end-to-end microservices solutions that drive innovation and agility in your organization.`;

  const benefits = [
    "Improved scalability and performance",
    "Enhanced fault isolation and resilience",
    "Faster time-to-market for new features",
    "Easier maintenance and updates",
    "Technology stack flexibility",
    "Better resource utilization",
    "Improved team autonomy and productivity",
    "Easier integration with third-party services",
    "Enhanced security through service isolation",
    "Simplified continuous deployment"
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Overhaul",
      description: "How we helped an e-commerce giant increase their system's throughput by 300% with microservices.",
      image: "/ecommerce.jpg"
    },
    {
      title: "Financial Services Transformation",
      description: "Modernizing a legacy banking system with microservices, resulting in 50% faster feature delivery.",
      image: "/banking-pp.avif"
    },
    {
      title: "Scalable IoT Data Processing",
      description: "Building a microservices-based IoT platform that can handle millions of device connections in real-time.",
      image: "/iot1.jpg"
    },
  ];

  const faqItems = [
    {
      question: "What are the main benefits of microservices?",
      answer: "Microservices offer improved scalability, faster development cycles, technology diversity, and easier maintenance. They allow organizations to innovate faster and adapt more quickly to changing requirements."
    },
    {
      question: "How do microservices compare to monolithic architectures?",
      answer: "Unlike monolithic architectures where all components are tightly coupled, microservices are loosely coupled, independently deployable services. This allows for greater flexibility, scalability, and easier maintenance."
    },
    {
      question: "What challenges might we face when adopting microservices?",
      answer: "Common challenges include increased operational complexity, data consistency across services, service discovery and communication, and monitoring distributed systems. Our team has experience in addressing these challenges effectively."
    },
    {
      question: "Can you help migrate our existing application to a microservices architecture?",
      answer: "Yes, we offer migration services to help transition monolithic applications to microservices architectures. This typically involves careful planning, gradual decomposition of the monolith, and implementing new services alongside the existing system."
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Microservices}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={microservicesImage1}
      />
      <ProcessTimeline />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={microservicesImage2}
      />
      <CaseStudies caseStudies={caseStudies} />
      <Benefits benefits={benefits} />
      <TechStack webAppTechnologies={customTechnologies} text="Microservices Development Technologies" />
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

export default MicroservicesPage;