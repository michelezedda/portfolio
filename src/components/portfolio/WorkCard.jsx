import "./portfolio.css";
import { Link } from "react-router-dom";

function WorkCard({ workLink, workImg, workTitle, workDescription }) {
  return (
    <div>
      <Link to={workLink} target="_blank">
        <img src={workImg} alt={workTitle} />
        <br />
        <p className="work-name">
          <i className="fa-solid fa-link"></i>
          {workTitle}
        </p>
        <p className="work-description">{workDescription}</p>
      </Link>
    </div>
  );
}

export default WorkCard;
