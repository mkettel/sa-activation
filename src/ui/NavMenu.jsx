import React, { useState } from 'react';
import FramerMagnetic from '../components/FramerMagnetic';

export const NavMenu = () => {
  // State to track the active menu item
  const [activeItem, setActiveItem] = useState(null);

  // Function to set the active menu item
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="nav-menu">
        <div
          className={`nav-menu__item ${activeItem === 'about' ? 'active' : ''}`}
          onClick={() => handleItemClick('about')}
          >
          <FramerMagnetic>
            <a href="#about">What is Social Amp</a>
          </FramerMagnetic>
        </div>
        <div
          className={`nav-menu__item ${activeItem === 'projects' ? 'active' : ''}`}
          onClick={() => handleItemClick('projects')}
        >
          <FramerMagnetic>
            <a href="#projects">How it works</a>
          </FramerMagnetic>
        </div>
        <div
          className={`nav-menu__item ${activeItem === 'contact' ? 'active' : ''}`}
          onClick={() => handleItemClick('contact')}
        >
          <FramerMagnetic>
            <a href="#contact">Why it matters</a>
          </FramerMagnetic>
        </div>

      </div>
      <VideoElement />
    </>
  );
};

export const VideoElement = () => {

  return (
    <>
      <div className="video-container">
        <div className="video-container__card">

        </div>
      </div>
    </>
  )
}
