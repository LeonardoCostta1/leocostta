import React from "react";
import Player from "../Player";
import foto from '../../Assets/img/26.png'
import "./style.css";
import bg from "../../Assets/video/bgmin.mp4";
function Banner() {
  return (
    <div className="banner_wrapper">
      <div className="overlay"></div>
      <video id="background-video" loop autoPlay>
        <source src={bg} type="video/mp4" />
      </video>
      <div className="banner_container">
        <div className="banner_info_wrapper">
          <div className="text_info">UNDERGROUND RENAISSANCE</div>
          <div className="secundary">
            Lorem ipsum dolor sit amet, cu sea suavitate intellegam, civibus
            nominati ad usu. Purto probatus vel inid mei
          </div>
          <Player />
        </div>

        <div className="foto_container">
          <img src={foto} alt="foto"/>
        </div>
      </div>
    </div>
  );
}

export default Banner;
