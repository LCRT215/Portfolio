import React from "react";
import "../Footer/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div>
        <a
          className="icon"
          href="https://www.linkedin.com/in/leslie-thompson-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          className="icon"
          href="https://github.com/LCRT215"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="copy">Created and designed by Leslie Thompson © 2019</div>
    </div>
  );
}

export default Footer;
