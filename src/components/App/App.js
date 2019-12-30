import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideNav from '../SideNav/SideNav';
import Login from '../Login/Login';
import Banner from '../Banner/Banner';
import Signup from '../Signup/Signup';
import Landing from '../Landing/Landing';
import NotFound from '../NotFound/NotFound';
import TravelerContext from '../../context/TravlerContext'
import PrivateRoute from '../../utils/PrivateRoute';
import Dashboard from '../Dashboard/Dashboard'

class App extends Component {
  state = {
    hasToken: false,
    lists: [],
    events: [],
    trips: [],
  }
  static contextType = TravelerContext

  handleTokenChange = () => {
    this.setState({ hasToken: !this.state.hasToken })
  }
  setItems = (list, event, trip) => {
    this.setState({ lists: list, events: event, trips: trip })
  }
  addListItem = list => {
    this.setState({ lists: [...this.state.lists, list ]})
  }

  render() {
    const contextValue = {
      hasToken: this.state.hasToken,
      lists: this.state.lists,
      events: this.state.events,
      trips: this.state.trips,
      handleTokenChange: this.handleTokenChange,
      setItems: this.setItems,
      addListItem: this.addListItem,
    }
    return (
      <div className='App grid'>
        <TravelerContext.Provider value={contextValue}>
          <Header />
          <SideNav />
          <main className='main'>
            <Banner />
            <Switch>
              <Route exact path='/' component={Landing} />
              {/* PUBLIC ROUTES */}
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              
              {/* PRIVATE ROUTE */}
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              
              {/* NOT FOUND ROUTE */}
              <Route component={NotFound} />
            </Switch>
          </main>
        </TravelerContext.Provider>
        <Footer />
      </div>
    );
  }
}

export default App;