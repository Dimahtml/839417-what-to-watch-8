export enum ActionType {
  ChangeGenre = 'filter/changeGenre',
  FilterFilmsByGenre = 'filter/filterFilmsByGenre',
  ShowMoreFilms = 'films-list/showMoreFilms',
  ResetFilmsList = 'resetFilmsList',
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

export type Actions = ChangeGenreAction | FilterFilmsByGenreAction | ShowMoreFilmsAction | ResetFilmsListAction;
