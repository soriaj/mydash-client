import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideNav from '../SideNav/SideNav';
import Login from '../Login/Login';
import Banner from '../Banner/Banner';


class App extends Component {
  state = {
    isAuthenticated: false
  }
  render() {
    return (
      <div className='App grid'>
        <Header />
        <SideNav />
        <main className='main'>
          <Banner />
          <Switch>
            <Route>
              <Login exact path='/login' />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;