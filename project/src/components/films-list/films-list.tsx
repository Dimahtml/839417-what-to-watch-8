import React from 'react';
import SmallFilmCard from '../small-film-card/small-film-card';
import {Films} from '../../types/film';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeGenre as changeGenreState} from '../../store/action';
import {filterFilmsByGenre as filterFilmsByGenreState} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import ShowMoreButton from '../show-more-button/show-more-button';

type FilmsListProps = {
  activeFilms: Films;
}

const mapStateToProps = ({genre, initialFilms, activeFilms, showedFilmsIndex}: State) => ({
  genre,
  initialFilms,
  activeFilms,
  showedFilmsIndex,
});

// С использованием bindActionCreators
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onChangeGenre: changeGenreState,
  onGetFilms: filterFilmsByGenreState,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmsListProps;

function FilmsList(props: ConnectedComponentProps): JSX.Element {
  const {activeFilms, showedFilmsIndex} = props;
  const showedFilms = activeFilms.slice(0, showedFilmsIndex);
  return (
    <React.Fragment>
      <div className="catalog__films-list">
        {showedFilms.map((film) => <SmallFilmCard film={film} key={film.id} />)}
      </div>
      {activeFilms.length > showedFilms.length ? <ShowMoreButton /> : ''}
    </React.Fragment>
  );
}

export {FilmsList};
export default connector(FilmsList);
