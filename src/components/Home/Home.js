import React from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";

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
          latest technologies available. I have a passion for web design and
          love to create for web and mobile devices.
          <hr class="home-hr" />
        </p>
        I am currently enrolled in Lambda School's 9-month immersive Full Stack
        Web program, learning to design programs using the industry's latest
        technologies and will shortly finish the course on Computer Science with
        Web Development focus.
        <br />
      </div>
      <div className="sections one">
        <h2>Languages</h2>
        Javascript | Python | HTML | CSS | SQL | noSQL | GraphQL
      </div>
      <div className="sections two">
        <h2> Libraries & Frameworks</h2>
        React | Redux | Node.js | Express | Knex.js | Firebase | Axios |
        Postgresql | SCSS | Styled-components | Bootstrap and more...
      </div>
      <div className="sections three">
        <h2> Production Tools</h2>
        Git | Github | Heroku Notion | Trello
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
