import {MovieMapped} from '../@types/MovieMapped';
import createMovie from '../elements/helpers/createMovie';

function renderMovies(movies: MovieMapped[], isNewCategory = false): void{
    const mainContainer : HTMLDivElement = document.getElementById(
        'film-container'
    ) as HTMLDivElement;
    if(isNewCategory) mainContainer.innerHTML = '';
    movies.forEach((movie: MovieMapped)=>{
        const movieCardContainer = createMovie(movie);
        mainContainer.append(movieCardContainer);
    });
}

export default renderMovies;