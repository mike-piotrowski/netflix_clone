import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://lh3.googleusercontent.com/InFdxcnIz2sQFE89WTeZ5HhZ6GejTWDKGpQM02QJWXHqc0XrpwINWXsBUK7PZMMLLw=h1024-no-tmp_movies_hub_free_movies_tv_box_hd_apk_poster.jpg"
        className="nav__logo"
        alt="Netflix logo"
      />
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        className="nav__avatar"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;
