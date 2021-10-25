import {ActionType, ChangeGenreAction, FilterFilmsByGenreAction, ResetFilmsListAction, ShowMoreFilmsAction} from '../types/action';

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

export const resetFilmsList = (): ResetFilmsListAction => ({
  type: ActionType.ResetFilmsList,
});
