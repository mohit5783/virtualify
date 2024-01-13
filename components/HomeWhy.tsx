import { FaAd } from "react-icons/fa";
import {
  AffordablePrice,
  Communication,
  CustomerSatisfaction,
  EmergingTech,
  Experts,
  Future,
  MobileApps,
  Partnership,
  TailoredSolution,
} from "@/content/AllSVG";

const whyAnswers = [
  {
    title: "Pioneers in Emerging Technologies",
    description:
      "Embark on an exhilarating journey to the future with Virtualify as your guide. As trailblazers in cutting-edge fields like IoT, Web3.0, NFTs, and beyond, we not only keep pace with innovation but lead the way in turning imaginative concepts into tangible reality. Join us at the forefront of the technological revolution!",
    icon: <EmergingTech />,
  },
  {
    title: "Seamless Mobile App Development",
    description:
      "Elevate your brand's presence with a mobile app that goes beyond expectations. Our elite team of developers and designers is committed to creating not just applications, but captivating experiences. Your mobile app will not merely meet industry standards; it will redefine them, ensuring your audience is captivated and engaged.",
    icon: <MobileApps />,
  },
  {
    title: "Crafting Tomorrow's Solutions Today",
    description:
      "At Virtualify, we pride ourselves on being trendsetters rather than followers. Our commitment to staying at the forefront of the latest technological trends ensures that your projects are not just current but future-proof. Join us in crafting tomorrow's solutions today, setting new standards in innovation.",
    icon: <Future />,
  },
  {
    title: "Tailored Solutions for Every Need",
    description:
      "Whether you're a burgeoning startup aiming to leave a lasting impression or an established enterprise seeking a digital metamorphosis, Virtualify is your ally. Our expertise lies in crafting bespoke solutions meticulously tailored to align with your unique requirements. Experience innovation that's not just customized but finely tuned to your distinct needs.",
    icon: <TailoredSolution />,
  },
  {
    title: "Collaborative Partnership",
    description:
      "Your success is our success, and at Virtualify, we believe in the power of collaborative partnerships. From ideation to deployment, we work hand-in-hand with you, forming a symbiotic relationship where your vision meets our expertise. Together, we navigate the journey from concept to reality, ensuring every milestone is a shared triumph.",
    icon: <Partnership />,
  },
  {
    title: "Dedicated Team of Experts",
    description:
      "Meet the heartbeat of Virtualify—an exceptional team dedicated to ensuring your success. We're not just passionate about what we do; we're driven by a commitment to go above and beyond. When you choose Virtualify, you're not just getting a team; you're gaining a partner genuinely invested in the flourishing of your business.",
    icon: <Experts />,
  },
  {
    title: "Transparent Communication",
    description:
      "Communication is the lifeline of our collaboration. At Virtualify, we uphold the values of transparency and open dialogue. Our team is your constant support, providing updates, answering queries, and ensuring you're well-informed every step of the way. With us, you're not just a client; you're a valued collaborator.",
    icon: <Communication />,
  },
  {
    title: "Affordable Pricing",
    description:
      "Quality doesn't have to come at a premium. Virtualify is committed to offering services that blend excellence with affordability. Our collaborative approach involves working closely with you to find solutions that not only meet but surpass your expectations—all within a budget that suits your unique financial landscape.",
    icon: <AffordablePrice />,
  },
  {
    title: "Customer Satisfaction",
    description:
      "At Virtualify, customer satisfaction isn't just a goal; it's a commitment. We prioritize your needs, questions, and concerns, offering a service experience that goes beyond conventional expectations. Our team is your dedicated support, ensuring that your journey with Virtualify is not just successful but truly satisfying.",
    icon: <CustomerSatisfaction />,
  },
];

const HomeWhy = () => {
  return (
    <section className="mt-8">
      <div className="flex p-12 justify-center">
        <h1 className="text-4xl font-raleway font-semibold bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent uppercase">
          Why Choose Virtualify?
        </h1>
      </div>
      <div className="px-10 flex flex-col justify-center items-center gap-12">
        {whyAnswers.map((answer, i) =>
          i % 2 === 0 ? (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center justify-between"
            >
              <div className="h-full w-3/4 md:w-1/3 bg-gradient-to-br from-[var(--neon-yellow)] from-10% via-transparent rounded-full">
                {answer.icon}
              </div>
              <div className="w-2/3">
                <div className="flex justify-center">
                  <h1 className="uppercase text-4xl font-raleway font-semibold text-center bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent">
                    {answer.title}
                  </h1>
                </div>
                <p className="text-center mt-5 text-xl">{answer.description}</p>
              </div>
            </div>
          ) : (
            <div
              key={i}
              className="flex flex-col md:flex-row justify-center items-center"
            >
              <div className="w-2/3">
                <div className="flex justify-center">
                  <h1 className="uppercase text-4xl font-raleway font-semibold text-center bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent">
                    {answer.title}
                  </h1>
                </div>
                <p className="text-center mt-10 text-xl">
                  {answer.description}
                </p>
              </div>
              <div className="h-full w-3/4 md:w-1/3 bg-gradient-to-br from-transparent via-transparent to-[var(--neon-green)] rounded-full">
                {answer.icon}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default HomeWhy;
