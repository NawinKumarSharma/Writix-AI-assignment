import { Movie } from "../../Data/movies-data";
import MovieItem from "./MovieItem";

const MoviesList = ({
  movies,
  isHandling = false,
}: {
  movies: Movie[];
  isHandling?: boolean;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
      {!isHandling ? (
        movies.length > 0 ? (
          movies?.map((movie) => <MovieItem key={movie.id} movie={movie} />)
        ) : (
          <div className="text-red-600 font-bold mt-5">
            No result found for this query. Search again!
          </div>
        )
      ) : (
        <div>Searching...</div>
      )}
    </div>
  );
};

export default MoviesList;
