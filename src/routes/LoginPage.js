import React, { Component } from 'react';
import Login from '../components/Login/Login'

class LoginPage extends Component {
   static defaultProps = {
      location: {},
      history: {
        push: () => {},
      },
   }
   
   handleLoginSuccess = () => {
      const { location, history } = this.props
      const destination = (location.state || {}).from || '/dashboard'
      history.push(destination)
   }
   render() {
      return (
         <div className="login">
            <Login onLoginSuccess={this.handleLoginSuccess}/>
         </div>
      );
   }
}

export default LoginPage;