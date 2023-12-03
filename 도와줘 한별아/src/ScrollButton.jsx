// ScrollButton.js
import React from "react";
import { Link } from "react-scroll";

const ScrollButton = () => {
  return (
    <Link to="targetSection" smooth={true} duration={500} offset={-50} onClick={() => {
      window.scroll({
        top: 1000,
        behavior: "smooth"
      });
      console.log("he")
    }}>
      <button className="shortcut-button">바로가기</button>
    </Link>
  );
};

export default ScrollButton;
