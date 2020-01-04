import React, { useState } from "react";
import "./Projects.css";
import data from "./projectData";
import ProjectCard2 from "./ProjectCard2";

//////Projects to add:
// Project Firefly
// A to Z (backend)
// Replate (UI - HTML|SCSS)
// Droom (Front-end|React)
// Bookr or Split the Bill?? (Project Lead)
// Redux Smurfs (add new repo/project)
// Lambda Times (sprint)
// Testing (sprint)
//Check and see which other sprints can be used (use codesandbox to see)

//////Projects to make:
// Daily motivation app (maybe make the api as well so I can add my own quotes)
// Add a todo to motivation app
// Wifi locater (if I can find a wifi api)
// Something with Redux
// Make site for non profit or small business

function Projects() {
  return (
    <div className="projects-container">
      <div className="header-container">
        <h1 className="header">
          <span className="headerAccent">{"{ "}</span>
          <a>projects</a>
          <span className="headerAccent">{" }"}</span>
        </h1>
      </div>

      {data.map(project => (
        <ProjectCard2
          key={project.id}
          width="100%"
          title={project.title}
          titleFont={project.titleFont}
          description={project.description}
          github={project.github}
          link={project.link}
          tech={project.tech}
        />
      ))}
    </div>
  );
}

export default Projects;
