export enum ActionType {
  ChangeGenre = 'filter/changeGenre',
  GetFilms = 'filter/getfilms',
}

export type ChangeGenreAction = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type GetFilmsAction = {
  type: ActionType.GetFilms;
};

export type Actions = ChangeGenreAction | GetFilmsAction;
