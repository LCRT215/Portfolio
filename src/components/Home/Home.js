import React from "react";
import css from "../Home/Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Hi, I'm Leslie</h1>
      <p> hi from HOME</p>

      <p>
        I'm a Full Stack Web Developer based in San Francisco, California. I
        have a passion for web design and love to create for web and mobile
        devices
      </p>

      <div className="what-i-do">
        <h2>What I do.</h2>
        <p>
          I'm a developer, so I know how to create your website to run across
          devices using the latest technologies available.
        </p>
      </div>
    </div>
  );
}

export default Home;
