import React from 'react';
import { useCart } from '../context/CartContext';
import './PopularPicks.css';

const PopularPicks = ({ setCurrentPage }) => {
  const { addToCart } = useCart();
  const items = [
    {
      id: 1,
      image: '/assets/latte_1784909179484.png',
      name: 'Aurora Latte',
      price: '₹5.20'
    },
    {
      id: 2,
      image: '/assets/cold_brew_1784909191364.png',
      name: 'Caramel Cold Brew',
      price: '₹5.60'
    },
    {
      id: 3,
      image: '/assets/mocha_1784909204523.png',
      name: 'Mocha Delight',
      price: '₹5.40'
    },
    {
      id: 4,
      image: '/assets/cheesecake_1784909217833.png',
      name: 'Pistachio Cheesecake',
      price: '₹6.30'
    },
    {
      id: 5,
      image: '/assets/croissant_1784909233340.png',
      name: 'Almond Croissant',
      price: '₹4.10'
    }
  ];

  return (
    <section className="popular-section">
      <div className="container">
        <div className="section-header">
          <h2>POPULAR PICKS</h2>
          <a href="#menu" className="view-all" onClick={(e) => { e.preventDefault(); setCurrentPage && setCurrentPage('menu'); }}>
            VIEW FULL MENU
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
        
        <div className="products-slider">
          <div className="products-grid">
            {items.map(item => (
              <div className="product-card" key={item.id}>
                <div className="product-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="product-info">
                  <div className="product-details">
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <button className="add-btn" onClick={() => addToCart(item)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="slider-controls">
            <button className="control-btn" onClick={() => alert('Slider functionality coming soon!')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="control-btn" onClick={() => alert('Slider functionality coming soon!')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPicks;
