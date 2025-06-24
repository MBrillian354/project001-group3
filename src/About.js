import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function About() {
  return (
    <div className="container">
      <h2>About</h2>
      <Navigation />
      <p>This app demonstrates a simple pattern for using Redux and React Router together.</p>
    </div>
  );
}

export default About;