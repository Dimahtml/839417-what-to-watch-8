import SmallFilmCard from '../small-film-card/small-film-card';
import {Film, Films} from '../../types/film';
import {SIMILAR_FILMS_COUNT} from '../../const';

type SimilarFilmsListProps = {
  films: Films;
  currentFilm: Film;
}

function SimilarFilmsList({films, currentFilm}: SimilarFilmsListProps): JSX.Element {
  let similarFilms = films.filter((film) => film.id !== currentFilm.id);
  if (similarFilms.length > SIMILAR_FILMS_COUNT) {
    similarFilms = similarFilms.slice(0, SIMILAR_FILMS_COUNT);
  }

  return (
    <div className="catalog__films-list">
      {similarFilms.map((film) => <SmallFilmCard film={film} key={film.id} />)}
    </div>
  );
}

export default SimilarFilmsList;
