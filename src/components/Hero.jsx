import React, { useState, useEffect } from 'react';
import './Hero.css';

const heroImages = [
  '/assets/cropped/hero.png'
];

const Hero = ({ setCurrentPage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (heroImages.length > 1) {
      const interval = setInterval(nextImage, 5000); // Auto slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className="hero-section">
      {heroImages.map((img, index) => (
        <div 
          key={img}
          className={`hero-bg ${index === currentImageIndex ? 'active' : ''}`}
          style={{ opacity: index === currentImageIndex ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
        >
           <img src={img} alt="Aurora Cafe Interior" />
           <div className="hero-overlay"></div>
        </div>
      ))}
      
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
        
        {heroImages.length > 1 && (
          <div className="slider-controls">
            <button className="slide-btn prev" onClick={prevImage} aria-label="Previous image">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
               </svg>
            </button>
            <div className="carousel-indicators">
              {heroImages.map((_, index) => (
                <span 
                  key={index} 
                  className={`indicator ${index === currentImageIndex ? 'active' : 'line'}`}
                  onClick={() => setCurrentImageIndex(index)}
                ></span>
              ))}
            </div>
            <button className="slide-btn next" onClick={nextImage} aria-label="Next image">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
               </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
