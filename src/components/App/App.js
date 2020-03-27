import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideNav from '../SideNav/SideNav';
import Banner from '../Banner/Banner';
import Signup from '../Signup/Signup';
import NotFound from '../NotFound/NotFound';
import TravelerContext from '../../context/TravlerContext';
import PrivateRoute from '../../utils/PrivateRoute';
import PublicRoute from '../../utils/PublicRoute';
import Dashboard from '../Dashboard/Dashboard';
import ListItemDetails from  '../ListItemDetails/ListItemDetails';
import TripItemDetails from '../TripItemDetails/TripItemDetails';
import AddListForm from '../AddListForm/AddListForm';
import AddEventForm from '../AddEventForm/AddEventForm';
import AddTripsForm from '../AddTripsForm/AddTripsForm'
import LoginPage from '../../routes/LoginPage';
import TokenService from '../../services/token-service'
import LandingPage from '../../routes/LandingPage';
import EditListItemDetails from '../EditListItemDetails/EditListItemDetails'
import EditEventItem from '../EditEventItem/EditEventItem';

class App extends Component {
  state = {
    hastToken: TokenService.hasAuthToken(),
    lists: [],
    events: [],
    trips: [],
  }
  static contextType = TravelerContext


  handleTokenChange = () => {
    this.setState({ hasToken: TokenService.hasAuthToken() })
  }
  setupItems = (list, event, trip) => {
    this.setState({
      lists: list,
      events: event,
      trips: trip
    })
  }

  // List methods to update state
  setListItems = list => {
    this.setState({ lists: list })
  }

  addListItem = list => {
    this.setState({ lists: [list, ...this.state.lists ]})
  }

  deleteListItem = list_id => {
    const currrentLists = this.state.lists
    const newLists = currrentLists.filter(list => list.id !== list_id)
    setTimeout(() => {
      this.setState({ lists: newLists })
    }, 200)
  }
  // Event methods to update state
  setEventItems = event => {
    this.setState({ events: event })
  }
  addEventItem = event => {
    this.setState({ events: [event, ...this.state.events ]})
  }
  deleteEventItem = event_id => {
    const currrentEvents = this.state.events
    const newEvents = currrentEvents.filter(event => event.id !== event_id)
    setTimeout(() => {
      this.setState({ events: newEvents })
    }, 200)
  }
  editEventItem = updatedEvent => {
    this.setState({
      events: this.state.events.map(event => 
        (event.id !== updatedEvent.id) ? event : updatedEvent  
      )
    })
  }

  // Trip methods to update state
  setTripItems = trip => {
    this.setState({ trips: trip })
  }

  render() {
    // Global context for App
    const contextValue = {
      hasToken: this.state.hasToken,
      lists: this.state.lists,
      events: this.state.events,
      trips: this.state.trips,
      handleTokenChange: this.handleTokenChange,
      setListItems: this.setListItems,
      setEventItems: this.setEventItems,
      setTripItems: this.setTripItems,
      addListItem: this.addListItem,
      addEventItem: this.addEventItem,
      setupItems: this.setupItems,
      deleteListItem: this.deleteListItem,
      deleteEventItem: this.deleteEventItem,
      editEventItem: this.editEventItem,
    }
    return (
      <div className='App grid'>
        <TravelerContext.Provider value={contextValue}>
          <Header />
          <SideNav />
          <main className='main'>
            <Banner />
            <Switch>
              <Route exact path='/' component={LandingPage} />
              
              {/* PUBLIC ROUTES */}
              <PublicRoute path='/login' component={LoginPage} />
              <PublicRoute path='/signup' component={Signup} />
              
              {/* PRIVATE ROUTE */}
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              {/* LIST COMPONENT ROUTES */}
              <PrivateRoute path='/lists/:list_id' component={ListItemDetails} />
              <PrivateRoute path='/add-list' component={AddListForm} />
              <PrivateRoute path='/edit/:list_id' component={EditListItemDetails} />

              {/* EVENT COMPONENT ROUTES */}
              {/* <PrivateRoute path='/events/:event_id' component={EventItemDetails} /> */}
              <PrivateRoute path='/events/:event_id' component={EditEventItem} />
              <PrivateRoute path='/add-event' component={AddEventForm} />

              {/* TRIP COMPONENT ROUTES */}
              <PrivateRoute path='/trips/:trip_id' component={TripItemDetails} />
              <PrivateRoute path='/add-trips' component={AddTripsForm} />
              
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