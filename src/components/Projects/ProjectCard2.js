import React from "react";

function ProjectCard2(props) {
  return (
    <div className="card2-container">
      <h3> {props.title} </h3>
      <p>Projects description</p>
      <div>
        <button>See project</button>
        <button>See GitHub</button>
      </div>
    </div>
  );
}

export default ProjectCard2;
