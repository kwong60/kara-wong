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
