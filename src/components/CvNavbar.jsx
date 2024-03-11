import "../styles/cvnavbar.css";
import MyLogo from "/public/logo.png";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

function CvNavbar() {
  return (
    <>
      <div className="cvnavbar">
        <ul class="menu">
          <li>
            <Link to="/">
              <i>
                <FaAngleLeft />
              </i>
            </Link>
          </li>
        </ul>
        <div class="nav-logo">
          <img src={MyLogo} />
        </div>
      </div>
    </>
  );
}

export default CvNavbar;
