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
import data from '../../mockData/data';

class App extends Component {
  state = {
    hasToken: false,
    lists: [],
    all_events: [],
    trips: [],
  }
  static contextType = TravelerContext
  componentDidMount() {
    const { lists, all_events, trips } = data
    this.setItems(lists, all_events, trips)
  }
  handleTokenChange = () => {
    this.setState({ hasToken: !this.state.hasToken })
  }
  setItems = (list, event, trip) => {
    this.setState({ lists: list, all_events: event, trips: trip })
  }
  addListItem = list => {
    this.setState({ lists: [...this.state.lists, list ]})
  }

  render() {
    const contextValue = {
      hasToken: this.state.hasToken,
      lists: this.state.lists,
      all_events: this.state.all_events,
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
              <PrivateRoute path='/dashboard/lists/:list_id' component={ListItemDetails} />
              <PrivateRoute path='/dashboard/events/:date/:event_id' component={EventItemDetails} />
              
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