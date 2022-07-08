import loadMore from "./elements/helpers/loadMore";
import searchMovie from "./elements/helpers/searchMovie";
import { categoryChange } from "./elements/helpers/selectCategory";
import { fetchMovies } from "./fetch/fetchMovies";
import renderMovies from "./render/renderMovies";

export async function render(): Promise<void> {
    // TODO render your app here
    const movies = await fetchMovies();
    renderMovies(movies);

    const loadMoreButton: HTMLButtonElement = document.getElementById(
        'load-more'
    ) as HTMLButtonElement;
    loadMoreButton.onclick = loadMore;

    categoryChange();

    const form: HTMLFormElement = document.getElementById(
        'search-form'
    ) as HTMLFormElement;
    form.onsubmit = searchMovie;

    // searching as typing
    const input: HTMLInputElement = document.getElementById(
        'search'
    ) as HTMLInputElement;
    let timer: NodeJS.Timeout;
    input.addEventListener('input', (e: Event) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            searchMovie(e);
        }, 500);
    });
   
}
