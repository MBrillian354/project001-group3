import React from 'react';

function Home() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Simple React Project</h1>

          {/* Logo below the title with inline styling and reduced top space */}
          <img
            src="/logo.jpg"
            alt="Project Logo"
            style={{ width: '100px', height: 'auto', margin: '8px auto 16px', display: 'block' }}
          />

          <p>Created by IDK</p>
          <button className="explore-button">Explore Features</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Group IDK — Simple React Project</p>
      </footer>
    </div>
  );
}

export default Home;
