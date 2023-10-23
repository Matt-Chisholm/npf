import React from "react";
import image from "../images/0_2.png";
import "./Home.css"; // Create a Home.css file for component-specific styles

function Home() {
  return (
    <div className='home-container'>
      <div className='left-section'>
        <div className='content'>
          <div className='title'>Web + Mobile Developer</div>
          <div className='intro-paragraph'>
            Welcome to my portfolio site. I'm passionate about creating web and
            mobile applications that are not only functional but also visually
            appealing. Explore my projects to see what I've been working on.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
