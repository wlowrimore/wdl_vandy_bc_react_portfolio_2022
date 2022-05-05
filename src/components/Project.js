import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Project(props) {
  console.log(props);
  return (
    <div className="project-card">
      <img src={props.image} alt="image" />
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
