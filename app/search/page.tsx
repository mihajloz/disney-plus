import { useState, useEffect, ChangeEvent } from "react";
import getMovies from "@/app/libs/getMovies";
import { Movie } from "@/interfaces/Movie";
import Image from "next/image";
import PageFooter from "../(homepage)/PageFooter";
import Link from "next/link";
import SearchInput from "./(searchInput)/SearchInput";
import Navbar from "../(homepageLoggedin)/Navbar";

export default async function Page() {
  const fetchedMovies = await getMovies();

  return (
    <>
      <div>
        <div className="main-bg app-bg absolute"></div>
        <Navbar />
        <SearchInput movies={fetchedMovies} />
      </div>
    </>
  );
}
