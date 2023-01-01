import axios from 'axios';

const url = 'http://localhost:3000/reviews';

export const fetchReviews = () => axios.get(url);
