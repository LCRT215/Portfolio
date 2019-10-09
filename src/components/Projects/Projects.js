import React, { useState } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="projects-container">
      {/* <h1>Projects</h1>
      <h3> What I've been working on</h3>
      <p>
        Here's a selection of some recent work. For more, you can visit me on{" "}
        <a href="https://github.com/LCRT215" target="_blank">
          github
        </a>
      </p> */}
      {/* <ProjectCard title="Replate" />
      <br /> */}

      <ProjectCard
        title="Replate"
        titleColor="replateTitle"
        description="description for Replate"
        descriptionColor="replateDescription"
      />
      <div style={{ height: " 300px" }} />
      <ProjectCard
        title="Project Firefly"
        titleColor="fireflyTitle"
        description="Proof-of-concept application designed for 4-6 year-olds learning style - through play and experience, which allows children to figure things out without feeling stuck. 
"
        descriptionColor="fireflyDescription"
      />
      <div style={{ height: " 300px" }} />
      <ProjectCard title="Firefly" description="description for FF" />
    </div>
  );
}

export default Projects;
