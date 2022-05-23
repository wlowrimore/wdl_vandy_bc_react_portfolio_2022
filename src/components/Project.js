import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function Project(props) {
  console.log(props);
  return (
    <div className="project-card">
      <img src={props.image} alt="image" />
      <div className="info-group">
        <h3>{props.name}</h3>
        <div className="project-links">
          <a href={props.repo}>
            <FaGithub></FaGithub>
          </a>
          <a href={props.live}>
            <FaGlobe></FaGlobe>
          </a>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
