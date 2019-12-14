import React from "react";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div class="nav-container">
      <div class="name">Leslie Thompson</div>
      {/* Shrink nav height and font. Change name font to look more like a logo */}
      <ul class="nav-bar">
        <li>
          <Link class="nav-link" to="/">
            about
          </Link>
        </li>
        <li class="nav-two">
          <Link class="nav-link" to="/projects">
            projects
          </Link>
        </li>
        <li class="nav-three">
          <Link class="nav-link" to="/contact">
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
