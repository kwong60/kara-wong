import React, { useState } from 'react';
import '../style.css';
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import Navbar from '../navbar.js'

import annotations from '../images/cit_elevator_annotations.png'
import grayson from '../images/grayson.png'
import ceci from '../images/ceci.png'
import storyboard from '../images/storyboard.png'

function Projects() {  
  return (
  <div >
    <Navbar />
    <div>
      <div className="side-menu">
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#annotations">Annotations</a></li>
            <li><a href="#field-research">Field Research</a></li>
            <li><a href="#observations"><h3>Observations</h3></a></li>
            <li><a href="#interviews"><h3>Interviews</h3></a></li>
            <li><a href="#personas">Personas</a></li>
            <li><a href="#storyboard">Storyboard</a></li>
          </ul>
        </div>
      <div className='text-container'>

        <h1>Storyboard: CIT Elevator</h1>
        <p>
          Going up! Let's delve into the efficiency of the CIT elevator button interface through 
          the eyes of the users. In our story, it's not just about reaching your destination, but 
          ensuring the entire journey feels intuitive and seamless with every press of a button.
        </p>

        <h2 id="overview">Overview</h2>
        <p>
          We will explore the usability of the CIT elevator by going straight to the people who use it,
          helping inform our understanding of user behavior and design improvements. First, we'll annotate
          the elevator interface as is, examining its layout and functionality. Next, we'll interview both casual
          and everyday users of this interface to gain insights into a wide variety of experiences. <br />
        </p>
        <p>
          From there, we will craft personas based on our observations and interviews. These personas will culminate into
          a final storyboard, acting as a guide for potential improvements in the UI design to ensure that the interface 
          meets the needs of real users. 
        </p>

        <h2 id="annotations">Annotations</h2>
        <p>
          First, let's get a feel for the CIT elevator interface by analyzing the current interactive components. 
        </p>

        <div className='image-container'>
          <img src={annotations} alt="annotations on CIT elevator interface" className="annotations-img"/>
        </div>

        <p>

          We can see the CIT elevator interface generally follows a typical elevator layout. With the intention of 
          bringing users to the correct floor as quickly as possible, the button interface allows users to input
          their desired destination to direct the elevator's motion. <br />
        </p>
        <br />
        <p>
          <i>Key Components:</i> <br />
          - buttons: only source for input <br/>
          - button lights: visibly displays elevator's response to input <br/>
          - labels (numerical and Braille): denotes which button corresponds to which floor <br/>
        </p>


        <h2 id="field-research">Field Research</h2>
        <p>
          Next, let's observe three users and talk with them about their user experience.
        </p>

        <h3 id="observations">Observations</h3>

        <p>
          - pushed rear door button when trying to hold front door open <br/>
          - physical exclamation of confusion <br/>
          <br />
          - repeatedly pushed 4th floor button when light kept turning off (after 5:00pm) <br/>
          - attempted swipe but did not seem to have access <br/>
          <br />
          - brief, &lt; 1 second interaction to navigate to second floor (no hesitation) <br/>
        </p>

        <h3 id="interviews">Interviews</h3>

        <p>
         <i> *please note all interviewees' names have been altered for anonymity</i> <br />
         <br />
         <b>1) What is your previous experience with the CIT elevator?</b> <br />
         <i>Jonah:</i>  little to none <br />

         <i>Natalie:</i>  not a CS concentrator so not very often <br />

         <i>Jerome:</i>  rides elevator daily <br />
         <br />

         <b>2) How easy or difficult was it for you to understand how the button interface worked? Did you have any expectations about how it should behave?</b> <br />
         <i>Jonah:</i>  confused by the front and rear door buttons; expected front door to open but rear door opened instead <br />
         <i>Natalie:</i>  frustrated with button lights turning off and swipe getting rejected with no feedback as to why; expected elevator to accept at least one <br />
         <i>Jerome:</i>  assumed normal elevator behavior with functional buttons <br />
         <br />

         <b>3) What part of using the elevator button interface felt most intuitive to you? Why?</b> <br />
         <i>Jonah:</i>  numbers were universally easy to understand <br />
         <i>Natalie:</i>  numbers were helpful, but not if you still can't access the floor <br />
         <i>Jerome:</i>  button labels were intuitive; pressed "2" and was brought to second floor <br/>
         <br />

         <b>4) Is there anything about the button layout or arrangement that you found particularly unhelpful during your experience?</b> <br />
         <i>Jonah:</i>  front and rear door buttons look identical at first glance (only difference is the bar down the middle of the front door icons); forces user to take more time to find/read the text labels <br />
         <i>Natalie:</i>  irritated that swipe mechanism turned green despite rejecting their swipe <br />
         <i>Jerome:</i>  helpful grid-like interface sorted by level; noted possibility for confusion with front and rear door buttons <br/>
         <br />

         <b>5) How important is it for you to feel confident in the choice you're making with the elevator button interface?</b> <br />
         <i>Jonah:</i>  not too important, but would be nice not to leave someone behind by accident <br />
         <i>Natalie:</i>  not too important; just wanted an open and accessible place to study <br />
         <i>Jerome:</i> pretty important; would like to know where they are going
        </p>
        <br/>
        <p>
          It seems like these users, especially those who do not frequent the CIT, found the grid-like number layout intuitive but were confused by the CIT elevator-specific functions like 
          the double-door opening mechanisms and the swipe access. In general, it looks like users would appreciate a greater distinction between front/rear
          door functions as well as visible feedback for swipe access.
        </p>

        <h2 id="personas">Personas</h2>
        <p>
          Now, we'll create personas using the feedback and reactions we obtained from our interviews. In doing so, we can highlight
          how some ambiguities in the CIT elevator button interface could inconvenience users in real life.
        </p>
    
        <p>
        Grayson's persona encapsulates the challenges between good intentions and the natural awkwardness of everday situations caused 
        by confusing UI like the CIT elevator front/rear door buttons.
        </p>

        <div className="image-container">
        <figure>
            <img src={grayson} alt="Good-Samaritan Grayson persona" className="persona"/>
            <figcaption>Good-Samaritan Grayson, who does not go to Brown, is trying to hold the elevator door for a person he glimpsed approaching. He, like many others,
              cannot figure out the door-opening mechanism right away and worries that the door will close soon. 
            </figcaption>
        </figure>
        </div>

        <br/>
        <p>
        Ceci's persona represents the stress of someone in a hurry to reach their destination, whether to cram for an exam or 
        arrive to a meeting on time. Inaccessible UI that is difficult to understand can become even more frustrating in that headspace.
        </p>

        <div className="image-container">
        <figure>
            <img src={ceci} alt="Cynical Ceci persona" className="persona"/>
            <figcaption>Cynical Ceci, a pure math concentrator, is trying to find a study spot to cram for her Real Analysis exam tomorrow. 
              Being uninvolved in CS, she does not understand the button light and swiping mechanisms.
            </figcaption>
        </figure>
        </div>

        <h2 id="storyboard">Storyboard</h2>
        <p>
          Introducing Good-Samaritan Grayson's story!
        </p>
        <img src={storyboard} alt="Good-Samaritan Grayson's storyboard" style={{width: '50%', alignSelf: 'center', paddingBottom: '1%'}}/>
        
      </div>
    </div>
  </div>
  )
  }; 
  

export default Projects;