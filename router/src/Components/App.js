import React from "react";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import {Route,Switch} from "react-router-dom";

function App() {
  return (
    <>
    <Menu/>
    <Switch>
    <Route exact path="/" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    </Switch>
    </>
  );
}

export default App;
