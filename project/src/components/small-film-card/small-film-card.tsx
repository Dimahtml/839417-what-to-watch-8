import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  film: Film;
}

function SmallFilmCard(props: SmallFilmCardProps): JSX.Element {
  const {film} = props;
  const [isActive, setActive] = useState(false);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <div className="small-film-card__image">
        <VideoPlayer isPlaying={isActive} src={film.previewVideoLink} poster={film.posterImage} width={280} height={175} muted />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
