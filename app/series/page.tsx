import getMovies from "@/app/libs/getMovies";
import SeriesFilter from "./(seriesFilter)/SeriesFilter";
import Navbar from "../(homepageLoggedin)/Navbar";

export default async function Page() {
  const movies = await getMovies();

  return (
    <>
      <div>
        <div className="main-bg absolute"></div>
        <Navbar />
        <SeriesFilter movies={movies} />
      </div>
    </>
  );
}
