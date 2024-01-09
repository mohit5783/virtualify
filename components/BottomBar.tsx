import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.webp";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
const BottomBar = () => {
  return (
    <footer className="mt-20 bg-black">
      <div className="grid grid-flow-col-dense gap-4 p-5">
        <div className="flex justify-start items-center">
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
        </div>
        <div className="flex justify-center items-center gap-4 text-center">
          <Link
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://api.whatsapp.com/send?phone=919826065894&text=Hi%20Virtualify,%20We%20would%20like%20to%20get%20in%20touch%20with%20you%20to%20build%20an%20App."
          >
            <FaWhatsapp
              className="text-4xl text-[#25d366]"
              title="Best form to get in touch with Virtualify."
            />
          </Link>

          <Link
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://www.linkedin.com/in/virtualify-software-consultancy-78b7242a5/"
          >
            <FaLinkedin
              className="text-4xl text-[#0a66c2]"
              title="Virtualify Companies profile on LinkedIn."
            />
          </Link>

          <Link
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://twitter.com/vscsocialhandle"
          >
            <FaTwitter
              className="text-4xl text-[#1da1f2]"
              title="Twitter handle for Virtualify."
            />
          </Link>
          {/* <Link
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://www.facebook.com/mohit.shrivastava.technocrat"
          >
            <FaFacebookF
              className="text-4xl text-[#1877f2]"
              title="Socially active, lazy with commenting and posting. Just view what friend does"
            />
          </Link>
          <Link
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://www.instagram.com/mohit5783/"
          >
            <FaInstagram
              className="text-4xl text-[#833ab4]"
              title="Mohit K Srivastava's Insta account"
            />
          </Link> */}
          <Link
            rel="noopener noreferrer"
            target={"_blank"}
            href="https://www.youtube.com/@Virtualify"
          >
            <FaYoutube
              className="text-4xl"
              title="Youtube account for Virtualify."
            />
          </Link>
        </div>
        <div className="flex justify-center items-center text-center text-xs">
          &copy; {new Date().getFullYear()}
          &nbsp;VIRTUALIFY SOFTWARE CONSULTANCY PRIVATE LIMITED.
          <br />
          All rights reserved.
        </div>
        <div className="flex justify-end items-center text-right">
          Privacy Notice, Cookie Policy, Disclaimer, Security Policy
        </div>
      </div>
    </footer>
  );
};

export default BottomBar;
