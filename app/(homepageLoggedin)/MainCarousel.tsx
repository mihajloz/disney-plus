"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import starwars from "../../public/assets/img/main-carousel/starwars.jpeg";
import bleach from "../../public/assets/img/main-carousel/bleach.jpeg";
import simpsons from "../../public/assets/img/main-carousel/simpsons.jpeg";
import futurama from "../../public/assets/img/main-carousel/futurama.jpeg";
import elemental from "../../public/assets/img/main-carousel/elemental.jpeg";
import groot from "../../public/assets/img/main-carousel/groot.jpeg";
import pixar from "../../public/assets/img/main-carousel/pixar.png";
import dug from "../../public/assets/img/main-carousel/dug.jpeg";
import starwarsOverlay from "../../public/assets/img/main-carousel/starwars-overlay.png";
import bleachOverlay from "../../public/assets/img/main-carousel/bleach-overlay.png";
import simpsonsOverlay from "../../public/assets/img/main-carousel/simpsons-overlay.png";
import futuramaOverlay from "../../public/assets/img/main-carousel/futurama-overlay.png";
import elementalOverlay from "../../public/assets/img/main-carousel/elemental-overlay.png";
import grootOverlay from "../../public/assets/img/main-carousel/groot-overlay.png";
import pixarOverlay from "../../public/assets/img/main-carousel/pixar-overlay.png";
import dugOverlay from "../../public/assets/img/main-carousel/dug-overlay.png";
import { PrevArrow, NextArrow } from "./MainCarouselArrows";
import Link from "next/link";

const MainCarousel = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slides: 6,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots slick-thumb slick-dots-list",
    appendDots: (dots: any) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "0px",
          paddingTop: "5px",
          paddingBottom: "5px",
          width: "max-content",
          right: "calc(3.5vw + 50px)",
          bottom: "20px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "transparent",
          borderRadius: "999px",
          margin: "0px",
        }}
      ></div>
    ),
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings} className="relative main-carousel">
        <Link href="/movies/Ahsoka" className="p-[10px]">
          <div className="w-[100%] cursor-pointer rounded-[4px] border-[4px] border-transparent hover:border-white/70 duration-200 main-carousel-item">
            <div className="relative z-1000">
              <Image
                src={starwars}
                priority={true}
                alt="Star Wars Ahsoka"
                className="w-full"
                loading="eager"
              />
              <Image
                src={starwarsOverlay}
                alt="Star Wars Ahsoka"
                className="absolute z-100 top-0 h-auto w-[22%] md:w-[23%] lg:w-[24%] lg2:w-[27%]"
                loading="eager"
                style={{
                  inset: "10% auto auto 6.5%",
                }}
              />
              <div className="absolute bottom-[10%] left-[6.5%] z-1000 text-white font-semibold md:font-bold text-[10px] md:text-[18px]">
                New Part Every Wednesday
              </div>
            </div>
          </div>
        </Link>
        <Link
          href="/movies/BLEACH%3A%20Thousand-Year%20Blood%20War"
          className="p-[10px]"
        >
          <div className="w-[100%] cursor-pointer rounded-[4px] border-[4px] border-transparent hover:border-white/70 duration-200 main-carousel-item">
            <div className="relative z-1000">
              <Image
                src={bleach}
                priority={true}
                alt="BLEACH: Thousand Year Blood War"
                className="w-full"
                loading="eager"
              />
              <Image
                src={bleachOverlay}
                alt="BLEACH: Thousand Year Blood War"
                className="absolute z-100 top-0 h-auto w-[22%] md:w-[23%] lg:w-[24%] lg2:w-[27%]"
                loading="eager"
                style={{
                  inset: "10% auto auto 6.5%",
                }}
              />
              <div className="absolute bottom-[10%] left-[6.5%] z-1000 text-white font-semibold md:font-bold text-[10px] md:text-[18px]">
                New Episode Every Saturday
              </div>
            </div>
          </div>
        </Link>
        <Link href="/brands/pixar" className="p-[10px]">
          <div className="w-[100%] cursor-pointer rounded-[4px] border-[4px] border-transparent hover:border-white/70 duration-200 main-carousel-item">
            <div className="relative z-1000">
              <Image
                src={pixar}
                priority={true}
                alt="Pixar"
                className="w-full"
                loading="eager"
              />
              <Image
                src={pixarOverlay}
                alt="Pixar"
                className="absolute z-100 top-0 w-full"
                loading="eager"
              />
            </div>
          </div>
        </Link>
        <Link href="/movies/The%20Simpsons" className="p-[10px]">
          <div className="w-[100%] cursor-pointer rounded-[4px] border-[4px] border-transparent hover:border-white/70 duration-200 main-carousel-item">
            <div className="relative z-1000">
              <Image
                src={simpsons}
                priority={true}
                alt="The Simpsons"
                className="w-full"
                loading="eager"
              />
              <Image
                src={simpsonsOverlay}
                alt="The Simpsons"
                className="absolute z-100 top-0 h-auto w-[22%] md:w-[23%] lg:w-[24%] lg2:w-[27%]"
                loading="eager"
                style={{
                  inset: "10% auto auto 6.5%",
                }}
              />
              <div className="absolute bottom-[10%] left-[6.5%] z-1000 text-white font-semibold md:font-bold text-[10px] md:text-[18px]">
                New Episodes Coming Soon
              </div>
            </div>
          </div>
        </Link>
        <Link href="/movies/Ahsoka" className="p-[10px]">
          <div className="w-[100%] cursor-pointer rounded-[4px] border-[4px] border-transparent hover:border-white/70 duration-200 main-carousel-item">
            <div className="relative z-1000">
              <Image
                src={futurama}
                priority={true}
                alt="Futurama"
                className="w-full"
                loading="eager"
              />
              <Image
                src={futuramaOverlay}
                alt="Futurama"
                className="absolute z-100 top-0 h-auto w-[22%] md:w-[23%] lg:w-[24%] lg2:w-[27%]"
                loading="eager"
                style={{
                  inset: "10% auto auto 6.5%",
                }}
              />
              <div className="absolute bottom-[10%] left-[6.5%] z-1000 text-white font-semibold md:font-bold text-[10px] md:text-[18px]">
                New Episode Every Monday
              </div>
            </div>
          </div>
        </Link>
        <Link href="/movies/Elemental" className="p-[10px]">
          <div className="w-[100%] cursor-pointer rounded-[4px] border-[4px] border-transparent hover:border-white/70 duration-200 main-carousel-item">
            <div className="relative z-1000">
              <Image
                src={elemental}
                priority={true}
                alt="Elemental"
                loading="eager"
                className="w-full"
              />
              <Image
                src={elementalOverlay}
                alt="Elemental"
                className="absolute z-100 top-0 h-auto w-[22%] md:w-[23%] lg:w-[24%] lg2:w-[27%]"
                loading="eager"
                style={{
                  inset: "10% auto auto 6.5%",
                }}
              />
              <div className="absolute bottom-[10%] left-[6.5%] z-1000 text-white font-semibold md:font-bold text-[10px] md:text-[18px]">
                Coming on Wednesday to Disney+
              </div>
            </div>
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default MainCarousel;
