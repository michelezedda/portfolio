import "./skills.css";
import { useTranslation } from "react-i18next";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaSass,
  FaGithub,
  FaGitSquare,
  FaReact,
  FaPhp,
  FaWordpress,
  FaNodeJs,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiVite, SiMysql } from "react-icons/si";

function Skills() {
  const { t } = useTranslation("global");

  return (
    <>
      <div id="skills">
        <div className="skills-container">
          <h2>{t("skills.title")}</h2>
          <div className="skills-list">
            <div>
              <i>
                <FaHtml5 />
              </i>
              <p>HTML</p>
            </div>
            <div>
              <i>
                <FaCss3Alt />
              </i>
              <p>CSS</p>
            </div>
            <div>
              <i>
                <SiJavascript />
              </i>
              <p>JavaScript</p>
            </div>
            <div>
              <i>
                <FaBootstrap />
              </i>
              <p>Bootstrap</p>
            </div>
            <div>
              <i>
                <FaSass />
              </i>
              <p>Sass</p>
            </div>
            <div>
              <i>
                <SiTailwindcss />
              </i>
              <p>Tailwind</p>
            </div>
            <div>
              <i>
                <FaGithub />
              </i>
              <p>GitHub</p>
            </div>
            <div>
              <i>
                <FaGitSquare />
              </i>
              <p>git</p>
            </div>
            <div>
              <i>
                <FaNodeJs />
              </i>
              <p>Node.js</p>
            </div>
            <div>
              <i>
                <FaReact />
              </i>
              <p>React</p>
            </div>
            <div>
              <i>
                <SiVite />
              </i>
              <p>Vite</p>
            </div>
            <div>
              <i>
                <FaPhp />
              </i>
              <p>PHP</p>
            </div>
            <div>
              <i>
                <SiMysql />
              </i>
              <p>MySQL</p>
            </div>
            <div>
              <i>
                <FaWordpress />
              </i>
              <p>WordPress</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
