import React from 'react';

const Features = () => {
  return (
    <section id="features" className="parallax-section bg-[#800020]/10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#800020]/5 to-[#800020]/20"></div>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="content w-full max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-white">Machine Learning </span>
          <span className="text-[#800020]">Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Feature Cards */}
          <div className="feature-card bg-[#1A1A1A]/80 rounded-lg p-8 border-l-4 border-[#800020] backdrop-blur-sm">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#800020]/20 rounded-full mr-4">
                <i className="ri-user-star-line ri-xl text-[#800020]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#800020]">Course Suggestions predictor for Instructor</h3>
            </div>
            <p className="text-gray-300 mb-6">Based on historical performance and student grade trends, this system predicts which courses are best suited for each instructor in the upcoming semester. Recommendations are made by analyzing course difficulty levels, average attendance, and past exam results.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Feature by Hera</span>
              <a href="#" className="px-4 py-2 bg-[#800020] hover:bg-opacity-80 text-white text-sm rounded-button transition-all whitespace-nowrap">
                Explore Analysis
              </a>
            </div>
          </div>
          {/* Add more feature cards here */}
        </div>
      </div>
    </section>
  );
};

export default Features;