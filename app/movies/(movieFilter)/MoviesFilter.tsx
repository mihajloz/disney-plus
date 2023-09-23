"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Movie } from "@/interfaces/Movie";

type MoviesFilterProps = {
  movies: Movie[];
};

const MoviesFilter = ({ movies }: MoviesFilterProps) => {
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredMovies(movies.filter((movie) => movie.Movie === true));
    } else {
      const filtered = movies.filter(
        (movie) => movie.Genre.includes(selectedGenre) && movie.Movie === true
      );
      setFilteredMovies(filtered);
    }
  }, [selectedGenre, movies]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
    setIsOpen(false);
  };

  const genres = [
    "Romance",
    "Family",
    "Fantasy",
    "Animation",
    "Musical",
    "Coming of Age",
    "Action-Adventure",
    "Drama",
    "Comedy",
    "Music",
    "Super Hero",
    "Science Fiction",
    "Kids",
    "Documentary",
    "Animals and Nature",
  ];

  return (
    <>
      <div className="relative top-[72px] content-padding">
        <div className="fixed z-10  w-full h-[100px] bg-[#1a1d29] left-0 content-padding">
          <div className="mb-[48px] flex items-end select-container relative">
            <div className="text-[#f9f9f9] text-[44px] font-semibold pt-6 pr-6">
              Movies
            </div>
            <div className="custom-dropdown">
              <div
                className={`dropdown-toggle ${
                  isOpen ? "open" : ""
                } relative bg-[#b6b6b6]/20 h-[36px] text-center mb-3 px-4 rounded-full w-full flex items-center text-[#f9f9f9] text-[15px] hover:bg-black/40 duration-300 cursor-pointer`}
                onClick={toggleDropdown}
              >
                {selectedGenre || "All Movies"}
                <svg
                  className="h-[20px] min-w-[20px] ml-4"
                  viewBox="0 0 36 36"
                  fill="#f9f9f9"
                >
                  <path d="M28.35 11.565c.578-.538 1.433-.355 1.81.325.122.21.182.463.182.72 0 .398-.15.786-.437 1.048L18.93 23.827a1.126 1.126 0 0 1-1.555 0L6.432 13.655c-.468-.438-.563-1.198-.25-1.767.377-.681 1.23-.863 1.809-.325l10.164 9.446 10.195-9.445zM17.957 22.776a.31.31 0 0 1 .391 0l-.194-.181-.197.181zM7.436 12.581c-.006.01 0 .053-.027.028a.07.07 0 0 0 .027-.028zm21.5.024z" />
                </svg>
              </div>
              {isOpen && (
                <div className="absolute bg-[#1a1a1a] border-[#414141] py-6 rounded-[4px]">
                  <ul>
                    <li
                      onClick={() => handleGenreChange("")}
                      className={`select-list-item ${
                        selectedGenre === "" ? "selected-item" : ""
                      }`}
                    >
                      All Movies
                    </li>
                    {genres.map((genre) => (
                      <li
                        key={genre}
                        onClick={() => handleGenreChange(genre)}
                        className={`select-list-item ${
                          genre === selectedGenre ? "selected-item" : ""
                        }`}
                      >
                        {genre}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="content-padding absolute top-[72px] pt-[60px] lg:pt-[100px] pb-[26px] w-full">
        <div className="flex items-center flex-wrap justify-start -ml-[20px] mt-10 lg:mt-0">
          {filteredMovies.map((movie) => (
            <Link
              href={`/movies/${encodeURIComponent(movie.Title)}`}
              className="w-[calc(50%-_20px)] md:w-[calc(33.3333%-_20px)] lg:w-[calc(25%-_20px)] 2xl:w-[calc(20%-_20px)] ml-[20px] mt-[20px]"
              key={movie._id.$oid}
            >
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
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviesFilter;
