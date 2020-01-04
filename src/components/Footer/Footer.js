import React from "react";
import Nav from "react-bootstrap/Nav";
import "../Footer/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div>
        <a
          href="https://www.linkedin.com/in/leslie-thompson-"
          target="_blank"
          className="icon"
        >
          <FaLinkedin />
        </a>

        <a href="https://github.com/LCRT215" target="_blank" className="icon">
          <FaGithub />
        </a>
      </div>
      <div className="copy">Created and designed by Leslie Thompson © 2019</div>
    </div>
  );
}

export default Footer;
