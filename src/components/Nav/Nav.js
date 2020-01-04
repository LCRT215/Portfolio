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
            href="https://docs.google.com/document/d/e/2PACX-1vTUJrI_WXb5G1-hXPQuPxCKutetDReaxM2RszcU5WgQiSDC9tRjQYP0y-EthUkFLi1fWKcqBbCT_okj/pub"
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
