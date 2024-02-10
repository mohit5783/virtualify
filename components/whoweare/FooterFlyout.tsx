import Link from "next/link";
import { Separator } from "../ui/separator";

const FooterFlyout = () => {
  return (
    <section className="flex md:flex-row flex-col justify-center md:justify-between items-center p-5 md:p-20 gap-10 mt-10 bg-white text-black">
      <div className="flex flex-col w-full">
        <h2 className="text-3xl lg:text-4xl font-bold font-raleway">
          Empower Your Transformation
        </h2>
        <p className="my-5 text-xl font-montserrat">
          Unlock the potential for a bold future.
        </p>
        <div className="flex justify-start my-2">
          <Link
            href="/contact-us"
            className="flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-black font-raleway text-lg md:text-xl"
          >
            <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-black rounded-md group-hover:bg-opacity-0">
              Get in Touch
            </span>
          </Link>
        </div>
      </div>
      <Separator orientation="vertical" className="hidden md:block h-40" />
      <div className="flex justify-start w-full">
        <div className="flex flex-col gap-4 text-2xl font-merriweather">
          <div className="px-5 py-2.5 rounded-full bg-black text-white hover:text-green-500">
            <Link href="/what-we-do">What We Do &nbsp; &rarr;</Link>
          </div>
          <div className="px-5 py-2.5 rounded-full bg-black text-white hover:text-green-500">
            <Link href="/upcoming-projects">Our Projects &nbsp; &rarr;</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterFlyout;
