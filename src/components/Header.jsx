import "../styles/header.css";
import MyHeaderPic from "/public/coding.gif";

function Header() {
  return (
    <>
      <div id="header">
        <div className="left-header-section">
          <h1>JUNIOR FULL STACK DEVELOPER</h1>
          <p className="title">
            Hi,
            <br /> I'm <span className="typedText"></span>
          </p>
        </div>
        <div className="right-header-section">
          <img src={MyHeaderPic} />
        </div>
      </div>
    </>
  );
}

export default Header;
