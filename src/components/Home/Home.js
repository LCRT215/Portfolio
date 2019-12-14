import React from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className="home-container">
      <div className="about">
        <img
          className="memoji"
          width="150"
          height="150"
          src={require("../images/open-smile.png")}
        />
        <h1>Hi, I'm Leslie!</h1>
        <p>
          I'm a Full Stack Developer based in Philadelphia, PA with experience
          in creating responsive and interactive websites and apps using the
          latest technologies available. I specialize in Javascript, React, and
          Node/Express. I have a passion for web design and love to create for
          web and mobile devices.
          <hr class="home-hr" />
        </p>
        I am currently enrolled in Lambda School's 9-month immersive Full Stack
        Web program, learning to design programs using the industry's latest
        technologies and will shortly finish the course on Computer Science with
        Web Development focus.
        <br />
        <a
          href="https://www.linkedin.com/in/leslie-thompson-"
          target="_blank"
          className="linkedin"
        >
          {" "}
          <FaLinkedin />
        </a>
        {"     "}
        <a href="https://github.com/LCRT215" target="_blank" className="github">
          <FaGithub />
        </a>
      </div>
      <div className="sections one">
        <h2>Languages</h2>
        Javascript | HTML5 | CSS | SQL | GraphQL
      </div>
      <div className="sections two">
        <h2> Libraries & Frameworks</h2>
        React | Redux | Node | Express | Knex | Firebase | Axios | Postgresql |
        SCSS | Styled-components | Bootstrap and more..
      </div>
      <div className="sections three">
        <h2> Production Tools</h2>
        Git | Github | Heroku | Notion | Trello
      </div>
      <div className="sections four">
        <h2>Production Strategy</h2>
        Responsive Design | Feature road mapping | Product boards | User
        feedback gathering | Story boarding
      </div>
      <div>
        <p>
          Take a look at some of my recent projects. If you have any questions
          or would like to chat, please feel free to{" "}
          <Link to="/contact">reach out to me</Link>.
        </p>
      </div>
    </div>
  );
}

export default Home;
