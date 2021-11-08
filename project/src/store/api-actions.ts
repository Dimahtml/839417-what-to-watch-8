import {ThunkActionResult} from '../types/action';
import {loadFilms, loadPromoFilm, loadCurrentFilm, loadSimilarFilms, loadReviews, requireAuthorization, requireLogout, redirectToRoute} from './action';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {BackendFilm} from '../types/film';
import {Reviews} from '../types/review';
import {AuthData} from '../types/auth-data';
import {AddReview} from '../types/add-review';

export const fetchFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<BackendFilm[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  };

export const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<BackendFilm>(APIRoute.PromoFilm);
    dispatch(loadPromoFilm(data));
  };

export const fetchCurrentFilmAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<BackendFilm>(`${APIRoute.CurrentFilm}${id}`);
    dispatch(loadCurrentFilm(data));
  };

export const fethcSimilarFilmsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<BackendFilm[]>(APIRoute.SimilarFilms.replace(':id', id.toString()));
    dispatch(loadSimilarFilms(data));
  };

export const fetchReviewsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Reviews>(APIRoute.Review.replace(':id', id.toString()));
    dispatch(loadReviews(data));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const result: any = await api.get(APIRoute.Login);
    if (result.status === 200) {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.MainPage));
    }
  };

export const addReviewAction = (id: number, review: AddReview): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.post<Reviews>(APIRoute.Review.replace(':id', id.toString()), review);
    dispatch(loadReviews(data));
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MainPage));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
