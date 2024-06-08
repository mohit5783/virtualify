import ScreenImg from "@/components/whatwedo/ScreenImg";
import ScreenText from "@/components/whatwedo/ScreenText";
import { AnimatedWavyBackground, Telecom } from "@/content/AllSVG";
import ss from "../../../../public/telecom.jpg";
import Screen3 from "@/components/whatwedo/Screen3";
import Services from "@/components/whatwedo/Services";
import Technologies from "@/components/whatwedo/Technologies";

const page = () => {
  const title1 = "Empowering the Telecom Industry";
  const title2 = "Transforming Connectivity";
  const text1 = "Innovating the Future of Telecommunications";
  const text2 = `Revolutionizing the telecom industry involves more than just leveraging advanced technology. 
  To foster a connected world, telecom businesses must reimagine their operational frameworks and embrace 
  comprehensive, scalable solutions. The backbone of these innovations will be a robust digital infrastructure 
  that guarantees stability and continuity, enabling businesses to spearhead progress throughout the entire 
  telecommunications value chain.`;

  const sections = [
    { id: 'set1', title: 'Enhancing Network Efficiency' },
    { id: 'set2', title: 'Delivering Personalized Services' },
    { id: 'set3', title: 'Optimizing Field Operations' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "VSC Network Optimization",
          description: "A state-of-the-art platform designed to streamline network operations and optimize resource allocation in the telecom sector.",
          link: '/network-optimization'
        }
      ]
    },
    set2: {
      items: [
        {
          title: "VSC Customer Experience Platform",
          description: "Utilizing AI and data analytics to offer personalized services, boosting customer satisfaction and loyalty.",
          link: '/customer-experience'
        }
      ]
    },
    set3: {
      items: [
        {
          title: "VSC Field Operations Management",
          description: "An advanced system for managing field operations efficiently, ensuring peak performance and maintenance.",
          link: '/field-operations-management'
        },
        {
          title: "Smart Connectivity Solutions",
          description: "Facilitating seamless integration of physical and virtual telecom systems to create a smart, interconnected ecosystem.",
          link: '/smart-connectivity'
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
        BankCreditCard={Telecom}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Let's co-create the future of telecommunications with intelligent solutions." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
