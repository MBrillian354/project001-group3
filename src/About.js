import React from 'react';

function About() {
  const teamMembers = [
    {
      name: 'Muhammad Brillian Syifa Qolbi',
      university: 'University of Singaperbangsa Karawang',
    },
    {
      name: 'Muhammad Yusuf Firizki',
      university: 'President University',
    },
    {
      name: 'Ni Putu Dadia Yasuarini',
      university: 'President University',
    },
    {
      name: 'Rezha Octaryanto',
      university: 'Universitas Gadjah Mada',
    },
    {
      name: 'Safira Fabilia',
      university: 'Institut Teknologi Bandung',
    },
  ];

  return (
    <div className="container">
      <h2>
        About <span style={{ color: '#6EACDA' }}>Us</span>
      </h2>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <h3>{member.name}</h3>
            <p>({member.university})</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
