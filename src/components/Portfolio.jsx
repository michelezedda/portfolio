import "../styles/portfolio.css";
import WorkCard from "../components/WorkCard";
import theHandGamePic from "/public/thehandgame.png";

function Portfolio() {
  const works = [
    {
      id: 0,
      workTitle: "theHandGame",
      workDescription: "The iconic rock-paper-scissors game",
      workImg: { theHandGamePic },
      workLink: "https://thehandgame.netlify.app",
    },
    {
      id: 1,
      workTitle: "infinityCounter",
      workDescription: "Effortless counting at your fingertips",
      workImg: "/public/infinitycounter.png",
      workLink: "https://infinitycounter.netlify.app",
    },
    {
      id: 2,
      workTitle: "bookshelf",
      workDescription: "Your personal book concierge",
      workImg: "/public/bookshelf.png",
      workLink: "https://bookshelf-search.netlify.app/",
    },
    {
      id: 3,
      workTitle: "ListPlanner",
      workDescription: "Organize tasks effortlessly",
      workImg: "/public/listplanner.png",
      workLink: "https://listplanner.netlify.app/",
    },
    {
      id: 4,
      workTitle: "TimeTracker",
      workDescription: "Accurate digital time at your fingertips",
      workImg: "/public/timetracker.png",
      workLink: "https://app-timetracker.netlify.app/",
    },
    {
      id: 5,
      workTitle: "plantpleaser",
      workDescription: "Unlock a world of delicious vegetarian possibilities",
      workImg: "/public/plantpleaser.png",
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
