import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "./pages/home/home.component";
import Solutions from "./pages/solutions/solutions.component";
import About from "./pages/about/about.component";
import Contact from "./pages/contact/contact.component";

import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

import "./App.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/solutions" component={Solutions} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
