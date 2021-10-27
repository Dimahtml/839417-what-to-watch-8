import React, {useEffect} from 'react';
import SmallFilmCard from '../small-film-card/small-film-card';
import {Films} from '../../types/film';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeGenre as changeGenreState} from '../../store/action';
import {filterFilmsByGenre as filterFilmsByGenreState} from '../../store/action';
import {resetFilmsList as resetFilmsListState} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import ShowMoreButton from '../show-more-button/show-more-button';

type FilmsListProps = {
  activeFilms: Films;
}

const mapStateToProps = ({activeFilms, showedFilmsIndex}: State) => ({
  activeFilms,
  showedFilmsIndex,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onChangeGenre: changeGenreState,
  onGetFilms: filterFilmsByGenreState,
  onResetFilmsList: resetFilmsListState,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & FilmsListProps;

function FilmsList(props: ConnectedComponentProps): JSX.Element {
  const {activeFilms, showedFilmsIndex, onResetFilmsList} = props;
  const showedFilms = activeFilms.slice(0, showedFilmsIndex);

  useEffect(() => {
    onResetFilmsList();
  }, []);

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
