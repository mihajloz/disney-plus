import getMovies from "@/app/libs/getMovies";
import Navbar from "../(homepageLoggedin)/Navbar";
import Image from "next/image";
import OriginalsContent from "./(originalsContent)/OriginalsContent";
import CollectionSlider from "../(slider)/CollectionSlider";
import { Movie } from "@/interfaces/Movie";
import PageFooter from "../(homepage)/PageFooter";

export default async function Page({ scrollThreshold = 1 }) {
  const fetchedMovies = await getMovies();

  return (
    <>
      <div>
        <div className="main-bg absolute"></div>
        <Navbar />
        <OriginalsContent movies={fetchedMovies} scrollThreshold={1} />
      </div>
    </>
  );
}
