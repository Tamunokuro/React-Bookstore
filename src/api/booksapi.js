import axios from 'axios';

export const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
export const API_KEY = 'fHiphCwuyHHVm2454qqN';

const loadbooks = async () => {
  const response = await axios.get(`${BASE_URL}/${API_KEY}/books`);
  return response;
};

export default loadbooks;
