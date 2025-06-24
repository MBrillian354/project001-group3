import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Home() {
  return (
    <div className="container">
      <h1>React Router + Redux + API Example</h1>
      <h2>Welcome to QuickPost</h2>
      <Navigation />
      <p>This is a minimal React + Redux + Router demo.</p>
    </div>
  );
}

export default Home;