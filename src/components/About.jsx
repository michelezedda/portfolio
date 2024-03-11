import "../styles/about.css";
import { Link } from "react-router-dom";
import MyPic from "/public/profile-icon.png";

function About() {
  return (
    <>
      <div id="about">
        <div className="left-about-section">
          <img src={MyPic} alt="Michele Zedda Profile Picture" />
        </div>
        <div className="right-about-section">
          <h2>About Me</h2>
          <p className="about-description">
            {" "}
            Hello there! I'm <span>Michele</span>, a passionate 27-year-old on a
            journey into the exciting world of web development. Currently based
            in Italy, as a start2impact University student I'm immersed in the
            dynamic realm of coding, design, and everything web-related. <br />
            My fascination with web development goes beyond just creating
            functional websites; it's about crafting immersive digital
            experiences. I believe in the power of clean code, intuitive design,
            and seamless user interactions to make the web a better place.{" "}
            <br />
            Let's connect, collaborate, and create something extraordinary.
            Together, we can turn dreams into digital realities!{" "}
          </p>
          <Link to="../pages/curriculum/"></Link>
          <button>
            <i className="fa-solid fa-file"></i>&nbsp; View curriculum
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
