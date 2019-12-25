import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

class App extends Component {
  state = {
    isAuthenticated: false
  }
  render() {
    return (
      <main className='App grid'>
        <Header />
      </main>
    );
  }
}

export default App;