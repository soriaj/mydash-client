import React, { Component } from 'react';
import './AuthBanner.css';
import Weather from '../Weather/Weather'
import ApiUsersService from '../../services/api-users-service';

class AuthBanner extends Component {
    state = {
        error: null,
        location: null,
        loading: true,
        user: []
    }

    componentDidMount() {
        ApiUsersService.getFullName()
            .then(user => this.setState({ user: user, loading: false }))
            .catch(error => this.setState({ error: error }))       
    }
    render() {
        const { user, loading } = this.state
        const usersName = user.map(name => name.full_name)
        return <>
            {loading 
                ? ('')
                : (
                    <>
                    <div className='banner-title-container'>
                        <div className='main-banner-title'>{`Welcome ${usersName}`}</div>
                    </div>
                    <div className='main-banner-items'>
                        <div className='banner-item'>
                            <Weather loc={this.state.location}/>
                        </div>
                    </div>
                    </>
                ) }
            </>        
    }

}

export default AuthBanner;