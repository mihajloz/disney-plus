import getMovies from "@/app/libs/getMovies";
import Navbar from "../(homepageLoggedin)/Navbar";
import OriginalsContent from "./(originalsContent)/OriginalsContent";

export default async function Page() {
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
