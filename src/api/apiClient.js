import axios from 'axios';

import { API_BASE_URL } from '@env';
// Load environment variables
const BASE_URL = API_BASE_URL;

// Create an Axios instance with default configuration
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define a function for making a GET request
const get = (url, params = {}) => {
  return apiClient.get(url, { params });
};

// Define a function for making a POST request
const post = (url, data = {}) => {
  return apiClient.post(url, data);
};

// Define a function for making a PUT request
const put = (url, data = {}) => {
  return apiClient.put(url, data);
};

// Define a function for making a DELETE request
const remove = (url) => {
  return apiClient.delete(url);
};

export { get, post, put, remove };
