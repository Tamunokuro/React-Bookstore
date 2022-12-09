import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const InputBook = () => (
  <Container>
    <h5>Add New Book</h5>

    <Form className="mb-3 inputbook">
      <Form.Label className="label">Book</Form.Label>
      <Form.Control type="text" className="input" placeholder="Book title" />

      <Form.Label className="label">Author</Form.Label>
      <Form.Control type="text" className="input" placeholder="Author" />

      <Button
        variant="primary"
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '3rem',
        }}
      >
        Add Author
      </Button>

    </Form>
  </Container>

);

export default InputBook;
