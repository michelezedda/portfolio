import "./about.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import MyPic from "/profile-icon.png";
import { FaFile } from "react-icons/fa6";

function About() {
  const { t } = useTranslation("global");

  return (
    <>
      <div id="about">
        <div className="left-about-section">
          <img src={MyPic} alt="Michele Zedda Profile Picture" />
        </div>
        <div className="right-about-section">
          <h2>{t("about.title")}</h2>
          <p className="about-description">
            {t("about.description1")}
            <span>Michele</span>,{t("about.description2")}
            <br /> <br />
            {t("about.description3")}
          </p>
          <Link to="/curriculum/">
            <button className="button">
              <i>
                <FaFile />
              </i>
              &nbsp; {t("about.button")}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
