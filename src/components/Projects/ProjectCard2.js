import React from "react";
import "./Projects.scss";
// import pic from "./ProjectImages/replate.jpg";

function ProjectCard2(props) {
  console.log(props.img);
  // const path = "./ProjectImages/" + props.img;

  return (
    <div className="cardContainer">
      {/* <img src={require(path)} alt="project" height="600" width="600" /> */}
      {/* <div
        style={{ backgroundImage: `url(require("props.img"))` }}
        className="projectImg"
      ></div> */}
      {/* <img src={require(props.img)} alt="not working" /> */}
      {/* <img src={pic} className="projectImg" /> */}
      {/* <img src={pics.replate} alt="Logo" /> */}
      {/* <img src={require(`../${props.img}`)} /> */}
      {/* <div style={"background-image: url('./ProjectImages/replate.jpg)"} /> */}

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
