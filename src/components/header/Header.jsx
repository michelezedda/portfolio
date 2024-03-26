import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Typed from "typed.js";
import "./header.css";
import MyHeaderVid from "/coding.mp4";

function Header() {
  const { t } = useTranslation("global");

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
          <h1>JUNIOR FRONTEND DEVELOPER</h1>
          <p className="title">
            {t("header.hi")},
            <br /> {t("header.im")} <span className="typedText"></span>
          </p>
        </div>
        <div className="right-header-section">
          <video autoPlay loop muted>
            <source src={MyHeaderVid} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default Header;
