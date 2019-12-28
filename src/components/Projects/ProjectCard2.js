import React from "react";
import "./Projects.css";

function ProjectCard2(props) {
  return (
    <div className="card2-container">
      <div className="projectImg"></div>

      <h3> {props.title} </h3>
      <p>{props.description} </p>

      <div className="tech">
        <h5>Technologies</h5>
        <p>{props.tech}</p>
      </div>
      <div className="buttons">
        <a href={props.github} target="_blank">
          <button>See GitHub</button>
        </a>

        <a href={props.link} target="_blank">
          <button>See project</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard2;
