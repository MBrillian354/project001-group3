import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <Link to="/about">About</Link> | <Link to="/data">Data</Link>
      </nav>
    </div>
  );
}

export default Home;
