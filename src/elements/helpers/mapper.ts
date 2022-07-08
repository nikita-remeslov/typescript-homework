import { Movie } from "../../@types/Movie";
import { MovieMapped } from "../../@types/MovieMapped";

function mapper(movies: Movie[]) : MovieMapped[]{
       return movies.map((movie)=>({
          backdrop_path: movie.backdrop_path,
          id: movie.id,
          overview: movie.overview,
          poster_path: movie.poster_path,
          title: movie.title,
          release_date: movie.release_date
       }));
}

export default mapper;

