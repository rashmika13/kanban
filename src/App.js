import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./landing-page";
import Board from "./components/Board";

// CSS Imports
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/kanban" component={Board} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
