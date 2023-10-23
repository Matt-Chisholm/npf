import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import "../fonts/fonts.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <div className='logo'>
          <h1 style={{ fontFamily: "Tilt-Neon", marginLeft: "15%" }}>
            Matt Chisholm
          </h1>
        </div>
        <div className='mobile-menu-toggle' onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <ul
        className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}
        style={{ fontFamily: "Tilt-Neon" }}>
        <li>
          <Link to='/' onClick={toggleMobileMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={toggleMobileMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={toggleMobileMenu}>
            Contact
          </Link>
        </li>
        <li>
          <Link to='/projects' onClick={toggleMobileMenu}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
