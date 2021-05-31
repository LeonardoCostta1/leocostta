import React from 'react';

import './style.css';
import logo from '../../Assets/img/logo.svg'
function Menu() {
  return <div className="menu_wrapper">
      <div className="logo_wrapper">
          <img src={logo}/>
      </div>
      <div className="nav_wrapper">
     
      <div>HOME</div>
      <div>DISCOGRAPHY</div>
<div>TOURS</div>
<div>PAGES</div>
<div>GALLERY</div>
<div>BLOG</div>
<div>SHOP</div>
<div>ELEMENTS</div>
      </div>

      <div className="logo_wrapper"></div>
  </div>
}

export default Menu;