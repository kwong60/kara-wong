import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './images/surelogo.png'; 
import './style.css';
import Home from './components/Home.js'
import Settings from './components/Settings.js'
import Navbar from './navbar.js'

function App() {
  useEffect(() => {
    // Show the content and hide the preloader after 3 seconds
    setTimeout(() => {
      document.getElementById('preloader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
    }, 4000); // 3 seconds delay
  }, []);
  useEffect(() => {
    document.getElementById('content').style.display = 'block';
  });

  return (
    <Router>
      <div>
        {/* Preloader Section */}
        <div id="preloader">
          <div id="company-name">
            <span className="letter">S</span>
            <span className="letter">u</span>
            <span className="letter">r</span>
            <span className="letter">e</span>
          </div>
          <div className="slogan">In Sure We Trust</div>
          <img src={logo} alt="Company Logo" id="logo"/>

        </div>
        <div className="header-container">
          <span className="header">IN SURE WE TRUST</span>
        </div>

        {/* Your website content */}
        <div id="content" style={{ display: 'none' }}>
          {/* Navigation Links */}
          <Navbar />

          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
