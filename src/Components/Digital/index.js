import React from "react";

import "./style.css";
import spotify from "../../Assets/img/spotify-seeklogo.com.svg";
import deezer from "../../Assets/img/deezer-logo.svg";
import apple from "../../Assets/img/apple-music.svg";
import youtube from "../../Assets/img/youtube.svg";
import tidal from "../../Assets/img/tidal.svg";

function Digital() {
  return (
    <div className="digital_wrapper">
      <div className="digital_container">
        <div className="text_digital">OUÇA TAMBÉM EM OUTROS<br/>APPS DE MÚSICA</div>
        <div className="digital_box">
          <img src={spotify} alt='spotify' />
        </div>
        <div className="digital_box">
          <img src={deezer} alt='deezer' />
        </div>
        <div className="digital_box">
          <img src={apple} alt='apple'/>
        </div>
        <div className="digital_box">
          <img src={youtube} alt='youtube' />
        </div>
        <div className="digital_box">
          <img src={tidal} alt='tidal' />
        </div>
      </div>
    </div>
  );
}

export default Digital;
