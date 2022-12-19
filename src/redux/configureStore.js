import { configureStore } from '@reduxjs/toolkit';
import bookreducer from './books/books';
import categoryreducer from './categories/categories';

const reducer = {
  books: bookreducer,
  category: categoryreducer,
};

const store = configureStore({ reducer });

export default store;
