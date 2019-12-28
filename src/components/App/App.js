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

class App extends Component {
  state = {
    hasToken: false
  }
  static contextType = TravelerContext

  handleTokenChange = () => {
    this.setState({
      hasToken: !this.state.hasToken
    })
  }
  render() {
    const contextValue = {
      hasToken: this.state.hasToken,
      handleTokenChange: this.handleTokenChange,
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