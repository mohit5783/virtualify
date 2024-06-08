import ScreenImg from "@/components/whatwedo/ScreenImg";
import ScreenText from "@/components/whatwedo/ScreenText";
import { AnimatedWavyBackground, News } from "@/content/AllSVG";
import ss from "../../../../public/newss.jpg";
import Screen3 from "@/components/whatwedo/Screen3";
import Services from "@/components/whatwedo/Services";
import Technologies from "@/components/whatwedo/Technologies";

const page = () => {
  const title1 = "Revolutionizing News and Media";
  const title2 = "Innovate and Lead with VSC Media Solutions™";
  const text1 = "Transforming the future of news and media through cutting-edge technology and strategic innovation.";
  const text2 = `In the rapidly evolving news and media landscape, delivering high-quality, timely, and engaging content is paramount. 
VSC Virtualify Consultancy Services empowers media companies to enhance their operations and audience engagement through innovative solutions. 
Our expertise in AI, data analytics, and digital transformation ensures that your organization stays ahead of the curve, offering personalized, immersive, and interactive experiences to your audience.`;

  const sections = [
    { id: 'set1', title: 'Enhancing Content Creation and Distribution' },
    { id: 'set2', title: 'Engaging Audiences and Increasing Reach' },
    { id: 'set3', title: 'Optimizing Operations and Ensuring Sustainability' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "AI-Powered Content Creation",
          description: "Leveraging AI to automate and enhance content creation, ensuring high-quality and engaging stories at scale.",
          link: '/ai-content-creation'
        },
        {
          title: "Multichannel Distribution Platforms",
          description: "Implementing robust platforms to distribute content seamlessly across multiple channels, reaching audiences wherever they are.",
          link: '/multichannel-distribution'
        }
      ]
    },
    set2: {
      items: [
        {
          title: "Personalized Audience Engagement",
          description: "Using data analytics to deliver personalized content and advertisements, enhancing audience engagement and satisfaction.",
          link: '/personalized-engagement'
        },
        {
          title: "Interactive Media Experiences",
          description: "Creating immersive and interactive media experiences through AR/VR technologies, captivating and retaining audience interest.",
          link: '/interactive-media'
        }
      ]
    },
    set3: {
      items: [
        {
          title: "Operational Efficiency Solutions",
          description: "Optimizing media operations through AI-powered tools and automation, reducing costs and increasing efficiency.",
          link: '/operational-efficiency'
        },
        {
          title: "Sustainable Media Practices",
          description: "Implementing sustainable practices in media production and distribution, minimizing environmental impact and promoting corporate responsibility.",
          link: '/sustainable-media'
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
        BankCreditCard={News}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Partner with us for intelligent News and Media solutions." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
