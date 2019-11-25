import React from "react";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    ///////////////////////////
    <div class="container">
      {/* <ul>
        <li>
          <Link class="nav-link" to="/">
            About
          </Link>
        </li>
        <li class="nav-two">
          <Link class="nav-link" to="/projects">
            Projects
          </Link>
        </li>
        <li class="nav-three">
          <Link class="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li class="nav-four">
          <a href="#">Quatro</a>
        </li>
        <hr />
      </ul> */}

      <ul class="example02">
        <li>
          <a href="#">menu01</a>
        </li>
        <li>
          <a href="#">menu02</a>
        </li>
        <li>
          <a href="#">menu03</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
