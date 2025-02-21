import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './images/surelogo.png'; 
import './style.css';
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Resume from './components/Resume.js'
import Navbar from './navbar.js'

function App() {

  return (
    <Router>
      <div>
        {/* Preloader Section */}
        <div id="preloader" style={{ display: 'none' }}>
          <div id="company-name">
            <span className="letter">S</span>
            <span className="letter">u</span>
            <span className="letter">r</span>
            <span className="letter">e</span>
          </div>
          <div className="slogan">In Sure We Trust</div>
          <img src={logo} alt="Company Logo" id="logo"/>

        </div>
      

        {/* Your website content */}
        <div id="content">
          {/* Navigation Links */}

          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
