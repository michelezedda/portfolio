import "../styles/curriculum.css";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Curriculum() {
  return (
    <>
      <NavBar />
      <h1>MY CURRICULUM</h1>
      <div className="cv">
        <div className="grid-container">
          <div className="personal-info-container">
            <h2>
              <i className="fa-solid fa-id-card-clip"></i>&nbsp; Personal
              Information
            </h2>
            <p>
              <i className="fa-solid fa-user"></i>&nbsp; Michele Zedda
            </p>
            <p>
              <i className="fa-solid fa-terminal"></i>&nbsp; Junior Full Stack
              Developer
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>&nbsp; +39 3497063530
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>&nbsp;
              michelezedda.dev@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-earth-americas"></i>&nbsp;{" "}
              <a href="https://michelezedda.netlify.app/" target="_blank">
                Website
              </a>
            </p>
            <p>
              <i className="fa-solid fa-map-pin"></i>&nbsp; Assemini (CA) -
              09032 Italy
            </p>
          </div>
          <div className="career-container">
            <h2>
              <i className="fa-solid fa-bullseye"></i>&nbsp; Career Objective
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
            <i className="fa-solid fa-user-graduate"></i>&nbsp; Education
          </h2>
          <ul>
            <li>start2impact University</li>
            <p>2024 &mdash; Master's degree in Web Development</p>
            <li>High School</li>
            <p>2016 &mdash; Tourism and Hospitality</p>
          </ul>
          <h2>
            <i className="fa-solid fa-briefcase"></i>&nbsp; Work History
          </h2>
          <ul>
            <li>Liggi Dental Clinic</li>
            <p>2020-2022 &mdash; Dental Office Manager</p>
            <li>UnipolSai</li>
            <p>2020 &mdash; Insurance Agent</p>
          </ul>
          <h2>
            <i className="fa-solid fa-bolt"></i>&nbsp; Skills
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
            <i className="fa-solid fa-language"></i>&nbsp; Languages
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
