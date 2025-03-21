import React from 'react';
//import "@fortawesome/fontawesome-free/css/all.min.css";

function Contact() {
  
  return (
    <section id="contact" className="section">
      <h2>Contact Information 📬</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> <a href="mailto:preciouswakabi@gmail.com">preciouswakabi@gmail.com</a></p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="social-btn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-btn">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="social-btn">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;