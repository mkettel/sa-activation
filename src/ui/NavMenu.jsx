import React, { useState, useRef, useEffect } from 'react';
import FramerMagnetic from '../components/FramerMagnetic';

export const NavMenu = () => {
  // State to track the active menu item
  const [activeItem, setActiveItem] = useState(null);

  // Ref for the SVG path element
  const path = useRef(null); // reference to the path element
  const parentDiv = useRef(null); // reference to the parent div

  let progress = 0; // progress of the animation
  let reqId = null; // id of the requestAnimationFrame
  let time = Math.PI / 2;
  let x = 0.2; // x position of the control point which sets the curvature of the path

  /**
   * Set the path of the SVG element to the initial value
   */
  useEffect(() => {
    setPath(progress)
    window.addEventListener('resize', () => {
      setPath(progress)
    })
  }, [])

  /**
   * Function to set the path of the SVG element
   * parent div width is used to set the width of the SVG path
   * value is the value of the progress
   * setAttributeNS is used to set the path of the SVG element
   * M sets the x and y coordinates of the starting point of the path
   * Q sets the x and y coordinates of the control point and the x and y coordinates of the end point
  */
  const setPath = (value) => {
    if (parentDiv.current) {
      const divWidth = parentDiv.current.offsetWidth; // Get the width of the parent div
      path.current.setAttributeNS(null, "d", `M 0 20 Q ${divWidth * x} ${20 + value} ${divWidth} 20`);
    }
  };

  /**
   * if the animation is running cancel it and reset the time
   * Calls setPath function with progress value that is updated by mouse movement
   */
  const animateIn = () => {
    // if animation running cancel it
    if (reqId) {
      cancelAnimationFrame(reqId);
      time = Math.PI / 2; // reset time
    }
    setPath(progress);
    reqId = requestAnimationFrame(animateIn);
  }

  /**
   * Mouse Move gets the movement of the mouse in the y direction
   * box is the bounding rectangle of the parent div
   * x is the x position of the mouse in the parent div relative to the width of the parent div
   * progress is the progress of the animation which is updated by the movement of the mouse
   */
  const manageMouseMove = (e) => {
    const { movementY } = e;
    const box = e.target.getBoundingClientRect();
    x = (e.clientX - box.left) / box.width;
    progress += movementY;
  }

  const resetAnimation = () => {
    cancelAnimationFrame(reqId);
    animateOut();
  }

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  /**
   * This function is called when the mouse leaves the parent div which is the bounding rectangle of the menu items
   */
  const animateOut = () => {
    let newProgress = progress * Math.sin(time); // new progress is used to set the path
    setPath(newProgress);

    progress = lerp(progress, 0, 0.04);
    time += 0.2;

    if(Math.abs(progress) > 0.5) {
      reqId = requestAnimationFrame(animateOut)
    } else {
      time = Math.PI / 2;
      progress = 0;
    }
  }

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
        <div className='line' ref={parentDiv}>
          <span onMouseEnter={() => {animateIn()}} onMouseLeave={() => {resetAnimation()}} onMouseMove={(e) => {manageMouseMove(e)}} className='box'></span>
          <svg>
            <path ref={path}></path>
          </svg>
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
