import "../styles/portfolio.css";
import { Link } from "react-router-dom";
import plantpleaserPic from "/public/plantpleaser.png";
import timetrackerPic from "/public/timetracker.png";
import infinitycounterPic from "/public/infinitycounter.png";
import thehandgamePic from "/public/thehandgame.png";
import bookshelfPic from "/public/bookshelf.png";
import listplannerPic from "/public/listplanner.png";

function Portfolio() {
  return (
    <>
      <div id="portfolio">
        <div className="portfolio-container">
          <h2>My Works</h2>
          <div className="works-list">
            <div>
              <Link to="https://thehandgame.netlify.app" target="_blank">
                <img src={thehandgamePic} />
                <br />
                <p className="work-name">
                  <i className="fa-solid fa-link"></i>theHandGame
                </p>
                <p className="work-description">
                  The iconic rock-paper-scissors game
                </p>
              </Link>
            </div>
            <div>
              <Link to="https://infinitycounter.netlify.app" target="_blank">
                <img src={infinitycounterPic} />
                <br />
                <p className="work-name">
                  <i className="fa-solid fa-link"></i>infinityCounter
                </p>
                <p className="work-description">
                  Effortless counting at your fingertips
                </p>
              </Link>
            </div>
            <div className="bookshelf">
              <Link
                to="https://bookshelf-search.netlify.app/"
                className="non-click"
                target="_blank"
              >
                <img src={bookshelfPic} />
                <br />
                <p className="work-name">
                  <i className="fa-solid fa-link"></i>bookshelf
                </p>
                <p className="work-description">Your personal book concierge</p>
                <p className="onlydesktop-disclaimer">
                  Only avaiable on desktop
                </p>
              </Link>
            </div>
            <div>
              <Link to="https://listplanner.netlify.app/" target="_blank">
                <img src={listplannerPic} />
                <br />
                <p className="work-name">
                  <i className="fa-solid fa-link"></i>ListPlanner
                </p>
                <p className="work-description">Organize tasks effortlessly</p>
              </Link>
            </div>
            <div>
              <Link to="https://app-timetracker.netlify.app/" target="_blank">
                <img src={timetrackerPic} />
                <br />
                <p className="work-name">
                  <i className="fa-solid fa-link"></i>TimeTracker
                </p>
                <p className="work-description">
                  Accurate digital time at your fingertips
                </p>
              </Link>
            </div>
            <div>
              <Link to="https://plantpleaser.netlify.app/" target="_blank">
                <img src={plantpleaserPic} />
                <br />
                <p className="work-name">
                  <i className="fa-solid fa-link"></i>plantpleaser
                </p>
                <p className="work-description">
                  Unlock a world of delicious vegetarian possibilities
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
