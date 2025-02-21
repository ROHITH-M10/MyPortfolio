import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles/footer.css";
import Logo from "../assets/images/logo.png";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();

  return (
    <div className="footer">
        <div className="footer-content">
            <div className="footer-links">
                <AnchorLink href="#home">Home</AnchorLink>
                <AnchorLink href="#about">About</AnchorLink>                
                <AnchorLink href="#about">Journey</AnchorLink>
                <AnchorLink href="#projects">Projects</AnchorLink>
                <AnchorLink href="#contact">Contact</AnchorLink>
            </div>
            <div className="footer-logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="footer-text">
            Copyright © {year} | All right reserved by Rohith M
            </div>
        </div>
    </div>
  )
}

export default Footer;
