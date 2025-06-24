// src/About.js
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section id="about" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-white">About </span>
          <span className="text-[#800020]">Us</span>
        </h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

          {/* Muhammad Brillian Syifa Qolbi */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-[#800020]/20 rounded-full flex items-center justify-center mb-4">
              <i className="ri-database-2-line ri-2x text-[#800020]"></i>
            </div>
            <div className="flex justify-center items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold text-[#800020] whitespace-nowrap">
                Muhammad Brillian Syifa Qolbi
              </h3>
              <span className="text-gray-400 text-sm whitespace-nowrap">
                (University of Singaperbangsa Karawang)
              </span>
            </div>
          </div>

          {/* Muhammad Yusuf Firizki */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-[#800020]/20 rounded-full flex items-center justify-center mb-4">
              <i className="ri-bar-chart-box-line ri-2x text-[#800020]"></i>
            </div>
            <div className="flex justify-center items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold text-[#800020] whitespace-nowrap">
                Muhammad Yusuf Firizki
              </h3>
              <span className="text-gray-400 text-sm whitespace-nowrap">
                (President University)
              </span>
            </div>
          </div>

          {/* Ni Putu Dadia Yasuarini */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-[#800020]/20 rounded-full flex items-center justify-center mb-4">
              <i className="ri-ai-generate ri-2x text-[#800020]"></i>
            </div>
            <div className="flex justify-center items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold text-[#800020] whitespace-nowrap">
                Ni Putu Dadia Yasuarini
              </h3>
              <span className="text-gray-400 text-sm whitespace-nowrap">
                (President University)
              </span>
            </div>
          </div>

          {/* Rezha Octaryanto */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-[#800020]/20 rounded-full flex items-center justify-center mb-4">
              <i className="ri-ai-generate ri-2x text-[#800020]"></i>
            </div>
            <div className="flex justify-center items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold text-[#800020] whitespace-nowrap">
                Rezha Octaryanto
              </h3>
              <span className="text-gray-400 text-sm whitespace-nowrap">
                (Universitas Gadjah Mada)
              </span>
            </div>
          </div>

          {/* Safira Fabilia */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-[#800020]/20 rounded-full flex items-center justify-center mb-4">
              <i className="ri-ai-generate ri-2x text-[#800020]"></i>
            </div>
            <div className="flex justify-center items-center gap-2 flex-wrap">
              <h3 className="text-xl font-bold text-[#800020] whitespace-nowrap">
                Safira Fabilia
              </h3>
              <span className="text-gray-400 text-sm whitespace-nowrap">
                (Institut Teknologi Bandung)
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
