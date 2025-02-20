import '../styles/home.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import React from 'react';
import rohith from '../assets/images/rohith.jpg';
import Resume from "../assets/resume/Rohith_M_Resume.pdf";

function Home() {
  return (
    <div className="home" id="home">
        <img src={rohith} alt="rohith" className='avatar'/>
            <div className="name">
                {/* Hello, I'm <br /> */}
                <span>Rohith M</span>
            </div>
            <div className="home-description">
                A passionate programmer and a web developer. 
                I love to explore new technologies and develop 
                software solutions.
            </div>
            <div className="interest">
                <div>Programmer</div>
                <div>Web Developer</div>
                <div>AI/ML Enthusiast</div>
                <div>Designer</div>
            </div>

            <div className="links">
                <div className="contact">
                    <AnchorLink href="#contact">Contact</AnchorLink>
                </div>
                <div className="resume">
                    <a href={Resume} target="_blank" rel="noreferrer">Resume</a>
                </div>
            </div>
        </div>
  );
}

export default Home;
