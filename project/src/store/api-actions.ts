/* eslint-disable no-console */
import {ThunkActionResult} from '../types/action';
import {loadFilms, loadPromoFilm, requireAuthorization, requireLogout, redirectToRoute} from './action';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {BackendFilm} from '../types/film';
import {AuthData} from '../types/auth-data';

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

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const result: any = await api.get(APIRoute.Login);
    console.log(result);
    if (result.status === 200) {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.MainPage));
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    console.log('qqqqqqqqqqq');
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MainPage));
    console.log('qweqweqwe');
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
