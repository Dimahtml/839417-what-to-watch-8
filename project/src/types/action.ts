export enum ActionType {
  ChangeGenre = 'filter/changeGenre',
  FilterFilmsByGenre = 'filter/filterFilmsByGenre',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type FilterFilmsByGenreAction = {
  type: ActionType.FilterFilmsByGenre;
};

export type Actions = ChangeGenreAction | FilterFilmsByGenreAction;
