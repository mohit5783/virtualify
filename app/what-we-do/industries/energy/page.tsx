import ScreenImg from "@/components/whatwedo/ScreenImg";
import ScreenText from "@/components/whatwedo/ScreenText";
import { AnimatedWavyBackground, Energy } from "@/content/AllSVG";
import ss from "../../../../public/energy.jpg";
import Screen3 from "@/components/whatwedo/Screen3";
import Services from "@/components/whatwedo/Services";
import Technologies from "@/components/whatwedo/Technologies";

const page = () => {
  const title1 = "Beyond Net Zero";
  const title2 = "Transition to Zero State";
  const text1 = "Creating a Smart, Safe, and Sustainable Future";
  const text2 = `Achieving a net zero future involves more than just reducing emissions. 
  To build a cleaner, greener world, businesses in the energy, resources, and utilities 
  sectors must transform their operating models and embrace an ecosystem approach. The 
  cornerstone of these future enterprises will be a robust digital core that ensures 
  reliability and continuity, enabling businesses to drive innovation throughout the value chain.`;

  const sections = [
    { id: 'set1', title: 'Accelerating Energy Transition' },
    { id: 'set2', title: 'Managing Field Assets' },
    { id: 'set3', title: 'Empowering Field Workforce' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "VSC Clever Energy™",
          description: "AI-based energy emission and management system that helps decrease carbon emissions.",
          link: '/clever-energy'
        }
      ]
    },
    set2: {
      items: [
        {
          title: "VSC Envirozone™",
          description: "End-to-end carbon emission management system to adopt carbon-neutral strategies.",
          link: '/envirozone'
        }
      ]
    },
    set3: {
      items: [
        {
          title: "VSC Machine Vision Platform",
          description: "AI-ML solution to automate and standardize field asset inspection.",
          link: '/machine-vision'
        },
        {
          title: "Smart Manufacturing with Cognitive Operations",
          description: "Digital twin capabilities integrating physical systems and virtual machines to create cognitive and collaborative ecosystems.",
          link: '/cognitive-operations'
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
        BankCreditCard={Energy}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Let's collaborate to shape the future of energy with intelligent solutions." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
