import React from 'react';

function About() {
  const members = [
    { name: 'Muhammad Brillian Syifa Qolbi', university: 'University of Singaperbangsa Karawang' },
    { name: 'Muhammad Yusuf Firizki', university: 'President University' },
    { name: 'Ni Putu Dadia Yasuarini', university: 'President University' },
    { name: 'Rezha Octaryanto', university: 'Universitas Gadjah Mada' },
    { name: 'Safira Fabilia', university: 'Institut Teknologi Bandung' },
  ];

  return (
    <div className="container">
      <h2 style={{ color: '#E2E2B6' }}>
        About Us <span style={{ color: '#6EACDA' }}></span>
      </h2>

<<<<<<< Updated upstream
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
=======
      <div className="team-grid">
        {members.map((member, i) => (
          <div className="team-member" key={i}>
            <h3>{member.name}</h3>
            <p>{member.university}</p>
          </div>
        ))}
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default About;
