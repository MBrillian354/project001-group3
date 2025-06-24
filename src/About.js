import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/data">Data</Link>
      </nav>
      <p>This is a sample React app with Router, Redux, and API access.</p>
    </div>
  );
}

export default About;
