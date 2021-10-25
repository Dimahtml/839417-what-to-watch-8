import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {films} from '../mocks/films';
import {FILMS_PER_STEP} from '../const';

const initialState = {
  genre: 'All genres',
  initialFilms: films,
  activeFilms: films,
  showedFilmsIndex: FILMS_PER_STEP,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ResetFilmsList:
      return {...state, showedFilmsIndex: initialState.showedFilmsIndex};
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload, showedFilmsIndex: initialState.showedFilmsIndex};
    case ActionType.FilterFilmsByGenre:
      if (state.genre === initialState.genre) {
        return {...state, activeFilms: initialState.initialFilms};
      }
      return {...state, activeFilms: initialState.initialFilms.filter((film) => film.genre === state.genre)};
    case ActionType.ShowMoreFilms:
      return {...state, showedFilmsIndex: state.showedFilmsIndex + FILMS_PER_STEP};
    default:
      return state;
  }
};

export {reducer};
