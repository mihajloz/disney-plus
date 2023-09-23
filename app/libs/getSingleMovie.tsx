import { Movie } from "@/interfaces/Movie";

const apiUrl = "https://disney-plus-api-rho.vercel.app/movies/";

export default async function getSingleMovie(
  title: string
): Promise<Movie | null> {
  try {
    const response = await fetch(`${apiUrl}${title}`);

    if (!response.ok) {
      throw new Error("Movie not found");
    }

    const data = await response.json();
    const movie: Movie = data;

    // console.log(movie);

    return movie;
  } catch (error) {
    console.error(`Error fetching movie "${title}":`, error);
    return null;
  }
}
