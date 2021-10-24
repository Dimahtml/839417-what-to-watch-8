/* eslint-disable no-console */
import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {films} from '../mocks/films';

const initialState = {
  genre: 'All genres',
  initialFilms: films,
  activeFilms: films,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.GetFilms:
      console.log(state.genre);
      if (state.genre === initialState.genre) {
        return {...state, activeFilms: initialState.initialFilms};
      }
      return {...state, activeFilms: initialState.initialFilms.filter((film) => film.genre === state.genre)};
    default:
      return state;
  }
};

export {reducer};
