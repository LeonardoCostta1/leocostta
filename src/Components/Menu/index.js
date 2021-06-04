import React, { useEffect } from "react";

import "./style.css";
import logo from "../../Assets/img/logo.svg";
import $ from 'jquery'
function Menu() {
  useEffect(() => {
    $(document).ready(function ($) {
      $(window).scroll(function () {
        if ($(window).scrollTop() >= 20) {
          $(".menu_wrapper").addClass("back");
        } else {
          $(".menu_wrapper").removeClass("back");
        }
      });
    });
  }, []);
  return (
    <div className="menu_wrapper">
      <div className="logo_wrapper">
        <img src={logo} alt="logo" />
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
      <div className="logo_wrapper social">
        <div className="spotify">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-spotify"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-tiktok"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Menu;
