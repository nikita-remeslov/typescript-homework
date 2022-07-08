import fetchSearching from "../../fetch/fetchSearching";
import { setPage } from "./loadMore";

let search = false;

function setSearch(value: boolean): void {
    search = value;
}

function searchMovie(e:Event): void{
    e.preventDefault();
    fetchSearching();
    setSearch(true);
    setPage(1);
}

export default searchMovie;
export { search, setSearch};