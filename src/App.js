import React from 'react'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Error from "./Pages/Error";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/about" element={<About />}/> {/*If "/about", then website takes you to <About /> Component in About.js*/}
      <Route path="/profile/:username" element={<Profile />}/>
      <Route path="*" element={<Error />}/>
    </Routes>

    <nav>
      <Link to="/">Home</Link> 
      <Link to="/about">About</Link> {/* If you click on Home, then the website will take you to the path "/about", which will take you to <About /> Component in About.js */}
      <Link to="/profile">Profile</Link>
    </nav>
  </Router>
  );
}

export default App

/*
React Router
1) In terminal, type: "npm install react-router-dom@6"
*/