// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travel</h1>
        </header>
        <Travel
          destination="Barcelona"
          country="Spain"
          image="https://seahub-cdn-prod.s3.amazonaws.com/ports-pages/Barcelona%20Small.jpeg"
          distance="1037,5 km"
        />
        <Travel
          destination="Paris"
          country="France"
          image="https://blog.homair.com/wp-content/uploads/2014/07/paris.jpg"
          distance="1037,5 km"
        />
      </div>
    );
  }
}

export default App;