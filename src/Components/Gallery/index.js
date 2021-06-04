import React from "react";
import "./style.css";
import {gallery} from "../../Services/gallery";
function Gallery() {
  return (
    <div className="gallery_wrapper">
      <div className="gallery_container">
        {gallery.map((item, index) => {
          return (
              <div key={item.id} className="box"></div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
