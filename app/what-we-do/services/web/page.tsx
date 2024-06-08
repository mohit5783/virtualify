import ScreenImg from "@/components/whatwedo/ScreenImg";
import ScreenText from "@/components/whatwedo/ScreenText";
import { AnimatedWavyBackground, Web } from "@/content/AllSVG";
import ss from "../../../../public/web.jpg";
import Services from "@/components/whatwedo/Services";
import Technologies from "@/components/whatwedo/Technologies";

const page = () => {
  const title1 = "Transforming the Web Industry";
  const title2 = "Innovating Online Experiences";
  const text1 = "Pioneering the Future of Web Development";
  const text2 = `Revolutionizing the web industry involves more than just advanced coding techniques. 
  To create compelling and user-centric online experiences, web businesses must innovate their development 
  processes and adopt flexible, scalable solutions. The backbone of this progress will be a resilient 
  digital framework that ensures reliability and performance, enabling companies to drive innovation across 
  the entire web ecosystem.`;



  return (
    <div>
      <ScreenImg
        title1={title1}
        text1={text1}
        AnimatedWavyBackground={AnimatedWavyBackground}
        BankCreditCard={Web}
      />
      <ScreenText
        title2={title2}
        text2={text2}
        image1={ss}
      />
      <Services />
      <Technologies />
    </div>
  );
};

export default page;
