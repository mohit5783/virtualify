import ScreenImg from "@/components/whatwedo/ScreenImg";
import ScreenText from "@/components/whatwedo/ScreenText";
import { AnimatedWavyBackground, Logistics } from "@/content/AllSVG";
import ss from "../../../../public/logistics.jpg";
import Screen3 from "@/components/whatwedo/Screen3";
import Services from "@/components/whatwedo/Services";
import Technologies from "@/components/whatwedo/Technologies";

const page = () => {
  const title1 = "Innovating Logistics Ecosystems";
  const title2 = "Streamlining Global Supply Chains";
  const text1 = "Enabling efficient, transparent, and resilient logistics solutions.";
  const text2 = `Logistics enterprises are advancing rapidly, creating intricate supply chains 
  that are efficient, transparent, and resilient. Through strategic collaborations and the 
  development of virtual marketplaces powered by cutting-edge technologies, they are crafting 
  innovative and customized solutions.`;

  const sections = [
    { id: 'set1', title: 'Enhancing Operational Efficiency' },
    { id: 'set2', title: 'Crafting Personalized Customer Experiences' },
    { id: 'set3', title: 'Streamlining Field Asset Management' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "VSC Logistics Optimization Platform",
          description: "A sophisticated platform designed to streamline logistics operations and optimize resource utilization across the supply chain.",
          link: '/logistics-optimization'
        }
      ]
    },
    set2: {
      items: [
        {
          title: "VSC Personalized Logistics Solutions",
          description: "A solution that uses data analytics and AI to provide customized logistics solutions, enhancing client satisfaction and loyalty.",
          link: '/personalized-logistics'
        }
      ]
    },
    set3: {
      items: [
        {
          title: "VSC Field Asset Management System",
          description: "A comprehensive system for efficiently managing field assets, ensuring optimal performance and maintenance.",
          link: '/field-asset-management'
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
        BankCreditCard={Logistics}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Join us in shaping the future of logistics with innovative and intelligent solutions." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
