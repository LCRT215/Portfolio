import React from "react";
import "./Projects.css";

function ProjectCard(props) {
  return (
    <div className="card-container">
      <div className="projects-text">
        <p className={`projects-title ${props.titleColor}`}>{props.title}</p>

        <div className={`description ${props.descriptionColor}`}>
          <p>{props.description}</p>
          <br />
          <p className="description-img"> {props.img}</p>
        </div>
      </div>
      <div className="replate-projects-card"> </div>
    </div>
  );
}

export default ProjectCard;
