import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
// import Firefly from "../../animations/fireflyHover.js";

import ProjectCard2 from "./ProjectCard2";

// Projects to add:
//firefly
//a to z (backend)
//Replate (UI - HTML|SCSS)
//Droom (Front-end|React)

function Projects() {
  return (
    <div className="projects-container">
      <h1>{"{ my projects }"}</h1>
      <ProjectCard2 />
      <ProjectCard
        title="Replate"
        titleColor="replateTitle"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        descriptionColor="replateDescription"
      />
      <div style={{ height: " 300px" }} />
      {/* <ProjectCard
        title="Project Firefly"
        img={<Firefly height={100} width={100} />}
        titleColor="fireflyTitle"
        description="Proof-of-concept application designed for 4-6 year-olds learning style - through play and experience, which allows children to figure things out without feeling stuck. 
"
        descriptionColor="fireflyDescription"
      /> */}
      <div style={{ height: " 300px" }} />
      {/* <ProjectCard
        title="A to Z"
        description="Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      /> */}
    </div>
  );
}

export default Projects;
