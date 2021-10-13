import React from 'react';
import SmallFilmCard from '../small-film-card/small-film-card';
import {Films} from '../../types/film';

type FilmsListProps = {
  films: Films;
}

function FilmsList({films}: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <SmallFilmCard film={film} key={film.id} />)}
    </div>
  );
}

export default FilmsList;
