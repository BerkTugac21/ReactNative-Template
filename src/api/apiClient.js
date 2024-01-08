import axios from 'axios';

// Load environment variables
import { API_BASE_URL } from '@env';

// Create an Axios instance with default configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

const get = async (url, params = {}) => {
  try {
    const response = await apiClient.get(url, { params });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const post = async (url, data = {}, config = {}) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    ...config.headers,
  };

  try {
    const response = await apiClient.post(url, data, { headers });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const put = async (url, data = {}) => {
  try {
    const response = await apiClient.put(url, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const remove = async (url) => {
  try {
    const response = await apiClient.delete(url);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export { get, post, put, remove };
