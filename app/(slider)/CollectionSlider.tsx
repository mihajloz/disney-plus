"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { PrevArrow, NextArrow } from "./CollectionSliderArrows";
import { Movie } from "@/interfaces/Movie";
import Link from "next/link";

interface CollectionSliderProps {
  movies: Movie[];
  heading?: string;
}

const CollectionSlider: React.FC<CollectionSliderProps> = ({
  movies,
  heading,
}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    loading: "eager",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  const recommendedArray = movies.slice(0, 15);

  return (
    <div className="overflow-hidden">
      <h2 className="select-none text-white font-bold text-[20px] tracking-wide ml-[calc(3.5vw_+_20px)]">
        {heading}
      </h2>
      <Slider {...settings}>
        {recommendedArray.map((movie) => (
          <div className="p-[10px]" key={movie._id.$oid}>
            <Link href={`/movies/${encodeURIComponent(movie.Title)}`}>
              {/* Wrap the movie item with Link */}
              <div className="thumbnail">
                <Image
                  src={movie.Thumbnail}
                  alt={movie.Title}
                  className="rounded-md"
                  width={400}
                  height={225}
                  loading="eager"
                />
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CollectionSlider;
