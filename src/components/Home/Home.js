import React from "react";
import "../Home/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="about">
        <img
          className="memoji"
          width="200"
          height="200"
          src={require("../images/open-smile.png")}
          alt=" happy emoji"
        />

        <div className="greeting-container">
          <h1 className="greeting">Hi, I'm Leslie</h1>
        </div>

        <div className="homeText">
          <p>
            I'm a Full Stack Developer based in Philadelphia, PA. I create
            responsive and interactive websites and apps by learning and using
            the latest technologies.
          </p>
          <p>I specialize in Javascript, React, and Node/Express.</p>
          <hr class="home-hr" />
          <p>
            I am currently a Computer Science student at{" "}
            <a
              className="lambda"
              target="_blank"
              rel="noopener noreferrer"
              href="https://lambdaschool.com/courses/full-stack-web-development"
            >
              Lambda School
            </a>
          </p>
        </div>
      </div>
      <div className="sections one">
        <div className="sections-text">
          <h2>Languages</h2>
          Javascript | HTML5 | CSS | SQL | GraphQL
          <div className="break" />
          <h2> Libraries & Frameworks</h2>
          React | Redux | Node | Express | Knex | Firebase | Axios | Postgresql
          | SCSS | Styled-components | Bootstrap and more...
          <div className="break" />
          <h2> Production Tools</h2>
          Git | Github | Heroku | Netlify | Notion | Trello
          <div className="break" />
          <h2>Production Strategy</h2>
          Responsive Design | Feature road mapping | Product boards | User
          feedback gathering | Story boarding
        </div>
      </div>
    </div>
  );
}

export default Home;
