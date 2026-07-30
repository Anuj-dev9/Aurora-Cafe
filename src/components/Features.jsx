import React from 'react';
import './Features.css';

const Features = () => {
  const featuresList = [
    {
      icon: <img src="/assets/cropped/feature_1.webp" alt="Feature 1" style={{width: '100%', height: '100%', objectFit: 'contain'}} width="100" height="100" loading="lazy" />,
      title: "PREMIUM COFFEE",
      desc: "Sourced from the world's finest coffee farms."
    },
    {
      icon: <img src="/assets/cropped/feature_2.webp" alt="Feature 2" style={{width: '100%', height: '100%', objectFit: 'contain'}} width="100" height="100" loading="lazy" />,
      title: "SUSTAINABLE",
      desc: "Eco-friendly practices for a better tomorrow."
    },
    {
      icon: <img src="/assets/cropped/feature_3.webp" alt="Feature 3" style={{width: '100%', height: '100%', objectFit: 'contain'}} width="100" height="100" loading="lazy" />,
      title: "COMMUNITY",
      desc: "A space to connect, work and unwind."
    },
    {
      icon: <img src="/assets/cropped/feature_4.webp" alt="Feature 4" style={{width: '100%', height: '100%', objectFit: 'contain'}} width="100" height="100" loading="lazy" />,
      title: "FREE WIFI",
      desc: "Stay connected while you relax."
    },
    {
      icon: <img src="/assets/cropped/feature_5.webp" alt="Feature 5" style={{width: '100%', height: '100%', objectFit: 'contain'}} width="100" height="100" loading="lazy" />,
      title: "DELICIOUS TREATS",
      desc: "Handcrafted treats made fresh daily."
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-container">
          <div className="features-wrapper">
            {featuresList.map((item, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  {item.icon}
                </div>
                <div className="feature-text">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
