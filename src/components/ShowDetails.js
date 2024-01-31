// src/components/ShowDetails.js
import React from 'react';

const ShowDetails = ({ show, onBookTicket, onReturnHome }) => {
  return (
    <div className="ShowDetails">
      <h2>Show Details</h2>
      <div>
        <img src={show.image?.medium} alt={show.name} />
        <h3>{show.name}</h3>
        <p>{show.summary}</p>
        <button onClick={onBookTicket} style={{ marginRight: '10px' }}>Book Now</button>
        <button onClick={onReturnHome}>Go Back to Home</button>
      </div>
    </div>
  );
};

export default ShowDetails;
