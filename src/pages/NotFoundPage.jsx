import "../styles/notfoundpage.css";
import ReturnNavbar from "../components/ReturnNavbar";
import Footer from "../components/Footer";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import myErrorPic from "/public/error.gif";

function NotFoundPage() {
  return (
    <>
      <ReturnNavbar />
      <div className="notfoundpage-container">
        <img src={myErrorPic} />
        <h2>
          Oops! It seems like we took a wrong turn. This page must be off on an
          adventure. Let's guide you back to safety.
        </h2>
        <Link to="/">
          <button className="button">
            <i>
              <FaHome />
            </i>
            &nbsp; Home
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default NotFoundPage;
