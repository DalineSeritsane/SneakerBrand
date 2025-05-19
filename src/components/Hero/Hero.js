import React from 'react';
import './hero.css';
import handIcon from "../Assets/handIcon.jpg";
import hero from "../Assets/hero.jpg";
import arrowIcon from "../Assets/blue_arrow.jpg";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='hand-hand-icon'>
            <p>New </p>
            <img src={handIcon} alt='' />
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className='hero-latest-btn'>
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="" />
        </div>
      </div>

      <div className='hero-right'>
        <img src={hero} alt='' />
      </div>
    </div> 
  );
};

export default Hero;
