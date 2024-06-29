import dynamic from "next/dynamic";
import { AnimatedWavyBackground, NativeApp } from "@/content/AllSVG";
import nativeAppsImg1 from "../../../../public/mobile14.jpg";
import nativeAppsImg2 from "../../../../public/mobile3.png";
import {
  FaApple,
  FaAndroid,
  FaSwift,
  FaJava,
  FaObjectGroup,
  FaDatabase,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import { SiXcode, SiAndroidstudio, SiFirebase, SiRealm, SiKotlin, SiCocoapods } from "react-icons/si";

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

const title = "Elevate Your Business with Powerful Native Apps";
const description = "From concept to App Store, we craft high-performance, platform-specific native applications that provide the best user experience for your target audience.";
const l1 = "Optimized for iOS and Android platforms";
const l2 = "Seamless integration with device features";
const l3 = "Superior performance and user experience";
const bt = "Start Your Native App Project";

const customTechnologies = [
  { name: "Swift", icon: <FaSwift /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "Objective-C", icon: <FaObjectGroup /> },
  { name: "Xcode", icon: <SiXcode /> },
  { name: "Android Studio", icon: <SiAndroidstudio /> },
  { name: "CocoaPods", icon: <SiCocoapods /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Realm", icon: <SiRealm /> },
  { name: "SQLite", icon: <FaDatabase /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
];

const NativeAppsPage = () => {
  const title1 = "Empower Your Business with Advanced Native Apps";
  const title2 = "Platform-Specific Solutions for Optimal Mobile Performance";
  const title3 = "Transform User Experience with Cutting-Edge Native Applications";
  const text1 = "";
  const text2 = `In the mobile-first era, high-performance native applications are crucial for business success. Our comprehensive native app services focus on creating platform-specific, user-friendly, and secure solutions that leverage the full potential of iOS and Android devices.`;
  const text3 = `Our expert team utilizes the latest native development technologies and best practices to create applications that provide superior user experiences, optimize device capabilities, and drive business growth. From custom development to App Store optimization, we provide end-to-end native app solutions.`;

  const benefits = [
    "Deliver superior performance with platform-specific optimizations",
    "Enhance user engagement with smooth, responsive interfaces",
    "Leverage full access to device features and capabilities",
    "Ensure top-notch security with platform-specific measures",
    "Provide offline functionality for uninterrupted user experience",
    "Achieve scalability with native technologies",
    "Benefit from easier approval process in app stores",
    "Receive platform-specific updates and new features quickly",
    "Integrate seamlessly with other native apps and services",
    "Offer better discoverability in app stores"
  ];

  const caseStudies = [
    {
      title: "Retail Revolution",
      description: "How we helped a fashion retailer increase customer engagement by 70% with a feature-rich native iOS app.",
      image: "/retail.jpg"
    },
    {
      title: "Fitness Transformation",
      description: "Developing a high-performance Android native app for a fitness company that doubled user retention rates.",
      image: "/fitness.jpg"
    },
    {
      title: "Banking Innovation",
      description: "Creating secure and intuitive native apps for a banking institution, resulting in a 40% increase in mobile transactions.",
      image: "/banking-pp.avif"
    },
  ];

  const faqItems = [
    {
      question: "Why choose native app development over cross-platform solutions?",
      answer: "Native apps offer superior performance, better user experience, full access to device features, and platform-specific optimizations. They're ideal for apps that require high performance or deep integration with the device."
    },
    {
      question: "How long does it take to develop a native app?",
      answer: "The timeline varies based on complexity. A basic native app might take 3-4 months, while a complex app could take 6-12 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you develop for both iOS and Android?",
      answer: "Yes, we have expert teams for both iOS and Android native development. We can develop for one platform or both simultaneously, depending on your needs."
    },
    {
      question: "How do you ensure the security of native apps?",
      answer: "We implement platform-specific security measures, including data encryption, secure authentication, and compliance with Apple's and Google's latest security guidelines. Our team stays updated on platform-specific security best practices."
    },
  ];

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={NativeApp}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={nativeAppsImg1}
      />
      <ProcessTimeline />
      <ScreenText
        title2={title3}
        text2={text3}
        image1={nativeAppsImg2}
      />
      <CaseStudies caseStudies={caseStudies} />
      <Benefits benefits={benefits} />
      <TechStack webAppTechnologies={customTechnologies} text="Native App Development Technologies" />
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

export default NativeAppsPage;