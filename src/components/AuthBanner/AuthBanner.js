import React, { Component } from 'react';
import { faDeparture } from 'react-icons';
import { FaThermometerHalf } from 'react-icons/fa';
import './AuthBanner.css';


class AuthBanner extends Component {
    render() {
        return (
            <div className='main-banner-items'>
                <div className='banner-item'>
                    <div className='banner-item-total'>{'Trips'}</div>
                    <div>
                        <span><faDeparture className='fa-plane-departure' /></span>
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
        );
    }
}

export default AuthBanner;