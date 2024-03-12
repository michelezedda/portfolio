import { useEffect, useState } from "react";
import "../styles/portfolio.css";
import WorkCard from "../components/WorkCard";
import theHandGamePic from "../public/thehandgame.png";

function Portfolio() {
  const [isMobileCompatible, setIsMobileCompatible] = useState(true);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobileCompatible(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  const works = [
    {
      id: 0,
      workTitle: "theHandGame",
      workDescription: "The iconic rock-paper-scissors game",
      workImg: { theHandGamePic },
      workLink: "https://thehandgame.netlify.app",
      isMobileCompatible: true,
    },
    {
      id: 1,
      workTitle: "infinityCounter",
      workDescription: "Effortless counting at your fingertips",
      workImg: "/public/infinitycounter.png",
      workLink: "https://infinitycounter.netlify.app",
      isMobileCompatible: true,
    },
    {
      id: 2,
      workTitle: "bookshelf",
      workDescription: "Your personal book concierge",
      workImg: "/public/bookshelf.png",
      workLink: "https://bookshelf-search.netlify.app/",
      isMobileCompatible: !isMobileCompatible,
    },
    {
      id: 3,
      workTitle: "ListPlanner",
      workDescription: "Organize tasks effortlessly",
      workImg: "/public/listplanner.png",
      workLink: "https://listplanner.netlify.app/",
      isMobileCompatible: true,
    },
    {
      id: 4,
      workTitle: "TimeTracker",
      workDescription: "Accurate digital time at your fingertips",
      workImg: "/public/timetracker.png",
      workLink: "https://app-timetracker.netlify.app/",
      isMobileCompatible: true,
    },
    {
      id: 5,
      workTitle: "plantpleaser",
      workDescription: "Unlock a world of delicious vegetarian possibilities",
      workImg: "/public/plantpleaser.png",
      workLink: "https://plantpleaser.netlify.app/",
      isMobileCompatible: true,
    },
  ];

  return (
    <>
      <div id="portfolio">
        <div className="portfolio-container">
          <h2>My Works</h2>
          <div className="works-list">
            {works
              .filter((work) => work.isMobileCompatible === isMobileCompatible)
              .map((work) => (
                <WorkCard
                  key={work.id}
                  workTitle={work.workTitle}
                  workDescription={work.workDescription}
                  workImg={work.workImg}
                  workLink={work.workLink}
                  isMobileCompatible={work.isMobileCompatible}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
