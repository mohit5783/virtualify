import dynamic from "next/dynamic";
import { AnimatedWavyBackground, Serverless } from "@/content/AllSVG";
import serverlessImage1 from "../../../../public/serverless1.avif";
import serverlessImage2 from "../../../../public/serverless2.jpg";
import {
  FaAws,
  FaNodeJs,
  FaPython,
  FaDocker,
} from "react-icons/fa";
import {
  SiAzurefunctions,
  SiGooglecloud,
  SiServerless,
  SiTerraform,
  SiKubernetes,
  SiGraphql
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

const title = "Build Scalable and Efficient Serverless Applications";
const description = "Develop high-performance, cost-effective serverless applications that automatically scale to meet demand.";
const l1 = "Serverless architecture design and implementation";
const l2 = "Optimized for scalability and cost-efficiency";
const l3 = "Seamless integration with cloud services";
const bt = "Start Your Serverless Project";

const customTechnologies = [
  { name: "AWS Lambda", icon: <FaAws /> },
  { name: "Azure Functions", icon: <SiAzurefunctions /> },
  { name: "Google Cloud Functions", icon: <SiGooglecloud /> },
  { name: "Serverless Framework", icon: <SiServerless /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Terraform", icon: <SiTerraform /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "GraphQL", icon: <SiGraphql /> },
];

const ServerlessApplicationsPage = () => {
  const title1 = "Revolutionize Your Infrastructure with Serverless";
  const title2 = "Scalable Solutions for Modern Cloud Applications";
  const title3 = "Optimize Performance and Costs with Serverless Architecture";
  const text1 = "";
  const text2 = `In the era of cloud computing, serverless architecture offers unparalleled scalability and cost-efficiency. Our serverless application development services focus on creating high-performance, event-driven solutions that automatically scale to meet demand while minimizing operational overhead.`;
  const text3 = `Our expert team leverages cutting-edge serverless technologies and best practices to develop applications that provide instant scalability, reduced operational costs, and improved developer productivity. From microservices to full-stack applications, we provide end-to-end serverless solutions that drive innovation and business growth.`;

  const benefits = [
    "Automatic scaling to handle any level of traffic",
    "Pay only for the compute resources you actually use",
    "Reduced operational overhead and maintenance",
    "Faster time to market with simplified deployment",
    "Improved fault tolerance and availability",
    "Easy integration with other cloud services",
    "Focus on code, not infrastructure management",
    "Simplified backend operations",
    "Enhanced security with regular patches and updates",
    "Globally distributed applications with ease"
  ];

  const caseStudies = [
    {
      title: "Real-time Data Processing",
      description: "How we helped a fintech company reduce data processing costs by 70% using serverless architecture.",
      image: "/SliderImage3.webp"
    },
    {
      title: "Scalable E-commerce Backend",
      description: "Building a serverless e-commerce platform that effortlessly handled Black Friday traffic spikes.",
      image: "/ecommerce.jpg"
    },
    {
      title: "IoT Data Collection",
      description: "Creating a serverless IoT data collection system that processes millions of events daily.",
      image: "/iot1.jpg"
    },
  ];

  const faqItems = [
    {
      question: "What exactly is serverless computing?",
      answer: "Serverless computing is a cloud computing execution model where the cloud provider dynamically manages the allocation and provisioning of servers. A serverless application runs in stateless compute containers that are event-triggered, ephemeral, and fully managed by the cloud provider."
    },
    {
      question: "How does serverless affect application costs?",
      answer: "Serverless can significantly reduce costs as you only pay for the actual compute time used, rather than paying for idle servers. This can lead to substantial savings, especially for applications with variable traffic patterns."
    },
    {
      question: "Can serverless handle high-traffic applications?",
      answer: "Yes, serverless architectures are designed to automatically scale to handle high traffic. They can instantly scale up to handle traffic spikes and scale down when traffic decreases, ensuring optimal performance at all times."
    },
    {
      question: "What types of applications are best suited for serverless?",
      answer: "Serverless is ideal for event-driven applications, microservices, APIs, data processing tasks, and applications with variable or unpredictable workloads. It's particularly well-suited for applications that have clear, separate functions."
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Serverless}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={serverlessImage1}
      />
      <ProcessTimeline />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={serverlessImage2}
      />
      <CaseStudies caseStudies={caseStudies} />
      <Benefits benefits={benefits} />
      <TechStack webAppTechnologies={customTechnologies} text="Serverless Application Development Technologies" />
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

export default ServerlessApplicationsPage;