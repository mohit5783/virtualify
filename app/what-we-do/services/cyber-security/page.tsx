import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const ApproachSection = dynamic(() => import("@/components/whatwedo/Approach"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
const Benefits = dynamic(() => import("@/components/whatwedo/Benefits"));
const Partners = dynamic(() => import("@/components/whatwedo/Partners"));
const BusinessService = dynamic(() => import("@/components/whatwedo/BusinessService"));
import { AnimatedWavyBackground, CyberSecurity } from "@/content/AllSVG";
import securityImg1 from "../../../../public/cs1.jpg";
import securityImg2 from "../../../../public/cs2.jpg";

const page = () => {
  const title1 = "Enhance Your Cyber Resilience";
  const title2 = "Security as a Catalyst for Growth";
  const title3 = "Comprehensive Cybersecurity Solutions";
  const text1 = "";
  const text2 = `In today's digital landscape, where threat landscapes are constantly evolving, cybersecurity transcends mere compliance and risk management—it is essential for business growth.`;
  const text3 = `Our cybersecurity services enable businesses to navigate the complexities of cybersecurity, ensuring robust protection and fostering an environment conducive to growth. From advisory and consulting to incident response and data protection, our comprehensive solutions cater to diverse industry needs, ensuring robust and scalable implementations.`;

  const panels = [
    {
      heading: "Cybersecurity Advisory and Consulting",
      content: "Leverage our expertise to develop and implement a robust cybersecurity strategy that aligns with your business goals.",
      image: "/cs11.jpg",
      title: "Cybersecurity Advisory and Consulting"
    },
    {
      heading: "Cyber-Physical Security",
      content: "Protect your physical and digital assets with our integrated cyber-physical security solutions.",
      image: "/cs12.jpg",
      title: "Cyber-Physical Security"
    },
    {
      heading: "Digital Identity Management",
      content: "Securely manage and protect digital identities with our comprehensive identity management solutions.",
      image: "/cs13.jpg",
      title: "Digital Identity Management"
    },
    {
      heading: "Secure Digital Workplace",
      content: "Create a secure digital workplace that enhances productivity while safeguarding against threats.",
      image: "/cs14.jpg",
      title: "Secure Digital Workplace"
    },
    {
      heading: "Enterprise Security-as-a-Service",
      content: "Adopt a scalable and flexible security model with our enterprise security-as-a-service offerings.",
      image: "/cs15.jpg",
      title: "Enterprise Security-as-a-Service"
    },
    {
      heading: "Governance, Risk, and Compliance",
      content: "Ensure compliance with industry standards and manage risks effectively with our tailored solutions.",
      image: "/cs16.jpg",
      title: "Governance, Risk, and Compliance"
    },
    {
      heading: "Incident Response and Rapid Recovery",
      content: "Quickly and effectively respond to cyber incidents with our incident response and rapid recovery services.",
      image: "/cs17.jpg",
      title: "Incident Response and Rapid Recovery"
    },
    {
      heading: "Privacy and Data Protection",
      content: "Safeguard sensitive information and ensure data privacy with our robust protection solutions.",
      image: "/cs18.jpg",
      title: "Privacy and Data Protection"
    }
  ];

  const benefits = [
    "Proactively protect your digital assets with advanced threat detection and prevention.",
    "Ensure continuous business operations with robust incident response and recovery.",
    "Enhance your security posture with comprehensive vulnerability management.",
    "Gain actionable insights with our cutting-edge threat intelligence and analysis.",
    "Achieve compliance with industry standards and reduce risk.",
    "Stay protected 24/7 with our state-of-the-art Security Operations Center (SOC).",
    "Mitigate risks and enhance operational efficiency.",
    "Foster a secure digital workplace that boosts productivity.",
    "Leverage our expertise for a tailored cybersecurity strategy.",
    "Enhance data privacy and protect sensitive information."
  ];

  const approachItems = [
    {
      image: "/S1.png",
      title: "Comprehensive Cybersecurity Strategy",
    },
    {
      image: "/technology 1.png",
      title: "Security Integrated into Design",
    },
    {
      image: "/innovation 1.png",
      title: "Proactive Risk Management",
    },
    {
      image: "/iterative 1.png",
      title: "Security Delivered as a Service",
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={CyberSecurity}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={securityImg1}
      />
      <ApproachSection approachItems={approachItems} />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={securityImg2}
      />
      <Benefits benefits={benefits} />
      <Partners />
      <BusinessService panels={panels} text1="Cybersecurity" />
      <Technologies />
    </div>
  );
};

export default page;
