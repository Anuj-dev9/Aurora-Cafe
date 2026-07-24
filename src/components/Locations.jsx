import React from 'react';
import './Locations.css';

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: 'Aurora Downtown',
      address: 'Connaught Place, New Delhi',
      hours: 'Mon-Sun: 7am - 8pm',
      phone: '+91 11 2345 6789',
      image: '/assets/cropped/hero.png' // Reusing hero image for now
    },
    {
      id: 2,
      name: 'Aurora South Delhi',
      address: 'Hauz Khas Village, New Delhi',
      hours: 'Mon-Sun: 8am - 9pm',
      phone: '+91 11 9876 5432',
      image: '/assets/latte_1784909179484.png' // Reusing latte image for variety
    },
    {
      id: 3,
      name: 'Aurora Weekend Pop-up',
      address: 'Sundar Nursery, New Delhi',
      hours: 'Sat-Sun: 9am - 6pm (Weekends Only)',
      phone: '+91 11 8765 4321',
      image: '/assets/mocha_1784909204523.png'
    }
  ];

  return (
    <div className="page-container locations-page">
      <div className="container">
        <div className="page-header">
          <h1>Our Locations</h1>
          <p>Find your nearest Aurora Cafe and join us for a cup of perfection.</p>
        </div>

        <div className="locations-grid">
          {locations.map(loc => (
            <div className="location-card" key={loc.id}>
              <div className="location-image">
                <img src={loc.image} alt={loc.name} />
              </div>
              <div className="location-info">
                <h2>{loc.name}</h2>
                <div className="info-row">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{loc.address}</span>
                </div>
                <div className="info-row">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{loc.hours}</span>
                </div>
                <div className="info-row">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>{loc.phone}</span>
                </div>
                
                <button className="primary-btn location-btn" onClick={() => alert('Map integration coming soon!')}>
                  GET DIRECTIONS
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
