import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faComments, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import ScrollToTop from "./components/scroll-to-top/scroll-to-top.wrapper";

import Home from "./pages/home/home.component";
import Solutions from "./pages/solutions/solutions.component";
import About from "./pages/about/about.component";
import Contact from "./pages/contact/contact.component";

import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

import "./App.scss";

library.add(faComments, faPhoneAlt);

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
