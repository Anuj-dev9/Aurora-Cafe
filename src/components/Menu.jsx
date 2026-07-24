import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { menuData } from '../data/menuData';
import DomeGallery from './DomeGallery';
import './Menu.css';

const Menu = () => {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'Coffee', 'Non-Coffee', 'Tea', 'Food', 'Dessert'];

  const filteredData = activeTab === 'All' 
    ? menuData 
    : menuData.filter(section => section.category === activeTab);

  const galleryImages = menuData.flatMap(section => 
    section.items.map(item => ({ src: item.image, alt: item.name }))
  );

  return (
    <div className="menu-page">
      <div className="container">
        
        <div className="menu-hero">
          <div className="menu-hero-text">
            <h1>Our Menu</h1>
            <p>A curated selection of handcrafted drinks and delicious bites: made for every mood.</p>
          </div>
          <div className="menu-hero-gallery" style={{ height: '600px', width: '100%', position: 'relative', overflow: 'hidden', borderRadius: '20px', marginTop: '2rem', marginBottom: '2rem' }}>
            <DomeGallery 
              images={galleryImages} 
              grayscale={false} 
              overlayBlurColor="#0a0a0a" 
            />
          </div>
        </div>

        <div className="menu-filters">
          {tabs.map(tab => (
            <button 
              key={tab} 
              className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="menu-content">
          {filteredData.map((section, idx) => (
            <div className="menu-category" key={idx}>
              <div className="category-header">
                <div className="category-title">
                  <div className="category-icon">
                    {section.icon}
                  </div>
                  <h2>{section.category}</h2>
                </div>
                <a href="#viewall" className="view-all-link">
                  View all
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
              
              <div className="menu-grid">
                {section.items.map(item => (
                  <div className="menu-item-card" key={item.id}>
                    <div className="menu-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="menu-item-content">
                      <div>
                        <div className="menu-item-header">
                          <h3>{item.name}</h3>
                          {item.popular && <span className="popular-badge">Popular</span>}
                        </div>
                        <p className="menu-item-desc">{item.desc}</p>
                      </div>
                      <div className="menu-item-footer">
                        <span className="menu-item-price">{item.price}</span>
                        <button className="add-icon-btn" onClick={() => addToCart(item)}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Menu;
