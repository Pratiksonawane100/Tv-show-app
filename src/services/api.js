// src/services/api.js

import axios from 'axios';

const API_BASE_URL = 'https://api.tvmaze.com';

const fetchShows = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/shows?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching shows:', error);
    throw error;
  }
};

const fetchShowDetails = async (showId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/shows/${showId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for show ${showId}:`, error);
    throw error;
  }
};

export { fetchShows, fetchShowDetails };
