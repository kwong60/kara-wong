import React, { useEffect, useState } from 'react';
import '../style.css';
import flowerBorder from '../images/flowerborder.png';
import whiteFlowerBorder from '../images/whiteflowerborder.png';
import kara from '../images/kara.jpg';
import whiteSplash from '../images/whitewatercolor.png'
import upperFlowerBorder from '../images/upperflowerborder.png'
import topWaterColor from '../images/topwatercolor.png'
import Navbar from '../navbar.js'
import Button from 'react-bootstrap/Button';


function Home() {
  return (
    <div>
    <Navbar />
    <div style={{ display: 'flex', }}>
      <div className="intro-container">
        <span className="intro-text">Hi! I'm Kara, a junior at Brown University concentrating in Applied Mathematics-Biology and Computer Science. </span>
      </div>
      <div className="purple-box">
      </div>
      <img 
        src={upperFlowerBorder}
        alt="flower border" 
        style={{
          position: 'fixed',
          top: '5%',
          left: '1%',
          width: '230px',
          height: '230px',
          transform: 'rotateY(180deg)',
          zIndex: 5
        }} 
      />

      <img 
        src={flowerBorder}
        alt="flower border" 
        style={{
          position: 'fixed',
          bottom: '0%',
          left: '30%',
          width: '230px',
          height: '230px',
        }} 
      />
       <img 
        src={whiteSplash}
        alt="white watercolor" 
        style={{
          position: 'fixed',
          justifyContent: 'center',
          top: '40%',
          left: '74%',
          width: '400px',
          filter: 'grayscale(35%)',
          transform: 'rotate(90deg)'
        }} 
      />
      <img 
        src={kara}
        alt="kara wong image" 
        className="kara-img"
      />
      <img 
        src={whiteFlowerBorder}
        alt="flowerborder" 
        style={{
          position: 'fixed',
          bottom: '0%',
          left: '57%',
          width: '220px',
          height: '220px',
        }} 
      />
    </div>
    </div>
  );
}


export default Home;
