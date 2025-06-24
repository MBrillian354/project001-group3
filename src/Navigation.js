import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/create">Create</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navigation;
