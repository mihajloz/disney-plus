"use client";
import { useState } from "react";
import SingleMovieViewExtras from "./SingleMovieViewExtras";
import SingleMovieViewDetails from "./SingleMovieViewDetails";
import { Movie } from "@/interfaces/Movie";
import CollectionSlider from "../(slider)/CollectionSlider";

interface Props {
  fetchedMovie: Movie | null; // Update the type declaration
  movies: Movie[];
}

function SingleMovieViewNav({ fetchedMovie, movies }: Props) {
  const [selectedTab, setSelectedTab] = useState("suggested");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <>
      {/** Suggested / Extras / More details Nav */}
      <nav className="flex border-b-2 border-white/20 mt-[112px] details-nav">
        <div
          className={`single-movie-nav-button ${
            selectedTab === "suggested" ? "active-nav-button" : ""
          }`}
          onClick={() => handleTabClick("suggested")}
        >
          Suggested
        </div>
        <div
          className={`single-movie-nav-button ${
            selectedTab === "extras" ? "active-nav-button" : ""
          }`}
          onClick={() => handleTabClick("extras")}
        >
          Extras
        </div>
        <div
          className={`single-movie-nav-button ${
            selectedTab === "details" ? "active-nav-button" : ""
          }`}
          onClick={() => handleTabClick("details")}
        >
          Details
        </div>
      </nav>
      <div className="mt-2 pb-[112px]">
        {selectedTab === "suggested" && (
          <div>
            <CollectionSlider movies={movies} />
          </div>
        )}
        {selectedTab === "extras" && (
          <div className="details-nav-content">
            <SingleMovieViewExtras />
          </div>
        )}
        {selectedTab === "details" && (
          <div className="details-nav-content">
            <SingleMovieViewDetails fetchedMovie={fetchedMovie} />
          </div>
        )}
      </div>
    </>
  );
}

export default SingleMovieViewNav;
