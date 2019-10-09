import React, { useState } from "react";
import "./Projects.css";

function ProjectCard(props) {
  return (
    <div className="card-container">
      <div className="projects-text">
        <p className={`projects-title ${props.titleColor}`}>{props.title}</p>

        <p className={`description ${props.descriptionColor}`}>
          {props.description}
        </p>
      </div>
      <div className="replate-projects-card"> </div>
    </div>
  );
}

export default ProjectCard;
