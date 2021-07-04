import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-paloma.herokuapp.com/',
});

export default api;