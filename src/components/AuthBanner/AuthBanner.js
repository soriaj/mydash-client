import React, { Component } from 'react';
import './AuthBanner.css';
import TravelerContet from '../../context/TravlerContext'
import TokenService from '../../services/token-service'
import Weather from '../Weather/Weather'

class AuthBanner extends Component {
    state = {
        location: null,
        loading: false
    }
    static contextType = TravelerContet

    renderWelcome() {
        return (
            <div className='banner-title-container'>
                <div className='main-banner-title'>Welcome Traveler</div>
            </div>
        )
    }
    renderContent() {
        return (
            <>
            <div className='banner-title-container'>
                <div className='main-banner-title'>Welcome Username</div>
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