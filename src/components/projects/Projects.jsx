import "./projects.css";
import { useTranslation } from "react-i18next";
import WorkCard from "./WorkCard";
import theHandGamePic from "/thehandgame.png";
import bookshelfPic from "/bookshelf.png";
import plantpleaserPic from "/plantpleaser.png";
import comingSoonPic from "/comingsoon.png";

function Portfolio() {
  const { t } = useTranslation("global");

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
      workTitle: "bookshelf",
      workDescription: "Your personal book concierge",
      workImg: bookshelfPic,
      workLink: "https://bookshelf-search.netlify.app/",
    },
    {
      id: 2,
      workTitle: "plantpleaser",
      workDescription: "Unlock a world of delicious vegetarian possibilities",
      workImg: plantpleaserPic,
      workLink: "https://plantpleaser.netlify.app/",
    },
    {
      id: 3,
      workTitle: "Coming soon",
      workDescription: "New projects coming soon...",
      workImg: comingSoonPic,
    },
  ];

  return (
    <>
      <div id="projects">
        <div className="projects-container">
          <h2>{t("projects.title")}</h2>
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
