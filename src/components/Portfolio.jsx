import "../styles/portfolio.css";

function Portfolio() {
  return (
    <>
      <div id="portfolio">
        <div className="portfolio-container">
          <h2>My Works</h2>
          <div className="works-list">
            <div>
              <a href="https://thehandgame.netlify.app" target="_blank" />
              <img src="./assets/images/handgame-app.png" />
              <br />
              <p className="work-name">
                <i className="fa-solid fa-link"></i>Rock-Paper-Scissors Game
              </p>
              <p className="work-description">The iconic hand game</p>
            </div>
            <div>
              <a href="https://infinitycounter.netlify.app" target="_blank" />
              <img src="./assets/images/counter-app.png" />
              <br />
              <p className="work-name">
                <i className="fa-solid fa-link"></i>infinityCounter
              </p>
              <p className="work-description">
                Effortless counting at your fingertips
              </p>
            </div>
            <div className="bookshelf">
              <a
                className="non-click"
                href="https://bookshelf-search.netlify.app/"
                target="_blank"
              />
              <img src="./assets/images/book-app.png" />
              <br />
              <p className="work-name">
                <i className="fa-solid fa-link"></i>bookshelf
              </p>
              <p className="work-description">Your personal book concierge</p>
              <p className="onlydesktop-disclaimer">Only avaiable on desktop</p>
            </div>
            <div>
              <a href="https://listplanner.netlify.app/" target="_blank" />
              <img src="./assets/images/ToDoList.png" />
              <br />
              <p className="work-name">
                <i className="fa-solid fa-link"></i>ListPlanner
              </p>
              <p className="work-description">Organize tasks effortlessly</p>
            </div>
            <div>
              <a href="https://app-timetracker.netlify.app/" target="_blank" />
              <img src="./assets/images/TimeTracker.png" />
              <br />
              <p className="work-name">
                <i className="fa-solid fa-link"></i>TimeTracker
              </p>
              <p className="work-description">
                Accurate digital time at your fingertips
              </p>
            </div>
            <div>
              <a href="https://plantpleaser.netlify.app/" target="_blank" />
              <img src="./assets/images/plant-pleaser.png" />
              <br />
              <p className="work-name">
                <i className="fa-solid fa-link"></i>plantpleaser
              </p>
              <p className="work-description">
                Unlock a world of delicious vegetarian possibilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
