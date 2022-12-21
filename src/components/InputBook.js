/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Form, Button, Container } from 'react-bootstrap';
import { bookAdd } from '../redux/books/books';

const InputBook = () => {
  const dispatch = useDispatch();
  const book = {
    id: uuidv4(),
    title: '',
    author: '',
    category: 'Drama',
  };
  const [details, setDetails] = useState(book);

  const onChange = (e) => {
    const inputText = e.target.name;
    if (inputText === 'title') {
      setDetails({ ...details, title: e.target.value });
    } else {
      setDetails({ ...details, author: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookAdd(details));
    setDetails(book);
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
          name="title"
          value={details.title}
          onChange={onChange}
        />

        <Form.Label className="label">Author</Form.Label>
        <Form.Control
          type="text"
          className="input"
          placeholder="Author"
          name="author"
          value={details.author}
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
