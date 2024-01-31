// src/components/ShowList.js
import React from 'react';
import '../App.css';
const ShowList = ({ shows, onSelectShow }) => {
  return (
    <div className="ShowList">
      <h2>List of Shows</h2>
      <div className="show-list-container">
        {shows.map(show => (
          <div key={show.id} className="show-card">
            <img src={show.image?.medium} alt={show.name} />
            <div className="show-details">
              <h3>{show.name}</h3>
              <p>{show.summary}</p>
              <button onClick={() => onSelectShow(show)}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
