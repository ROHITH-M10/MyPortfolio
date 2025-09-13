import '../styles/home.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from 'react';
import rohith from '../assets/images/rohith3.jpg';

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
        I Build Software, Train AI Models and Craft Creative Digital Designs.
      </div>

      {/* Interests with Staggered Animations */}
      <div className="interest">
        <div data-aos="fade-right" data-aos-delay="100">💻 Programmer</div>
        <div data-aos="fade-left" data-aos-delay="300">🌐 Web Developer</div>
        <div data-aos="fade-right" data-aos-delay="500">🤖 AI/ML Developer</div>
        <div data-aos="fade-left" data-aos-delay="700">🎨 Designer</div>
      </div>

      {/* Links with Bounce Effect */}
      <div className="links" data-aos="fade-up">
        <div className="contact">
          <AnchorLink href="#contact">
            Contact
          </AnchorLink>
        </div>
        <div className="resume">
          <a 
          href="resume/Rohith_M_Resume.pdf"
          target="_blank" rel="noreferrer">
            Resume 📄
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
