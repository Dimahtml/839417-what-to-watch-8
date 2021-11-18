import {Film, Films} from '../types/film';
import {Reviews} from '../types/review';
import {AuthorizationStatus} from '../const';

export type State = {
  genre: string,
  initialFilms: Films,
  activeFilms: Films,
  promoFilm: Film,
  currentFilm: Film,
  similarFilms: Films,
  favoriteFilms: Films,
  reviews: Reviews,
  showedFilmsIndex: number,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};
