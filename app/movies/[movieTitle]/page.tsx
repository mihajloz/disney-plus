import Navbar from "@/app/(homepageLoggedin)/Navbar";
import SingleMovieView from "@/app/(singleMovieView)/SingleMovieView";
import getSingleMovie from "@/app/libs/getSingleMovie";

import React from "react";

type Props = { params: { movieTitle: string } };

const page = ({ params }: Props) => {
  return (
    <div>
      <Navbar />
      <SingleMovieView params={params.movieTitle} />
    </div>
  );
};

export default page;
