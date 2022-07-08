import { Category } from "../@types/Category";
import { MovieMapped } from "../@types/MovieMapped";
import mapper from '../elements/helpers/mapper';
import { API_KEY } from "../enums/api_key";
import { API_URL } from "../enums/api_path";
import { Data } from "../@types/Data"

async function fetchMovies(
   page = 1,
   category : Category = Category.Popular
): Promise<MovieMapped[]>{
      let movies: MovieMapped[] = [];
      await fetch(`${API_URL}movie/${category}?api_key=${API_KEY}&page=${page}`)
      .then((res)=>res.json())
      .then((data: Data)=> mapper(data.results))
      .then((movie)=> (movies = movie));
      return movies;
    }

    export { fetchMovies }