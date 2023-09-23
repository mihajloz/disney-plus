"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import CollectionSlider from "@/app/(slider)/CollectionSlider";
import { Movie } from "@/interfaces/Movie";
import PageFooter from "@/app/(homepage)/PageFooter";
import originalsImg from "@/public/assets/img/originals.png";

type OriginalsContentProps = {
  movies: Movie[];
  scrollThreshold: number;
};

const OriginalsContent = ({
  scrollThreshold,
  movies,
}: OriginalsContentProps) => {
  const featured = movies.filter((movie: any) => movie.Featured === true);

  const allMovies = movies.filter((movie: any) => movie.Movie === true);

  const series = movies.filter((movie: any) => movie.Series === true);

  const moviesFeatured = allMovies.slice(25, 35);

  const seriesFeatured = series.sort((a: any, b: any) => (b.Featured ? 1 : -1));

  const randomFeatured = featured.slice(20, 30);

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

  const originalsImgStyle = {
    height: isScrolled ? "139px" : "190px",
    marginTop: isScrolled ? "24px" : "36px", // Set initial and final heights
    transition: "height 350ms ease-in-out, margin-top 0ms ease-in-out", // Add transition for smooth animation
  };

  return (
    <>
      <div className="fixed z-10  w-full h-[100px] bg-[#1a1d29] left-0">
        <div className="pt-[72px] select-container flex justify-center bg-[#1a1d29] w-full">
          <Image
            src={originalsImg}
            alt="Originals"
            className="h-[190px] w-auto mt-[36px]"
            style={originalsImgStyle}
          />
        </div>
      </div>
      <div className="relative top-[300px]">
        <CollectionSlider movies={randomFeatured} heading="Featured" />
        <CollectionSlider movies={seriesFeatured} heading="Series" />
        <CollectionSlider movies={moviesFeatured} heading="Featured" />
        <PageFooter />
      </div>
    </>
  );
};

export default OriginalsContent;
