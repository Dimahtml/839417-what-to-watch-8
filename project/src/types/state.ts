import {Film, Films} from '../types/film';
import {AuthorizationStatus} from '../const';

export type State = {
  genre: string,
  initialFilms: Films,
  activeFilms: Films,
  promoFilm: Film,
  currentFilm: Film,
  showedFilmsIndex: number,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};
