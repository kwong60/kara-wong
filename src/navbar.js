// src/navbar.js
import React from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/karalogo.png'; 

const Navbar = () => {
    const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
      </ul>

        <div className="navbar-brand">
            <Link to="/">
                <img 
                    src={logo}
                    alt="Kara Wong Logo"
                    />
            </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;