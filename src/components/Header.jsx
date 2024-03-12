import React, { useEffect } from "react";
import Typed from "typed.js";
import "../styles/header.css";
import MyHeaderPic from "/coding.gif";

function Header() {
  useEffect(() => {
    const typed = new Typed(".typedText", {
      strings: ["Michele Zedda"],
      typeSpeed: 100,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div id="header">
        <div className="left-header-section">
          <h1>JUNIOR FULL STACK DEVELOPER</h1>
          <p className="title">
            Hi,
            <br /> I'm <span className="typedText"></span>
          </p>
        </div>
        <div className="right-header-section">
          <img src={MyHeaderPic} alt="Header" />
        </div>
      </div>
    </>
  );
}

export default Header;
