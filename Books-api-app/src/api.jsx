import axios from 'axios';

const API_URL = 'https://reactnd-books-api.udacity.com/books';
const HEADERS = { 'Authorization': 'whatever-you-want' };

export const fetchBooks = async () => {
  const response = await axios.get(API_URL, { headers: HEADERS });
  return response.data.books;
};
