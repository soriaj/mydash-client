import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideNav from '../SideNav/SideNav';
import Login from '../Login/Login';
import Banner from '../Banner/Banner';
import Signup from '../Signup/Signup';
import NotFound from '../NotFound/NotFound'

class App extends Component {
  state = {
    hasToken: false
  }
  // need to conditionally render different header, sidenav and content on auth
  render() {
    return (
      <div className='App grid'>
        <Header />
        <SideNav />
        <main className='main'>
          <Banner />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;