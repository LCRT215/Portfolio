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
    <div>
      <div className="projects-container">
        <h1 className="header">{"{ my work }"}</h1>
        {/* <ProjectCard2 />
      <ProjectCard
        title="Replate"
        titleColor="replateTitle"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        descriptionColor="replateDescription"
      /> */}
        {data.map(project => (
          <ProjectCard2
            key={project.id}
            width="100%"
            title={project.title}
            description={project.description}
            github={project.github}
            link={project.link}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
