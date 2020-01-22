import React from "react";
import "./Projects.scss";
// import pic from "./ProjectImages/replate.jpg";
import replate from "../Projects/ProjectImages/replate.png";
import firefly from "../Projects/ProjectImages/firefly.png";
function ProjectCard2(props) {
  let projectImage;
  if (props.titleFont === "replate") {
    projectImage = <img className="projectImage" src={replate} alt="Logo" />;
  } else if (props.titleFont === "firefly") {
    projectImage = <img className="projectImage" src={firefly} alt="Logo" />;
  }
  // var loginButton;
  // if (loggedIn) {
  //   loginButton = <LogoutButton />;
  // } else {
  //   loginButton = <LoginButton />;
  // }

  // return (
  //   <nav>
  //     <Home />
  //     {loginButton}
  //   </nav>
  // );

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
        {/* console.log(JSON.parse(myObjStr)); */}

        {/* {props.titleFont === "replate" ? (
          <img className="" src={replate} alt="Logo" />
        ) : (
          "no goooooo"
        )} */}
        {/* <img src={replate} alt="Logo" /> */}
        {projectImage}
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
