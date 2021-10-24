/* eslint-disable no-console */
import {Films} from '../../types/film';

type GenresListProps = {
  films: Films;
}

function GenresList({films}: GenresListProps): JSX.Element {
  const uniqueGenres: Set<string> = new Set();
  films.map((film) => (uniqueGenres.add(film.genre)));
  const newArray: string[] = Array.from(uniqueGenres);

  console.log(newArray);

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      {newArray.map(
        (genre) => (
          <li className="catalog__genres-item catalog__genres-item" key={genre}>
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        ),
      )}
    </ul>
  );
}

export default GenresList;
