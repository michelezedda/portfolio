import "../styles/portfolio.css";
import WorkCard from "../components/WorkCard";
import theHandGamePic from "/thehandgame.png";
import infinityCounterPic from "/infinitycounter.png";
import bookshelfPic from "/bookshelf.png";
import listPlannerPic from "/listplanner.png";
import timeTrackerPic from "/timetracker.png";
import plantpleaserPic from "/plantpleaser.png";

function Portfolio() {
  const works = [
    {
      id: 0,
      workTitle: "theHandGame",
      workDescription: "The iconic rock-paper-scissors game",
      workImg: theHandGamePic,
      workLink: "https://thehandgame.netlify.app",
    },
    {
      id: 1,
      workTitle: "infinityCounter",
      workDescription: "Effortless counting at your fingertips",
      workImg: infinityCounterPic,
      workLink: "https://infinitycounter.netlify.app",
    },
    {
      id: 2,
      workTitle: "bookshelf",
      workDescription: "Your personal book concierge",
      workImg: bookshelfPic,
      workLink: "https://bookshelf-search.netlify.app/",
    },
    {
      id: 3,
      workTitle: "ListPlanner",
      workDescription: "Organize tasks effortlessly",
      workImg: listPlannerPic,
      workLink: "https://listplanner.netlify.app/",
    },
    {
      id: 4,
      workTitle: "TimeTracker",
      workDescription: "Accurate digital time at your fingertips",
      workImg: timeTrackerPic,
      workLink: "https://app-timetracker.netlify.app/",
    },
    {
      id: 5,
      workTitle: "plantpleaser",
      workDescription: "Unlock a world of delicious vegetarian possibilities",
      workImg: plantpleaserPic,
      workLink: "https://plantpleaser.netlify.app/",
    },
  ];

  return (
    <>
      <div id="portfolio">
        <div className="portfolio-container">
          <h2>My Works</h2>
          <div className="works-list">
            {works.map((work) => (
              <WorkCard
                key={work.id}
                workTitle={work.workTitle}
                workDescription={work.workDescription}
                workImg={work.workImg}
                workLink={work.workLink}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
