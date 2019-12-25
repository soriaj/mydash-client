import React, { Component } from 'react';
import AuthBanner from '../AuthBanner/AuthBanner';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <article class='main-banner'>
                <section className='main-banner-container'>
                    <div className='banner-title-container'>
                        <div className='main-banner-title'>Welcome Traveler</div>
                    </div>
                    <AuthBanner />
                </section>
            </article>
        );
    }
}

export default Banner;