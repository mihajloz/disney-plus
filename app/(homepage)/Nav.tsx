"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

const Nav = ({ scrollThreshold = 1 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    // Add a scroll event listener
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  const navbarStyle: CSSProperties = isScrolled
    ? {
        backgroundColor: "#040714", // Set transparent background when scrolled
      }
    : {
        backgroundColor: "transparent",
      };

  return (
    <nav
      className="bg-[#040714] w-full pl-[36px] pr-[0px] md:pr-[36px] md:px-[36px] fixed top-0 z-[100] navbar-bg"
      style={navbarStyle}
    >
      <div className="flex justify-between px-5 my-2">
        <div
          className={`flex justify-between px-5 my-2 ${
            isScrolled ? "nav-fade-in visible" : "nav-fade-in"
          }`}
        >
          <Image
            src="/assets/img/logo.svg"
            alt="Disney+ Logo"
            width={80}
            height={80}
            className="w-[64px] md:w-[80px]"
          />
        </div>
        <div>
          <Link
            href="/api/auth/signin"
            className={`${isScrolled ? "nav-fade-in visible" : "nav-fade-in"}`}
          >
            <button className="text-white tracking-wide uppercase h-[40px] md:h-[50px] mr-[5px] px-2 md:px-4 rounded bg-[#0063e5] hover:bg-[#016cf9] duration-200 ease-in-out text-[15px] md:text-[18px]">
              Sign up now
            </button>
          </Link>
          <Link href="/api/auth/signin">
            <button className="text-white tracking-wide uppercase h-[40px] md:h-[50px] ml-[5px] px-2 md:px-4 rounded border bg-[#040714] border-white hover:bg-white hover:text-black duration-200 ease-in-out text-[15px] md:text-[18px]">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
