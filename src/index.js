import React from "react";
import ReactDOM from "react-dom";
import MainList from "./mainlist";

import "./styles.css";

import Start from "./buttons/startButton";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Jalex() {
  return (
    <Router>
      <Route path="/mainlist" exact component={MainList} />
      <Route path="/" exact component={Start} />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Jalex />, rootElement);
