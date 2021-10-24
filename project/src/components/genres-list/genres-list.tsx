/* eslint-disable no-console */
import {Films} from '../../types/film';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeGenre as changeGenreState} from '../../store/action';
import {getFilms as getFilmsState} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';

type GenresListProps = {
  films: Films;
}

const mapStateToProps = ({genre}: State) => ({
  genre,
});

// С использованием bindActionCreators
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onChangeGenre: changeGenreState,
  onGetFilms: getFilmsState,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & GenresListProps;

function GenresList(props: ConnectedComponentProps): JSX.Element {
  const {films, genre, onChangeGenre, onGetFilms} = props;
  console.log(genre);

  const uniqueGenresSet: Set<string> = new Set();
  uniqueGenresSet.add('All genres');
  films.map((film) => (uniqueGenresSet.add(film.genre)));
  const uniqueGenresArray: string[] = Array.from(uniqueGenresSet);

  return (
    <ul className="catalog__genres-list">
      {uniqueGenresArray.map(
        (genreItem) => (
          <li
            className={genreItem === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item'}
            key={genreItem}
            onClick={(evt) => {
              onChangeGenre(genreItem);
              onGetFilms();
              console.log(evt.currentTarget);
            }}
          >
            <a href="#" className="catalog__genres-link">{genreItem}</a>
          </li>
        ),
      )}
    </ul>
  );
}

export {GenresList};
export default connector(GenresList);
