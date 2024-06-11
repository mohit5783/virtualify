import dynamic from "next/dynamic";
const ScreenImg = dynamic(() => import("@/components/whatwedo/ScreenImg"));
const ScreenText = dynamic(() => import("@/components/whatwedo/ScreenText"));
const Screen3 = dynamic(() => import("@/components/whatwedo/Screen3"));
const Services = dynamic(() => import("@/components/whatwedo/Services"));
const Technologies = dynamic(() => import("@/components/whatwedo/Technologies"));
import { AnimatedWavyBackground, PublicService } from "@/content/AllSVG";
import ss from "../../../../public/publicservice.jpg";



const page = () => {
  const title1 = "Empowering Citizens";
  const title2 = "Putting Citizens at the Heart of Governance";
  const text1 = "We lead the way in transforming public services to be smart, inclusive, and resilient.";
  const text2 = `A well-functioning society relies on adaptive, resilient, and inclusive public services. 
  Government institutions manage a vast array of functions—from water and sanitation to issuing driver 
  licenses and passports. However, disparate legacy systems, outdated processes, staff shortages, and 
  increasing citizen expectations can impede effective governance and citizen empowerment. We spearhead 
  digital innovation to tackle these challenges, enabling governments to deliver exceptional citizen 
  experiences.`;

  const sections = [
    { id: 'set1', title: 'Delivering Superior Citizen Experience' },
    { id: 'set2', title: 'Building Happy, Healthy Communities' },
    { id: 'set3', title: 'Meeting Sustainability Objectives' },
    { id: 'set4', title: 'Building Resilient Infrastructure' }
  ];

  const content = {
    set1: {
      items: [
        {
          title: "VSC Digital Citizen Services Platform",
          description: "A digital platform facilitating efficient citizen services delivery and enhancing overall governance.",
          link: '/digital-citizen-services'
        }
      ]
    },
    set2: {
      items: [
        {
          title: "VSC Community Wellness Initiative",
          description: "Innovative solutions promoting community health and well-being.",
          link: '/community-wellness'
        }
      ]
    },
    set3: {
      items: [
        {
          title: "VSC Sustainable Development Platform",
          description: "Cloud-based solutions driving sustainability and meeting environmental objectives.",
          link: '/sustainable-development'
        }
      ]
    },
    set4: {
      items: [
        {
          title: "VSC Infrastructure Resilience Solutions",
          description: "Innovative solutions to build resilient infrastructure and withstand various challenges.",
          link: '/infrastructure-resilience'
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
        BankCreditCard={PublicService}
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
