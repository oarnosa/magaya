import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faComments, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import ScrollToTop from "./components/scroll-to-top/scroll-to-top.wrapper";
import Spinner from "./components/spinner/spinner.component";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

import "./assets/styles/main.scss";

const Home = lazy(() => import("./pages/home/home.component"));
const Solutions = lazy(() => import("./pages/solutions/solutions.component"));
const About = lazy(() => import("./pages/about/about.component"));
const Contact = lazy(() => import("./pages/contact/contact.component"));
const Terms = lazy(() => import("./pages/terms/terms.component"));
const Privacy = lazy(() => import("./pages/privacy/privacy.component"));

library.add(faComments, faPhoneAlt);

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Home} />
            <Route path="/solutions" component={Solutions} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/terms" component={Terms} />
            <Route path="/privacy" component={Privacy} />
            <Redirect to="/" />
          </Suspense>
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
