import {ActionType, ChangeGenreAction, GetFilmsAction} from '../types/action';

export const changeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export const getFilms = (): GetFilmsAction => ({
  type: ActionType.GetFilms,
});

