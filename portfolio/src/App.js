import React from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { Projects } from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Switch returns only the first matching route */}
      <Switch>
        {/* exact so we don't match all paths that start with / */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:id" component={ProjectDetails} />
      </Switch>
    </div>
  );
}

export default App;
