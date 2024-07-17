import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="welcome-title animate-title">Cyberbullying Detection</h1>
        <h2 className="tagline animate-tagline">Empowering Safer Online Spaces</h2>
        <p className="project-info">
          Our project focuses on detecting Cyberbullying through Advanced NLP and Machine Learning techniques. 
          By analyzing text and audio inputs, we aim to identify harmful content and promote a healthier online environment.
        </p>
        <p className="details-info">
          Here you can find the details of the project, predict any text and audio, and if you have any queries, 
          you can contact me through my details
        </p>
        <ul className="contact-info">
          <li><strong>Name:</strong> Vignesh Maram</li>
          <li><strong>ID:</strong> 2021BCS-039</li>
          <li><strong>Instituite:</strong> ABV-IIITM Gwalior</li>
          <li className="icon-list">
            <a href="mailto:vinnumaram@gmail.com" aria-label="Email" className="email-icon">
              <FaEnvelope className="icon" />
            </a>
            <a href="https://github.com/Vignesh-2109/Cyberbullying-Detection" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="github-icon">
              <FaGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/vignesh-maram-b1209b147/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="linkedin-icon">
              <FaLinkedin className="icon" />
            </a>
            <a href="tel:+917801026291" aria-label="Phone" className="phone-icon">
              <FaPhone className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
