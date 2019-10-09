import React from "react";
import "./styles/App.css";
import Nav from "./components/Nav/Nav";
import { Route } from "react-router-dom";

import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="root">
      <div className="nav-border">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />

        <Route path="/contact" component={Contact} />
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default App;
