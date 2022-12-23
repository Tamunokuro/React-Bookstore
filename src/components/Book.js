import React from 'react';
// import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import BookList from './BookList';
import InputBook from './InputBook';

const Book = () => (
  <Container>
    <BookList />
    <InputBook />
  </Container>
);

export default Book;
