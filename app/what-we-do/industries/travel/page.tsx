import ScreenImg from "@/components/whatwedo/ScreenImg";
import ScreenText from "@/components/whatwedo/ScreenText";
import { AnimatedWavyBackground, Travel } from "@/content/AllSVG";
import ss from "../../../../public/travel.jpg";
import Screen3 from "@/components/whatwedo/Screen3";
import Services from "@/components/whatwedo/Services";
import Technologies from "@/components/whatwedo/Technologies";


const page = () => {
  const title1 = "Fostering Mobility Ecosystems";
  const title2 = "Navigating the World";
  const text1 = "Empowering seamless, secure, and adaptable travel experiences.";
  const text2 = `Travel and logistics enterprises are forging ahead, crafting 
  intricate networks that enable secure, adaptable, and hassle-free expeditions
   for their clientele. Through strategic alliances and the cultivation of virtual 
   market hubs powered by cutting-edge platforms, they're sculpting inventive, 
   tailor-made solutions.`;

  const sections = [
    { id: 'set1', title: 'Enhancing Operational Efficiency' },
    { id: 'set2', title: 'Crafting Personalized Customer Experiences' },
    { id: 'set3', title: 'Streamlining Field Asset Management' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "VSC Travel Optimization Platform",
          description: "An advanced platform designed to streamline operations and optimize resource utilization in the travel industry.",
          link: '/travel-optimization'
        }
      ]
    },
    set2: {
      items: [
        {
          title: "VSC Personalized Travel Experience",
          description: "A solution that leverages data analytics and AI to deliver tailored travel experiences, enhancing customer satisfaction and loyalty.",
          link: '/personalized-travel'
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
        BankCreditCard={Travel}
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
