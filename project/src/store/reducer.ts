import {ActionType, Actions} from '../types/action';
import {Film} from '../types/film';
import {State} from '../types/state';
import {FILMS_PER_STEP, AuthorizationStatus} from '../const';

const initialState = {
  genre: 'All genres',
  initialFilms: [],
  activeFilms: [],
  showedFilmsIndex: FILMS_PER_STEP,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ResetFilmsList:
      return {...state, showedFilmsIndex: initialState.showedFilmsIndex};
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload, showedFilmsIndex: initialState.showedFilmsIndex};
    case ActionType.FilterFilmsByGenre:
      if (state.genre === initialState.genre) {
        return {...state, activeFilms: state.initialFilms};
      }
      return {...state, activeFilms: state.initialFilms.filter((film: Film) => film.genre === state.genre)};
    case ActionType.ShowMoreFilms:
      return {...state, showedFilmsIndex: state.showedFilmsIndex + FILMS_PER_STEP};
    case ActionType.LoadFilms: {
      const {films} = action.payload;
      return {...state, initialFilms: films, activeFilms: films};
    }
    case ActionType.RequireAuthorization:
      return {...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export {reducer};
