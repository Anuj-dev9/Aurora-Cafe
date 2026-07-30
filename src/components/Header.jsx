import React from 'react';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = ({ currentPage, setCurrentPage, setIsSearchOpen }) => {
  const { getItemCount, setIsCartOpen } = useCart();
  return (
    <header className="header">
      <div className="header-container container">
        <div className="logo" onClick={() => setCurrentPage('home')} style={{cursor: 'pointer'}}>
          <div className="logo-icon" style={{border: 'none', background: 'transparent'}}>
             <img src="/assets/cropped/logo.webp" alt="Logo" style={{height: '100%', objectFit: 'contain'}} width="40" height="40" />
          </div>
          <div className="logo-text">
            <h1>AURORA</h1>
            <span>CAFE</span>
          </div>
        </div>
        
        <nav className="nav-links">
          <a href="#home" className={currentPage === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>Home</a>
          <a href="#menu" className={currentPage === 'menu' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentPage('menu'); }}>Menu</a>
          <a href="#locations" className={currentPage === 'locations' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentPage('locations'); }}>Locations</a>
          <a href="#story" className={currentPage === 'story' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentPage('story'); }}>Our Story</a>
          <a href="#events" className={currentPage === 'events' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentPage('events'); }}>Events</a>
          <a href="#contact" className={currentPage === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>Contact</a>
        </nav>
        
        <div className="header-actions">
          <button className="icon-btn" onClick={() => setIsSearchOpen(true)} aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="icon-btn" onClick={() => setIsCartOpen(true)} style={{ position: 'relative' }} aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            {getItemCount() > 0 && (
              <span className="cart-badge" style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                backgroundColor: 'var(--accent-gold)',
                color: '#000',
                fontSize: '0.65rem',
                fontWeight: 'bold',
                width: '16px',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%'
              }}>
                {getItemCount()}
              </span>
            )}
          </button>
          <button className="order-btn" onClick={() => setCurrentPage('menu')}>
            ORDER ONLINE
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
