import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideNav from '../SideNav/SideNav';

class App extends Component {
  state = {
    isAuthenticated: false
  }
  render() {
    return (
      <div className='App grid'>
        <Header />
        <SideNav />
        <Footer />
      </div>
    );
  }
}

export default App;