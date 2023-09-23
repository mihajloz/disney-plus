import getMovies from "@/app/libs/getMovies";
import MoviesFilter from "./(movieFilter)/MoviesFilter";
import Navbar from "../(homepageLoggedin)/Navbar";

export default async function Page() {
  const movies = await getMovies();

  return (
    <>
      <div>
        <div className="main-bg absolute"></div>
        <Navbar />
        <MoviesFilter movies={movies} />
      </div>
    </>
  );
}
