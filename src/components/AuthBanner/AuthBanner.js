import React, { Component } from 'react';
import './AuthBanner.css';
import TravelerContet from '../../context/TravlerContext'
import TokenService from '../../services/token-service'
import Weather from '../Weather/Weather'

class AuthBanner extends Component {
    state = {
        location: null,
        loading: false,
        fullName: ''
    }
    static contextType = TravelerContet

    renderWelcome() {
        return (
            <div className='banner-title-container'>
                <div className='main-banner-title'>Welcome To MyDash</div>
            </div>
        )
    }
    renderContent() {
        const { user } = this.context
        const usersName = user.map(name => name.full_name)
        return (
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
        )
    }
    render() {
        return (
            <>
            {TokenService.hasAuthToken() ? this.renderContent() : this.renderWelcome()}
            </>
        );
    }
}

export default AuthBanner;