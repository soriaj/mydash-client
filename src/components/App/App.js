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
import TravelerContext from '../../context/TravlerContext';
import PrivateRoute from '../../utils/PrivateRoute';
import Dashboard from '../Dashboard/Dashboard';
import ListItemDetails from  '../ListItemDetails/ListItemDetails';
import EventItemDetails from '../EventItemDetails/EventItemDetails';
import TripItemDetails from '../TripItemDetails/TripItemDetails';
import NewListForm from '../NewListForm/NewListForm';
import NewEventForm from '../NewEventForm/NewEventForm';

class App extends Component {
  state = {
    hasToken: false,
    lists: [],
    all_events: [],
    trips: [],
  }
  static contextType = TravelerContext

  handleTokenChange = () => {
    this.setState({ hasToken: !this.state.hasToken })
  }
  setListItems = list => {
    this.setState({ lists: list })
  }
  addListItem = list => {
    this.setState({ lists: [...this.state.lists, list ]})
  }
  setEventItems = event => {
    this.setState({ all_events: event })
  }
  addEvent = event => {
    /*
    if event matches day (ie. id: 12) then add to month_events.events
    */
    this.setState({ events: [...this.state.events, event ]})
  }
  setTripItems = trip => {
    this.setState({ trips: trip })
  }

  render() {
    const contextValue = {
      hasToken: this.state.hasToken,
      lists: this.state.lists,
      all_events: this.state.all_events,
      trips: this.state.trips,
      handleTokenChange: this.handleTokenChange,
      setListItems: this.setListItems,
      setEventItems: this.setEventItems,
      setTripItems: this.setTripItems,
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
              {/* LIST COMPONENT ROUTES */}
              <PrivateRoute path='/lists/:list_id' component={ListItemDetails} />
              <PrivateRoute path='/add-list' component={NewListForm} />

              {/* EVENT COMPONENT ROUTES */}
              <PrivateRoute path='/events/:date/:event_id' component={EventItemDetails} />
              <PrivateRoute path='/add-event' component={NewEventForm} />

              {/* TRIP COMPONENT ROUTES */}
              <PrivateRoute path='/trips/:trip_id' component={TripItemDetails} />
              
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