"use client";
import { Movie } from "@/interfaces/Movie";
import CollectionSlider from "../(slider)/CollectionSlider";

interface RecommendedCollectionProps {
  movies: Movie[];
  heading: string;
}

const RecommendedCollection: React.FC<RecommendedCollectionProps> = ({
  movies,
}) => {
  const recommendedArray = movies.slice(0, 15);

  return (
    <div className="overflow-hidden">
      <CollectionSlider movies={movies} heading="Recommended For You" />
    </div>
  );
};

export default RecommendedCollection;
