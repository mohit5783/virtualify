import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Screen3 = dynamic(() => import("@/components/whatwedo/Screen3"));
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
import { AnimatedWavyBackground, FinTech } from "@/content/AllSVG";
import ss from "../../../../public/SliderImage3.webp";



const page = () => {
  const title1 = "Financial Empowerment";
  const title2 = "Transforming Financial Services with Technology";
  const text1 = "Leading FinTech for financial empowerment. Enrich lives with accessible, affordable solutions tailored to your unique needs.";
  const text2 = `Customers demand accessible, high-quality financial services anytime, anywhere, and at competitive costs.
  This trend is pushing financial institutions to rethink their operations and build cross-industry ecosystems.
  These solutions provide intelligent, connected, and personalized services, focusing on the most crucial element—the customer.`;

  const sections = [
    { id: 'set1', title: 'Enhancing Financial Accessibility' },
    { id: 'set2', title: 'Ensuring Security and Compliance' },
    { id: 'set3', title: 'Facilitating Financial Inclusion' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "Digital Banking Solutions",
          description: "Offering user-friendly digital banking platforms that provide 24/7 access to financial services, enhancing customer convenience and satisfaction.",
          link: '/digital-banking'
        },
        {
          title: "Mobile Payment Systems",
          description: "Enabling secure and seamless mobile payments through advanced technologies, making transactions faster and more convenient.",
          link: '/mobile-payments'
        }
      ]
    },
    set2: {
      items: [
        {
          title: "Fraud Detection Technologies",
          description: "Implementing AI-powered systems to detect and prevent fraudulent activities, ensuring the security and integrity of financial transactions.",
          link: '/fraud-detection'
        },
        {
          title: "Regulatory Compliance Solutions",
          description: "Providing tools and platforms that help financial institutions comply with regulatory requirements, reducing risks and ensuring legal adherence.",
          link: '/regulatory-compliance'
        }
      ]
    },
    set3: {
      items: [
        {
          title: "Financial Literacy Platforms",
          description: "Developing platforms that educate customers on financial management, promoting better financial decision-making and inclusion.",
          link: '/financial-literacy'
        },
        {
          title: "Inclusive Banking Services",
          description: "Creating banking solutions tailored for underserved populations, ensuring everyone has access to essential financial services.",
          link: '/inclusive-banking'
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
        BankCreditCard={FinTech}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Partner with us for intelligent Fintech solutions." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;