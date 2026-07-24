import React from 'react';
import './Hero.css';

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="hero-section">
      <div className="hero-bg">
         <img src="/assets/cropped/hero.png" alt="Aurora Cafe Interior" />
         <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <span className="subtitle">GOOD COFFEE, GREAT MOMENTS</span>
        <h1 className="title">Elevate Your<br/>Everyday</h1>
        <p className="description">
          Step into a space where design meets flavor.<br/>
          Coffee crafted with passion, moments<br/>
          shared with purpose.
        </p>
        
        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => setCurrentPage && setCurrentPage('menu')}>
            EXPLORE MENU
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          
          <button className="secondary-btn" onClick={() => setCurrentPage && setCurrentPage('story')}>
            <div className="play-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            WATCH OUR STORY
          </button>
        </div>
        
        <div className="carousel-indicators">
          <span className="indicator active"></span>
          <span className="indicator line"></span>
          <span className="indicator line"></span>
          <span className="indicator line"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
