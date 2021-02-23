import React, { Component } from "react";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <div className="App-header">
          <h2>Welcome to LosMan Reviews</h2>
        </div>
        <p className="App-intro">
          Check out reviews on Horror Movies old and new, domestic an foreign!
        </p>
      </div>
      <Footer />
    </div>
  );
}


export default App;
