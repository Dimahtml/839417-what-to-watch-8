import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../types/film';

function SmallFilmCard(props: {film: Film}): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isActive, setActive] = useState(false);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <div className="small-film-card__image">
        <img src={props.film.previewImage} alt={props.film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${props.film.id}`}>{props.film.name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
