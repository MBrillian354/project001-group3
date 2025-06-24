import React from 'react';

const TargetUsers = () => {
  return (
    <section id="target" className="parallax-section">
      <div className="parallax-bg opacity-40" style={{ backgroundImage: "url('https://readdy.ai/api/search-image?query=elegant%20arrangement%20of%20dark%20red%20roses%20in%20luxurious%20interior%2C%20low%20key%20photography%2C%20moody%20atmosphere%2C%20dramatic%20shadows%2C%20professional%20studio%20lighting%2C%20artistic%20floral%20composition%20with%20black%20background&width=1920&height=1080&seq=3&orientation=landscape')" }}></div>
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="content w-full max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-white">Target </span>
          <span className="text-[#800020]">Users</span> 
        </h2>
        <p className="text-xl text-center text-gray-200 mb-16 max-w-4xl mx-auto">
          This project is designed for data analysts, decision-makers, and organizations looking to leverage insights from their data. With an intuitive interface and powerful Machine Learning backend, it fits both technical and non-technical users.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* User Cards */}
          <div className="feature-card bg-[#1A1A1A]/80 rounded-lg p-8 text-center">
            <div className="w-20 h-20 mx-auto flex items-center justify-center bg-[#800020]/20 rounded-full mb-6">
              <i className="ri-line-chart-line ri-2x text-[#800020]"></i>
            </div>
            <h3 className="text-2xl font-bold text-[#800020] mb-4">Data Analysts</h3>
            <p className="text-gray-300">Technical professionals who need powerful tools to extract meaningful insights from educational data. Our platform provides advanced analytics capabilities with intuitive visualization tools.</p>
          </div>
          {/* Add more user cards here */}
        </div>
      </div>
    </section>
  );
};

export default TargetUsers;