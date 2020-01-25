import React, { Component } from 'react';
import { FaThermometerHalf, FaPlaneDeparture } from 'react-icons/fa';
import './AuthBanner.css';
import TravelerContet from '../../context/TravlerContext'
import TokenService from '../../services/token-service'


class AuthBanner extends Component {
    state = {
        error: null,
    }
    static contextType = TravelerContet
    componentDidMount() {
        // Weather API
    }
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
                    <div className='banner-item-total'>{'Trips'}</div>
                    <div>
                        <span><FaPlaneDeparture className='fa-plane-departure' /></span>
                        <span className='list-item-title'>Trips</span>
                    </div>
                </div>
                <div className='banner-item'>
                    <div className='banner-item-total'>{'Weather'}&deg;</div>
                    <div>
                        <span><FaThermometerHalf className='fa-thermometer-half' /></span>
                        <span className='list-item-title'>{'Location'}</span>
                    </div>
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