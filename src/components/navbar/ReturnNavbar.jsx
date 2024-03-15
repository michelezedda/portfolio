import "./returnnavbar.css";
import MyLogo from "/logo.png";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

function ReturnNavbar() {
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

export default ReturnNavbar;
