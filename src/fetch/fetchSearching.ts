import { API_KEY } from "../enums/api_key";
import { API_URL } from "../enums/api_path";
import {Data} from "../@types/Data"
import mapper from "../elements/helpers/mapper"
import renderMovies from "../render/renderMovies";
import { fetchMovies } from "./fetchMovies";


async function fetchSearching(page = 1, isNewSearch = true): Promise<void>{
    const search_input: HTMLInputElement = document.getElementById('search')as HTMLInputElement;
    const query = search_input.value.toLowerCase();
    if(!query){
     const movies = await fetchMovies();
     renderMovies(movies, true); //true);
    } else{
    fetch(`${API_URL}search/movie?api_key${API_KEY}&query=${query}&page=${page}`)
    .then((res)=> res.json())
    .then((data: Data)=> mapper(data.results))
      .then((movies)=> {
        renderMovies(movies, isNewSearch);
      });
    }
}

export default fetchSearching;