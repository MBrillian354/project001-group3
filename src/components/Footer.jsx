import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-['Pacifico'] text-[#800020]">Group 7</h1>
            <p className="text-gray-400 mt-2">Data Science Project © 2025</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/shynnyy/final_destination"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#800020] transition-colors">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-github-fill ri-lg"></i>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/amelyaenjelita/"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#800020] transition-colors">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-linkedin-box-fill ri-lg"></i>
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-[#800020] transition-colors">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-twitter-fill ri-lg"></i>
              </div>
            </a>
            <a href="https://www.instagram.com/amelyajlta"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#800020] transition-colors">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-instagram-fill ri-lg"></i>
              </div>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>Designed and developed by Group 7 Data Science Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;