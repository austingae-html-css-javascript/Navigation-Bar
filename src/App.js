import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import Home from "./Pages/Home";
import Events from "./Pages/Events";
import OurWork from "./Pages/Our-Work";
import About from "./Pages/About";

import logo from "./Images/uscsso-logo.png";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/our-work" element={<OurWork />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      <nav>
        <div>
          <div>
            <h1>USCSS</h1>
            <img src={logo}/>
          </div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/our-work">Our Work</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </nav>
    </Router>
  );
}

export default App

/*
React Router
1) In terminal, type: "npm install react-router-dom@6" - Yes. 

Navigation Bar Process: 
1) type: import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom" - Yes. 
2) create the JS files for various pages. - Yes.
3) import the JS files to App.js - Yes. 
4) create <router>, <routes>, and <route> - Yes. 
  <Router>
    <Routes>
      <Route path="/our-work"><Our Work /><Route> <--If the path="/our-work", then <OurWork /> will be executed. 
      ...
    <Routes>
  </Router>
5) Create the navigation bar.
    1) create the HTML layout - Yes. 
<nav>
  <div>
  </div>
</nav>
    2) create the HTML elements - Yes. 
    <nav>
  <div>
    <Link to="/our-work">Our Work</Link> <-- If "Our Work" is clicked, then path will equal "/our-work", which will make <OurWork /> be executed. 
  </div>
</nav>
    3) decorate the HTML elements in CSS 
        1) Imagine how you want it to look like.
        2) Then use width, padding, border, and margin.
        3) Then calculate: 
            If * {box-sizing: content-box}
            - Parent Div's Width = Child Div's Width+Padding+Border+Margin
            - Parent Div's Width = Block Element's Width+Padding+Border+Margin
            - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
*/