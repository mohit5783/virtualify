import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import e2e from "../../public/e2e.webp";
import kk from "../../public/knowledgeExpertise.webp";
import ac from "../../public/AgilityContinuity.webp";
import ce from "../../public/collaborativeExpertise.webp";
import egc from "../../public/Empowering-Growth-change.webp";
import ff from "../../public/Flexibility-Futures.webp";
import nzc from "../../public/NetZero-Carbon.webp";
import rlf from "../../public/Responsibility-Lives-Futures.webp";
import ta from "../../public/Technology4All.webp";

const glanceData = [
  {
    id: "commitment",
    tabListTitle: "Our Commitment",
    tabContent: [
      {
        title: "Bring Your World to Life with Us",
        description:
          "In the pursuit of transforming your world, a reliable partner is paramount—one who skillfully marshals every resource in their arsenal with unwavering determination for success. Amplifying ideas and multiplying value, all on a global scale.",
        imgsrc: e2e,
        imgalt: "Fueling brighter tomorrows",
      },
      {
        title: "Knowledge and Expertise Converge",
        description:
          "Welcome to Virtualify Software Consultancy Pvt. Ltd. (VSC), where certainty is not just a promise but an experience. We pride ourselves on being more than just a consultancy; we are a dynamic knowledge network, bringing together the sharpest minds and industry practitioners. Our commitment is to transform concepts into real-world outcomes, providing you with the assurance of certainty.",
        imgsrc: kk,
        imgalt: "Knowledge and Expertise Converge",
      },
      {
        title: "Navigating Change with Agility and Continuity",
        description:
          "In the realm of constant flux, certainty is paramount, but the ability to navigate uncertainty is equally vital. At VSC, we recognize the dual demands of stability and adaptability. We don't just offer certainty; we provide the dynamic partnership you need to thrive in an ever-changing landscape.",
        imgsrc: ac,
        imgalt: "Agility and Continuity",
      },
    ],
  },
  {
    id: "roadmap",
    tabListTitle: "Our Roadmap",
    tabContent: [
      {
        title: "Elevating Collaborative Expertise",
        description:
          "In a collective pursuit of excellence, we foster collaboration, leveraging shared knowledge and expertise to enhance both our individual growth and the betterment of the world we inhabit.",
        imgsrc: ce,
        imgalt: "Elevating Lives Through Collaborative Expertise",
      },
      {
        title: "Empowering Growth Amidst Change",
        description:
          "In an era of rapid economic and environmental shifts, we specialize in guiding organizations through uncertainty, fostering resilience, and ensuring sustainable growth. Our mission is to navigate and shield against disruptions, empowering you to thrive amidst change.",
        imgsrc: egc,
        imgalt: "Empowering Growth",
      },
      {
        title: "Empowering Flexibility, Shaping Futures",
        description:
          "We empower social mobility by enabling individuals to choose where and how they work, fostering a culture of flexibility and opportunity. Join us in shaping the future of work and living.",
        imgsrc: ff,
        imgalt: "Empowering Flexibility, Shaping Futures",
      },
    ],
  },
  {
    id: "beliefs",
    tabListTitle: "Our beliefs",
    tabContent: [
      {
        title: "Driving Towards Net-Zero Carbon",
        description:
          "At VSC, we spearhead the development of sustainable roadmaps across industries and business ecosystems, paving the way towards a net-zero carbon future. Join us in shaping a sustainable tomorrow.",
        imgsrc: nzc,
        imgalt: "Net-Zero Carbon: Building Sustainable Futures",
      },
      {
        title: "Impactful Responsibility, Touching Lives, Changing Futures",
        description:
          "We hold ourselves accountable for every life we influence. Our work leaves a lasting impact, shaping the way millions live, work, and enjoy their lives. Join us in making a difference.",
        imgsrc: rlf,
        imgalt: "Impactful Responsibility: Touching Lives, Changing Futures",
      },
      {
        title: "Making Technology Work for All",
        description:
          "We believe in the power of inclusive technology. For true transformation, technology must be accessible and beneficial to everyone, providing tangible advantages to all its users. Join us in making technology work for all.",
        imgsrc: ta,
        imgalt: "Inclusive Tech: Making Technology Work for All",
      },
    ],
  },
];

const VSCGlance = () => {
  return (
    <section className="p-5 md:p-20 bg-black">
      <div className="flex">
        <h3 className="font-raleway font-bold text-4xl bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent">
          VSC at a glance
        </h3>
      </div>
      <Tabs defaultValue="commitment" className="mt-10 hidden md:block">
        <TabsList className="w-full flex justify-start bg-black gap-8 my-5">
          {glanceData.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className="font-montserrat text-lg"
            >
              {item.tabListTitle}
            </TabsTrigger>
          ))}
        </TabsList>
        {glanceData.map((gd) =>
          gd.tabContent.map((item, i) => (
            <TabsContent
              key={i}
              value={gd.id}
              className={`flex items-center ${
                i % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="flex flex-col px-8 w-2/3">
                <h3 className="text-white text-3xl md:text-4xl font-merriweather font-black">
                  {item.title}
                </h3>
                <p className="text-white mt-10 font-montserrat text-base md:text-lg">
                  {item.description}
                </p>
              </div>
              <div className="flex justify-start w-1/3">
                <Image
                  src={item.imgsrc}
                  alt={item.imgalt}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="w-full object-cover h-[50vh] md:h-full"
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </div>
            </TabsContent>
          ))
        )}
      </Tabs>
      <div className="md:hidden mt-8">
        {glanceData.map((gd) =>
          gd.tabContent.map((item, i) => (
            <div key={i} className="flex flex-col gap-5 my-20">
              <h3 className="text-white text-2xl font-merriweather font-black">
                {item.title}
              </h3>
              <p className="text-white font-montserrat text-lg">
                {item.description}
              </p>
              <Image
                src={item.imgsrc}
                alt={item.imgalt}
                width={1000}
                height={1000}
                loading="lazy"
                className="w-full object-cover"
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default VSCGlance;
