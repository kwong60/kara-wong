import React, { useState } from 'react';
import '../style.css';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import Navbar from '../navbar.js'

import googledefault from '../images/google/googledefault.png'
import googlefocused from '../images/google/googlefocused.png'
import googlequery from '../images/google/googlequery.png'
import googleunfocused from '../images/google/googleunfocused.png'

import googlemobileunfocused from '../images/google/googlemobileunfocused.PNG'
import googlemobilefocused from '../images/google/googlemobilefocused.png'
import googlemobilequery from '../images/google/googlemobilequery.PNG'

import photoshopunactivated from '../images/photoshop/photoshopunactivated.png'
import photoshopunfocused from '../images/photoshop/photoshopunfocused.png'
import photoshopsearch from '../images/photoshop/photoshopsearch.png'
import photoshopfocused from '../images/photoshop/photoshopfocused.png'
import photoshopquery from '../images/photoshop/photoshopquery.png'

import igdesktopunfocused from '../images/instagram/igdesktopunfocused.png'
import igdesktopfocused from '../images/instagram/igdesktopfocused.png'
import igdesktopquery from '../images/instagram/igdesktopquery.png'

import igunfocused from '../images/instagram/igunfocused.PNG'
import igfocused from '../images/instagram/igfocused.PNG'
import igquery from '../images/instagram/igquery.PNG'

import inputs from '../inputs.pdf'
import outputs from '../outputs.pdf'

import mouseuser1 from '../images/mouseuser1.png'
import mouseuser2 from '../images/mouseuser2.png'
import keyboarduser1 from '../images/keyboarduser1.png'
import keyboarduser2 from '../images/keyboarduser2.png'

import googleredesign from '../images/googleredesign.png'

