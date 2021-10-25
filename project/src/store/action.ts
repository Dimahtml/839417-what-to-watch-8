import {ActionType, ChangeGenreAction, FilterFilmsByGenreAction} from '../types/action';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const filterFilmsByGenre = (): FilterFilmsByGenreAction => ({
  type: ActionType.FilterFilmsByGenre,
});
