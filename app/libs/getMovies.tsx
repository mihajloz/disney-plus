import { Movie } from "@/interfaces/Movie";

const apiUrl = "https://disney-plus-api-rho.vercel.app/movies";

export default async function fetchMovies(): Promise<Movie[]> {
  try {
    const response = await fetch(apiUrl);

    const data = await response.json();
    const movies: Movie[] = data;

    // console.log(movies);

    return movies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}
