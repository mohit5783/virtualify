import { MdContactEmergency, MdUpcoming } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { HiOutlineIdentification } from "react-icons/hi";

export const NavLinks = [
  {
    label: "What we do",
    href: "/what-we-do",
    key: "what-we-do",
    icon: <GrWorkshop className="text-xl" />,
  },
  {
    label: "Who we are",
    href: "/who-we-are",
    key: "who-we-are",
    icon: <HiOutlineIdentification className="text-2xl" />,
  },
  {
    label: "Upcoming Projects",
    href: "/upcoming-projects",
    key: "upcoming-projects",
    icon: <MdUpcoming className="text-2xl" />,
  },
  // {
  //   label: "Contact",
  //   href: "/contact",
  //   key: "contact",
  //   icon: <MdContactEmergency className="text-2xl" />,
  // },
];
