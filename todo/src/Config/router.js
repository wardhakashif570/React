import React from "react";
import Home from '../components/Home';
import About from '../components/About';
import {
  BrowserRouter as Router,
   Route,
 
} from "react-router-dom";

export default function Approuter() {
    return (
      <Router>
       
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
      
       
    </Router>
  );
}