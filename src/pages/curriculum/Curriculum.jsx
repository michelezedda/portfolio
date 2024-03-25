import "./curriculum.css";
import { useTranslation } from "react-i18next";
import ReturnNavbar from "../../components/navbar/ReturnNavbar";
import Footer from "../../components/footer/Footer";
import {
  FaIdCardClip,
  FaUser,
  FaLocationDot,
  FaBriefcase,
  FaBolt,
  FaTerminal,
  FaBullseye,
} from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoSchool, IoLanguageSharp } from "react-icons/io5";
import { Helmet } from "react-helmet";

function Curriculum() {
  const { t } = useTranslation("global");
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Michele Zedda - Curriculum</title>
        <link rel="canonical" href="https://michelezedda.netlify.app/" />
      </Helmet>
      <ReturnNavbar />
      <h1>MY CURRICULUM</h1>
      <div id="cv">
        <div className="grid-container">
          <div className="personal-info-container">
            <h2>
              <h2>
                <i>
                  <FaIdCardClip />
                </i>
                &nbsp; {t("curriculum.informations")}
              </h2>
            </h2>
            <p>
              <i>
                <FaUser />
              </i>
              &nbsp; Michele Zedda
            </p>
            <p>
              <i>
                <FaTerminal />
              </i>
              &nbsp; Junior Frontend Developer
            </p>
            <p>
              <i>
                <IoPhonePortraitOutline />
              </i>
              &nbsp; +39 3497063530
            </p>
            <p>
              <i>
                <MdOutlineAlternateEmail />
              </i>
              &nbsp; michelezedda.dev@gmail.com
            </p>
            <p>
              <i>
                <TbWorld />
              </i>
              &nbsp;
              <a href="https://michelezedda.netlify.app/" target="_blank">
                Website
              </a>
            </p>
            <p>
              <i>
                <FaLocationDot />
              </i>
              &nbsp; Assemini (CA) - 09032 Italy
            </p>
          </div>
          <div className="career-container">
            <h2>
              <i>
                <FaBullseye />
              </i>
              &nbsp; {t("curriculum.career-obj")}
            </h2>
            <p>
              {t("curriculum.career-obj-description1")}
              <br />
              {t("curriculum.career-obj-description2")}
            </p>
          </div>
        </div>
        <div className="cv-sections">
          <h2>
            <i>
              <IoSchool />
            </i>
            &nbsp; {t("curriculum.education")}
          </h2>
          <ul>
            <li>start2impact University</li>
            <p>2024 &mdash; Master's degree in Web Development</p>
            <li>{t("curriculum.high-school")}</li>
            <p>2016 &mdash; {t("curriculum.high-school-description")}</p>
          </ul>
          <h2>
            <i>
              <FaBriefcase />
            </i>
            &nbsp; {t("curriculum.work-history")}
          </h2>
          <ul>
            <li>{t("curriculum.work1-title")}</li>
            <p>2020-2022 &mdash; Dental Office Manager</p>
            <li>UnipolSai</li>
            <p>2020 &mdash; {t("curriculum.work2-description")}</p>
          </ul>
          <h2>
            <i>
              <FaBolt />
            </i>
            &nbsp; Skills
          </h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>BootStrap</li>
            <li>Tailwind</li>
            <li>Sass</li>
            <li>Canva</li>
            <li>Node.js</li>
            <li>Webpack</li>
            <li>GitHub</li>
            <li>Netlify</li>
            <li>VS Code</li>
            <li>React</li>
            <li>Vite</li>
            <li>WordPress</li>
          </ul>
          <h2>
            <i>
              <IoLanguageSharp />
            </i>
            &nbsp; {t("curriculum.languages")}
          </h2>
          <ul>
            <li>{t("curriculum.english")}</li>
            <li>{t("curriculum.italian")}</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Curriculum;
