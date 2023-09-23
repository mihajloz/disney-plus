import brandLogo from "../../../public/assets/img/brands/disney.png";
import brandBg from "../../../public/assets/img/brands/natgeo-bg.jpeg";
import Image from "next/image";
import Navbar from "@/app/(homepageLoggedin)/Navbar";
import PageFooter from "@/app/(homepage)/PageFooter";
import CollectionSlider from "@/app/(slider)/CollectionSlider";
import getMovies from "@/app/libs/getMovies";

async function BrandNatgeo() {
  const fetchedMovies = await getMovies();

  const natgeoMovies = fetchedMovies.filter(
    (movie: any) => movie.Brand === "National Geographic"
  );

  const featured = natgeoMovies.sort((a: any, b: any) => (b.Featured ? 1 : -1));

  const featured2 = natgeoMovies.slice(2, 13);

  const originals = [...natgeoMovies].reverse().slice(0, 10);

  return (
    <div>
      <div className="single-view-bg"></div>
      <Navbar />
      <div>
        <div className="flex flex-col absolute w-full">
          {/**Brand bg */}
          <div className="fixed bg-image brand-bg-img">
            <Image src={brandBg} alt="Disney" className="w-[100vw]" />
            <div className="brand-radial"></div>
          </div>

          {/**Brand Content */}
          <div className="top-[72px] relative">
            {/** Layout image */}
            <div className="flex justify-center items-end min-h-[170px] w-full pb-[10px]">
              <Image
                src={brandLogo}
                alt="Disney"
                className="h-[30vw] opacity-0"
              />
            </div>

            {/**Movie sliders */}
            <div className="relative mb-[100px]">
              <CollectionSlider movies={featured} heading="Featured" />
              <CollectionSlider movies={originals} heading="Originals" />
              <CollectionSlider movies={featured2} heading="Recently Added" />
            </div>
          </div>
          <PageFooter />
        </div>
      </div>
    </div>
  );
}

export default BrandNatgeo;
