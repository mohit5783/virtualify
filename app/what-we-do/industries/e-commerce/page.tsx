import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Screen3 = dynamic(() => import("@/components/whatwedo/Screen3"));
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
import { AnimatedWavyBackground, Ecommerce } from "@/content/AllSVG";
import ss from "../../../../public/ecommerce.jpg";


const page = () => {
  const title1 = "Empowering the E-commerce Industry";
  const title2 = "Revolutionizing Online Retail";
  const text1 = "Innovating the Future of E-commerce";
  const text2 = `Transforming the e-commerce sector involves more than just advanced technology. 
  To create a seamless online shopping experience, e-commerce businesses must rethink their 
  operational strategies and adopt comprehensive, scalable solutions. The foundation of these 
  transformations will be a resilient digital core that provides stability and continuity, enabling 
  companies to drive innovation throughout the entire e-commerce value chain.`;

  const sections = [
    { id: 'set1', title: 'Optimizing Operations' },
    { id: 'set2', title: 'Enhancing Customer Experience' },
    { id: 'set3', title: 'Improving Logistics and Supply Chain' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "VSC E-commerce Optimization Platform",
          description: "A cutting-edge platform designed to streamline e-commerce operations and maximize resource utilization.",
          link: '/ecommerce-optimization'
        }
      ]
    },
    set2: {
      items: [
        {
          title: "VSC Personalized Shopping Experience",
          description: "Leveraging AI and data analytics to provide personalized shopping experiences, enhancing customer satisfaction and loyalty.",
          link: '/personalized-shopping'
        }
      ]
    },
    set3: {
      items: [
        {
          title: "VSC Logistics Management System",
          description: "An advanced system for efficiently managing logistics and supply chain operations, ensuring optimal performance and delivery.",
          link: '/logistics-management'
        },
        {
          title: "Smart Inventory Solutions",
          description: "Integrating smart technologies to enhance inventory management and streamline supply chain workflows.",
          link: '/smart-inventory'
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
        BankCreditCard={Ecommerce}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Let's co-create the future of e-commerce with intelligent solutions." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
