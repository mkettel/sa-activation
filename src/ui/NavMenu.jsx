import React, { useState, useRef, useEffect } from 'react';
import FramerMagnetic from '../components/FramerMagnetic';

export const NavMenu = () => {
  // State to track the active menu item
  const [activeItem, setActiveItem] = useState(null);

  // Ref for the SVG path element
  const path = useRef(null);
  const parentDiv = useRef(null);

  let progress = 0;
  let reqId = null;
  let time = Math.PI / 2;
  let x = 0.2;

  useEffect(() => {
    setPath(progress)
    window.addEventListener('resize', () => {
      setPath(progress)
    })
  }, [])

  const setPath = (value) => {
    if (parentDiv.current) {
      const divWidth = parentDiv.current.offsetWidth; // Get the width of the parent div
      path.current.setAttributeNS(null, "d", `M 0 20 Q ${divWidth * x} ${20 + value} ${divWidth} 20`);
    }
  };

  const animateIn = () => {
    // if animation running cancel it
    if (reqId) {
      cancelAnimationFrame(reqId);
      time = Math.PI / 2; // reset time
    }
    setPath(progress);
    reqId = requestAnimationFrame(animateIn);
  }

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

  const animateOut = () => {
    let newProgress = progress * Math.sin(time);
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
