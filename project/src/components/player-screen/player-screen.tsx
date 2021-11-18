import {useState, useRef} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {Film, Films} from '../../types/film';
import PlayButton from '../play-button/play-button';
import PauseButton from '../pause-button/pause-button';

type PlayerScreenProps = {
  films: Films;
}

function PlayerScreen({films}: PlayerScreenProps): JSX.Element {
  const history = useHistory();
  const {id} = useParams<{id?: string}>();
  const film = films.find((filmItem) => filmItem.id === Number(id)) || {} as Film;
  const [isActive, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  let video = videoRef.current;

  function onExitButtonClick() {
    history.goBack();
  }

  function onPlayButtonClick() {
    if (isActive) {
      videoRef.current?.pause();
      setActive(false);
    } else {
      videoRef.current?.play();
      setActive(true);
    }
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function getRemainingTime(percents: number, durationInSec: any) {
    let result = '';
    durationInSec = Math.floor(durationInSec * (100 - percents) / 100);
    if (durationInSec < 10) {
      durationInSec = `0${durationInSec}`;
    }
    let durationInMin: number | string = Math.floor(durationInSec / 60);
    if (durationInMin < 10) {
      durationInMin = `0${durationInMin}`;
    }
    result = `-${durationInMin}:${durationInSec}`;
    return result;
  }

  return (
    <div className="player">

      <video
        ref={videoRef}
        className="player__video"
        src={film.previewVideoLink}
        poster={film.backgroundImage}
        width="100%"
        height="100%"
        muted={false}
        onTimeUpdate={() => {
          video = videoRef.current;

          if (!video) {
            return;
          }

          if(!isNaN(video.duration)) {
            const currentPercent = video.currentTime / video.duration * 100;
            setPercent(currentPercent);
          }
        }}
        onLoadedData={() => {
          setIsLoading(false);
        }}
      />

      <button type="button" className="player__exit" onClick={onExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={percent} max="100"></progress>
            <div className="player__toggler" style={{left: `${percent}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">
            {isLoading ? 'loading...' : getRemainingTime(percent, video!.duration)}
          </div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlayButtonClick}
          >
            {isActive? <PauseButton /> : <PlayButton />}
          </button>
          <div className="player__name">Transpotting</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={toggleFullScreen}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
