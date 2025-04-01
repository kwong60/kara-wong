import React, { useState } from 'react';
import '../style.css';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import Navbar from '../navbar.js'

import newtonSS from '../images/newtonss.png'

import annotations from '../images/newtonssannotations.png'

import visualStyle from '../images/visualstyleguide.png'
import desktop from '../images/desktop.png'
import tablet from '../images/ipad.png'
import phone from '../images/iphone.png'

import desktopResponsive from '../images/desktopresponsive.png'
import tabletResponsive from '../images/tabletresponsive.png'
import phoneResponsive from '../images/phoneresponsive.png'

function Projects() {  
  return (
  <div >
    <Navbar />
    <div>
      <div className="side-menu">
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#usability">Usability</a></li>
            <li><a href="#visual-redesign">Visual Redesign</a></li>
            <li><a href="#visual-style-guide"><h3>Visual Style Guide</h3></a></li>
            <li><a href="#mock-ups"><h3>Mock-Ups</h3></a></li>
            <li><a href="#responsive-redesign">Responsive Redesign</a></li>
          </ul>
        </div>
      <div className='text-container'>

        <h1>Responsive Redesign: Newton, MA</h1>
        <p>
          There's no place like home! Let's dive into responsive design by examining the website of
          my very own hometown, Newton, MA. 
        </p>
        <p>
          We'll identify usability issues in the original homepage and construct mock-ups of a redesigned homepage to
          address these accessibility problems. At the end, we'll actually create the page using HTML/CSS and deploy it!
        </p>

        <h2 id="overview">Overview</h2>
        <p>
            Pictured below, I chose the official homepage of my hometown because I have always had trouble navigating this page growing up and want our online presence to be something we can be proud of. 
        </p>
        <p>
            <a href="https://www.newtonma.gov" target="_blank">See the Newton, MA Official Website here.</a>
        </p>
        <div className='image-container'>
          <img src={newtonSS} alt="Newton, MA homepage" className="newton-ss"/>
        </div>
        

        <h2 id="usability">Usability</h2>
        <p>
          On the basis of efficiency, learnability, and memorability, let's analyze the usability of the webpage.
        </p>

        <div className='image-container'>
          <img src={annotations} alt="usability annotations of Newton homepage" className="newton-ss-annotations"/>
        </div>

        <p>
         
        </p>

        <p>
          WAVE flagged multiple images and functionality elements on the webpage for missing alt text or an HTML label, respectively. 
          I agree that this inadequacy is an accessibility issue that must be addressed immediately so that those who are vision-impaired can seamlessly navigate the website.
        </p>
        <p>
          Even more pressingly, WAVE marked 47 instances of color contrast errors, which I believe makes sense given the clunky and incohesive color scheme of the homepage. 
          With the color blocking used to separate the backgrounds of different sections, I could see how a heading color could be suitable for one section but create a contrast error for another. 
        </p> 
        <p>  
          WAVE also seems to be confused by the hierarchy of the website which I agree can be unintuitive. Besides a clear heading for each section, this webpage fails to implement any subheadings to establish organization, making it unclear to the user where their attention should be drawn.
        </p>



        <h2 id="visual-redesign">Visual Redesign</h2>
        <p>
          Keeping these usability issues in mind, let's visually redesign the homepage.
        </p>

        <h3 id="visual-style-guide">Visual Style Guide</h3>

        <div className='image-container'>
          <img src={visualStyle} alt="visual style guide" className="newton-ss-annotations"/>
        </div>

        <h3 id="mock-ups">Mock-Ups</h3>

        <p>
          <i>Desktop:</i>

        <div className='image-container'>
          <img src={desktop} alt="desktop mock-up" className="newton-ss-annotations"/>
        </div>
        </p>

        <p>
          <i>Tablet:</i>

        <div className='image-container'>
          <img src={tablet} alt="tablet mock-up" className="newton-ss-annotations"/>
        </div>
        </p>

        <p>
          <i>Phone:</i>

        <div className='image-container'>
          <img src={phone} alt="phone mock-up" className="phone"/>
        </div>
        </p>

        

        <h2 id="responsive-redesign">Responsive Redesign</h2>
        <p>
          The goal of this redesign was to address the usability and accessibility issues
        of the original page by implementing consistent alt text, using a standard color contrast, and establishing a clear hierarchy. 
        </p>
        <p>
          With a cohesive color palette, intuitive navigation, and optimized layout for 
          different screen sizes, this redesign ensures a more inclusive and user-friendly experience for all visitors.
        </p>
        <p>
        Without further ado, here is the responsive redesign! You can interact with different elements by hovering over them.
        </p>

        <p>
          <a href="https://kwong60.github.io/responsive-redesign/" target="_blank">See the Newton, MA redesign here.</a>
        </p>

        <p>
          <i>Desktop:</i>

        <div className='image-container'>
          <img src={desktopResponsive} alt="responsive desktop" className="newton-ss-annotations"/>
        </div>
        </p>

        <p>
          <i>Tablet:</i>

        <div className='image-container'>
          <img src={tabletResponsive} alt="responsive tablet" className="tablet-responsive"/>
        </div>
        </p>

        <p>
          <i>Phone:</i>

        <div className='image-container'>
          <img src={phoneResponsive} alt="responsive phone" className="phone-responsive"/>
        </div>
        </p>

        
      </div>
    </div>
  </div>
  )
  }; 
  

export default Projects;