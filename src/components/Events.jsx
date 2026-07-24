import React, { useState } from 'react';
import './Events.css';

const Events = () => {
  const [rsvpEvents, setRsvpEvents] = useState([]);

  const handleRSVP = (id) => {
    setRsvpEvents(prev => [...prev, id]);
  };

  const upcomingEvents = [
    {
      id: 1,
      date: 'OCT 15',
      time: '7:00 PM - 10:00 PM',
      title: 'Acoustic Jazz Night',
      desc: 'Join us for a relaxing evening of live acoustic jazz, featuring local trio "The Blue Notes". Specialty coffee cocktails will be served.',
      image: '/assets/cropped/hero.png'
    },
    {
      id: 2,
      date: 'OCT 22',
      time: '10:00 AM - 12:00 PM',
      title: 'Latte Art Masterclass',
      desc: 'Learn the secrets of the perfect pour from our head barista. Limited spots available, includes all materials and tasting.',
      image: '/assets/latte_1784909179484.png'
    },
    {
      id: 3,
      date: 'NOV 05',
      time: '9:00 AM - 2:00 PM',
      title: 'Winter Menu Tasting',
      desc: 'Be the first to try our new winter seasonal drinks and pastries before they officially hit the menu. Free entry with any purchase.',
      image: '/assets/mocha_1784909204523.png'
    }
  ];

  return (
    <div className="page-container events-page">
      <div className="container">
        
        <div className="page-header">
          <h1>Upcoming Events</h1>
          <p>Experience the culture of coffee. Join us for live music, workshops, and community gatherings.</p>
        </div>

        <div className="events-list">
          {upcomingEvents.map(event => (
            <div className="event-card" key={event.id}>
              <div className="event-date-box">
                <span className="event-month">{event.date.split(' ')[0]}</span>
                <span className="event-day">{event.date.split(' ')[1]}</span>
              </div>
              
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              
              <div className="event-details">
                <div className="event-time">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {event.time}
                </div>
                <h2>{event.title}</h2>
                <p>{event.desc}</p>
              </div>
              
              <div className="event-action">
                {rsvpEvents.includes(event.id) ? (
                  <button className="primary-btn" disabled style={{ backgroundColor: 'transparent', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)', opacity: 1 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    RESERVED
                  </button>
                ) : (
                  <button className="primary-btn" onClick={() => handleRSVP(event.id)}>RSVP NOW</button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Events;
