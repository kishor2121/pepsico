// ReadMoreContent.js
import React from 'react';
import './ReadMoreContent.css';

function ReadMoreContent({ onClose }) {
  return (
    <div className="read-more-container">
      <div className="read-more-content">
        {/* Your detailed content goes here */}
        {/* For demonstration, I've added sample text */}
        <h2>MOUNTAIN DEW®’S LATEST SUMMER CAMPAIGN WITH HRITHIK ROSHAN</h2>
        <p>National, 14th March 2024: Mountain Dew®, launched its 2024 summer campaign today with a new storyline...</p>
        <p>...</p>
      </div>
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
}

export default ReadMoreContent;
