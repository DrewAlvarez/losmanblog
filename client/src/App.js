import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Disturbing from "./components/Disturbing"
import Great from "./components/Great"
import Bad from "./components/Bad"
import Faces from "./components/Faces"
import Slasher from "./components/Slasher"
import Black from "./components/Black"
import Century from "./components/Century"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route path="/disturbing">
              <Disturbing />
            </Route>
            <Route path="/greathorror">
              <Great />
            </Route>
            <Route path="/badhorror">
              <Bad />
            </Route>
            <Route path="/facesofdeath">
              <Faces />
            </Route>
            <Route path="/slashers">
              <Slasher />
            </Route>
            <Route path="/blackcomedies">
              <Black />
            </Route>
            <Route path="/21sthorror">
              <Century />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
