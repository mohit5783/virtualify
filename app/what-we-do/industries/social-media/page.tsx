import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Screen3 = dynamic(() => import("@/components/whatwedo/Screen3"));
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
import { AnimatedWavyBackground, SocialMedia } from "@/content/AllSVG";
import ss from "../../../../public/socialmedia.jpg";


const page = () => {
  const title1 = "Empowering Social Media Platforms";
  const title2 = "Transforming Digital Engagement";
  const text1 = "Innovating the Future of Social Media";
  const text2 = `Transforming the social media landscape requires more than just innovative technology. 
  To create engaging and secure online communities, social media companies must rethink their strategies 
  and embrace scalable, comprehensive solutions. The core of these advancements will be a robust digital 
  infrastructure that ensures stability and continuity, enabling companies to drive progress across the entire 
  social media ecosystem.`;

  const sections = [
    { id: 'set1', title: 'Optimizing User Engagement' },
    { id: 'set2', title: 'Enhancing Content Delivery' },
    { id: 'set3', title: 'Ensuring Platform Security' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "VSC User Engagement Platform",
          description: "A state-of-the-art platform designed to enhance user engagement and interaction on social media platforms.",
          link: '/user-engagement'
        }
      ]
    },
    set2: {
      items: [
        {
          title: "VSC Content Delivery Network",
          description: "Utilizing advanced algorithms to optimize content delivery, ensuring a seamless user experience.",
          link: '/content-delivery'
        }
      ]
    },
    set3: {
      items: [
        {
          title: "VSC Platform Security Solutions",
          description: "Comprehensive solutions to safeguard social media platforms from security threats, ensuring user privacy and data protection.",
          link: '/platform-security'
        },
        {
          title: "Smart Moderation Tools",
          description: "Integrating AI-driven tools to enhance content moderation and maintain community standards.",
          link: '/smart-moderation'
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
        BankCreditCard={SocialMedia}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Screen3 content={content} sections={sections} mainp="Let's co-create the future of social media with intelligent solutions." />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
