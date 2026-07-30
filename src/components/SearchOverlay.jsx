import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { menuData } from '../data/menuData';
import './SearchOverlay.css';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const { addToCart } = useCart();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const allItems = menuData.flatMap(section => section.items);
    
    const filtered = allItems.filter(item => 
      item.name.toLowerCase().includes(lowercaseQuery) || 
      item.desc.toLowerCase().includes(lowercaseQuery)
    );
    
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="search-overlay">
      <div className="search-overlay-bg" onClick={onClose}></div>
      <div className="search-container">
        <div className="search-header">
          <div className="search-input-wrapper">
            <svg className="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              ref={inputRef}
              type="text" 
              placeholder="Search for coffee, food, desserts..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button className="clear-btn" onClick={() => setQuery('')} aria-label="Clear search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>
          <button className="close-search-btn" onClick={onClose}>
            Cancel
          </button>
        </div>

        <div className="search-results">
          {query.trim() !== '' && results.length === 0 && (
            <div className="no-results">
              <p>No results found for "{query}"</p>
              <span>Try checking your spelling or using more general terms.</span>
            </div>
          )}
          
          {results.length > 0 && (
            <div className="results-list">
              <h2>Search Results</h2>
              {results.map(item => (
                <div className="search-result-item" key={item.id}>
                  <img src={item.image} alt={item.name} width="100" height="100" />
                  <div className="result-info">
                    <h3>{item.name}</h3>
                    <span className="result-price">{item.price}</span>
                  </div>
                  <button className="add-btn" aria-label={`Add ${item.name} to cart`} onClick={() => {
                    addToCart(item);
                    onClose();
                  }}>
                    Add
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
