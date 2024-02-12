import { SubMenuLinks } from "@/content/SubMenuLinks";
import Link from "next/link";

const IndustryImpact = () => {
  const makeSEOFriendly = (str: String) => {
    let seostr = str
      .replace(/[^a-zA-Z0-9. -]/g, "")
      .replace(/ /g, "-")
      .toLowerCase();
    seostr = seostr.replace(/-+/g, "-");
    return seostr;
  };
  return (
    <section className="flex flex-col mt-16 p-5 md:p-20 gap-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-merriweather font-black">
          Explore Industries, Experience Impact
        </h2>
        <p className="mt-5 font-montserrat text-xl">
          Explore our solutions tailored for your industry and uncover the
          transformative impact we deliver. From enhanced efficiencies to
          elevated experiences, discover how we drive success in your sector.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {SubMenuLinks[0].fullMenu
          .filter((item) => item.name === "Industries")
          .map((itemIndus) =>
            itemIndus?.List?.map((industry) => (
              <Link
                href={`what-we-do/industries/${makeSEOFriendly(
                  industry.toString()
                )}`}
                key={industry}
                className="flex justify-between items-center p-3 rounded-xl hover:bg-white hover:text-black transition-all duration-500 cursor-pointer w-full border-t-[0.5px] border-b-[0.5px] border-gray-500"
              >
                <div className="text-2xl">{industry}</div>
                <div className="text-[#181818] text-3xl">&rarr;</div>
              </Link>
            ))
          )}
      </div>
    </section>
  );
};

export default IndustryImpact;
