import "../styles/footer.css";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div id="footer">
        <div className="social-media-icons">
          <a href="https://www.instagram.com/mikelez/" target="_blank">
            <i>
              <FaInstagram />
            </i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.threads.net/@mikelez" target="_blank">
            <i>
              <FaThreads />
            </i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/michele-zedda-8a24002a0/"
            target="_blank"
          >
            <i>
              <FaLinkedinIn />
            </i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/MicheleZedda/" target="_blank">
            <i>
              <FaGithub />
            </i>
          </a>
        </div>
        <div className="copyright">
          <p>&copy; {currentYear} Michele Zedda. All rights reserved.</p>
          <br />
          <a href="https://storyset.com/technology">
            Illustrations by Storyset
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
