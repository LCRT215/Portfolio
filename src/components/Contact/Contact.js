import React, { useState } from "react";
import "../Contact/Contact.css";
import Calendly from "./Calendly.js";
import Nav from "react-bootstrap/Nav";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [pop, setPop] = useState(false);
  const calendlyPopup = pop ? <Calendly /> : "";

  return (
    <div className="contact">
      <div className="head">
        <h1>{"[ contact me ]"}</h1>

        <img
          className="image"
          width="200"
          height="200"
          src={require("../images/crossed.png")}
        />
        <p>
          Feel free to reach out if you have any questions, would like to chat
          about opportunities, or just want to say hello! Find me on social
          media, email me at{" "}
          <a href="mailto:lcrthompson@gmail.com" className="link">
            lcrthompson@gmail.com
          </a>
          , or{" "}
          <a onClick={() => setPop(!pop)}>
            <nobr className="link">schedule a call with me</nobr>.
          </a>
        </p>

        <a
          href="https://www.linkedin.com/in/leslie-thompson-"
          target="_blank"
          className="linkedin"
        >
          {" "}
          <FaLinkedin />
        </a>
        {"     "}
        <a href="https://github.com/LCRT215" target="_blank" className="github">
          <FaGithub />
        </a>
      </div>

      {calendlyPopup}
    </div>
  );
}

export default Contact;
