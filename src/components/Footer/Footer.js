import React from "react";
import Nav from "react-bootstrap/Nav";
import "../Footer/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="https://github.com/LCRT215" target="_blank">
            github
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            href="https://www.linkedin.com/in/leslie-thompson-"
            target="_blank"
          >
            linkedin
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            href="https://docs.google.com/document/d/1f5hU9xywzNAb7RkOUUF9Kg51js1z2AvWuDLaq4tWrVE/edit?usp=sharing"
            target="_blank"
          >
            resume
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/contact">hire me</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Footer;
