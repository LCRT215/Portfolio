import React from "react";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div class="nav-container">
      <div class="name">
        <Link  class="name-text" to="/">Leslie Thompson</Link>
      </div>

      <ul class="nav-bar">
        {/* <li>
          <Link class="l nav-link" to="/">
            about
          </Link>
        </li> */}
        <li class="nav-two">
          <Link class="l nav-link" to="/work">
            projects
          </Link>
        </li>
        <li class="nav-three">
          <Link class="l nav-link" to="/contact">
            contact
          </Link>
        </li>
        <li class="nav-four">
          <a
            class="l nav-link"
            href="https://docs.google.com/document/d/e/2PACX-1vSS_4eFLR9K7xRQSsdoHauZ7YwXvuvPt6OsyXjMd2hSrVmAIHpc3iHoC0oFoE3SjKnIvlq4_YS5S6rL/pub"
            target="_blank"
          >
            resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
