import '../styles/home.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from 'react';
import rohith from '../assets/images/rohith.jpg';
import Resume from "../assets/resume/Rohith_M_Resume.pdf";

function Home() {
  return (
    <div className="home" id="home">
      {/* Profile Image with Flip Animation */}
      <img
        src={rohith}
        alt="rohith"
        className='avatar'
        data-aos="fade-down"
        data-aos-duration="1500"
        />


      {/* Name with Zoom Effect */}
      <div className="name">
        <span data-aos="zoom-in" data-aos-duration="1000">
          Rohith M
        </span>
      </div>

      {/* Description with Fade and Delay */}
      <div className="home-description" data-aos="fade-up" data-aos-delay="300">
        A passionate programmer and a web developer.  
        I love to explore new technologies and develop  
        software solutions.
      </div>

      {/* Interests with Staggered Animations */}
      <div className="interest">
        <div data-aos="fade-right" data-aos-delay="100">💻 Programmer</div>
        <div data-aos="fade-left" data-aos-delay="300">🌐 Web Developer</div>
        <div data-aos="fade-right" data-aos-delay="500">🤖 AI/ML Enthusiast</div>
        <div data-aos="fade-left" data-aos-delay="700">🎨 Designer</div>
      </div>

      {/* Links with Bounce Effect */}
      <div className="links" data-aos="fade-up" data-aos-delay="900">
        <div className="contact">
          <AnchorLink href="#contact" data-aos="zoom-in" data-aos-delay="1100">
            Contact
          </AnchorLink>
        </div>
        <div className="resume" data-aos="zoom-in" data-aos-delay="1300">
          <a href={Resume} target="_blank" rel="noreferrer">
            Resume 📄
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
