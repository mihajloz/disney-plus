"use client";
import { useState, ChangeEvent } from "react";
import { Movie } from "@/interfaces/Movie";
import Link from "next/link";
import Image from "next/image";

type SearchInputProps = {
  movies: Movie[];
};
const SearchInput = ({ movies }: SearchInputProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Function to filter movies based on search query
  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="relative top-[72px]">
        <div>
          <form className="fixed z-10 mb-[48px]">
            <input
              type="text"
              placeholder="Search by title, character, or genre"
              className="search-padding w-[100vw] text-[44px] h-[60px] font-semibold lg:h-[100px] left-0 fixed text-ellipsis bg-[#4b4e5a] border-0 select-none outline-none text-[#a8a9ad] focus:text-[#f9f9f9] focus:placeholder-[#f9f9f9] focus:bg-[#626676] duration-300 ease"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </form>
        </div>
      </div>
      <div className="content-padding absolute top-[72px] pt-[60px] lg:pt-[100px] pb-[26px] w-full">
        <div className="mt-[48px] text-[#f9f9f9] text-[20px] font-semibold">
          Explore
        </div>
        <div className="flex items-center flex-wrap justify-start -ml-[20px]">
          {filteredMovies.map((movie) => (
            <Link
              href={`/movies/${encodeURIComponent(movie.Title)}`}
              className="w-[calc(50%_-_20px)] md:w-[calc(33.3333%_-_20px)] lg:w-[calc(25%_-_20px)] lg2:w-[calc(20%_-_20px)] ml-[20px] mt-[20px]"
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

export default SearchInput;
