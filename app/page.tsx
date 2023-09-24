import Hero from "./(homepage)/Hero";
import Exclusive from "./(homepage)/Exclusive";
import Features from "./(homepage)/Features";
import Vouchers from "./(homepage)/Vouchers";
import Faq from "./(homepage)/Faq";
import Devices from "./(homepage)/Devices";
import PageFooter from "./(homepage)/PageFooter";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Navbar from "./(homepageLoggedin)/Navbar";
import MainCarousel from "./(homepageLoggedin)/MainCarousel";
import BrandCards from "./(homepageLoggedin)/BrandCards";
import getMovies from "./libs/getMovies";
import RecommendedCollection from "./(homepageLoggedin)/RecommendedCollection";
import LargeThumbMoviesCollection from "./(homepageLoggedin)/LargeThumbMoviesCollection";
import Nav from "./(homepage)/Nav";

export default async function Home() {
  const session = await getServerSession(options);

  const fetchedMovies = await getMovies();

  return (
    <>
      {!session ? (
        <div className="bg-[#040714]">
          <Nav />
          <Hero />
          <Exclusive />
          <Features />
          <Vouchers />
          <Faq />
          <Devices />
          <PageFooter />
        </div>
      ) : (
        <div>
          <div className="main-bg app-bg absolute"></div>
          <Navbar />
          <div className="relative top-[82px]">
            <MainCarousel />
            <BrandCards />
            <RecommendedCollection
              movies={fetchedMovies}
              heading="Recommended for you"
            />
            <LargeThumbMoviesCollection movies={fetchedMovies} />
            <PageFooter />
          </div>
        </div>
      )}
    </>
  );
}
