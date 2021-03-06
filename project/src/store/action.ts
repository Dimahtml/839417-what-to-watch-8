import {ActionType} from '../types/action';
import {BackendFilm, BackendFilms} from '../types/film';
import {Reviews} from '../types/review';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const filterFilmsByGenre = () => ({
  type: ActionType.FilterFilmsByGenre,
} as const);

export const showMoreFilms = () => ({
  type: ActionType.ShowMoreFilms,
} as const);

export const resetFilmsList = () => ({
  type: ActionType.ResetFilmsList,
} as const);

export const loadFilms = (films: BackendFilms) => ({
  type: ActionType.LoadFilms,
  payload: {
    films,
  },
} as const);

export const loadPromoFilm = (promoFilm: BackendFilm) => ({
  type: ActionType.LoadPromoFilm,
  payload: {
    promoFilm,
  },
} as const);

export const loadCurrentFilm = (currentFilm: BackendFilm) => ({
  type: ActionType.LoadCurrentFilm,
  payload: {
    currentFilm,
  },
} as const);

export const loadSimilarFilms = (similarFilms: BackendFilms) => ({
  type: ActionType.LoadSimilarFilms,
  payload: {
    similarFilms,
  },
} as const);

export const loadReviews = (reviews: Reviews) => ({
  type: ActionType.LoadReviews,
  payload: {
    reviews,
  },
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);
