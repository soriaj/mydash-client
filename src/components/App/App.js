import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class App extends Component {
  state = {
    isAuthenticated: false
  }
  render() {
    return (
      <main className='App grid'>
        <Header />
        <Footer />
      </main>
    );
  }
}

export default App;