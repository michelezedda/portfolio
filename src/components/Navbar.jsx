import "../styles/navbar.css";
import MyLogo from "/logo.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import USflag from "/USflag.png";
import ITflag from "/ITflag.png";

function Navbar() {
  const { t } = useTranslation("global");
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <>
      <nav>
        <img src={MyLogo} alt="logo" />
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">{t("navbar.about")}</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contacts">{t("navbar.contacts")}</a>
          </li>
          <li>
            <img
              className="language-switcher"
              onClick={() =>
                changeLanguage(currentLanguage === "en" ? "it" : "en")
              }
              src={currentLanguage === "en" ? ITflag : USflag}
              alt={currentLanguage === "en" ? "Italian" : "English"}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
