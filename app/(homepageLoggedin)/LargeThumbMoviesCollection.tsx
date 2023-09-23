"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { PrevArrow, NextArrow } from "../(slider)/CollectionSliderArrows";
import { Movie } from "@/interfaces/Movie";
import Link from "next/link";

interface LargeThumbMoviesCollectionProps {
  movies: Movie[];
}

const LargeThumbMoviesCollection: React.FC<LargeThumbMoviesCollectionProps> = ({
  movies,
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

  const filteredMovies = movies.filter((movie) => movie.LargeThumbnail !== "");

  return (
    <div className="overflow-hidden">
      <h2 className="select-none text-white font-bold text-[20px] tracking-wide ml-[calc(3.5vw_+_20px)]">
        Pixar Movies
      </h2>
      <Slider {...settings}>
        {filteredMovies.map((movie) => (
          <div className="p-[10px]" key={movie._id.$oid}>
            <Link href={`/movies/${encodeURIComponent(movie.Title)}`}>
              {/* Wrap the movie item with Link */}
              <div className="thumbnail">
                <Image
                  src={movie.LargeThumbnail}
                  alt={movie.Title}
                  className="rounded-md"
                  width={400}
                  height={564}
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

export default LargeThumbMoviesCollection;
