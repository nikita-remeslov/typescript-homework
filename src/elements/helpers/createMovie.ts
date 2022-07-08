import { MovieMapped } from '../../@types/MovieMapped';
import {IMAGE_PATH} from '../../enums/image_path';
function createCard(
    movie: MovieMapped
): HTMLDivElement {
    const cardContainer: HTMLDivElement = document.createElement('div');
    cardContainer.classList.add('col-12', 'p-2');
    
    const cardWrapper : HTMLDivElement = document.createElement('div');
    cardWrapper.classList.add('card', 'shadow-sm');

    const movieImg : HTMLImageElement = document.createElement('img');
    movieImg.src = movie.poster_path
    ? `${IMAGE_PATH}w500${movie.poster_path}` :
    'https://image.tmdb.org/t/p/original//rTh4K5uw9HypmpGslcKd4QfHl93.jpg';
    
//    const heartIcon : SVGElement = document.querySelector('bi bi-heart-fill position-absolute p-2') ;
    
   const cardBody: HTMLDivElement = document.createElement('div');
   cardBody.classList.add('card-body');

   const cardText: HTMLParagraphElement = document.createElement('p');
    cardText.classList.add('card-text', 'truncate');
    cardText.innerText = movie.overview;

   const dateContainer: HTMLDivElement = document.createElement('div');
    dateContainer.classList.add(
        'd-flex',
        'justify-content-between',
        'align-items-center'
    );

   const dateText: HTMLElement = document.createElement('small');
    dateText.classList.add('text-muted');
    dateText.innerText = movie.release_date;

    dateContainer.append(dateText);
    cardBody.append(dateContainer, dateText);
    cardWrapper.append(movieImg, cardBody);
    cardContainer.append(cardWrapper);
    return cardContainer;
    
}

export default createCard;