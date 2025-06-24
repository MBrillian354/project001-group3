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
        <div className="gap-8 justify-items-center">

          {/* Muhammad Brillian Syifa Qolbi */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-[#800020]/20 rounded-full flex items-center justify-center mb-4">
              <i className="ri-database-2-line ri-2x text-[#800020]"></i>
            </div>
            <div className="flex justify-center items-baseline gap-2">
              <h3 className="text-xl font-bold text-[#800020]">Muhammad Brillian Syifa Qolbi</h3>
              <p className="text-gray-400 text-sm">(University of Singaperbangsa Karawang)</p>
            </div>
          </div>

          {/* Muhammad Yusuf Firizki */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-[#800020]/20 rounded-full flex items-center justify-center mb-4">
              <i className="ri-bar-chart-box-line ri-2x text-[#800020]"></i>
            </div>
            <div className="flex justify-center items-baseline gap-2">
              <h3 className="text-xl font-bold text-[#800020]">Muhammad Yusuf Firizki</h3>
              <p className="text-gray-400 text-sm">(President University)</p>
            </div>
          </div>

          {/* Ni Putu Dadia Yasuarini */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-[#800020]/20 rounded-full flex items-center justify-center mb-4">
              <i className="ri-ai-generate ri-2x text-[#800020]"></i>
            </div>
            <div className="flex justify-center items-baseline gap-2">
              <h3 className="text-xl font-bold text-[#800020]">Ni Putu Dadia Yasuarini</h3>
              <p className="text-gray-400 text-sm">(President University)</p>
            </div>
          </div>

          {/* Rezha Octaryanto */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-[#800020]/20 rounded-full flex items-center justify-center mb-4">
              <i className="ri-ai-generate ri-2x text-[#800020]"></i>
            </div>
            <div className="flex justify-center items-baseline gap-2">
              <h3 className="text-xl font-bold text-[#800020]">Rezha Octaryanto</h3>
              <p className="text-gray-400 text-sm">(Universitas Gadjah Mada)</p>
            </div>
          </div>

          {/* Safira Fabilia */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-[#800020]/20 rounded-full flex items-center justify-center mb-4">
              <i className="ri-ai-generate ri-2x text-[#800020]"></i>
            </div>
            <div className="flex justify-center items-baseline gap-2">
              <h3 className="text-xl font-bold text-[#800020]">Safira Fabilia</h3>
              <p className="text-gray-400 text-sm">(Institut Teknologi Bandung)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;