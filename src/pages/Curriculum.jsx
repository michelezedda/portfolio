import "../styles/curriculum.css";
import CvNavbar from "../components/CvNavbar";
import Footer from "../components/Footer";
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

function Curriculum() {
  return (
    <>
      <CvNavbar />
      <h1>MY CURRICULUM</h1>
      <div id="cv">
        <div className="grid-container">
          <div className="personal-info-container">
            <h2>
              <i>
                <h2>
                  <FaIdCardClip />
                  &nbsp; Personal Information
                </h2>
              </i>
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
              &nbsp; Junior Full Stack Developer
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
              &nbsp; Career Objective
            </h2>
            <p>
              Aspiring to become a proficient web developer, my career objective
              is to leverage my passion for coding and problem-solving to create
              dynamic and user-friendly websites.
              <br />I see myself collaborate within dynamic teams and contribute
              to the evolving landscape of web development. Committed to
              delivering high-quality, responsive, and visually appealing
              websites to enhance user engagement.
            </p>
          </div>
        </div>
        <div className="cv-sections">
          <h2>
            <i>
              <IoSchool />
            </i>
            &nbsp; Education
          </h2>
          <ul>
            <li>start2impact University</li>
            <p>2024 &mdash; Master's degree in Web Development</p>
            <li>High School</li>
            <p>2016 &mdash; Tourism and Hospitality</p>
          </ul>
          <h2>
            <i>
              <FaBriefcase />
            </i>
            &nbsp; Work History
          </h2>
          <ul>
            <li>Liggi Dental Clinic</li>
            <p>2020-2022 &mdash; Dental Office Manager</p>
            <li>UnipolSai</li>
            <p>2020 &mdash; Insurance Agent</p>
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
            <li>PHP & MySQL</li>
            <li>WordPress</li>
          </ul>
          <h2>
            <i>
              <IoLanguageSharp />
            </i>
            &nbsp; Languages
          </h2>
          <ul>
            <li>English</li>
            <li>Italian</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Curriculum;
