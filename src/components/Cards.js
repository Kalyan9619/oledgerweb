import React from 'react';
import './Cards.css';

import './HeroSection.css';
import { ReactVideo } from "reactjs-media";
function Cards() {
  return (
    <body>
    <div class="about-section">
      <div class="inner-width">
        <h1 style={{color:"white"}}>About Us</h1>
        <div class="border"></div>
        <div class="about-section-row">
        <div class="about-section-col" >
          <ReactVideo
          style={{height:"10%"}}
                src="https://www.youtube.com/watch?v=YJB7Y727orc&list=RDGMEM916WJxafRUGgOvd6dVJkeQVMYJB7Y727orc&start_radio=1"
                poster="https://i.postimg.cc/rFnpghLT/history-of-the-piano.jpg"
                primaryColor="red"
                // other props
            />
          </div>
          <div class="about-section-col" >
          <ReactVideo
          style={{height:"10%"}}
                src="https://www.youtube.com/watch?v=YJB7Y727orc&list=RDGMEM916WJxafRUGgOvd6dVJkeQVMYJB7Y727orc&start_radio=1"
                poster="https://i.postimg.cc/rFnpghLT/history-of-the-piano.jpg"
                primaryColor="red"
                // other props
            />
          </div>
       
          <div class="about-section-col" >
          <ReactVideo
          style={{height:"10%"}}
                src="https://www.youtube.com/watch?v=YJB7Y727orc&list=RDGMEM916WJxafRUGgOvd6dVJkeQVMYJB7Y727orc&start_radio=1"
                poster="https://i.postimg.cc/rFnpghLT/history-of-the-piano.jpg"
                primaryColor="red"
                // other props
            />
          </div>
          <div class="about-section-col" >
          <ReactVideo
          style={{height:"10%"}}
                src="https://www.youtube.com/watch?v=YJB7Y727orc&list=RDGMEM916WJxafRUGgOvd6dVJkeQVMYJB7Y727orc&start_radio=1"
                poster="https://i.postimg.cc/rFnpghLT/history-of-the-piano.jpg"
                primaryColor="red"
                // other props
            />
          </div>
        </div>
      </div>
    </div>
</body>
  );
}

export default Cards;
