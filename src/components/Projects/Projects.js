import React from "react";
import "./Projects.css";
import data from "./projectData";
import ProjectCard from "./ProjectCard";

//////Projects to add:
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
          <p>projects</p>
          <span className="headerAccent">{" }"}</span>
        </h1>
      </div>

      {data.map(project => (
        <ProjectCard
          key={project.id}
          width="100%"
          title={project.title}
          titleFont={project.titleFont}
          description={project.description}
          image={project.image}
          github={project.github}
          link={project.link}
          tech={project.tech}
          img={project.img}
        />
      ))}

      <div className="portfolio-info-container">
        <p className="portfolio-info-text">
         <span></span> ✨ This portfolio was created using React ✨
        </p>
      </div>
    </div>
  );
}

export default Projects;
