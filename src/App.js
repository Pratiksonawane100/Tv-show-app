// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";

function App() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const modifiedShows = response.data.map((item) => {
          const { show } = item;
          if (show.summary) {
            // Truncate the description to 50 words or less
            show.summary = truncateDescription(show.summary, 50);
          }
          return show;
        });
        setShows(modifiedShows);
      } catch (error) {
        console.error("Error fetching shows:", error);
      }
    };

    fetchShows();
  }, []);

  const handleShowSelect = (show) => {
    setSelectedShow(show);
  };

  const handleBookTicket = () => {
    // Handle booking ticket logic here
    console.log("Booking ticket for:", selectedShow.name);
  };

  const handleReturnHome = () => {
    setSelectedShow(null); // Reset selectedShow to null to go back to the home screen
  };

  // Function to truncate the description to the specified word count
  const truncateDescription = (description, wordCount) => {
    const words = description.split(' ');
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(' ') + '...';
    } else {
      return description;
    }
  };

  return (
    <div className="App">
      {selectedShow ? (
        <ShowDetails
          show={selectedShow}
          onBookTicket={handleBookTicket}
          onReturnHome={handleReturnHome} // Pass the handleReturnHome function
        />
      ) : (
        <ShowList shows={shows} onSelectShow={handleShowSelect} />
      )}
    </div>
  );
}

export default App;
