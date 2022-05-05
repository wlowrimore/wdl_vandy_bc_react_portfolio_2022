import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Project(props) {
  console.log(props);
  return (
    <div className="project-card">
      <img src={props.img} alt="image" />
      <div className="info-group">
        <h3>{props.name}</h3>
        <a href={props.repo}>
          <FaGithub></FaGithub>
        </a>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

// {
/* <div className="project-card">
      <img
        src={BudgetTracker}
        className="card-img-top"
        alt="Budget Tracker PWA"
      />
      <div className="info-group">
        <h3>Budget Tracker</h3>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
} */
// }
