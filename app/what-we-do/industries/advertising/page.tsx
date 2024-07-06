import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Screen3 = dynamic(() => import("@/components/whatwedo/Screen3"));
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
import { AnimatedWavyBackground, Advertising } from "@/content/AllSVG";
import ss from "../../../../public/advertising.jpg";
const page = () => {
  const title1 = "Revolutionizing the Advertising Industry";
  const title2 = "Innovating Digital Campaigns";
  const text1 = "Driving the Future of Advertising";
  const text2 = `Transforming the advertising sector involves more than deploying advanced technology. 
  To create impactful and engaging campaigns, advertising firms need to rethink their strategies and 
  adopt comprehensive, scalable solutions. At the core of this transformation will be a robust digital 
  infrastructure that ensures stability and continuity, empowering companies to innovate across the 
  advertising landscape.`;

  const sections = [
    { id: 'set1', title: 'Enhancing Campaign Effectiveness' },
    { id: 'set2', title: 'Personalizing Ad Experiences' },
    { id: 'set3', title: 'Optimizing Media Buying' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "VSC Campaign Management Platform",
          description: "A cutting-edge platform designed to streamline campaign management and maximize effectiveness in the advertising industry.",
          link: '/campaign-management'
        }
      ]
    },
    set2: {
      items: [
        {
          title: "VSC Personalized Ad Solutions",
          description: "Leveraging AI and data analytics to deliver personalized ad experiences, enhancing engagement and conversion rates.",
          link: '/personalized-ads'
        }
      ]
    },
    set3: {
      items: [
        {
          title: "VSC Media Buying Optimization",
          description: "An advanced system for efficiently managing media buying, ensuring optimal performance and cost-efficiency.",
          link: '/media-buying'
        },
        {
          title: "Smart Ad Delivery",
          description: "Enabling seamless integration of physical and digital ad delivery systems to create a smart, connected advertising ecosystem.",
          link: '/smart-ad-delivery'
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
        BankCreditCard={Advertising}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Let's co-create the future of advertising with intelligent solutions." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
