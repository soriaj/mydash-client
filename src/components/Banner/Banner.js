import React, { Component } from 'react';
import AuthBanner from '../AuthBanner/AuthBanner';
import './Banner.css';
import TokenService from '../../services/token-service'

class Banner extends Component {
    render() {
        return (
            <article className='main-banner'>
                <section className='main-banner-container'>
                    {TokenService.hasAuthToken() 
                    ? <AuthBanner />
                    : (
                        <>
                        <div className='banner-title-container'>
                            <div className='main-banner-title'>Welcome To MyDash</div>
                        </div>
                        </>
                    )}
                </section>
            </article>
        );
    }
}

export default Banner;