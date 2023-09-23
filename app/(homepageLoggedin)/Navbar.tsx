"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { BiSolidHome, BiSearch, BiSolidStar } from "react-icons/bi";
import { RiMovie2Fill } from "react-icons/ri";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaPlus } from "react-icons/fa";
import { TfiPlus } from "react-icons/tfi";
import Link from "next/link";

const Navbar = ({ scrollThreshold = 1 }) => {
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

  const navbarStyle = isScrolled
    ? {
        backgroundColor: "#040714", // Set transparent background when scrolled
      }
    : {
        backgroundColor: "transparent", // Default background color
      };

  return (
    <div className="navbar-bg" style={navbarStyle}>
      <div className="flex justify-between">
        {/**Navbar Buttons */}
        <ul className="flex items-center text-white">
          <Link href="/">
            <Image
              src="/assets/img/logo.svg"
              alt="Disney+ Logo"
              width={58}
              height={38}
              className="h-[40px] mr-[32px] md:w-[80px]"
            />
          </Link>
          <Link
            href="/"
            className="flex px-3 py-4 lg2:px-[18px] lg2:py-[16px] cursor-pointer group"
          >
            <div className="flex items-center h-[24px] lg2:h-[44px]">
              <BiSolidHome className="h-[24px] lg2:mx-1 lg2:mr-3 text-[20px] p-[2px]" />
              <div className="py-[13px] hidden lg2:flex">
                <span className="nav-button text-[14px] font-semibold tracking-wider">
                  HOME
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/search"
            className="flex px-3 py-4 lg2:px-[18px] lg2:py-[16px] cursor-pointer group"
          >
            <div className="flex items-center h-[24px] lg2:h-[44px]">
              <BiSearch className="h-[24px] lg2:mx-1 lg2:mr-3 text-[21px] p-[2px]" />
              <div className="py-[13px] hidden lg2:flex">
                <span className="nav-button text-[14px] font-semibold tracking-wider">
                  SEARCH
                </span>
              </div>
            </div>
          </Link>

          <div className="flex px-3 py-4 lg2:px-[18px] lg2:py-[16px] cursor-pointer group">
            <div className="flex items-center h-[24px] lg2:h-[44px]">
              <FaPlus className="h-[24px] lg2:mx-1 lg2:mr-3 text-[16px] p-[2px]" />
              <div className="py-[13px] hidden lg2:flex">
                <span className="nav-button text-[14px] font-semibold tracking-wider">
                  WATCHLIST
                </span>
              </div>
            </div>
          </div>

          <Link
            href="/originals"
            className="flex px-3 py-4 lg2:px-[18px] lg2:py-[16px] cursor-pointer group"
          >
            <div className="flex items-center h-[24px] lg2:h-[44px]">
              <BiSolidStar className="h-[24px] lg2:mx-1 lg2:mr-3 text-[20px] p-[2px]" />
              <div className="py-[13px] hidden lg2:flex">
                <span className="nav-button text-[14px] font-semibold tracking-wider">
                  ORIGINALS
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/movies"
            className="flex px-3 py-4 lg2:px-[18px] lg2:py-[16px] cursor-pointer group"
          >
            <div className="flex items-center h-[24px] lg2:h-[44px]">
              <RiMovie2Fill className="h-[24px] lg2:mx-1 lg2:mr-3 text-[20px] p-[2px]" />
              <div className="py-[13px] hidden lg2:flex">
                <span className="nav-button text-[14px] font-semibold tracking-wider">
                  MOVIES
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/series"
            className="flex px-3 py-4 lg2:px-[18px] lg2:py-[16px] cursor-pointer group"
          >
            <div className="flex items-center h-[24px] lg2:h-[44px]">
              <PiTelevisionSimpleFill className="h-[24px] lg2:mx-1 lg2:mr-3 text-[20px] p-[2px]" />
              <div className="py-[13px] hidden lg2:flex">
                <span className="nav-button text-[14px] font-semibold tracking-wider">
                  SERIES
                </span>
              </div>
            </div>
          </Link>
        </ul>

        <div className="relative group">
          {/**Profile button */}
          <div
            className="flex items-center justify-end h-[72px] w-[240px] px-[20px] rounded-t-[4px] border border-transparent group-hover:border-[#414141] group-hover:bg-[#131313] group-hover:border group-hover:border-b-0"
            id="hover-trigger"
          >
            <div className="flex items-center">
              <span className="mx-4 text-white text-[15px] hidden 2xl:flex group-hover:flex">
                Profile
              </span>
              <Image
                src="/assets/img/profile.png"
                alt="Profile Picture"
                width={36}
                height={36}
                className="rounded-full flex md:w-[46px] md:h-[46px]"
              />
            </div>
          </div>

          {/**Profile Dropdown */}
          <div
            className="absolute w-[240px] flex flex-col items-center group-hover:border-[#414141] rounded-b-[4px] group-hover:bg-[#131313] group-hover:border group-hover:border-t-0"
            id="dropdown-menu"
          >
            <hr className="mx-5 border-[#414141]"></hr>
            <button className="mx-5 my-4 flex items-center group/add-profile w-full justify-start">
              <div className="rounded-full bg-[#2E2E2E] text-white p-4 group-hover/add-profile:bg-[#414141] text-[20px]">
                <TfiPlus />
              </div>
              <span className="text-white/70 text-[15px] ml-4 text-left cursor-pointer">
                Add Profile
              </span>
            </button>
            <button className="block py-2 text-white/70 w-full text-left text-[15px] mx-5 hover:text-white">
              Edit Profiles
            </button>
            <button className="block py-2 text-white/70 w-full text-left text-[15px] mx-5 hover:text-white">
              App Settings
            </button>
            <button className="block py-2 text-white/70 w-full text-left text-[15px] mx-5 hover:text-white">
              Account
            </button>
            <button className="block py-2 text-white/70 w-full text-left text-[15px] mx-5 hover:text-white">
              Help
            </button>
            <Link href="/api/auth/signout">
              <button className="block py-2 text-white/70 w-full text-left text-[15px] mx-5 hover:text-white mb-5">
                Log out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
