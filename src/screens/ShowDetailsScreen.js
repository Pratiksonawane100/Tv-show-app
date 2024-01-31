// src/screens/ShowDetailsScreen.js

import React, { useState, useEffect } from 'react';
import { fetchShowDetails } from '../services/api';
import ShowDetails from '../components/ShowDetails';

const ShowDetailsScreen = ({ match }) => {
  const [show, setShow] = useState(null);
  const { showId } = match.params;

  useEffect(() => {
    const loadShowDetails = async () => {
      const data = await fetchShowDetails(showId);
      setShow(data);
    };
    loadShowDetails();
  }, [showId]);

  return show ? <ShowDetails show={show} /> : <div>Loading...</div>;
};

export default ShowDetailsScreen;
