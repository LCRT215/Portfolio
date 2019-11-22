import React from "react";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <a href="/" className="logo">
        <img
          width="70"
          height="70"
          src={require("../images/hand-raised.png")}
        />
      </a>
      <div className="nav-link-container">
        <Link className="nav-links" to="/">
          about
        </Link>
        <Link className="nav-links" to="/projects">
          projects
        </Link>
        <Link className="nav-links" to="/contact">
          contact
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
