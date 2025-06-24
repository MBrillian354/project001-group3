import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home';
import About from './About';
import Posts from './Posts';
import PostDetail from './postDetails';
import Create from './Create';
import './App.css';
import Navigation from './Navigation';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-black text-white font-['Montserrat']">
          {/* Fixed Navigation */}
          <header className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A] shadow-lg border-b border-white/10 flex justify-between items-center px-6 py-4">
            <nav className="flex space-x-6">
              <Link to="/" className="nav-link text-white hover:text-[#800020]">Home</Link>
              <Link to="/about" className="nav-link text-white hover:text-[#800020]">About</Link>
              <Link to="/data" className="nav-link text-white hover:text-[#800020]">Data</Link>
              <Link to="/posts" className="nav-link text-white hover:text-[#800020]">Posts</Link>
              <Link to="/create" className="nav-link text-white hover:text-[#800020]">Create</Link>
            </nav>
          </header>

          <main className="pt-24 px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;