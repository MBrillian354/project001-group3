import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h2>Welcome to QuickPost</h2>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/data">Data</Link>
        <Link to="/posts">Posts</Link> {/* Fixed closing tag */}
        <Link to="/create">Create</Link>

      </nav>
      <p>This is a minimal React + Redux + Router demo.</p>
    </div>
  );
}

export default Home;