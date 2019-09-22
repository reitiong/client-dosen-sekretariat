import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./assets/css/css.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/Home";
function App() {
  return (
    <Router>
      <div className="main-container">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
