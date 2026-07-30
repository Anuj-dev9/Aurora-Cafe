import React from 'react';
import './OurStory.css';

const OurStory = () => {
  return (
    <div className="page-container story-page">
      <div className="container">
        
        <div className="story-hero">
          <div className="story-content">
            <span className="story-subtitle">OUR ORIGINS</span>
            <h1>More Than Just Coffee.</h1>
            <p className="story-lead">
              Founded in 2018, Aurora Cafe began with a simple mission: to elevate the everyday routine into a moment of pure bliss.
            </p>
            <p>
              We traveled the world to source the most ethical, premium beans, and brought them back to a space designed for comfort, creativity, and community. Every cup we pour is a testament to our dedication to the craft and our love for bringing people together.
            </p>
            <div className="story-stats">
              <div className="stat">
                <h2>8+</h2>
                <span>Years of Excellence</span>
              </div>
              <div className="stat">
                <h2>15</h2>
                <span>Single Origin Beans</span>
              </div>
            </div>
          </div>
          
          <div className="story-images">
            <div className="story-img-main">
              <img src="/assets/cropped/hero.webp" alt="Aurora Cafe Interior" width="600" height="400" loading="lazy" />
            </div>
            <div className="story-img-secondary">
              <img src="/assets/latte_1784909179484.webp" alt="Latte Art" width="400" height="600" loading="lazy" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurStory;
