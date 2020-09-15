import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../services/token-service'
import Landing from '../components/Landing/Landing'

class LandingPage extends Component {
   render() {
      return (
         <Route
            {...this.props}
            render={componentProps => (
            TokenService.hasAuthToken()
               ? <Redirect
                  to={{
                     pathname: '/dashboard',
                     state: { from: componentProps.location }
                  }}
               />
               : <Landing {...componentProps} />
            )}
         /> 
      );
   }
}

export default LandingPage;