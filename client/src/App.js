import React, { Component } from "react";
import Navbar from "./components/Navbar"
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="App-header">
          <h2>Welcome to LosMan Reviews</h2>
        </div>
        <p className="App-intro">
          Check out reviews on Horror Movies old and new, domestic an foreign!
        </p>
      </div>
    </>
  );
}


export default App;
