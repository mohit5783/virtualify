"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.webp";
import { NavLinks } from "../content/NavLinks";
import NavBar from "./NavBar";
import { useState } from "react";

const TopBar = () => {
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [menuKey, setMenuKey] = useState("");
  return (
    <header>
      <nav className="flex items-center justify-between p-5">
        <Link href="/">
          <div className="flex">
            <Image
              src={logo}
              alt="Virtualify Software Consultancy - logo"
              width={64}
              height={64}
            />
            <div className="bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] bg-clip-text text-transparent items-center font-raleway">
              <h1 className="text-4xl font-bold ms-2">Virtualify</h1>
              <h2 className="text-base">Software Consultancy</h2>
            </div>
          </div>
        </Link>
        <div className="flex gap-4 pr-4">
          {NavLinks.map((link) => (
            <Link
              onMouseEnter={() => {
                setIsNavHovered(true);
                setMenuKey(link.key);
              }}
              className="flex items-center gap-2 text-white hover:text-[var(--neon-green)] transition-colors duration-300 "
              href={link.href}
              key={link.key}
              aria-label={link.label}
            >
              {link.icon}
              <span className="relative group">
                <span className="flex text-xl">{link.label}</span>
                <span className="h-[2px] inline-block w-0 bg-gradient-to-r from-[var(--neon-orange)] via-[var(--neon-yellow)] to-[var(--neon-green)] absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-300">
                  &nbsp;
                </span>
              </span>
            </Link>
          ))}
        </div>
      </nav>
      {isNavHovered && (
        <NavBar
          TopMenu={menuKey}
          onMouseLeave={() => {
            setIsNavHovered(false);
            setMenuKey("");
          }}
        />
      )}
    </header>
  );
};

export default TopBar;
