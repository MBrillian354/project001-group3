import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container">
      <h2>About</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/data">Data</Link>
        <Link to="/posts">Posts</Link> 
      </nav>
      <p>This app demonstrates a simple pattern for using Redux and React Router together.</p>
    </div>
  );
}

export default About;