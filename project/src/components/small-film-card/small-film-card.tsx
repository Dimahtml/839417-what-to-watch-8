import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Film} from '../../types/film';
import VideoPlayer from '../video-player/video-player';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {resetFilmsList as resetFilmsListState} from '../../store/action';

type SmallFilmCardProps = {
  film: Film;
}

const mapStateToProps = ({showedFilmsIndex}: State) => ({
  showedFilmsIndex,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onResetFilmsList: resetFilmsListState,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & SmallFilmCardProps;

function SmallFilmCard(props: ConnectedComponentProps): JSX.Element {
  const {onResetFilmsList, film} = props;
  const [isActive, setActive] = useState(false);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <div className="small-film-card__image">
        <VideoPlayer isPlaying={isActive} src={film.previewVideoLink} poster={film.posterImage} width={280} height={175} muted />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}
          onClick={() => onResetFilmsList()}
        >{film.name}
        </Link>
      </h3>
    </article>
  );
}

export {SmallFilmCard};
export default connector(SmallFilmCard);
