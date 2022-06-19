import React from 'react'

import { useNavigate } from 'react-router-dom';

const About = () => {
  let navigate = useNavigate();
  return (
    <div>About
      <button onClick={() => navigate("/")}>Go To Home Page</button>
    </div>

  )
}

export default About