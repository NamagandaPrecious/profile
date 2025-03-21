import React from 'react';

function About() {
  return (
    <section id="about" className="section">
      <div className="profile-container">
        <img src="/p.jpg" alt="Precious Wakabi" className="profile-pic" />
        <div className="personal-details">
          <h2>Personal Details</h2>
          <ul>
            <li><i className="fas fa-user"></i> <b>Full Name:</b> Namaganda Wakabi Precious
            <span role="img" aria-label="wave">✨</span>

            </li>
            <li><i className="fas fa-id-card"></i> <b>Registration No:</b> S23B23/092</li>
            <li><i className="fas fa-graduation-cap"></i> <b>Course:</b> BSCS</li>
            <li><i className="fas fa-calendar"></i> <b>Year:</b> Year Two</li>
            <li><i className="fas fa-book"></i> Interest in Biblical studies</li>
            <li><i className="fas fa-heart"></i> <b>Hobbies:</b> Swimming, Dancing, Taking walks, viewing interesting stuff</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;