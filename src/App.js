import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}

export default App;
