"use client";

import { MdArrowBackIos } from "react-icons/md";
import { SubMenuLinks } from "../content/SubMenuLinks";
import { useState } from "react";
import Link from "next/link";

const NavBar = (props: any) => {
  const { TopMenu, onMouseLeave } = props;
  const menu = SubMenuLinks.filter((link) => link.menuName === TopMenu)[0];
  const [selectedMenu, setSelectedMenu] = useState(0);
  const makeSEOFriendly = (str: string) => {
    let seostr = str
      .replace(/[^a-zA-Z ]/g, "")
      .replace(/ /g, "-")
      .toLowerCase();
    seostr = seostr.replace(/-+/g, "-");
    return seostr;
  };
  return (
    <div
      className="w-full bg-neutral-800 text-neutral-200 justify-center flex absolute z-10"
      onMouseLeave={onMouseLeave}
    >
      <div className="w-9/12 flex justify-end p-8">
        <div className="w-full flex">
          <div className="w-9/12 flex justify-center items-center pr-8">
            {selectedMenu === 0 || menu?.fullMenu[selectedMenu].description ? (
              <div>
                <p className="text-2xl">
                  {menu?.fullMenu[selectedMenu].description}
                </p>
                <div className="flex justify-center">
                  <Link
                    href={`/${TopMenu}`}
                    className="mt-12 flex items-center justify-center p-0.5 rounded-lg group bg-gradient-to-br from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] hover:text-black text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 font-raleway text-xl"
                  >
                    <span className="px-5 py-2.5 transition-all ease-in duration-200 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Discover VirtualifyMe
                    </span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="w-full grid grid-cols-3 gap-4">
                {menu?.fullMenu[selectedMenu]?.List?.map((desc, i) => (
                  <Link
                    href={`/${TopMenu}/${makeSEOFriendly(
                      menu?.fullMenu[selectedMenu].name
                    )}/${makeSEOFriendly(desc)}`}
                    key={desc.replace(/ /g, "").toLowerCase() + i}
                    className="flex items-center gap-2 text-white hover:text-[var(--neon-green)] transition-colors duration-100"
                  >
                    <span className="relative group">
                      <span className="flex text-xl">{desc}</span>
                      <span className="h-[1px] inline-block w-0 bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-100">
                        &nbsp;
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="w-3/12">
            <ul className="w-full text-right">
              {menu?.fullMenu.map((link, i) => (
                <li
                  key={link.name + i}
                  onMouseEnter={() => setSelectedMenu(i)}
                  className={`p-4 border-b border-neutral-400 flex justify-between text-2xl items-center ${
                    selectedMenu === i ? "bg-neutral-700" : ""
                  }`}
                >
                  <MdArrowBackIos className="text-2xl" />
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
