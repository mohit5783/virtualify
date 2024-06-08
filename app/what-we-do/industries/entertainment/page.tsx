import ScreenImg from "@/components/whatwedo/ScreenImg";
import ScreenText from "@/components/whatwedo/ScreenText";
import { AnimatedWavyBackground, Entertainment } from "@/content/AllSVG";
import ss from "../../../../public/entertainment.jpg";
import Screen3 from "@/components/whatwedo/Screen3";
import Services from "@/components/whatwedo/Services";
import Technologies from "@/components/whatwedo/Technologies";

const page = () => {
  const title1 = "Shaping the Future of Entertainment";
  const title2 = "Redefining Experiences";
  const text1 = "Pioneering Innovations in the Entertainment Industry";
  const text2 = `Transforming the entertainment sector goes beyond technological advancements. 
  To craft a vibrant, engaging world, entertainment companies must rethink their operational 
  strategies and implement integrated, scalable solutions. The core of these transformations 
  will be a resilient digital foundation that provides consistency and reliability, enabling 
  businesses to drive creativity and innovation throughout the entertainment ecosystem.`;

  const sections = [
    { id: 'set1', title: 'Enhancing Content Delivery' },
    { id: 'set2', title: 'Creating Immersive Experiences' },
    { id: 'set3', title: 'Optimizing Production Processes' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "VSC Content Delivery Network",
          description: "A powerful platform designed to streamline content distribution and ensure high-quality delivery across the globe.",
          link: '/content-delivery'
        }
      ]
    },
    set2: {
      items: [
        {
          title: "VSC Immersive Experience Solutions",
          description: "Using cutting-edge technology to create immersive and interactive entertainment experiences.",
          link: '/immersive-experience'
        }
      ]
    },
    set3: {
      items: [
        {
          title: "VSC Production Optimization Suite",
          description: "An advanced suite of tools for optimizing production processes, ensuring efficiency and creativity.",
          link: '/production-optimization'
        },
        {
          title: "Smart Studio Solutions",
          description: "Integrating smart technologies to enhance studio capabilities and streamline production workflows.",
          link: '/smart-studio'
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
        BankCreditCard={Entertainment}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Let's co-create the future of entertainment with intelligent solutions." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
