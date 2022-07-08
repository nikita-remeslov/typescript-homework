import { fetchMovies } from "../../fetch/fetchMovies";
import fetchSearching from "../../fetch/fetchSearching";
import renderMovies from "../../render/renderMovies";
import searchMovie from "./searchMovie";

let page = 1;

function setPage(newPage: number): void {
    page = newPage;
}

function loadMore():void{
    setPage(page+1);
    if(!searchMovie){
        fetchMovies().then((movies)=>{
            renderMovies(movies);
        });
    } else{
        fetchSearching(page, false);
    }
}

export default loadMore;
export { setPage };