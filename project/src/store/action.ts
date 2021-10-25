import {ActionType, ChangeGenreAction, FilterFilmsByGenreAction, ShowMoreFilmsAction} from '../types/action';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const filterFilmsByGenre = (): FilterFilmsByGenreAction => ({
  type: ActionType.FilterFilmsByGenre,
});

export const showMoreFilms = (): ShowMoreFilmsAction => ({
  type: ActionType.ShowMoreFilms,
});
