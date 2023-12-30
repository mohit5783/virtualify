import si1 from "../public/SliderImage1.webp";
import si2 from "../public/SliderImage2.webp";
import si3 from "../public/SliderImage3.webp";
import si4 from "../public/SliderImage4.webp";
import si5 from "../public/SliderImage5.webp";
import si6 from "../public/SliderImage6.webp";

export const images = [si1, si2, si3, si4, si5, si6];
export const imgText = [
  {
    title: "AgriTech",
    titleSubText: "Agricultural Innovation",
    altText: "AgriTech",
    text: "Pioneering AgriTech for profitable, eco-friendly farming. Explore tailored, budget-friendly solutions for sustainable growth.",
  },
  {
    title: "HealthTech",
    titleSubText: "Healthcare Transformation",
    altText: "HealthTech",
    text: "Experience healthcare reimagined. Partner for innovative, budget-conscious solutions in HealthTech transformation.",
  },
  {
    title: "FinTech",
    titleSubText: "Financial Empowerment",
    altText: "FinTech",
    text: "Leading FinTech for financial empowerment. Enrich lives with accessible, affordable solutions tailored to your unique needs.",
  },
  {
    title: "EdTech",
    titleSubText: "Educational Revolution",
    altText: "EdTech",
    text: "Join the Educational Revolution. Expertly crafted EdTech solutions for accessible and affordable education.",
  },
  {
    title: "Web & Mobile Apps",
    titleSubText: "Digital Experience Crafting",
    altText: "Web & Mobile Apps",
    text: "Excel in crafting digital experiences. Immerse in innovation with our expert team, offering uniquely designed, budget-friendly solutions.",
  },
  {
    title: "Web 3.0",
    titleSubText: "Future Technology",
    altText: "Web 3.0, IoT, Blockchain",
    text: "Pioneer the future with us. Our experts lead the way in Web 3.0, IoT, and Blockchain—where innovation meets your budget.",
  },
];
const imageByIndex = (index: number) => images[index % images.length];
const imgTextByIndex = (index: number) => imgText[index % imgText.length];

const imagesByIndex = {
  imageByIndex,
  imgTextByIndex,
};

export default imagesByIndex;
