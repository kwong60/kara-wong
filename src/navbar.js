// src/navbar.js
import React from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/navsurelogo.png'; 

const Navbar = () => {
    const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
      </ul>

        <div className="navbar-brand">
            <Link to="/">
                <img 
                    src={logo}
                    alt="Brand Logo"
                    />
            </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/settings" className={location.pathname === '/settings' ? 'active' : ''}>Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;