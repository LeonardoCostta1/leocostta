import React from "react";

import "./style.css";

function About() {
  return (
    <div className="about_wrapper">
      <div className="about_container">
        <div className="left_area">
          <div className="title">
            IN YOUR EYES FT. KENNY G OFFICIAL LIVE PERFORMANCE
          </div>
          <div className="resume_text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>

        <div className="right_area">
          <iframe
            title="spotify"
            src="https://open.spotify.com/embed/artist/0QiTmZbVWU3pVnuv6mRneU?theme=0"
            width="100%"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
