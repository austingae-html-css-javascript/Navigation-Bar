I created a navigation bar in ReactJS by following my thought process: 

To install React Router into the project, type in terminal: "npm install react-router-dom@6" - Yes. 

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
        1) Imagine how you want it to look like. - Yes. 
        2) Then use width, padding, border, and margin. - Yes. 
        3) Then calculate: - Yes. 
            If * {box-sizing: content-box}
            - Parent Div's Width = Child Div's Width+Padding+Border+Margin
            - Parent Div's Width = Block Element's Width+Padding+Border+Margin
            - However, Parent Div's Width != Inline Element's Width+Padding+Border+Margin
*/
