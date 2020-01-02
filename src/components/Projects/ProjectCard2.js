import React from "react";
import "./Projects.css";
// import Tech from "./Tech";

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
      <div className="buttons">
        <a href={props.link} target="_blank">
          <button>See project</button>
        </a>
        <a href={props.github} target="_blank">
          <button>See GitHub</button>
        </a>
      </div>
    </div>
  );
}
// {data.map(project => (
//   <ProjectCard2
//     key={project.id}
//     width="100%"
//     title={project.title}
//     description={project.description}
//     github={project.github}
//     link={project.link}
//     tech={project.tech}
//   />
// ))}
export default ProjectCard2;
