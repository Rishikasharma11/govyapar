import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import Affiliate from "./components/Affiliate";
import Notice from "./components/Notice";
import Contact from "./components/Contact";
import Consultation from "./components/Consultation";
import Pricing from "./components/Pricing";
import TaxPlanner from "./components/TaxPlanner";
import Continue from "./components/Continue";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

  function App(){
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route exact path="/service">
        <Service/>
      </Route>
      <Route exact path="/consultation">
        <Consultation/>
      </Route>
      <Route exact path="/pricing">
        <Pricing/>
      </Route>
      <Route exact path="/tax-planner">
        <TaxPlanner/>
      </Route>
      <Route exact path="/affiliate">
        <Affiliate Program/>
      </Route>
      <Route exact path="/notice">
        <Notice/>
      </Route>
      <Route exact path="/contact">
        <Contact/>
      </Route>
      <Route exact path="/continue">
        <Continue/>
      </Route>
    </Switch>
    </Router>
    </>
  );
};

export default App
