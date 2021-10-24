import React from 'react';
import SmallFilmCard from '../small-film-card/small-film-card';
import {Films} from '../../types/film';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeGenre as changeGenreState} from '../../store/action';
import {getFilms as getFilmsState} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';

type FilmsListProps = {
  activeFilms: Films;
}

const mapStateToProps = ({genre, initialFilms, activeFilms}: State) => ({
  genre,
  initialFilms,
  activeFilms,
});

// С использованием bindActionCreators
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onChangeGenre: changeGenreState,
  onGetFilms: getFilmsState,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmsListProps;

function FilmsList(props: ConnectedComponentProps): JSX.Element {
  const {activeFilms} = props;
  return (
    <div className="catalog__films-list">
      {activeFilms.map((film) => <SmallFilmCard film={film} key={film.id} />)}
    </div>
  );
}

export {FilmsList};
export default connector(FilmsList);
