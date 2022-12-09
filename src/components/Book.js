import React from 'react';
import { Button, Container } from 'react-bootstrap';
import InputBook from './InputBook';

const Book = () => (
  <Container>
    <div className="singleBook">
      <div className="widgets">
        <small>Action</small>
        <h2>Jungle Justice</h2>
        <small>Suzzane Collins</small>
        <small className="tools">Comments | Remove | Edit</small>
      </div>
      <div className="book">
        <small>Current Chapter</small>
        <small>Chapter 17</small>
        <Button variant="primary">Update Progress</Button>
      </div>
    </div>
    <hr />
    <InputBook />
  </Container>
);
export default Book;
