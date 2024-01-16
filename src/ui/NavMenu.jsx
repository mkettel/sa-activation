import React, { useState } from 'react';

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
          <a href="#about">What is Social Amp</a>
        </div>
        <div
          className={`nav-menu__item ${activeItem === 'projects' ? 'active' : ''}`}
          onClick={() => handleItemClick('projects')}
        >
          <a href="#projects">How it works</a>
        </div>
        <div
          className={`nav-menu__item ${activeItem === 'contact' ? 'active' : ''}`}
          onClick={() => handleItemClick('contact')}
        >
          <a href="#contact">Why it matters</a>
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
