import React, { useState, useEffect } from "react";
import { signupimg, navimg } from "./docs";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={navimg} alt="MovieHub" />

      <img className="nav__avatar" src={signupimg} alt="Sign in" />
    </div>
  );
}

export default Navbar;
