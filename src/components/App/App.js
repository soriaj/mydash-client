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
import AddListForm from '../AddListForm/AddListForm';
import AddEventForm from '../AddEventForm/AddEventForm';
import LoginPage from '../../routes/LoginPage';
import TokenService from '../../services/token-service'
import LandingPage from '../../routes/LandingPage';
import EditEventItem from '../EditEventItem/EditEventItem';
import Events from '../Events/Events'
import Transactions from '../Transactions/Transactions'
import AddFinanceTransaction from '../AddFinanceTransaction/AddFinanceTransaction'
import EditFinanceTransaction from '../EditFinanceTransaction/EditFinanceTransaction'
import ApiBalancesService from '../../services/api-balance-service'

class App extends Component {
  state = {
    hastToken: TokenService.hasAuthToken(),
    lists: [],
    events: [],
    finances: [],
    balances: [],
    user: []
  }
  static contextType = TravelerContext
  componentDidMount() {
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);    
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
  }
  // Set isDesktop state based on screen size
  updatePredicate = () => {
      this.setState({ isDesktop: window.innerWidth > 1024 });
  }

  handleTokenChange = () => {
    this.setState({ hasToken: TokenService.hasAuthToken() })
  }
  
  // User Items
  setUserItems = users => {
    this.setState({ user: users })
  }
  // List items
  setListItems = list => {
    this.setState({ lists: list })
  }
  // Add Items
  addListItem = list => {
    this.setState({ lists: [list, ...this.state.lists ]})
  }
  // Delete Items
  deleteListItem = list_id => {
    const currrentLists = this.state.lists
    const newLists = currrentLists.filter(list => list.id !== list_id)
    setTimeout(() => {
      this.setState({ lists: newLists })
    }, 200)
  }

  // Event items
  setEventItems = event => {
    let eventsDateUpdated = []
    for(const {id, date, event_name, event_loc, description} of event) {
      eventsDateUpdated.push(
        {
          id, 
          date,
          event_name, 
          event_loc, 
          description
        }
      )
    }
    this.setState({ events: eventsDateUpdated })
  }
  addEventItem = event => {
    this.setState({ events: [...this.state.events, event ]})
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

  // Finance Items
  setFinanceItems = finanace => {
    this.setState({ finances: finanace })
  }
  addFinananceItem = transaction => {
    this.setState({ finances: [...this.state.finances, transaction] })
  }
  deleteFinanceItem = transaction_id => {
    const currrentFinances = this.state.finances
    const newFinances = currrentFinances.filter(trx => trx.id !== transaction_id)
    setTimeout(() => {
      this.setState({ finances: newFinances })
    }, 200)
  }

  // Balance Items
  setBalanceItems = balance => {
    this.setState({ balances: balance })
  }

  editBalance = updatedBalance => {
    this.setState({
      balances: this.state.balances.map(balance => 
        (balance.id !== updatedBalance.id) ? balance : updatedBalance
      )
    })
  }
  updateBalance = () => {
    ApiBalancesService.getBalances()
      .then(balance => this.setBalanceItems(balance))
      .catch(error => this.setState({error : error }))
  }

  render() {
    // Global context for App
    const contextValue = {
      hasToken: this.state.hasToken,
      lists: this.state.lists,
      events: this.state.events,
      finances: this.state.finances,
      balances: this.state.balances,
      user: this.state.user,
      handleTokenChange: this.handleTokenChange,
      setUserItems: this.setUserItems,
      setListItems: this.setListItems,
      setEventItems: this.setEventItems,
      setFinanceItems: this.setFinanceItems,
      setBalanceItems: this.setBalanceItems,
      editBalance: this.editBalance,
      addListItem: this.addListItem,
      addEventItem: this.addEventItem,
      addFinananceItem: this.addFinananceItem,
      deleteFinanceItem: this.deleteFinanceItem,
      deleteListItem: this.deleteListItem,
      deleteEventItem: this.deleteEventItem,
      editEventItem: this.editEventItem,
      updateBalance: this.updateBalance
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
              <PublicRoute exact path='/login' component={LoginPage} />
              <PublicRoute exact path='/signup' component={Signup} />
              
              {/* PRIVATE ROUTE */}
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              {/* LIST COMPONENT ROUTES */}
              <PrivateRoute path='/lists/:list_id' component={ListItemDetails} />
              <PrivateRoute path='/add-list' component={AddListForm} />

              {/* EVENT COMPONENT ROUTES */}
              <PrivateRoute exact path='/events' component={Events} />
              <PrivateRoute path='/events/:event_id' component={EditEventItem} />
              <PrivateRoute path='/add-event' component={AddEventForm} />
              
              {/* FINANCE COMPONENT ROUTES */}
              <PrivateRoute path='/add-transaction' component={AddFinanceTransaction} />
              <PrivateRoute path='/transactions/:transaction_id' component={EditFinanceTransaction} />
              <PrivateRoute path='/transactions' component={Transactions} />
              
              {/* NOT FOUND ROUTE */}
              <Route component={NotFound} />
            </Switch>
          </main>
        </TravelerContext.Provider>
        {this.state.isDesktop && <Footer />}
      </div>
    );
  }
}

export default App;