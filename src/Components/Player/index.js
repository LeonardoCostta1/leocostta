import React from 'react';

import'./style.css';

function Player() {
  return <div className="player_wrapper">
      <div className="buttons"><i className="fa fa-fast-backward"></i></div>
      <div className="buttons"><i className="fa fa-play edgtf-play-button"></i></div>
      <div className="buttons"><i className="fa fa-fast-forward"></i></div>
      <div className="music_info">
          <div className="musica_name">Bring it On</div>
          <div className="duration">00:00/03:07</div>
      </div>
  </div>;
}

export default Player;