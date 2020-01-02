import React from "react";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div class="nav-container">
      <div class="name">Leslie Thompson</div>

      <ul class="nav-bar">
        <li>
          <Link class="l nav-link" to="/">
            about
          </Link>
        </li>
        <li class="nav-two">
          <Link class="l nav-link" to="/work">
            work
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
            href="https://docs.google.com/document/d/1f5hU9xywzNAb7RkOUUF9Kg51js1z2AvWuDLaq4tWrVE/edit?usp=sharing"
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