function Projects() {  
  return (
  <div >
    <Navbar />
    <div>
      <div className="side-menu">
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#applications">Applications</a></li>
            <li><a href="#google-desktop"><h3>Google Desktop</h3></a></li>
            <li><a href="#google-mobile"><h3>Google Mobile</h3></a></li>
            <li><a href="#photoshop"><h3>Photoshop</h3></a></li>
            <li><a href="#instagram-desktop"><h3>Instagram Desktop</h3></a></li>
            <li><a href="#instagram-mobile"><h3>Instagram Mobile</h3></a></li>
            <li><a href="#inputs">Inputs</a></li>
            <li><a href="#outputs">Outputs</a></li>
            <li><a href="#state-models">State Models</a></li>
            <li><a href="#reflection">Reflection</a></li>
          </ul>
        </div>
      <div className='text-container'>

        <h1>Case Study: Search Bar</h1>
        <p>
          What really brings the world to your fingertips? With infinite troves of knowledge circulating the world wide web,
          the search bar is often the unsung hero of user interfaces. From navigating complex websites to discovering new information,
          the search bar can take you where you want to go, when you want to go there. But have we really mastered its design?
        </p>

        <h2 id="overview">Overview</h2>
        <p>
          In this case study, we’ll explore the subtle yet powerful role the search bar plays in shaping the user experience. First, we’ll examine
          a variety of inputs (mouse, keyboard, and touch) and outputs (visual styles, focus order, and screen readability). <br />
        </p>
        <p>
          Next, we'll investigate the state models for both mouse and keyboard users, probing some intentional trade-offs we could make to 
          the user experience. We'll discuss how design can either enhance or hinder usability and uncover how thoughtful design choices can 
          make a world of difference for the user.
        </p>

        <h2 id="applications">Applications</h2>
        <p>
          We'll explore the search bar through the lens of three different, well-established applications: Google, Photoshop, and Instagram.
          Here, we survey these three applications in various states, accepting various inputs.
        </p>

        <h3 id="google-desktop">Google Desktop</h3>
        <div className='image-container'>
          <figure>
            <img src={googledefault} alt="Google Search on default open" className="google-img"/>
            <figcaption>state: default open</figcaption>
          </figure>
          <figure>
            <img src={googleunfocused} alt="Google Search unfocused" className="google-img"/>
            <figcaption>state: unfocused</figcaption>
          </figure>
          <figure>
            <img src={googlefocused} alt="Google Search focused" className="google-img"/>
            <figcaption>state: focused</figcaption>
          </figure>
          <figure>
            <img src={googlequery} alt="Google Search with entered query" className="google-img"/>
            <figcaption>state: query entered</figcaption>
          </figure>
        </div>

        <h3 id="google-mobile">Google Mobile</h3>
        <div className='image-container'>
          <figure>
            <img src={googlemobileunfocused} alt="Google Search mobile unfocused/on default open" className="google-img-mobile"/>
            <figcaption>state: unfocused/default open</figcaption>
          </figure>
          <figure>
            <img src={googlemobilefocused} alt="Google Search mobile focused" className="google-img-mobile"/>
            <figcaption>state: focused</figcaption>
          </figure>
          <figure>
            <img src={googlemobilequery} alt="Google Search mobile with entered query" className="google-img-mobile"/>
            <figcaption>state: query entered</figcaption>
          </figure>
        </div>

        <h3 id="photoshop">Photoshop</h3>
        <div className='image-container'>
          <figure>
            <img src={photoshopunactivated} alt="Photoshop Search unactivated" className="google-img"/>
            <figcaption>state: unactivated (top right corner)</figcaption>
          </figure>
          <figure>
            <img src={photoshopsearch} alt="Photoshop Search hover" className="google-img"/>
            <figcaption>state: hover</figcaption>
          </figure>
          <figure>
            <img src={photoshopunfocused} alt="Photoshop Search unfocused" className="google-img"/>
            <figcaption>state: unfocused</figcaption>
          </figure>
          <figure>
            <img src={photoshopfocused} alt="Photoshop Search focused" className="google-img"/>
            <figcaption>state: focused</figcaption>
          </figure>
          <figure>
            <img src={photoshopquery} alt="Photoshop Search with entered query" className="google-img"/>
            <figcaption>state: query entered</figcaption>
          </figure>
        </div>

        <h3 id="instagram-desktop">Instagram Desktop</h3>
        <div className='image-container'>
          <figure>
            <img src={igdesktopunfocused} alt="Instagram Search unfocused" className="ig-img"/>
            <figcaption>state: unfocused</figcaption>
          </figure>
          <figure>
            <img src={igdesktopfocused} alt="Instagram Search focused/default open" className="ig-img"/>
            <figcaption>state: focused/default open</figcaption>
          </figure>
          <figure>
            <img src={igdesktopquery} alt="Instagram Search with entered query" className="ig-img"/>
            <figcaption>state: query entered</figcaption>
          </figure>
        </div>

        <h3 id="instagram-mobile">Instagram Mobile</h3>
        <div className='image-container'>
          <figure>
            <img src={igunfocused} alt="Instagram Search mobile unfocused/default open" className="google-img-mobile"/>
            <figcaption>state: unfocused/default open</figcaption>
          </figure>
          <figure>
            <img src={igfocused} alt="Instagram Search mobile focused" className="google-img-mobile"/>
            <figcaption>state: focused</figcaption>
          </figure>
          <figure>
            <img src={igquery} alt="Instagram Search mobile with entered query" className="google-img-mobile"/>
            <figcaption>state: query entered</figcaption>
          </figure>
        </div>

        <h2 id="inputs">Inputs</h2>
        <p>
          Let's first compare how these three applications accept and interact with different types of input while keeping in mind the purpose of
          each application. For instance, Google's primary purpose is to serve as a search engine, so it may have different features than Photoshop,
          whose primary purpose is to alter media.
        </p>
        <div className='image-container'>
            <iframe src={inputs} alt="table considering different inputs (mouse, keyboard, touch) to Google, Photoshop, and Instagram"  className='input-table'/>
        </div>
        

        <h2 id="outputs">Outputs</h2>
        <p>
          Next, let's evaluate how the three applications react to these inputs in terms of both visual and accessible features. Note that Narrator (Windows) was used
          for the screen reader analysis.
        </p>
        <div className='image-container'>
            <iframe src={outputs} alt="table considering different outputs (visual styles, focus order, screen readability) to Google, Photoshop, and Instagram"  className='output-table'/>
        </div>

        <h2 id="state-models">State Models</h2>
        <p>
          We can create state models to visualize how both mouse and keyboard users can interact with the Google search bar in different states.
        </p>
        <h3>Search Bar Component: Mouse Users</h3>
        <img src={mouseuser1} alt="state model for mouse users" style={{width: '85%', alignSelf: 'center'}}/>
        <h3 style={{marginTop: '7%'}}>Search Bar Component: Keyboard Users</h3>
        <img src={keyboarduser1} alt="state model for keyboard users" style={{width: '85%', alignSelf: 'center'}}/>

        <p style={{marginTop: '4%'}}>
          An intentional trade-off we could make is adding a submit button to the search bar, allowing mouse users to easily submit their queries like so:
        </p>

        <img src={googleredesign} alt="redesign of Google search bar" style={{width: '85%', alignSelf: 'center'}}/>

        <p style={{marginTop: '4%'}}>
          On one hand, the colored magnifying glass icon would allow mouse users to easily and accessibly submit their queries with one click. On the other hand,
          the extra icon and its location may be less intuitive for keyboard users, creating a slightly greater cognitive load. < br/>
        </p>

        <p>
          Ideally, however, the component would be able to handle both mouse and keyboard feedback so that keyboard users would not have to learn
          this new feature. This choice would mainly impact the transition between active and default states like so:
        </p>
       

        <h3>Search Bar Component: Mouse Users</h3>
        <img src={mouseuser2} alt="trade-off state model for mouse users" style={{width: '85%', alignSelf: 'center'}}/>
        <h3 style={{marginTop: '7%'}}>Search Bar Component: Keyboard Users</h3>
        <img src={keyboarduser2} alt="trade-off state model for keyboard users" style={{width: '85%', alignSelf: 'center'}}/>


        <h2 id="reflection">Reflection</h2>
        <p>Overall, all of the components I observed were relatively usable and accessible, accepting each input in an intuitive 
          way and providing multiple outputs to communicate with a wide variety of users. It makes sense that Google
          outperformed Photoshop and Instagram because Google is designed to be a search engine, whereas Photoshop and Instagram both
          have search features as added components for the user's convenience. <br />
        </p>

        <p style={{marginTop: '2%'}}>
          One unaddressed accessibility consideration that I tried to account for is neurodiversity. For instance, 
          added tooltips with written explanations may be helpful for those who do not find icons to be intuitive. By providing 
          greater accessibility for mouse users (while ideally maintaining keyboard accessbility), I also hope to target the mismatched
          human interaction for users who want to explore the internet but do not have the dexterity to input their queries through keyboard.
          <br />
        </p>

        <p style={{marginTop: '2%'}}>
          A positive accessibility feature I came across was the visually separated blue border Photoshop provides on click, providing a clearer 
          indication of focus to those visually-impaired. An inaccessibility I came across was the alternating up and down arrow 
          navigation on Instagram, an inefficient drawback for those who rely on keyboard navigation. It seems as though mouse users were the most
          commonly prioritized, with screen reader users least prioritized. This design flaw can be especially detrimental for users who cannot pinpoint
          the exact location of their cursor.

          <br />
        </p>

        <p style={{marginTop: '2%', marginBottom: '5%'}}>Above all, this case study helped me realize that the effort to design inclusive spaces is evolving but still incomplete; 
          our world is still very much in-progress, challenging us to think critically about how we can define accessibility to encapsulate 
          every individual — no matter how many standard deviations away — in the bell curve of "normal". 
          <br />
        </p>
      </div>
    </div>
  </div>
  )
  }; 
  

export default Projects;