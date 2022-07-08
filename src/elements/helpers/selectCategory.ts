import { Category } from "../../@types/Category";
import { fetchMovies } from "../../fetch/fetchMovies";
import renderMovies from "../../render/renderMovies";
import clearInput from "./clearInput";
import { setPage } from "./loadMore";
import { search, setSearch } from "./searchMovie";


let category: Category = Category.Popular;

function setCategory(newCategory: Category): void{
    category = newCategory;
    setPage(1);
    fetchMovies(1, category).then((movies)=>{
        renderMovies(movies); //true
    });
}

function categoryChange(): void{
    const popular: HTMLInputElement = document.getElementById(
        'popular'
    ) as HTMLInputElement;
    popular.onclick = () => {
        if((popular.checked && category!== Category.Popular) || search){
            setCategory(Category.Popular);
        }
        clearInput();
        setSearch(false);
    };
    const upcoming: HTMLInputElement = document.getElementById(
        'upcoming'
    ) as HTMLInputElement;
    upcoming.onclick = () => {
        if((upcoming.checked && category!== Category.Upcoming) || search){
            setCategory(Category.Upcoming);
        }
        clearInput();
        setSearch(false);
    };
    const toprated: HTMLInputElement = document.getElementById(
        'top_rated'
    ) as HTMLInputElement;
    toprated.onclick = () => {
        if((toprated.checked && category!== Category.Toprated) || search){
            setCategory(Category.Toprated);
        }
        clearInput();
        setSearch(false);
    };
}

export { category, setCategory, categoryChange};