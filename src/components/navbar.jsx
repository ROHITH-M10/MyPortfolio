import {React, useState} from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles/navbar.css";
import Logo from "../assets/images/logo.png";


function Navbar() {

  const [DropDownStyle, setDropDownStyle] = useState("closeDropDown");
  

  function handleNavbar() {
    if(DropDownStyle === "closeDropDown") {
        setDropDownStyle("openDropDown");
    } else {
        setDropDownStyle("closeDropDown");
    }
  }

  return (
    <>
    <nav className="navbar">
        <div className="logo">
        <AnchorLink href="#home"><img src={Logo} alt="logo" /></AnchorLink>
        </div>
        <div className="nav-links">
            <ul>
                <li><AnchorLink href="#home">Home</AnchorLink></li>
                <li><AnchorLink href="#journey">My Journey</AnchorLink></li>
                <li><AnchorLink href="#projects">Projects</AnchorLink></li>
                <li><AnchorLink href="#contact">Contact</AnchorLink></li>
            </ul>
        </div>
    </nav> 

    <nav className="navbar-mobile">
        <div className="logo">
            <img src={Logo} alt="logo" />
            <i class="fa hamburger" onClick={handleNavbar} >&#xf0c9;</i>
        </div>
        <div className={`nav-links ${DropDownStyle}`}>
            <ul>
                <li><AnchorLink href="#home" onClick={handleNavbar}>Home</AnchorLink></li>
                <li><AnchorLink href="#journey" onClick={handleNavbar}>My Journey</AnchorLink></li>
                <li><AnchorLink href="#projects" onClick={handleNavbar}>Projects</AnchorLink></li>
                <li><AnchorLink href="#contact" onClick={handleNavbar}>Contact</AnchorLink></li>
            </ul>
        </div>
    </nav>

    

    </>
  );
}

export default Navbar;