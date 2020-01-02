import React from "react";
import "./Projects.scss";

function ProjectCard2(props) {
  return (
    <div className="cardContainer">
      <div className="projectImg"></div>
      <div className="textContainer">
        <h3 className={`title ${props.titleFont}`}> {props.title} </h3>
        <p className="description">{props.description} </p>

        <div className="techContainer">
          <h5 className="techTitle">Technologies</h5>
          <p>{props.tech}</p>
        </div>
      </div>
      <div className="buttons try">
        <a href={props.link} target="_blank">
          <button className="button button--secondary">
            <span class="button__inner">See project</span>
          </button>
        </a>

        <a href={props.github} target="_blank">
          <button className="button button--secondary">
            <span class="button__inner">See GitHub</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard2;
