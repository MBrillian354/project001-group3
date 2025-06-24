import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h2>Welcome to QuickPost</h2>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/data">Data</Link>
      </nav>
      <p>This is a minimal React + Redux + Router demo.</p>
    </div>
  );
}

export default Home;