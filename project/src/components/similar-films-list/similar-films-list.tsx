import SmallFilmCard from '../small-film-card/small-film-card';
import {Film, Films} from '../../types/film';

type SimilarFilmsListProps = {
  films: Films;
  currentFilm: Film;
}

function SimilarFilmsList({films, currentFilm}: SimilarFilmsListProps): JSX.Element {
  const similarFilms = films.filter((film) => film.genre === currentFilm.genre && film.id !== currentFilm.id);

  return (
    <div className="catalog__films-list">
      {similarFilms.map((film) => <SmallFilmCard film={film} key={film.id} />)}
    </div>
  );
}

export default SimilarFilmsList;
