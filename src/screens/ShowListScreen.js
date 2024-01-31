// src/screens/ShowListScreen.js

import React, { useState, useEffect } from 'react';
import { fetchShows } from '../services/api';
import ShowList from '../components/ShowList';

const ShowListScreen = ({ history }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const loadShows = async () => {
      const data = await fetchShows('all');
      setShows(data);
    };
    loadShows();
  }, []);

  const handleSelectShow = (show) => {
    history.push(`/show/${show.id}`);
  };

  return <ShowList shows={shows} onSelectShow={handleSelectShow} />;
};

export default ShowListScreen;
