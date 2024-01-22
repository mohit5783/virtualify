import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import e2e from "../../public/e2e.webp";

const VSCGlance = () => {
  return (
    <section className="p-20 bg-black">
      <div className="flex">
        <h3 className="font-raleway font-bold text-2xl md:text-4xl bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent">
          VSC at a glance
        </h3>
      </div>
      <Tabs defaultValue="commitment" className="mt-10 hidden md:block">
        <TabsList className="w-full justify-between flex bg-black gap-3">
          <TabsTrigger value="commitment" className="font-montserrat text-lg">
            Our commitment
          </TabsTrigger>
          <TabsTrigger value="roadmap" className="font-montserrat text-lg">
            Our road-map
          </TabsTrigger>
          <TabsTrigger value="beliefs" className="font-montserrat text-lg">
            Our beliefs
          </TabsTrigger>
          <TabsTrigger value="stories" className="font-montserrat text-lg">
            Our stories
          </TabsTrigger>
        </TabsList>
        <TabsContent value="commitment" className="mt-8">
          <div className="flex justify-between items-center p-1 gap-5">
            <div className="flex flex-col w-2/3">
              <h3 className="text-white text-3xl md:text-4xl font-merriweather font-black">
                Bring Your World to Life with Us
              </h3>
              <p className="text-white mt-10 font-montserrat text-base md:text-lg">
                In the pursuit of transforming your world, a reliable partner is
                paramount—one who skillfully marshals every resource in their
                arsenal with unwavering determination for success. Amplifying
                ideas and multiplying value, all on a global scale.
              </p>
            </div>
            <div className="flex justify-start w-1/3">
              <Image
                src={e2e}
                alt="Fueling brighter tomorrows"
                width={1000}
                height={1000}
                loading="lazy"
                className="w-full object-cover h-[50vh] md:h-full"
                sizes="(max-width: 768px) 100vw, 75vw"
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="roadmap">Change your password here.</TabsContent>
      </Tabs>
    </section>
  );
};

export default VSCGlance;
