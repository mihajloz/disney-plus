import Image from "next/image";
import tarzanBg from "../../public/assets/img/singleView/tarzan2-bg.jpeg";
import tarzanLogo from "../../public/assets/img/singleView/tarzan2-logo.png";
import rating0 from "../../public/assets/img/singleView/rating0.png";
import ad from "../../public/assets/img/singleView/ad.png";
import cc from "../../public/assets/img/singleView/cc.png";
import { FaPlus } from "react-icons/fa";
import SingleMovieViewExtras from "./SingleMovieViewExtras";
import SingleMovieViewDetails from "./SingleMovieViewDetails";
import RecommendedCollection from "../(homepageLoggedin)/RecommendedCollection";
import PageFooter from "../(homepage)/PageFooter";
import getSingleMovie from "../libs/getSingleMovie";
import { Movie } from "@/interfaces/Movie";
import SingleMovieViewNav from "./SingleMovieViewNav";
import getMovies from "../libs/getMovies";

const SingleMovieView = async ({ params }: any) => {
  const fetchedMovie = await getSingleMovie(params);
  const suggested = await getMovies();
  //   console.log(fetchedMovie);

  return (
    <div>
      {/** Background */}
      <div className="single-view-bg"></div>

      {/** Movie Details */}
      <div>
        <div>
          <div className="flex flex-col relative w-full">
            <div className="fixed z-[-1] bg-image">
              <Image
                src={fetchedMovie?.Background || ""}
                alt="Tarzan 2 (title)"
                className="w-screen inline"
                width={1000}
                height={1000}
              />
              <div className="single-view-radial"></div>
            </div>
            <div className="relative top-[72px] max-w-[874px] w-full details">
              <div className="w-full">
                <Image
                  src={fetchedMovie?.Logo || ""}
                  alt="Tarzan 2 (title)"
                  className="items-start w-[35vw] max-w-[340px] z-[10] pt-[56px] pb-[16px]"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="flex flex-col">
                {/** Metadata */}
                <div className="flex gap-1 mb-[5px]">
                  {/** Icons - rating, audio, cc */}
                  <Image
                    src={rating0}
                    alt="Rating"
                    className="h-[20px] w-auto"
                  />
                  <Image
                    src={ad}
                    alt="Audio Descriptions"
                    className="h-[20px] w-auto"
                  />
                  <Image
                    src={cc}
                    alt="Subtitles for the deaf and hearing impaired"
                    className="h-[20px] w-auto"
                  />
                  {/** Release date - movie length */}
                  <span className="text-white text-[12px]">
                    {fetchedMovie?.ReleaseDate} • {fetchedMovie?.Duration}
                  </span>
                </div>
                {/** Genres */}
                <span className="text-[#f9f9f9] text-[12px]">
                  {fetchedMovie?.Genre.join(", ")}
                </span>
              </div>

              {/** Play buttons */}
              <div className="mt-8 flex items-center flex-wrap">
                <button className="flex items-center bg-[#f9f9f9] hover:bg-[#f9f9f999] duration-200 rounded-[4px] h-[56px] px-[24px] my-1 mr-3">
                  <svg viewBox="0 0 36 36" className="h-[2rem] w-[2rem]">
                    <path d="M27.147 20.421L11.27 29.274A2.2 2.2 0 0 1 8 27.353V9.647a2.2 2.2 0 0 1 3.271-1.921l15.876 8.852a2.2 2.2 0 0 1 0 3.843z"></path>
                  </svg>
                  <span className="ml-[12px] font-semibold uppercase tracking-wider text-[15px]">
                    Play
                  </span>
                </button>
                <button className="flex items-center group bg-[#00000099] hover:bg-[#f9f9f9] border duration-200 rounded-[4px] h-[56px] px-[24px] my-1 mx-3">
                  <span className="font-semibold uppercase text-white group-hover:text-black tracking-wider text-[15px]">
                    Trailer
                  </span>
                </button>
                <button className="rounded-full group bg-[#00000099] h-[2.75rem] w-[2.75rem] border-[2px] hover:bg-[#f9f9f9] duration-200 py-[1px] px-[6px] ml-2 mr-4">
                  <FaPlus className="text-white group-hover:text-black m-auto text-[18px]" />
                </button>
                {/* <button className="flex items-center rounded-full group bg-[#00000099] h-[2.75rem] w-[2.75rem] border-[2px] hover:bg-[#f9f9f9] duration-200 py-[1px] px-[6px] mx-2">
                  <svg
                    viewBox="0 0 36 36"
                    className="fill-white group-hover:fill-black h-[44px] w-[44px]"
                  >
                    <path d="M 23.465 19.672 C 23.496 19.83 23.97 24.967 23.798 25.96 C 23.55 27.399 21.837 28.426 18.168 28.426 C 14.634 28.426 12.829 27.189 12.483 25.715 C 12.152 24.314 12.807 19.581 12.839 19.427 C 13.638 15.502 16.851 15.295 17.961 15.287 L 18.306 15.287 C 19.343 15.287 22.646 15.664 23.465 19.672 Z M 10.313 16.315 C 10.639 16.315 11.213 16.332 11.831 16.545 C 11.416 17.263 11.105 18.086 10.915 19.016 C 10.906 19.061 10.111 24.229 10.571 26.186 C 10.574 26.198 10.582 26.206 10.585 26.218 C 10.298 26.195 10 26.152 9.689 26.073 C 6.928 25.381 5.88 24.015 5.843 23.261 C 5.787 22.101 6.11 19.77 6.136 19.645 C 6.792 16.42 9.255 16.315 10.089 16.315 Z M 25.976 16.315 C 26.863 16.321 29.223 16.498 29.864 19.645 C 29.89 19.77 30.214 22.101 30.157 23.261 C 30.122 24.015 29.073 25.381 26.312 26.074 C 26.119 26.121 25.932 26.158 25.749 26.184 C 25.945 24.628 25.427 19.459 25.387 19.262 C 25.166 18.176 24.788 17.262 24.305 16.501 C 24.87 16.331 25.386 16.315 25.688 16.315 L 25.688 16.315 Z M 25.77 10.111 C 27.203 10.111 28.366 11.301 28.366 12.77 C 28.366 14.238 27.203 15.429 25.77 15.429 C 24.336 15.429 23.171 14.238 23.171 12.77 C 23.171 11.301 24.336 10.111 25.77 10.111 Z M 10.231 10.111 C 11.666 10.111 12.829 11.301 12.829 12.77 C 12.829 14.238 11.666 15.429 10.231 15.429 C 8.798 15.429 7.636 14.238 7.636 12.77 C 7.636 11.301 8.798 10.111 10.231 10.111 Z M 18.207 7.574 C 19.99 7.574 21.436 9.053 21.436 10.878 C 21.436 12.704 19.99 14.184 18.207 14.184 C 16.422 14.184 14.976 12.704 14.976 10.878 C 14.976 9.053 16.422 7.574 18.207 7.574 Z" />
                  </svg>
                </button> */}
              </div>

              {/** Description / Synopsis */}
              <div className="py-4">
                <p className="text-[20px] text-[#f9f9f9] tracking-wide">
                  {fetchedMovie?.ShortDescription}
                </p>
              </div>
            </div>
            <SingleMovieViewNav
              fetchedMovie={fetchedMovie}
              movies={suggested}
            />
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default SingleMovieView;
