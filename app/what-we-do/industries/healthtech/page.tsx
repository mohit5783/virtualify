import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Screen3 = dynamic(() => import("@/components/whatwedo/Screen3"));
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
import { AnimatedWavyBackground, HealthTech } from "@/content/AllSVG";
import ss from "../../../../public/SliderImage2.webp";



const page = () => {
  const title1 = "Patient-Centric Healthcare";
  const title2 = "Revolutionizing Healthcare with Intelligent Connectivity";
  const text1 = "Ensuring patient-centric, intelligent, and interconnected healthcare services.";
  const text2 = `Patients demand accessible, high-quality care at any time and any place, all at a reasonable cost.
This necessity is driving healthcare providers to overhaul their operations and develop cross-industry partnerships.
Such solutions offer intelligent, connected, and personalized care, emphasizing the patient as the central focus of the healthcare system.`;

  const sections = [
    { id: 'set1', title: 'Enhancing Patient Care' },
    { id: 'set2', title: 'Ensuring Quality and Safety' },
    { id: 'set3', title: 'Improving Access and Connectivity' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "Intelligent Patient Monitoring",
          description: "Utilizing IoT devices and AI algorithms to continuously monitor patient health, enabling timely interventions and better outcomes.",
          link: '/patient-monitoring'
        },
        {
          title: "Personalized Treatment Plans",
          description: "Leveraging data analytics to create personalized treatment plans that cater to individual patient needs, improving care efficacy.",
          link: '/personalized-treatment'
        }
      ]
    },
    set2: {
      items: [
        {
          title: "Quality Assurance Systems",
          description: "Implementing AI-powered systems to ensure the safety, authenticity, and quality of healthcare services and products.",
          link: '/quality-assurance'
        },
        {
          title: "Compliance and Safety Solutions",
          description: "Providing tools for healthcare providers to meet regulatory standards and ensure patient safety through digital monitoring and reporting.",
          link: '/compliance-safety'
        }
      ]
    },
    set3: {
      items: [
        {
          title: "Telehealth Platforms",
          description: "Creating robust telehealth solutions that allow patients to access care remotely, improving convenience and accessibility.",
          link: '/telehealth'
        },
        {
          title: "Integrated Healthcare Systems",
          description: "Developing interconnected healthcare systems that facilitate seamless data sharing and communication between providers.",
          link: '/integrated-systems'
        }
      ]
    }
  };

  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={HealthTech}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Let's co-create the future of healthcare with intelligent solutions." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
