import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="parallax-section">
      <div className="parallax-bg opacity-60" style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=black%20and%20white%20granite%20texture%2C%20dramatic%20low%20exposure%20architectural%20detail%2C%20minimalist%20composition%2C%20high%20contrast%20monochrome%20photography%2C%20luxury%20stone%20surface&width=1920&height=1080&seq=1&orientation=landscape')" }}></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="content text-center px-6 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          <span className="text-white">Group 7 </span>
          <span className="text-[#800020]">Data Science Project</span> 
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10">Faculty Computing Student Information Analysis</p>
        <Link to="/features" className="inline-block bg-[#800020] text-white px-8 py-3 rounded-button font-semibold hover:bg-opacity-90 transition-all shadow-lg whitespace-nowrap">
          Explore Features
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;