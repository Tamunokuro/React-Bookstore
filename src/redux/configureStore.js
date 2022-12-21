import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { createStoreHook } from 'react-redux';
import bookreducer from './books/books';
import categoryreducer from './categories/categories';

const reducer = combineReducers({
  books: bookreducer,
  category: categoryreducer,
});

const store = configureStore({ reducer });

export default store;
