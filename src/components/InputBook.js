/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const InputBook = (props) => {
  const [book, setBookInput] = useState({
    title: '',
    author: '',
  });

  const { addBook } = props;

  const onChange = (e) => {
    setBookInput({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title.trim() && book.author.trim()) {
      addBook(book.title, book.author);
      setBookInput({
        title: '',
        author: '',
      });
    } else {
      alert('Please fill input fields');
    }
  };

  return (
    <Container>
      <h5>Add New Book</h5>

      <Form className="mb-3 inputbook" onSubmit={handleSubmit}>
        <Form.Label className="label">Book</Form.Label>
        <Form.Control
          type="text"
          className="input"
          placeholder="Book title"
          value={book.title}
          name="title"
          onChange={onChange}
        />

        <Form.Label className="label">Author</Form.Label>
        <Form.Control
          type="text"
          className="input"
          placeholder="Author"
          value={book.author}
          name="author"
          onChange={onChange}
        />

        <Button
          variant="primary"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '3rem',
          }}
          type="submit"
        >
          Add Author
        </Button>
      </Form>
    </Container>
  );
};

export default InputBook;
