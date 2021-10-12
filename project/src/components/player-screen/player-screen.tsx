import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {Film, Films} from '../../types/film';

type PlayerScreenProps = {
  films: Films;
}

function PlayerScreen({films}: PlayerScreenProps): JSX.Element {
  const history = useHistory();
  const {id} = useParams<{id?: string}>();
  const film = films.find((filmItem) => filmItem.id === Number(id)) || {} as Film;

  function onExitButtonClick() {
    history.goBack();
  }


  return (
    <div className="player">
      <video src={film.videoLink} className="player__video" poster="img/player-poster.jpg"></video>

      <button type="button" className="player__exit" onClick={onExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
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
