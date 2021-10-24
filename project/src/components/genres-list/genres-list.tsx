import {Films} from '../../types/film';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeGenre as changeGenreState} from '../../store/action';
import {getFilms as getFilmsState} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';

type GenresListProps = {
  initialFilms: Films;
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
type ConnectedComponentProps = PropsFromRedux & GenresListProps;

function GenresList(props: ConnectedComponentProps): JSX.Element {
  const {initialFilms, genre, onChangeGenre, onGetFilms} = props;

  const uniqueGenresSet: Set<string> = new Set();
  uniqueGenresSet.add('All genres');
  initialFilms.map((film) => (uniqueGenresSet.add(film.genre)));
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
            }}
          >
            <a className="catalog__genres-link">{genreItem}</a>
          </li>
        ),
      )}
    </ul>
  );
}

export {GenresList};
export default connector(GenresList);
