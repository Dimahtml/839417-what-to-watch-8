import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';

import {
  changeGenre,
  filterFilmsByGenre,
  showMoreFilms,
  resetFilmsList,
  loadFilms,
  requireAuthorization,
  requireLogout,
  loadPromoFilm,
  loadCurrentFilm,
  loadSimilarFilms,
  loadReviews,
  redirectToRoute
} from '../store/action';

export enum ActionType {
  ChangeGenre = 'filter/changeGenre',
  FilterFilmsByGenre = 'filter/filterFilmsByGenre',
  ShowMoreFilms = 'films-list/showMoreFilms',
  ResetFilmsList = 'data/resetFilmsList',
  LoadFilms = 'data/loadFilms',
  LoadPromoFilm = 'data/loadPromo',
  LoadCurrentFilm = 'data/loadCurrentFilm',
  LoadSimilarFilms = 'data/loadSimilarFilms',
  LoadReviews = 'data/loadReviews',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'redirectToRoute'
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
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof loadPromoFilm>
  | ReturnType<typeof loadCurrentFilm>
  | ReturnType<typeof loadSimilarFilms>
  | ReturnType<typeof loadReviews>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
