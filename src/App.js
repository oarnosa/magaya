import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home/home.component";
import Solutions from "./pages/solutions/solutions.component";
import About from "./pages/about/about.component";
import Contact from "./pages/contact/contact.component";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
