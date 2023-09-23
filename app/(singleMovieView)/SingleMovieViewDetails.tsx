import { Movie } from "@/interfaces/Movie";

interface Props {
  fetchedMovie: Movie | null;
}

const SingleMovieViewDetails = ({ fetchedMovie }: Props) => {
  return (
    <div>
      <div className="text-[#f9f9f9] font-bold text-[24px] pb-[24px] pr-[24px] tracking-wide">
        {fetchedMovie?.Title}
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1fr]">
        <div className="max-w-[768px] text-[#f9f9f9]">
          <div className="text-[20px] pr-3">
            {fetchedMovie?.LongDescription}
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1fr] gap-y-10 lg:pl-3">
          <div className="flex flex-col pr-2">
            <div className="flex flex-col pb-2">
              <div className="single-movie-details-title">Duration:</div>
              <div className="single-movie-details-content">
                {fetchedMovie?.Duration}
              </div>
            </div>
            <div className="flex flex-col pb-2">
              <div className="single-movie-details-title">Release date:</div>
              <div className="single-movie-details-content">
                {fetchedMovie?.ReleaseDate}
              </div>
            </div>
            <div className="flex flex-col pb-2">
              <div className="single-movie-details-title">Genre:</div>
              <div className="single-movie-details-content">
                {fetchedMovie?.Genre.join(", ")}
              </div>
            </div>
            <div className="flex flex-col pb-2">
              <div className="single-movie-details-title">Rating:</div>
              <div className="single-movie-details-content">0</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col pb-2">
              <div className="single-movie-details-title">Director:</div>
              <div className="single-movie-details-content">
                {fetchedMovie?.Director}
              </div>
            </div>
            <div className="flex flex-col pb-2">
              <div className="single-movie-details-title">Starring:</div>
              {fetchedMovie?.Actors && (
                <div className="single-movie-details-content">
                  {fetchedMovie.Actors.map((actor, index) => (
                    <div key={index}>{actor}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieViewDetails;
