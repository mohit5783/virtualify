import dynamic from "next/dynamic";
import { AnimatedWavyBackground, CloudNative } from "@/content/AllSVG";
import cloudNativeImage1 from "../../../../public/cloudnative1.jpg";
import cloudNativeImage2 from "../../../../public/cloudnative2.jpg";
import {
  FaDocker,
  FaAws,
  FaGoogle,
  FaMicrosoft,
  FaJava,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiPrometheus, SiGrafana, SiGo } from "react-icons/si";

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

const title = "Empower Your Business with Cloud-Native Applications";
const description = "Build scalable, resilient, and efficient applications designed to thrive in modern cloud environments.";
const l1 = "Microservices architecture development";
const l2 = "Container orchestration and management";
const l3 = "Cloud-native CI/CD pipelines";
const bt = "Start Your Cloud-Native Project";

const customTechnologies = [
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Google Cloud", icon: <FaGoogle /> },
  { name: "Azure", icon: <FaMicrosoft /> },
  { name: "Terraform", icon: <SiTerraform /> },
  { name: "Prometheus", icon: <SiPrometheus /> },
  { name: "Grafana", icon: <SiGrafana /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Go", icon: <SiGo /> },
]

const CloudNativeApplicationsPage = () => {
  const title1 = "Revolutionize Your Infrastructure with Cloud-Native Apps";
  const title2 = "Harness the Power of Modern Cloud Technologies";
  const title3 = "Scale Effortlessly with Microservices Architecture";
  const text1 = "";
  const text2 = `Cloud-native applications are designed to exploit the scalability, flexibility, and resiliency of cloud computing. Our cloud-native development services focus on creating applications that are containerized, dynamically orchestrated, and leverage microservices architectures to deliver unparalleled performance and scalability.`;
  const text3 = `Our expert team utilizes cutting-edge cloud technologies and best practices to develop applications that are not just cloud-compatible, but cloud-optimized. From containerization to serverless computing, we provide end-to-end cloud-native solutions that drive innovation and operational efficiency.`;

  const benefits = [
    "Achieve unparalleled scalability and flexibility",
    "Improve resilience and fault tolerance",
    "Accelerate time-to-market with rapid deployment",
    "Optimize resource utilization and reduce costs",
    "Enable continuous integration and delivery",
    "Improve application portability across cloud providers",
    "Enhance system observability and monitoring",
    "Facilitate easier updates and maintenance",
    "Improve development team productivity",
    "Future-proof your applications"
  ];

  const caseStudies = [
    {
      title: "Global Retail Giant's Cloud Transformation",
      description: "Migrated a monolithic e-commerce platform to a cloud-native architecture, enabling 99.99% uptime during peak seasons and reducing infrastructure costs by 40%.",
      image: "/retail.jpg"
    },
    {
      title: "FinTech Startup's Scalable Backend",
      description: "Developed a cloud-native microservices architecture for a fast-growing fintech, allowing them to scale from 10,000 to 1 million users without service disruptions.",
      image: "/SliderImage3.webp"
    },
    {
      title: "Healthcare Data Platform Overhaul",
      description: "Redesigned a healthcare provider's data platform using cloud-native principles, improving data processing speed by 200% and ensuring HIPAA compliance.",
      image: "/SliderImage2.webp"
    },
  ];

  const faqItems = [
    {
      question: "What defines a cloud-native application?",
      answer: "Cloud-native applications are specifically designed to exploit cloud computing capabilities. They typically feature microservices architecture, containerization, dynamic orchestration, and are built using DevOps practices for continuous integration and delivery."
    },
    {
      question: "What are the key components of a cloud-native stack?",
      answer: "A typical cloud-native stack includes containerization tools like Docker, orchestration platforms like Kubernetes, cloud services (AWS, Azure, or GCP), microservices, APIs for communication, and CI/CD pipelines for automated deployment and testing."
    },
    {
      question: "How does adopting cloud-native architecture impact business agility?",
      answer: "Cloud-native architectures significantly enhance business agility by enabling faster deployment of new features, easier scaling to meet demand, improved resilience to failures, and the ability to quickly adapt to changing market conditions or user needs."
    },
    {
      question: "Is it possible to gradually transition to a cloud-native architecture?",
      answer: "Yes, many organizations adopt a gradual approach to cloud-native transformation. This can involve strategies like the strangler pattern, where parts of a monolithic application are incrementally replaced with microservices, or by starting new projects with cloud-native principles while maintaining existing systems."
    },
    {
      question: "How does cloud-native development address security concerns?",
      answer: "Cloud-native development emphasizes security through practices like infrastructure-as-code, which allows security policies to be version-controlled and automatically enforced. It also leverages the built-in security features of cloud providers and enables easier implementation of zero-trust security models."
    },
  ];


  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={CloudNative}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={cloudNativeImage1}
      />
      <ProcessTimeline />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={cloudNativeImage2}
      />
      <CaseStudies caseStudies={caseStudies} />
      <Benefits benefits={benefits} />
      <TechStack webAppTechnologies={customTechnologies} text="Cloud-Native Development Technologies" />
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

export default CloudNativeApplicationsPage;