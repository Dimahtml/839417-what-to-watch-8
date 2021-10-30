import {
  changeGenre,
  filterFilmsByGenre,
  showMoreFilms,
  resetFilmsList,
  loadFilms
} from '../store/action';


export enum ActionType {
  ChangeGenre = 'filter/changeGenre',
  FilterFilmsByGenre = 'filter/filterFilmsByGenre',
  ShowMoreFilms = 'films-list/showMoreFilms',
  ResetFilmsList = 'resetFilmsList',
  LoadFilms = 'data/loadFilms',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type FilterFilmsByGenreAction = {
  type: ActionType.FilterFilmsByGenre;
};

export type ShowMoreFilmsAction = {
  type: ActionType.ShowMoreFilms;
};

export type ResetFilmsListAction = {
  type: ActionType.ResetFilmsList;
};

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof filterFilmsByGenre>
  | ReturnType<typeof showMoreFilms>
  | ReturnType<typeof resetFilmsList>
  | ReturnType<typeof loadFilms>;
