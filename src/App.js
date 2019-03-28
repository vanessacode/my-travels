// src/App.js
import React, { Component } from "react";
import Travels from "./Travels";



class App extends Component {
  render() {
    return (
      <div>
        <h1 style= {{color:'blue'}}>My travels</h1>
        <Travels />
      </div>
    );
  }
}

export default App;