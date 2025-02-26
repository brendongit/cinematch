import axios from 'axios';

export const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'dccb0114f4b9fd4f74a7ca323c1ab60f',
    language: 'pt',
    include_adult: false,
  },
});
