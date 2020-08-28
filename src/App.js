import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./landing-page";
import Column from "./components/column";

// CSS Imports
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/kanban" component={Column} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
