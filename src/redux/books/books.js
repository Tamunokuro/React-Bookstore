import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import loadbooks, { BASE_URL, API_KEY } from '../../api/booksapi';

// action_tpes
const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';

const LOAD = 'books/loading';

const initialState = [];

// action creators
export function bookAdd(book) {
  return {
    type: BOOK_ADDED,
    payload: {
      book,
    },
  };
}

export const bookRemove = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    id,
  },
});

export const bookLoad = (books) => ({
  type: LOAD,
  payload: books,
});

export const loadbookThunk = createAsyncThunk(LOAD, async (_, { dispatch }) => {
  const response = await loadbooks();
  const books = Object.keys(response.data).map((key) => ({
    item_id: key,
    ...response.data[key][0],
  }));
  dispatch(({ type: LOAD, payload: books }));
});

export const postbookThunk = createAsyncThunk(BOOK_ADDED, async (book, { dispatch }) => {
  axios.post(`${BASE_URL}/${API_KEY}/books`, {
    item_id: book.id,
    title: book.title,
    author: book.author,
    category: book.category,
  });
  dispatch(({ type: BOOK_ADDED, payload: book }));
});

export const deletebookThunk = createAsyncThunk(BOOK_REMOVED, async (id, { dispatch }) => {
  await axios.delete(`${BASE_URL}/${API_KEY}/books/${id}`, {
    item_id: id,
  });
  dispatch(({ type: BOOK_REMOVED, payload: id }));
});

// reducers
export default function bookreducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_ADDED:
      return [
        ...state, action.payload,
      ];
    case BOOK_REMOVED:
      return [
        ...state.filter((book) => book.item_id !== action.payload),
      ];
    case LOAD:
      return [...state, ...action.payload];
    default:
      return state;
  }
}
