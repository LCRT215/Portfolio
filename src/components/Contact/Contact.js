import React from "react";
import Nav from "react-bootstrap/Nav";
import "../Contact/Contact.css";

const Contact = () => (
  <div className="contact">
    <div className="head">
      <img
        className="image"
        width="200"
        height="200"
        src={require("../images/crossed.png")}
      />

      <p>
        Feel free to reach out if you have any questions, chat about
        opportunities, or just want to say hello!Find me on social media, use
        the form below, or email me at{" "}
        <a href="mailto:lcrthompson@gmail.com" className="email">
          lcrthompson@gmail.com
        </a>
      </p>
    </div>

    <form method="POST" className="form-container">
      <div className="form">
        <p className="form-text">Name</p>
        <input type="text" name="name" className="input" />
        <br />
        <br />
        <p className="form-text">Email</p>
        <input type="email" name="email" className="input" />
        <br />
        <br />
        <p className="form-text">Message</p>
        <textarea name="message" rows="3" className="input"></textarea>
        <br />
        <br />
        <input type="submit" />
      </div>
    </form>

    {/* <Nav.Link
      href="https://calendly.com/lesliethompson/intro-call"
      target="_blank"
    >
      Schedule a time to speak with me
      <br />
      ADD A CALENDAR OR CALENDLY PHOTO HERE!
    </Nav.Link> */}
  </div>
);

export default Contact;
