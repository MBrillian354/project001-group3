import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A] shadow-lg flex justify-between items-center px-6 py-4">
      <nav className="flex space-x-6">
        <Link to="/" className="nav-link text-white hover:text-[#800020]">Home</Link>
        <Link to="/features" className="nav-link text-white hover:text-[#800020]">Features</Link>
        <Link to="/target-users" className="nav-link text-white hover:text-[#800020]">Target Users</Link>
        <Link to="/contact" className="nav-link text-white hover:text-[#800020]">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;