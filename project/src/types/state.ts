import {Films} from '../types/film';
import {AuthorizationStatus} from '../const';

export type State = {
  genre: string,
  initialFilms: Films,
  activeFilms: Films,
  showedFilmsIndex: number,
  authorizationStatus: AuthorizationStatus,
};
