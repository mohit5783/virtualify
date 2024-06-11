import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Screen3 = dynamic(() => import("@/components/whatwedo/Screen3"));
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
import { AnimatedWavyBackground, Insurance } from "@/content/AllSVG";
import ss from "../../../../public/Insurance.jpg";



const page = () => {
  const title1 = "Secure. Safeguard. Sustain.";
  const title2 = "Innovative models enhance customer value";
  const text1 = "We empower insurers to deliver more than just protection; we enable them to promise a better, more secure future for their customers.";
  const text2 = `Traditionally, insurers have focused on providing financial protection against life and property losses. Over the past decade, 
  however, their strategies have evolved to encompass prevention and sustainability. Prevention alerts policyholders to potential risks,
   while sustainability ensures long-term stability and continuity. Embracing this comprehensive approach—from securing to sustaining—demands 
   a flexible business model and a digital-first strategy.`;

  const sections = [
    { id: 'set1', title: 'Understanding Customer Context' },
    { id: 'set2', title: 'Enhancing Underwriting Efficiency' },
    { id: 'set3', title: 'Developing Precise Actuarial Models' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "VSC Customer Journey Platform",
          description: "An advanced customer engagement platform that offers personalized, profile-based customer journeys.",
          link: '/customer-journey'
        },
        {
          title: "VSC Insurance Agent Performance Analytics",
          description: "A cutting-edge solution utilizing analytics, artificial intelligence, and data technologies to optimize agent performance.",
          link: '/agent-analytics'
        }
      ]
    },
    set2: {
      items: [
        {
          title: "Automated Underwriting Platform on Azure",
          description: "A smart risk assessment platform that automates traditional underwriting processes.",
          link: '/underwriting-platform'
        }
      ]
    },
    set3: {
      items: [
        {
          title: "Actuarial Data Validation System",
          description: "A robust framework for quick comparison between historical and current actuarial data.",
          link: '/actuarial-validation'
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
        BankCreditCard={Insurance}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Let's co-create the future of insurance with intelligent solutions." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
