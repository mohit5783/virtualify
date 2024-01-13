import { SubMenuLinks } from "@/content/SubMenuLinks";
import Link from "next/link";
import { NavLinks } from "@/content/NavLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MobileNavBar = () => {
  const makeSEOFriendly = (str: string) => {
    let seostr = str
      .replace(/[^a-zA-Z0-9. -]/g, "")
      .replace(/ /g, "-")
      .toLowerCase();
    seostr = seostr.replace(/-+/g, "-");
    return seostr;
  };
  return (
    <div className="w-[95%] z-10 absolute top-20 right-1 bg-black">
      <Accordion type="single" className="p-5" collapsible>
        {NavLinks.map((link, i) => (
          <AccordionItem key={link.key} value={link.key}>
            <AccordionTrigger className="text-2xl">
              {link.label}
            </AccordionTrigger>
            <AccordionContent>
              {SubMenuLinks[i].fullMenu.map((sublink, j) => (
                <Accordion className="pl-8" key={j} type="single" collapsible>
                  <AccordionItem value={sublink.name}>
                    <AccordionTrigger className="text-xl">
                      {sublink.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      {sublink.description && (
                        <p className="text-lg">{sublink.description}</p>
                      )}
                      {sublink.List?.map((subsublink, k) => (
                        <Link
                          key={k}
                          href={`${makeSEOFriendly(
                            link.label
                          )}/${makeSEOFriendly(sublink.name)}/${makeSEOFriendly(
                            subsublink
                          )}`}
                          className="block p-2 text-lg"
                        >
                          {subsublink}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default MobileNavBar;
