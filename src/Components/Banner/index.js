import React from 'react';
import Player from '../Player';

import'./style.css';

function Banner() {
  return <div className="banner_wrapper">
<Player/>

<div className="info_project_wrapper">
    <div className="primary">THE EVOLUTION OF OUR SOUNDS | ADE 2020</div>
    <div className="secundary">For Amsterdam Dance Event 2020 we recorded a zoom call where me, David Guetta and Timbaland discussed the evolution of our sounds!</div>
</div>
  </div>;
}

export default Banner;