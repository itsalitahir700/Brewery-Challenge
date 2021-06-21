import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Brewery from "./pages/brewery";

function App() {
  return (
    <div className="container ">
      <center>
        <img
          src="http://images2.fanpop.com/images/photos/8300000/Beer-root-beer-8321692-250-250.gif"
          alt="Logo"
        />
      </center>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/brewery-details">
            <Brewery />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
