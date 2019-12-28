import React, { Component } from 'react';
import AuthBanner from '../AuthBanner/AuthBanner';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <article className='main-banner'>
                <section className='main-banner-container'>
                    <AuthBanner />
                </section>
            </article>
        );
    }
}

export default Banner;