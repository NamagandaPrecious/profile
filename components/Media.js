import React from 'react';

function Media() {
  return (
    <section id="media" className="section">
      <h2>Hobbies</h2>
      <div className="media-container">
        <div className="video-wrapper">
          <video controls>
            <source src="/pppp.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-wrapper">
          <iframe 
            src="https://www.youtube.com/embed/pA8xVmc3YmI" 
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Media;