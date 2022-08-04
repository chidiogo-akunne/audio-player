import axios from 'axios';

const API_URL = 'https://raw.githubusercontent.com';

export const fetcher = axios.create({
  baseURL: API_URL
});
