import { SubMenuLinks } from "@/content/SubMenuLinks";
import Link from "next/link";

const HomeLinks = () => {
  const makeSEOFriendly = (str: string) => {
    let seostr = str
      .replace(/[^a-zA-Z0-9. -]/g, "")
      .replace(/ /g, "-")
      .toLowerCase();
    seostr = seostr.replace(/-+/g, "-");
    return seostr;
  };
  const FullMenu = SubMenuLinks.map((link) => link.fullMenu);
  const AllLinks = FullMenu.map((menu) =>
    menu.filter((item) => !item.description)
  );
  return (
    <section className="mt-10 p-10">
      {SubMenuLinks.map((l, j) =>
        j + 1 !== SubMenuLinks.length
          ? AllLinks[j].map((menu, i) => (
              <div key={i} className="mt-5">
                <Link
                  href={`${SubMenuLinks[j].menuName}/${makeSEOFriendly(
                    menu.name
                  )}`}
                  className="flex items-center gap-2 hover:text-[var(--neon-green)] transition-colors duration-100"
                >
                  <span className="relative group">
                    <span className="flex text-xl bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent font-raleway">
                      {menu.name}
                    </span>
                    <span className="h-[1px] inline-block w-0 bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-100">
                      &nbsp;
                    </span>
                  </span>
                </Link>

                <ul className="flex flex-wrap gap-2 mt-3">
                  {menu.List?.map((item, k) => (
                    <li key={k} className="pr-4">
                      <Link
                        href={`/${SubMenuLinks[j].menuName}/${makeSEOFriendly(
                          menu.name
                        )}/${makeSEOFriendly(item)}`}
                        className="flex items-center gap-2 text-white hover:text-[var(--neon-green)] transition-colors duration-100"
                      >
                        <span className="relative group">
                          <span className="flex text-lg">{item}</span>
                          <span className="h-[1px] inline-block w-0 bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-100">
                            &nbsp;
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          : ""
      )}
    </section>
  );
};

export default HomeLinks;
