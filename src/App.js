import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg'; // Assuming this is your logo
import './App.css';
import './style.css';
import Home from './components/Home.js'
import Settings from './components/Settings.js'

function App() {
  useEffect(() => {
    // Show the content and hide the preloader after 3 seconds
    setTimeout(() => {
      document.getElementById('preloader').style.display = 'none';
      document.getElementById('content').style.display = 'block';
    }, 4000); // 3 seconds delay
  }, []);

  return (
    <Router>
      <div>
        {/* Preloader Section */}
        <div id="preloader">
          <img src={logo} alt="Company Logo" id="logo" />
          <div id="company-name">
            <span className="letter">S</span>
            <span className="letter">u</span>
            <span className="letter">r</span>
            <span className="letter">e</span>
          </div>
          <div>In Sure We Trust</div>

        </div>

        {/* Your website content */}
        <div id="content" style={{ display: 'none' }}>
          {/* Navigation Links */}
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/settings">Settings</Link></li>
            </ul>
          </nav>

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
